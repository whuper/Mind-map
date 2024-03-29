# 第一部分：JavaScript部分

### 1.简述同步与异步的区别

同步是阻塞模式，异步是非阻塞模式。

同步就是指一个进程在执行某个请求的时候，若该请求需要一段时间才能返回信息，那么这个进程将会一直等待下去，直到收到返回信息才继续执行下去;

异步是指进程不需要一直等下去，而是继续执行下面的操作，不管其他进程的状态。当有消息返回时系统会通知进程进行处理，这样可以提高执行的效率。

    //jsonp请求属于异步,get请求
    
    get和post请求的区别
    
    1.根据HTTP规范，GET用于信息获取，而且应该是安全的和幂等的。
    2.根据HTTP规范，POST表示可能修改变服务器上的资源的请求
    
    总结一下，Get是向服务器发索取数据的一种请求，而Post是向服务器提交数据的一种请求，在FORM（表单）中，Method默认为"GET"，实质上，GET和POST只是发送机制不同，并不是一个取一个发！

### 2.什么是跨域请求？怎样解决？

- 跨域，指的是浏览器不能执行其他网站的脚本。它是由浏览器的同源策略造成的，是浏览器对JavaScript施加的安全限制。

    所谓同源是指，域名，协议，端口均相同，浏览器执行js脚本的时候，会检查这个脚本属于哪一个页面，如果不是同源页面，就不会执行。

- 解决方法   
	1. jsonp（jsonp 的原理是动态插入 script 标签）
	2. document.domain + iframe
	3. window.name、window.postMessage
	4. 服务器上设置代理页面

### 3.怎样添加、删除、移动、复制、创建和查找节点？
- 创建新节点  
	> createDocumentFragment()    //创建一个DOM片段  
    > createElement()   //创建一个具体的元素   
    > createTextNode()   //创建一个文本节点
- 添加、移除、替换、插入
	> appendChild()  
    > removeChild()  
    > replaceChild()  
    > insertBefore() //并没有insertAfter() 
- 查找
	> getElementsByTagName()    //通过标签名称
	> getElementsByName()    //通过元素的Name属性的值(IE容错能力较强，会得到一个数组，其中包括id等于name值的)    
    > getElementById()    //通过元素Id，唯一性

### 4.事件是什么？如何阻止事件冒泡？

- 事件：用于监听浏览器的操作行为，浏览器触发动作时被捕捉到而调用相应的函数。事件执行三个阶段

	1. 事件捕获阶段 
	1. 处于目标阶段
	1. 事件冒泡阶段   
捕获型事件是自上而下，而冒泡型事件是自下而上的，而我们程序员通常要做的就是第二阶段，完成事件的动作。而第一、三阶段由系统封装自动调用完成。
- 阻止冒泡  
	> event.stopPropagation()    
    IE浏览器
	event.cancelBubble = true; 

### 5.手写Ajax。

    var xhr = new XMLHttpRequest();
    xhr.open("GET","api",false);
    xhr.onreadystatechange = function(){
    	if(xhr.readyState == 4){
    		if(xhr.status == 200){
    			alert(xhr.responseText);
    		}
    	}
    }
    xhr.send(null);

### 6.什么是闭包，为什么要用它？

闭包是就是函数中的函数，里面的函数可以访问外面函数的变量，外面的变量的是这个内部函数的一部分。  

#### 闭包的作用   

1.使用闭包可以访问函数中的变量。   
2.可以使变量长期保存在内存中，生命周期比较长。 

### 7.创建对象有哪些方式？

1. 工厂模式
2. 构造函数模式
3. 原型模式
4. 混合构造函数和原型模式
5. 动态原型模式
6. 寄生构造函数模式
7. 稳妥构造函数模式

### 8.JSON 格式是什么？你了解吗？
JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。它是基于JavaScript的一个子集。数据格式简单, 易于读写, 占用带宽小{"age":"12", "name":"back"}

### 9.原型是什么？原型链是什么？

1. 原型对象也是普通的对象，是对象一个自带隐式的 __proto__ 属性，原型也有可能有自己的原型，如果一个原型对象的原型不为 null 的话，我们就称之为原型链
2. 原型链是由一些用来继承和共享属性的对象组成的（有限的）对象链

闭包不能滥用，否则会导致内存泄露，影响网页的性能。闭包使用完了后，要立即释放资源，将引用变量指向null。

 
### 10.Ajax 是什么? 如何创建一个Ajax？
我理解Ajax 是一种异步请求数据的一种技术，对于改善用户的体验和程序的性能很有帮助。
### 11.谈谈你对this的理解？
this是js的一个关键字，随着函数使用场合不同，this的值会发生变化。
但是有一个总原则，那就是this指的是调用函数的那个对象。
this一般情况下：是全局对象Global。 作为方法调用，那么this就是指这个对象

### 12.如何实现浏览器内多个标签页之间的通信?
调用localstorge、cookies等本地存储方式
### 13.call() 和 apply() 的区别？
- 相同点：两个方法产生的作用是完全一样的，动态改变某个类的某个方法的运行环境。
- 不同点：调用的参数不同，比较精辟的总结：
>foo.call(this,arg1,arg2,arg3) == foo.apply(this, arguments)==this.foo(arg1, arg2, arg3)

参考：http://blog.csdn.net/myhahaxiao/article/details/6952321
### 14.eval是做什么的？
它的功能是把对应的字符串解析成JS代码并运行。
### 15.js延迟加载的方式有哪些？
defer和async、动态创建DOM方式（用得最多）、按需异步载入js
### 16.new操作符具体干了什么呢?
1. 创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。
1. 属性和方法被加入到 this 引用的对象中。
1. 新创建的对象由 this 所引用，并且最后隐式的返回 this。 

     var obj  = {};   
     obj.__proto__ = Base.prototype;  
     Base.call(obj);

### 17.创建ajax过程
1. 创建XMLHttpRequest对象,也就是创建一个异步调用对象.
1. 创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息.
1. 设置响应HTTP请求状态变化的函数.
1. 发送HTTP请求.
1. 获取异步调用返回的数据.
1. 使用JavaScript和DOM实现局部刷新.   

> function startRequest(){   
    &nbsp;&nbsp;&nbsp;createXMLHttpRequest();//第一步: 创建XMLHttpRequest对象,也就是创建一个异步调用对象.  
    &nbsp;&nbsp;&nbsp;xmlHttp.open("GET", "simpleResponse.txt", true);//第二步: 创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息.  
    &nbsp;&nbsp;&nbsp;xmlHttp.onreadystatechange = handleStateChange;//第三步: 设置响应HTTP请求状态变化的函数.  
    &nbsp;&nbsp;&nbsp;xmlHttp.send(null);//第四步: 发送请求  
}

### 18.请描述一下 cookies，sessionStorage 和 localStorage 的区别？

在较高版本的浏览器中，js提供了sessionStorage和globalStorage。在HTML5中提供了localStorage来取代globalStorage。

html5中的Web Storage包括了两种存储方式：sessionStorage和localStorage。

sessionStorage用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储。

而localStorage用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。

Web Storage的概念和cookie相似，区别是它是为了更大容量存储设计的。Cookie的大小是受限的，并且每次你请求一个新的页面的时候Cookie都会被发送过去，这样无形中浪费了带宽，另外cookie还需要指定作用域，不可以跨域调用。

除此之外，Web Storage拥有setItem,getItem,removeItem,clear等方法，不像cookie需要前端开发者自己封装setCookie，getCookie。

但是Cookie也是不可以或缺的：Cookie的作用是与服务器进行交互，作为HTTP规范的一部分而存在 ，而Web Storage仅仅是为了在本地“存储”数据而生

浏览器的支持除了IE７及以下不支持外，其他标准浏览器都完全支持(ie及FF需在web服务器里运行)，值得一提的是IE总是办好事，例如IE7、IE6中的UserData其实就是javascript本地存储的解决方案。通过简单的代码封装可以统一到所有的浏览器都支持web storage。

localStorage和sessionStorage都具有相同的操作方法，例如setItem、getItem和removeItem等

### 19.说说cookie的弊端和优点？

cookie虽然在持久保存客户端数据提供了方便，分担了服务器存储的负担，但还是有很多局限性的。
第一：每个特定的域名下最多生成20个cookie

1.IE6或更低版本最多20个cookie
2.IE7和之后的版本最后可以有50个cookie。
3.Firefox最多50个cookie
4.chrome和Safari没有做硬性限制
IE和Opera 会清理近期最少使用的cookie，Firefox会随机清理cookie。

cookie的最大大约为4096字节，为了兼容性，一般不能超过4095字节。

IE 提供了一种存储可以持久化用户数据，叫做uerData，从IE5.0就开始支持。每个数据最多128K，每个域名下最多1M。这个持久化数据放在缓存中，如果缓存没有清理，那么会一直存在。

优点：极高的扩展性和可用性

1.通过良好的编程，控制保存在cookie中的session对象的大小。
2.通过加密和安全传输技术（SSL），减少cookie被破解的可能性。
3.只在cookie中存放不敏感数据，即使被盗也不会有重大损失。
4.控制cookie的生命期，使之不会永远有效。偷盗者很可能拿到一个过期的cookie。

缺点：
1.`Cookie`数量和长度的限制。每个domain最多只能有20条cookie，每个cookie长度不能超过4KB，否则会被截掉。

2.安全性问题。如果cookie被人拦截了，那人就可以取得所有的session信息。即使加密也与事无补，因为拦截者并不需要知道cookie的意义，他只要原样转发cookie就可以达到目的了。

3.有些状态不可能保存在客户端。例如，为了防止重复提交表单，我们需要在服务器端保存一个计数器。如果我们把这个计数器保存在客户端，那么它起不到任何作用。

### 20.js对象的深度克隆代码实现
> instanceof的普通的用法，obj instanceof Object 检测Object.prototype是否存在于参数obj的原型链上
 
		function clone(Obj) {
		    var buf;   
		    if (Obj instanceof Array) {
		        buf = [];  // 创建一个空的数组
		        var i = Obj.length;
		        while (i--) {
		            buf[i] = clone(Obj[i]);
		        }
		        return buf;
		    } else if (Obj instanceof Object){
		        buf = {};  // 创建一个空对象
		        for (var k in Obj) {  // 为这个对象添加新的属性
		            buf[k] = clone(Obj[k]);
		        }
		        return buf;
		    }else{
		        return Obj;
		    }
		}

### 21.请你解释一下JS的同源策略，为什么要有同源策略？

概念:同源策略是客户端脚本（尤其是Javascript）的重要的安全度量标准。它最早出自Netscape Navigator2.0，其目的是防止某个文档或脚本从多个不同源装载。   
这里的同源策略指的是：协议，域名，端口相同，同源策略是一种安全协议。指一段脚本只能读取来自同一来源的窗口和文档的属性。

我们举例说明：比如一个黑客程序，他利用Iframe把真正的银行登录页面嵌到他的页面上，当你使用真实的用户名，密码登录时，他的页面就可以通过Javascript读取到你的表单中input中的内容，这样用户名，密码就轻松到手了。  
缺点：  
现在网站的JS 都会进行压缩，一些文件用了严格模式，而另一些没有。这时这些本来是严格模式的文件，被 merge 后，这个串就到了文件的中间，不仅没有指示严格模式，反而在压缩后浪费了字节。

### 22.常见WEB安全及防护原理

- SQL注入  
	- 原理：就是通过把SQL命令插入到Web表单递交或输入域名或页面请求的查询字符串，最终达到欺骗服务器执行恶意的SQL命令。  
	- 防护：总的来说有如下。
	
	  > 1.永远不要信任用户的输入，要对用户的输入进行校验，可以通过正则表达式，或限制长度，对单引号和双"-"进行转换等。  
      > 2.永远不要使用动态拼装SQL，可以使用参数化的SQL或者直接使用存储过程进行数据查询存取。   
      > 3.永远不要使用管理员权限的数据库连接，为每个应用使用单独的权限有限的数据库连接。  
      > 4.不要把机密信息明文存放，请加密或者hash掉密码和敏感的信息。

