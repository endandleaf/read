import kotlinx.coroutines.Deferred
import kotlinx.coroutines.async
import kotlinx.coroutines.delay
import kotlinx.coroutines.runBlocking


fun main() =runBlocking{
    val deferred1: Deferred<String> = async {
        "1"
    }
    deferred1.await()
    deferred1.await()
    println(deferred1.await())
    println("456")
}