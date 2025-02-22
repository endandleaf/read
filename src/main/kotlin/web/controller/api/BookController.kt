package web.controller.api



import book.model.BookChapter
import book.model.BookSource
import book.model.SearchBook
import book.webBook.WBook
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import kotlinx.coroutines.runBlocking
import org.apache.ibatis.solon.annotation.Db
import org.noear.solon.annotation.Controller
import org.noear.solon.annotation.Inject
import org.noear.solon.annotation.Mapping
import org.noear.solon.core.util.DataThrowable
import org.noear.solon.data.cache.CacheService
import org.noear.solon.web.cors.annotation.CrossOrigin
import web.mapper.BooklistMapper
import web.mapper.UserCookieMapper
import web.model.Booklist
import web.model.UserCookie
import web.response.*
import web.util.read.updatebook
import java.io.File
import java.net.URI

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

    fun search(accessToken:String?, bookSourceUrl:String?, page:Int?, key:String?,type:Int)=runBlocking{
        val (user,source,jp)=getsourceuser(accessToken,bookSourceUrl)
        if(jp != null){
            throw DataThrowable().data(jp)
        }
        var ckey="bookSourceUrl:$bookSourceUrl,page:$page,key:$key"
        var ret:List<SearchBook>? = cacheService.get(ckey,object : TypeToken<List<SearchBook>?>() {}.type)
        if(ret!=null){
            logger.info("获取到缓存$key")
            return@runBlocking   Gson().toJson(JsonResponse(true).Data(ret))
        }
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
        }
        if(!re.isEmpty()){
            cacheService.store(ckey,re,60)
        }
        Gson().toJson(JsonResponse(true).Data(re))
    }

    //@Cache(key = "searchBook:\${accessToken},\${bookSourceUrl},\${page},\${key}", tags = "searchBook", seconds = 600)
    @Mapping("/searchBook")
    open fun searchBook(accessToken:String?, bookSourceUrl:String?, page:Int?, key:String? )= search(accessToken,bookSourceUrl,page, key,1)

    //@Cache(key = "exploreBook:\${accessToken},\${bookSourceUrl},\${page},\${ruleFindUrl}", tags = "exploreBook", seconds = 60)
    @Mapping("/exploreBook")
    open fun exploreBook( accessToken:String?,bookSourceUrl:String?, page:Int?, ruleFindUrl:String? ) = search(accessToken,bookSourceUrl,page, ruleFindUrl,2)


    @Mapping("/saveBook")
    open fun saveBook( accessToken:String?,book: SearchBook) = run{
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
        var booktolist=Booklist.tobooklist(book,user.id!!)
        if (booklistMapper.getbook(user.id!!,booktolist.bookUrl!!) != null){
            return@run JsonResponse(false,BOOKIS)
        }
        booklistMapper.insert(booktolist)
        Thread{
            runBlocking {
                var source=getsource(book.origin)!!
                updatebook(booktolist, source,user.id!!)
            }
        }.start()
        return@run JsonResponse(true,SUCCESS)
    }

    @Mapping("/deleteBook")
    open fun deleteBook( accessToken:String?, book: SearchBook)=run{
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
       JsonResponse(true,SUCCESS)
    }

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
        if(html != null && html.isNotEmpty()){
            runBlocking {
                ApiWebSocket.addhtml(key = accessToken?:"",html = html)
            }
        }
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