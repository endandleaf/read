package book.model

import book.util.GSON
import book.util.fromJsonObject
import book.util.help.CacheManager
import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken

@JsonIgnoreProperties("variableMap", "infoHtml", "tocHtml", "origins", "kindList")
data class SearchBook(
    override var bookUrl: String = "",
    var origin: String = "",                     // 书源规则
    var originName: String = "",
    var type: Int = 0,                          // @BookType
    override var name: String = "",
    override var author: String = "",
    override var kind: String? = null,
    var coverUrl: String? = null,
    var intro: String? = null,
    override var wordCount: String? = null,
    var latestChapterTitle: String? = null,
    var tocUrl: String = "",                    // 目录页Url (toc=table of Contents)
    var time: Long = 0,
    var variable: String? = null,
    var originOrder: Int = 0
) : BaseBook {

    override var infoHtml: String? = null

    override var tocHtml: String? = null

    override fun equals(other: Any?): Boolean {
        if (other is SearchBook) {
            if (other.bookUrl == bookUrl) {
                return true
            }
        }
        return false
    }

    override var variableMap: HashMap<String, String> = hashMapOf()

    private fun getCachename(userid:String):String{
        if(bookUrl == ""){
            return "variableMap${origin}_userid_${userid}"
        }
        return "variableMap${bookUrl}_userid_${userid}"
    }
    fun getVariableMapMap(userid:String): HashMap<String, String>? {
        return GSON.fromJsonObject<HashMap<String, String>>(getvariableMap(userid)).getOrNull()
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

    fun putVariable(info: String,userid: String): Boolean {
        return try {
            CacheManager.put(getCachename(userid), info)
            true
        } catch (e: Exception) {
            e.printStackTrace()
            false
        }
    }

    override fun putVariable(key: String, value: String?,userid:String) {
        variableMap=getVariableMapMap(userid)?:hashMapOf()
        if (value != null) {
            variableMap[key] = value
        } else {
            variableMap.remove(key)
        }
        variable = GSON.toJson(variableMap)
        putVariable(variable?:"",userid)
    }

    override fun getVariable(key: String, userid: String): String? {
        variableMap=getVariableMapMap(userid)?:hashMapOf()
        return  variableMap[key];
    }


    fun toBook(): Book {
        return Book(
            name = name,
            author = author,
            kind = kind,
            bookUrl = bookUrl,
            origin = origin,
            originName = originName,
            type = type,
            wordCount = wordCount,
            latestChapterTitle = latestChapterTitle,
            coverUrl = coverUrl,
            intro = intro,
            tocUrl = tocUrl,
//            originOrder = originOrder,
            variable = variable
        ).apply {
            this.infoHtml = this@SearchBook.infoHtml
            this.tocUrl = this@SearchBook.tocUrl
        }
    }
}