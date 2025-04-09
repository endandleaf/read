package book.util.help

import book.model.Cache
import book.util.GSON
import book.util.MyCache
import book.webBook.analyzeRule.QueryTTF
import com.google.gson.Gson
import java.io.File
import java.io.FileNotFoundException
import java.security.MessageDigest

val cookieJarHeader:String = "CookieJar"

fun Md5(srcStr: String): String {
    return hash("MD5", srcStr)
}
fun hash(algorithm: String, srcStr: String): String {
    try {
        val result = StringBuilder()
        val md = MessageDigest.getInstance(algorithm)
        val bytes = md.digest(srcStr.toByteArray(charset("utf-8")))
        for (b in bytes) {
            val hex = Integer.toHexString(b.toInt() and 0xFF)
            if (hex.length == 1)
                result.append("0")
            result.append(hex)
        }
        return result.toString()
    } catch (e: Exception) {
        throw RuntimeException(e)
    }

}


// TODO 处理缓存
@Suppress("unused")
object CacheManager {

    private val queryTTFMap = hashMapOf<String, Pair<Long, QueryTTF>>()
    private val cachepath="bookcache"

    /**
     * 最多只缓存50M的数据,防止OOM
     */
     val memoryLruCache:MyCache = MyCache(50)

    private fun setcache(key:String,value:String){
        val key= Md5(key)
        File(cachepath+"/" + key).writeText(value)
    }

    private fun getcache(key:String):String?{
        val key= Md5(key)
        try {
            val content = File(cachepath+"/" + key).readText()
            return content
        }catch (e: FileNotFoundException){
            return null
        }
    }

    /**
     * saveTime 单位为秒
     */
    @JvmOverloads
    fun put(key: String, value: Any, saveTime: Int = 0) {
       // println("put:$key")
        val deadline =
            if (saveTime == 0) 0 else System.currentTimeMillis() + saveTime * 1000
        when (value) {
            is QueryTTF -> {
               // println("put queryTTFMap:$key")
                queryTTFMap[key] = Pair(deadline, value)
            }
            is ByteArray -> {
                //println("put ByteArray:$key")
                val cache = Cache(key, String(value), deadline)
                setcache(key, Gson().toJson(cache))
            }
            else -> {
                //println("put else:$key")
                val cache = Cache(key, value.toString(), deadline)
                setcache(key, Gson().toJson(cache))
            }
        }
    }

    fun putMemory(key: String, value: Any) {
        memoryLruCache.add(key, value)
    }

    //从内存中获取数据 使用lruCache
    fun getFromMemory(key: String): Any? {
        return memoryLruCache.get(key)
    }

    fun deleteMemory(key: String) {
        memoryLruCache.remove(key)
    }

    fun get(key: String): String? {
       //println("get:$key")
        var v=getcache(key)
        var re:String?= null
        runCatching {
            if (v != null && v.isNotBlank()) {
                val cache = Gson().fromJson<Cache>(v, Cache::class.java)
                if (System.currentTimeMillis() < cache.deadline || cache.deadline == 0.toLong()){
                    re=cache.value
                }
            }
        }
        if(re == null){
           // println("get cache error,key:$key")
        }
        return re
    }

    fun getInt(key: String): Int? {
        return get(key)?.toIntOrNull()
    }

    fun getLong(key: String): Long? {
        return get(key)?.toLongOrNull()
    }

    fun getDouble(key: String): Double? {
        return get(key)?.toDoubleOrNull()
    }

    fun getFloat(key: String): Float? {
        return get(key)?.toFloatOrNull()
    }

    fun getByteArray(key: String): ByteArray? {
        return getcache(key)?.toByteArray()
    }

    fun getQueryTTF(key: String): QueryTTF? {
        val cache = queryTTFMap[key] ?: return null
        if (cache.first == 0L || cache.first > System.currentTimeMillis()) {
            return cache.second
        }
        return null
    }

    fun putFile(key: String, value: String, saveTime: Int = 0) {
        val cache = Cache(key, value, saveTime.toLong())
        setcache(key, Gson().toJson(cache))
    }

    fun getFile(key: String): String? {
        return getcache(key)
    }

    fun delete(key: String) {
        kotlin.runCatching {
            File(cachepath+"/" + Md5(key)).let {
                if(it.exists()) it.delete()
            }
            deleteMemory(key)
        }
    }
}