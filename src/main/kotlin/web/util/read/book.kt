package web.util.read

import book.model.Book
import book.model.BookChapter
import book.webBook.WBook
import book.webBook.exception.ConcurrentException
import book.webBook.localBook.LocalBook
import kotlinx.coroutines.delay
import kotlinx.coroutines.runBlocking
import web.controller.api.ReadController
import web.controller.api.ReadController.Companion.getBookbycache
import web.controller.api.ReadController.Companion.setBookbycache
import web.model.BookSource
import web.model.Booklist
import web.util.mapper.mapper
import kotlin.random.Random

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
            mapper.get().bookCacheMapper.getCache(book.userid!!,book.id!!).let {
                if(it!=null){
                    mapper.get().bookCacheMapper.updatetime(it.id!!,totalChapterNum)
                }
            }
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
    val webBook = WBook(source.json?:"",userid,accessToken, false)
    val book= getBookbycache(url).let {
        if(it==null){
            getbook(webBook,url).also { setBookbycache(url,it) }
        }else{
            it
        }
    }
    return getChapterList(webBook,book)
}

suspend fun getChapterList(webBook: WBook,book: Book):List<BookChapter>{
    var re:List<BookChapter> = listOf()
    runCatching {
        re=webBook.getChapterList(book)
    }.onFailure {
        if(it is ConcurrentException){
            println("getlist并发原因？？？？${it.message}")
            val randomNumber = Random.nextInt(1000, 500).toLong()
            delay(randomNumber)
            return getChapterList(webBook,book)
        }
        throw it
    }
    return re
}

suspend fun  getbook(webBook:WBook, url:String):Book{
    var book: Book?=null
    runCatching {
        book=webBook.getBookInfo(url,canReName = true)
    }.onFailure {
        if(it is ConcurrentException){
            println("getlist并发原因？？？？${it.message}")
            val randomNumber = Random.nextInt(1000, 500).toLong()
            delay(randomNumber)
            return getbook(webBook,url)
        }
        throw it
    }
    return book!!
}
