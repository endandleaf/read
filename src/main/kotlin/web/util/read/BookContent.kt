package web.util.read

import book.model.Book
import book.webBook.WBook
import book.webBook.exception.ConcurrentException
import web.model.BookSource
import kotlinx.coroutines.Deferred
import kotlinx.coroutines.async
import kotlinx.coroutines.delay
import kotlinx.coroutines.runBlocking
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import org.noear.solon.net.websocket.WebSocket
import web.controller.api.ApiWebSocket.WebMsg
import web.controller.api.ReadController.Companion.getBookbycache
import web.controller.api.ReadController.Companion.getChapterListbycache
import web.controller.api.ReadController.Companion.setBookContentbycache
import web.controller.api.ReadController.Companion.setBookbycache
import web.controller.api.ReadController.Companion.setChapterListbycache
import web.model.Users

object  BookContent {
    private var ma:MutableMap<String, Deferred<String>> = mutableMapOf()
    private val mutex = Mutex()

    fun  getbookcontent(accessToken:String,user: Users, source:BookSource, url:String, index:Int):String= runBlocking{
        var key="url:$url,index:$index"
        var deferred: Deferred<String>? = null
        mutex.withLock {
            deferred=ma[key]
        }
        if(deferred == null) {
            mutex.withLock {
                deferred=async{ getBookContent(accessToken,user,source,url,index) }
                ma[key]= deferred!!
            }
        }
        runCatching {
           return@runBlocking deferred!!.await().also { println(key+"完成");remove(key) }
        }.onFailure {
            it.printStackTrace()
        }
        println(key+"失败")
        remove(key).let { "" }
    }

    private suspend fun remove(key:String){
        mutex.withLock {
            ma.remove(key)
        }
    }

    private suspend fun getBookContent(accessToken:String,user: Users, source:BookSource, url:String, index:Int):String {
        var chapterlist= getChapterListbycache(url)
        if(chapterlist == null){
            chapterlist= getlist(url,source,user.id!!,accessToken).also{
                setChapterListbycache(url,it)
            }
        }
        var webBook = WBook(source.json?:"",user.id!!,accessToken, false)
        var book= getBookbycache(url).let {
            if(it==null){
                getbook(webBook,url)!!.also { setBookbycache(url,it) }
            }else{
                it
            }
        }
        return webBook.getBookContent(book,chapterlist[index]).also { setBookContentbycache(url,it,index) }
    }

    private fun getbook(webBook: WBook, url:String): Book?= runBlocking{
        var book:Book?=null
        runCatching {
           book= webBook.getBookInfo(url,canReName = true)
        }.onFailure {
            if(it is ConcurrentException){
                println("getbook 并发原因？？？？")
                delay(1000)
                book=getbook(webBook,url)
            }
        }
        book
    }
}