package book.model

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

    override val variableMap: HashMap<String, String> by lazy {
        Gson().fromJson(variable, object : TypeToken<HashMap<String, String>>() {}.type)?: hashMapOf()
    }

    override fun putVariable(key: String, value: String?) {
        if (value != null) {
            variableMap[key] = value
        } else {
            variableMap.remove(key)
        }
        variable =  Gson().toJson(variableMap)
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