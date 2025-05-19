package web.controller.api

import org.apache.ibatis.solon.annotation.Db
import org.noear.solon.annotation.Inject
import org.noear.solon.net.websocket.WebSocket
import org.noear.solon.net.websocket.listener.SimpleWebSocketListener
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import web.mapper.UsersMapper
import web.mapper.UsertockenMapper
import web.model.Users

open class BaseDebug: SimpleWebSocketListener()  {
    @Db("db")
    @Inject
    lateinit var usersMapper: UsersMapper

    @Db("db")
    @Inject
    lateinit var usertockenMapper: UsertockenMapper

    open val logger: Logger = LoggerFactory.getLogger(BaseDebug::class.java)

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

    fun getuserbytocken(accessToken:String?): Users?{
        if (accessToken.isNullOrBlank()) {
            return null
        }
        val tocken= usertockenMapper.selectById(accessToken) ?: return null
        val user= usersMapper.selectById(tocken.userid) ?: return null
        return user
    }
}

class DebugMsg{
    var url:String?=null
    var key:String?=null
}
