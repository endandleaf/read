package web.controller.api

import book.model.BookSource
import book.util.GSON
import book.util.fromJsonArray
import book.webBook.WBook
import kotlinx.coroutines.runBlocking
import org.apache.ibatis.solon.annotation.Db
import org.noear.solon.annotation.Body
import org.noear.solon.annotation.Controller
import org.noear.solon.annotation.Inject
import org.noear.solon.annotation.Mapping
import org.noear.solon.core.handle.Context
import org.noear.solon.core.util.DataThrowable
import org.noear.solon.data.annotation.CacheRemove
import org.noear.solon.data.annotation.Tran
import org.noear.solon.web.cors.annotation.CrossOrigin
import web.mapper.HttpTTSMapper
import web.model.HttpTts
import web.model.ReplaceRule
import web.model.Users
import web.response.*
import java.io.ByteArrayOutputStream

@Controller
@Mapping(routepath)
@CrossOrigin(origins = "*")
open class TTsController : BaseController() {
    @Db("db")
    @Inject
    lateinit var httpTTSMapper: HttpTTSMapper

    @Tran
    @Mapping("/addtts")
    open fun addtts(accessToken:String?, @Body tts: HttpTts)=run{
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        if(tts.name.isBlank() || tts.url.isNullOrBlank()) throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        if(tts.id.isNullOrBlank()){
            tts.create(user.id!!,tts.name)
            httpTTSMapper.insert(tts)
        }else{
            httpTTSMapper.getttsbyname(user.id!!,tts.name).forEach{
                if(it.id != tts.id){
                    throw DataThrowable().data(JsonResponse(false, NAME_ERROR))
                }
            }
            httpTTSMapper.deleteById(tts.id)
            tts.create(user.id!!,tts.name)
            httpTTSMapper.insert(tts)
        }
        JsonResponse(true)
    }

    @Mapping("/deltts")
    fun deltts(accessToken:String?,id: String?) = run{
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        val tts= httpTTSMapper.gettts(id?:throw DataThrowable().data(JsonResponse(false, NOT_BANK)) ,user.id!!) ?:
        throw DataThrowable().data(JsonResponse(false, NOT_IS))
        httpTTSMapper.deleteById(tts.id)
        JsonResponse(true)
    }

    @Mapping("/delttss")
    fun delttss(accessToken:String?,@Body ids: List<String>?) = run{
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        ids?.forEach {id->
            if (id.isNotBlank()){
                httpTTSMapper.gettts(id,user.id!!)?.let {
                    httpTTSMapper.deleteById(id)
                }
            }
        }
        JsonResponse(true)
    }

    @Mapping("/getalltts")
    fun getalltts(accessToken:String?) = run{
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        val ttss=httpTTSMapper.getalltts(user.id!!)
        JsonResponse(true).Data(ttss)
    }

    @Mapping("/savettss")
    fun savettss(accessToken:String?, @Body content:String)=run{
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        var insert = 0
        var update = 0
        val ttss= GSON.fromJsonArray<HttpTts>(content).getOrNull()
        ttss?.forEach {
            addorupdate(it,user).let {  (ins,ups)->
                insert += ins
                update += ups
            }
        }
        JsonResponse(true,"新增${insert}条规则，更新${update}条规则")
    }


    @Mapping("/tts")
    fun tts(ctx: Context, accessToken:String?, id: String?, speakText:String?, speechRate:Double?)= runBlocking{
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw Exception(NEED_LOGIN)
        }!!
        if(id.isNullOrBlank() || speakText.isNullOrBlank() ) throw Exception(NOT_BANK)
        var rate=speechRate?:5.0
        if (rate < 5) rate=5.0
        if(rate > 50) rate=50.0
        val tts= (httpTTSMapper.selectById(id)?:throw Exception(NOT_BANK)).totts()
        tts.userid=user.id
        tts.usertocken=accessToken
        if(tts.contentType.isNullOrBlank()){
            ctx.contentType("audio/mpeg")
        }else{
            ctx.contentType(tts.contentType)
        }
        //ctx.headerSet("Content-Disposition","attachment;filename=tts.mp3");
        WBook.getSpeakStream(tts,speakText,rate.toInt()).use {
            val b = ByteArray(4096)
            var len: Int
            while ((it.read(b).also { len = it }) != -1) {
                ctx.outputStream().write(b, 0, len)
            }
        }
    }


    @Mapping("/getttsLoginInfo")
    open fun getLoginInfo(accessToken: String?, id: String?) = run {
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw Exception(NEED_LOGIN)
        }!!
        val tts=(httpTTSMapper.selectById(id)?:throw DataThrowable().data(JsonResponse(false, NOT_IS) )).totts()
        tts.userid = user.id
        tts.usertocken = accessToken
        var info = tts.getLoginInfo()
        if (info.isNullOrBlank()) {
            info = "{}"
        }
        JsonResponse(true).Data(info)
    }


    @Mapping("/putttsLoginInfo")
    open fun putLoginInfo(accessToken: String?, id: String?, info: String?) = run {
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw Exception(NEED_LOGIN)
        }!!
        val tts=(httpTTSMapper.selectById(id)?:throw DataThrowable().data(JsonResponse(false, NOT_IS) )).totts()
        tts.userid = user.id
        tts.usertocken = accessToken
        tts.putLoginInfo(info ?: "{}")
        kotlin.runCatching { tts.login() }
        JsonResponse(true)
    }

    @Mapping("/ttsaction")
    open fun action(accessToken: String?, id: String?, action: String?) = runBlocking {
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw Exception(NEED_LOGIN)
        }!!
        if(action == null) throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        val tts=(httpTTSMapper.selectById(id)?:throw DataThrowable().data(JsonResponse(false, NOT_IS) )).totts()
        tts.userid = user.id
        tts.usertocken = accessToken
        kotlin.runCatching {
            tts.runaction(action);
        }.onFailure { e ->
            logger.info("${action} JavaScript error", e)
        }
        JsonResponse(true)
    }


    private fun addorupdate(tts: HttpTts, user: Users) = run{
        var insert = 0
        var update = 0
        if(tts.name.isEmpty()){
            return  Pair(insert, update)
        }
        httpTTSMapper.getttsbyname(user.id!!,tts.name).let {
            if (it.isNotEmpty()){
                var r=it[0]
                tts.id=r.id
                tts.userid=r.userid
                tts.name = r.name
                update+=httpTTSMapper.updateById(tts)
            }else{
                tts.create(user.id!!,tts.name)
                insert+= httpTTSMapper.insert(tts)
            }
        }
        Pair(insert, update)
    }
}