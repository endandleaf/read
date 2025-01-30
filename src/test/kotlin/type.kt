import book.model.BookChapter
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import java.lang.reflect.Type

private  fun StringtoAny(str:String, type: Type)=run {
    when(type){
        object :TypeToken<String>() {}.type -> return "string"
        object :TypeToken<Int>() {}.type -> return "Number"
        else -> ""
    }
}

fun  main(){
    println(StringtoAny("string",String::class.java))
}