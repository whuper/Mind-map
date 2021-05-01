
HTTP状态码由三个十进制数字组成，第一个十进制数字定义了状态码的类型，后两个数字没有分类的作用。HTTP状态码共分为5种类型：
## HTTP状态码分类
分类	分类描述

* 1**	信息，服务器收到请求，需要请求者继续执行操作
* 2**	成功，操作被成功接收并处理
* 3**	重定向，需要进一步的操作以完成请求
* 4**	客户端错误，请求包含语法错误或无法完成请求
* 5**	服务器错误，服务器在处理请求的过程中发生了错误



## 输入url到加载完成发生了什么

一般会经历以下过程：

1.在浏览器中输入url。  
2.浏览器先查看**浏览器缓存--系统缓存--路由器缓存**，如果缓存中存在页面内容，就会直接在屏幕中显示。  
3.在发送http请求前，浏览器开启一个线程来解析域名(**[DNS解析]**，获取相应的IP地址。   
4.浏览器向服务器发起TCP连接，与浏览器通过**TCP三次握手**建立连接；	   
5.握手成功后，浏览器向服务器发送**HTTP请求**，请求数据包。  
6.服务器处理收到的请求，将数据返回给浏览器。   
7.浏览器收到**HTTP响应**。   
8.接下来就是**[页面渲染]**的内容了。

## 三次握手

第一次握手：客户端向服务器发送**SYN**报文，传达信息 “你好，我想建立连接”，客户端进入SYN_SEND状态。                         
第二次握手：服务器返回**SYN+ACK**报文，传达信息 “好的，可以建立连接”，服务器端进入SYN_REC状态。                           
第三次握手：客户端回传 **ACK**报文,传达信息“好的，知道了，那我们连接”，然后就建立连接了。此时客户端和服务器端都进入ESTABLISHED状态。                     

三次握手的机制是为了保证信息传输的可靠性，如果其中某个握手失败了，这个过程将会重复。 
 
- 如果采用两次握手：   
如果发送ACK报文的客户端不想连接了，也没有反馈，而服务器端则一直等待，浪费了时间。
- 如果采用四次握手：    
从结果而言是可以的，但是性能大大受影响，三次是个折中的方案，节省了连接的时间。

## tcp
TCP（Transmission Control Protocol 传输控制协议）是一种面向连接的、可靠的、基于字节流的传输层通信协议

## 页面渲染原理

主流的Webkit内核浏览器（Safiri）和Gecko内核浏览器（FireFox）在渲染引擎的具体步骤上有些不同，但是大致的原理如下图：
  
![](http://i.imgur.com/cI1G3m5.jpg)

1. 浏览器把获取到的HTML代码解析成1个DOM树，HTML中的每个tag都是DOM树中的1个节点，根节点就是我们常用的document对象。DOM树里包含了所有HTML标签，包括display:none隐藏，还有用JS动态添加的元素等。

2. 浏览器把CSS样式解析成样式解析成样式结构体CSSDOM树，解析过程中去掉浏览器不能识别的样式，比如IE浏览器去掉-moz开头的样式，而FF浏览器去掉_开头的样式等。

3. DOM树和CSSDOM树组合构建渲染树（render tree），此时的render tree和DOM相似，但事实上有很大的区别。render tree能识别样式。render tree里面的每一个节点都有自己的样式，因此，像<head>标签这些不用于渲染的节点，不会被包含于render tree中。render tree中每一个节点都可以称作盒子（Box）。   
值得注意的是，`display: none；` 和 `visible： hidden；`虽然很像，但是前者不会被包含在render tree中，因为它是不占空间而且不可见的，后者虽然不可见，但是占用空间，会影响布局（layout），所以包含在数中。

4. 一旦render tree构建完毕，浏览器就可以根据render tree来绘制页面了。

## post和get
区别：

- post更安全  
因为post的请求数据不会作为url的一部分，不会被缓存、保存在服务器日志、浏览器的浏览记录中。
- post发送的数据量更大  
get有url长度的限制，不能大于2kb。
- post能发送更多的数据类型  
get只能发送ASCII字符
- post比get要慢  
	- post方法在正式接收数据之前会将请求投发送给服务器确认，然后才发送数据，这个确认过程花费较长的时间。
	- get方法会将静态数据缓存下来(Chrome和FF情况下会缓存静态资源，不缓存数据；而IE什么都缓存)

> 尽管post比get更加安全，但是get和post都能被抓包，说明post也不是绝对安全的。   
> 但是在HTTP环境下，并不能保证安全性，所以要用HTTPS协议。

## 四次挥手

挥手就是终止TCP的连接。具体过程如下：

- 第一次挥手   
客户端发送一个FIN，用来关闭客户端到服务器的数据传送，客户端进入**FIN_WAIT**的状态。
- 第二次挥手  
服务器端收到FIN之后，给客户端发送一个ACK,确认序号为收到序号+1。服务器端进入**CLOSE_WAIT**状态。
- 第三次挥手   
服务器端发送一个FIN,用来关闭服务器端到客户端的数据传送，服务器端进入**LAST_ACK**状态。
- 第四次挥手   
Client收到FIN后，Client进入**TIME_WAIT**状态，接着发送一个ACK给Server，确认序号为收到序号+1，Server进入**CLOSED**状态，完成四次挥手。

#### Q：为什么要四次挥手？
如果客户端想要停止向服务端发送数据，首先要停止发送数据，并且通知对方，第二步是等待服务器的回复。

当然，服务器要向客户端停止发送数据，也得类似。   

四次挥手是因为 TCP 是全双工的，两端能同时向对方发送数据，如果不足四次的话无法确定双方都没有数据发送了。

# 重绘和回流

## 回流（reflow）
当render tree中的一部分或全部因为元素的规模、尺寸等布局因素改变而需要重新构建，就成为**回流**。

每个页面都至少有一次回流，就是在页面第一次加载的时候。

需要回流的情况：

    1、添加或者删除可见的DOM元素；
    2、元素位置改变；
    3、元素尺寸改变——边距、填充、边框、宽度和高度
    4、内容改变——比如文本改变或者图片大小改变而引起的计算值宽度和高度改变；
    5、页面渲染初始化；
    6、浏览器窗口尺寸改变——resize事件发生时
## 重绘（repaint）

也许从repaint这个单词我们可以看出，重绘只是改变外观和风格，不影响布局（layout），比如`background-color` 属性。

值得注意的是，回流一定引起重绘，而重绘不一定引起回流。

### 性能优化
我们知道，重绘和回流都给浏览器造成压力。如果我们用JS不断、频繁地操作DOM,浏览器必将不堪重压。所以很多浏览器都会有一个优化机制：

> 浏览器会维护一个队列，将所有会引起重绘和回流的操作放入这个队列中，等队列中的**操作到了一定的数量或者时间间隔**，浏览器就会flush队列，进行一个批处理，将本来的多次回流重绘变成一次回流重绘。

虽然有了浏览器优化机制，但是，针对下面一些属性的更改，浏览器会提前flush队列，这样，优化就不起作用了：  

    1. offsetTop, offsetLeft, offsetWidth, offsetHeight
    2. scrollTop/Left/Width/Height
    3. clientTop/Left/Width/Height
    4. width,height
    5. 请求了getComputedStyle(), 或者 IE的 currentStyle
 
当你请求上面的一些属性的时候，浏览器为了给你最精确的值，需要flush队列，因为队列中可能会有影响到这些值的操作。即使你获取元素的布局和样式信息跟最近发生或改变的布局信息无关，浏览器都会强行刷新渲染队列。

#### 减少重绘和回流：   
1. 直接改变className，如果动态改变样式，则使用cssText（考虑没有优化的浏览器）  
2. 让要操作的元素进行”离线处理”，处理完后一起更新  

    使用DocumentFragment进行缓存操作,引发一次回流和重绘；
    使用display:none技术，只引发两次回流和重绘；
    使用cloneNode(true or false) 和 replaceChild 技术，引发一次回流和重绘；

3.不要经常访问会引起浏览器flush队列的属性，如果你确实要访问，利用缓存    
4. 让元素脱离动画流，减少回流的Render Tree的规模


## 浏览器缓存
浏览器缓存(Brower Caching)是浏览器在本地磁盘对用户最近请求过的文档进行存储，当访问者再次访问同一页面时，浏览器就可以直接从本地磁盘加载文档。

### 浏览器缓存的优点有：


- 减少了冗余的数据传输，节省了网费

- 减少了服务器的负担，大大提升了网站的性能

- 加快了客户端加载网页的速度

### 浏览器缓存的分类
**浏览器缓存主要有两类：缓存协商和彻底缓存，也有称之为协商缓存和强缓**存。

浏览器在第一次请求发生后，再次请求时：


> 浏览器会先获取该资源缓存的header信息，根据其中的expires和cahe-control判断是否命中强缓存，若命中则直接从缓存中获取资源，包括缓存的header信息，本次请求不会与服务器进行通信；

> 如果没有命中强缓存，浏览器会发送请求到服务器，该请求会携带第一次请求返回的有关缓存的header字段信息（Last-Modified/IF-Modified-Since、Etag/IF-None-Match）,由服务器根据请求中的相关header信息来对比结果是否命中协商缓存，若命中，则服务器返回新的响应header信息更新缓存中的对应header信息，但是并不返回资源内容，它会告知浏览器可以直接从缓存获取；否则返回最新的资源内容

### 强缓存
> 强缓存是利用http的返回头中的Expires或者Cache-Control两个字段来控制的，用来表示资源的缓存时间。


**从名字就可以看出，强缓存不与服务器交互，而协商缓存则需要与服务器交互**

#### Expires

该字段是http1.0时的规范，它的值为一个绝对时间的GMT格式的时间字符串，比如Expires:Mon,18 Oct 2066 23:59:59 GMT。这个时间**代表着这个资源的失效时间**，在此时间之前，即命中缓存。这种方式有一个明显的缺点，由于失效时间是一个绝对时间，所以当服务器与客户端时间偏差较大时，就会导致缓存混乱。

#### Cache-Control
Cache-Control是http1.1时出现的header信息，主要是利用该字段的max-age值来进行判断，它是一个相对时间，例如Cache-Control:max-age=3600，代表着资源的有效期是3600秒。cache-control除了该字段外，还有下面几个比较常用的设置值：

no-cache：不使用本地缓存。需要使用缓存协商，先与服务器确认返回的响应是否被更改，如果之前的响应中存在ETag，那么请求的时候会与服务端验证，如果资源未被更改，则可以避免重新下载。

no-store：直接禁止游览器缓存数据，每次用户请求该资源，都会向服务器发送一个请求，每次都会下载完整的资源。

public：可以被所有的用户缓存，包括终端用户和CDN等中间代理服务器。

private：只能被终端用户的浏览器缓存，不允许CDN等中继缓存服务器对其缓存。

**Cache-Control与Expires可以在服务端配置同时启用，同时启用的时候Cache-Control优先级高。**

### 协商缓存
> 协商缓存就是由服务器来确定缓存资源是否可用，所以客户端与服务器端要通过某种标识来进行通信，从而让服务器判断请求资源是否可以缓存访问，这主要涉及到下面两组header字段，这两组搭档都是成对出现的，即第一次请求的响应头带上某个字段（Last-Modified或者Etag），则后续请求则会带上对应的请求字段（If-Modified-Since或者If-None-Match），若响应头没有Last-Modified或者Etag字段，则请求头也不会有对应的字段。

### Last-Modify/If-Modify-Since

浏览器第一次请求一个资源的时候，服务器返回的header中会加上Last-Modify，Last-modify是一个时间标识该资源的最后修改时间，例如Last-Modify: Thu,31 Dec 2037 23:59:59 GMT。

当浏览器再次请求该资源时，request的请求头中会包含If-Modify-Since，该值为缓存之前返回的Last-Modify。服务器收到If-Modify-Since后，根据资源的最后修改时间判断是否命中缓存。

如果命中缓存，则返回304，并且不会返回资源内容，并且不会返回Last-Modify。

### ETag/If-None-Match

与Last-Modify/If-Modify-Since不同的是，Etag/If-None-Match返回的是一个校验码。ETag可以保证每一个资源是唯一的，资源变化都会导致ETag变化。服务器根据浏览器上送的If-None-Match值来判断是否命中缓存。

与Last-Modified不一样的是，当服务器返回304 Not Modified的响应时，由于ETag重新生成过，response header中还会把这个ETag返回，即使这个ETag跟之前的没有变化。

### 为什么要有Etag

你可能会觉得使用Last-Modified已经足以让浏览器知道本地的缓存副本是否足够新，为什么还需要Etag呢？HTTP1.1中Etag的出现主要是为了解决几个Last-Modified比较难解决的问题：

一些文件也许会周期性的更改，但是他的内容并不改变(仅仅改变的修改时间)，这个时候我们并不希望客户端认为这个文件被修改了，而重新GET；

某些文件修改非常频繁，比如在秒以下的时间内进行修改，(比方说1s内修改了N次)，If-Modified-Since能检查到的粒度是s级的，这种修改无法判断(或者说UNIX记录MTIME只能精确到秒)；

某些服务器不能精确的得到文件的最后修改时间。

Last-Modified与ETag是可以一起使用的，服务器会优先验证ETag，一致的情况下，才会继续比对Last-Modified，最后才决定是否返回304。

### 强缓存与协商缓存的区别可以用下表来表示：

缓存类型	获取资源形式	状态码	发送请求到服务器
强缓存	从缓存取	200（from cache）	否，直接从缓存取
协商缓存	从缓存取	304（Not Modified）	否，通过服务器来告知缓存是否可用


### 判断当前浏览器类型

    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
    var isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
    var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
    var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
    var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器

### 判断是否是IE浏览器
    function isIE()
    {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
 
    }

### ajax通讯的5种readyStae状态
0. (Uninitialized) the send( ) method has not yet been invoked. 
1. (Loading) the send( ) method has been invoked, request in progress. 
2. (Loaded) the send( ) method has completed, entire response received. 
3. (Interactive) the response is being parsed. 
4. (Completed) the response has been parsed, is ready for harvesting. 

---

0. （未初始化）还没有调用send()方法
1. （载入）已调用send()方法，正在发送请求
2. （载入完成）send()方法执行完成，已经接收到全部响应内容
3. （交互）正在解析响应内容
4. （完成）响应内容解析完成，可以在客户端调用了

## 关于Cookie

js和服务器端语言都可以为浏览器设置cookie

1.什么是HttpOnly? 

如果服务器端在cookie中设置了HttpOnly属性，那么通过js脚本将无法读取到cookie信息，也不能删除，这样能有效的防止XSS攻击，具体一点的介绍请google进行搜索

这样能有效的防止XSS攻击,


## TCP
要说http就绕不开tcp，TCP协议对应于传输层，而HTTP协议对应于应用层，从本质上来说，二者没有可比性。但是，http是基于tcp协议的。

TCP三次握手和四次挥手？

#### 三次握手：

- 客户端–发送带有SYN标志的数据包–一次握手–服务端
- 服务端–发送带有SYN/ACK标志的数据包–二次握手–客户端
- 客户端–发送带有带有ACK标志的数据包–三次握手–服务端

#### 四次挥手：

- 客户端-发送一个FIN，用来关闭客户端到服务器的数据传送
- 服务器-收到这个FIN，它发回一个ACK，确认序号为收到的序号加1 。和SYN一样，一个FIN将占用一个序号
- 服务器-关闭与客户端的连接，发送一个FIN给客户端
- 客户端-发回ACK报文确认，并将确认序号设置为收到序号加1

### TCP和UDP的区别

TCP协议来聊天，要经过--在吗？--在--巴拉巴拉，才能成功的传递信息。

而如果对方使用UDP，则会有事直接说，不管我收没收到。（以后找我请用UDP协议，着急直接打电话！）

## HTTP
Http协议是建立在TCP协议基础之上的，当浏览器需要从服务器获取网页数据的时候，会发出一次Http请求。

Http会通过TCP建立起一个到服务器的连接通道，当本次请求需要的数据完毕后，Http会立即将TCP连接断开，这个过程是很短的。所以Http连接是一种短连接，是一种无状态的连接。

**所谓的无状态**，是指浏览器每次向服务器发起请求的时候，不是通过一个连接，而是每次都建立一个新的连接。如果是一个连接的话，服务器进程中就能保持住这个连接并且在内存中记住一些信息状态。而每次请求结束后，连接就关闭，相关的内容就释放了，所以记不住任何状态，成为无状态连接。

状态码？

状态码就那些，常用的记住就行了：

#### 2XX 成功

- 200 OK，表示从客户端发来的请求在服务器端被正确处理
- 204 No content，表示请求成功，但响应报文不含实体的主体部分
- 206 Partial Content，进行范围请求
#### 3XX 重定向

- 301 moved permanently，永久性重定向，表示资源已被分配了新的 URL
- 302 found，临时性重定向，表示资源临时被分配了新的 URL
- 303 see other，表示资源存在着另一个 URL，应使用 GET 方法丁香获取资源
- 304 not modified，表示服务器允许访问资源，但因发生请求未满足条件的情况
- 307 temporary redirect，临时重定向，和302含义相同
#### 4XX 客户端错误

- 400 bad request，请求报文存在语法错误
- 401 unauthorized，表示发送的请求需要有通过 HTTP 认证的认证信息
- 403 forbidden，表示对请求资源的访问被服务器拒绝
- 404 not found，表示在服务器上没有找到请求的资源
#### 5XX 服务器错误

- 500 internal sever error，表示服务器端在执行请求时发生了错误
- 503 service unavailable，表明服务器暂时处于超负载或正在停机维护，无法处理请求
####HTTP协议格式？

HTTP的请求和响应的消息协议是一样的，分为三个部分，起始行、消息头和消息体。

这三个部分以CRLF作为分隔符。最后一个消息头有两个CRLF，用来表示消息头部的结束。

HTTP请求的起始行称为请求行，形如GET /index.html HTTP/1.1

HTTP响应的起始行称为状态行，形如200 ok


## Session,Token相关区别


> session，一般为保存在cookie中的session id
token，类似auth服务中的token

- 为什么要有session的出现？

答：是由于网络中http协议造成的，因为http本身是无状态协议，这样，无法确定你的本次请求和上次请求是不是你发送的。如果要进行类似论坛登陆相关的操作，就实现不了了。

- session生成方式？

答：浏览器第一次访问服务器，服务器会创建一个session，然后同时为该session生成一个唯一的会话的key,也就是sessionid，然后，将sessionid及对应的session分别作为key和value保存到缓存中，也可以持久化到数据库中，然后服务器再把sessionid，以cookie的形式发送给客户端。这样浏览器下次再访问时，会直接带着cookie中的sessionid。然后服务器根据sessionid找到对应的session进行匹配；


- 为什么会有token的出现？

答：首先，session的存储是需要空间的，其次，session的传递一般都是通过cookie来传递的，或者url重写的方式；而token在服务器是可以不需要存储用户的信息的，而token的传递方式也不限于cookie传递，当然，token也是可以保存起来的；

- token的生成方式？

答：浏览器第一次访问服务器，根据传过来的唯一标识userId，服务端会通过一些算法，如常用的HMAC-SHA256算法，然后加一个密钥，生成一个token，然后通过BASE64编码一下之后将这个token发送给客户端；客户端将token保存起来，下次请求时，带着token，服务器收到请求后，然后会用相同的算法和密钥去验证token，如果通过，执行业务操作，不通过，返回不通过信息；

- token和session的区别？

token和session其实都是为了身份验证，session一般翻译为会话，而token更多的时候是翻译为令牌；

**token从设计上必须通过get参数或者post参数提交,也可以夹在http的header中**

**一般是不允许保存在cookies当中的，容易产生CSRF漏洞。**


## HTTP2与HTTP1.1的区别


1.HTTP2使用的是二进制传送，HTTP1.X是文本（字符串）传送。

大家都知道HTTP1.X使用的是明文的文本传送，而HTTP2使用的是二进制传送，二进制传送的单位是帧和流。帧组成了流，同时流还有流ID标示，通过流ID就牵扯出了第二个区别

2.HTTP2支持多路复用

因为有流ID，所以通过同一个http请求实现多个http请求传输变成了可能，可以通过流ID来标示究竟是哪个流从而定位到是哪个http请求

3.HTTP2头部压缩

HTTP2通过gzip和compress压缩头部然后再发送，同时客户端和服务器端同时维护一张头信息表，所有字段都记录在这张表中，这样后面每次传输只需要传输表里面的索引Id就行，通过索引ID就可以知道表头的值了

4.HTTP2支持服务器推送

HTTP2支持在客户端未经请求许可的情况下，主动向客户端推送内容

## Web app的性能瓶颈，主要有以下原因。

（1）Web基于DOM，而DOM很慢。浏览器打开网页时，需要解析文档，在内存中生成DOM结构，如果遇到复杂的文档，这个过程是很慢的。可以想象一下，如果网页上有上万个、甚至几十万个形状（不管是图片或CSS），生成DOM需要多久？更不要提与其中某一个形状互动了。

（2）DOM拖慢JavaScript。所有的DOM操作都是同步的，会堵塞浏览器。JavaScript操作 DOM时，必须等前一个操作结束，才能执行后一个操作。只要一个操作有卡顿，整个网页就会短暂失去响应。浏览器重绘网页的频率是60FPS（即16毫秒/ 帧），JavaScript做不到在16毫秒内完成DOM操作，因此产生了跳帧。用户体验上的不流畅、不连贯就源于此。

（3）网页是单线程的。现在的浏览器对于每个网页，只用一个线程处理。所有工作都在这一个线程上完成，包括布局、渲染、JavaScript执行、图像解码等等，怎么可能不慢？

（4）网页没有硬件加速。网页都是由CPU处理的，没用GPU进行图形加速。