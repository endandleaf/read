package web.controller.api



import book.model.Book
import book.model.BookChapter
import book.model.BookSource
import book.model.SearchBook
import book.webBook.WBook
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
import org.noear.solon.data.annotation.Tran
import org.noear.solon.data.cache.CacheService
import org.noear.solon.web.cors.annotation.CrossOrigin
import web.controller.api.ReadController.Companion.getBookbycache
import web.controller.api.ReadController.Companion.setBookbycache
import web.mapper.BookCacheMapper
import web.mapper.BookGroupMapper
import web.mapper.BooklistMapper
import web.mapper.UserCookieMapper
import web.model.BookCache
import web.model.BookGroup
import web.model.Booklist
import web.model.UserCookie
import web.response.*
import web.util.read.Bookcache
import web.util.read.updatebook
import java.io.File
import java.net.URI
import kotlin.concurrent.thread

@Controller
@Mapping(routepath)
@CrossOrigin(origins = "*")
open class BookController:BaseController() {

    @Db("db")
    @Inject
    lateinit var booklistMapper: BooklistMapper

    @Db("db")
    @Inject
    lateinit var userCookieMapper: UserCookieMapper

    @Inject
    lateinit var cacheService: CacheService

    @Inject
    lateinit var bookGroupMapper: BookGroupMapper

    @Inject
    lateinit var bookCacheMapper: BookCacheMapper

