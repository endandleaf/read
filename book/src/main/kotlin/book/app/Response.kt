package book.app

data class Response(
    val code: Int=200,
    val url: String="",
    val body: String=""
) {
    companion object {
        var startBrowserAwait =fun  (urlStr: String,title: String,tocken:String,hide:Boolean,header:String):Response{
            return Response(body = tocken,url = urlStr, code = 200)
        }
        var webview =fun  (html: String?, url: String?, js: String?,tocken:String,header:String):Response{
            return Response(body = html?:"",url = url?:"", code = 200)
        }
        var toast =fun  (str: String,tocken:String){

        }
    }
    fun code() =code
    fun body() =body
    fun url():String =url
}

