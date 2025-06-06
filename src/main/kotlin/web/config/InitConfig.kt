package web.config

import book.app.App
import book.app.ToastMessage
import book.app.WebMessage
import book.util.AppConst
import book.util.http.StrResponse
import com.google.gson.Gson
import kotlinx.coroutines.runBlocking
import org.noear.solon.annotation.Bean
import org.noear.solon.annotation.Configuration
import org.slf4j.LoggerFactory
import web.controller.api.ApiWebSocket
import web.mapper.UserCookieMapper
import web.util.cache.checkfile
import java.lang.Thread.sleep
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.util.*
import kotlin.concurrent.thread

@Configuration
class InitConfig {

    val logger = LoggerFactory.getLogger(InitConfig::class.java)




    @Bean
    fun cookieinit(userCookieMapper: UserCookieMapper) {
        checkfile()
        App.startBrowserAwait=fun (urlStr: String, title: String, tocken:String, header:String):StrResponse = runBlocking{
            println(tocken)
            var socket=ApiWebSocket.get(tocken)
            if(socket!=null){
                val id= UUID.randomUUID().toString()
                logger.info("startBrowser ,url: $urlStr ,title: $title, tocken: $tocken ")
                socket.send(Gson().toJson(WebMessage(msg = "startBrowser", url = urlStr,title=title,id=id, header = header )))
                return@runBlocking  StrResponse(urlStr,ApiWebSocket.WaitForResponse(id)?:"")
            }
            return@runBlocking  StrResponse(urlStr,"")
        }

        App.webview=fun (html: String?, url: String?, js: String?, tocken:String, header:String):StrResponse = runBlocking{
            var socket=ApiWebSocket.get(tocken)
            if(socket!=null){
                var id= UUID.randomUUID().toString()
                //logger.info("webview ,url: $url ,js: $js, html:$html, tocken: $tocken ")
                socket.send(Gson().toJson(WebMessage(msg = "webview", url = url?:"",title=js?:"", html = html?:"" ,id=id ,header=header)))
                return@runBlocking  StrResponse(url?:"",ApiWebSocket.WaitForResponse(id)?:"")
            }
            return@runBlocking  StrResponse(url?:"","")
        }
        App.webviewbody=fun (html: String?, url: String?, js: String?, tocken:String, header:String, body:String):StrResponse = runBlocking{
            var socket=ApiWebSocket.get(tocken)
            if(socket!=null){
                var id= UUID.randomUUID().toString()
                //logger.info("webview ,url: $url ,js: $js, html:$html, tocken: $tocken ")
                socket.send(Gson().toJson(WebMessage(msg = "webview", url = url?:"",title=js?:"", html = html?:"" ,id=id ,header=header,body=body)))
                return@runBlocking  StrResponse(url?:"",ApiWebSocket.WaitForResponse(id)?:"")
            }
            return@runBlocking  StrResponse(url?:"","")
        }
        App.getVerificationCode= fun (url : String, tocken:String)  = runBlocking {
            var socket=ApiWebSocket.get(tocken)
            if(socket!=null){
                var id= UUID.randomUUID().toString()
                socket.send(Gson().toJson(WebMessage(
                    msg = "getVerificationCode", url = url ?: "", id = id,
                    title = "getVerificationCode",
                )))
                return@runBlocking ApiWebSocket.WaitForResponse(id)?:""
            }
            ""
        }
        App.toast = fun (str : String, tocken:String)  = runBlocking {
            val socket=ApiWebSocket.get(tocken)
            if(socket!=null){
                logger.info("toast:$str")
                socket.send(Gson().toJson(ToastMessage(msg = "toast", str=str )))
            }
        }
        App.log = fun (str : String, tocken:String)  = runBlocking {
            val socket=ApiWebSocket.get(tocken)
            
            if(socket!=null){
                socket.send(Gson().toJson(ToastMessage(msg = "log", str="${LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"))}\n$str" )))
            }
        }
        App.getWebViewUA=fun ( tocken:String) = runBlocking{
            var socket=ApiWebSocket.get(tocken)
            if(socket!=null){
                var id= UUID.randomUUID().toString()
                socket.send(Gson().toJson(WebMessage(
                    msg = "getWebViewUA", url = "", id = id,
                    title = "getWebViewUA",
                )))
                return@runBlocking ApiWebSocket.WaitForResponse(id)?:""
            }
            AppConst.defaultuserAgent;
        }

        App.get=fun (url: String?, header:String,tocken:String) = runBlocking{
            var socket=ApiWebSocket.get(tocken)
            if(socket!=null){
                val id= UUID.randomUUID().toString()
                //logger.info("webview ,url: $url ,js: $js, html:$html, tocken: $tocken ")
                socket.send(Gson().toJson(WebMessage(
                    msg = "get", url = url ?: "", id = id, header = header,
                    title =""
                )))
                return@runBlocking  StrResponse(url?:"",ApiWebSocket.WaitForResponse(id)?:"")
            }
            return@runBlocking  StrResponse(url?:"","")
        }

        App.post=fun (url: String?,body:String, header:String,tocken:String) = runBlocking{
            var socket=ApiWebSocket.get(tocken)
            if(socket!=null){
                val id= UUID.randomUUID().toString()
                //logger.info("webview ,url: $url ,js: $js, html:$html, tocken: $tocken ")
                socket.send(Gson().toJson(WebMessage(msg = "post", url = url?:"",id=id ,header=header,body=body,title ="")))
                return@runBlocking  StrResponse(url?:"",ApiWebSocket.WaitForResponse(id)?:"")
            }
            return@runBlocking  StrResponse(url?:"","")
        }
    }
}