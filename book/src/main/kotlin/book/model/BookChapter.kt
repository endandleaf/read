package book.model

import book.util.GSON
import book.util.NetworkUtils
import book.util.fromJsonObject
import book.util.help.CacheManager
import book.webBook.analyzeRule.AnalyzeUrl
import book.webBook.analyzeRule.RuleDataInterface

data class BookChapter(
    var url: String = "",               // 章节地址
    var title: String = "",              // 章节标题
    var isVolume: Boolean = false,      // 是否是卷名
    var baseUrl: String = "",           //用来拼接相对url
    var bookUrl: String = "",           // 书籍地址
    var index: Int = 0,                 // 章节序号
    var resourceUrl: String? = null,    // 音频真实URL
    var tag: String? = null,            //
    var start: Long? = null,            // 章节起始位置
    var end: Long? = null,               // 章节终止位置
    var startFragmentId: String? = null,  //EPUB书籍当前章节的fragmentId
    var endFragmentId: String? = null,    //EPUB书籍下一章节的fragmentId
    var variable: String? = null ,       //变量
): RuleDataInterface {

    override var userid: String = ""
        set(value) {
            if (value.isNotBlank() && value != field) {
                field = value
                if(variable.isNullOrBlank()){
                    variable=getvariableMap(value)
                }else{
                    runCatching {
                        var old=GSON.fromJsonObject<HashMap<String, String>>(variable).getOrNull() ?: hashMapOf()
                        GSON.fromJsonObject<HashMap<String, String>>(getvariableMap(value)).getOrNull() ?: hashMapOf<String, String>().forEach{(k,v)->
                            old[k] = v
                        }
                        variable = GSON.toJson(old)
                    }
                }

            }
        }

    private fun getCachename(userid:String):String{
        return "BookChaptervariableMap${bookUrl}_userid_${userid}"
    }

    override val variableMap: HashMap<String, String>
        get() {
            return GSON.fromJsonObject<HashMap<String, String>>(getvariableMap(userid)).getOrNull() ?: hashMapOf()
        }


    fun getvariableMap(userid:String):String?{
        try {
            val cache = CacheManager.get(getCachename(userid))
            return cache
        } catch (e: Exception) {
            e.printStackTrace()
            return null
        }
    }


    private fun putVariable(info: String): Boolean {
        return try {
            CacheManager.put(getCachename(userid), info)
            true
        } catch (e: Exception) {
            e.printStackTrace()
            false
        }
    }

    override fun putVariable(key: String, value: String?) {
        if(userid.isEmpty()){
            return
        }
        val variableMap=this.variableMap
        if (value != null) {
            variableMap[key] = value
        } else {
            variableMap.remove(key)
        }
        variable = GSON.toJson(variableMap)
        putVariable(variable?:"")
    }


    override fun hashCode() = url.hashCode()

    override fun equals(other: Any?): Boolean {
        if (other is BookChapter) {
            return other.url == url
        }
        return false
    }

    fun getAbsoluteURL():String{
        val urlMatcher = AnalyzeUrl.paramPattern.matcher(url)
        val urlBefore = if(urlMatcher.find())url.substring(0,urlMatcher.start()) else url
        val urlAbsoluteBefore = NetworkUtils.getAbsoluteURL(baseUrl,urlBefore)
        return if(urlBefore.length == url.length) urlAbsoluteBefore else urlAbsoluteBefore + ',' + url.substring(urlMatcher.end())
    }


    //fun getFileName(): String = String.format("%05d-%s.nb", index, MD5Utils.md5Encode16(title))
}