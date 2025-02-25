package web.controller.admin

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper
import com.google.gson.Gson
import org.apache.ibatis.solon.annotation.Db
import org.noear.solon.annotation.Body
import org.noear.solon.annotation.Controller
import org.noear.solon.annotation.Get
import org.noear.solon.annotation.Inject
import org.noear.solon.annotation.Mapping
import org.noear.solon.annotation.Param
import org.noear.solon.core.handle.UploadedFile
import org.noear.solon.core.util.DataThrowable
import web.mapper.BookSourceMapper
import web.model.BookSource
import web.response.*
import web.util.page.PageByAjax
import java.io.EOFException
import book.model.BookSource as Booksource


@Controller
@Mapping("/admin")
class BookSourceController {

    @Db("db")
    @Inject
    lateinit var booksourcemapper: BookSourceMapper

    @Get
    @Mapping("/seachbookSource")
    fun seachbookSource(where:String?, order:String?, @Param(defaultValue = "1") page:Int, @Param(defaultValue = "20")  limit:Int) = run{
        var queryWrapper: QueryWrapper<BookSource> = QueryWrapper()
        if(where != null && where.isNotBlank()){
            queryWrapper.like("book_source_url",where).or().like("book_source_name",where).or().like("book_source_group",where).or().like("tag",where)
        }
        PageByAjax(booksourcemapper,queryWrapper,page,limit,order)
    }

    @Mapping("/uploadSource")
    fun uploadSource(file: UploadedFile) = run{
        val content = String(file.contentAsBytes)
        var insert = 0
        var update = 0
        try {
            if (content.trim().startsWith("[")){
                //数组
                var bookSourcelist= Booksource.fromJsonArray(content).getOrNull()
                bookSourcelist?.forEach {
                   //if(it.bookSourceUrl.isNotBlank() && it.bookSourceType != 1){
                        addorupdate(it).let {  (ins,ups)->
                            insert=insert+ins
                            update=update+ups
                        }
                    //}
                }
            }else{
                //单独一个
                val bookSource =Booksource.fromJson(content).getOrNull()?:Booksource()
                if (bookSource.bookSourceUrl.isBlank()){
                    throw DataThrowable().data(JsonResponse(false, SOURCE_URL_BANK))
                }
               // if(bookSource.bookSourceType == 1){
                //    throw DataThrowable().data(JsonResponse(false, SOURCE_TYPE_ERROR))
               // }
                addorupdate(bookSource).let {  (ins,ups)->
                    insert=insert+ins
                    update=update+ups
                }
            }
        }catch (e: EOFException){
            throw DataThrowable().data(JsonResponse(false, JSON_ERROR))
        }catch (e:Exception){
            e.printStackTrace()
            throw DataThrowable().data(JsonResponse(false, DO_ERROR))
        }

        JsonResponse(true,"新增${insert}条书源，更新${update}条书源")
    }

    @Mapping("/delbookSource")
    fun delbookSource(id: String?) = run{
        if (id == null || id.isBlank()){
            throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        }
        var bookSource=booksourcemapper.getBookSource(id)
        if (bookSource == null){
            throw DataThrowable().data(JsonResponse(false, NOT_IS))
        }
        booksourcemapper.deleteById(id)
        JsonResponse(true)
    }

    @Mapping("/delbookSources")
    fun delbookSources(@Body ids: List<String>?) = run{
        ids?.forEach {id->
            if (id.isNotBlank()){
                booksourcemapper.deleteById(id)
            }
        }
        JsonResponse(true,)
    }

    @Mapping("/stopbookSource")
    fun stopbookSource(id: String? ,st: String?)= run{
        if (id == null || id.isBlank()){
            throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        }
        var bookSource=booksourcemapper.getBookSource(id)
        if (bookSource == null){
            throw DataThrowable().data(JsonResponse(false, NOT_IS))
        }
        when(st){
            "0"->{
                booksourcemapper.changeEnabled(id,false)
            }
            "1"->{
                booksourcemapper.changeEnabled(id,true)
            }
            else -> throw DataThrowable().data(JsonResponse(false, USE_ERROE))
        }
        JsonResponse(true,)
    }

    @Mapping("/stopbookSourceExplore")
    fun stopbookSourceExplore( id: String? ,st: String?)= run{
        if (id == null || id.isBlank()){
            throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        }
        var bookSource=booksourcemapper.getBookSource(id)
        if (bookSource == null){
            throw DataThrowable().data(JsonResponse(false, NOT_IS))
        }
        when(st){
            "0"->{
                booksourcemapper.changeenabledExplore(id,false)
            }
            "1"->{
                booksourcemapper.changeenabledExplore(id,true)
            }
            else -> throw DataThrowable().data(JsonResponse(false, USE_ERROE))
        }
        JsonResponse(true)
    }

    @Mapping("/topSource")
    fun topSource( id: String?)= run{
        if (id == null || id.isBlank()){
            throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        }
        var bookSource=booksourcemapper.getBookSource(id)
        if (bookSource == null){
            throw DataThrowable().data(JsonResponse(false, NOT_IS))
        }
        var sources = booksourcemapper.getallBookSourcelist()
        var order=1
        for( it in sources!!){
            if(it.bookSourceUrl == bookSource.bookSourceUrl){
                booksourcemapper.changeorder(it.bookSourceUrl?:"", 0)
            }else{
                booksourcemapper.changeorder(it.bookSourceUrl?:"", order)
                order++
            }
        }
        JsonResponse(true)
    }




    fun addorupdate(bookSource: Booksource) = run{
        var insert = 0
        var update = 0
        var source=BookSource().jsontomodel(bookSource)
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