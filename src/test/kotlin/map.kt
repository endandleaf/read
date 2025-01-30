

fun main(){
    var ma1= mutableMapOf("key1" to "value1", "key2" to "value1")
    var ma2= mutableMapOf("key1" to "value2", "key2" to "value2")
    ma1.putAll(ma2)
    println(ma1.toString())
}