package book.app

import book.util.http.StrResponse

object App  {
    var startBrowserAwait =fun  (urlStr: String,title: String,tocken:String,header:String): StrResponse {
        return StrResponse(urlStr,"")
    }
    var webview =fun  (html: String?, url: String?, js: String?,tocken:String,header:String):StrResponse{
        return StrResponse(url?:"", "")
    }
    var toast =fun  (str: String,tocken:String){

    }
    var getVerificationCode =fun  (imgurl:String,tocken:String):String{
        return ""
    }

    var getWebViewUA =fun  (tocken:String):String{
        return ""
    }
}

