package web.cron

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper
import kotlinx.coroutines.Job
import kotlinx.coroutines.joinAll
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking
import kotlinx.coroutines.sync.Semaphore
import org.noear.solon.scheduling.annotation.Scheduled
import org.slf4j.LoggerFactory
import web.model.Booklist
import web.util.mapper.mapper
import web.util.read.updatebook

@Scheduled(fixedRate = 1000 * 60*30)
class BookJob: Runnable {
    private val logger = LoggerFactory.getLogger(BookJob::class.java)
    companion object {
        private var isupdatebookcron = false
    }
    override fun run() = runBlocking{
        if (isupdatebookcron) {
            return@runBlocking
        }
        val semaphore = Semaphore(5)
        val jobs = mutableListOf<Job>()
        logger.info("更新书本信息")
        isupdatebookcron = true
        runCatching {
            var booklist = mapper.get().booklistMapper.selectList(QueryWrapper<Booklist>())
            booklist.forEach {
                runCatching {
                    if(it.origin != "loc_book"){
                        var source = mapper.get().bookSourcemapper.getBookSource(it.origin?:"jskadhjka")
                        if (source != null ) {
                            val book=it
                            launch{
                                semaphore.acquire()
                                logger.info("更新${book.name}")
                                runCatching {  updatebook(book, source,book.userid?:"admin") }
                                logger.info("完成更新${book.name}")
                                semaphore.release()
                            }.let {
                                jobs.add(it)
                            }
                        }
                    }
                }
            }
        }
        jobs.joinAll()
        logger.info("完成更新书本信息")
        isupdatebookcron = false
    }





}