    fun search(accessToken:String?, bookSourceUrl:String?, page:Int?, key:String?,type:Int)=runBlocking{
        val (user,source,jp)=getsourceuser(accessToken,bookSourceUrl)
        if(jp != null){
            throw DataThrowable().data(jp)
        }
        /*var ckey="bookSourceUrl:$bookSourceUrl,page:$page,key:$key"
        var ret:List<SearchBook>? = cacheService.get(ckey,object : TypeToken<List<SearchBook>?>() {}.type)
        if(ret!=null){
            logger.info("获取到缓存$key")
            return@runBlocking   Gson().toJson(JsonResponse(true).Data(ret))
        }*/

        var webBook = WBook(source!!.json?:"",user!!.id!!,accessToken, false)
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
            throw it
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
    open fun saveBook( accessToken:String?,book: SearchBook) = runBlocking{
        val user=getuserbytocken(accessToken).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
            }
        }!!
        with(book){
            if (bookUrl.isBlank() || name.isBlank()){
                throw DataThrowable().data(JsonResponse(false,NOT_BANK))
            }
        }
        val source = getsource(book.origin)
        if(source == null){ throw DataThrowable().data(JsonResponse(false,NOT_SOURCE))}
        var webBook = WBook(source!!.json ?: "", user.id!!, accessToken, false)
        var booktolist=Booklist.tobooklist(book,user.id!!)
        var new: Book? = null
        runCatching {
            new = webBook.getBookInfo(book.bookUrl, canReName = true)
        }.onFailure {
            return@runBlocking JsonResponse(false,BOOKSEARCHERROR)
        }
        setBookbycache(book.bookUrl,new!!,user!!.id!!);
        if (booklistMapper.getbook(user.id!!,booktolist.bookUrl!!) != null){
            return@runBlocking JsonResponse(false,BOOKIS)
        }
        booklistMapper.insert(booktolist.bookto(new!!,false))
        thread {
            var source=getsource(book.origin)!!
            updatebook(booktolist, source,user.id!!)
        }
        JsonResponse(true,SUCCESS)
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
        var book=booklistMapper.getbook(user.id!!,bookurl).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NO_BOOK))
            }
        }!!
        if(book.origin == "loc_book" ){
            return@runBlocking JsonResponse(true,SUCCESS).Data(book)
        }
        val source = getsource(book.origin).also {
            if (it == null){
                throw DataThrowable().data(JsonResponse(false,NOT_SOURCE))
            }
        }
        var webBook = WBook(source!!.json ?: "", user.id!!, accessToken, false)
        var new: Book? = null
        runCatching {
            new = webBook.getBookInfo(book.bookUrl!!, canReName = true).also {   setBookbycache(book.bookUrl!!,it,user!!.id!!) }
        }.onFailure {
            return@runBlocking JsonResponse(false,BOOKSEARCHERROR)
        }
        booklistMapper.updateById(book.bookto(new!!,false))
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
        val source = getsource(book.origin).also {
            if (it == null){
                throw DataThrowable().data(JsonResponse(false,NOT_SOURCE))
            }
        }
        val webBook = WBook(source!!.json ?: "", user.id!!, accessToken, false)
        runCatching {
            val  new = webBook.getBookInfo(book.bookUrl, canReName = true).also {   setBookbycache(book.bookUrl,it,user!!.id!!) }
            val mybook=Booklist.tobooklist(book,user.id!!)
            mybook.bookto(new,false)
            JsonResponse(true,SUCCESS).Data(mybook)
        }.onFailure {
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
        var booktolist=booklistMapper.getbook(user.id!!,book.bookUrl).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NOT_BANK))
            }
        }!!
        if (booktolist.origin == "loc_book"){
            var file= File(booktolist.bookUrl)
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
        var booktolist=booklistMapper.getbook(user.id!!,url).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NOT_BANK))
            }
        }!!
        var cache=bookCacheMapper.getCache(user.id!!,booktolist.id!!)
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
        var booktolist=booklistMapper.getbook(user.id!!,url).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NOT_BANK))
            }
        }!!
        if (booktolist.origin == "loc_book"){
            var cache= BookCache().create(user.id!!,booktolist)
            cache.num=booktolist.totalChapterNum
            var list:MutableSet<String> = mutableSetOf()
            for(i in 0..((booktolist.totalChapterNum?:1)-1)){
                list.add(i.toString())
            }
            cache.cacheindex= list.joinToString(",")
            bookCacheMapper.insert(cache)
            JsonResponse(true)
        }else{
            var cache=bookCacheMapper.getCache(user.id!!,booktolist.id!!).let {
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
        var cache=bookCacheMapper.selectById(id)
        if (cache == null || cache.userid != user.id){
            throw DataThrowable().data(JsonResponse(false,NOT_IS))
        }
        bookCacheMapper.deleteById(cache.id!!)
        JsonResponse(true,SUCCESS)
    }

    @CacheRemove(tags = "search\${accessToken}")
    @Mapping("/saveCookies")
    open fun saveCookies( accessToken:String?, url: String,cookie:String, html: String?)=run{
        val user=getuserbytocken(accessToken).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
            }
        }!!
        if (url.isBlank()){
            throw DataThrowable().data(JsonResponse(false,NOT_BANK))
        }
        var host=geturl(url)
        userCookieMapper.getcookie(user.id!!,host).let {
            if (it != null){
                it.value=cookie
                userCookieMapper.updateById(it)
            }else{
                var c= UserCookie().create(user.id!!)
                c.value = cookie
                c.host=host
                userCookieMapper.insert(c)
            }
        }
        runBlocking {
            ApiWebSocket.addhtml(key = accessToken?:"",html = html?:"")
        }
        JsonResponse(true)
    }


    @Mapping("/noCookies")
    open fun noCookies( accessToken:String?)=run{
        val user=getuserbytocken(accessToken).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
            }
        }!!
        runBlocking {
            ApiWebSocket.addhtml(key = accessToken?:"",html = "")
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
        var group=bookGroupMapper.getGroupbyName(user.id!!,name).also {
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
        var group=bookGroupMapper.getGroupbyName(user.id!!,oldname).also {
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
        var book=booklistMapper.getbook(user.id!!,url).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false, NOT_IS))
            }
        }!!
        booklistMapper.changebookgroup(book.id!!,name?:"")
        JsonResponse(true)
    }

    private fun geturl(url: String): String {
        var key = url
        if(key.contains("\n")){
            key= key.split("\n")[0]
        }
        if (url.contains("http://") || url.contains("https://")) {
            val uri = URI(key)
            key = uri.host
        }
        return key
    }

}