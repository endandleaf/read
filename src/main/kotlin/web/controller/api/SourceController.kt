package web.controller.api


import book.model.BookSource
import com.google.gson.Gson
import org.apache.ibatis.solon.annotation.Db
import org.noear.solon.annotation.Body
import org.noear.solon.annotation.Controller
import org.noear.solon.annotation.Inject
import org.noear.solon.annotation.Mapping
import org.noear.solon.core.util.DataThrowable
import org.noear.solon.data.annotation.CacheRemove
import org.noear.solon.data.annotation.Tran
import org.noear.solon.web.cors.annotation.CrossOrigin
import web.mapper.BookSourceMapper
import web.model.Users
import web.response.*
import java.util.Date

@Controller
@Mapping(routepath)
@CrossOrigin(origins = "*")
open class SourceController:BaseController() {

    @Db("db")
    @Inject
    lateinit var booksourcemapper: BookSourceMapper

    private  fun getuser(accessToken:String?):Users{
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
        val bookSourcelist= BookSource.fromJsonArray(content).getOrNull()
        bookSourcelist?.forEach {
            addorupdate(it).let {  (ins,ups)->
                insert += ins
                update += ups
            }
        }
        JsonResponse(true,"新增${insert}条书源，更新${update}条书源")
    }


    @Mapping("/saveBookSource")
    fun saveBookSource( accessToken:String?, @Body content:String)=run{
        getuser(accessToken)
        var insert = 0
        var update = 0
        val booksource  = BookSource.fromJson(content).getOrNull()?: BookSource()
        if (booksource.bookSourceName.isNotEmpty())
            addorupdate(booksource).let {  (ins,ups)->
                insert += ins
                update += ups
            }
        JsonResponse(true,"新增${insert}条书源，更新${update}条书源")
    }


    @Mapping("/topSource")
    fun topSource( accessToken:String?, id: String?)= run{
        getuser(accessToken)
        if (id.isNullOrBlank()){
            throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        }
        val bookSource= booksourcemapper.getBookSource(id) ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
        val sources = booksourcemapper.getallBookSourcelist()
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
        if (id.isNullOrBlank()){
            throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        }
        val bookSource= booksourcemapper.getBookSource(id) ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
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
        JsonResponse(true)
    }

    @Mapping("/getbookSources")
    fun getbookSources(accessToken:String?,id: String?) = run{
        getuser(accessToken)
        if (id.isNullOrBlank()){
            throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        }
        val bookSource= booksourcemapper.getBookSource(id) ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
        JsonResponse(true).Data(mapOf(
            "json" to bookSource.json,
            "enabled" to bookSource.enabled,
            "enabledexplore" to bookSource.enabledExplore,
        ))
    }

    @Tran
    @CacheRemove(tags = "search\${accessToken}")
    @Mapping("/editbookSources")
    open fun editbookSources(accessToken:String?, @Body content:EditMsg) = run{
        getuser(accessToken)
        val source= BookSource.fromJson(content.json?:"").getOrNull().also {
            if(it == null ) throw DataThrowable().data(JsonResponse(false, SOURCE_JSON_ERROR))
        }!!
        if(source.bookSourceUrl.isEmpty()) throw DataThrowable().data(JsonResponse(false, SOURCE_URL_ERROR))
        val bookSource= web.model.BookSource().jsontomodel(source)
        bookSource.sourceorder=9999
        if(content.id  != null && content.id!!.isNotEmpty()){
            val bs=
                booksourcemapper.getBookSource(content.id!!) ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
            bookSource.sourceorder=bs.sourceorder
            bookSource.createtime=bs.createtime
            bookSource.lastUpdateTime=Date().time
            booksourcemapper.deleteById(content.id)
        }else{
            val bs=booksourcemapper.getBookSource(source.bookSourceUrl)
            if (bs != null){
                throw DataThrowable().data(JsonResponse(false, SOURCE_IS))
            }
        }

        bookSource.enabled=source.enabled
        booksourcemapper.insert(bookSource)
        JsonResponse(true)
    }


    @Mapping("/stopbookSource")
    fun stopbookSource(accessToken:String?,id: String? ,st: String?)= run{
        getuser(accessToken)
        if (id.isNullOrBlank()){
            throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        }
        val bookSource= booksourcemapper.getBookSource(id) ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
        when(st){
            "0"->{
                booksourcemapper.changeEnabled(id,false)
            }
            "1"->{
                booksourcemapper.changeEnabled(id,true)
            }
            else -> throw DataThrowable().data(JsonResponse(false, USE_ERROE))
        }
        JsonResponse(true)
    }

    @Mapping("/stopbookSources")
    fun stopbookSources(accessToken:String?,@Body ids: List<String>?)= run{
        getuser(accessToken)
        ids?.forEach {
            if (it.isNotBlank()){
                val bookSource=
                    booksourcemapper.getBookSource(it) ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
                booksourcemapper.changeEnabled(it,false)
            }
        }
        JsonResponse(true)
    }

    @Mapping("/startbookSources")
    fun startbookSources(accessToken:String?,@Body ids: List<String>?)= run{
        getuser(accessToken)
        ids?.forEach {
            if (it.isNotBlank()){
                val bookSource=
                    booksourcemapper.getBookSource(it) ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
                booksourcemapper.changeEnabled(it,true)
            }
        }
        JsonResponse(true)
    }

    @Mapping("/stopbookSourceExplores")
    fun stopbookSourceExplores(accessToken:String?,@Body ids: List<String>?)= run{
        getuser(accessToken)
        ids?.forEach {
            if (it.isNotBlank()){
                val bookSource=
                    booksourcemapper.getBookSource(it) ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
                booksourcemapper.changeenabledExplore(it,false)
            }
        }
        JsonResponse(true)
    }

    @Mapping("/startbookSourceExplores")
    fun startbookSourceExplores(accessToken:String?,@Body ids: List<String>?)= run{
        getuser(accessToken)
        ids?.forEach {
            if (it.isNotBlank()){
                val bookSource=
                    booksourcemapper.getBookSource(it) ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
                booksourcemapper.changeenabledExplore(it,true)
            }
        }
        JsonResponse(true)
    }


    @Mapping("/getbookSourcejson")
    fun getbookSourcejson(accessToken:String?,@Body ids: List<String>?)= run{
        getuser(accessToken)
        var s="["
        ids?.forEach {
            if (it.isNotBlank()){
                val bookSource= booksourcemapper.getBookSource(it) ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
                s = if(s == "[" ){
                    "$s ${bookSource.json}"
                }else {
                    "$s , ${bookSource.json}"
                }
            }
        }
        s="$s ]"
        JsonResponse(true).Data(s)
    }


   private fun addorupdate(bookSource: BookSource) = run{
        var insert = 0
        var update = 0
        if(bookSource.bookSourceName.isEmpty()){
            return  Pair(insert, update)
        }
        val source= web.model.BookSource().jsontomodel(bookSource)
        booksourcemapper.getBookSource(bookSource.bookSourceUrl).let {
            if (it != null){
                source.enabled=it.enabled
                if(it.createtime != null){
                    source.createtime=it.createtime
                }
                bookSource.lastUpdateTime=Date().time
                update=insert+booksourcemapper.updateById(source)
            }else{
                source.enabled=true
                source.sourceorder=9999
                insert=update+booksourcemapper.insert(source)
            }
        }
        Pair(insert, update)
    }


}

class EditMsg{
    var json:String?=null
    var id:String?=null
}