- XSS攻击   
	- 原理：Xss(cross-site scripting)攻击指的是攻击者往Web页面里插入恶意 html标签或者javascript代码。比如：攻击者在论坛中放一个看似安全的链接，骗取用户点击后，窃取cookie中的用户私密信息；或者攻击者在论坛中加一个恶意表单，当用户提交表单的时候，却把信息传送到攻击者的服务器中，而不是用户原本以为的信任站点。
	- 防范：
	> 1.首先代码里对用户输入的地方和变量都需要仔细检查长度和对”<”,”>”,”;”,”’”等字符做过滤；
	> 2.其次任何内容写到页面之前都必须加以encode，避免不小心把html tag 弄出来。这一个层面做好，至少可以堵住超过一半的XSS 攻击。   
    > 3.首先，避免直接在cookie 中泄露用户隐私，例如email、密码等等。
    其次，通过使cookie 和系统ip 绑定来降低cookie 泄露后的危险。这样攻击者得到的cookie 没有实际价值，不可能拿来重放。   
    > 4.如果网站不需要再浏览器端对cookie 进行操作，可以在Set-Cookie 末尾加上HttpOnly 来防止javascript 代码直接获取cookie。   
    > 5.尽量采用POST 而非GET 提交表单
- CSRF的防御  
	- 服务端的CSRF方式方法很多样，但总的思想都是一致的，就是在客户端页面增加伪随机数。   
    - 通过验证码的方法
### 23.请描述一下 cookies，sessionStorage 和 localStorage 的区别？

在较高版本的浏览器中，js提供了sessionStorage和globalStorage。在HTML5中提供了localStorage来取代globalStorage。

html5中的Web Storage包括了两种存储方式：sessionStorage和localStorage。

sessionStorage用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储。

而localStorage用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。

Web Storage的概念和cookie相似，区别是它是为了更大容量存储设计的。Cookie的大小是受限的，并且每次你请求一个新的页面的时候Cookie都会被发送过去，这样无形中浪费了带宽，另外cookie还需要指定作用域，不可以跨域调用。

除此之外，Web Storage拥有setItem,getItem,removeItem,clear等方法，不像cookie需要前端开发者自己封装setCookie，getCookie。

但是Cookie也是不可以或缺的：Cookie的作用是与服务器进行交互，作为HTTP规范的一部分而存在 ，而Web Storage仅仅是为了在本地“存储”数据而生

浏览器的支持除了IE７及以下不支持外，其他标准浏览器都完全支持(ie及FF需在web服务器里运行)，值得一提的是IE总是办好事，例如IE7、IE6中的UserData其实就是javascript本地存储的解决方案。通过简单的代码封装可以统一到所有的浏览器都支持web storage。

localStorage和sessionStorage都具有相同的操作方法，例如setItem、getItem和removeItem等。

### 24.说说cookie的弊端和优点？

cookie虽然在持久保存客户端数据提供了方便，分担了服务器存储的负担，但还是有很多局限性的。
第一：每个特定的域名下最多生成20个cookie

1.IE6或更低版本最多20个cookie
2.IE7和之后的版本最后可以有50个cookie。
3.Firefox最多50个cookie
4.chrome和Safari没有做硬性限制
IE和Opera 会清理近期最少使用的cookie，Firefox会随机清理cookie。

cookie的最大大约为4096字节，为了兼容性，一般不能超过4095字节。

IE 提供了一种存储可以持久化用户数据，叫做uerData，从IE5.0就开始支持。每个数据最多128K，每个域名下最多1M。这个持久化数据放在缓存中，如果缓存没有清理，那么会一直存在。

优点：极高的扩展性和可用性

1.通过良好的编程，控制保存在cookie中的session对象的大小。
2.通过加密和安全传输技术（SSL），减少cookie被破解的可能性。
3.只在cookie中存放不敏感数据，即使被盗也不会有重大损失。
4.控制cookie的生命期，使之不会永远有效。偷盗者很可能拿到一个过期的cookie。

缺点：
1.`Cookie`数量和长度的限制。每个domain最多只能有20条cookie，每个cookie长度不能超过4KB，否则会被截掉。

2.安全性问题。如果cookie被人拦截了，那人就可以取得所有的session信息。即使加密也与事无补，因为拦截者并不需要知道cookie的意义，他只要原样转发cookie就可以达到目的了。

3.有些状态不可能保存在客户端。例如，为了防止重复提交表单，我们需要在服务器端保存一个计数器。如果我们把这个计数器保存在客户端，那么它起不到任何作用。

### 25.什么是 “use strict”? 使用它的好处和坏处是什么？

ECMAscript 5添加了第二种运行模式："严格模式"（strict mode）。顾名思义，这种模式使得Javascript在更严格的条件下运行。

设立"严格模式"的目的，主要有以下几个：

1. 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
2. 消除代码运行的一些不安全之处，保证代码运行的安全；
3. 提高编译器效率，增加运行速度；
4. 为未来新版本的Javascript做好铺垫。

注：经过测试 IE6,7,8,9 均不支持严格模式。

缺点：   
现在网站的 JS 都会进行压缩，一些文件用了严格模式，而另一些没有。这时这些本来是严格模式的文件，被 merge 后，这个串就到了文件的中间，不仅没有指示严格模式，反而在压缩后浪费了字节。

### 26.说说前端中的事件流？
事件流就是从页面中接收事件的顺序。IE的事件流是冒泡流，而标准的事件流是捕获流。

### 27.如何实现浏览器内多个标签页之间的通信? 

WebSocket、 SharedWorker；     
也可以调用localstorage、 cookies 等本地存储方式；   
localstorage另一个浏览上下文里被添加、修改或删除时，它都会触发一个事件，   

我们通过监听事件，控制它的值来进行页面信息通信；    

注意quirks： Safari 在无痕模式下设置 localstorge 值时会抛出 QuotaExceededError 的异常； 
### 28.事件、IE与火狐的事件机制有什么区别？ 如何阻止冒泡？ 

1. 我们在网页中的某个操作（有的操作对应多个事件）。例如：当我们点击一个按钮就会产生一个事件。是可以被 JavaScript 侦测到的行为
2. 事件处理机制：IE是事件冒泡、firefox同时支持两种事件模型，也就是：捕获型事件和冒泡型事件
3. ev.stopPropagation();
注意旧ie的方法：ev.cancelBubble = true;

### 29.那些操作会造成内存泄漏？

内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。
垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收。

1. setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。
2. 闭包
3. 控制台日志
4. 循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）

### 30.标准模式和兼容模式各有什么区别？
标准模式的排版 和JS运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作。

### 31.哪些地方会出现css阻塞，哪些地方会出现js阻塞？
 js 的阻塞特性：所有浏览器在下载 JS 的时候，会阻止一切其他活动，比如其他资源的下载，内容的呈现等等。直到 JS 下载、解析、执行完毕后才开始继续并行下载其他资源并呈现内容。为了提高用户体验，新一代浏览器都支持并行下载 JS，但是 JS 下载仍然会阻塞其它资源的下载（例如.图片，css文件等）。       
由于浏览器为了防止出现 JS 修改 DOM 树，需要重新构建 DOM 树的情况，所以就会阻塞其他的下载和呈现。   
嵌入 JS 会阻塞所有内容的呈现，而外部 JS 只会阻塞其后内容的显示，2 种方式都会阻塞其后资源的下载。也就是说外部样式不会阻塞外部脚本的加载，但会阻塞外部脚本的执行。    

CSS 怎么会阻塞加载了？CSS 本来是可以并行下载的，在什么情况下会出现阻塞加载了(在测试观察中，IE6 下 CSS 都是阻塞加载）     
当 CSS 后面跟着嵌入的 JS 的时候，该 CSS 就会出现阻塞后面资源下载的情况。而当把嵌入 JS 放到 CSS 前面，就不会出现阻塞的情况了。     
根本原因：因为浏览器会维持 html 中 css 和 js 的顺序，样式表必须在嵌入的 JS 执行前先加载、解析完。而嵌入的 JS 会阻塞后面的资源加载，所以就会出现上面 CSS 阻塞下载的情况。     

嵌入JS应该放在什么位置？     

1. 放在底部，虽然放在底部照样会阻塞所有呈现，但不会阻塞资源下载。
2. 如果嵌入JS放在head中，请把嵌入JS放在CSS头部。
3. 使用 defer（只支持IE）
4. 不要在嵌入的JS中调用运行时间较长的函数，如果一定要用，可以用 setTimeout 来调用

Javascript无阻塞加载具体方式： 
    
1. 将脚本放在底部。<link>还是放在head中，用以保证在js加载前，能加载出正常显示的页面。<script>标签放在</body>前。
2. 阻塞脚本：由于每个<script>标签下载时阻塞页面解析过程，所以限制页面的<script>总数也可以改善性能。适用于内联脚本和外部脚本。
3. 非阻塞脚本：等页面完成加载后，再加载js代码。也就是，在 window.onload 事件发出后开始下载代码。
4. defer属性：支持IE4和fierfox3.5更高版本浏览器
5. 动态脚本元素：文档对象模型（DOM）允许你使用js动态创建HTML的几乎全部文档内容。代码如下：
	
	<script>
	    var script=document.createElement("script");
	    script.type="text/javascript";
	    script.src="file.js";
	    document.getElementsByTagName("head")[0].appendChild(script);
	</script>

此技术的重点在于：无论在何处启动下载，文件额下载和运行都不会阻塞其他页面处理过程，即使在head里（除了用于下载文件的 http 链接）

### 32.ajax 的过程是怎样的？

1. 创建XMLHttpRequest对象,也就是创建一个异步调用对象
2. 创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息
3. 设置响应HTTP请求状态变化的函数
4. 发送HTTP请求
5. 获取异步调用返回的数据
6. 使用JavaScript和DOM实现局部刷新

### 33.ajax的readystate有5个状态 ，每个状态表示什么？
- 0:未初始化。尚未调用open()方法。
- 1:启动。已经调用open方法，但尚未调用send()方法。
- 2:发送。已经调用send()方法，但尚未接收到响应。
- 3:接收。已经接收到部分响应数据。
- 4:完成。已经接收到全部响应数据，而且可以在客户端使用了。

### 34.简述在IE下mouseover和mouseenter的区别？
当鼠标穿过被选元素或子元素，都会出发mouseover，只有穿过被选元素，才会触发mouseenter。 在IE中，mouseenter子元素不会反复触发事件。

### 35.js 操作获取和设置 cookie 

		function setCookie(name, value, expires, path, domain, secure) {
		    var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
		    if (expires instanceof Date) {
		        cookieText += '; expires=' + expires;
		    }
		    if (path) {
		        cookieText += "; path=" + path     }
		    if (domain) {
		        cookieText += '; domain=' + domain;
		    }
		    if (secure) {
		        cookieText += '; secure';
		    }
		    document.cookie = cookieText;
		}
		// 获取cookie
		function getCookie(name) {
		    var cookieName = encodeURIComponent(name) + '=';
		    var cookieStart = document.cookie.indexOf(cookieName);
		    var cookieValue = null;
		    if (cookieStart > -1) {
		        var cookieEnd = document.cookie.indexOf(';', cookieStart);
		        if (cookieEnd == -1) {
		            cookieEnd = document.cookie.length;
		        }
		        cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
		    }
		    return cookieValue;
		}
		// 删除cookie
		function unsetCookie(name) {
		    document.cookie = name + "= ; expires=" + new Date(0);
		}

### 36.浏览器的内核分别是什么？
IE浏览器的内核Trident、Mozilla的Gecko、Chrome的Blink（WebKit的分支）、Opera内核原为Presto，现为Blink；

### 37.如何解决跨域问题？
- CORS，跨域资源共享，定义了必须在访问跨域资源时，浏览览器与服务器该如何沟通，基本思想是，使用自定义的HTTP头部让浏览器与服务器进行沟通，从而决定请求或响应是否成功。注意，请求和响应都不包含cookie信息。IE8通过XDomainRequest对象支持CORS，其它浏览器通过XHR对象原生支持CORS。
- 图像Ping，多用于动态创建图像。该方式与服务器进行简单、单向的跨域通信。 它有两个主要缺点，一是只能发送GET请求，二是无法访问服务器的响应文本。
- JSONP，填充式JSON，应用JSON的一种新方法。它是被包含在函数调用中的JSON，例如，callback({“name”:“abc”})； JSONP由两部分组成，毁掉函数和数据。毁掉函数是当响应到来时应该在页面中调用的函数。数据时传入毁掉函数中的JSON数据。
- Comet，是一种服务器向页面推送数据的技术。两种方式可实现，长轮询和流。
- SSE，服务器发送事件。SSE API用于创建到服务器的单向连接，服务器通过这个连接可以发送任意数量的数据。
- Web Sockets API

### 38.js延迟加载的方式有哪些？

1. defer和async
2. 动态创建DOM方式（创建script，插入到DOM中，加载完毕后callBack）
3. 按需异步载入js

### 39.如何判断当前脚本运行在浏览器还是node环境中？

通过判断 Global 对象是否为window，如果不为window，当前脚本没有运行在浏览器中。即在node中的全局变量是global ,浏览器的全局变量是window。 可以通过该全局变量是否定义来判断宿主环境

### 40.说几条JavaScript的基本规范？

1.不要在同一行声明多个变量。  
2.请使用 ===/!==来比较true/false或者数值   
3.使用对象字面量替代new Array这种形式  
4.不要使用全局函数。  
5.Switch语句必须带有default分支  
6.函数不应该有时候有返回值，有时候没有返回值。  
7.For循环必须使用大括号  
8.If语句必须使用大括号  
9.for-in循环中的变量 应该使用var关键字明确限定作用域，从而避免作用域污染。

### 41.Flash、Ajax各自的优缺点，在使用中如何取舍？

Flash：

1. Flash适合处理多媒体、矢量图形、访问机器
2. 对CSS、处理文本上不足，不容易被搜索

Ajax：

1. Ajax对CSS、文本支持很好，支持搜索
2. 多媒体、矢量图形、机器访问不足

共同点：

1. 与服务器的无刷新传递消息
2. 可以检测用户离线和在线状态
2. 操作DOM

### 45.编程实现函数柯里化
> 函数式编程curry的概念： 只传递给函数一部分参数来调用函数，然后返回一个函数去处理剩下的参数。     
简单的例子如：
		
		function add(num1,num2){
			return num1+num2;
		}
		
		function curriedAdd(num2){
			return add(5,num2);
		}
		
		alert(add(2,3));   //5
		alert(curriedAdd(3));   //8

### 46.web应用从服务器主动推送Data到客户端有哪些方式？

- html5提供的Websocket
- 不可见的iframe
- WebSocket通过Flash
- XHR长时间连接
- XHR Multipart Streaming
- <script\>标签的长时间连接(可跨域)

### 47.是否设计过通用的组件？
请设计一个 Dialog（弹出层） / Suggestion（自动完成） / Slider（图片轮播） 等组件,你会提供什么接口？调用过程是怎样的？可能会遇到什么细节问题？

### 48.用JavaScript脚本为Array对象添加一个去除重复项的方法。（数组去重） 
   
	return Arrays.from(new Set(arr));

### 49.null和undefined的区别？         

null是一个表示"无"的对象，转为数值时为0  
undefined是一个表示"无"的原始值，转为数值时为NaN   

当声明的变量还未被初始化时，变量的默认值为undefined    
null用来表示尚未存在的对象，常用来表示函数企图返回一个不存在的对象    

undefined表示 “缺少值”，就是此处应该有一个值，但是还没有定义。典型用法是：
    
1. 变量被声明了，但没有赋值时，就等于 undefined    
2. 调用函数时，应该提供的参数没有提供，该参数等于 undefined     
3. 对象没有赋值的属性，该属性的值为 undefined    
4. 函数没有返回值时，默认返回 undefined   

null表示“没有对象”，即该处不应该有值。典型用法是：
1. 作为函数的参数，表示该函数的参数不是对象
2. 作为对象原型链的终点
### 50.js实现继承的几种方式？

1. 原型链继承
2. 借用构造函数继承
3. 组合继承(原型+借用构造)
4. 原型式继承
5. 寄生式继承
6. 寄生组合式继承
### 51.webSocket 如何兼容低浏览器？ 

		Adobe Flash Socket 、 ActiveX HTMLFile (IE) 、 基于 multipart 编码发送 XHR 、 基于长轮询的 XHR 
### 52.JS和ECMAScript的区别和联系？
ECMAScript是JavaScript的规范，JavaScript是ECMAScript的实现。
   
s是一种专为与网页交互而设计的脚本语言，由下列三个不同部分组成：  
核心ECMAScript，提供核心语言功能；   
文档对象模型（DOM），提供访问和操作网页内容的方法和接口；   
浏览器对象模型（BOM），提供与浏览器交互的方法和接口。













# 第二部分：HTML / CSS部分

### 1.什么是盒子模型？
    （1）有两种， IE 盒子模型、标准 W3C 盒子模型；IE的content部分包含了 border 和 pading;

    （2）盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border).
