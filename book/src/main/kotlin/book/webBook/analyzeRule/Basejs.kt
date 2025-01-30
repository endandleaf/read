package book.webBook.analyzeRule

import book.CookieList

open class Basejs {

    companion object{
        open var androidId="dasjkjasodkls"
    }



    fun getCookie(key: String): String? {
        println("getCookie："+key)
        return CookieList.get(key)
    }

    fun androidId(): String {
        return androidId
    }
}