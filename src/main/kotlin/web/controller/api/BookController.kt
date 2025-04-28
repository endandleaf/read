package web.controller.api

import book.model.Book
import book.model.SearchBook
import book.util.*
import book.util.help.CookieStore
import book.webBook.WBook
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import kotlinx.coroutines.runBlocking
import org.apache.ibatis.solon.annotation.Db
import org.noear.solon.annotation.*
import org.noear.solon.core.util.DataThrowable
import org.noear.solon.data.annotation.Cache
import org.noear.solon.data.annotation.CacheRemove
import org.noear.solon.data.annotation.Tran
import org.noear.solon.web.cors.annotation.CrossOrigin
import web.controller.api.ReadController.Companion.setBookbycache
import web.controller.api.ReadController.Companion.setChapterListbycache
import web.mapper.BookCacheMapper
import web.mapper.BookGroupMapper
import web.mapper.BooklistMapper
import web.model.BookCache
import web.model.BookGroup
import web.model.Booklist
import web.response.*
import web.util.ResponseManager
import web.util.hash.EncryptUtils
import web.util.read.Bookcache
import web.util.read.getlist
import web.util.read.updatebook
import java.io.File
import kotlin.concurrent.thread


@Controller
@Mapping(routepath)
@CrossOrigin(origins = "*")
open class BookController:BaseController() {

    @Db("db")
    @Inject
    lateinit var booklistMapper: BooklistMapper

    @Inject
    lateinit var bookGroupMapper: BookGroupMapper

    @Inject
    lateinit var bookCacheMapper: BookCacheMapper

    fun search(accessToken:String?, bookSourceUrl:String?, page:Int?, key:String?,type:Int)=runBlocking{
        val (user,source,jp)=getsourceuser(accessToken,bookSourceUrl)
        if(jp != null){
            throw DataThrowable().data(jp)
        }
        val webBook = WBook(source!!.json?:"",user!!.id!!,accessToken, false)
        var re:List<SearchBook>  = arrayListOf()
        runCatching {
            when(type){
                1->{
                    logger.info ("searchBook")
                    re=webBook.searchBook(key?:"", page?:0)
                }
                2->{
                    logger.info ("exploreBook")
                    re=webBook.exploreBook(key?:"", page?:0)
                }
                else -> throw Exception("search type not supported")
            }
        }.onFailure {
            it.printStackTrace()
            throw DataThrowable().data(JsonResponse(false, it.message?:"搜索出错"))
        }
        if(re.size == 0 &&( page == 1 || page == 0)){
            throw DataThrowable().data(JsonResponse(false,"search is empty"))
        }
        Gson().toJson(JsonResponse(true).Data(re))
    }

    @Cache(key = "searchBook:\${accessToken},\${bookSourceUrl},\${page},\${key}", tags = "search\${accessToken}", seconds = 600)
    @Mapping("/searchBook")
    open fun searchBook(accessToken:String?, bookSourceUrl:String?, page:Int?, key:String? )= search(accessToken,bookSourceUrl,page, key,1)

    @Cache(key = "exploreBook:\${accessToken},\${bookSourceUrl},\${page},\${ruleFindUrl}", tags = "search\${accessToken}", seconds = 60)
    @Mapping("/exploreBook")
    open fun exploreBook( accessToken:String?,bookSourceUrl:String?, page:Int?, ruleFindUrl:String? ) = search(accessToken,bookSourceUrl,page, ruleFindUrl,2)



    @Mapping("/saveBook")
    open fun saveBook( accessToken:String?,book: SearchBook,useReplaceRule: Int) = runBlocking{
        with(book){
            if (bookUrl.isBlank() || name.isBlank()){
                throw DataThrowable().data(JsonResponse(false,NOT_BANK))
            }
        }
        val (user,source,jp)=getsourceuser(accessToken,book.origin)
        if(jp != null){
            throw DataThrowable().data(jp)
        }
        val webBook = WBook(source!!.json ?: "", user!!.id!!, accessToken, false)
        val booktolist=Booklist.tobooklist(book,user.id!!)
        var new: Book? = null
        runCatching {
            new = webBook.getBookInfo(book.bookUrl, canReName = true)
        }.onFailure {
            return@runBlocking JsonResponse(false,BOOKSEARCHERROR)
        }
        setBookbycache(book.bookUrl,new!!,user.id!!)
        if (booklistMapper.getbook(user.id!!,booktolist.bookUrl!!) != null){
            return@runBlocking JsonResponse(false,BOOKIS)
        }
        new!!.type=book.type
        booklistMapper.insert(booktolist.bookto(new!!,false).apply {
            this.useReplaceRule=(useReplaceRule == 1)
        })
        thread {
            updatebook(booktolist, source,user.id!!)
        }
        JsonResponse(true,SUCCESS)
    }

