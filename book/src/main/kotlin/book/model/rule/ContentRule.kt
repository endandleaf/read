package book.model.rule

data class ContentRule(
    var content: String? = null,
    var nextContentUrl: String? = null,
    var title: String? = null,
    var webJs: String? = null,
    var sourceRegex: String? = null,
    var payAction: String? = null,
    var replaceRegex: String? = null, //替换规则
    var imageStyle: String? = null,  //默认大小居中,FULL最大宽度
)