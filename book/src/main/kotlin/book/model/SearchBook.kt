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
    var originOrder: Int = 0,
) : BaseBook {
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

    override val variableMap: HashMap<String, String>
        get() {
            return GSON.fromJsonObject<HashMap<String, String>>(getvariableMap(userid)).getOrNull() ?: hashMapOf()
        }

    private fun getCachename(userid:String):String{
        if(bookUrl == ""){
            return "variableMap${origin}_userid_${userid}"
        }
        return "variableMap${bookUrl}_userid_${userid}"
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
        if(userid.isBlank()){
            throw Exception("userid is null")
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

    override fun getVariable(key: String): String? {
        if (bookUrl == ""){
            return variableMap[key]
        }
        return variableMap[key]?:SearchBook(origin = origin).also { it.userid=userid }.getVariable(key)
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
        ).apply {
            this. userid = userid
            this.variable = variable
            this.infoHtml = this@SearchBook.infoHtml
            this.tocUrl = this@SearchBook.tocUrl
        }
    }
}