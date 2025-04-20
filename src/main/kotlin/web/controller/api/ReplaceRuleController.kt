package web.controller.api

import book.model.BookSource
import book.util.GSON
import book.util.fromJsonArray
import book.util.fromJsonObject
import org.apache.ibatis.solon.annotation.Db
import org.noear.solon.annotation.Body
import org.noear.solon.annotation.Controller
import org.noear.solon.annotation.Inject
import org.noear.solon.annotation.Mapping
import org.noear.solon.core.util.DataThrowable
import org.noear.solon.data.annotation.Tran
import org.noear.solon.web.cors.annotation.CrossOrigin
import web.mapper.ReplaceRuleMapper
import web.model.ReplaceRule
import web.model.Users
import web.response.*
import java.util.*

@Controller
@Mapping(routepath)
@CrossOrigin(origins = "*")
open class ReplaceRuleController:BaseController() {

    @Db("db")
    @Inject
    lateinit var replaceRuleMapper: ReplaceRuleMapper

    @Tran
    @Mapping("/addReplaceRule")
   open fun addReplaceRule(accessToken:String?, @Body rule: ReplaceRule)=run{
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        if(rule.name.isBlank()) throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        if(rule.id.isNullOrBlank()){
            rule.create(user.id!!,rule.name)
            rule.isEnabled = true;
            replaceRuleMapper.insert(rule)
        }else{
            replaceRuleMapper.getrulebyname(user.id!!,rule.name).forEach{
                if(it.id != rule.id){
                    throw DataThrowable().data(JsonResponse(false, NAME_ERROR))
                }
            }
            replaceRuleMapper.deleteById(rule.id)
            rule.create(user.id!!,rule.name)
            replaceRuleMapper.insert(rule)
        }
        JsonResponse(true)
    }

    @Mapping("/topReplaceRule")
    fun topReplaceRule( accessToken:String?, id: String?)= run{
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        val rule= replaceRuleMapper.getrule(id?:throw DataThrowable().data(JsonResponse(false, NOT_BANK)) ,user.id!!) ?:
             throw DataThrowable().data(JsonResponse(false, NOT_IS))
        val rules=replaceRuleMapper.getallrule(user.id!!)
        var order=1
        for( it in rules){
            if(it.id == rule.id){
                replaceRuleMapper.changeorder(it.id?:"", 0)
            }else{
                replaceRuleMapper.changeorder(it.id?:"", order)
                order++
            }
        }
        JsonResponse(true)
    }

    @Mapping("/delReplaceRule")
    fun delReplaceRule(accessToken:String?,id: String?) = run{
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        val rule= replaceRuleMapper.getrule(id?:throw DataThrowable().data(JsonResponse(false, NOT_BANK)) ,user.id!!) ?:
        throw DataThrowable().data(JsonResponse(false, NOT_IS))
        replaceRuleMapper.deleteById(rule.id)
        JsonResponse(true)
    }

    @Mapping("/delReplaceRules")
    fun delReplaceRules(accessToken:String?,@Body ids: List<String>?) = run{
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        ids?.forEach {id->
            if (id.isNotBlank()){
                replaceRuleMapper.getrule(id,user.id!!)?.let {
                    replaceRuleMapper.deleteById(id)
                }
            }
        }
        JsonResponse(true)
    }

    @Mapping("/getReplaceRules")
    fun getReplaceRules(accessToken:String?) = run{
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        val rules=replaceRuleMapper.getallrule(user.id!!)
        JsonResponse(true).Data(rules)
    }

    @Mapping("/stopReplaceRules")
    fun stopReplaceRules(accessToken:String?,id: String? ,st: String?)= run{
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        if (id.isNullOrBlank()){
            throw DataThrowable().data(JsonResponse(false, NOT_BANK))
        }
        replaceRuleMapper.getrule(id,user.id!!) ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
        when(st){
            "0"->{
                replaceRuleMapper.changeEnabled(id,false)
            }
            "1"->{
                replaceRuleMapper.changeEnabled(id,true)
            }
            else -> throw DataThrowable().data(JsonResponse(false, USE_ERROE))
        }
        JsonResponse(true)
    }

    @Mapping("/stopReplaceRulesbyIds")
    fun stopReplaceRulesbyIds(accessToken:String?,@Body ids: List<String>?)= run{
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        ids?.forEach {
            if (it.isNotBlank()){
                val rule=
                    replaceRuleMapper.getrule(it,user.id!!)  ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
                replaceRuleMapper.changeEnabled(rule.id!!,false)
            }
        }
        JsonResponse(true)
    }

    @Mapping("/startReplaceRulesbyIds")
    fun startReplaceRulesbyIds(accessToken:String?,@Body ids: List<String>?)= run{
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        ids?.forEach {
            if (it.isNotBlank()){
                val rule=
                    replaceRuleMapper.getrule(it,user.id!!)  ?: throw DataThrowable().data(JsonResponse(false, NOT_IS))
                replaceRuleMapper.changeEnabled(rule.id!!,true)
            }
        }
        JsonResponse(true)
    }

    @Mapping("/saverules")
    fun saverules(accessToken:String?, @Body content:String)=run{
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        var insert = 0
        var update = 0
        val rules= GSON.fromJsonArray<ReplaceRule>(content).getOrNull()
        rules?.forEach {
            addorupdate(it,user).let {  (ins,ups)->
                insert += ins
                update += ups
            }
        }
        JsonResponse(true,"新增${insert}条规则，更新${update}条规则")
    }

    @Mapping("/saverule")
    fun saverule( accessToken:String?, @Body content:String)=run{
        val user = getuserbytocken(accessToken).also {
            if (it == null) throw DataThrowable().data(JsonResponse(false, NEED_LOGIN))
        }!!
        var insert = 0
        var update = 0
        val rule= GSON.fromJsonObject<ReplaceRule>(content).getOrNull()
        if (rule != null  && rule.name.isNotEmpty())
            addorupdate(rule, user ).let {  (ins,ups)->
                insert += ins
                update += ups
            }
        JsonResponse(true,"新增${insert}条规则，更新${update}条规则")
    }

    private fun addorupdate(rule: ReplaceRule, user: Users) = run{
        var insert = 0
        var update = 0
        if(rule.name.isEmpty()){
            return  Pair(insert, update)
        }
        replaceRuleMapper.getrulebyname(user.id!!,rule.name).let {
            if (it.isNotEmpty()){
                var r=it[0]
                rule.id=r.id
                rule.userid=r.userid
                rule.name = r.name
                rule.ruleorder=r.ruleorder
                update+=replaceRuleMapper.updateById(rule)
            }else{
                rule.create(user.id!!,rule.name)
                insert+= replaceRuleMapper.insert(rule)
            }
        }
        Pair(insert, update)
    }
}