@file:Suppress("unused")
package book.util.help

import book.CookieList
import book.util.MD5Utils
import book.util.TextUtils
import java.io.File
import java.io.FileNotFoundException
import java.net.URI

// TODO 处理cookie
class CookieStore(val userid:String,key: String?) : CookieManager {

    private val cookiepath="cookie"
    private  val mykey= MD5Utils.md5Encode(key?:"test")

    init {
        checkfile("$cookiepath/$userid")
        checkfile("$cookiepath/$userid/$mykey")
    }

    fun checkfile(path:String){
        val file = File(path)
        if (!file.exists()){
            file.mkdirs()
        }else{
            if (!file.isDirectory){
                file.delete()
                val file = File(path)
                file.mkdirs()
            }
        }
    }

    fun clear(){
        val file = File("$cookiepath/$userid/$mykey")
        if(file.exists()){
            file.deleteRecursively()
        }
    }


    override fun setCookie(url: String, cookie: String?) {
        println("setCookie url:$url, cookie:$cookie")
        var key = geturl(url)
        if (!cookie.isNullOrBlank()) {
            var cookie2=getcookie(url)
            if(cookie2.isNotEmpty()){
                val cookieMap = cookieToMap(cookie)
                val cookie2Map = cookieToMap(cookie2)
                cookie2Map.putAll(cookieMap)
                File("$cookiepath/$userid/$mykey/$key").writeText(mapToCookie(cookie2Map)?:"")
            }else{
                File("$cookiepath/$userid/$mykey/$key").writeText(cookie)
            }
        }
    }

    fun setCookienourl( cookie: String,url:String) {
        val cookieMap = cookieToMap(cookie)
        if(cookieMap.isNotEmpty()){
            var domain = ""
            var keys : MutableList<String> = mutableListOf()
            for((k,v) in cookieMap){
                when(k.lowercase()){
                    "domain"->{
                        domain = v
                        keys.add(k)
                    }
                    "expires","httponly","max-age"
                        ,"partitioned","path","secure"
                        ,"samesite"   -> keys.add(k)
                }
            }
            keys.forEach{cookieMap.remove(it)}
            var c= mapToCookie(cookieMap)
            if(domain.isNotBlank()){
                setCookie(domain, c)
            }else{
                setCookie(url, c)
            }
        }
    }

    override fun replaceCookie(url: String, cookie: String) {
        if (TextUtils.isEmpty(url) || TextUtils.isEmpty(cookie)) {
            return
        }
        val oldCookie = getCookie(url)
        if (TextUtils.isEmpty(oldCookie)) {
            setCookie(url, cookie)
        } else {
            val cookieMap = cookieToMap(oldCookie)
            cookieMap.putAll(cookieToMap(cookie))
            val newCookie = mapToCookie(cookieMap)
            setCookie(url, newCookie)
        }
    }

    fun getKey(tag: String, key: String? = null): String {
        println("getKey tag:$tag, key:$key")
        val cookie = this.getCookie(tag)
        println("getKeycookie:$cookie")
        val cookieMap = this.cookieToMap(cookie)
        return if (key != null) {
             println("getKey:"+cookieMap[key])
            cookieMap[key] ?: ""
        } else {
            cookie
        }
    }

    private fun geturl(url: String): String {
        var key = url
        if(key.contains("\n")){
            key= key.split("\n")[0]
        }
        if (url.contains("http://") || url.contains("https://")) {
            if (url.contains("#") ) {
                key=url.split("#")[0]
            }
            val uri = URI(key)
            key = uri.host
        }
        return key
    }

    private fun getsurl(url: String): String {
        val pos = url.indexOf('.')
        return if (pos != -1 && pos != url.length ) url.substring(pos, url.length) else ""
    }

    private fun getcookie(url: String): String {
        var key = geturl(url)

        try {
            val content =  File("$cookiepath/$userid/$mykey/$key").readText()
            return content
        }catch (e: Exception){
            return ""
        }
    }

    override fun getCookie(url: String): String {
        var key = geturl(url)
       // println("surl:${getsurl(key)}")
        var cookiemap1= cookieToMap(getcookie(key))  //当前域名
        var cookiemap2= cookieToMap(getcookie("."+key))  //上级域名
        var cookiemap3= cookieToMap(getcookie(getsurl(key)))  //下级域名
        cookiemap2.putAll(cookiemap3)
        cookiemap2.putAll(cookiemap1)
        if(CookieList.manager != null){
           // println(userid+" "+CookieList.manager!!.getCookie(userid,key)+" "+key)
            var cookiemap4= cookieToMap(CookieList.manager!!.getCookie(userid,key))
            cookiemap2.putAll(cookiemap4)
        }else{
            println("用户cookie加载失败")
        }
        println("getCookie($url):"+mapToCookie(cookiemap2))
        return mapToCookie(cookiemap2)?:""
    }

    override fun removeCookie(url: String) {
        val file = File(cookiepath+"/" + url)
        if (file.exists()) {
            file.delete()
        }
        CookieList.manager!!.removeCookie(userid, url)
    }

    override fun cookieToMap(cookie: String): MutableMap<String, String> {
        val cookieMap = mutableMapOf<String, String>()
        if (cookie.isBlank()) {
            return cookieMap
        }
        val pairArray = cookie.split(";".toRegex()).dropLastWhile { it.isEmpty() }.toTypedArray()
        for (pair in pairArray) {
            val pairs = pair.split("=".toRegex()).dropLastWhile { it.isEmpty() }.toTypedArray()
            if (pairs.size == 1) {
                continue
            }
            val pos = pair.indexOf('=')
            val value =if (pos != -1 && pos+1 != pair.length ) pair.substring(pos+1, pair.length) else ""
            val key = if (pos != -1 && pos != 0 ) pair.substring(0, pos) else ""
            if (value.isNotBlank() || value.trim { it <= ' ' } == "null") {
                cookieMap[key] = value.trim { it <= ' ' }
            }
        }
        return cookieMap
    }

    override fun mapToCookie(cookieMap: Map<String, String>?): String? {
        if (cookieMap == null || cookieMap.isEmpty()) {
            return null
        }
        val builder = StringBuilder()
        for (key in cookieMap.keys) {
            val value = cookieMap[key]
            if (value?.isNotBlank() == true) {
                builder.append(key)
                    .append("=")
                    .append(value)
                    .append(";")
            }
        }
        return builder.deleteCharAt(builder.lastIndexOf(";")).toString()
    }

}