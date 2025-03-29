package web.util.read

import book.model.Book
import book.webBook.WBook
import book.webBook.exception.ConcurrentException
import book.webBook.localBook.LocalBook
import kotlinx.coroutines.*
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.Semaphore
import kotlinx.coroutines.sync.withLock
import org.slf4j.LoggerFactory
import web.controller.api.ReadController.Companion.getBookContentbycache
import web.controller.api.ReadController.Companion.getBookbycache
import web.controller.api.ReadController.Companion.getChapterListbycache
import web.controller.api.ReadController.Companion.setBookContentbycache
import web.controller.api.ReadController.Companion.setBookbycache
import web.controller.api.ReadController.Companion.setChapterListbycache
import web.model.BookSource
import web.model.Users
import web.util.mapper.mapper
import java.lang.Thread.sleep
import java.util.*

object Bookcache {

    private var ma:MutableMap<String, Deferred<Any>> = mutableMapOf()
    private val mutex = Mutex()

    private val logger = LoggerFactory.getLogger(Bookcache::class.java)

    val semaphore = Semaphore(10)

    val semaphore2 = Semaphore(50)

     fun  addcache(key:String) = runBlocking {
        var deferred: Deferred<Any>? = null
        mutex.withLock {
            deferred= ma[key]
        }
        if(deferred == null) {
            mutex.withLock {
                deferred=async{
                   runCatching {
                       cache(key)
                   }.apply {  removecache(key)   }
                }
                ma[key]= deferred!!
            }
        }
    }

    suspend fun  removecache(key:String) {
        logger.info("缓存完成remove $key")
        mutex.withLock {
            ma.remove(key)
        }
    }

    fun cache(id:String) = runBlocking {
        var cache=mapper.get().bookCacheMapper.selectById(id)
        if(cache != null ) {
            var zx=(cache.num ?: 0) < (cache.totalChapterNum ?: 0)
            var user=mapper.get().usersMapper.selectById(cache.userid)
            if (user == null) return@runBlocking
            var book=mapper.get().booklistMapper.selectById(cache.bookid)
            if (book == null) return@runBlocking
            var source:BookSource? = null
            if(book.origin != "loc_book"){
                source = mapper.get().bookSourcemapper.getBookSource(book.origin?:"jskadhjka")
                if (source == null) return@runBlocking
            }

            val jobs = mutableListOf<Job>()
            cache.num=0
            var list = (cache.cacheindex?:"").split(",").toMutableSet()
            logger.info("缓存开始${book.name}")
            for(i in 0..(cache.totalChapterNum ?: 0)-1){
                val x=i
                if(list.contains(x.toString())){
                    var re=""
                   runCatching{
                       semaphore2.acquire()
                        re=getBookContentbycache(book.bookUrl!!, x,user.id!!)?:""
                    }.let {
                       semaphore2.release()
                   }
                    if(re.isNotEmpty()){
                        cache.num=(cache.num ?: 0)+1
                        continue
                    }else{
                        list.remove(x.toString())
                    }
                }
                launch{
                    semaphore.acquire()
                    if(mapper.get().bookCacheMapper.selectById(id) == null) {
                        semaphore.release()
                        return@launch
                    }
                    var z=false
                    var re=""
                    runCatching {
                        re=getBookContentbycache(book.bookUrl!!, x,user.id!!)?:""
                        if(re.isEmpty()){
                            z=true
                            if(book.origin != "loc_book"){
                                re=getBookContent("",user,source!!,book.bookUrl?:" ",x)
                            }else{
                                val url=book.bookUrl?:" "
                                var chapterlist = getChapterListbycache(url,user!!.id!!)
                                if (chapterlist == null) {
                                    chapterlist = getlist(url).also {
                                        setChapterListbycache(url, it,user!!.id!!)
                                    }
                                }
                                val b = Book.initLocalBook(url, url, "")
                                re= LocalBook.getContent(b, chapterlist[x]).toString().also { setBookContentbycache(url,it,x,user.id!!) }
                            }
                        }
                    }
                    if ( re.length > 50 || book.origin == "loc_book"){
                        mutex.withLock {
                            list.add(x.toString())
                            cache.cacheindex= list.joinToString(",")
                            cache.num=(cache.num ?: 0)+1
                            if(zx) mapper.get().bookCacheMapper.updateById(cache)
                        }
                        logger.info("完成缓存${book.name},index:$x")
                    }else{
                        println(re)
                        logger.info("缓存失败${book.name},index:$x")
                    }
                    if(z && book.origin != "loc_book") sleep(1000)
                    semaphore.release()
                }.let {
                    jobs.add(it)
                }
            }
            logger.info("缓存检测完成${book.name}")
            mutex.withLock {
                cache.cacheindex= list.joinToString(",")
                mapper.get().bookCacheMapper.updateById(cache)
            }
            zx=true
            jobs.joinAll()
            mapper.get().bookCacheMapper.updateById(cache)
            logger.info("缓存完成${book.name}")
        }
    }

    private suspend fun getBookContent(accessToken:String, user: Users, source: BookSource, url:String, index:Int):String {
        var chapterlist= getChapterListbycache(url,user.id!!)
        if(chapterlist == null){
            chapterlist= getlist(url,source,user.id!!,accessToken).also{
                setChapterListbycache(url,it,user.id!!)
            }
        }
        val webBook = WBook(source.json?:"",user.id!!,accessToken, false)
        val book= getBookbycache(url,user.id!!).let {
            if(it==null){
                getbook(webBook, url)!!.also { setBookbycache(url,it,user.id!!) }
            }else{
                it
            }
        }
        val systembook=mapper.get().booklistMapper.getbook(user.id!!,url)
        if(systembook!=null){
            book.durChapterIndex=systembook.durChapterIndex?:0
        }
        var nexturl=if(index+1 < chapterlist.size) chapterlist[index+1].url else ""
        return webBook.getBookContent(book,chapterlist[index],nexturl).also { setBookContentbycache(url,it,index,user.id!!) }
    }

    private fun getbook(webBook: WBook, url:String): Book?= runBlocking{
        var book: Book?=null
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