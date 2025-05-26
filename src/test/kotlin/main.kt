import book.webBook.WBook
import kotlinx.coroutines.runBlocking
import java.io.File

 fun main() {
    println( mergeCookies("a=1,b=2,c=3","a=3"))
}

fun mergeCookies(vararg cookies: String?): String? {
    val cookieMap = mergeCookiesToMap(*cookies)
    return mapToCookie(cookieMap)
}

fun mergeCookiesToMap(vararg cookies: String?): MutableMap<String, String> {
    return cookies.filterNotNull().map {
        cookieToMap(it)
    }.reduce { acc, cookieMap ->
        acc.apply { putAll(cookieMap) }
    }
}
fun mapToCookie(cookieMap: Map<String, String>?): String? {
    if (cookieMap == null || cookieMap.isEmpty()) {
        return null
    }
    val builder = StringBuilder()
    var isadd=false;
    for (key in cookieMap.keys) {
        val value = cookieMap[key]
        if(key.trim() == "path"){
            continue
        }
        if (value?.isNotBlank() == true) {
            isadd=true;
            builder.append(key)
                .append("=")
                .append(value)
                .append(";")
        }
    }
    if(!isadd){return  null}
    return builder.deleteCharAt(builder.lastIndexOf(";")).toString()
}

fun cookieToMap(cookie: String): MutableMap<String, String> {
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
            cookieMap[key.trim()] = value.trim { it <= ' ' }
        }
    }
    return cookieMap
}
