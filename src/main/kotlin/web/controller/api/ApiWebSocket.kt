package web.controller.api

import kotlinx.coroutines.runBlocking
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.Semaphore
import kotlinx.coroutines.sync.withLock
import org.apache.ibatis.solon.annotation.Db
import org.noear.solon.annotation.Controller
import org.noear.solon.annotation.Inject
import org.noear.solon.annotation.Mapping
import org.noear.solon.net.annotation.ServerEndpoint
import org.noear.solon.net.websocket.WebSocket
import org.noear.solon.net.websocket.listener.SimpleWebSocketListener
import org.slf4j.LoggerFactory
import web.mapper.UsersMapper
import web.mapper.UsertockenMapper
import java.io.IOException



@Controller
@ServerEndpoint(routepath+"/ws")
class ApiWebSocket : SimpleWebSocketListener() {

    class WebMsg{
        val semaphore = Semaphore(1)
        var html=""
    }

    companion object{
        val logger = LoggerFactory.getLogger(ApiWebSocket::class.java)
        private var ma:MutableMap<String,WebSocket> = mutableMapOf()
        private var malock:MutableMap<String,WebMsg> = mutableMapOf()

        private val mutex = Mutex()
        suspend fun add(key:String, value:WebSocket){
            mutex.withLock {
                logger.info("WebSocket Adding $key")
                ma[key]=value
            }
        }
        suspend fun remove(key:String){
            mutex.withLock {
                ma.remove( key)
            }
        }
        suspend fun get(key:String):WebSocket?{
            mutex.withLock {
                return ma[key]
            }
        }

        suspend fun lock(key:String){
            var webMsg = WebMsg()
            mutex.withLock {
                logger.info("WebSocket lock $key")
                webMsg.semaphore.acquire()
                malock[key]=webMsg
            }
            webMsg.semaphore.acquire()
            logger.info("WebSocket endlock $key")
        }

        suspend fun gethtml(key:String):String{
            var html=""
            logger.info("WebSocket gethtml $key")
            mutex.withLock {
                var webMsg = malock[key]
                if(webMsg!=null){
                    html=webMsg.html
                    malock.remove( key)
                }
            }
            return html
        }

        suspend fun addhtml(key:String,html:String){
            logger.info("WebSocket addhtml $key")
            mutex.withLock {
                var webMsg = malock[key]
                if(webMsg!=null){
                    webMsg.html=html
                    webMsg.semaphore.release()
                }
            }
        }
    }

    @Db("db")
    @Inject
    lateinit var usersMapper: UsersMapper

    @Db("db")
    @Inject
    lateinit var usertockenMapper: UsertockenMapper

    override fun onOpen(socket: WebSocket) {
        val accessToken: String = socket.param("id")
        logger.info("websocket Open $accessToken")
        if (accessToken == null || accessToken.isBlank()) {
            socket.close()
            return
        }

        var tocken=usertockenMapper.selectById(accessToken)
        if (tocken == null) {
            logger.info("websocket tocken is null")
            socket.close()
            return
        }

        var user=usersMapper.selectById(tocken.userid)
        if (user == null) {
            logger.info("websocket user is null")
            socket.close()
            return
        }
        runBlocking {add(accessToken,socket)}

    }

    @Throws(IOException::class)
    override fun onMessage(socket: WebSocket, text: String) {
        socket.send("我收到了：$text")
    }

    override  fun onClose(socket: WebSocket?){
        super.onClose(socket)
         runBlocking {
             remove(socket!!.param("id"))
        }
    }
}