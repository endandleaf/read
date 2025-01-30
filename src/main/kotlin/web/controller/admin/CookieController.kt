package web.controller.admin

import book.CookieList
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper
import org.apache.ibatis.solon.annotation.Db
//import io.legado.app.CookieList
//import io.legado.app.Cookiemodel
import org.noear.solon.annotation.Controller
import org.noear.solon.annotation.Inject
import org.noear.solon.annotation.Mapping
import org.noear.solon.annotation.Param
import org.noear.solon.core.util.DataThrowable
import web.mapper.CookieMapper
import web.model.Cookie
import web.response.*
import web.util.cookie.Updatecookie
import web.util.page.PageByAjax

@Controller
@Mapping("/admin")
class CookieController {

    @Db("db")
    @Inject
    lateinit var cookieMapper: CookieMapper

    @Mapping("/seachcookie")
    fun seachcookie(where:String?, order:String?, @Param(defaultValue = "1") page:Int, @Param(defaultValue = "20")  limit:Int) = run{
        var queryWrapper: QueryWrapper<Cookie> = QueryWrapper()
        if(where != null && where.isNotBlank()){
            queryWrapper.like("host",where)
        }
        PageByAjax(cookieMapper,queryWrapper,page,limit,order)
    }

    @Mapping("/delcookie")
    fun delcookie(host: String?) = run{
        if (host == null || host.isBlank()){
            throw DataThrowable().data(JsonResponse(isSuccess = false, errorMsg = NOT_BANK))
        }
        var cookie=cookieMapper.selectById(host)
        if (cookie == null){
            throw DataThrowable().data(JsonResponse(isSuccess = false, errorMsg = NOT_IS))
        }
        cookieMapper.deleteById(host)
        Thread{
            runCatching {
                Updatecookie(cookieMapper)
            }
        }.start()
        JsonResponse(true)
    }

    @Mapping("/addcookie")
    fun addcookie(host: String?, value:String) = run{
        if (host == null || host.isBlank()){
            throw DataThrowable().data(JsonResponse(isSuccess = false, errorMsg = NOT_BANK))
        }
        var cookie=cookieMapper.selectById(host)
        if (cookie != null){
            throw DataThrowable().data(JsonResponse(isSuccess = false, errorMsg = COOKIE_IS))
        }
        cookie=Cookie().create()
        cookie.host=host
        cookie.value=value
        cookieMapper.insert(cookie)
        Thread{
            runCatching {
                Updatecookie(cookieMapper)
            }
        }.start()
        JsonResponse(true)
    }

    @Mapping("/cookielist")
    fun cookielist()= run{
        CookieList.getlist()
    }

}