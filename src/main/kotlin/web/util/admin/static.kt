package web.util.admin

import org.noear.solon.core.handle.Context

fun loginok(username:String, ctx: Context){
    ctx.sessionSet("username", username)
}

fun logout(ctx: Context) {
    ctx.sessionRemove("username")
}

fun islogin(ctx: Context) :Boolean =run{
    if(ctx.session("username") != null && ctx.session("username").toString().isNotBlank()){
        true
    }else{
        false
    }
}