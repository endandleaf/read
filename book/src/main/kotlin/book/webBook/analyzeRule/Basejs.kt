package book.webBook.analyzeRule

import book.CookieList

open class Basejs {



    fun getCookie(key: String): String? {
        println("getCookie："+key)
        return CookieList.get(key)
    }


}