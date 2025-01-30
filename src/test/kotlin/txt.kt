import book.model.Book
import book.webBook.localBook.LocalBook
import com.google.gson.Gson
import kotlinx.coroutines.runBlocking


fun main()= runBlocking {
    var localpath="/Users/q9uo11/Downloads/灵剑尊.txt"
    val book = Book.initLocalBook(localpath, localpath, "")
    val chapters = LocalBook.getChapterList(book)
    chapters.forEach {
        println(Gson().toJson(it))
    }
    println(LocalBook.getContent(book,chapters[0]))
}