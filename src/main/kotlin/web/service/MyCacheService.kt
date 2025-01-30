package web.service

import book.model.BookChapter
import book.webBook.analyzeRule.Basejs
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import org.noear.solon.annotation.Bean
import org.noear.solon.annotation.Configuration
import org.noear.solon.annotation.Inject
import org.noear.solon.data.cache.CacheService
import web.util.cache.getcache
import web.util.cache.removecache
import web.util.cache.setcache
import web.util.mapper.mapper
import web.util.mapper.mapper.Companion.mapper
import java.lang.reflect.Type
import java.util.*


@Configuration
class MyCacheService() {
    @Inject
    lateinit var cacheService: CacheService

    @Bean
    fun init(){
        my =this
    }

    companion object {

        private  fun anytoString(any:Any): String {
            when(any){
                is String -> return any
                is Int,Byte,Short,Long -> return "$any"
                is Float,Double -> return "$any"
                is Boolean -> {
                    if (any) return "true" else return "false"
                }
                else -> return Gson().toJson(any)
            }
        }

        private  fun < T>  StringtoAny(str:String, type: Type?): T? {
            when(type){
                object :TypeToken<String>() {}.type -> return str as T
                object :TypeToken<Int>() {}.type-> return str.toInt() as T
                object :TypeToken<Byte>() {}.type -> return str.toByte() as T
                object :TypeToken<Short>() {}.type -> return str.toShort() as T
                object :TypeToken<Long>() {}.type-> return str.toLong() as T
                object :TypeToken<Float>() {}.type -> return str.toFloat() as T
                object :TypeToken<Double>() {}.type ->  return str.toDouble() as T
                object :TypeToken<Boolean>() {}.type ->  if(str == "true") return true as T else false
                else->{
                    return Gson().fromJson(str,type) as T
                }
            }
            return null
        }


        private var my: MyCacheService?=null

        fun set(key: String, obj: Any) {
            setcache(key,anytoString(obj))
            my!!.cacheService.store(key,obj,999999999)
        }

        fun <T : Any?> get(key: String?, type: Class<T>?): T? {
            var ret:T?=my!!.cacheService.get(key,type)
            if(ret == null){
                var re=getcache(key!!)
                if(re!=null && re != ""){
                    runCatching {
                        ret = StringtoAny(re!!,type)
                    }.onFailure {
                        println(it.printStackTrace())
                    }
                }
            }
            return ret
        }

        open fun <T> get(key: String?, type: Type?): T?{
            var ret:T?=my!!.cacheService.get(key,type)
            if(ret == null){
                var re=getcache(key!!)
                if(re!=null && re != ""){
                    runCatching {
                        ret = StringtoAny(re!!,type)
                    }.onFailure {
                        println(it.printStackTrace())
                    }
                }
            }
            return ret
        }


        fun remove(key: String) {
            removecache(key)
            my!!.cacheService.remove(key)
        }
    }
}