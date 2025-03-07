package web.controller.admin

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper
import org.apache.ibatis.solon.annotation.Db
import org.noear.solon.annotation.*
import org.noear.solon.core.util.DataThrowable
import org.noear.solon.data.annotation.Tran
import web.mapper.CodeMapper
import web.model.Code
import web.response.*
import web.util.page.PageByAjax
import java.util.*


@Controller
@Mapping("/admin")
open class CodeController {

    @Db("db")
    @Inject
    lateinit var codeMapper: CodeMapper

    @Mapping("/seachcode")
    fun seachcode(where:String?, order:String?, @Param(defaultValue = "1") page:Int, @Param(defaultValue = "20") limit:Int) = run  {
        var queryWrapper: QueryWrapper<Code> = QueryWrapper()
        if(where != null && where.isNotBlank()){
            queryWrapper.like("code",where)
        }
        PageByAjax(codeMapper,queryWrapper,page,limit,order)
    }


    @Post
    @Mapping("/addcode")
    fun addcode( @Param(defaultValue = "1") num:Int) = run{
        if(num <= 0){
            throw DataThrowable().data(JsonResponse(isSuccess = false, errorMsg = NUM_ERROR))
        }
        var date=  Date().time
        for(i in 1..num){
            val randoms = (100000..999999).random()
            var code=Code().create("$date$randoms")
            codeMapper.insert(code)
        }
        JsonResponse(true)
    }

    @Tran
    @Mapping("/delcode")
    fun delcode(code: String?) = run{
        if (code == null || code.isBlank()){
            throw DataThrowable().data(JsonResponse(isSuccess = false, errorMsg = NOT_BANK))
        }
        var code=codeMapper.getCode(code)
        if (code == null){
            throw DataThrowable().data(JsonResponse(isSuccess = false, errorMsg = NOT_IS))
        }
        codeMapper.deleteById(code)
        JsonResponse(true)
    }

    @Mapping("/delcodes")
    fun delcodes(@Body ids:List<String>?) = run{
        ids?.forEach { id->
            if (id.isNotBlank()){
                var code=codeMapper.getCode(id)
                if (code != null){
                    codeMapper.deleteById(code)
                }
            }
        }
        JsonResponse(true)
    }
}