# 轻阅读
一个全移动端可用的阅读app，这个仓库是阅读app服务端源码，可以在全端同步进度。开源阅读不方便同步阅读进度，并且开源阅读过于复杂，移植多端难度较大，通过同一个后端的方法，可以做到多端体验基本一致。

# cookie
有些书源有key验证，这个验证是通过java.getCookie接口获取的这个接口获取的参数可在后台添加。

# 推荐书源
[晴天](http://api618.qingtian618.site) (需要修改书源地址，再后台添加cookie后使用)

用这个书源清添加域名api618.qingtian618.site,cookie secretKey=你的密钥

# 后台
http://ip:8080/admin(阅读后台)

http://ip:8080/(web阅读)

web阅读不支持cookie的保存，有些cdn需要验证的可能会出错，app版才支持cookie的保存

# 暂不支持
阅读不支持书源链接带有\n，不支持登陆

暂不支持音频的书源

后续会更新的更接近阅读


# 参考项目
[reader3](https://github.com/hectorqin/reader)

![Image text](https://github.com/autobcb/read/blob/main/png/home.png?raw=true)
![Image text](https://github.com/autobcb/read/blob/main/png/book.png?raw=true)
![Image text](https://github.com/autobcb/read/blob/main/png/cookie.png?raw=true)
![Image text](https://github.com/autobcb/read/blob/main/png/login.png?raw=true)
![Image text](https://github.com/autobcb/read/blob/main/png/home2.png?raw=true)
![Image text](https://github.com/autobcb/read/blob/main/png/read.png?raw=true)