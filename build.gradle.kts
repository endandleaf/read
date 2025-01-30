import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    kotlin("jvm") version "2.0.21"
    id("application")
}

group = "read"
version = "1.0-SNAPSHOT"
val kotlin_version: String ="2.0.21"
val mainClassName: String ="web.AppKt"

application{
    mainClass=mainClassName
}

repositories {
    mavenLocal()
    mavenCentral()
    maven { url = uri("https://mirrors.cloud.tencent.com/nexus/repository/maven-public/") }
}


dependencies {
    implementation(project(":book"))
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8:$kotlin_version")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.9.0")

    implementation(platform("org.noear:solon-parent:3.0.5"))

    implementation("org.noear:solon-web")
    implementation("org.noear:solon-view-freemarker")
    implementation("org.noear:solon-logging-logback")
    implementation("org.noear:solon-scheduling-simple")
    implementation("org.jetbrains.kotlin:kotlin-stdlib:2.1.0")

    //数据库
    implementation("com.mysql:mysql-connector-j:9.1.0")
    implementation("org.xerial:sqlite-jdbc:3.47.1.0")
    implementation("com.baomidou:mybatis-plus-solon-plugin:3.5.9")
    implementation("com.baomidou:mybatis-plus-jsqlparser-4.9:3.5.9")
    implementation("org.dromara.mpe:mybatis-plus-ext-autotable-core:3.5.9-EXT812")
    implementation("com.zaxxer:HikariCP:6.2.1")
    runtimeOnly("p6spy:p6spy:3.9.1")

    implementation("com.google.code.gson:gson:2.11.0")


    // 网络
    implementation("com.squareup.okhttp3:okhttp:4.9.1")
    implementation("com.squareup.okhttp3:logging-interceptor:4.1.0")


    implementation("io.github.kezhenxu94:cache-lite:0.2.0")

    compileOnly("org.projectlombok:lombok")
    testImplementation("org.noear:solon-test")
}

tasks.withType<JavaCompile> {
    options.encoding = "UTF-8"
    options.compilerArgs.add("-parameters")
}
tasks.withType<KotlinCompile> {
    compilerOptions.javaParameters = true
}

tasks.jar {
    duplicatesStrategy = DuplicatesStrategy.INCLUDE
    manifest.attributes["Main-Class"] = mainClassName
    from(configurations.runtimeClasspath.get().filter { it.name.endsWith("jar") }.map { zipTree(it) })
    exclude("LICENSE.txt", "NOTICE.txt", "rootdoc.txt")
    exclude("META-INF/*.RSA", "META-INF/*.SF", "META-INF/*.DSA")
    exclude("META-INF/NOTICE", "META-INF/NOTICE.txt")
    exclude("META-INF/LICENSE", "META-INF/LICENSE.txt")
    exclude("META-INF/DEPENDENCIES")
}
