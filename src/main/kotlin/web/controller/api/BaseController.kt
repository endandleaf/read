package web.controller.api

import org.apache.ibatis.solon.annotation.Db
import org.noear.solon.annotation.Inject
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import web.mapper.*
import web.model.*
import web.response.JsonResponse
import web.response.NEED_LOGIN
import web.response.NOT_BANK
import web.response.NOT_SOURCE

const val routepath="/api/{v}"

open class BaseController {

    val logger: Logger = LoggerFactory.getLogger(BaseController::class.java)

    @Db("db")
    @Inject
    lateinit var usersMapper: UsersMapper

    @Db("db")
    @Inject
    lateinit var usertockenMapper: UsertockenMapper

    @Db("db")
    @Inject
    lateinit var bookSourcemapper: BookSourceMapper

    @Db("db")
    @Inject
    lateinit var userBookSourceMapper: UserBookSourceMapper

    var apiversion = 3


    fun getuserbytocken(accessToken:String?): Users?{
        if (accessToken == null || accessToken.isBlank()) {
            return null
        }
        val tocken=usertockenMapper.selectById(accessToken)
        if (tocken == null) {
            return null
        }
        val user=usersMapper.selectById(tocken.userid)
        if (user == null) {
            return null
        }
        return user
    }

    fun getsourceuser(accessToken:String?,  bookSourceUrl:String?): Triple<Users?,BaseSource?, JsonResponse?>{
        val user=getuserbytocken(accessToken).also {
            if(it == null){
                return Triple(null,null, JsonResponse(false,NEED_LOGIN))
            }
        }!!
        if(bookSourceUrl == null){
            return Triple(null,null, JsonResponse(false,NOT_BANK))
        }
        val source:BaseSource?= if(user.source == 2){
            userBookSourceMapper.getBookSource(bookSourceUrl,user.id!!)?.toBaseSource()
        }else{
            bookSourcemapper.getBookSource(bookSourceUrl)?.toBaseSource()
        }.also {
            if(it == null){
                return Triple(null,null, JsonResponse(false,NOT_SOURCE))
            }
        }!!
        return Triple(user,source,null)
    }

    fun getsource(accessToken:String?,  bookSourceUrl:String?,user: Users): Pair<BaseSource?, JsonResponse?>{
        getuserbytocken(accessToken).also {
            if(it == null){
                return Pair(null, JsonResponse(false,NEED_LOGIN))
            }
        }!!
        if(bookSourceUrl == null){
            return Pair(null, JsonResponse(false,NOT_BANK))
        }
        val source:BaseSource?= if(user.source == 2){
            userBookSourceMapper.getBookSource(bookSourceUrl,user.id!!)?.toBaseSource()
        }else{
            bookSourcemapper.getBookSource(bookSourceUrl)?.toBaseSource()
        }.also {
            if(it == null){
                return Pair(null, JsonResponse(false,NOT_SOURCE))
            }
        }!!
        return Pair(source,null)
    }

    fun getsource( bookSourceUrl:String,user: Users): BaseSource?{
        val source:BaseSource?= if(user.source == 2){
            userBookSourceMapper.getBookSource(bookSourceUrl,user.id!!)?.toBaseSource()
        }else{
            bookSourcemapper.getBookSource(bookSourceUrl)?.toBaseSource()
        }
        return source
    }

    fun  getallBookSourcelist(user: Users): List<BaseSource>{
        val list = mutableListOf<BaseSource>()
        if(user.source == 2){
            userBookSourceMapper.getallBookSourcelist(user.id!!)?.forEach {
                list.add(it.toBaseSource())
            }
        }else{
            bookSourcemapper.getallBookSourcelist()?.forEach {
                list.add(it.toBaseSource())
            }
        }

        return list
    }

    fun  getBookSourcelist(enabled: Boolean,user: Users): List<BaseSource>{
        val list = mutableListOf<BaseSource>()
        if(user.source == 2){
            userBookSourceMapper.getBookSourcelist(enabled,user.id!!)?.forEach {
                list.add(it.toBaseSource())
            }
        }else{
            bookSourcemapper.getBookSourcelist(enabled)?.forEach {
                list.add(it.toBaseSource())
            }
        }
        return list
    }


}