import book.CookieList
import book.Cookiemodel
import book.model.BookSource
import book.webBook.WBook
import com.google.gson.Gson
import kotlinx.coroutines.delay
import kotlinx.coroutines.runBlocking
import java.io.File


fun main() = runBlocking{
    var list1:MutableList<Cookiemodel> = mutableListOf()
    var cookie = Cookiemodel()
    var c="zh_choose=s; cf_clearance=l0YJlcN_X.N_4eQWdc7OW7zL8NPT17db4z7qlQc_PhY-1738099270-1.2.1.1-XX.8U0yA6H88TJewcYu0twd2UWB2hT5dilYRVIZhqp9rcfa4gMtL43feC9OhDKfa2rYBG1qB9l3WeLFMMtOjtoKrDu4ky410G2r0TTTH4S3qlCimxVYi3JbKU4EMJbUheA2_KPv3D7.SGCWKCqMd5RKryfdtbpKgqTQb1ph0yLK3IKFNjEY6t63EmadN6nd8Y162GDbzZQseiULzpy0RFRJw.Dm8nWWVknHaOtHh7XT4d.CDLULwNS9rW7z0p_SADT1ckG_ziOI0OUEWD1A6jwqs6NLh1ipmAUp.NNBIR5J57TtS1Nzj2jTuQVxHIoJqIccKDtNHm0aljn29mrD68Q; __gads=ID=84668c3a62711903:T=1738101490:RT=1738101490:S=ALNI_Maqa2S7Rembm5r3QKj8ocI3mIBXOw; __gpi=UID=00001013832bbe8c:T=1738101490:RT=1738101490:S=ALNI_MbEUqhhuDnEQfb7HgVGo3peAjVhfA; __eoi=ID=e25d67e3f74b2503:T=1738101490:RT=1738101490:S=AA-Afjb-tWiAR7fV4CNeDWlGwZIj; yuedu_userverfiy=1738101539@11a4b8eda285356122cef17bd5ee1d1f; PHPSESSID=4t8q4usav28muh275dbve60q81; jieqiUserInfo=jieqiUserId%3D1667577%2CjieqiUserUname%3Dq9uo11%2CjieqiUserName%3Dq9uo11%2CjieqiUserGroup%3D3%2CjieqiUserGroupName%3D%26%23x666E%3B%26%23x901A%3B%26%23x4F1A%3B%26%23x5458%3B%2CjieqiUserVip%3D0%2CjieqiUserHonorId%3D%2CjieqiUserHonor%3D%26%23x65B0%3B%26%23x624B%3B%26%23x4E0A%3B%26%23x8DEF%3B%2CjieqiUserToken%3Da2442a10dfe6039d8c7742fea19cdb62%2CjieqiCodeLogin%3D0%2CjieqiCodePost%3D0%2CjieqiUserLogin%3D1738101598; jieqiVisitInfo=jieqiUserLogin%3D1738101598%2CjieqiUserId%3D1667577; jieqiVisitTime=jieqiArticlesearchTime%3D1738101674; _ga=GA1.1.844488579.1738101678; shuba=11730-6921-24133-6752; ReadHistory=yysrfdtmte-xdhnfetkuofgtltj-%25u65B0%25u4E66%25u300A%25u706B%25u5F71%25uFF1A%25u6211%25u7684%25u8001%25u5A46%25u6765%25u81EA%25u6D77%25u8D3C%25u300B-1738101696; _ga_WBV9F7GZQJ=GS1.1.1738101678.1.1.1738101696.0.0.0"
    cookie.host="www.69yuedu.net"
    cookie.value=c
    list1.add(cookie)
    CookieList.set(list1)
    val file= File("/Users/q9uo11/Downloads/edge/1738083694.json")
    var json=file.readText()
    //var source=BookSource.fromJson(json)
    var webWBook = WBook(json,"","", false)
    //webWBook.searchBook("军师",1)
    //var list=webWBook.exploreBook("/majax/category/list?catId=21&size=2&gender=male&pageNum={{page}}&_csrfToken={{cookie.getKey(\"https://m.qidian.com\",\"_csrfToken\")}}",1)
    var list=webWBook.searchBook("火影：从纲手同学开始",1)
    delay(2000)
    var book=webWBook.getBookInfo(list[0].bookUrl)
    delay(2000)
    var ca=webWBook.getChapterList(book)
    println("aaa"+webWBook.getBookContent(book,ca[70]))
    //println(webWBook.getexploreUrl())
}

