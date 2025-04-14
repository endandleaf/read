package web.controller.api


import book.model.BookSource
import book.util.GSON
import book.util.fromJsonArray
import book.util.fromJsonObject
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
import web.model.Users
import web.response.*
import java.util.Date

@Controller
@Mapping(routepath)
@CrossOrigin(origins = "*")
open class SourceController:BaseController() {
    

    private  fun getuser(accessToken:String?):Users{
        val user=getuserbytocken(accessToken).also {
            if(it == null){
                throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
            }
        }!!
        if(user.source == 0){
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
        val user=getuser(accessToken)
        var insert = 0
        var update = 0
        val bookSourcelist= BookSource.fromJsonArray(content).getOrNull()
        bookSourcelist?.forEach {
            addorupdate(it,user).let {  (ins,ups)->
                insert += ins
                update += ups
            }
        }
        JsonResponse(true,"新增${insert}条书源，更新${update}条书源")
    }

    @Mapping("/saveBookSourcesv2")
    fun saveBookSourcesv2(accessToken:String?, source:String, urls:String)=run{
        val user=getuser(accessToken)
        var insert = 0
        var update = 0
        var list= listOf<String>()
        if(urls.isNotEmpty()){
            list=GSON.fromJsonArray<String>(urls).getOrNull()?:listOf()
        }
        val bookSourcelist= BookSource.fromJsonArray(source).getOrNull()
        bookSourcelist?.forEach {
            if(list.isNotEmpty()){
                if(list.contains(it.bookSourceUrl)){
                    addorupdate(it,user).let {  (ins,ups)->
                        insert += ins
                        update += ups
                    }
                }
            }else{
                addorupdate(it,user).let {  (ins,ups)->
                    insert += ins
                    update += ups
                }
            }
        }
        JsonResponse(true,"新增${insert}条书源，更新${update}条书源")
    }


    @Mapping("/saveBookSource")
    fun saveBookSource( accessToken:String?, @Body content:String)=run{
        val user=getuser(accessToken)
        var insert = 0
        var update = 0
        val booksource  = BookSource.fromJson(content).getOrNull()?: BookSource()
        if (booksource.bookSourceName.isNotEmpty())
            addorupdate(booksource, user ).let {  (ins,ups)->
                insert += ins
                update += ups
            }
        JsonResponse(true,"新增${insert}条书源，更新${update}条书源")
    }


    @Mapping("/topSource")
    fun topSource( accessToken:String?, id: String?)= run{
        val user=getuser(accessToken)
        if (id.isNullOrBlank()){
            throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        }
        if(user.source == 2){
            val bookSource= userBookSourceMapper.getBookSource(id,user.id!!) ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
            val sources = userBookSourceMapper.getallBookSourcelist(user.id!!)
            var order=1
            for( it in sources!!){
                if(it.bookSourceUrl == bookSource.bookSourceUrl){
                    userBookSourceMapper.changeorder(it.id?:"", 0)
                }else{
                    userBookSourceMapper.changeorder(it.id?:"", order)
                    order++
                }
            }
        }else{
            val bookSource= bookSourcemapper.getBookSource(id) ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
            val sources = bookSourcemapper.getallBookSourcelist()
            var order=1
            for( it in sources!!){
                if(it.bookSourceUrl == bookSource.bookSourceUrl){
                    bookSourcemapper.changeorder(it.bookSourceUrl?:"", 0)
                }else{
                    bookSourcemapper.changeorder(it.bookSourceUrl?:"", order)
                    order++
                }
            }
        }
        JsonResponse(true)
    }

    @Mapping("/delbookSource")
    fun delbookSource(accessToken:String?,id: String?) = run{
        val user=getuser(accessToken)
        if (id.isNullOrBlank()){
            throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        }
        if(user.source == 2){
            val bookSource= userBookSourceMapper.getBookSource(id,user.id!!) ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
            userBookSourceMapper.deleteById(bookSource.id?:"")
        }else{
            bookSourcemapper.getBookSource(id) ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
            bookSourcemapper.deleteById(id)
        }
        JsonResponse(true)
    }

    @Mapping("/delbookSources")
    fun delbookSources(accessToken:String?,@Body ids: List<String>?) = run{
        val user=getuser(accessToken)
        ids?.forEach {id->
            if (id.isNotBlank()){
                if(user.source == 2){
                    userBookSourceMapper.delBookSource(id,user.id!!)
                }else{
                    bookSourcemapper.deleteById(id)
                }
            }
        }
        JsonResponse(true)
    }

    @Mapping("/getbookSources")
    fun getbookSources(accessToken:String?,id: String?) = run{
        val user=getuser(accessToken)
        if (id.isNullOrBlank()){
            throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        }
        val bookSource= if(user.source == 2){
            userBookSourceMapper.getBookSource(id,user.id!!)?.toBaseSource()
        }else{
            bookSourcemapper.getBookSource(id)?.toBaseSource()
        } ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
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
        val user=getuser(accessToken)
        val source= BookSource.fromJson(content.json?:"").getOrNull().also {
            if(it == null ) throw DataThrowable().data(JsonResponse(false, SOURCE_JSON_ERROR))
        }!!
        if(source.bookSourceUrl.isEmpty()) throw DataThrowable().data(JsonResponse(false, SOURCE_URL_ERROR))
        if(user.source == 2){
            val bookSource= web.model.UserBookSource().jsontomodel(source,user.id!!)
            bookSource.sourceorder=9999
            if(content.id  != null && content.id!!.isNotEmpty()){
                val bs=
                    userBookSourceMapper.getBookSource(content.id!!,user.id!!) ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
                bookSource.sourceorder=bs.sourceorder
                bookSource.createtime=bs.createtime
                bookSource.lastUpdateTime=Date().time
                userBookSourceMapper.deleteById(bookSource.id)
            }else{
                val bs=userBookSourceMapper.getBookSource(source.bookSourceUrl,user.id!!)
                if (bs != null){
                    throw DataThrowable().data(JsonResponse(false, SOURCE_IS))
                }
            }
            bookSource.enabled=source.enabled
            userBookSourceMapper.insert(bookSource)
        }else{
            val bookSource= web.model.BookSource().jsontomodel(source)
            bookSource.sourceorder=9999
            if(content.id  != null && content.id!!.isNotEmpty()){
                val bs=
                    bookSourcemapper.getBookSource(content.id!!) ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
                bookSource.sourceorder=bs.sourceorder
                bookSource.createtime=bs.createtime
                bookSource.lastUpdateTime=Date().time
                bookSourcemapper.deleteById(content.id)
            }else{
                val bs=bookSourcemapper.getBookSource(source.bookSourceUrl)
                if (bs != null){
                    throw DataThrowable().data(JsonResponse(false, SOURCE_IS))
                }
            }
            bookSource.enabled=source.enabled
            bookSourcemapper.insert(bookSource)
        }

        JsonResponse(true)
    }


    @Mapping("/stopbookSource")
    fun stopbookSource(accessToken:String?,id: String? ,st: String?)= run{
        val user= getuser(accessToken)
        if (id.isNullOrBlank()){
            throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        }
        if(user.source == 2){
            val bookSource= userBookSourceMapper.getBookSource(id,user.id!!) ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
            when(st){
                "0"->{
                    userBookSourceMapper.changeEnabled(bookSource.id!!,false)
                }
                "1"->{
                    userBookSourceMapper.changeEnabled(bookSource.id!!,true)
                }
                else -> throw DataThrowable().data(JsonResponse(false, USE_ERROE))
            }
        }else{
            val bookSource= bookSourcemapper.getBookSource(id) ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
            when(st){
                "0"->{
                    bookSourcemapper.changeEnabled(id,false)
                }
                "1"->{
                    bookSourcemapper.changeEnabled(id,true)
                }
                else -> throw DataThrowable().data(JsonResponse(false, USE_ERROE))
            }
        }
        JsonResponse(true)
    }

    @Mapping("/stopbookSources")
    fun stopbookSources(accessToken:String?,@Body ids: List<String>?)= run{
        val user=getuser(accessToken)
        if(user.source == 2){
            ids?.forEach {
                if (it.isNotBlank()){
                    val bookSource=
                        userBookSourceMapper.getBookSource(it,user.id!!) ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
                    userBookSourceMapper.changeEnabled(bookSource.id!!,false)
                }
            }
        }else{
            ids?.forEach {
                if (it.isNotBlank()){
                    val bookSource=
                        bookSourcemapper.getBookSource(it) ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
                    bookSourcemapper.changeEnabled(it,false)
                }
            }
        }
        JsonResponse(true)
    }

    @Mapping("/startbookSources")
    fun startbookSources(accessToken:String?,@Body ids: List<String>?)= run{
        val user=getuser(accessToken)
        if(user.source == 2){
            ids?.forEach {
                if (it.isNotBlank()){
                    val bookSource=
                        userBookSourceMapper.getBookSource(it,user.id!!) ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
                    userBookSourceMapper.changeEnabled(bookSource.id!!,true)
                }
            }
        }else{
            ids?.forEach {
                if (it.isNotBlank()){
                    val bookSource=
                        bookSourcemapper.getBookSource(it) ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
                    bookSourcemapper.changeEnabled(it,true)
                }
            }
        }
        JsonResponse(true)
    }

    @Mapping("/stopbookSourceExplores")
    fun stopbookSourceExplores(accessToken:String?,@Body ids: List<String>?)= run{
        val user=getuser(accessToken)
        if(user.source == 2){
            ids?.forEach {
                if (it.isNotBlank()){
                    val bookSource=
                        userBookSourceMapper.getBookSource(it,user.id!!) ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
                    userBookSourceMapper.changeenabledExplore(bookSource.id!!,false)
                }
            }
        }else{
            ids?.forEach {
                if (it.isNotBlank()){
                    val bookSource=
                        bookSourcemapper.getBookSource(it) ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
                    bookSourcemapper.changeenabledExplore(it,false)
                }
            }
        }
        JsonResponse(true)
    }

    @Mapping("/startbookSourceExplores")
    fun startbookSourceExplores(accessToken:String?,@Body ids: List<String>?)= run{
        val user=getuser(accessToken)
        if(user.source == 2){
            ids?.forEach {
                if (it.isNotBlank()){
                    val bookSource=
                        userBookSourceMapper.getBookSource(it,user.id!!) ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
                    userBookSourceMapper.changeenabledExplore(bookSource.id!!,true)
                }
            }
        }else{
            ids?.forEach {
                if (it.isNotBlank()){
                    val bookSource=
                        bookSourcemapper.getBookSource(it) ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
                    bookSourcemapper.changeenabledExplore(it,true)
                }
            }
        }
        JsonResponse(true)
    }


    @Mapping("/getbookSourcejson")
    fun getbookSourcejson(accessToken:String?,@Body ids: List<String>?)= run{
        val user=getuser(accessToken)
        var s="["
        ids?.forEach {
            if (it.isNotBlank()){
                val bookSource=if(user.source == 2){
                    userBookSourceMapper.getBookSource(it,user.id!!)?.toBaseSource()
                }else{
                    bookSourcemapper.getBookSource(it)?.toBaseSource()
                } ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
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


   private fun addorupdate(bookSource: BookSource,user: Users) = run{
        var insert = 0
        var update = 0
        if(bookSource.bookSourceName.isEmpty()){
            return  Pair(insert, update)
        }
       if(user.source == 2){
           val source= web.model.UserBookSource().jsontomodel(bookSource, userid = user.id!!)
           userBookSourceMapper.getBookSource(bookSource.bookSourceUrl, userid = user.id!!).let {
               if (it != null){
                   source.enabled=it.enabled
                   if(it.createtime != null){
                       source.createtime=it.createtime
                   }
                   bookSource.lastUpdateTime=Date().time
                   update=insert+userBookSourceMapper.updateById(source)
               }else{
                   source.enabled=true
                   source.sourceorder=9999
                   insert=update+userBookSourceMapper.insert(source)
               }
           }
       }else{
           val source= web.model.BookSource().jsontomodel(bookSource)
           bookSourcemapper.getBookSource(bookSource.bookSourceUrl).let {
               if (it != null){
                   source.enabled=it.enabled
                   if(it.createtime != null){
                       source.createtime=it.createtime
                   }
                   bookSource.lastUpdateTime=Date().time
                   update=insert+bookSourcemapper.updateById(source)
               }else{
                   source.enabled=true
                   source.sourceorder=9999
                   insert=update+bookSourcemapper.insert(source)
               }
           }
       }
        Pair(insert, update)
    }


}

class EditMsg{
    var json:String?=null
    var id:String?=null
}