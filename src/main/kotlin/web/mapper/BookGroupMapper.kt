package web.mapper

import com.baomidou.mybatisplus.core.mapper.BaseMapper
import org.apache.ibatis.annotations.Param
import org.apache.ibatis.annotations.Select
import web.model.BookGroup
import web.model.Users

interface BookGroupMapper : BaseMapper<BookGroup> {


    @Select("SELECT * FROM book_group WHERE userid = #{id} ")
    fun getGroupbyuserid(@Param("id") id: String ): List<BookGroup>

    @Select("SELECT * FROM book_group WHERE bookgroup = #{bookgroup} and userid = #{id}" )
    fun getGroupbyName(@Param("id") id: String ,@Param("bookgroup") bookgroup: String): BookGroup?

}