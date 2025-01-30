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


    fun getuserbytocken(accessToken:String?): Users?{
        if (accessToken == null || accessToken.isBlank()) {
            return null
        }
        var tocken=usertockenMapper.selectById(accessToken)
        if (tocken == null) {
            return null
        }
        var user=usersMapper.selectById(tocken.userid)
        if (user == null) {
            return null
        }
        return user
    }

    fun getsource(accessToken:String?,  bookSourceUrl:String?): Pair<BookSource?, JsonResponse?>{
        getuserbytocken(accessToken).also {
            if(it == null){
                return Pair(null, JsonResponse(false,NEED_LOGIN))
            }
        }!!
        var source=bookSourcemapper.getBookSource(bookSourceUrl.also {
            if (it == null){
                return Pair(null, JsonResponse(false,NOT_BANK))
            }
        }!!).also {
            if (it == null){
                return Pair(null, JsonResponse(false,NOT_SOURCE))
            }
        }!!
        return Pair(source,null)
    }

    fun getsourceuser(accessToken:String?,  bookSourceUrl:String?): Triple<Users?,BookSource?, JsonResponse?>{
        var user=getuserbytocken(accessToken).also {
            if(it == null){
                return Triple(null,null, JsonResponse(false,NEED_LOGIN))
            }
        }!!
        var source=bookSourcemapper.getBookSource(bookSourceUrl.also {
            if (it == null){
                return Triple(null,null, JsonResponse(false,NOT_BANK))
            }
        }!!).also {
            if (it == null){
                return Triple(null,null, JsonResponse(false,NOT_SOURCE))
            }
        }!!
        return Triple(user,source,null)
    }

    fun getsource( bookSourceUrl:String?): BookSource?{
        if(bookSourceUrl == null){return null}
        return bookSourcemapper.getBookSource(bookSourceUrl!!)
    }


}