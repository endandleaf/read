package web.config

import book.app.Response
import book.app.ToastMessage
import book.app.WebMessage
import com.google.gson.Gson
import kotlinx.coroutines.runBlocking
import org.noear.solon.annotation.Bean
import org.noear.solon.annotation.Configuration
import org.slf4j.LoggerFactory
import web.controller.api.ApiWebSocket
import web.mapper.UserCookieMapper
import web.util.cache.checkfile
import java.lang.Thread.sleep
import java.util.*
import kotlin.concurrent.thread

@Configuration
class InitConfig {

    val logger = LoggerFactory.getLogger(InitConfig::class.java)




    @Bean
    fun cookieinit(userCookieMapper: UserCookieMapper) {
        checkfile()
        Response.startBrowserAwait=fun (urlStr: String,title: String,tocken:String,hide:Boolean,header:String):Response = runBlocking{
            println(tocken)
            var socket=ApiWebSocket.get(tocken)
            if(socket!=null){
                var id= UUID.randomUUID().toString()
                if(!hide){
                    logger.info("startBrowser ,url: $urlStr ,title: $title, tocken: $tocken ")
                    socket.send(Gson().toJson(WebMessage(msg = "startBrowser", url = urlStr,title=title,id=id, header = header )))
                    var z=false
                    thread {
                        for(i in 0.. 2){
                            sleep(1000*60)
                            if(z) break
                        }
                        if(!z){
                            runBlocking {  ApiWebSocket.addhtml(id,"") }
                        }
                    }
                    ApiWebSocket.lock(id).let {  z=true }
                    val html=ApiWebSocket.gethtml(id)
                    return@runBlocking Response(body = html,url = urlStr, code = 200)
                }else{
                    logger.info("hidestartBrowser ,url: $urlStr ,title: $title, tocken: $tocken ")
                    socket.send(Gson().toJson(WebMessage(msg = "hidestartBrowser", url = urlStr,title=title ,id=id , header = header )))
                    var z=false
                    thread {
                        for(i in 0.. 2){
                            sleep(1000*60)
                            if(z) break
                        }
                        if(!z){
                            runBlocking {  ApiWebSocket.addhtml(id,"") }
                        }
                    }
                    ApiWebSocket.lock(id).let {  z=true }
                    val html=ApiWebSocket.gethtml(id)
                    return@runBlocking Response(body = html,url = urlStr, code = 200)
                }
            }
            return@runBlocking Response(body = "",url = urlStr, code = 200)
        }

        Response.webview=fun (html: String?, url: String?, js: String?,tocken:String,header:String):Response = runBlocking{
            var socket=ApiWebSocket.get(tocken)
            if(socket!=null){
                var id= UUID.randomUUID().toString()
                //logger.info("webview ,url: $url ,js: $js, html:$html, tocken: $tocken ")
                socket.send(Gson().toJson(WebMessage(msg = "webview", url = url?:"",title=js?:"", html = html?:"" ,id=id ,header=header)))
                var z=false
                thread {
                    for(i in 0.. 2){
                        sleep(1000*60)
                        if(z) break
                    }
                    if(!z){
                        runBlocking {  ApiWebSocket.addhtml(id,"") }
                    }
                }
                ApiWebSocket.lock(id).let {  z=true }
                val html=ApiWebSocket.gethtml(id)
                return@runBlocking Response(body = html,url = url?:"", code = 200)
            }
            return@runBlocking Response(body = "",url =  url?:"", code = 200)
        }
        Response.getVerificationCode= fun (url : String,tocken:String)  = runBlocking {
            var socket=ApiWebSocket.get(tocken)
            if(socket!=null){
                var id= UUID.randomUUID().toString()
                socket.send(Gson().toJson(WebMessage(
                    msg = "getVerificationCode", url = url ?: "", id = id,
                    title = "getVerificationCode",
                )))
                var z=false
                thread {
                    for(i in 0.. 2){
                        sleep(1000*60)
                        if(z) break
                    }
                    if(!z){
                        runBlocking {  ApiWebSocket.addhtml(id,"") }
                    }
                }
                ApiWebSocket.lock(id).let {  z=true }
                val html=ApiWebSocket.gethtml(id)
                return@runBlocking html
            }
            ""
        }
        Response.toast = fun (str : String,tocken:String)  = runBlocking {
            var socket=ApiWebSocket.get(tocken)
            if(socket!=null){
                logger.info("toast:$str")
                socket.send(Gson().toJson(ToastMessage(msg = "toast", str=str )))
            }
        }
    }
}