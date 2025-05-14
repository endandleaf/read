package web.controller.api

import book.WBook.Debugger
import book.model.RssSource
import book.webBook.WBook
import com.google.gson.Gson
import kotlinx.coroutines.runBlocking
import org.apache.ibatis.solon.annotation.Db
import org.noear.solon.annotation.Controller
import org.noear.solon.annotation.Inject
import org.noear.solon.core.util.DataThrowable
import org.noear.solon.net.annotation.ServerEndpoint
import org.noear.solon.net.websocket.WebSocket
import org.noear.solon.net.websocket.listener.SimpleWebSocketListener
import org.slf4j.LoggerFactory
import web.mapper.RssSourceMapper
import web.mapper.UserRssSourceMapper
import web.mapper.UsersMapper
import web.mapper.UsertockenMapper
import web.model.BaseSource
import web.model.Users
import web.response.JsonResponse
import web.response.NOT_IS
import java.io.IOException

@Controller
@ServerEndpoint(routepath+"/rssdebug")
class RssDebugWebSocket : SimpleWebSocketListener() {
    @Db("db")
    @Inject
    lateinit var usersMapper: UsersMapper

    @Db("db")
    @Inject
    lateinit var usertockenMapper: UsertockenMapper

    @Db("db")
    @Inject
    lateinit var rssSourceMapper: RssSourceMapper

    @Db("db")
    @Inject
    lateinit var userRssSourceMapper: UserRssSourceMapper

    private  val logger= LoggerFactory.getLogger(RssDebugWebSocket::class.java)

    override fun onOpen(socket: WebSocket) {
        val accessToken: String = socket.param("id")
        logger.info("websocket Open $accessToken")
        if (accessToken.isBlank()) {
            socket.close()
            return
        }

        val tocken=usertockenMapper.selectById(accessToken)
        if (tocken == null) {
            logger.info("websocket tocken is null")
            socket.close()
            return
        }

        val user=usersMapper.selectById(tocken.userid)
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
        if (user == null){
            socket.send("event: error\n")
            socket.send(Gson().toJson(JsonResponse(false,"user不存在")) + "\n\n")
            socket.close()
            return@runBlocking
        }
        val msg= Gson().fromJson(text, DebugMsg::class.java)
        if (msg.url == null || msg.url!!.isBlank()){
            socket.send("event: error\n")
            socket.send(Gson().toJson(JsonResponse(false,"订阅源连接不存在")) + "\n\n")
            socket.close()
            return@runBlocking
        }
        val rss=if(user.source == 2){
            userRssSourceMapper.getRssSource(msg.url?:"",user.id!!)?.toBaseSource()
        }else{
            rssSourceMapper.getRssSource(msg.url?:"")?.toBaseSource()
        }
        if (rss == null){
            socket.send("event: error\n")
            socket.send(Gson().toJson(JsonResponse(false,"未配置订阅源")) + "\n\n")
            socket.close()
            return@runBlocking
        }
        val debugger = Debugger { msg ->
            socket.send( Gson().toJson(mapOf("msg" to msg)) + "\n\n")
            logger.info( Gson().toJson(mapOf("msg" to msg)) + "\n\n")
        }
        runCatching {
            val rssSource= RssSource.fromJson(rss.json?:"")
            rssSource.userid=user.id
            rssSource.usertocken=accessToken
            debugger.startDebug(rssSource)
        }
        socket.close()
    }


    fun getuserbytocken(accessToken:String?): Users?{
        if (accessToken == null || accessToken.isBlank()) {
            return null
        }
        val tocken=usertockenMapper.selectById(accessToken)
        if (tocken == null) {
            return null
        }
        val user=usersMapper.selectById(tocken.userid)
        if (user == null) {
            return null
        }
        return user
    }
}