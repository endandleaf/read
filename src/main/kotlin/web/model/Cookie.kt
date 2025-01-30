package web.model

import com.baomidou.mybatisplus.annotation.FieldFill
import com.baomidou.mybatisplus.annotation.TableField
import org.dromara.autotable.annotation.AutoTable
import org.dromara.autotable.annotation.ColumnType
import org.dromara.autotable.annotation.PrimaryKey
import org.dromara.mpe.autotable.annotation.ColumnId
import org.noear.snack.annotation.ONodeAttr
import java.time.LocalDateTime

@AutoTable(value = "cookie")
class Cookie {
    @ColumnId
    @PrimaryKey
    var host : String? = null

    @ColumnType(value = "MEDIUMTEXT")
    var value:String? = null

    @ONodeAttr(format = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @TableField(fill = FieldFill.INSERT,value = "createtime")
    var createtime: LocalDateTime? = null

    fun create():Cookie{
        this.createtime = LocalDateTime.now()
        return this
    }

}