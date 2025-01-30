package web.controller.api

import book.model.Book
import book.model.BookChapter
import book.webBook.WBook
import book.webBook.exception.ConcurrentException
import book.webBook.localBook.LocalBook
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import kotlinx.coroutines.delay
import kotlinx.coroutines.runBlocking
import org.apache.ibatis.solon.annotation.Db
import org.noear.solon.annotation.Controller
import org.noear.solon.annotation.Inject
import org.noear.solon.annotation.Mapping
import org.noear.solon.core.util.DataThrowable
import org.noear.solon.data.annotation.Cache
import org.noear.solon.data.annotation.CacheRemove
import org.noear.solon.data.cache.CacheService
import org.noear.solon.web.cors.annotation.CrossOrigin
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import web.mapper.BooklistMapper
import web.response.*
import web.service.MyCacheService
import web.util.read.BookContent
import web.util.read.getlist


@Controller
@Mapping(routepath)
@CrossOrigin(origins = "*")
open class ReadController:BaseController() {

    @Db("db")
    @Inject
    lateinit var booklistMapper: BooklistMapper

    companion object{
        private  val logger: Logger = LoggerFactory.getLogger(BaseController::class.java)

        fun getChapterListbycache(url:String):List<BookChapter>? {
            var key="getChapterList:${url}"
            val type = object : TypeToken<List<BookChapter>?>() {}.type
            var re:List<BookChapter>? = MyCacheService.get(key,type)
            if(re!=null){
                logger.info("检测到目录缓存：${url}")
            }
            return  re
        }

        fun removeChapterListbycache(url:String) {
            var key="getChapterList:${url}"
            MyCacheService.remove(key)
        }

        fun setChapterListbycache(url:String,re:List<BookChapter>) {
            var key="getChapterList:${url}"
            if(re.size > 1){
                MyCacheService.set(key,re)
            }
        }

        fun getBookContentbycache(url:String,index:Int):String? {
            var key="getBookContent:${url},index:${index}"
            var re:String? =MyCacheService.get(key,String::class.java)
            if(re!=null && re.isNotEmpty()){
                logger.info("检测到正文缓存：${url}")
            }
            return  re
        }

        fun setBookContentbycache(url:String,re:String,index:Int) {
            var key="getBookContent:${url},index:${index}"
            if(re.length > 1000){
                MyCacheService.set(key,re)
            }
        }

        fun removeBookContentbycache(url:String,index:Int) {
            var key="getBookContent:${url},index:${index}"
            MyCacheService.remove(key)
        }

        fun getBookbycache(url:String):Book? {
            var key="getBook:${url}"
            var re:Book? =MyCacheService.get(key,Book::class.java)
            if(re!=null){
                logger.info("检测到书本缓存：${url}")
            }
            return  re
        }

        fun setBookbycache(url:String,book:Book) {
            var key="getBook:${url}"
            MyCacheService.set(key,book)
        }
    }


    @Mapping("/getChapterList")
    fun getChapterList(accessToken:String?,  bookSourceUrl:String?, url:String? )= runBlocking{
        if (url == null) throw DataThrowable().data(JsonResponse(false,NOT_BANK))
        var user=getuserbytocken(accessToken).also {
            if (it == null)throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }
        getChapterListbycache(url)?.let {
            logger.info("目录缓存使用成功")
            throw DataThrowable().data(JsonResponse(true).Data(it))
        }
        logger.info("书本：${url}，查询目录")
        when{
            bookSourceUrl == "loc_book"->getlist(url).let{
                setChapterListbycache(url,it)
                JsonResponse(true).Data(it)
            }
            else ->{
                val (source,jp)=getsource(accessToken,bookSourceUrl)
                if(jp != null){
                    throw DataThrowable().data(jp)
                }
                getlist(url,source!!,user!!.id!!,accessToken?:"").let{
                    setChapterListbycache(url,it)
                    JsonResponse(true).Data(it)
                }
            }
        }
    }


    @Mapping("/getBookContent")
    fun getBookContent( accessToken:String?,  bookSourceUrl:String?
                       , url:String?,index:Int?)=runBlocking{
        if (url == null) throw DataThrowable().data(JsonResponse(false,NOT_BANK))
        var txt= getBookContentbycache(url,index?:0)
        if(txt != null && txt.isNotEmpty()){
            logger.info("正文缓存使用成功")
            throw DataThrowable().data(JsonResponse(true).Data(txt))
        }
        logger.info("书本：${url}，查询：${index}")
        when{
            bookSourceUrl == "loc_book"->{
                var chapterlist=getChapterListbycache(url)
                if(chapterlist == null){
                    chapterlist=getlist(url).also{
                        setChapterListbycache(url,it)
                    }
                }
                val book = Book.initLocalBook(url, url, "")
                LocalBook.getContent(book,chapterlist[index?:0]).toString().let {
                    setBookContentbycache(url,it,index?:0)
                    JsonResponse(true).Data(it)
                }
            }
            else ->{
                val (user,source,jp)=getsourceuser(accessToken,bookSourceUrl)
                if(jp != null){
                    throw DataThrowable().data(jp)
                }
                var re= BookContent.getbookcontent(accessToken?:"",user!!,source!!,url,index?:0)
                JsonResponse(true).Data(re)
            }
        }
    }

    @Mapping("/fetchBookContent")
    fun fetchBookContent(url:String?,index:Int?)=runBlocking{
        if (url == null) throw DataThrowable().data(JsonResponse(false,NOT_BANK))
        removeBookContentbycache(url,index?:0)
        JsonResponse(true)
    }

