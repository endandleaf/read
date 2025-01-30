package web.controller.admin

import book.WBook.Debugger
import book.webBook.WBook
import com.google.gson.Gson
import kotlinx.coroutines.runBlocking
import org.apache.ibatis.solon.annotation.Db
import org.noear.solon.annotation.Body
import org.noear.solon.annotation.Controller
import org.noear.solon.annotation.Inject
import org.noear.solon.annotation.Mapping
import org.noear.solon.annotation.Post
import org.noear.solon.core.handle.Context
import org.slf4j.LoggerFactory
import web.filter.ErrorsFilter
import web.mapper.BookSourceMapper
import web.model.BookSource
import web.response.JsonResponse
import book.model.BookSource as Booksource

@Controller
@Mapping("/admin")
class DebugBookSource {
    private  val logger = LoggerFactory.getLogger(DebugBookSource::class.java)

    @Db("db")
    @Inject
    lateinit var booksourcemapper: BookSourceMapper


    @Mapping("/saveBookSources")
    fun saveBookSources(@Body content:String)=run{
        var insert = 0
        var update = 0
        var bookSourcelist= Booksource.fromJsonArray(content).getOrNull()
        bookSourcelist?.forEach {
            if(it.bookSourceUrl.isNotBlank() && it.bookSourceType != 1){
                addorupdate(it).let {  (ins,ups)->
                    insert=insert+ins
                    update=update+ups
                }
            }
        }
        JsonResponse(true,"新增${insert}条书源，更新${update}条书源")
    }


    @Mapping("/saveBookSource")
    fun saveBookSource( @Body content:String)=run{
        var insert = 0
        var update = 0
        var booksource  =Booksource.fromJson(content).getOrNull()?:Booksource()
        if (booksource!= null)
            addorupdate(booksource).let {  (ins,ups)->
            insert=insert+ins
            update=update+ups
        }
        JsonResponse(true,"新增${insert}条书源，更新${update}条书源")
    }


    @Mapping("/deleteBookSources")
    fun deleteBookSources(@Body bookSourcelist: List<Booksource>?) = run{
        bookSourcelist?.forEach {
            if(it.bookSourceUrl.isNotBlank() && it.bookSourceType == 0){
                booksourcemapper.deleteById(it.bookSourceUrl)
            }
        }
        JsonResponse(true)
    }

    @Mapping("/bookSourceDebugSSE")
    fun bookSourceDebugSSE(ctx: Context, bookSourceUrl:String?, keyword:String?)= runBlocking{
        ctx.contentType("text/event-stream;charset=UTF-8")
        //response.setCharacterEncoding("UTF-8")
        ctx.status(200)
        if (bookSourceUrl == null || bookSourceUrl.isBlank()){
            ctx.output("event: error\n")
            ctx.output("data: " + Gson().toJson(JsonResponse(false,"书源连接不存在")) + "\n\n")
            ctx.flush();
            return@runBlocking
        }
        if (keyword == null || keyword.isBlank()){
            ctx.output("event: error\n")
            ctx.output("data: " + Gson().toJson(JsonResponse(false,"请输入搜索关键词")) + "\n\n")
            ctx.flush();
            return@runBlocking
        }
        var bookSource=booksourcemapper.getBookSource(bookSourceUrl!!)
        if (bookSource == null){
            ctx.output("event: error\n")
            ctx.output("data: " + Gson().toJson(JsonResponse(false,"未配置书源")) + "\n\n")
            ctx.flush()
            return@runBlocking
        }

        val bookSourceString=bookSource.json?:""

        //logger.info("bookSourceDebugSSE bookSource: {} keyword: {}", bookSourceString, keyword)

        val debugger = Debugger { msg ->
            ctx.output("data: " + Gson().toJson(mapOf("msg" to msg)) + "\n\n")
            logger.info("data: " + Gson().toJson(mapOf("msg" to msg)) + "\n\n")
            ctx.flush()
        }

        runCatching {
            val webBook = WBook(bookSourceString, _userid = "")
            debugger.startDebug(webBook, keyword)
        }

        ctx.output("event: end\n")
        ctx.output("data: " + Gson().toJson(mapOf("end" to true)) + "\n\n")
        ctx.flush()
    }


    fun addorupdate(bookSource: Booksource) = run{
        var insert = 0
        var update = 0
        var source= BookSource().jsontomodel(bookSource)
        booksourcemapper.getBookSource(bookSource.bookSourceUrl).let {
            if (it != null){
                source.enabled=it.enabled
                if(it.createtime != null){
                    source.createtime=it.createtime
                }
                update=insert+booksourcemapper.updateById(source)
            }else{
                bookSource.enabled=true
                insert=update+booksourcemapper.insert(source)
            }
        }
        Pair(insert, update)
    }

}