在网页中，一个元素占有空间的大小由几个部分构成，其中包括元素的内容(content)，元素的内边距(padding)，元素的边框(border)，元素的外边距(margin)四个部分。这四个部分占有的空间中，有的部分可以显示相应的内容，而有的部分只用来分隔相邻的区域或区域。4个部分一起构成了css中元素的盒模型。

### 2.简述一下src和href的区别

href:指向外部资源所在位置，建立和当前元素(锚点)或当前文档(链接)之间的链接，用于超链接。

src:是指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置;在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。


### 3.css中如何设置英文首字母大写？
在相应的元素中设置text-transform的属性值为text-transform:capitalize。
### 4.是否应该支持ie6？
2014年4月，微软就停止了对XP系统和IE6浏览器的支持，已经很多年了，用XP和IE6的用户已经很少很少了。我觉得作为一个前端开发者，不必要一味迁就这些用户，应当适当推动他们改变，这对技术的发展也是有好处的。
### 5.px、em、rem的区别
- px是相对于显示器的像素而言的；em是相对于当前对象内的字体尺寸而言，如果行内字体大小没有被设置，则是默认相对于浏览器字体尺寸；而rem是相对于根元素字体的大小而言。
- 1em = 16px，1rem = 16px。为什么是这样，因为所有未经调整的浏览器字体大小都是16px；
- IE9及以上的版本兼容rem。
### 6.写出几种解决IE6Bug的方法

1.双边距BUG float引起的 使用display  
2.像素问题 使用float引起的 使用dislpay:inline -3px  
3.超链接hover 点击后失效 使用正确的书写顺序 link visited hover active  
4.Ie z-index问题 给父级添加position:relative  
5.Png 透明 使用js代码改  
6.Min-height 最小高度 !Important 解决  
7.select 在ie6下遮盖 使用iframe嵌套  
8.为什么没有办法定义1px左右的宽度容器(IE6默认的行高造成的，使用over:hidden,zoom:0.08 line-height:1px)
### 7.css的引入方式有哪些?link和@import的区别是什么?
引入方式有：内嵌 、内联 、嵌入
link是HTML的方法，@import是CSS的方法。
同时加载前者无兼容性，后者CSS2.1以下浏览器不支持；Link 支持使用javascript改变样式，后者不可。
### 8.对WEB标准以及W3C的理解和认识
WEB标准不是某一个标准，而是一系列标准的集合。目前所通常所说的WEB标准一般指网站建设采用基于XHTML语言的网站设计语言,WEB标准中典型的应用模式是“css+div”(什么是css+div)。实际上，WEB标准并不是某一个标准，而是一系列标准的集合。

WEB标准不是某一个标准，而是一系列标准的集合。目前所通常所说的WEB标准一般指网站建设采用基于XHTML语言的网站设计语言,WEB标准中典型的应用模式是“css+div”(什么是css+div)。实际上，WEB标准并不是某一个标准，而是一系列标准的集合。

### 9.页面渲染的原理是什么？

1. 渲染引擎开始解析html，根据标签构建DOM节点
1. 根据css样式构建渲染树，包括元素的大小、颜色，隐藏的元素不会被构建到该树中。
1. 根据css样式构建布局树，主要是确定元素要显示的位置。
1. 根据前面的信息，绘制渲染树。

### 10.页面优化有哪些方法？
可遵循雅虎军规。

- 请求HTTP请求：合并文件、CSS精灵、inline Image   
- 减少DNS查询
	- DNS查询完成之前浏览器不能从这个主机下载任何任何文件。方法：DNS缓存、将资源分布到恰当数量的主机名，平衡并行下载和DNS查询   
- 避免重定向：多余的中间访问 
	- 重定向状态码：302Found被找到了，但不在原来的地址，临时重定向
	- 状态码：301Move Permanently 永久重定向
	- 对用户来说，301、302没有区别；对搜索引擎来说，区别很大
- 使Ajax可缓存  
- 非必须组件延迟加载  
- 未来所需组件预加载  
- 减少DOM元素数量  
优化DOM操作的方式：  
1.1 用cssText来合并多次DOM操作。

		var el = document.getElementById('mydiv');   
		el.style.borderLeft = '1px';   
		el.style.borderRight = '2px';   
		el.style.padding = '5px';  
改为：

		var el = document.getElementById('mydiv');   
		l.style.cssText = 'border-left: 1px; border-right: 2px; padding: 5px;';  
1.2 将需要多次重排的元素position设置为absolute和fixed,这样元素就脱离了文档流，它的变化就不会影响其他元素的渲染。例如针对有动画效果的元素。   
1.3 减少对DOM元素的查询和修改，查询时可将其赋值给局部变量。   

		 divUpdate.innerHTML = "";
		 for ( var i=0; i<100; i++ )
		 {
		  divUpdate.innerHTML += "<SPAN>This is a slower method! </SPAN>";
		 }
改成：
- 将资源放到不同的域下：浏览器同时从一个域下载资源的数目有限，增加域可以提高并行下载量  
- 减少iframe数量  
- 不要404
  
Server方面    

- 使用CDN  
	内容分发网络，就近使用服务器获得资源，减少网络拥塞。
- 添加Expires或者Cache-Control响应头  
	- 当服务器开启了expire模块的时候，浏览器发送请求，服务器机会返回一个带expire的http请求头
	- expire头的值是一个时间值，值就是资源在本地的过期时间、存在本地、在本地缓存阶段，找到一个对应的资源值，当前时间还没超过资源的过期时间，就直接使用这一个资源，不会发送http请求。
	- cache-control和expires类似，但是有更多的选项值。
	
- 对组件使用Gzip压缩  
    - 本地压缩
    - 服务器压缩
- 配置实体标签ETag  
- Flush Buffer Early   
- Ajax使用GET进行请求  
- 避免空src的img标签  
- Cookie方面  
- 减小cookie大小  
- 引入资源的域名不要包含cookie 
 
css方面     
       
- 将样式表放到页面顶部  
- 不使用CSS表达式 
	 - css表达式：就是将CSS和javascript联系起来。
- 使用不使用@import  
- 不使用IE的Filter 
 
Javascript方面 
 
- 将脚本放到页面底部  
- 将javascript和css从外部引入 
	- 提高了复用性
	- 减少页面体积
	- 提高了可维护性
	- 利大于弊，缺点是页面的渲染速度有下降  
- 压缩javascript和css
	- 在正式上线项目之前，将js和CSS都进行压缩，使线上版本是最轻量的。  
- 删除不需要的脚本  
- 减少DOM访问  
- 合理设计事件监听器
  
图片方面 
 
- 优化图片：根据实际颜色需要选择色深、压缩  
- 优化css精灵  
- 不要在HTML中拉伸图片  
- 保证favicon.ico小并且可缓存 
 
移动方面
 
- 保证组件小于25k
### 11.CSS有哪些继承属性
- 关于文字排版的属性如：
	- font
	- text-align
	- text-shadow(文字阴影)
	- text-transform(控制文本的大小写)
	- text-indent（规定文本块中首行文本的缩进）
	- word-spacing（改变字（单词）之间的标准间隔）
	- letter-spacing（修改字符或字母之间的间隔）
	- word-break（）
- line-height
- color
- visibility
- cursor

