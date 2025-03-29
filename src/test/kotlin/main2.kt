import kotlinx.coroutines.delay


suspend fun main(){
    runCatching {
        delay(1000)
        println("1")
    }.let { println("2") }
    println("3")
}