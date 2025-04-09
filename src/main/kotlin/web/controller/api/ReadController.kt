package web.controller.api

import book.model.Book
import book.model.BookChapter
import book.model.BookSource
import book.util.GSON
import book.util.fromJsonArray
import book.webBook.WBook
import book.webBook.localBook.LocalBook
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import kotlinx.coroutines.runBlocking
import org.apache.ibatis.solon.annotation.Db
import org.noear.solon.annotation.Controller
import org.noear.solon.annotation.Inject
import org.noear.solon.annotation.Mapping
import org.noear.solon.annotation.Path
import org.noear.solon.core.handle.Context
import org.noear.solon.core.util.DataThrowable
import org.noear.solon.data.annotation.Cache
import org.noear.solon.data.annotation.CacheRemove
import org.noear.solon.data.cache.CacheService
import org.noear.solon.web.cors.annotation.CrossOrigin
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import web.mapper.BookCacheMapper
import web.mapper.BooklistMapper
import web.response.*
import web.service.MyCacheService
import web.util.SslUtils
import web.util.read.BookContent
import web.util.read.getlist
import java.io.ByteArrayOutputStream
import java.net.HttpURLConnection
import java.net.URL
import kotlin.concurrent.thread


@Controller
@Mapping(routepath)
@CrossOrigin(origins = "*")
open class ReadController : BaseController() {

    @Db("db")
    @Inject
    lateinit var booklistMapper: BooklistMapper

    @Inject
    lateinit var bookCacheMapper: BookCacheMapper

    @Inject
    lateinit var cacheService: CacheService

    companion object {
        private val logger: Logger = LoggerFactory.getLogger(BaseController::class.java)

        fun getChapterListbycache(url: String,userid:String): List<BookChapter>? {
            val key = "getChapterList:${url}"
            val type = object : TypeToken<List<BookChapter>?>() {}.type
            var re: List<BookChapter>? = MyCacheService.get(key, type,userid)
            if (re != null && re.size > 0) {
                logger.info("检测到目录缓存：${url}")
                val lastCheckTime= re[0].lastCheckTime?:0
                if(System.currentTimeMillis() - lastCheckTime > 24*60*60*1000){
                    logger.info("目录缓存过期：${url}")
                    re=null;
                }
            }
            return re
        }

        fun removeChapterListbycache(url: String,userid:String) {
            val key = "getChapterList:${url}"
            MyCacheService.remove(key,userid)
        }

        fun setChapterListbycache(url: String, re: List<BookChapter>,userid:String) {
            val key = "getChapterList:${url}"
            if (re.size > 0) {
                re[0].lastCheckTime= System.currentTimeMillis()
                MyCacheService.set(key, re,userid)
            }
        }

        fun getBookContentbycache(url: String, index: Int,userid:String): String? {
            val key = "getBookContent:${url},index:${index}"
            val re: String? = MyCacheService.get(key, String::class.java,userid)
            /* if (re != null && re.isNotEmpty()) {
                //logger.info("检测到正文缓存：${url},index:${index}")
            }*/
            return re
        }

        fun setBookContentbycache(url: String, re: String, index: Int,userid:String) {
            val key = "getBookContent:${url},index:${index}"
            if (re.length > 50) {
                logger.info("添加缓存${key}")
                MyCacheService.set(key, re,userid)
            }
        }

        fun removeBookContentbycache(url: String, index: Int,userid:String) {
            val key = "getBookContent:${url},index:${index}"
            logger.info("删除缓存${key}")
            MyCacheService.remove(key,userid)
        }

        fun removeallBookContentbycache(url: String,userid:String) {
            MyCacheService.removeBookContentbycache(url,userid)
        }

        fun removeBookcache(url: String,userid:String) {
            val key = "getBook:${url}"
            MyCacheService.remove(key,userid)
        }


        fun getBookbycache(url: String,userid:String): Book? {
            val key = "getBook:${url}"
            val re: Book? = MyCacheService.get(key, Book::class.java,userid)
            if (re != null) {
                logger.info("检测到书本缓存：${url}")
            }
            return re
        }

        fun setBookbycache(url: String, book: Book,userid:String) {
            val key = "getBook:${url}"
            MyCacheService.set(key, book,userid)
        }
    }