### 12.Web前端项目的结构是怎样的？文件有哪些命名规范？
js、css、html、图片、数据文件分类命名。
### 13.css样式书写有哪些规范？
- 书写顺序  
1.位置属性(position, top, right,z-index, display, float等)  
2.大小(width, height, padding,margin)  
3.文字系列(font, line-height,letter-spacing, color- text-align等)   
4.背景(background, border等)      
5.其他(animation, transition等)
- 书写规范
- 命名规范。标签的选择以及class、id属性要符合语义化。
- 注释规范。/* 这样的注释规范 */

### 14.iframe有哪些缺点？

优点：

1. 解决加载缓慢的第三方内容如图标和广告等的加载问题
2. Security sandbox
3. 并行加载脚本

缺点：

1. iframe会阻塞主页面的Onload事件
2. 即时内容为空，加载也需要时间
3. 没有语意

### 15.元素定位有哪些？
position是元素定位属性：

- absolute绝对定位   
相对位置为父元素为非static的第一个父元素进行定位。
- fixed 固定定位（老IE6不支持）   
相对于浏览器窗口进行定位。 
- relative相对定位    
相对于其正常（默认布局）位置进行定位。
-  static   
默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right z-index 声明）  

所有的定位如果left、top、right、bottom属性都为默认值，则为默认定位
absolute定位会脱离文档，浮动起来，多个层重叠可以使用z-index属性改变层叠顺序
absolute定位忽略padding，相对位置为相对定位容器的左上角内边框，
### 16.::before和：before有什么区别？ 

- 相同点  
    - 都可以用来表示伪类对象，用来设置对象前的内容       
	- :befor和::before写法是等效的
- 不同点   
	- :befor是Css2的写法，::before是Css3的写法   
    - :before的兼容性要比::before好 ，不过在H5开发中建议使用::before比较好
### 17.CSS的优先级是怎样的？
!important>style>权重值，其中标签的权重值是1，class的权重值是10，id的权重值是100，如果权重值相同，则遵循就近原则。最后定义的那个属性起作用。
### 18.如何居中一个元素？
- 元素水平居中的方式
	- 行级元素水平居中对齐：在父元素中设置一个text-align:center;
	- 块级元素水平居中对齐：父元素设置text-align:center，该元素自身设置为margin:0 auto;
	- 浮动元素水平居中对齐：
		- 可以在外层加一个div，外层的div采用margin居中，里层的div设置宽度为100%。
		- 设置当前div的宽度，然后设置margin-left:50%; position:relative; left:-250px;其中的left是宽度的一半。
- 元素垂直居中对齐
	- 行级元素垂直居中：对行级元素垂直居中（heiht与line-height的值一样）
	- 块级元素垂直居中：
		- 父元素高度固定:父元素的height与line-height值相同;需要垂直居中的元素
			> vertical-align:middle;// 垂直居中对齐     
 			display:inline|inline-block //块级元素转行级元素   
		- 父元素高度不固定：设置父元素的padding-top和padding-bottom一样 
### 19.为什么要初始化样式？
因为浏览器的兼容的问题，不同浏览器有些标签的默认值是不同的，如果没有CSS初始化往往会出现浏览器之间的

### 20.用纯CSS创建一个三角形的原理是什么？

元素的宽高设为0, border：分别设置上下左右border属性，然后将其他的border设置为transparent。

### 21.CSS样式-如何清除元素浮动？
1、clear:both；  
2、overflow:hidden；   
3、浮动父元素；   
4、在浮动元素的后面添加一个去除浮动的元素。  


### 22.CSS3有哪些新特性？

1. CSS3实现圆角（border-radius），阴影（box-shadow），
2. 对文字加特效（text-shadow、），线性渐变（gradient），旋转（transform）
3. transform:rotate(9deg) scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg);// 旋转,缩放,定位,倾斜
4. 增加了更多的CSS选择器  多背景 rgba
5. 在CSS3中唯一引入的伪类是 ::selection.
6. 媒体查询，多栏布局
7. border-image

### 23.html5有哪些新特性、移除了那些元素？

新特性：   
HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。

1. 拖拽释放(Drag and drop) API 
2. 语义化更好的内容标签（header,nav,footer,aside,article,section）
3. 音频、视频API(audio,video)
4. 画布(Canvas) API
5. 地理(Geolocation) API
6. 本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失；
7. sessionStorage 的数据在浏览器关闭后自动删除
8. 表单控件，calendar、date、time、email、url、search  
9. 新的技术webworker, websocket, Geolocation

移除的元素：   

1. 纯表现的元素：basefont，big，center，font, s，strike，tt，u；
2. 对可用性产生负面影响的元素：frame，frameset，noframes；

支持HTML5新标签：   
  
1. IE8/IE7/IE6支持通过 document.createElement 方法产生的标签，可以利用这一特性让这些浏览器支持 HTML5 新标签，浏览器支持新标签后，还需要添加标签默认的样式（当然最好的方式是直接使用成熟的框架、使用最多的是html5shiv框架）：  
	
		<!--[if lt IE 9]> 
		<script> src="http://html5shiv.googlecode.com/svn/trunk/html5.js"</script> 
		<![endif]--> 

如何区分： 
DOCTYPE声明新增的结构元素、功能元素


### 24.img标签上title和alt属性的区别是什么？
alt当图片不显示时是文字代表  
title为该属性提供信息

### 25.页面优化有哪些方法？
- 代码层面：避免使用css表达式，避免使用高级选择器，通配选择器。
- 缓存利用：缓存Ajax，使用CDN，使用外部js和css文件以便缓存，添加Expires头，服务端配置Etag，减少DNS查找等
- 请求数量：合并样式和脚本，使用css图片精灵，初始首屏之外的图片资源按需加载，静态资源延迟加载。
- 请求带宽：压缩文件，开启GZIP，
- 代码层面的优化  
   - 用hash-table来优化查找  
   - 少用全局变量
   - 用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能
   - 用setTimeout来避免页面失去响应
   - 缓存DOM节点查找的结果
	- 避免使用CSS Expression
	- 避免全局查询
	- 避免使用with(with会创建自己的作用域，会增加作用域链长度)
	- 多个变量声明合并
	- 避免图片和iFrame等的空Src。空Src会重新加载当前页面，影响速度和效率
	- 尽量避免写在HTML标签中写Style属性

### 26.常见的兼容性问题
- png24位的图片在iE6浏览器上出现背景，解决方案是做成PNG8.
- 浏览器默认的margin和padding不同。解决方案是加一个全局的*{margin:0;padding:0;}来统一。  
- IE6双边距bug:块属性标签float后，又有横行的margin情况下，在ie6显示margin比设置的大。
浮动ie产生的双倍距离 #box{ float:left; width:10px; margin:0 0 0 100px;}
这种情况之下IE会产生20px的距离，解决方案是在float的标签样式控制中加入 ——_display:inline;将其转化为行内属性。(_这个符号只有ie6会识别)
渐进识别的方式，从总体中逐渐排除局部。  
首先，巧妙的使用“\9”这一标记，将IE游览器从所有情况中分离出来。 接着，再次使用“+”将IE8和IE7、IE6分离开来，这样IE8已经独立识别。  
css        
 >     .bb{
       background-color:#f1ee18;/*所有识别*/   
      .background-color:#00deff\9; /*IE6、7、8识别*/   
      +background-color:#a200ff;/*IE6、7识别*/   
      _background-color:#1e0bd1;/*IE6识别*/
      }

- IE下,可以使用获取常规属性的方法来获取自定义属性,
也可以使用getAttribute()获取自定义属性;
Firefox下,只能使用getAttribute()获取自定义属性.
解决方法:统一通过getAttribute()获取自定义属性.
- IE下,even对象有x,y属性,但是没有pageX,pageY属性; Firefox下,event对象有pageX,pageY属性,但是没有x,y属性.
- 解决方法：（条件注释）缺点是在IE浏览器下可能会增加额外的HTTP请求数。
- Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示, 可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决.
超链接访问过后hover样式就不出现了 被点击访问过的超链接样式不在具有hover和active了解决方法是改变CSS属性的排列顺序:L-V-H-A : a:link {} a:visited {} a:hover {} a:active {}

### 27.你知道什么是CSS reset么？
reset重置浏览器的CSS默认属性，浏览器的品种不同、样式不同，然后重置，让他们统一。

### 28.圣杯布局、双飞翼布局
- 圣杯布局和双飞翼布局是一回事，都是实现三栏布局，左右两栏宽度固定，中间盒子自适应。它们实现的效果是一样的，差别在于其实现的效果。       
- 圣杯布局起源于一篇文章，双飞翼布局源于淘宝的UED。

### 29.CSS选择符有哪些？哪些属性可以继承？优先级算法如何计算？CSS3新增伪类有哪些？
1.id选择器（ # myid）  
2.类选择器（.myclassname）  
3.标签选择器（div, h1, p）  
4.相邻选择器（h1 + p）  
5.子选择器（ul > li）  
6.后代选择器（li a）  
7.通配符选择器（ * ）  
8.属性选择器（a[rel = "external"]）  
9.伪类选择器（a: hover, li: nth - child）   
可继承的样式： font-size font-family color, UL LI DL DD DT;
不可继承的样式：border padding margin width height;  
优先级就近原则，同权重情况下样式定义最近者为准;
载入样式以最后载入的定位为准;
优先级为:
      !important >  id > class > tag

      important 比 内联优先级高
CSS3新增伪类举例：

    p:first-of-type    选择属于其父元素的首个 <p> 元素的每个 <p> 元素。
    p:last-of-type    选择属于其父元素的最后 <p> 元素的每个 <p> 元素。
    p:only-of-type    选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。
    p:only-child    选择属于其父元素的唯一子元素的每个 <p> 元素。
    p:nth-child(2)    选择属于其父元素的第二个子元素的每个 <p> 元素。
    :enabled  :disabled 控制表单控件的禁用状态。
    :checked        单选框或复选框被选中

### 30.前端要注意的SEO有哪些？
- 合理的title、description、keywords：搜索对着三项的权重逐个减小，title值强调重点即可，重要关键词出现不要超过2次，而且要靠前，不同页面title要有所不同；
- description把页面内容高度概括，长度合适，不可过分堆砌关键词，不同页面description有所不同；
- keywords列举出重要关键词即可
- 语义化的HTML代码，符合W3C规范：语义化代码让搜索引擎容易理解网页
- 重要内容HTML代码放在最前：搜索引擎抓取HTML顺序是从上到下，有的搜索引擎对抓取长度有限制，保证重要内容一定会被抓取
- 重要内容不要用js输出：爬虫不会执行js获取内容
- 少用iframe：搜索引擎不会抓取iframe中的内容
- 非装饰性图片必须加alt
- 提高网站速度：网站速度是搜索引擎排序的一个重要指标

### 31.什么是WEB语义化？
用正确的标签做正确的事情！
   html语义化就是让页面的内容结构化，便于对浏览器、搜索引擎解析；
   在没有样式CCS情况下也以一种文档格式显示，并且是容易阅读的。
   搜索引擎的爬虫依赖于标记来确定上下文和各个关键字的权重，利于 SEO。
   使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。

- web语义化是指通过HTML标记表示页面包含的信息，包含了HTML标签的语义化和css命名的语义化。
- HTML标签的语义化是指：通过使用包含语义的标签（如h1-h6）恰当地表示文档结构 

- css命名的语义化是指：为html标签添加有意义的class，id补充未表达的语义，如Microformat通过添加符合规则的class描述信息 
- 为什么需要语义化：  
去掉样式后页面呈现清晰的结构
盲人使用读屏器更好地阅读
搜索引擎更好地理解页面，有利于收录
便团队项目的可持续运作及维护

### 32.doctype是什么,HTML5为什么只需要写<!DOCTYPE html>
<!DOCTYPE>声明位于位于HTML文档中的第一行，处于 <html> 标签之前。告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。

HTML5 不基于 SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）；
而HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。


### 33.css hack原理及常用hack
由于不同的浏览器和浏览器各版本对CSS的支持及解析结果不一样，以及CSS优先级对浏览器展现效果的影响，我们可以据此针对不同的浏览器情景来应用不同的CSS。

### 34.css sprite是什么,有什么优缺点
概念：将多个小图片拼接到一个图片中。通过background-position和元素尺寸调节需要显示的背景图案。减少服务器对图片的请求数量。      
优点：

