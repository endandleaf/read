package web.mapper

import com.baomidou.mybatisplus.core.mapper.BaseMapper
import org.apache.ibatis.annotations.Delete
import org.apache.ibatis.annotations.Param
import org.apache.ibatis.annotations.Select
import web.model.Booklist
import web.model.UserCookie

interface UserCookieMapper: BaseMapper<UserCookie> {

    @Select("SELECT * FROM user_cookie WHERE userid = #{id} and host = #{url}")
    fun getcookie(@Param("id") id: String, @Param("url") url: String): UserCookie?

    @Select("SELECT * FROM user_cookie WHERE userid = #{id} and host like '%\${url}%' ")
    fun getcookiemo(@Param("id") id: String, @Param("url") url: String): UserCookie?

    @Delete("Delete FROM user_cookie WHERE userid = #{id} and host = #{url}")
    fun removeCookie(@Param("id") id: String, @Param("url") url: String): Int
}