    @Mapping("/getChapterList")
    fun getChapterList(accessToken: String?, bookSourceUrl: String?, url: String?) = runBlocking {
        if (url == null) throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        getChapterListbycache(url,user!!.id!!)?.let {
            logger.info("目录缓存使用成功")
            throw DataThrowable().data(JsonResponse(true).Data(it))
        }
        logger.info("书本：${url}，查询目录")
        var chapters:List<BookChapter>?=null
        runCatching {
            when {
                bookSourceUrl == "loc_book" -> getlist(url).let {
                    setChapterListbycache(url, it,user.id!!)
                    chapters=it;
                }

                else -> {
                    val (source, jp) = getsource(accessToken, bookSourceUrl,user)
                    if (jp != null) {
                        throw DataThrowable().data(jp)
                    }
                    getlist(url, source!!, user.id!!, accessToken ?: "").let {
                        setChapterListbycache(url, it,user.id!!)
                        runCatching {
                            var book = booklistMapper.getbook(user.id!!, url)
                            if(book != null) {
                                val lastCheckTime=System.currentTimeMillis()
                                val lastCheckCount=it.size
                                if (it.size != book.totalChapterNum ){
                                    val totalChapterNum=it.size
                                    val latestChapterTitle=it[it.size-1].title
                                    val latestChapterTime=System.currentTimeMillis()
                                    booklistMapper.updatetime(book.id!!,latestChapterTitle,latestChapterTime,lastCheckTime,lastCheckCount, totalChapterNum )
                                    bookCacheMapper.getCache(book.userid!!,book.id!!).let {
                                        if(it!=null){
                                            bookCacheMapper.updatetime(it.id!!,totalChapterNum)
                                        }
                                    }
                                }else{
                                    booklistMapper.updatetimefail(book.id!!,lastCheckTime,lastCheckCount)
                                }
                            }
                        }
                        chapters=it
                    }
                }
            }
        }.getOrElse {
            throw DataThrowable().data(JsonResponse(false, it.message?:"目录加载出错"))
        }
        JsonResponse(true).Data(chapters)
    }


    @Mapping("/getBookContent")
    fun getBookContent(
        accessToken: String?, bookSourceUrl: String?, url: String?, index: Int?, type: Int?
    ) = runBlocking {
        if (url == null) throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        if (type != 1) {
            val txt = getBookContentbycache(url, index ?: 0,user.id!!)
            if (txt != null && txt.isNotEmpty()) {
                logger.info("正文缓存使用成功")
                throw DataThrowable().data(JsonResponse(true).Data(txt))
            }
        }
        logger.info("书本：${url}，查询：${index}")
        when {
            bookSourceUrl == "loc_book" -> {
                var chapterlist = getChapterListbycache(url,user.id!!)
                if (chapterlist == null) {
                    chapterlist = getlist(url).also {
                        setChapterListbycache(url, it,user.id!!)
                    }
                }
                val book = Book.initLocalBook(url, url, "")
                LocalBook.getContent(book, chapterlist[index ?: 0]).toString().let {
                    setBookContentbycache(url, it, index ?: 0,user.id!!)
                    JsonResponse(true).Data(it)
                }
            }

            else -> {
                val (source, jp) = getsource(accessToken, bookSourceUrl,user)
                if (jp != null) {
                    throw DataThrowable().data(jp)
                }
                val re = BookContent.getbookcontent(accessToken ?: "", user, source!!, url, index ?: 0, type ?: 0)
                JsonResponse(true).Data(re)
            }
        }
    }

    @Mapping("/fetchBookContent")
    fun fetchBookContent(accessToken: String?,url: String?, index: Int?) = runBlocking {
        if (url == null) throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        removeBookContentbycache(url, index ?: 0,user.id!!)
        JsonResponse(true)
    }

