package web.controller.api

import book.app.ToastMessage
import com.google.gson.Gson
import kotlinx.coroutines.runBlocking
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.Semaphore
import kotlinx.coroutines.sync.withLock
import org.apache.ibatis.solon.annotation.Db
import org.noear.solon.annotation.Controller
import org.noear.solon.annotation.Inject
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

        suspend fun lock(id:String){
            var webMsg = WebMsg()
            logger.info("WebSocket lock $id")
            webMsg.semaphore.acquire()
            mutex.withLock {
                malock[id]=webMsg
            }
            webMsg.semaphore.acquire()
            logger.info("WebSocket endlock $id")
        }

        suspend fun gethtml(id:String):String{
            var html=""
            var webMsg: WebMsg? = null
            logger.info("WebSocket gethtml $id")
            mutex.withLock {
                webMsg = malock[id]
            }
            if(webMsg!=null){
                html=webMsg!!.html
                malock.remove( id)
            }
            return html
        }

        suspend fun addhtml(id:String,html:String){
            logger.info("WebSocket addhtml $id")
            var webMsg: WebMsg? = null
            mutex.withLock {
                 webMsg = malock[id]
            }
            if(webMsg!=null){
                webMsg!!.html=html
                webMsg!!.semaphore.release()
                webMsg!!.semaphore.release()
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
            socket.send(Gson().toJson(ToastMessage(msg = "logout", str="logout" )))
            socket.close()
            return
        }

        var user=usersMapper.selectById(tocken.userid)
        if (user == null) {
            logger.info("websocket user is null")
            socket.send(Gson().toJson(ToastMessage(msg = "logout", str="logout" )))
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