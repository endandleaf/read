package book.webBook.analyzeRule

interface RuleDataInterface {

    val variableMap: HashMap<String, String>

    fun putVariable(key: String, value: String?,userid:String)

    fun getVariable(key: String,userid:String): String? {
        return variableMap[key]
    }

}