- 减少HTTP请求数，极大地提高页面加载速度
- 增加图片信息重复度，提高压缩比，减少图片大小
- 更换风格方便，只需在一张或几张图片上修改颜色或样式即可实现   

缺点：
 
- 图片合并麻烦
- 维护麻烦，修改一个图片可能需要从新布局整个图片，样式

### 35.渐进增强和平稳退化
渐进增强 progressive enhancement：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。

优雅降级 graceful degradation：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。    
    
区别：优雅降级是从复杂的现状开始，并试图减少用户体验的供给，而渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要。降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带。

### 36.display: none;与visibility: hidden;的区别
区别：
     
1. display:none;会让元素完全从渲染树中消失，渲染的时候不占据任何空间；visibility: hidden;不会让元素从渲染树消失，渲染师元素继续占据空间，只是内容不可见   
1. display: none;是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示；visibility: hidden;是继承属性，子孙节点消失由于继承了hidden，通过设置visibility: visible;可以让子孙节点显式  
1. 修改常规流中元素的display通常会造成文档重排。修改visibility属性只会造成本元素的重绘。   
1. 读屏器不会读取display: none;元素内容；会读取visibility: hidden;元素内容

### 37.什么是BFC?如何实现？

(1)、什么是BFC与IFC   

a、BFC（Block Formatting Context）即“块级格式化上下文”， IFC（Inline Formatting Context）即行内格式化上下文。常规流（也称标准流、普通流）是一个文档在被显示时最常见的布局形态。一个框在常规流中必须属于一个格式化上下文，你可以把BFC想象成一个大箱子，箱子外边的元素将不与箱子内的元素产生作用。  

b、BFC是W3C CSS 2.1 规范中的一个概念，它决定了元素如何对其内容进行定位，以及与其他元素的关系和相互作用。当涉及到可视化布局的时候，Block Formatting Context提供了一个环境，HTML元素在这个环境中按照一定规则进行布局。一个环境中的元素不会影响到其它环境中的布局。比如浮动元素会形成BFC，浮动元素内部子元素的主要受该浮动元素影响，两个浮动元素之间是互不影响的。也可以说BFC就是一个作用范围。   

c、在普通流中的 Box(框) 属于一种 formatting context(格式化上下文) ，类型可以是 block ，或者是 inline ，但不能同时属于这两者。并且， Block boxes(块框) 在 block formatting context(块格式化上下文) 里格式化， Inline boxes(块内框) 则在 Inline Formatting Context(行内格式化上下文) 里格式化。   

(2)、如何产生BFC   
     
当一个HTML元素满足下面条件的任何一点，都可以产生Block Formatting Context： 
  
	a、float的值不为none    
	b、overflow的值不为visible   
	c、display的值为table-cell, table-caption, inline-block中的任何一个    
	d、position的值不为relative和static

CSS3触发BFC方式则可以简单描述为：在元素定位非static，relative的情况下触发，float也是一种定位方式。

(3)、BFC的作用与特点     
a、不和浮动元素重叠，清除外部浮动，阻止浮动元素覆盖

如果一个浮动元素后面跟着一个非浮动的元素，那么就会产生一个重叠的现象。常规流（也称标准流、普通流）是一个文档在被显示时最常见的布局形态，当float不为none时，position为absolute、fixed时元素将脱离标准流。



### 38.行内元素有哪些？块级元素有哪些？空元素有哪些？
首先：CSS规范规定，每个元素都有display属性，确定该元素的类型，每个元素都有默认的display值，如div的display默认值为“block”，则为“块级”元素；span默认display属性值为“inline”，是“行内”元素。

    （1）行内元素有：a b span img input select strong（强调的语气）
    （2）块级元素有：div ul ol li dl dt dd h1 h2 h3 h4…p
    （3）常见的空元素：
        <br> <hr> <img> <input> <link> <meta>
        鲜为人知的是：
        <area> <base> <col> <command> <embed> <keygen> <param> <source> <track> <wbr>

### 39.documen.write和 innerHTML的区别
document.write只能重绘整个页面，innerHTML可以重绘页面的一部分

### 40.XHTMl与HTMl的区别
HTML是一种基本的WEB网页设计语言，XHTML是一个基于XML的置标语言
最主要的不同： 
 
- XHTML 元素必须被正确地嵌套。  
- XHTML 元素必须被关闭。  
- 标签名必须用小写字母。  
- XHTML 文档必须拥有根元素。  
### 41. 前端页面有哪三层构
	- 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更成，分别是什么?作用是什么?
- 结构层 Html   
- 表示层 CSS   
- 行为层 js

### 42.用什么管理代码？
git,svn
### 43.CSS和JS的压缩办法？
用前端构建工具gulpjs压缩。
### 44.解释下 CSS sprites，以及你要如何在页面或网站中使用它。
CSS Sprites 其实就是把网页中一些背景图片整合到一张图片文件中，再利用 CSS 的"background-image"，"background-repeat"，"background-position" 的组合进行背景定位，background-position 可以用数字能精确的定位出背景图片的位置。这样可以减少很多图片请求的开销，因为请求耗时比较长；请求虽然可以并发，但是也有限制，一般浏览器都是6个。对于未来而言，就不需要这样做了，因为有了 http2。

### 44.Media Queries是否通过设备类型、设备宽度来过滤设备
CSS3的MediaQueries可以帮助设计师获取以下数据：

1. 浏览器的窗口的宽度和高度，
2. 设备的宽和高；
3. 设备的手持方面，横向还是竖向；
4. 分辨率；

### 45.了解过flex布局吗？说说它和传统布局的有何不同？
flexbox是position的一个属性，

## 46.title与h1的区别、b与strong的区别、i与em的区别？
- title和h1的区别
	- title在网站的标签上显示，告诉搜索引擎网站的主题，h1一般用于文章的标题。
	- h1强调文章，突出视觉效果，title用于突出网页主体信息。
- b与strong的区别
	- b和strong的视觉效果是一样的
	- b仅仅强调样式，强调视觉，而strong是为了加强语气，提醒读者注意。
- i与em的区别
	- i和em的视觉效果也是一样的
	- i是强调视觉，em是强调主题。
### 47.网页验证码是干嘛的，是为了解决什么安全问题？
防止恶意脚本的执行，网页验证码有不容易被计算机识别的图像。
### 48.浏览器的标准模式、怪异模式。
标准模式：依照W3C标准模式，content不包含padding值和border值。   
怪异模式：如果忽略文档声明Doctype,IE浏览器就会按照IE盒子模型来渲染页面，就是说，如果设置width，height属性，那么在ie浏览器上面，会把padding、border算在上面。

### 49.box-sizing的属性？
设置或检索对象的盒模型组成模式

- box-sizing:content-box： padding和border不被包含在定义的width和height之内。对象的实际宽度等于设置的width值和border、padding之和，即 ( Element width = width + border + padding，但占有页面位置还要加上margin ) 此属性表现为标准模式下的盒模型。   
- box-sizing:border-box： padding和border被包含在定义的width和height之内。对象的实际宽度就等于设置的width值，即使定义有border和padding也不会改变对象的实际宽度，即 ( Element width = width ) 此属性表现为怪异模式下的盒模型。

### 50.html常见兼容性问题？ 
用构造函数和原型链的混合模式去实现继承，避免对象共享可以参考经典的extend()函数，很多前端框架都有封装的，就是用一个空函数当做中间变量
 
1. png24位的图片在iE6浏览器上出现背景
解决方案：做成PNG8，也可以引用一段脚本处理.

2. 浏览器默认的margin和padding不同
解决方案：加一个全局的 *{margin:0;padding:0;} 来统一。

3. IE6双边距bug：在IE6下，如果对元素设置了浮动，同时又设置了margin-left或margin-right，margin值会加倍。
	
	 	#box{float:left; width:10px; margin:0 0 0 10px;} 

这种情况之下IE会产生20px的距离
解决方案：在float的标签样式控制中加入 _display:inline; 将其转化为行内属性。( _ 这个符号只有ie6会识别)

4. 渐进识别的方式，从总体中逐渐排除局部。 
首先，巧妙的使用“\9”这一标记，将IE游览器从所有情况中分离出来。 
接着，再次使用 "+" 将IE8和IE7、IE6分离开来，这样IE8已经独立识别。
		
		.bb{
		    background-color:#f1ee18; /*所有识别*/
		    .background-color:#00deff\9; /*IE6、7、8识别*/
		    +background-color:#a200ff; /*IE6、7识别*/
		    _background-color:#1e0bd1; /*IE6识别*/ 
		} 

5.IE下，可以使用获取常规属性的方法来获取自定义属性，也可以使用 getAttribute() 获取自定义属性；Firefox下,只能使用getAttribute()获取自定义属性
解决方法：统一通过getAttribute()获取自定义属性

6. IE下，event对象有 x、y 属性，但是没有 pageX、pageY属性; Firefox下，event对象有 pageX、pageY 属性，但是没有 x、y 属性
解决方法：（条件注释）缺点是在IE浏览器下可能会增加额外的HTTP请求数。

7. Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示
解决方法：可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决

8. 超链接访问过后 hover 样式就不出现了，被点击访问过的超链接样式不在具有 hover 和 active 了
解决方法：改变CSS属性的排列顺序 L-V-H-A	

		a:link {}
		a:visited {}
		a:hover {}
		a:active {}

9. 怪异模式问题：漏写 DTD 声明，Firefox 仍然会按照标准模式来解析网页，但在 IE 中会触发怪异模式。为避免怪异模式给我们带来不必要的麻烦，最好养成书写 DTD 声明的好习惯。现在可以使用[html5](http://www.w3.org/TR/html5/single-page.html) 推荐的写法：<!DOCTYPE html>

10. 上下margin重合问题：ie和ff都存在，相邻的两个div的margin-left和margin-right不会重合，但是margin-top和margin-bottom却会发生重合。
解决方法：养成良好的代码编写习惯，同时采用margin-top或者同时采用margin-bottom。

11. ie6对png图片格式支持不好
解决方案：引用一段脚本处理

### 51.清楚浮动的作用是什么？怎样清除？
### 作用：

浮动元素引起的问题：
   
1. 父元素的高度无法被撑开，影响与父元素同级的元素  
2. 与浮动元素同级的非浮动元素会跟随其后  
3. 若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构

### 清除浮动的几种方法：
1. 额外标签法，<div style="clear:both;"></div>（缺点：不过这个办法会增加额外的标签使HTML结构看起来不够简洁。）
2. 使用after伪元素
	
		#parent:after{
		    content:".";
		    height:0;
		    visibility:hidden;
		    display:block;
		    clear:both;
		}
3. 浮动外部元素
4. 设置 overflow 为 hidden 或者 auto

 1. 使用空标签清除浮动。
这种方法是在所有浮动标签后面添加一个空标签 定义css clear:both. 弊端就是增加了无意义标签。

2. 使用overflow。
给包含浮动元素的父标签添加css属性 overflow:auto; zoom:1; zoom:1用于兼容IE6。

3. 使用after伪对象清除浮动。
该方法只适用于非IE浏览器。具体写法可参照以下示例。使用中需注意以下几点。一、该方法中必须为需要清除浮动元素的伪对象中设置 height:0，否则该元素会比实际高出若干像素；

可以给父元素设置overflow：auto或者hidden 

### 52.什么是 FOUC（无样式内容闪烁）？你如何来避免 FOUC？

FOUC - Flash Of Unstyled Content 文档样式闪烁 
    
	<style type="text/css" media="all">@import "../fouc.css";</style>   
而引用CSS文件的@import就是造成这个问题的罪魁祸首。IE会先加载整个HTML文档的DOM，然后再去导 入外部的CSS文件，因此，在页面DOM加载完成到CSS导入完成中间会有一段时间页面上的内容是没有样式的，这段时间的长短跟网速，电脑速度都有关系。    
解决方法简单的出奇，只要在<head>之间加入一个<link>或者`<script>元素`就可以了。  

### 53.===和==的区别    
===不进行强制类型转换，==会强制类型转换
## 139.变量提升的理解。

### 54.三栏布局
实现三栏布局的方式：     
1.左右div用float来浮动。缺点：容易被清除浮动给清除掉。     
2.圣杯布局、双飞翼布局。   
3.绝对定位。