    @CacheRemove(keys = "getBookshelf:\${accessToken}")
    @Mapping("/saveBookProgress")
    open fun saveBookProgress( accessToken:String?,pos:Double?,  url:String?,index:Int?)= runBlocking{
        var user=getuserbytocken(accessToken).also {
            if (it == null)throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        var book=booklistMapper.getbook(user.id!!,url.also {
            if (it == null) throw DataThrowable().data(JsonResponse(false,NOT_BANK))
        }!!).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NO_BOOK))
        }!!
        var read=book.readchapter?:""
        var s=read.split(",").toMutableSet()
        s.add((index?:0).toString())
        read=s.joinToString(",")
        if (book.origin == "loc_book"){
            var list:List<BookChapter> =getChapterListbycache(url!!)?:getlist(url!!)
            booklistMapper.updatepos(book.id!!,list[index?:0].title,index?:0,pos?:0.0,System.currentTimeMillis() ,read)
        }else{
            var source=bookSourcemapper.getBookSource(book.origin!!)
            var list:List<BookChapter> =getChapterListbycache(url!!)?:getlist(url!!,source!!,user!!.id!!,accessToken?:"")
            booklistMapper.updatepos(book.id!!,list[index?:0].title,index?:0,pos?:0.0,System.currentTimeMillis() ,read)
        }
        JsonResponse(true)
    }


    @Mapping("/getBookread")
    fun getBookread( accessToken:String?, url:String?)= runBlocking{
        var user=getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        var book=booklistMapper.getbook(user.id!!,url.also {
            if (it == null) throw DataThrowable().data(JsonResponse(false,NOT_BANK))
        }!!).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NO_BOOK))
        }!!
        var read=book.readchapter?:""
        var s=read.split(",").toMutableSet()
        var list:MutableSet<Any> = mutableSetOf()
        s.forEach{
            if(it != ""){
                list.add(it)
            }
        }
        JsonResponse(true).Data(list.joinToString(","))
    }

    @CacheRemove(keys = "getBookshelf:\${accessToken}")
    @Mapping("/setBookSource")
    open fun setBookSource( accessToken:String?,  bookUrl:String?
                      ,  newUrl:String?,bookSourceUrl:String?)=runBlocking{
        val user=getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        var book=booklistMapper.getbook(user.id!!,bookUrl.also {
            if (it == null) throw DataThrowable().data(JsonResponse(false,NOT_BANK))
        }!!).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NO_BOOK))
        }!!
        val source=getsource(bookSourceUrl)
        var webBook = WBook(source!!.json?:"",user.id!!,accessToken, false)
        var new:Book?=null
        runCatching {
             new=webBook.getBookInfo(newUrl?:"",canReName = true)
        }.onFailure {
           webBook.searchBook(book.name?:" ",1).forEach{
               if (it.bookUrl == newUrl){
                   new=it.toBook()
               }
           }
            if(new != null){
                booklistMapper.updateById(book.bookto(new!!))
            }else{
                throw DataThrowable().data(JsonResponse(false, NO_BOOK))
            }
        }.onSuccess {
            booklistMapper.updateById(book.bookto(new!!))
        }
        //println(Gson().toJson(new))
        JsonResponse(true).Data(book)
    }

    @Cache(key = "getBookshelf:\${accessToken}", tags = "getBookshelf", seconds = 20)
    @Mapping("/getBookshelf")
    open fun getBookshelf( accessToken:String?)=run{
        val user=getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        var book=booklistMapper.getbooklistbyuserid(user.id!!)
        book?.forEach{
            if (it.customCoverUrl != null && it.customCoverUrl!!.isNotBlank()) {
                it.coverUrl = it.customCoverUrl
            }
            if (it.customIntro != null && it.customIntro!!.isNotBlank()) {
                it.intro = it.customIntro
            }
            if (it.customIntro != null && it.customIntro!!.isNotBlank()) {
                it.intro = it.customIntro
            }
        }
        JsonResponse(true).Data(book)
    }

    @Cache(key = "getBookSources", tags = "getBookSources", seconds = 600)
    @Mapping("/getBookSources")
    open fun getBookSources()=run{
        var source=bookSourcemapper.getBookSourcelist(true)
        var list:MutableList<Map<String,Any?>> = mutableListOf()
        source?.forEach {
            list.add(mapOf("bookSourceName" to it.bookSourceName ,"bookSourceUrl" to it.bookSourceUrl ,"enabledExplore" to it.enabledExplore))
        }
        JsonResponse(true).Data(list)
    }


    @Cache(key = "ExploreUrl:\${bookSourceUrl},\${accessToken}", tags = "ExploreUrl", seconds = 600)
    @Mapping("/getBookSourcesExploreUrl")
    open fun getBookSourcesExploreUrl(accessToken:String?,bookSourceUrl:String?)= runBlocking{
        val user=getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        val source=getsource(bookSourceUrl.also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        }).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NOT_SOURCE))
        }
        if ((source!!.exploreUrl?:"").contains("<js>") || (source!!.exploreUrl?:"").contains("@js")  ){
            var webBook = WBook(source!!.json?:"",user!!.id!!,accessToken, false)
            return@runBlocking JsonResponse(true).Data(webBook.getexploreUrl())
        }
        JsonResponse(true).Data(source!!.exploreUrl)
    }
}