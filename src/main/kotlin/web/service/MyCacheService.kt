package web.service

import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import org.noear.solon.annotation.Bean
import org.noear.solon.annotation.Configuration
import org.noear.solon.annotation.Inject
import org.noear.solon.data.cache.CacheService
import web.util.cache.*
import web.util.hash.Md5
import java.io.File
import java.lang.reflect.Type



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

        fun set(key: String, obj: Any,userid:String) {
            setcache(key,anytoString(obj),userid)
            my!!.cacheService.store(getsystemkeyname(key, userid),obj,600)
        }

        fun <T : Any?> get(key: String, type: Class<T>?,userid:String): T? {
            var ret:T?=my!!.cacheService.get(getsystemkeyname(key, userid),type)
            if(ret == null){
                val re=getcache(key,userid)
                if(re!=null && re != ""){
                    runCatching {
                        ret = StringtoAny(re,type)
                    }.onFailure {
                        println(it.printStackTrace())
                    }
                }
            }
            return ret
        }

        fun <T> get(key: String, type: Type?,userid:String): T?{
            var ret:T?=my!!.cacheService.get(getsystemkeyname(key, userid),type)
            if(ret == null){
                val re=getcache(key,userid)
                if(re!=null && re != ""){
                    runCatching {
                        ret = StringtoAny(re,type)
                    }.onFailure {
                        println(it.printStackTrace())
                    }
                }
            }
            return ret
        }

        private  fun  getsystemkeyname(key: String,userid:String):String{
            return  Md5("key:$key,userid:$userid")
        }

        fun remove(key: String,userid:String) {
            removecache(key,userid)
            my!!.cacheService.remove(getsystemkeyname(key, userid))
        }

        fun removeBookContentbycache(url: String,userid:String) {
            var files=mutableListOf<String>()
            checkfile("$cachepath/$userid")
            File("$cachepath/$userid").walk().maxDepth(1).forEach {
                if(it.isFile){
                    files.add(it.name)
                }
            }
            for (i in 0..100000){
                var okey = "getBookContent:${url},index:${i}"
                var key= Md5(okey)
                if(files.contains(key)){
                    println("remove $okey")
                    remove(okey,userid);
                }
            }
        }
    }
}