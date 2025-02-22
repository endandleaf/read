package book.webBook.analyzeRule

import book.model.BaseSource
import book.model.Book
import book.model.BookChapter
import book.util.*
import book.util.AppConst.SCRIPT_ENGINE
import book.util.AppConst.UA_NAME
import book.util.AppPattern.JS_PATTERN
import book.util.AppPattern.dataUriRegex
import book.util.help.CacheManager
import book.util.help.CookieStore
import book.util.http.*
import book.webBook.DebugLog
import book.webBook.exception.ConcurrentException
import cn.hutool.core.util.HexUtil
import com.script.SimpleBindings
import kotlinx.coroutines.runBlocking
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import okhttp3.RequestBody.Companion.toRequestBody
import okhttp3.Response
import java.net.URLEncoder
import java.util.concurrent.TimeUnit
import java.util.regex.Pattern
import kotlin.coroutines.CoroutineContext
import kotlin.coroutines.EmptyCoroutineContext
import kotlin.math.max

class AnalyzeUrl(
    val mUrl: String,
    val key: String? = null,
    val page: Int? = null,
    val speakText: String? = null,
    val speakSpeed: Int? = null,
    var baseUrl: String = "",
    private val source: BaseSource? = null,
    private val ruleData: RuleDataInterface? = null,
    private val readTimeout: Long? = null,
    private val chapter: BookChapter? = null,
    headerMapF: Map<String, String>? = null,
    val needanalyzeUrl :Boolean=true,
) :JsExtensions,Basejs() {

    companion object {
        val paramPattern: Pattern = Pattern.compile("\\s*,\\s*(?=\\{)")
        private val pagePattern = Pattern.compile("<(.*?)>")
        private val concurrentRecordMap = hashMapOf<String, ConcurrentRecord>()
    }

    var ruleUrl = ""
        private set
    var url: String = ""
        private set
    var body: String? = null
        private set
    var type: String? = null
        private set
    val headerMap = HashMap<String, String>()

    private var urlNoQuery: String = ""
    private var queryStr: String? = null
    private val fieldMap = LinkedHashMap<String, String>()
    private var charset: String? = null
    private var method = RequestMethod.GET
    private var proxy: String? = null
    private var retry: Int = 0
    private var useWebView: Boolean = false
    private var webJs: String? = null
    private val enabledCookieJar = source?.enabledCookieJar ?: false


    init {
        if(source != null) {
            runCatching {
                headerMap.putAll(source!!.getHeaderMap())
            }
        }
        initUrl()
    }


    fun initUrl() {
        ruleUrl = mUrl
        //执行@js,<js></js>
        analyzeJs()

        //替换参数
        if(needanalyzeUrl)  replaceKeyPageJs()


        //处理URL
        if(needanalyzeUrl) analyzeUrl()

    }

    private fun analyzeJs() {
        var start = 0
        var tmp: String
        val jsMatcher = JS_PATTERN.matcher(ruleUrl)
        while (jsMatcher.find()) {
            if (jsMatcher.start() > start) {
                tmp =
                    ruleUrl.substring(start, jsMatcher.start()).trim { it <= ' ' }
                //println(tmp)
                if (tmp.isNotEmpty()) {
                    ruleUrl = tmp.replace("@result", ruleUrl)
                }
            }
            ruleUrl = evalJS(jsMatcher.group(2) ?: jsMatcher.group(1), ruleUrl) as String
            start = jsMatcher.end()
        }
        if (ruleUrl.length > start) {
            tmp = ruleUrl.substring(start).trim { it <= ' ' }
            if (tmp.isNotEmpty()) {
                ruleUrl = tmp.replace("@result", ruleUrl)
            }
        }
    }

    /**
     * 替换关键字,页数,JS
     */
    private fun replaceKeyPageJs() { //先替换内嵌规则再替换页数规则，避免内嵌规则中存在大于小于号时，规则被切错
        //js
        if (ruleUrl.contains("{{") && ruleUrl.contains("}}")) {
            val analyze = RuleAnalyzer(ruleUrl) //创建解析
            //替换所有内嵌{{js}}
            val url = analyze.innerRule("{{", "}}") {
                val jsEval = evalJS(it) ?: ""
                //println(jsEval)
                when {
                    jsEval is String -> jsEval
                    jsEval is Double && jsEval % 1.0 == 0.0 -> String.format("%.0f", jsEval)
                    else -> URLEncoder.encode(jsEval.toString(), "UTF-8")
                }

            }
            if (url.isNotEmpty()) ruleUrl = url
        }
        //page
        page?.let {
            val matcher = pagePattern.matcher(ruleUrl)
            while (matcher.find()) {
                val pages = matcher.group(1)!!.split(",")
                ruleUrl = if (page < pages.size) { //pages[pages.size - 1]等同于pages.last()
                    ruleUrl.replace(matcher.group(), pages[page - 1].trim { it <= ' ' })
                } else {
                    ruleUrl.replace(matcher.group(), pages.last().trim { it <= ' ' })
                }
            }
        }
        //println(ruleUrl)
    }

    /**
     * 解析Url
     */
    private fun analyzeUrl() {
        //replaceKeyPageJs已经替换掉额外内容，此处url是基础形式，可以直接切首个‘,’之前字符串。
        val urlMatcher = paramPattern.matcher(ruleUrl)
        val urlNoOption =
            if (urlMatcher.find()) ruleUrl.substring(0, urlMatcher.start()) else ruleUrl
        url = NetworkUtils.getAbsoluteURL(baseUrl, urlNoOption)
        NetworkUtils.getBaseUrl(url)?.let {
            baseUrl = it
        }
        if (urlNoOption.length != ruleUrl.length) {
            GSON.fromJsonObject<UrlOption>(ruleUrl.substring(urlMatcher.end())).getOrNull()
                ?.let { option ->
                    option.getMethod()?.let {
                        if (it.equals("POST", true)) method = RequestMethod.POST
                    }
                    option.getHeaderMap()?.forEach { entry ->
                        headerMap[entry.key.toString()] = entry.value.toString()
                    }
                    option.getBody()?.let {
                        body = it
                    }
                    type = option.getType()
                    charset = option.getCharset()
                    retry = option.getRetry()
                    useWebView = option.useWebView()
                    webJs = option.getWebJs()
                    option.getJs()?.let { jsStr ->
                        //println(jsStr)
                        evalJS(jsStr, url)?.toString()?.let {
                            url = it
                        }
                    }
                }
        }
        headerMap[UA_NAME] ?: let {
            headerMap[UA_NAME] = AppConst.userAgent
        }
        urlNoQuery = url
        when (method) {
            RequestMethod.GET -> {
                val pos = url.indexOf('?')
                if (pos != -1) {
                    analyzeFields(url.substring(pos + 1))
                    urlNoQuery = url.substring(0, pos)
                }
            }
            RequestMethod.POST -> body?.let {
                if (!it.isJson() && !it.isXml() && headerMap["Content-Type"].isNullOrEmpty()) {
                    analyzeFields(it)
                }
            }
        }
    }
    /**
     * 解析QueryMap
     */
    private fun analyzeFields(fieldsTxt: String) {
        queryStr = fieldsTxt
        val queryS = fieldsTxt.splitNotBlank("&")
        for (query in queryS) {
            val pos = query.indexOf('=')
            val value =if (pos != -1 && pos+1 != query.length ) query.substring(pos+1, query.length) else ""
            val queryM = if (pos != -1 && pos != 0 ) query.substring(0, pos) else ""
            if (charset.isNullOrEmpty()) {
                if (NetworkUtils.hasUrlEncoded(value)) {
                    fieldMap[queryM] = value
                } else {
                    fieldMap[queryM] = URLEncoder.encode(value, "UTF-8")
                }
            } else if (charset == "escape") {
                fieldMap[queryM] = EncoderUtils.escape(value)
            } else {
                fieldMap[queryM] = URLEncoder.encode(value, charset)
            }
        }
    }


    fun evalJS(jsStr: String, result: Any? = null): Any? {
        var userid=""
        if(source != null){
            userid = source.userid?:""
        }
        var jsStr=jsStr.replace("const","let")
        val bindings = SimpleBindings()
        bindings["java"] = this
        bindings["baseUrl"] = baseUrl
        bindings["cookie"] = CookieStore(userid)
        bindings["cache"] = CacheManager
        bindings["page"] = page
        bindings["key"] = key
        bindings["speakText"] = speakText
        bindings["speakSpeed"] = speakSpeed
        bindings["book"] = ruleData as? Book
        bindings["source"] = source
        bindings["result"] = result
        if (source != null && (source.jsLib?:"").isNotBlank()){
            jsStr=source.jsLib+"\n"+jsStr
        }
        return SCRIPT_ENGINE.eval(jsStr, bindings)
    }

    private fun setCookie(tag: String?) {
        println("setCookie tag:$tag")
        var userid=""
        if(source != null){
            userid = source.userid?:""
        }
        var store=CookieStore(userid)
        val cookie = store.getCookie(tag ?: url)
        println("cookie : $cookie")
        if (cookie.isNotEmpty()) {
            val cookieMap = store.cookieToMap(cookie)
            val customCookieMap = store.cookieToMap(headerMap["Cookie"] ?: "")
            customCookieMap.putAll(cookieMap)
            val newCookie = store.mapToCookie(customCookieMap)
            newCookie?.let {
                println("putcookie : $it,url:${url}")
                headerMap.put("Cookie", it)
            }
        }
    }

    /**
     * 访问网站,返回StrResponse
     */
    suspend fun getStrResponseAwait(
        jsStr: String? = null,
        sourceRegex: String? = null,
        useWebView: Boolean = true,
        debugLog: DebugLog? = null
    ): StrResponse {
        if (type != null) {
            return StrResponse(url, StringUtils.byteToHexString(getByteArrayAwait()))
        }
        val concurrentRecord = fetchStart()
        setCookie(source?.getKey())
        val strResponse: StrResponse
        if (this.useWebView && useWebView) {
            throw Exception("不支持webview")
        } else {
            //println("proxy"+proxy.toString())
            strResponse = getProxyClient(proxy, debugLog).newCallStrResponse(retry) {
                addHeaders(headerMap)
                when (method) {
                    RequestMethod.POST -> {
                        url(urlNoQuery)
                        val contentType = headerMap["Content-Type"]
                        val body = body
                        if (fieldMap.isNotEmpty() || body.isNullOrBlank()) {
                            postForm(fieldMap, true)
                        } else if (!contentType.isNullOrBlank()) {
                            val requestBody = body.toRequestBody(contentType.toMediaType())
                            post(requestBody)
                        } else {
                            postJson(body)
                        }
                    }
                    else -> get(urlNoQuery, fieldMap, true)
                }
            }
        }
        fetchEnd(concurrentRecord)
        if(enabledCookieJar) strResponse.headers().values("Set-Cookie").forEach {
            //println("enabledCookieJar")
            var userid=""
            if(source != null){
                userid = source.userid?:""
            }
            var store=CookieStore(userid)
            store.setCookienourl(it,(source?.getKey())?:urlNoQuery)
        }
        //println(strResponse.body)
        //println(headerMap.toString())
        //println(source?.getKey())
        return strResponse
    }


    @JvmOverloads
    fun getStrResponse(
        jsStr: String? = null,
        sourceRegex: String? = null,
        useWebView: Boolean = true,
        debugLog: DebugLog? = null
    ): StrResponse {
        return runBlocking {
            getStrResponseAwait(jsStr, sourceRegex, useWebView, debugLog)
        }
    }

    /**
     * 访问网站,返回ByteArray
     */
    suspend fun getByteArrayAwait(): ByteArray {
        val concurrentRecord = fetchStart()
        @Suppress("RegExpRedundantEscape")
        val dataUriFindResult = dataUriRegex.find(urlNoQuery)
        @Suppress("BlockingMethodInNonBlockingContext")
        if (dataUriFindResult != null) {
            val dataUriBase64 = dataUriFindResult.groupValues[1]
            val byteArray = Base64.decode(dataUriBase64, Base64.DEFAULT)
            fetchEnd(concurrentRecord)
            return byteArray
        } else {
            setCookie(source?.getKey())
            val strResponse: StrResponse
            val byteArray = getProxyClient(proxy).newCallResponseBody(retry) {
                addHeaders(headerMap)
                when (method) {
                    RequestMethod.POST -> {
                        url(urlNoQuery)
                        val contentType = headerMap["Content-Type"]
                        val body = body
                        if (fieldMap.isNotEmpty() || body.isNullOrBlank()) {
                            postForm(fieldMap, true)
                        } else if (!contentType.isNullOrBlank()) {
                            val requestBody = body.toRequestBody(contentType.toMediaType())
                            post(requestBody)
                        } else {
                            postJson(body)
                        }
                    }
                    else -> get(urlNoQuery, fieldMap, true)
                }
            }.bytes()
            fetchEnd(concurrentRecord)
            return byteArray
        }
    }

    private fun getByteArrayIfDataUri(): ByteArray? {
        val dataUriFindResult = dataUriRegex.find(urlNoQuery)
        if (dataUriFindResult != null) {
            val dataUriBase64 = dataUriFindResult.groupValues[1]
            val byteArray = Base64.decode(dataUriBase64, Base64.DEFAULT)
            return byteArray
        }
        return null
    }




    /**
     * 开始访问,并发判断
     */
    private fun fetchStart(): ConcurrentRecord? {
        source ?: return null
        val concurrentRate = source.concurrentRate
        if (concurrentRate.isNullOrEmpty()) {
            return null
        }
        val rateIndex = concurrentRate.indexOf("/")
        var fetchRecord = concurrentRecordMap[source.getKey()]
        if (fetchRecord == null) {
            fetchRecord = ConcurrentRecord(rateIndex > 0, System.currentTimeMillis(), 1)
            concurrentRecordMap[source.getKey()] = fetchRecord
            return fetchRecord
        }
        val waitTime: Int = synchronized(fetchRecord) {
            try {
                if (rateIndex == -1) {
                    if (fetchRecord.frequency > 0) {
                        return@synchronized concurrentRate.toInt()
                    }
                    val nextTime = fetchRecord.time + concurrentRate.toInt()
                    if (System.currentTimeMillis() >= nextTime) {
                        fetchRecord.time = System.currentTimeMillis()
                        fetchRecord.frequency = 1
                        return@synchronized 0
                    }
                    return@synchronized (nextTime - System.currentTimeMillis()).toInt()
                } else {
                    val sj = concurrentRate.substring(rateIndex + 1)
                    val nextTime = fetchRecord.time + sj.toInt()
                    if (System.currentTimeMillis() >= nextTime) {
                        fetchRecord.time = System.currentTimeMillis()
                        fetchRecord.frequency = 1
                        return@synchronized 0
                    }
                    val cs = concurrentRate.substring(0, rateIndex)
                    if (fetchRecord.frequency > cs.toInt()) {
                        return@synchronized (nextTime - System.currentTimeMillis()).toInt()
                    } else {
                        fetchRecord.frequency = fetchRecord.frequency + 1
                        return@synchronized 0
                    }
                }
            } catch (e: Exception) {
                return@synchronized 0
            }
        }
        if (waitTime > 0) {
            throw ConcurrentException("根据并发率还需等待${waitTime}毫秒才可以访问", waitTime = waitTime)
        }
        return fetchRecord
    }

    /**
     * 访问结束
     */
    private fun fetchEnd(concurrentRecord: ConcurrentRecord?) {
        if (concurrentRecord != null && !concurrentRecord.concurrent) {
            synchronized(concurrentRecord) {
                concurrentRecord.frequency = concurrentRecord.frequency - 1
            }
        }
    }

    override fun getSource(): BaseSource? {
        return source
    }

    data class UrlOption(
        private var method: String? = null,
        private var charset: String? = null,
        private var headers: Any? = null,
        private var body: Any? = null,
        private var retry: Int? = null,
        private var type: String? = null,
        private var webView: Any? = null,
        private var webJs: String? = null,
        private var js: String? = null,
    ) {
        fun setMethod(value: String?) {
            method = if (value.isNullOrBlank()) null else value
        }

        fun getMethod(): String? {
            return method
        }

        fun setCharset(value: String?) {
            charset = if (value.isNullOrBlank()) null else value
        }

        fun getCharset(): String? {
            return charset
        }

        fun setRetry(value: String?) {
            retry = if (value.isNullOrEmpty()) null else value.toIntOrNull()
        }

        fun getRetry(): Int {
            return retry ?: 0
        }

        fun setType(value: String?) {
            type = if (value.isNullOrBlank()) null else value
        }

        fun getType(): String? {
            return type
        }

        fun useWebView(): Boolean {
            return when (webView) {
                null, "", false, "false" -> false
                else -> true
            }
        }

        fun useWebView(boolean: Boolean) {
            webView = if (boolean) true else null
        }

        fun setHeaders(value: String?) {
            headers = if (value.isNullOrBlank()) {
                null
            } else {
                GSON.fromJsonObject<Map<String, Any>>(value).getOrNull()
            }
        }

        fun getHeaderMap(): Map<*, *>? {
            return when (val value = headers) {
                is Map<*, *> -> value
                is String -> GSON.fromJsonObject<Map<String, Any>>(value).getOrNull()
                else -> null
            }
        }

        fun setBody(value: String?) {
            body = when {
                value.isNullOrBlank() -> null
                value.isJsonObject() -> GSON.fromJsonObject<Map<String, Any>>(value)
                value.isJsonArray() -> GSON.fromJsonArray<Map<String, Any>>(value)
                else -> value
            }
        }

        fun getBody(): String? {
            return body?.let {
                if (it is String) it else GSON.toJson(it)
            }
        }

        fun setWebJs(value: String?) {
            webJs = if (value.isNullOrBlank()) null else value
        }

        fun getWebJs(): String? {
            return webJs
        }

        fun setJs(value: String?) {
            js = if (value.isNullOrBlank()) null else value
        }

        fun getJs(): String? {
            return js
        }
    }

    data class ConcurrentRecord(
        val concurrent: Boolean,
        var time: Long,
        var frequency: Int
    )
}