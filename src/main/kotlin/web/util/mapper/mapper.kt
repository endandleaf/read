package web.util.mapper


import org.apache.ibatis.solon.annotation.Db
import org.noear.solon.annotation.Bean
import org.noear.solon.annotation.Configuration
import org.noear.solon.annotation.Inject
import org.noear.solon.data.cache.CacheService
import web.mapper.*
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
    lateinit var userBookSourceMapper: UserBookSourceMapper


    @Db("db")
    @Inject
    lateinit var userCookieMapper: UserCookieMapper

    @Db("db")
    @Inject
    lateinit var usersMapper: UsersMapper

    @Db("db")
    @Inject
    lateinit var bookCacheMapper: BookCacheMapper

    @Inject
    lateinit var cacheService: CacheService



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