    @Mapping("/fetchBook")
    fun fetchBook(accessToken: String?,url: String?) = runBlocking {
        if (url == null) throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!

        removeBookcache(url,user.id!!)
        removeChapterListbycache(url,user.id!!);
        removeallBookContentbycache(url,user.id!!)
        val booktolist=booklistMapper.getbook(user.id!!,url)
        if(booktolist != null){
            bookCacheMapper.getCache(user.id!!,booktolist.id!!).also {
                if(it != null){
                    bookCacheMapper.deleteById(it.id)
                }
            }
        }
        JsonResponse(true)
    }


    @Mapping("/saveBookProgress")
    open fun saveBookProgress(accessToken: String?, pos: Double?, url: String?, index: Int?) = runBlocking {
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        val book = booklistMapper.getbook(user.id!!, url.also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        }!!).also {
            if (it == null) {
                //println("添加阅读进度到内存${url}")
                cacheService.store("indexuerid:${user.id},bookurl:${url}",index,10*30);
                throw DataThrowable().data(JsonResponse(true))
            }
        }!!
        var read = book.readchapter ?: ""
        val s = read.split(",").toMutableSet()
        s.add((index ?: 0).toString())
        read = s.joinToString(",")
        if (book.origin == "loc_book") {
            val list: List<BookChapter> = getChapterListbycache(url!!,user.id!!) ?: getlist(url)
            booklistMapper.updatepos(
                book.id!!,
                list[index ?: 0].title,
                index ?: 0,
                pos ?: 0.0,
                System.currentTimeMillis(),
                read
            )
        } else {
            val source = getsource(book.origin!!,user)
            val list: List<BookChapter> =
                getChapterListbycache(url!!,user.id!!) ?: getlist(url, source!!, user.id!!, accessToken ?: "")
            booklistMapper.updatepos(
                book.id!!,
                list[index ?: 0].title,
                index ?: 0,
                pos ?: 0.0,
                System.currentTimeMillis(),
                read
            )
        }
        JsonResponse(true)
    }


    @Mapping("/getBookread")
    fun getBookread(accessToken: String?, url: String?) = runBlocking {
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        val book = booklistMapper.getbook(user.id!!, url.also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        }!!).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NO_BOOK))
        }!!
        val read = book.readchapter ?: ""
        val s = read.split(",").toMutableSet()
        val list: MutableSet<Any> = mutableSetOf()
        s.forEach {
            if (it != "") {
                list.add(it)
            }
        }
        JsonResponse(true).Data(list.joinToString(","))
    }


    @Mapping("/setBookSource")
    open fun setBookSource(
        accessToken: String?, bookUrl: String?, newUrl: String?, bookSourceUrl: String?
    ) = runBlocking {
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        val book = booklistMapper.getbook(user.id!!, bookUrl.also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        }!!).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NO_BOOK))
        }!!
        val source = getsource(bookSourceUrl?:"",user)
        val webBook = WBook(source!!.json ?: "", user.id!!, accessToken, false)
        var new: Book? = null
        runCatching {
            new = webBook.getBookInfo(newUrl ?: "", canReName = true)
        }.onFailure {
            webBook.searchBook(book.name ?: " ", 1).forEach {
                if (it.bookUrl == newUrl) {
                    new = it.toBook()
                }
            }
            if (new != null) {
                booklistMapper.updateById(book.bookto(new!!,false))
            } else {
                throw DataThrowable().data(JsonResponse(false, NO_BOOK))
            }
        }.onSuccess {
            booklistMapper.updateById(book.bookto(new!!,false))
        }
        bookCacheMapper.getCache(user.id!!,book.id!!).also {
            if(it != null){
                bookCacheMapper.deleteById(it.id)
            }
        }
        JsonResponse(true).Data(book)
    }

   // @Cache(key = "getBookshelf:\${accessToken}", tags = "getBookshelf", seconds = 20)
    @Mapping("/getBookshelf")
    open fun getBookshelf(accessToken: String?,@Path v:Int) = run {
       if(v < 2){
           throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
       }else  if(v > 2){
           throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
       }
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        val book = booklistMapper.getbooklistbyuserid(user.id!!)
        book?.forEach {
            if (it.customCoverUrl != null && it.customCoverUrl!!.isNotBlank()) {
                it.coverUrl = it.customCoverUrl
            }
            if (it.customIntro != null && it.customIntro!!.isNotBlank()) {
                it.intro = it.customIntro
            }
            if (it.customIntro != null && it.customIntro!!.isNotBlank()) {
                it.intro = it.customIntro
            }
            if (it.durChapterPos == null) {
                it.durChapterPos = 0.0
            }
            if (it.durChapterPos!! > 2 || it.durChapterPos!! < 0) {
                it.durChapterPos = 0.0
            }
        }
       JsonResponse(true).Data(book)
    }

    //@Cache(key = "getBookSources", tags = "getBookSources", seconds = 600)
    @Mapping("/getBookSources")
    open fun getBookSources(accessToken: String?,isall: String?,@Path v:Int ) = run {
        if(v < 2){
            throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
        }else  if(v > 2){
            throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
        }
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        var source: List<web.model.BaseSource>? = null
        if(isall != null && isall == "1" && user.source == 1){
            source=getallBookSourcelist(user)
        }else{
            source=getBookSourcelist(true,user)
        }
        val list: MutableList<Map<String, Any?>> = mutableListOf()
        source.forEach {
            val s=BookSource.fromJson(it.json?:"").getOrNull()
            var loginUi=s?.loginUi;
            if(loginUi != null && loginUi.isNotEmpty()){
                kotlin.runCatching {
                    val r=GSON.fromJsonArray<Any>(loginUi).getOrNull()
                    loginUi= GSON.toJson(r)
                }
            }

            list.add(
                mapOf(
                    "bookSourceGroup" to s?.bookSourceGroup,
                    "loginUrl" to s?.loginUrl,
                    "loginUi" to loginUi,
                    "bookSourceName" to it.bookSourceName,
                    "bookSourceUrl" to it.bookSourceUrl,
                    "enabledExplore" to it.enabledExplore,
                    "enabled" to it.enabled
                )
            )
        }
        JsonResponse(true).Data(list)
    }


    @Cache(key = "ExploreUrl:\${bookSourceUrl},\${accessToken}", tags = "search\${accessToken}", seconds = 600)
    @Mapping("/getBookSourcesExploreUrl")
    open fun getBookSourcesExploreUrl(accessToken: String?, bookSourceUrl: String?) = runBlocking {
        val (user,source,jp)=getsourceuser(accessToken,bookSourceUrl)
        if(jp != null){
            throw DataThrowable().data(jp)
        }
        val booksource = BookSource.fromJson(source!!.json ?: "").getOrNull()
        booksource?.userid=user!!.id
        JsonResponse(true).Data(mapOf("checkKeyWord" to booksource?.ruleSearch?.checkKeyWord,"found" to booksource?.exploreKinds(), "loginUrl" to booksource?.loginUrl, "loginUi" to booksource?.loginUi))
    }

    @Mapping("/proypng")
    open fun proypng(ctx: Context, accessToken: String?, url: String?, header: String?) = run {
        if (accessToken == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        if (url.isNullOrBlank()) throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        val url = URL(url)
        SslUtils.ignoreSsl();
        val connection = url.openConnection() as HttpURLConnection
        connection.setRequestMethod("GET")
        runCatching {
            val json= Gson().fromJson<Map<String, String>>(header, Map::class.java)
            json.forEach{(k,v)->
                connection.setRequestProperty(k,v);
            }
        }
        val responseCode = connection.getResponseCode();
        //  读取响应
        if (responseCode == HttpURLConnection.HTTP_OK) { // 200表示请求成功
            val bos = ByteArrayOutputStream() //创建输出流对象
            connection.getInputStream().use {
                val b = ByteArray(4096)
                var len: Int
                while ((it.read(b).also { len = it }) != -1) {
                    bos.write(b, 0, len)
                }
            }
            ctx.contentType(connection.getHeaderField("Content-Type"))
            ctx.output(bos.toByteArray())
            ctx.flush()

        } else {
            logger.info("GET请求失败");
            JsonResponse(isSuccess = false,errorMsg ="GET请求失败")
        }

    }

    @Mapping("/getLoginInfo")
    open fun getLoginInfo(accessToken: String?, bookSourceUrl: String?) = run {
        val (user,source,jp)=getsourceuser(accessToken,bookSourceUrl)
        if(jp != null){
            throw DataThrowable().data(jp)
        }
        val bookSource = BookSource.fromJson(source!!.json ?: "").getOrNull()!!
        bookSource.userid = user!!.id
        bookSource.usertocken = accessToken
        var info = bookSource.getLoginInfo()
        if (info.isNullOrBlank()) {
            info = "{}"
        }
        JsonResponse(true).Data(info)
    }

    @Mapping("/getVariable")
    open fun getVariable(accessToken: String?, bookSourceUrl: String?) = run {
        val (user,source,jp)=getsourceuser(accessToken,bookSourceUrl)
        if(jp != null){
            throw DataThrowable().data(jp)
        }
        val bookSource = BookSource.fromJson(source!!.json ?: "").getOrNull()!!
        bookSource.userid = user!!.id
        bookSource.usertocken = accessToken
        var info = bookSource.getVariable()
        JsonResponse(true).Data(info)
    }

     @CacheRemove(tags = "search\${accessToken}")
    @Mapping("/setVariable")
    open fun setVariable(accessToken: String?, bookSourceUrl: String?, info: String?) = run {
         val (user,source,jp)=getsourceuser(accessToken,bookSourceUrl)
         if(jp != null){
             throw DataThrowable().data(jp)
         }
        val bookSource = BookSource.fromJson(source!!.json ?: "").getOrNull()!!
        bookSource.userid = user!!.id
        bookSource.usertocken = accessToken
        bookSource.setVariable(info)
        JsonResponse(true)
    }

    @Mapping("/getbookVariable")
    open fun getbookVariable(accessToken: String?, bookurl: String?) = run {
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        val book =Book(_bookUrl  =bookurl?:"");
        book.userid = user.id?:""
        val info = book.getbookVariable();
        JsonResponse(true).Data(info)
    }

    @CacheRemove(tags = "search\${accessToken}")
    @Mapping("/setbookVariable")
    open fun setbookVariable(accessToken: String?, bookurl: String?, info: String?) = run {
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        val book =Book(_bookUrl  =bookurl?:"");
        book.userid = user.id?:""
        book.setbookVariable(info?:"");
        JsonResponse(true)
    }

     @CacheRemove(tags = "search\${accessToken}")
    @Mapping("/putLoginInfo")
    open fun putLoginInfo(accessToken: String?, bookSourceUrl: String?, info: String?) = run {
         val (user,source,jp)=getsourceuser(accessToken,bookSourceUrl)
         if(jp != null){
             throw DataThrowable().data(jp)
         }
        val bookSource = BookSource.fromJson(source!!.json ?: "").getOrNull()!!
        bookSource.userid = user!!.id
        bookSource.usertocken = accessToken
        bookSource.putLoginInfo(info ?: "{}")
        kotlin.runCatching { bookSource.login() }
        JsonResponse(true)
    }

    @CacheRemove(tags = "search\${accessToken}")
    @Mapping("/action")
    open fun action(accessToken: String?, bookSourceUrl: String?, action: String?) = run {
        val (user,source,jp)=getsourceuser(accessToken,bookSourceUrl)
        if(jp != null){
            throw DataThrowable().data(jp)
        }
        val bookSource = BookSource.fromJson(source!!.json ?: "").getOrNull()!!
        bookSource.userid = user!!.id
        bookSource.usertocken = accessToken
        val js =bookSource.loginUrl + "\n$action"
        thread {  bookSource.evalJS(js) }
        JsonResponse(true)
    }


    @Mapping("/changebooktype")
    open fun changebooktype(accessToken: String?, bookUrl: String?, type: Int?) = runBlocking {
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        val book = booklistMapper.getbook(user.id!!, bookUrl.also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        }!!).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NO_BOOK))
        }!!
        var type: Int = type ?: 0
        if (type != 0 && type != 1 && type != 2) {
            type = 0
        }
        booklistMapper.changetype(book.id!!,type)
        JsonResponse(true)
    }
}