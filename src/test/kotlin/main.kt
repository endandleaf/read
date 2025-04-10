import book.model.Book
import book.webBook.localBook.LocalBook


fun  main(){
    var txt="/Users/q9uo11/Documents/人在名柯，我的岳母有点多.epub"
    val book = Book.initLocalBook(txt, txt, "")
    val chapters = LocalBook.getChapterList(book)

    println(LocalBook.getContent(book, chapters[ 1]))
}