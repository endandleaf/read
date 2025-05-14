import book.webBook.WBook
import kotlinx.coroutines.runBlocking
import java.io.File

 fun main() {
   runBlocking {
       var json= File("/Users/q9uo11/Documents/681de459a8f2c.json").readText()
       var web=WBook(json,"")
       kotlin.runCatching {
           web.searchBook("火")
       }.onFailure {
           it.printStackTrace()
       }
   }
}

