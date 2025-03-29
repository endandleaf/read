package book.util

object Base64 {

    const val DEFAULT = 0
    const val URL_SAFE = 1
    const val NO_PADDING = 2
    const val NO_WRAP = 4  // 在 JVM 中默认不换行，无需处理

    fun  encodeToString(data: ByteArray, flags: Int): String {
        val encoder = when {
            (flags and URL_SAFE) != 0 -> {
                if (flags and NO_PADDING != 0) {
                    java.util.Base64.getUrlEncoder().withoutPadding()
                } else {
                    java.util.Base64.getUrlEncoder()
                }
            }
            else -> {
                if (flags and NO_PADDING != 0) {
                    java.util.Base64.getEncoder().withoutPadding()
                } else {
                    java.util.Base64.getEncoder()
                }
            }
        }
        return encoder.encodeToString(data)
    }

    fun encode(data: ByteArray?, flags: Int): ByteArray {
        val encoder = when {
            (flags and URL_SAFE) != 0 -> {
                if (flags and NO_PADDING != 0) {
                    java.util.Base64.getUrlEncoder().withoutPadding()
                } else {
                    java.util.Base64.getUrlEncoder()
                }
            }
            else -> {
                if (flags and NO_PADDING != 0) {
                    java.util.Base64.getEncoder().withoutPadding()
                } else {
                    java.util.Base64.getEncoder()
                }
            }
        }
        return encoder.encode(data)
    }


    fun decode(str: String, flags: Int): ByteArray {
        val decoder = if (flags and URL_SAFE != 0) {
            java.util.Base64.getUrlDecoder()
        } else {
            java.util.Base64.getDecoder()
        }
        return decoder.decode(str)
    }

    fun decode(str: ByteArray?, flags: Int): ByteArray {
        val decoder = if (flags and URL_SAFE != 0) {
            java.util.Base64.getUrlDecoder()
        } else {
            java.util.Base64.getDecoder()
        }
        return decoder.decode(str)
    }
}
