package web.controller.api

import org.apache.ibatis.solon.annotation.Db
import org.noear.solon.annotation.Inject
import org.noear.solon.core.util.DataThrowable
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import web.mapper.*
import web.model.*
import web.response.*

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

    var apiversion = 4


    fun getuserbytocken(accessToken:String?): Users{
        if (accessToken.isNullOrBlank()) {
            throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
        }
        val tocken= usertockenMapper.selectById(accessToken) ?: throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
        val user= usersMapper.selectById(tocken.userid) ?: throw DataThrowable().data(JsonResponse(false,NEED_LOGIN))
        return user
    }

    fun getsourceuser(accessToken:String?,  bookSourceUrl:String?): Pair<Users,BaseSource>{
        val user=getuserbytocken(accessToken)
        if(bookSourceUrl == null){
            throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        }
        val source:BaseSource= if(user.source == 2){
            userBookSourceMapper.getBookSource(bookSourceUrl,user.id!!)?.toBaseSource()
        }else{
            bookSourcemapper.getBookSource(bookSourceUrl)?.toBaseSource()
        }?: throw DataThrowable().data(JsonResponse(false, NOT_SOURCE))
        return Pair(user,source)
    }

    fun getsource(accessToken:String?,  bookSourceUrl:String?,user: Users): BaseSource{
        return getsourceuser(accessToken,bookSourceUrl).second
    }

    fun getsource(user: Users,  bookSourceUrl:String?): BaseSource{
        if(bookSourceUrl == null){
            throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        }
        val source:BaseSource= if(user.source == 2){
            userBookSourceMapper.getBookSource(bookSourceUrl,user.id!!)?.toBaseSource()
        }else{
            bookSourcemapper.getBookSource(bookSourceUrl)?.toBaseSource()
        }?: throw DataThrowable().data(JsonResponse(false, NOT_SOURCE))
        return source
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


    fun getsourceuser(accessToken:String?):Users{
        val user=getuserbytocken(accessToken)
        if(user.source == 0){
            throw DataThrowable().data(JsonResponse(false, CAN_NOT))
        }
        return user
    }


}