### 55.`data-`属性的作用是什么？

`data-`为H5新增的为前端开发者提供自定义的属性，这些属性集可以通过对象的 `dataset` 属性获取，不支持该属性的浏览器可以通过 `getAttribute` 方法获取 :


需要注意的是：`data-`之后的以连字符分割的多个单词组成的属性，获取的时候使用驼峰风格。 所有主流浏览器都支持 data-* 属性。

即：当没有合适的属性和元素时，自定义的 data 属性是能够存储页面或 App 的私有的自定义数据。

### 56.Label的作用是什么，是怎么用的？ 


label标签来定义表单控制间的关系 , 当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。
	
	<label for='Name'>Number:</label>
	
	<input type=“ text “ name='Name' id='Name'/>
	<label>Date:<input type='text' name='B'/></label>
	
注意:label的for属性值要与后面对应的input标签id属性值相同

	<label for='Name'>Number:</label>
	
	<input type=“ text “ name='Name' id='Name'/>

  

### 57.谈谈你对canvas的理解？
canvas是HTML5中新增一个HTML5标签与操作canvas的javascript API，它可以实现在网页中完成动态的2D与3D图像技术。标记和 SVG以及 VML 之间的一个重要的不同是，有一个基于 JavaScript 的绘图 API，而 SVG 和 VML 使用一个 XML 文档来描述绘图。SVG 绘图很容易编辑与生成，但功能明显要弱一些。 canvas可以完成动画、游戏、图表、图像处理等原来需要Flash完成的一些功能。

### 58.HTML5 有哪些新增的表单元素？

HTML5 新增了很多表单元素让开发者构建更优秀的 Web 应用程序，主要有：

	datalist
	keygen
	output

### 59.说说你对页面中使用定位(position)的理解？ 
使用css布局position非常重要，语法如下：   

position：static | relative | absolute | fixed | center | page | sticky    
默认值：static，center、page、sticky是CSS3中新增加的值。 
    
(1)、static
可以认为静态的，默认元素都是静态的定位，对象遵循常规流。此时4个定位偏移属性不会被应用，也就是使用left，right，bottom，top将不会生效。

(2)、relative
相对定位，对象遵循常规流，并且参照自身在常规流中的位置通过top，right，bottom，left这4个定位偏移属性进行偏移时不会影响常规流中的任何元素。

(3)、absolute
a、绝对定位，对象脱离常规流，此时偏移属性参照的是离自身最近的定位祖先元素，如果没有定位的祖先元素，则一直回溯到body元素。盒子的偏移位置不影响常规流中的任何元素，其margin不与其他任何margin折叠。
b、元素定位参考的是离自身最近的定位祖先元素，要满足两个条件，第一个是自己的祖先元素，可以是父元素也可以是父元素的父元素，一直找，如果没有则选择body为对照对象。第二个条件是要求祖先元素必须定位，通俗说就是position的属性值为非static都行。

(4)、fixed
固定定位，与absolute一致，但偏移定位是以窗口为参考。当出现滚动条时，对象不会随着滚动。

(5)、center
与absolute一致，但偏移定位是以定位祖先元素的中心点为参考。盒子在其包含容器垂直水平居中。（CSS3）

(6)、page
与absolute一致。元素在分页媒体或者区域块内，元素的包含块始终是初始包含块，否则取决于每个absolute模式。（CSS3）

(7)、sticky
对象在常态时遵循常规流。它就像是relative和fixed的合体，当在屏幕中时按常规流排版，当卷动到屏幕外时则表现如fixed。该属性的表现是现实中你见到的吸附效果。（CSS3）

### 60. 页面布局的方式有哪些？  

方式：双飞翼、多栏、弹性、流式、瀑布流、响应式布局 （1）、双飞翼布局 经典三列布局，也叫做圣杯布局【Holy Grail of Layouts】是Kevin Cornell在2006年提出的一个布局模型概念，在国内最早是由淘宝UED的工程师传播开来，在中国也有叫法是双飞翼布局，它的布局要求有几点： a、三列布局，中间宽度自适应，两边定宽；  b、中间栏要在浏览器中优先展示渲染；  c、允许任意列的高度最高； d、要求只用一个额外的DIV标签；  e、要求用最简单的CSS、最少的HACK语句； 在不增加额外标签的情况下，圣

方式：双飞翼、多栏、弹性、流式、瀑布流、响应式布局

- 双飞翼布局
经典三列布局，也叫做圣杯布局【Holy Grail of Layouts】是Kevin Cornell在2006年提出的一个布局模型概念，在国内最早是由淘宝UED的工程师传播开来，在中国也有叫法是双飞翼布局，它的布局要求有几点：   
a、三列布局，中间宽度自适应，两边定宽；     
b、中间栏要在浏览器中优先展示渲染；     
c、允许任意列的高度最高；     
d、要求只用一个额外的DIV标签；     
e、要求用最简单的CSS、最少的HACK语句；    
在不增加额外标签的情况下，圣杯布局已经非常完美，圣杯布局使用了相对定位，以后布局是有局限性的，而且宽度控制要改的地方也多。在淘宝UED（User Experience Design）探讨下，增加多一个div就可以不用相对布局了，只用到了浮动和负边距，这就是我们所说的双飞翼布局。

- 多栏布局     
a、栏栅格系统：就是利用浮动实现的多栏布局，在bootstrap中用的非常多。    
b、多列布局：栅格系统并没有真正实现分栏效果（如word中的分栏），CSS3为了满足这个要求增加了多列布局模块    

- 弹性布局（Flexbox）    
CSS3引入了一种新的布局模式——Flexbox布局，即伸缩布局盒模型（Flexible Box），用来提供一个更加有效的方式制定、调整和分布一个容器里项目布局，即使它们的大小是未知或者动态的，这里简称为Flex。    
Flexbox布局常用于设计比较复杂的页面，可以轻松的实现屏幕和浏览器窗口大小发生变化时保持元素的相对位置和大小不变，同时减少了依赖于浮动布局实现元素位置的定义以及重置元素的大小。   

Flexbox布局在定义伸缩项目大小时伸缩容器会预留一些可用空间，让你可以调节伸缩项目的相对大小和位置。例如，你可以确保伸缩容器中的多余空间平均分配多个伸缩项目，当然，如果你的伸缩容器没有足够大的空间放置伸缩项目时，浏览器会根据一定的比例减少伸缩项目的大小，使其不溢出伸缩容器。     

综合而言，Flexbox布局功能主要具有以下几点：   
a、屏幕和浏览器窗口大小发生改变也可以灵活调整布局；    
b、可以指定伸缩项目沿着主轴或侧轴按比例分配额外空间（伸缩容器额外空间），从而调整伸缩项目的大小；    
c、可以指定伸缩项目沿着主轴或侧轴将伸缩容器额外空间，分配到伸缩项目之前、之后或之间；
d、可以指定如何将垂直于元素布局轴的额外空间分布到该元素的周围；    
e、可以控制元素在页面上的布局方向；    
f、可以按照不同于文档对象模型（DOM）所指定排序方式对屏幕上的元素重新排序。也就是说可以在浏览器渲染中不按照文档流先后顺序重排伸缩项目顺序。    
- 瀑布流布局    
瀑布流布局是流式布局的一种。是当下比较流行的一种网站页面布局，视觉表现为参差不齐的多栏布局，随着页面滚动条向下滚动，这种布局还会不断加载数据块并附加至当前尾部。最早采用此布局的网站是Pinterest，逐渐在国内流行开来。     
优点   
a、有效的降低了界面复杂度，节省了空间：我们不再需要臃肿复杂的页码导航链接或按钮了。   
b、对触屏设备来说，交互方式更符合直觉：在移动应用的交互环境当中，通过向上滑动进行滚屏的操作已经成为最基本的用户习惯，而且所需要的操作精准程度远远低于点击链接或按钮。   
c、更高的参与度：以上两点所带来的交互便捷性可以使用户将注意力更多的集中在内容而不是操作上，从而让他们更乐于沉浸在探索与浏览当中。    
缺点   
a、有限的用例：     
无限滚动的方式只适用于某些特定类型产品当中一部分特定类型的内容。      
例如，在电商网站当中，用户时常需要在商品列表与详情页面之间切换，这种情况下，传统的、带有页码导航的方式可以帮助用户更稳妥和准确的回到某个特定的列表页面当中。    
b、额外的复杂度：      
那些用来打造无限滚动的JS库虽然都自称很容易使用，但你总会需要在自己的产品中进行不同程度的定制化处理，以满足你们自己的需求;另外这些JS库在浏览器和设备兼容性等方面的表现也参差不齐，你必须做好充分的测试与调整工作。    
c、再见了，页脚：    
如果使用了比较典型的无限滚动加载模式，这就意味着你可以和页脚说拜拜了。    
最好考虑一下页脚对于你的网站，特别是用户的重要性;如果其中确实有比较重要的内容或链接，那么最好换一种更传统和稳妥的方式。    
千万不要耍弄你的用户，当他们一次次的浏览到页面底部，看到页脚，却因为自动加载的内容突然出现而无论如何都无法点击页脚中的链接时，他们会变的越发愤怒。     
d、集中在一页当中动态加载数据，与一页一页的输出相比，究竟那种方式更利于SEO，这是你必须考虑的问题。对于某些以类型网站来说，在这方面进行冒险是很不划算的。    
e、关于页面数量的印象：     
其实站在用户的角度来看，这一点并非负面;不过，如果对于你的网站来说，通过更多的内容页面展示更多的相关信息(包括广告)是很重要的策略，那么单页无限滚动的方式对你并不适用。    

- 流式布局（Fluid）       
固定布局和流式布局在网页设计中最常用的两种布局方式。固定布局能呈现网页的原始设计效果，流式布局则不受窗口宽度影响，流式布局使用百分比宽度来限定布局元素，这样可以根据客户端分辨率的大小来进行合理的显示。       
- 响应式布局          
响应式布局是Ethan Marcotte在2010年5月份提出的一个概念，简而言之，就是一个网站能够兼容多个终端——而不是为每个终端做一个特定的版本。这个概念是为解决移动互联网浏览而诞生的。
响应式布局可以为不同终端的用户提供更加舒适的界面和更好的用户体验，而且随着目前大屏幕移动设备的普及，用“大势所趋”来形容也不为过。随着越来越多的设计师采用这个技术，我们不仅看到很多的创新，还看到了一些成形的模式。   
优点   
a、面对不同分辨率设备灵活性强   
b、能够快捷解决多设备显示适应问题   
缺点   
a、兼容各种设备工作量大，效率低下      
b、代码累赘，会出现隐藏无用的元素，加载时间加长       
c、其实这是一种折中性质的设计解决方案，多方面因素影响而达不到最佳效果       
d、一定程度上改变了网站原有的布局结构，会出现用户混淆的情况            
   
