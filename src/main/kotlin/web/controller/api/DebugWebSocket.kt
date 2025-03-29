package web.controller.api

import book.WBook.Debugger
import book.app.ToastMessage
import book.webBook.WBook
import com.google.gson.Gson
import kotlinx.coroutines.runBlocking
import org.apache.ibatis.solon.annotation.Db
import org.noear.solon.annotation.Controller
import org.noear.solon.annotation.Inject
import org.noear.solon.net.annotation.ServerEndpoint
import org.noear.solon.net.websocket.WebSocket
import org.noear.solon.net.websocket.listener.SimpleWebSocketListener
import org.slf4j.LoggerFactory
import web.mapper.BookSourceMapper
import web.mapper.UsersMapper
import web.mapper.UsertockenMapper
import web.model.Users
import web.response.JsonResponse
import java.io.IOException

@Controller
@ServerEndpoint(routepath+"/debug")
open  class DebugWebSocket : SimpleWebSocketListener() {
    @Db("db")
    @Inject
    lateinit var usersMapper: UsersMapper

    @Db("db")
    @Inject
    lateinit var usertockenMapper: UsertockenMapper

    @Db("db")
    @Inject
    lateinit var booksourcemapper: BookSourceMapper

    private  val logger= LoggerFactory.getLogger(DebugWebSocket::class.java)

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
    }

    @Throws(IOException::class)
    override fun onMessage(socket: WebSocket, text: String): Unit = runBlocking{
        val accessToken: String = socket.param("id")
        val user=getuserbytocken(accessToken)
        var msg=Gson().fromJson(text, DebugMsg::class.java)
        if (msg.url == null || msg.url!!.isBlank()){
            socket.send("event: error\n")
            socket.send(Gson().toJson(JsonResponse(false,"书源连接不存在")) + "\n\n")
            socket.close()
            return@runBlocking
        }
        if (msg.key == null || msg.key!!.isBlank()){
            socket.send("event: error\n")
            socket.send(  Gson().toJson(JsonResponse(false,"请输入搜索关键词")) + "\n\n")
            socket.close()
            return@runBlocking
        }
        var bookSource=booksourcemapper.selectById(msg.url)
        if (bookSource == null){
            socket.send("event: error\n")
            socket.send(Gson().toJson(JsonResponse(false,"未配置书源")) + "\n\n")
            socket.close()
            return@runBlocking
        }
        val debugger = Debugger { msg ->
            socket.send( Gson().toJson(mapOf("msg" to msg)) + "\n\n")
            logger.info( Gson().toJson(mapOf("msg" to msg)) + "\n\n")
        }
        runCatching {
            val webBook = WBook(bookSource!!.json ?: "", user!!.id!!, accessToken, true)
            debugger.startDebug(webBook, msg.key!!)
        }
        //socket.send("event: end\n")
        //socket.send( Gson().toJson(mapOf("end" to true)) + "\n\n")
        socket.close()
    }


    fun getuserbytocken(accessToken:String?): Users?{
        if (accessToken == null || accessToken.isBlank()) {
            return null
        }
        var tocken=usertockenMapper.selectById(accessToken)
        if (tocken == null) {
            return null
        }
        var user=usersMapper.selectById(tocken.userid)
        if (user == null) {
            return null
        }
        return user
    }
}

class DebugMsg{
    var url:String?=null
    var key:String?=null
}
