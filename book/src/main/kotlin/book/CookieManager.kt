package book

interface CookieManager {
    /**
     * 获取cookie
     */
    fun getCookie(id:String , url: String): String

    fun removeCookie(id:String , url: String)

}