import kotlinx.coroutines.*
import web.util.ResponseManager
import java.util.*
import kotlin.concurrent.thread


fun main()=runBlocking{

    send()
    delay(5000)
    println("end")
}

suspend fun  send()= coroutineScope{
    val correlationId = UUID.randomUUID().toString()
    val deferredResult = ResponseManager.registerRequest(correlationId)
    println("send")
    try {
        // 设置超时‌:ml-citation{ref="6" data="citationList"}
        withTimeoutOrNull(3000) {
            deferredResult.await()
        }.also { result ->
            if (result == null) {
                println("Timeout reached for $correlationId")
            }
        }
        println("123")
    } catch (e: TimeoutCancellationException) {
        println("Timed out")
        ResponseManager.cleanupExpiredRequest(correlationId)
        null
    }catch (t:Throwable){
        t.printStackTrace()
    }
    println("send2")
}