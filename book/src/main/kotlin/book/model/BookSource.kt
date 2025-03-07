package book.model

import book.model.rule.*
import book.util.GSON
import book.util.fromJsonObject
import book.util.help.SourceAnalyzer
import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import java.io.InputStream


@JsonIgnoreProperties("headerMap", "source")
class BookSource(
    var bookSourceName: String = "",           // 名称
    var bookSourceGroup: String? = null,       // 分组
    override var loginUi: String? = null, // 登录UI
//    @PrimaryKey
    var bookSourceUrl: String = "",           // 地址，包括 http/https
    var bookSourceType: Int = 0,               // 类型，0 文本，1 音频
    var bookUrlPattern: String? = null,       //详情页url正则
    var customOrder: Int = 0,                 // 手动排序编号
    var enabled: Boolean = true,            // 是否启用
    var enabledExplore: Boolean = true,     //启用发现
    override var concurrentRate: String? = null,    //并发率
    override var header: String? = null,
    override var loginUrl: String? = null,             // 登录地址
    var loginCheckJs: String? = null,           // 登录检测js
    var lastUpdateTime: Long = 0,             // 最后更新时间，用于排序
    var weight: Int = 0,                      // 智能排序的权重
    var exploreUrl: String? = null,                 // 发现url
    var ruleExplore: ExploreRule? = null,           // 发现规则
    var searchUrl: String? = null,                  // 搜索url
    var ruleSearch: SearchRule? = null,             // 搜索规则
    var ruleBookInfo: BookInfoRule? = null,         // 书籍信息页规则
    var ruleToc: TocRule? = null,                   // 目录页规则
    var ruleContent: ContentRule? = null,            // 正文页规则
    var bookSourceComment: String? = null,           // 注释
    var respondTime: Long = 180000L,               // 响应时间，用于排序
    override var jsLib:String?=null,
    override var enabledCookieJar: Boolean?=false,
    override var userid: String?="",
    override var usertocken: String?=null,
) : BaseSource {
    //    @Ignore
//    @IgnoredOnParcel
    private var searchRuleV: SearchRule? = null

    //    @Ignore
//    @IgnoredOnParcel
    private var exploreRuleV: ExploreRule? = null

    //    @Ignore
//    @IgnoredOnParcel
    private var bookInfoRuleV: BookInfoRule? = null

    //    @Ignore
//    @IgnoredOnParcel
    private var tocRuleV: TocRule? = null

    //    @Ignore
//    @IgnoredOnParcel
    private var contentRuleV: ContentRule? = null

    override fun getTag(): String {
        return bookSourceName
    }

    override fun getKey(): String {
        return bookSourceUrl
    }

    override fun hashCode(): Int {
        return bookSourceUrl.hashCode()
    }

    override fun equals(other: Any?) =
        if (other is BookSource) other.bookSourceUrl == bookSourceUrl else false


    fun getSearchRule(): SearchRule {
        return ruleSearch ?: SearchRule()
    }

    fun getExploreRule(): ExploreRule {
        return ruleExplore ?: ExploreRule()
    }

    fun getBookInfoRule(): BookInfoRule {
        return ruleBookInfo ?: BookInfoRule()
    }

    fun getTocRule(): TocRule {
        return ruleToc ?: TocRule()
    }

    fun getContentRule(): ContentRule {
        return ruleContent ?: ContentRule()
    }

    fun equal(source: BookSource): Boolean {
        return equal(bookSourceName, source.bookSourceName)
                && equal(bookSourceUrl, source.bookSourceUrl)
                && equal(bookSourceGroup, source.bookSourceGroup)
                && bookSourceType == source.bookSourceType
                && equal(bookUrlPattern, source.bookUrlPattern)
                && enabled == source.enabled
                && enabledExplore == source.enabledExplore
                && equal(header, source.header)
                && equal(loginUrl, source.loginUrl)
                && equal(exploreUrl, source.exploreUrl)
                && equal(searchUrl, source.searchUrl)
                && getSearchRule() == source.getSearchRule()
                && getExploreRule() == source.getExploreRule()
                && getBookInfoRule() == source.getBookInfoRule()
                && getTocRule() == source.getTocRule()
                && getContentRule() == source.getContentRule()
    }

    private fun equal(a: String?, b: String?): Boolean {
        return a == b || (a.isNullOrEmpty() && b.isNullOrEmpty())
    }

    data class ExploreKind(
        var title: String,
        var url: String? = null
    )

    companion object {

        fun fromJson(json: String): Result<BookSource> {
            return SourceAnalyzer.jsonToBookSource(json)
        }

        fun fromJsonArray(json: String): Result<MutableList<BookSource>> {
            return SourceAnalyzer.jsonToBookSources(json)
        }

        fun fromJsonArray(inputStream: InputStream): Result<MutableList<BookSource>> {
            return SourceAnalyzer.jsonToBookSources(inputStream)
        }
    }

    class Converters {

        fun exploreRuleToString(exploreRule: ExploreRule?): String =
            GSON.toJson(exploreRule)

        fun stringToExploreRule(json: String?) =
            GSON.fromJsonObject<ExploreRule>(json).getOrNull()

        fun searchRuleToString(searchRule: SearchRule?): String =
            GSON.toJson(searchRule)

        fun stringToSearchRule(json: String?) =
            GSON.fromJsonObject<SearchRule>(json).getOrNull()

        fun bookInfoRuleToString(bookInfoRule: BookInfoRule?): String =
            GSON.toJson(bookInfoRule)

        fun stringToBookInfoRule(json: String?) =
            GSON.fromJsonObject<BookInfoRule>(json).getOrNull()

        fun tocRuleToString(tocRule: TocRule?): String =
            GSON.toJson(tocRule)

        fun stringToTocRule(json: String?) =
            GSON.fromJsonObject<TocRule>(json).getOrNull()

        fun contentRuleToString(contentRule: ContentRule?): String =
            GSON.toJson(contentRule)

        fun stringToContentRule(json: String?) =
            GSON.fromJsonObject<ContentRule>(json).getOrNull()

    }
}