package web.util.mapper


import org.apache.ibatis.solon.annotation.Db
import org.noear.solon.annotation.Bean
import org.noear.solon.annotation.Configuration
import org.noear.solon.annotation.Inject
import web.mapper.BookSourceMapper
import web.mapper.BooklistMapper
import web.mapper.UserCookieMapper
import web.model.UserCookie

@Configuration
class mapper {
    @Db("db")
    @Inject
    lateinit var booklistMapper: BooklistMapper

    @Db("db")
    @Inject
    lateinit var bookSourcemapper: BookSourceMapper


    @Db("db")
    @Inject
    lateinit var userCookieMapper: UserCookieMapper

    companion object{
        var mapper:mapper?=null
        fun get():mapper{
            return mapper!!
        }
    }


    @Bean
    fun init(){
        mapper =this
    }
}