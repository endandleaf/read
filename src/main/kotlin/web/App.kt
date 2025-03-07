package web


import org.noear.solon.Solon
import org.noear.solon.annotation.SolonMain
import org.noear.solon.scheduling.annotation.EnableScheduling

@SolonMain
@EnableScheduling
class App


fun main(args: Array<String>) {
    Solon.start(App::class.java, args) { app ->
        app.enableSessionState(true)
        app.enableWebSocket(true);
        app.get("/") { ctx -> ctx.forward("/index.html"); }
    }
}