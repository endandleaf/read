package web.config

import book.CookieList
import book.CookieManager
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
import kotlin.concurrent.thread

@Configuration
class InitConfig {

    val logger = LoggerFactory.getLogger(InitConfig::class.java)

    class Cookie(val userCookieMapper: UserCookieMapper) : CookieManager {
        override fun getCookie(id: String, url: String): String {
            var cookies: String = ""
            runCatching {
                userCookieMapper.getcookiemo(id, url).let {
                    if (it != null) {
                        cookies = it.value ?: ""
                    }
                }
            }.onFailure {
                it.printStackTrace()
            }
            return cookies
        }

        override fun removeCookie(id: String, url: String) {
            userCookieMapper.removeCookie(id, url)
        }
    }



    @Bean
    fun cookieinit(userCookieMapper: UserCookieMapper) {
        checkfile()
        CookieList.manager=Cookie(userCookieMapper)
        Response.startBrowserAwait=fun (urlStr: String,title: String,tocken:String):Response = runBlocking{
            println(tocken)
            var socket=ApiWebSocket.get(tocken)
            if(socket!=null){
                logger.info("startBrowser ,url: $urlStr ,title: $title, tocken: $tocken ")
                socket.send(Gson().toJson(WebMessage(msg = "startBrowser", url = urlStr,title=title )))
                var z=false
                thread {
                    for(i in 0.. 2){
                        sleep(1000*60)
                        if(z) break
                    }
                    if(!z){
                        runBlocking {  ApiWebSocket.addhtml(tocken,"") }
                    }
                }
                ApiWebSocket.lock(tocken).let {  z=true }
                val html=ApiWebSocket.gethtml(tocken)
                return@runBlocking Response(body = html,url = urlStr, code = 200)
            }
            return@runBlocking Response(body = "",url = urlStr, code = 200)
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