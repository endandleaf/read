package web.util.read

import book.model.Book
import book.model.BookChapter
import book.webBook.WBook
import book.webBook.exception.ConcurrentException
import book.webBook.localBook.LocalBook
import kotlinx.coroutines.delay
import kotlinx.coroutines.runBlocking
import web.controller.api.ReadController
import web.model.BookSource
import web.model.Booklist
import web.service.MyCacheService
import web.util.mapper.mapper

fun updatebook(book: Booklist, source: BookSource,userid:String) = runBlocking{
    var list= getlist(book.bookUrl!! ,source,userid,"")
    if (list!=null){
        var lastCheckTime=System.currentTimeMillis()
        var lastCheckCount=list.size
        if (list.size != book.totalChapterNum ){
            var totalChapterNum=list.size
            var latestChapterTitle=list[list.size-1].title
            var latestChapterTime=System.currentTimeMillis()
            ReadController.removeChapterListbycache(book.bookUrl?:"")
            ReadController.setChapterListbycache(book.bookUrl?:"",list)
            mapper.get().booklistMapper.updatetime(book.id!!,latestChapterTitle,latestChapterTime,lastCheckTime,lastCheckCount, totalChapterNum )
        }else{
            mapper.get().booklistMapper.updatetimefail(book.id!!,lastCheckTime,lastCheckCount)
        }
    }
}

fun getlist(url:String):List<BookChapter>{
    val book = Book.initLocalBook(url, url, "")
    val chapters = LocalBook.getChapterList(book)
    return  chapters
}

suspend fun getlist(url:String, source: BookSource,userid:String,accessToken :String):List<BookChapter>{
    var webBook = WBook(source.json?:"",userid,accessToken, false)
    var re:List<BookChapter> = listOf()
    var book: Book?=null
    runCatching {
        book=webBook.getBookInfo(url,canReName = true)
        re=webBook.getChapterList(book!!)
    }.onFailure {
        if(it is ConcurrentException){
            println("getlist并发原因？？？？")
            delay(1000)
            return getlist(url,source,userid,accessToken)
        }
        throw it
    }
    return re
}
