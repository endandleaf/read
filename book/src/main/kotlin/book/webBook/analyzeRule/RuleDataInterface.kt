package book.webBook.analyzeRule

interface RuleDataInterface {

    val variableMap: HashMap<String, String>

    var userid: String

    fun putVariable(key: String, value: String?)

    fun getVariable(key: String): String? {
        return variableMap[key]
    }


}