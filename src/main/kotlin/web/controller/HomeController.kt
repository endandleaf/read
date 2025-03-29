package web.controller

import org.apache.ibatis.solon.annotation.Db
import org.noear.solon.annotation.*
import org.noear.solon.core.handle.Context
import org.noear.solon.core.handle.ModelAndView
import org.noear.solon.core.util.DataThrowable
import org.noear.solon.data.annotation.Tran
import org.noear.solon.data.cache.CacheService
import org.noear.solon.web.cors.annotation.CrossOrigin
import web.mapper.CodeMapper
import web.mapper.UsersMapper
import web.model.Users
import web.response.*
import web.util.admin.getcodes
import web.util.mapper.mapper.Companion.mapper

@CrossOrigin(origins = "*")
@Controller
open class HomeController {
    @get:Get
    @get:Mapping("/regester")
    val reghtml = ModelAndView("regester.html")

    @Db("db")
    @Inject
    lateinit var usersMapper: UsersMapper

    @Db("db")
    @Inject
    lateinit var codeMapper: CodeMapper

    @Inject
    lateinit var cacheService: CacheService

    @Inject(value = "\${admin.code:}", autoRefreshed=true)
    var mycode:String=""



    @Tran
    @Post
    @Mapping("/regester")
    fun regester(@Param("username") _username:String? ,@Param("password") _password:String? ,@Param("phone") _phone:String?,@Param("email") _email:String?,@Param("code") _code:String?) = run {
        if (_username.isNullOrBlank() || _password.isNullOrBlank()  || _code.isNullOrBlank()  )  {
            throw DataThrowable().data(JsonResponse(false,NOT_BANK))
        }
        var user=Users().apply {
            username = _username
            password = _password
            code = _code
            phone = _phone
            email = _email
        }
        val (checkok,msg)=user.Check()
        if (!checkok) {
            throw DataThrowable().data(JsonResponse(isSuccess = false, errorMsg = msg))
        }
        val c=cacheService.get(_code,String::class.java)
        if(c != _code){
            codeMapper.getCode(_code).also {
                if(it == null) throw DataThrowable().data(JsonResponse(isSuccess = false, errorMsg = CODE_ERROR))
            }
        }
        if(usersMapper.getUserByusername(user.username?:"") != null) {
            throw DataThrowable().data(JsonResponse(isSuccess = false, errorMsg = USER_IS))
        }

        if(c == _code){
            user.code="开放注册"
        }

        if(usersMapper.insert(user.create()) == 0){
            throw DataThrowable().data(JsonResponse(isSuccess = false, errorMsg = ADD_ERROR))
        }
        if(c != _code && codeMapper.deleteById(_code) == 0){
            throw DataThrowable().data(JsonResponse(isSuccess = false, errorMsg = ADD_ERROR))
        }
        JsonResponse(true)
    }

    @Mapping("/getcode")
    fun getcode(ctx: Context, code: String?)=run {
        if (mycode.isBlank() )  {
            throw DataThrowable().data(JsonResponse(isSuccess = false, errorMsg = "当前未在配置文件中设置code"))
        }
        if (mycode != code )  {
            throw DataThrowable().data(JsonResponse(isSuccess = false, errorMsg = "code错误"))
        }
        val c= getcodes(1)[0]
        cacheService.store(c,c,60*10)
        JsonResponse(true).Data(c)
    }

}