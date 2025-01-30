package web.model

import com.baomidou.mybatisplus.annotation.FieldFill
import com.baomidou.mybatisplus.annotation.TableField
import org.dromara.autotable.annotation.AutoTable
import org.dromara.autotable.annotation.PrimaryKey
import org.dromara.mpe.autotable.annotation.ColumnId
import org.noear.snack.annotation.ONodeAttr
import java.time.LocalDateTime
import java.util.*

@AutoTable(value = "usertocken")
class Usertocken {
    @ColumnId
    @PrimaryKey
    var id : String? =null
    var model: String? =null
    var userid : String? =null                  //用户id

    @ONodeAttr(format = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @TableField(fill = FieldFill.INSERT,value = "createtime")
    var createtime: LocalDateTime? = null

    fun create():Usertocken{
        this.id = UUID.randomUUID().toString()
        this.createtime = LocalDateTime.now()
        return this
    }
}