    @Mapping("/saveBooks")
    open fun saveBooks( accessToken:String?, @Body content:String) = runBlocking{
        val user=getuserbytocken(accessToken).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
            }
        }!!
        if(content.isEmpty()){
            throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        }
        val books= GSON.fromJsonArray<Book>(content).getOrNull()?:listOf()

        var num=0;
        for (book in books){
            if(book.origin == "loc_book"){
                continue
            }
            if (book.bookUrl.isBlank() || book.name.isBlank()){
                continue
            }
            if (booklistMapper.getbook(user.id!!,book.bookUrl) != null){
                continue
            }
            var type=0;
            when(book.type){
                32,1 ->{
                    type=1
                }
                64,2 ->{
                    type=2
                }
                else ->{
                    type=0
                }
            }
            if (booklistMapper.getbooklistbynametype(user.id!!,book.name,book.author,type).isNotEmpty()){
                continue
            }
            val booktolist=Booklist.tobooklist(book,user.id!!)
            num+=booklistMapper.insert(booktolist.bookto(book, canchangeindex = true))
        }
        JsonResponse(true, errorMsg = "共添加${num}本书")
    }

    @Mapping("/refreshBook")
    open fun refreshBook( accessToken:String?,bookurl: String?) = runBlocking{
        val user=getuserbytocken(accessToken).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
            }
        }!!
        if (bookurl.isNullOrBlank()){
            throw DataThrowable().data(JsonResponse(false,NOT_BANK))
        }
        val book=booklistMapper.getbook(user.id!!,bookurl).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NO_BOOK))
            }
        }!!
        if(book.origin == "loc_book" ){
            return@runBlocking JsonResponse(true,SUCCESS).Data(book)
        }
        val source = getsource(book.origin?:"",user).also {
            if (it == null){
                throw DataThrowable().data(JsonResponse(false,NOT_SOURCE))
            }
        }
        val webBook = WBook(source!!.json ?: "", user.id!!, accessToken, false)
        var new: Book? = null
        runCatching {
            new = webBook.getBookInfo(book.bookUrl!!, canReName = true).also {   setBookbycache(book.bookUrl!!,it,user.id!!) }
        }.onFailure {
            return@runBlocking JsonResponse(false,BOOKSEARCHERROR)
        }
        runCatching {
            val chapters=getlist(book.bookUrl!!, source, user.id!!, accessToken ?: "").also {
                setChapterListbycache(book.bookUrl!!, it,user.id!!)
            }
            if(book.totalChapterNum != chapters.size){
                book.totalChapterNum = chapters.size
                book.latestChapterTitle=chapters[chapters.size-1].title
                book.latestChapterTime=System.currentTimeMillis()
                book.lastCheckCount=chapters.size
            }
            book.lastCheckTime=System.currentTimeMillis()
            book.bookto(new!!,false)
            booklistMapper.updateById(book)
        }.onFailure {
            return@runBlocking JsonResponse(false,it.message?:BOOKSEARCHERROR)
        }
        JsonResponse(true,SUCCESS).Data(book)
    }

    @Cache(key = "getBookinfo:\${accessToken},\${book.bookUrl},\${book.name},\${book.author}", tags = "search\${accessToken}", seconds = 600)
    @Mapping("/getBookinfo")
    open fun getBookinfo( accessToken:String?, book: SearchBook?) = runBlocking{
        val user=getuserbytocken(accessToken).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
            }
        }!!
        if (book == null || book.bookUrl.isBlank() || book.origin.isBlank()){
            throw DataThrowable().data(JsonResponse(false,NOT_BANK))
        }
        val source = getsource(book.origin,user).also {
            if (it == null){
                throw DataThrowable().data(JsonResponse(false,NOT_SOURCE))
            }
        }
        val webBook = WBook(source!!.json ?: "", user.id!!, accessToken, false)
        runCatching {
            val  new = webBook.getBookInfo(book.bookUrl, canReName = true).also {   setBookbycache(book.bookUrl,it,user.id!!) }
            val mybook=Booklist.tobooklist(book,user.id!!)
            mybook.bookto(new,false)
            runCatching {
                val  list = webBook.getChapterList(new)
                if(list.isNotEmpty()){
                    mybook.lastCheckCount=list.size
                    mybook.latestChapterTitle=list.last().title
                }
            }
            JsonResponse(true,SUCCESS).Data( mybook)
        }.onFailure {
            it.printStackTrace()
           JsonResponse(false,BOOKSEARCHERROR)
        }
    }




    @Mapping("/deleteBook")
    open fun deleteBook( accessToken:String?, book: SearchBook)= runBlocking{
        val user=getuserbytocken(accessToken).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
            }
        }!!
        with(book){
            if (bookUrl.isBlank()){
                throw DataThrowable().data(JsonResponse(false,NOT_BANK))
            }
        }
        val booktolist=booklistMapper.getbook(user.id!!,book.bookUrl).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NOT_BANK))
            }
        }!!
        if (booktolist.origin == "loc_book"){
            val file= File(booktolist.bookUrl)
            if (file.exists()){
                file.delete()
            }
        }
        booklistMapper.deleteById(booktolist.id!!)
        bookCacheMapper.getCache(user.id!!,booktolist.id!!).also {
            if(it != null){
                bookCacheMapper.deleteById(it.id)
            }
        }
       JsonResponse(true,SUCCESS)
    }

    @Mapping("/updateuseReplaceRule")
    fun  updateuseReplaceRule( accessToken:String?, url: String ,useReplaceRule:Int?){
        val user=getuserbytocken(accessToken).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
            }
        }!!
        val book=booklistMapper.getbook(user.id!!,url).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(true))
            }
        }!!
        if (useReplaceRule == 1){
            booklistMapper.uprule(book.id!!,true)
        }else{
            booklistMapper.uprule(book.id!!,false)
        }
        JsonResponse(true,SUCCESS)
    }

    @Mapping("/getcancache")
    open fun getcancache( accessToken:String?,  url: String)=run{
        val user=getuserbytocken(accessToken).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
            }
        }!!
        if(!(user.AllowCache?:false)){
            throw DataThrowable().data(JsonResponse(false,CAN_NOT))
        }
        val booktolist=booklistMapper.getbook(user.id!!,url).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NOT_BANK))
            }
        }!!
        val cache=bookCacheMapper.getCache(user.id!!,booktolist.id!!)
        if(cache != null){
            throw DataThrowable().data(JsonResponse(false))
        }
        JsonResponse(true)
    }

    @Mapping("/getcancachelist")
    open fun getcancachelist( accessToken:String?)=run{
        val user=getuserbytocken(accessToken).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
            }
        }!!
        JsonResponse(true).Data(bookCacheMapper.getlistbyuserid(user.id!!))
    }

    @Mapping("/addCache")
    open fun addCache( accessToken:String?, url: String)=run{
        val user=getuserbytocken(accessToken).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
            }
        }!!
        if(!(user.AllowCache?:false)){
            throw DataThrowable().data(JsonResponse(false,CAN_NOT))
        }
        val booktolist=booklistMapper.getbook(user.id!!,url).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NOT_BANK))
            }
        }!!
        bookCacheMapper.getlistbyuserid(user.id!!).also { if(it.size >=  5) throw DataThrowable().data(JsonResponse(false,CACHE_ERROR))}
        if (booktolist.origin == "loc_book"){
            val cache= BookCache().create(user.id!!,booktolist)
            cache.num=booktolist.totalChapterNum
            val list:MutableSet<String> = mutableSetOf()
            for(i in 0..((booktolist.totalChapterNum?:1)-1)){
                list.add(i.toString())
            }
            cache.cacheindex= list.joinToString(",")
            bookCacheMapper.insert(cache)
            JsonResponse(true)
        }else{
            val source = getsource(booktolist.origin?:"",user)
            if(source == null){
                throw DataThrowable().data(JsonResponse(false,NOT_SOURCE))
            }
            if((source.json?:"").lowercase().contains("webview".lowercase())){
                throw DataThrowable().data(JsonResponse(false,IS_WEBVIEW))
            }
            val cache=bookCacheMapper.getCache(user.id!!,booktolist.id!!).let {
                if(it == null){
                    BookCache().create(user.id!!,booktolist)
                }else{
                    throw DataThrowable().data(JsonResponse(false,CacheIS))
                }
            }
            bookCacheMapper.insert(cache)
            thread { Bookcache.addcache(cache.id!!) }
            JsonResponse(true,SUCCESS)
        }
    }

    @Mapping("/delCache")
    open fun delCache( accessToken:String?, id: String)=run{
        val user=getuserbytocken(accessToken).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
            }
        }!!
        val cache=bookCacheMapper.selectById(id)
        if (cache == null || cache.userid != user.id){
            throw DataThrowable().data(JsonResponse(false,NOT_IS))
        }
        bookCacheMapper.deleteById(cache.id!!)
        JsonResponse(true,SUCCESS)
    }

    @CacheRemove(tags = "search\${accessToken}")
    @Mapping("/saveCookies")
    open fun saveCookies( accessToken:String?, url: String,cookie:String, html: String?, id: String?)=run{
        val user=getuserbytocken(accessToken).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
            }
        }!!
        if (url.isBlank()){
            throw DataThrowable().data(JsonResponse(false,NOT_BANK))
        }
        runCatching {
            var cookie = cookie
            if(cookie.isNotEmpty()){
                cookie= EncryptUtils.aesDecrypted(cookie)
                logger.info("cookie:解密后长度${cookie.length}")
            }
            CookieStore(user.id!!).replaceCookie(url,cookie)
        }.onFailure {
            it.printStackTrace()
        }
        if(!id.isNullOrBlank()){
            runBlocking {
                logger.info("webview:$id,加载完成")
                ResponseManager.completeRequest(id,html?:"")
            }
        }
        JsonResponse(true)
    }

    @Mapping("/getCookies")
    open fun getCookies( accessToken:String?, url: String?)=run{
        val user=getuserbytocken(accessToken).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
            }
        }!!
        if (url.isNullOrEmpty()){
            throw DataThrowable().data(JsonResponse(false,NOT_BANK))
        }
        val cookie=CookieStore(user.id!!).getCookie(url)
        logger.info("cookie加密后:$cookie")
        JsonResponse(true).Data(EncryptUtils.aesEncode(cookie))
    }

    //@CacheRemove(tags = "search\${accessToken}")
    @Mapping("/savehtml")
    open fun savehtml( accessToken:String?, html: String?, id: String?)=run{
        val user=getuserbytocken(accessToken).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
            }
        }!!
        if(!id.isNullOrBlank()){
            runBlocking {
                logger.info("webview:$id,加载完成,htm:$html")
                ResponseManager.completeRequest(id,html?:"")
            }
        }
        JsonResponse(true)
    }


    @CacheRemove(tags = "search\${accessToken}")
    @Mapping("/cleancookies")
    open fun cleancookies( accessToken:String?)=run{
        val user=getuserbytocken(accessToken).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
            }
        }!!
        CookieStore(user.id!!).clear()
        JsonResponse(true)
    }


    @Mapping("/noCookies")
    open fun noCookies( accessToken:String?,id:String?)=run{
        val user=getuserbytocken(accessToken).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
            }
        }!!
       if(id.isNullOrBlank()) throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        runBlocking {
            ResponseManager.completeRequest(id,"")
        }
        JsonResponse(true)
    }

    @Mapping("/getgroup")
    open fun getgroup( accessToken:String?)=run{
        val user=getuserbytocken(accessToken).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
            }
        }!!
        JsonResponse(true).Data(bookGroupMapper.getGroupbyuserid(user.id!!))
    }

    @Tran
    @Mapping("/addgroup")
    open fun addgroup( accessToken:String?,name:String?)=run{
        val user=getuserbytocken(accessToken).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
            }
        }!!
        if(name == null){
            throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        }
        if(name == "全部"  || bookGroupMapper.getGroupbyName(user.id!!,name) != null) {
            throw DataThrowable().data(JsonResponse(isSuccess = false, errorMsg = GROUPIS))
        }
        bookGroupMapper.insert(BookGroup().create(user.id!!,name))
        JsonResponse(true)
    }

    @Tran
    @Mapping("/delgroup")
    open fun delgroup( accessToken:String?,name:String?)=run{
        val user=getuserbytocken(accessToken).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
            }
        }!!
        if(name == null){
            throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        }
        val group=bookGroupMapper.getGroupbyName(user.id!!,name).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false, NOT_IS))
            }
        }!!
        bookGroupMapper.deleteById(group.id!!)
        booklistMapper.delbookgroup(user.id!!,group.bookgroup!!)
        JsonResponse(true)
    }

    @Tran
    @Mapping("/editgroup")
    open fun editgroup( accessToken:String?,oldname:String?,newname:String?)=run{
        val user=getuserbytocken(accessToken).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
            }
        }!!
        if(oldname == null || newname == null){
            throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        }
        val group=bookGroupMapper.getGroupbyName(user.id!!,oldname).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false, NOT_IS))
            }
        }!!
        group.bookgroup=newname
        bookGroupMapper.updateById(group)
        booklistMapper.upbookgroup(user.id!!,oldname,newname)
        JsonResponse(true)
    }

    @Tran
    @Mapping("/setgroup")
    open fun setgroup( accessToken:String?,name:String?, url: String?)=run{
        val user=getuserbytocken(accessToken).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
            }
        }!!
        if(url == null){
            throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        }
        if(name != null && name != "全部"){
            bookGroupMapper.getGroupbyName(user.id!!,name).also {
                if(it == null){
                    throw DataThrowable().data(JsonResponse(false, NOT_IS))
                }
            }!!
        }
        val book=booklistMapper.getbook(user.id!!,url).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false, NOT_IS))
            }
        }!!
        booklistMapper.changebookgroup(book.id!!,name?:"")
        JsonResponse(true)
    }

}