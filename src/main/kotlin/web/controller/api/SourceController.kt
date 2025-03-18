package web.controller.api

import book.model.BookSource
import org.apache.ibatis.solon.annotation.Db
import org.noear.solon.annotation.Body
import org.noear.solon.annotation.Controller
import org.noear.solon.annotation.Inject
import org.noear.solon.annotation.Mapping
import org.noear.solon.core.util.DataThrowable
import org.noear.solon.web.cors.annotation.CrossOrigin
import web.mapper.BookSourceMapper
import web.mapper.UserCookieMapper
import web.model.Users
import web.response.*

@Controller
@Mapping(routepath)
@CrossOrigin(origins = "*")
open class SourceController:BaseController() {

    @Db("db")
    @Inject
    lateinit var userCookieMapper: UserCookieMapper

    @Db("db")
    @Inject
    lateinit var booksourcemapper: BookSourceMapper

    fun getuser(accessToken:String?):Users{
        val user=getuserbytocken(accessToken).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
            }
        }!!
        if(user.source != 1){
            throw DataThrowable().data(JsonResponse(false, CAN_NOT))
        }
        return user
    }

    @Mapping("/getcansource")
    open fun getcansource( accessToken:String?)=run{
        val user=getuserbytocken(accessToken).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
            }
        }!!
        if(user.source == 0){
            throw DataThrowable().data(JsonResponse(false,CAN_NOT))
        }
        JsonResponse(true)
    }

    @Mapping("/saveBookSources")
    fun saveBookSources(accessToken:String?, @Body content:String)=run{
        getuser(accessToken)
        var insert = 0
        var update = 0
        var bookSourcelist= BookSource.fromJsonArray(content).getOrNull()
        bookSourcelist?.forEach {
            addorupdate(it).let {  (ins,ups)->
                insert=insert+ins
                update=update+ups
            }
        }
        JsonResponse(true,"新增${insert}条书源，更新${update}条书源")
    }


    @Mapping("/saveBookSource")
    fun saveBookSource( accessToken:String?, @Body content:String)=run{
        getuser(accessToken)
        var insert = 0
        var update = 0
        var booksource  = BookSource.fromJson(content).getOrNull()?: BookSource()
        if (booksource!= null && booksource.bookSourceName.isNotEmpty())
            addorupdate(booksource).let {  (ins,ups)->
                insert=insert+ins
                update=update+ups
            }
        JsonResponse(true,"新增${insert}条书源，更新${update}条书源")
    }


    @Mapping("/topSource")
    fun topSource( accessToken:String?, id: String?)= run{
        getuser(accessToken)
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

    @Mapping("/delbookSource")
    fun delbookSource(accessToken:String?,id: String?) = run{
        getuser(accessToken)
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
    fun delbookSources(accessToken:String?,@Body ids: List<String>?) = run{
        getuser(accessToken)
        ids?.forEach {id->
            if (id.isNotBlank()){
                booksourcemapper.deleteById(id)
            }
        }
        JsonResponse(true,)
    }

    fun addorupdate(bookSource: BookSource) = run{
        var insert = 0
        var update = 0
        if(bookSource.bookSourceName.isEmpty()){
            return  Pair(insert, update)
        }
        var source= web.model.BookSource().jsontomodel(bookSource)
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