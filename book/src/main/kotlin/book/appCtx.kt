package book

import book.util.getWorkDir

object appCtx {
    val cacheDir: String by lazy {
        getWorkDir("storage", "cache")
    }

}
