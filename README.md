# 轻阅读
一个全移动端可用的阅读app，这个仓库是阅读app服务端源码，可以在全端同步进度。开源阅读不方便同步阅读进度，并且开源阅读过于复杂，移植多端难度较大，通过同一个后端的方法，可以做到多端体验基本一致。


# 推荐书源
[晴天1.0](http://api618.qingtian618.site)
[晴天2.0](http://api618.qingtian618.site:5008)

# 后台
http://ip:8080/admin(阅读后台)

http://ip:8080/(web阅读)

web阅读不支持cookie的保存，有些cdn需要验证的可能会出错，app版才支持cookie的保存

# 暂不支持
暂不支持除后台外的任何地方修改添加书源

# 快速部署
将后端文件上传到root目录，确保root/read/read.jar存在，确保root/read/conf.yml存在（conf.yml中可修改后台管理的账号密码），然后安装docker,
网上有一键安装脚本可自行百度，docker一键部署命令如下，如需用mysql数据库请自行修改配置文件。
````
docker run -tid --name read  -v /root/read:/app -p 8080:8080 --restart=always docker-0.unsee.tech/bitnami/java java -jar /app/read.jar
````
如需使用其他端口可修改第一个8080为想要的端口。

# 参考项目
[reader3](https://github.com/hectorqin/reader)

![Image text](https://github.com/autobcb/read/blob/main/png/home.png?raw=true)
![Image text](https://github.com/autobcb/read/blob/main/png/book.png?raw=true)
![Image text](https://github.com/autobcb/read/blob/main/png/login.png?raw=true)
![Image text](https://github.com/autobcb/read/blob/main/png/home2.png?raw=true)
![Image text](https://github.com/autobcb/read/blob/main/png/faxian.png?raw=true)
![Image text](https://github.com/autobcb/read/blob/main/png/search.png?raw=true)
![Image text](https://github.com/autobcb/read/blob/main/png/read.png?raw=true)