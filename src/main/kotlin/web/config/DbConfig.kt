package web.config


import org.apache.ibatis.session.SqlSessionFactory
import org.apache.ibatis.solon.annotation.Db
import org.dromara.autotable.core.AutoTableBootstrap
import org.dromara.autotable.core.AutoTableGlobalConfig
import org.dromara.autotable.core.config.PropertyConfig
import org.dromara.autotable.core.dynamicds.SqlSessionFactoryManager
import org.noear.solon.annotation.Bean
import org.noear.solon.annotation.Configuration
import web.model.*


@Configuration
class DbConfig {
    companion object{
        private val models= arrayOf(Users::class.java,Booklist::class.java,BookSource::class.java
        ,Cookie::class.java,Usertocken::class.java,UserCookie::class.java)
    }

    @Bean
    fun autotable(@Db("db") sqlSessionFactory: SqlSessionFactory){
        SqlSessionFactoryManager.setSqlSessionFactory(sqlSessionFactory)
        val autoTableProperties = PropertyConfig()
        autoTableProperties.enable = true
        autoTableProperties.modelClass= models
        AutoTableGlobalConfig.setAutoTableProperties(autoTableProperties)
        AutoTableBootstrap.start()
    }

}