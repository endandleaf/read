@file:Suppress("unused")
package book.util.help

import book.CookieList
import book.util.TextUtils
import java.io.File
import java.io.FileNotFoundException
import java.net.URI

// TODO 处理cookie
class CookieStore(val userid:String) : CookieManager {

    private val cookiepath="cookie"

    override fun setCookie(url: String, cookie: String?) {
        println("setCookie url:$url, cookie:$cookie")
        var key = geturl(url)
        if (!cookie.isNullOrBlank()) {
            var cookie2=getcookie(url)
            if(cookie2.isNotEmpty()){
                val cookieMap = cookieToMap(cookie)
                val cookie2Map = cookieToMap(cookie2)
                cookieMap.putAll(cookie2Map)
                File(cookiepath+"/" + key).writeText(mapToCookie(cookie2Map)?:"")
            }else{
                File(cookiepath+"/" + key).writeText(cookie)
            }
        }
    }

    fun setCookienourl( cookie: String,url:String) {
        val cookieMap = cookieToMap(cookie)
        if(cookieMap.isNotEmpty()){
            var domain = ""
            var keys : MutableList<String> = mutableListOf()
            for((k,v) in cookieMap){
                when(k.toLowerCase()){
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
            val content = File(cookiepath+"/" + key).readText()
            return content
        }catch (e: Exception){
            return ""
        }
    }

    override fun getCookie(url: String): String {
        var key = geturl(url)
        println("surl:${getsurl(key)}")
        var cookiemap=cookieToMap(CookieList.get(key)) //后台存放的
        var cookiemap1= cookieToMap(getcookie(key))  //当前域名
        var cookiemap2= cookieToMap(getcookie("."+key))  //上级域名
        var cookiemap3= cookieToMap(getcookie(getsurl(key)))  //下级域名
        cookiemap2.putAll(cookiemap3)
        cookiemap2.putAll(cookiemap1)
        cookiemap2.putAll(cookiemap)
        if(CookieList.manager != null){
           // println(userid+" "+CookieList.manager!!.getCookie(userid,key)+" "+key)
            var cookiemap4= cookieToMap(CookieList.manager!!.getCookie(userid,key))
            cookiemap2.putAll(cookiemap4)
        }else{
            println("用户cookie加载失败")
        }
        println("getCookie"+mapToCookie(cookiemap2))
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
            val key = pairs[0].trim { it <= ' ' }
            val value = pairs[1]
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

    fun clear() {
        // appDb.cookieDao.deleteOkHttp()
    }

}