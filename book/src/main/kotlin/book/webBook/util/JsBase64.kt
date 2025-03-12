package book.webBook.util

import book.util.Base64

object JsBase64 {


    fun encode(value: ByteArray,flags:Int): ByteArray {
        return Base64.encode(value,flags)
    }

    fun decode(value: String,flags:Int): ByteArray {
        return Base64.decode(value,flags)
    }


    fun decode(value: ByteArray,flags:Int): ByteArray {
        return Base64.decode(value,flags)
    }
}