package book.model

import book.util.*
import book.util.help.CacheManager
import book.util.help.CookieStore
import book.webBook.analyzeRule.JsExtensions
import com.script.SimpleBindings


/**
 * 可在js里调用,source.xxx()
 */
@Suppress("unused")
interface BaseSource : JsExtensions {
    //var bookSourceUrl: String
    var concurrentRate: String? // 并发率
    var loginUrl: String?       // 登录地址
    var loginUi: String?   // 登录UI
    var header: String?         // 请求头
    var jsLib:String?
    var userid:String?
    var usertocken:String?

    /**
     * 启用cookieJar
     */
    var enabledCookieJar: Boolean?

    fun getTag(): String

    fun getKey(): String

    override fun getSource(): BaseSource? {
        return this
    }

    fun getLoginJs(): String? {
        val loginJs = loginUrl
        return when {
            loginJs == null -> null
            loginJs.startsWith("@js:") -> loginJs.substring(4)
            loginJs.startsWith("<js>") ->
                loginJs.substring(4, loginJs.lastIndexOf("<"))
            else -> loginJs
        }
    }

    fun login() {
        getLoginJs()?.let {
            evalJS(it)
        }
    }

    /**
     * 解析header规则
     */
    fun getHeaderMap(hasLoginHeader: Boolean = false) = HashMap<String, String>().apply {
        this[AppConst.UA_NAME] = AppConst.userAgent
        header?.let {
            GSON.fromJsonObject<Map<String, String>>(
                when {
                    it.startsWith("@js:", true) ->
                        evalJS(it.substring(4)).toString()
                    it.startsWith("<js>", true) ->
                        evalJS(it.substring(4, it.lastIndexOf("<"))).toString()
                    else -> it
                }
            ).getOrNull()?.let { map ->
                putAll(map)
            }
        }
        if (hasLoginHeader) {
            getLoginHeaderMap()?.let {
                putAll(it)
            }
        }
    }

    /**
     * 获取用于登录的头部信息
     */
    fun getLoginHeader(): String? {
        return CacheManager.get("loginHeader_${getKey()}_userid_${userid}")
    }

    fun getLoginHeaderMap(): Map<String, String>? {
        val cache = getLoginHeader() ?: return null
        return GSON.fromJsonObject<Map<String, String>>(cache).getOrNull()
    }

    /**
     * 保存登录头部信息,map格式,访问时自动添加
     */
    fun putLoginHeader(header: String) {
        CacheManager.put("loginHeader_${getKey()}_userid_${userid}", header)
    }

    fun removeLoginHeader() {
        CacheManager.delete("loginHeader_${getKey()}_userid_${userid}")
    }

    /**
     * 获取用户信息,可以用来登录
     * 用户信息采用aes加密存储
     */
    fun getLoginInfo(): String? {
        try {
            val cache = CacheManager.get("userInfo_${getKey()}_userid_${userid}")
            return cache
        } catch (e: Exception) {
            e.printStackTrace()
            log("获取登陆信息出错 " + e.localizedMessage)
            return null
        }
    }

    fun getLoginInfoMap(): Map<String, String>? {
        return GSON.fromJsonObject<Map<String, String>>(getLoginInfo()).getOrNull()
    }

    /**
     * 保存用户信息,aes加密
     */
    fun putLoginInfo(info: String): Boolean {
        return try {
            CacheManager.put("userInfo_${getKey()}_userid_${userid}", info)
            true
        } catch (e: Exception) {
            e.printStackTrace()
            log("保存登陆信息出错 " + e.localizedMessage)
            false
        }
    }

    fun removeLoginInfo() {
        CacheManager.delete("userInfo_${getKey()}_userid_${userid}")
    }

    private fun getCachename():String{
        return "sourceVariable_${getKey()}_userid_${userid}"
    }

    fun setVariable(variable: String?) {
        //println("setVariable:${getCachename()}")
        if (variable != null) {
            CacheManager.put(getCachename(), variable)
        } else {
            CacheManager.delete(getCachename())
        }
    }

    fun getVariable(): String {
        var s= CacheManager.get(getCachename())
        return s?:""
    }

    fun getCookie(url:String):String?{
        return CookieStore(userid?:"").getCookie(url)
    }

    /**
     * 执行JS
     */
    @Throws(Exception::class)
    fun evalJS(jsStr: String, bindingsConfig: SimpleBindings.() -> Unit = {}): Any? {
        var jsStr=jsStr.replace("const","let")
        val bindings = SimpleBindings()
        bindings.apply(bindingsConfig)
        bindings["java"] = this
        bindings["source"] = this
        bindings["baseUrl"] = getKey()
        bindings["cookie"] = CookieStore(userid?:"")
        bindings["cache"] = CacheManager
        if ( (this.jsLib?:"").isNotBlank()){
            jsStr=this.jsLib+"\n"+jsStr
        }
        return AppConst.SCRIPT_ENGINE.eval(jsStr, bindings)
    }

}