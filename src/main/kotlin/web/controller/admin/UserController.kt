package web.controller.admin

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper
import org.apache.ibatis.solon.annotation.Db
import org.noear.solon.annotation.Body
import org.noear.solon.annotation.Controller
import org.noear.solon.annotation.Inject
import org.noear.solon.annotation.Mapping
import org.noear.solon.annotation.Param
import org.noear.solon.annotation.Post
import org.noear.solon.core.util.DataThrowable
import org.noear.solon.data.annotation.Tran
import org.noear.solon.data.tran.TranPolicy
import web.mapper.*
import web.model.Users
import web.response.*
import web.util.page.PageByAjax

@Controller
@Mapping("/admin")
open class UserController {

    @Db("db")
    @Inject
    lateinit var usersMapper: UsersMapper

    @Db("db")
    @Inject
    lateinit var booklistMapper: BooklistMapper

    @Db("db")
    @Inject
    lateinit var bookGroupMapper: BookGroupMapper

    @Db("db")
    @Inject
    lateinit var userCookieMapper: UserCookieMapper

    @Db("db")
    @Inject
    lateinit var usertockenMapper: UsertockenMapper

    @Db("db")
    @Inject
    lateinit var bookCacheMapper: BookCacheMapper

    @Db("db")
    @Inject
    lateinit var userBookSourceMapper: UserBookSourceMapper

    @Post
    @Mapping("/adduser")
    fun adduser( user: Users) = run{
        val (checkok,msg)=user.Check()
        if (!checkok) {
            throw DataThrowable().data(JsonResponse(isSuccess = false, errorMsg = msg))
        }
        if (user.id.isNullOrBlank()){
            if(usersMapper.getUserByusername(user.username?:"") != null) {
                throw DataThrowable().data(JsonResponse(isSuccess = false, errorMsg = USER_IS))
            }
            //新增用户
            usersMapper.insert(user.create())
        }else{
            usersMapper.getUser(user.id!!).also {
                if ( it == null ){ throw DataThrowable().data(JsonResponse(isSuccess = false, errorMsg = USER_NOT)) }
                if(!it.username.equals(user.username)){ user.username = it.username }
            }
            //更新用户数据
            user.update().run {
                usersMapper.updateinfo(this)
            }

        }
        JsonResponse(true)
    }

    @Mapping("/getuser")
    fun getuser(id: String?) = run{
        if (id == null || id.isBlank()){
            throw DataThrowable().data(JsonResponse(isSuccess = false, errorMsg = NOT_BANK))
        }
        var user=usersMapper.getUser(id)
        if (user == null){
            throw DataThrowable().data(JsonResponse(isSuccess = false, errorMsg = USER_NOT))
        }
        user.password=null
        JsonResponse(true).Data(user)
    }


    @Mapping("/seachusers")
    fun seachusers(where:String? , order:String? ,@Param(defaultValue = "1") page:Int,@Param(defaultValue = "20") limit:Int) = run  {
        var queryWrapper: QueryWrapper<Users> = QueryWrapper()
        if(where != null && where.isNotBlank()){
            queryWrapper.like("code",where).or().like("username",where).or().like("email",where).or().like("phone",where)
        }
        PageByAjax(usersMapper,queryWrapper,page,limit,order).apply {
            (data as List<Users>).forEach({
                it.password=null
            })
        }
    }

    @Mapping("/deluser")
    fun deluser(id: String?) = run{
        if (id == null || id.isBlank()){
            throw DataThrowable().data(JsonResponse(isSuccess = false, errorMsg = NOT_BANK))
        }
        var user=usersMapper.getUser(id)
        if (user == null){
            throw DataThrowable().data(JsonResponse(isSuccess = false, errorMsg = USER_NOT))
        }
        deluserbyid(id)
        JsonResponse(true)
    }

    @Mapping("/delusers")
    fun delusers(@Body ids:List<String>?) = run{
        ids?.forEach { id-> runCatching {
            if (id.isNotBlank()){
                var user=usersMapper.getUser(id)
                if (user != null){
                    deluserbyid(id)
                }
            }
        } }
        JsonResponse(true)
    }

    @Tran(policy = TranPolicy.requires_new)
    fun deluserbyid(id:String) = run{
        usersMapper.deleteById(id)
        booklistMapper.delUserbooks(id)
        bookGroupMapper.delUsergroup(id)
        userCookieMapper.delUsercookies(id)
        usertockenMapper.delUsertockens(id)
        bookCacheMapper.delUserCache(id)
        userBookSourceMapper.delUserSource(id)
    }
}