圣杯布局已经非常完美，圣杯布局使用了相对定位，以后布局是有局限性的，而且宽度控制要改的地方也多。在淘宝UED（User Experience Design）探讨下，增加多一个div就可以不用相对布局了，只用到了浮动和负边距，这就是我们所说的双飞翼布局。 (2)、多栏布局 a、栏栅格系统：就是利用浮动实现的多栏布局，在bootstrap中用的非常多。 b、多列布局：栅格系统并没有真正实现分栏效果（如word中的分栏），CSS3为了满足这个要求增加了多列布局模块 (3)、弹性布局（Flexbox） CSS3引入了一种新的布局模式——Flexbox布局，即伸缩布局盒模型（Flexible Box），用来提供一个更加有效的方式制定、调整和分布一个容器里项目布局，即使它们的大小是未知或者动态的，这里简称为Flex。 Flexbox布局常用于设计比较复杂的页面，可以轻松的实现屏幕和浏览器窗口大小发生变化时保持元素的相对位置和大小不变，同时减少了依赖于浮动布局实现元素位置的定义以及重置元素的大小。 Flexbox布局在定义伸缩项目大小时伸缩容器会预留一些可用空间，让你可以调节伸缩项目的相对大小和位置。例如，你可以确保伸缩容器中的多余空间平均分配多个伸缩项目，当然，如果你的伸缩容器没有足够大的空间放置伸缩项目时，浏览器会根据一定的比例减少伸缩项目的大小，使其不溢出伸缩容器。 综合而言，Flexbox布局功能主要具有以下几点： a、屏幕和浏览器窗口大小发生改变也可以灵活调整布局； b、可以指定伸缩项目沿着主轴或侧轴按比例分配额外空间（伸缩容器额外空间），从而调整伸缩项目的大小； c、可以指定伸缩项目沿着主轴或侧轴将伸缩容器额外空间，分配到伸缩项目之前、之后或之间； d、可以指定如何将垂直于元素布局轴的额外空间分布到该元素的周围； e、可以控制元素在页面上的布局方向； f、可以按照不同于文档对象模型（DOM）所指定排序方式对屏幕上的元素重新排序。也就是说可以在浏览器渲染中不按照文档流先后顺序重排伸缩项目顺序。 (4)、瀑布流布局 瀑布流布局是流式布局的一种。是当下比较流行的一种网站页面布局，视觉表现为参差不齐的多栏布局，随着页面滚动条向下滚动，这种布局还会不断加载数据块并附加至当前尾部。最早采用此布局的网站是Pinterest，逐渐在国内流行开来。 优点 a、有效的降低了界面复杂度，节省了空间：我们不再需要臃肿复杂的页码导航链接或按钮了。 b、对触屏设备来说，交互方式更符合直觉：在移动应用的交互环境当中，通过向上滑动进行滚屏的操作已经成为最基本的用户习惯，而且所需要的操作精准程度远远低于点击链接或按钮。 c、更高的参与度：以上两点所带来的交互便捷性可以使用户将注意力更多的集中在内容而不是操作上，从而让他们更乐于沉浸在探索与浏览当中。 缺点 a、有限的用例： 无限滚动的方式只适用于某些特定类型产品当中一部分特定类型的内容。 例如，在电商网站当中，用户时常需要在商品列表与详情页面之间切换，这种情况下，传统的、带有页码导航的方式可以帮助用户更稳妥和准确的回到某个特定的列表页面当中。 b、额外的复杂度： 那些用来打造无限滚动的JS库虽然都自称很容易使用，但你总会需要在自己的产品中进行不同程度的定制化处理，以满足你们自己的需求;另外这些JS库在浏览器和设备兼容性等方面的表现也参差不齐，你必须做好充分的测试与调整工作。 c、再见了，页脚： 如果使用了比较典型的无限滚动加载模式，这就意味着你可以和页脚说拜拜了。 最好考虑一下页脚对于你的网站，特别是用户的重要性;如果其中确实有比较重要的内容或链接，那么最好换一种更传统和稳妥的方式。 千万不要耍弄你的用户，当他们一次次的浏览到页面底部，看到页脚，却因为自动加载的内容突然出现而无论如何都无法点击页脚中的链接时，他们会变的越发愤怒。 d、集中在一页当中动态加载数据，与一页一页的输出相比，究竟那种方式更利于SEO，这是你必须考虑的问题。对于某些以类型网站来说，在这方面进行冒险是很不划算的。 e、关于页面数量的印象： 其实站在用户的角度来看，这一点并非负面;不过，如果对于你的网站来说，通过更多的内容页面展示更多的相关信息(包括广告)是很重要的策略，那么单页无限滚动的方式对你并不适用。 (5)、流式布局（Fluid） 固定布局和流式布局在网页设计中最常用的两种布局方式。固定布局能呈现网页的原始设计效果，流式布局则不受窗口宽度影响，流式布局使用百分比宽度来限定布局元素，这样可以根据客户端分辨率的大小来进行合理的显示。 (6)、响应式布局 响应式布局是Ethan Marcotte在2010年5月份提出的一个概念，简而言之，就是一个网站能够兼容多个终端——而不是为每个终端做一个特定的版本。这个概念是为解决移动互联网浏览而诞生的。 响应式布局可以为不同终端的用户提供更加舒适的界面和更好的用户体验，而且随着目前大屏幕移动设备的普及，用“大势所趋”来形容也不为过。随着越来越多的设计师采用这个技术，我们不仅看到很多的创新，还看到了一些成形的模式。 优点 a、面对不同分辨率设备灵活性强 b、能够快捷解决多设备显示适应问题 缺点 a、兼容各种设备工作量大，效率低下 b、代码累赘，会出现隐藏无用的元素，加载时间加长 c、其实这是一种折中性质的设计解决方案，多方面因素影响而达不到最佳效果 d、一定程度上改变了网站原有的布局结构，会出现用户混淆的情况 

### 61.Canvas和SVG的区别

- SVG是一种使用XML来描述2D图形的**语言**，Canvas通过JS来绘制2D图形。
- SVG绘制的是矢量图，矢量图的特点是不随图形的放大缩小改变清晰度，不会出现锯齿形，而Canvas是逐像素渲染的，放大后可能出现锯齿形。
- SVG的每个图形都被视为对象，如果对象的属性变化，那么浏览器能够自动重现图形。Canvas一旦图形绘制完成，就不会受到关注。如果其位置发生变化，那么整个场景也需要重新绘制。
- Canvas能够以.png和.jpg格式保存结果图像。
- Canvas适合图像密集型的游戏，其中很多对象会被频繁重绘，SVG适合带有大型渲染区域的应用程序（比如谷歌地图）。

# 第三部分：HTTP协议
### 1.cache-control 

网页的缓存是由HTTP消息头中的“Cache-control”来控制的，常见的取值有private、no-cache、max-age、must-revalidate等，默认为private。

Expires 头部字段提供一个日期和时间，响应在该日期和时间后被认为失效。允许客户端在这个时间之前不去检查（发请求），等同max-age的效果。但是如果同时存在，则被Cache-Control的max-age覆盖。

Expires = "Expires" ":" HTTP-date    
例如：  
Expires: Thu, 01 Dec 1994 16:00:00 GMT （必须是GMT格式）     
如果把它设置为-1，则表示立即过期  

Expires 和 max-age 都可以用来指定文档的过期时间，但是二者有一些细微差别   
1. Expires在HTTP/1.0中已经定义，Cache-Control:max-age在HTTP/1.1中才有定义，为了向下兼容，仅使用max-age不够    
2. Expires指定一个绝对的过期时间(GMT格式),这么做会导致至少2个问题：    
    	2.1 客户端和服务器时间不同步导致Expires的配置出现问题。    
   		2.2 很容易在配置后忘记具体的过期时间，导致过期来临出现浪涌现象    
3. max-age 指定的是从文档被访问后的存活时间，这个时间是个相对值(比如:3600s)，相对的是文档第一次被请求时服务器记录的Request_time(请求时间)      
4. Expires 指定的时间可以是相对文件的最后访问时间(Atime)或者修改时间(MTime)，而max-age相对对的是文档的请求时间(Atime)    
5. 如果值为 no-cache,那么每次都会访问服务器。如果值为max-age，则在过期之前不会重复访问服务器。 

### 2.常见的HTTP状态码
>2XX:表示成功请求    
>3XX:需要重定向，浏览器直接跳转   
>4XX:客户端请求错误，如404  
>5XX:服务器端错误


- **100 Continue** 继续，一般在发送post请求时，已发送了http header之后服务端将返回此信息，表示确认，之后发送具体参数信息
- **200 OK** 正常返回信息
- **201 Created** 请求成功并且服务器创建了新的资源
- **202 Accepted** 服务器已接受请求，但尚未处理
- **301 Moved Permanently** 请求的网页已永久移动到新位置。
- **302 Found** 临时性重定向。
- **303 See Other** 临时性重定向，且总是使用 GET 请求新的 URI。
- **304 Not Modified** 自从上次请求后，请求的网页未修改过。
- **400 Bad Request** 服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。
- **401 Unauthorized** 请求未授权。
- **403 Forbidden** 禁止访问。
- **404 Not Found** 找不到如何与 URI 相匹配的资源。
- **500 Internal Server Error** 最常见的服务器端错误。
- **503 Service Unavailable** 服务器端暂时无法处理请求（可能是过载或维护）。 

### 3.http状态码有那些？分别代表是什么意思？ 

1. 100-199 用于指定客户端应响应的某些动作
2. 200-299 用于表示请求成功
3. 300-399 用于已经移动的文件并且常被包含在定位头信息中指定新的地址信息
4. 400-499 用于指出客户端的错误

	400：语义有误，当前请求无法被服务器理解  
	401：当前请求需要用户验证  
	403：服务器已经理解请求，但是拒绝执行它
5. 500-599 用于指出服务器错误

	503：服务不可用

### 4.为什么HTTPS比HTTP安全？
HTTP协议通常承载于TCP协议之上，在HTTP和TCP之间添加一个安全协议层（SSL或TSL），这个时候，就成了我们常说的HTTPS。
   
因为网络请求需要中间有很多的服务器路由器的转发。中间的节点都可能篡改信息，而如果使用HTTPS，密钥在你和终点站才有。https之所以比http安全，是因为他利用ssl/tls协议传输。它包含证书，卸载，流量转发，负载均衡，页面适配，浏览器适配，refer传递等。保障了传输过程的安全性。

### 5.GET和POST的区别，何时使用POST？ 
- GET：一般用于信息获取，使用URL传递参数，对所发送信息的数量也有限制，一般在2000个字符  
- POST：一般用于修改服务器上的资源，对所发送的信息没有限制。  
- GET方式需要使用Request.QueryString来取得变量的值，而POST方式通过Request.Form来获取变量的值，  
	- 也就是说Get是通过地址栏来传值，而Post是通过提交表单来传值。   
	- 然而，在以下情况中，请使用 POST 请求：  
	- 无法使用缓存文件（更新服务器上的文件或数据库）  
	- 向服务器发送大量数据（POST 没有数据量限制）   可靠 

### 6. HTTP无状态协议指的是什么？
HTTP协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。


# 第四部分：其他
### 1.谈谈你对模块化开发的理解？
所谓的模块化开发就是封装细节，提供使用接口，彼此之间互不影响，每个模块都是实现某一特定的功能。模块化开发的基础就是函数。
### 2.什么是响应式开发？
- 概念：顾名思义，同一个网站兼容不同的大小的设备。如PC端、移动端（平板、横屏、竖排）的显示风格。   
- 需要用到的技术：
	- Media Query（媒体查询）
	- 使用em或rem做尺寸单位
	- 禁止页面缩放
	- 屏幕尺寸响应   
	
  来源：http://blog.csdn.net/lxcao/article/details/52853093

### 3.说说最近最流行的一些东西吧？常去的哪些网站？ 

最流行的一些东西：

1. Node.js
2. Mongodb
3. npm
4. MVVM
5. MEAN
6. three.js
7. React

常去的网站：

1. 牛客网
2. Github
3. CSDN

### 4.页面渲染原理是什么？
1. 渲染引擎开始解析html，根据标签构建DOM节点
1. 根据css样式构建渲染树，包括元素的大小、颜色，隐藏的元素不会被构建到该树中。
1. 根据css样式构建布局树，主要是确定元素要显示的位置。
1. 根据前面的信息，绘制渲染树。

### 5.浏览器的内核分别是什么？
IE浏览器的内核Trident、Mozilla的Gecko、Chrome的Blink（WebKit的分支）、Opera内核原为Presto，现为Blink；

### 6.从浏览器地址栏输入url到显示页面的步骤(以HTTP为例)
1.  查找浏览器缓存
1.  DNS解析、查找该域名对应的IP地址、重定向（301）、发出第二个GET请求
1.  进行HTTP协议会话
1.  客户端发送报头(请求报头)
1.  服务器回馈报头(响应报头)
1.  html文档开始下载
1.  文档树建立，根据标记请求所需指定MIME类型的文件
1.  文件显示

  浏览器这边做的工作大致分为以下几步：

- 加载：根据请求的URL进行域名解析，向服务器发起请求，接收文件（HTML、JS、CSS、图象等）。
- 解析：对加载到的资源（HTML、JS、CSS等）进行语法解析，建议相应的内部数据结构（比如HTML的DOM树，JS的（对象）属性表，CSS的样式规则等等）

### 7.平时如何管理你的项目？ 

