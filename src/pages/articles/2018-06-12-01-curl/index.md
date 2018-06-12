---
title: cURL工具使用
date: "2018-06-12T00:20:00"
layout: post
path: "/2018/06/curl"
categories:
  - Shell
  - Developer Tool
description: "curl是帮助我们通过URL读取传输数据的工具库"
---

<!--more-->

# 简介

引用[curl](https://curl.haxx.se/)官方的一句话：

> command line tool and library for transferring data with URLs

# 功能支持

* DICT, FILE, FTP, FTPS, Gopher, HTTP, HTTPS, IMAP, IMAPS, LDAP, LDAPS, POP3, POP3S, RTMP, RTSP, SCP, SFTP, SMB, SMBS, SMTP, SMTPS, Telnet and TFTP.

* url supports SSL certificates, HTTP POST, HTTP PUT, FTP uploading, HTTP form based upload, proxies, HTTP/2, cookies, 用户+密码 方式认证 (Basic, Plain, Digest, CRAM-MD5, NTLM, Negotiate and Kerberos)

* 支持断点续传

* 支持代理

# 基本使用

输入如下命令，可以直接读取网页源码

```shell
curl [网址]
```

通过上面的命令我们就可以读取到网页的源码。

例如我常用的查询ip的网站，ip.cn

```shell
curl ip.cn
```

返回

```shell
当前 IP：111.111.111.111 来自：火星
```

<br />

# 常用参数介绍

## 1. -o 保存页面源码

```shell
curl -o [文件名] ip.cn
```

## 2. -L 重定向

有些网站回默认重定向，如果使用`-L`参数，就会自动重定向

以 taobao.com 为例：

**不使用**`-L`参数时：

```shell
curl taobao.com
```

返回：

```shell
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html>
<head><title>302 Found</title></head>
<body bgcolor="white">
<h1>302 Found</h1>
<p>The requested resource resides temporarily under a different URI.</p>
<hr/>Powered by Tengine</body>
</html>
```

**使用**`-L`参数时，就会自动重定向到 www.taobao.com

```shell
curl -L taobao.com
```

## 3. -i 请求内容包含协议头

`-i`参数可以包含协议头+页面代码一起返回

```shell
curl -i taobao.com
```

返回：

```shell
HTTP/1.1 302 Found
Server: Tengine
Date: Mon, 11 Jun 2018 16:52:26 GMT
Content-Type: text/html
Content-Length: 258
Connection: keep-alive
Location: http://www.taobao.com/

<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html>
<head><title>302 Found</title></head>
<body bgcolor="white">
<h1>302 Found</h1>
<p>The requested resource resides temporarily under a different URI.</p>
<hr/>Powered by Tengine</body>
</html>
```

如果时大写`-I`参数，则只会返回响应头

## 4. v 输出执行过程

```shell
curl -v taobao.com
```

```shell
* Rebuilt URL to: taobao.com/
*   Trying 140.205.94.189...
* TCP_NODELAY set
* Connected to taobao.com (140.205.94.189) port 80 (#0)
> GET / HTTP/1.1
> Host: taobao.com
> User-Agent: curl/7.54.0
> Accept: */*
>
< HTTP/1.1 302 Found
< Server: Tengine
< Date: Mon, 11 Jun 2018 16:54:41 GMT
< Content-Type: text/html
< Content-Length: 258
< Connection: keep-alive
< Location: http://www.taobao.com/
<
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html>
<head><title>302 Found</title></head>
<body bgcolor="white">
<h1>302 Found</h1>
<p>The requested resource resides temporarily under a different URI.</p>
<hr/>Powered by Tengine</body>
</html>
* Connection #0 to host taobao.com left intact
```

还可以通过 `--trace-ascii` 参数将debug信息写入到日志文件当中

## 5. -X 指定HTTP Method

curl默认Http Method是GET方式，通过`-X`可以指定其他方式

```shell
curl -X POST www.demo.com
curl -X DELETE www.demo.com
```

## 6. --referer 指定referer信息

可以通过`--referer`参数置顶页面从哪里跳转过来的

```shell
curl --referer http
```

## 7. --user-agent 指定User Agent

```shell
curl --user-agent "[User-Agent]" [URL]
```

## 8. --cookie 指定请求的cookie

附带cookie发送请求：

```shell
curl --cooie "[cookie]" [URL]
```

`-c`保存请求返回的cookie到指定的文件，`-b`可以读取保存的cookie信息发送请求

```shell
curl -c [文件名] https://www.taobao.com/
curl -b [文件名] https://www.aliexpress.com/
```

## 9. --header 新增请求头信息

```shell
curl --header "Content-Type:application/json" https://www.taobao.com/
```
