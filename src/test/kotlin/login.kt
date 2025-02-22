import book.model.BookSource
import book.util.Base64
import book.util.EncoderUtils
import java.io.File

fun base64Decode(str: String): String {
    return EncoderUtils.base64Decode(str, Base64.NO_WRAP)
}
fun main(){
    var str="data:;base64,L2NvbnRlbnQ/aXRlbV9pZD03MjgxNDk1NzU5NzEwODQ3NTQ2JmRldmljZT0yMDExMGQ0OS1iMzVkLTRkOTUtODY5ZC1kZWE2NmI4YjMzNTMmc291cmNlPeeVquiMhCZ0YWI9,{\"type\":\"qingtian\"}"
    println(base64Decode(str))
    return
    var path="/Users/q9uo11/Downloads/edge/a.json"
    var json = File(path).readText(Charsets.UTF_8)
    var source= BookSource.fromJson(json).getOrNull()
    if(source != null){
        var js=source.loginUrl+"\nsource.getLoginInfoMap()"
        println(js)
        println(source.evalJS(js))
    }
}