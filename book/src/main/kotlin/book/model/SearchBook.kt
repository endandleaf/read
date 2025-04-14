package book.model

import book.util.GSON
import book.util.fromJsonObject
import book.util.help.CacheManager
import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken

@JsonIgnoreProperties("variableMap", "infoHtml", "tocHtml", "origins", "kindList")
data class SearchBook(
    private var _bookUrl: String = "",
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
                init()
            }
        }
    override var bookUrl: String = _bookUrl
        set(value) {
            field = value
            //init()
        }

    fun init(){
        if(isinit || userid.isEmpty()){
            return
        }
        if(bookUrl.isNotEmpty() || isseachbook){
            //println(variable)
            //println("init ${bookUrl}")
            if(variable.isNullOrBlank()){
                variable=getvariableMap(userid)
            }else{
                runCatching {
                    var old=GSON.fromJsonObject<HashMap<String, String>>(variable).getOrNull() ?: hashMapOf()
                    GSON.fromJsonObject<HashMap<String, String>>(getvariableMap(userid)).getOrNull() ?: hashMapOf<String, String>().forEach{(k,v)->
                        old[k] = v
                    }
                    val json=GSON.toJson(old)
                    variable = json
                    putVariable(json)
                }
            }
            isinit = true
        }
    }

    fun searchinit(){
        isseachbook=true
        init()
    }



    override var isinit: Boolean = false

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

    private var isseachbook=false

    override val variableMap: HashMap<String, String>
        get() {
            return GSON.fromJsonObject<HashMap<String, String>>(getvariableMap(userid)).getOrNull() ?: hashMapOf()
        }

    private fun getCachename(userid:String):String{
        if(isseachbook){
            return "searchbookvariableMap${origin}_userid_${userid}"
        }
        return "searchbookvariableMap${bookUrl}_userid_${userid}"
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
        if(!isinit) init()
        val variableMap=this.variableMap
        if (value != null) {
            variableMap[key] = value
        } else {
            variableMap.remove(key)
        }
        if(userid.isEmpty()){
            variable = GSON.toJson(variableMap)
            return
        }
        if(bookUrl.isNotEmpty()){
            variable = GSON.toJson(variableMap)
            putVariable(variable?:"")
        }else{
            variable = GSON.toJson(variableMap)
            if(isseachbook){
                putVariable(variable?:"")
            }
        }
    }

    override fun getVariable(key: String): String? {
        if(!isinit) init()
        return ( variableMap[key]?:SearchBook(origin = origin).let {
            it.userid=userid
            it.searchinit()
            it.variableMap[key]
        })?:""
    }


    fun toBook(): Book {
        return Book(
            name = name,
            author = author,
            kind = kind,
            _bookUrl = bookUrl,
            origin = origin,
            originName = originName,
            type = type,
            wordCount = wordCount,
            latestChapterTitle = latestChapterTitle,
            coverUrl = coverUrl,
            intro = intro,
            tocUrl = tocUrl,
            originOrder = originOrder,
        ).apply {
            this. userid = userid
            this.variable = variable
            this.infoHtml = this@SearchBook.infoHtml
            this.tocUrl = this@SearchBook.tocUrl
        }
    }
}