1. 先期团队必须确定好全局样式（globe.css），编码模式(utf-8) 等
2. 编写习惯必须一致（例如都是采用继承式的写法，单样式都写成一行）
3. 标注样式编写人，各模块都及时标注（标注关键样式调用的地方）
4. 页面进行标注（例如 页面 模块 开始和结束）
5. CSS 跟 HTML 分文件夹并行存放，命名都得统一（例如 style.css）
6. JS 分文件夹存放 命名以该 JS 功能为准的英文翻译
7. 图片采用整合的 images.png png8 格式文件使用 尽量整合在一起使用方便将来的管理

### 8.对前端工程师这个职位是怎么样理解的？它的前景会怎么样？    

前端是最贴近用户的程序员，比后端、数据库、产品经理、运营、安全都近。

1. 实现界面交互
2. 提升用户体验
3. 有了Node.js，前端可以实现服务端的一些事情

前景：

1. 前端是最贴近用户的程序员，前端的能力就是能让产品从 90分进化到 100 分，甚至更好
2. 参与项目，快速高质量完成实现效果图，精确到1px；
3. 与团队成员，UI设计，产品经理的沟通；
4. 做好的页面结构，页面重构和用户体验；
5. 处理hack，兼容、写出优美的代码格式；
6. 针对服务器的优化、拥抱最新前端技术。



### 9.一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？

分为4个步骤：

1. 当发送一个 URL 请求时，不管这个 URL 是 Web 页面的 URL 还是 Web 页面上每个资源的 URL，浏览器都会开启一个线程来处理这个请求，同时在远程 DNS 服务器上启动一个 DNS 查询。这能使浏览器获得请求对应的 IP 地址。
2. 浏览器与远程 Web 服务器通过 TCP 三次握手协商来建立一个 TCP/IP 连接。该握手包括一个同步报文，一个同步-应答报文和一个应答报文，这三个报文在 浏览器和服务器之间传递。该握手首先由客户端尝试建立起通信，而后服务器应答并接受客户端的请求，最后由客户端发出该请求已经被接受的报文。
3. 一旦 TCP/IP 连接建立，浏览器会通过该连接向远程服务器发送 HTTP 的 GET 请求。远程服务器找到资源并使用 HTTP 响应返回该资源，值为 200 的 HTTP 响应状态表示一个正确的响应。
4. 此时，Web 服务器提供资源服务，客户端开始下载资源。

请求返回后，便进入了我们关注的前端模块
简单来说，浏览器会解析 HTML 生成 DOM Tree，其次会根据 CSS 生成 CSS Rule Tree，而 javascript 又可以根据 DOM API 操作 DOM

### 10.bootstrap原理
流式栅格系统和媒体查询的结合。   
网格系统的实现原理非常简单，仅仅是通过定义容器大小，平分12份(也有平分成24份或32份，但12份是最常见的)，再调整内外边距，最后结合媒体查询，就制作出了强大的响应式网格系统。Bootstrap框架中的网格系统就是将容器平分成12份。   

- 数据行(.row)必须包含在容器（.container）中，以便为其赋予合适的对齐方式和内距(padding)。
- 在行(.row)中可以添加列(.column)，但列数之和不能超过平分的总列数，比如12。
- 具体内容应当放置在列容器（column）之内，而且只有列（column）才可以作为行容器(.row)的直接子元素。

兼容性：基本上是IE8+以上，
解决IE7-IE8支持度差的问题：用注释的方法引入bootstrap插件  
 
- respond.js：Respond.js 是一个快速、轻量的 polyfill,用于为 IE6-8 以及其它不支持 CSS3 Media Queries 的浏览器提供媒体查询的 min-width 和 max-width 特性。
- html5:让IE(包括IE6)支持HTML5元素
- css3-mediaqueries.js:解决低版本IE不兼容CSS3的问题。

### 11.使用CSS预处理器吗？喜欢哪个？
SASS

### 12.AMD和CMD的规范区别？

1. 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同）。CMD 推崇 as lazy as possible.2. CMD 推崇依赖就近，AMD 推崇依赖前置。    
看代码：

		// CMD   
		define(function(require, exports, module){   
			 	var a = require('./a')  
			 	a.doSomething()   
			 	// 此处略去 100 行   
		     	var b = require('./b') // 依赖可以就近书写  
			 	b.doSomething()   
			 	// ... 
		})
		
		// AMD 默认推荐的是
		define(['./a', './b'], function(a, b) {  // 依赖必须一开始就写好    	
				a.doSomething()    // 此处略去 100 行    
			 	b.doSomething()    
			 	...
		})      
虽然 AMD 也支持 CMD 的写法，同时还支持将 require 作为依赖项传递，但 RequireJS 的作者默认是最喜欢上面的写法，也是官方文档里默认的模块定义写法。3. AMD 的 API 默认是一个当多个用，CMD 的 API 严格区分，推崇职责单一。比如 AMD 里，require 分全局 require 和局部 require，都叫 require。CMD 里，没有全局 require，而是根据模块系统的完备性，提供 seajs.use 来实现模块系统的加载启动。CMD 里，每个 API 都简单纯粹。

### 13.JQuery的源码看过吗？能不能简单说一下它的实现原理？
选择器，链式调用。
### 14.jQuery和jQuery UI有啥区别？
- jQuery是一个js库，主要提供的功能是选择器，属性修改和事件绑定等等。
- jQuery UI则是在jQuery的基础上，利用jQuery的扩展性，设计的插件。提供了一些常用的界面元素，诸如对话框、拖动行为、改变大小行为等等。

### 15.node.js的优点和缺点？适用场景？

优点：

1. 因为Node是基于事件驱动和无阻塞的，所以非常适合处理并发请求，因此构建在Node上的代理服务器相比其他技术实现（如Ruby）的服务器表现要好得多。
2. 与Node代理服务器交互的客户端代码是由javascript语言编写的，因此客户端和服务器端都用同一种语言编写，这是非常美妙的事情。

缺点： 

1. Node是一个相对新的开源项目，所以不太稳定，它总是一直在变。
2. 缺少足够多的第三方库支持。看起来，就像是Ruby/Rails当年的样子（第三方库现在已经很丰富了，所以这个缺点可以说不存在了）。

适用场景:   

1. 高并发
2. 聊天
3. 实时消息推送   
 
### 16.你了解到的WEB攻击技术？

1. 利用Web服务器的漏洞进行攻击，如CGI缓冲区溢出，目录遍历漏洞利用等攻击；
1. 利用网页自身的安全漏洞进行攻击，如SQL注入，跨站脚本攻击等
### 17.Web前端密码加密是否有意义？(既然前端代码都是直接可以看到的，那加密是否还有意义？)
加密有意义。在 HTTP 协议下，数据是明文传输，并且在非加密的传输过程中，黑客可更改数据或插入恶意的代码等。在数据发送前将数据进行哈希或使用公钥加密后，如果数据被人获取，拿到的则不再是明文。

### 18.谈谈对前端模块化开发的认识？
>AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。
CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。
AMD 是提前执行，CMD 是延迟执行。

AMD推荐的风格通过返回一个对象做为模块对象，CommonJS的风格通过对module.exports或exports的属性赋值来达到暴露模块对象的目的。

CMD模块方式

    define(function(require, exports, module) {
      // 模块代码
    });

### 19. 99%的网站都需要被重构是那本书上写的？
《网站重构：应用Web标准进行设计（第2版）》&nbsp;泽尔德曼著
### 20.线程与进程的区别
- 一个程序至少有一个进程,一个进程至少有一个线程.   
- 线程的划分尺度小于进程，使得多线程程序的并发性高。   
- 另外，进程在执行过程中拥有独立的内存单元，而多个线程共享内存，从而极大地提高了程序的运行效率。   
- 线程在执行过程中与进程还是有区别的。每个独立的线程有一个程序运行的入口、顺序执行序列和程序的出口。但是线程不能够独立执行，必须依存在应用程序中，由应用程序提供多个线程执行控制。     
- 从逻辑角度来看，多线程的意义在于一个应用程序中，有多个执行部分可以同时执行。但操作系统并没有将多个线程看做多个独立的应用，来实现进程的调度和管理以及资源分配。这就是进程和线程的重要区别。 
### 21.你怎么看待Web App 、hybrid App、Native App？
**Web App**  
指采用Html5语言写出的App，不需要下载安装。类似于现在所说的轻应用。生存在浏览器中的应用，基本上可以说是触屏版的网页应用。比如学者网的手机web。

1.优点:

- 开发成本低，
- 更新快，
- 更新无需通知用户，不需要手动升级,
- 能够跨多个平台和终端。  

2.缺点

- 临时性的入口
- 无法获取系统级别的通知，提醒，动效等等
- 用户留存率低
- 设计受限制诸多
- 体验较差

**Hybrid App**  

- Hybrid APP指的是半原生半Web的混合类App。需要下载安装，看上去类似Native App，但只有很少的UI Web View，访问的内容是 Web 。   
- 例如Store里的新闻类APP，视频类APP普遍采取的是Native的框架，Web的内容。   
- Hybrid App 极力去打造类似于Native App 的体验，但仍受限于技术，网速，等等很多因素。尚不完美。

**Native APP**   
指的是原生程序，一般依托于操作系统，有很强的交互，是一个完整的App，可拓展性强。需要用户下载安装使用。

1.优点：

- 打造完美的用户体验  
- 性能稳定  
- 操作速度快，上手流畅  
- 访问本地资源（通讯录，相册）  
- 设计出色的动效，转场  
- 拥有系统级别的贴心通知或提醒  
- 用户留存率高

2.缺点：

- 分发成本高（不同平台有不同的开发语言和界面适配）   
- 维护成本高（例如一款App已更新至V5版本，但仍有用户在使用V2， V3， V4版本，需要更多的开发人员维护之前的版本）  
- 更新缓慢，根据不同平台，提交–审核–上线 等等不同的流程，需要经过的流程较复杂
### 22.如何管理前端团队?
先期团队必须确定好全局样式（globe.css），编码模式(utf-8) 等；

1. 编写习惯必须一致（例如都是采用继承式的写法，单样式都写成一行）；
1. 标注样式编写人，各模块都及时标注（标注关键样式调用的地方）；
1. 页面进行标注（例如 页面 模块 开始和结束）；
1. CSS跟HTML 分文件夹并行存放，命名都得统一（例如style.css）；
1. JS 分文件夹存放 命名以该JS功能为准的英文翻译。
图片采用整合的 images.png png8 格式文件使用 尽量整合在一起使用方便将来的管理

我们可以通过cookie和session来管理http的状态。

### 23.sass是什么？它有哪些好处和坏处？
好处：变量、mixin、函数、规则嵌套、颜色处理等，       
坏处：css的文件体积和复杂度不可控、调试难度增加、成本等。  

### 24.MVC

MVC模式（Model–view–controller）是软件工程中的一种软件架构模式，把软件系统分为三个基本部分：模型（Model）、视图（View）和控制器（Controller）。   

 MVC模式的目的是实现一种动态的程式设计，使后续对程序的修改和扩展简化，并且使程序某一部分的重复利用成为可能。除此之外，此模式通过对复杂度的简化，使程序结构更加直观。软件系统通过对自身基本部分分离的同时也赋予了各个基本部分应有的功能。专业人员可以通过自身的专长分组：   

- 控制器（Controller）- 负责转发请求，对请求进行处理。  
- 视图（View） - 界面设计人员进行图形界面设计。   
- 模型（Model） - 程序员编写程序应有的功能（实现算法等等）、数据库专家进行数据管理和数据库设计(可以实现具体的功能)。

### 24.git常见命令
阮一峰老师的博客是见过的最通俗易懂的git教程。  
附上：[常见命令清单——阮一峰](http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)

# 第五部分：待处理
### 1.前后端协同开发
### 2.什么是WebGL,它有什么优点?
### 3.说说前端如何解决异步回调地狱？
### 4.你能讲讲304缓存的原理吗?
### 5.你用JS实现过一些基本的数据结构吗？
### 6.对react,vue，或者angular有过接触么？他们之前的差异你能简单说下？
### 7.Git知道branch, diff, merge么?
### 8.页面重构怎么操作？
### 9.减少网站重构和回流？
