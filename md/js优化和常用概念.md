## JS中判断null、undefined与NaN的方法

### 1.判断undefined:

	var tmp = undefined; 
	if (typeof(tmp) == "undefined"){ 
	alert("undefined"); 
	}
说明：typeof 返回的是字符串，有六种可能："number"、"string"、"boolean"、"object"、"function"、"undefined" 

### 2.判断null:

	var tmp = null; 
	if (!tmp && typeof(tmp)!="undefined" && tmp!=0){ 
	alert("null"); 
	}
### 3.判断NaN:
	
	var tmp = 0/0; 
	if(isNaN(tmp)){ 
	alert("NaN"); 
	}
说明：如果把 NaN 与任何值（包括其自身）相比得到的结果均是 false，所以要判断某个值是否是 NaN，不能使用 == 或 === 运算符。 

提示：isNaN() 函数通常用于检测 parseFloat() 和 parseInt() 的结果，以判断它们表示的是否是合法的数字。

当然也可以用 isNaN() 函数来检测算数错误，比如用 0 作除数的情况。 


### 手写jsonp

	(function (window,document) {
	    "use strict";
	    var jsonp = function (url,data,callback) {
	
	        // 1.将传入的data数据转化为url字符串形式
	        // {id:1,name:'zhangsan'} => id=1&name=zhangsan

	        var dataString = url.indexof('?') == -1? '?': '&';
	        for(var key in data){
	            dataString += key + '=' + data[key] + '&';
	        };
	
	        // 2 处理url中的回调函数
	        // cbFuncName回调函数的名字 ：my_json_cb_名字的前缀 + 随机数（把小数点去掉）
	        var cbFuncName = 'my_json_cb_' + Math.random().toString().replace('.','');
	        dataString += 'callback=' + cbFuncName;
	
	        // 3.创建一个script标签并插入到页面中
	        var scriptEle = document.createElement('script');
	        scriptEle.src = url + dataString;
	
	        // 4.挂载回调函数
	        window[cbFuncName] = function (data) {
	            callback(data);
	            // 处理完回调函数的数据之后，删除jsonp的script标签
	            document.body.removeChild(scriptEle);
	        }
	
	        // 5.append到页面中
	        document.body.appendChild(scriptEle);
	    }
	
	    // 因为jsonp是一个私有函数外部不能调用，所有jsonp函数作文window对象的一个方法，供外部调用
	    window.$jsonp = jsonp;
	
	})(window,document)

## 手写ajax

#### 创建一个异步调用对象

	function createXMLHTTPRequest() {     
	                 //1.创建XMLHttpRequest对象     
	                 //这是XMLHttpReuquest对象无部使用中最复杂的一步     
	                 //需要针对IE和其他类型的浏览器建立这个对象的不同方式写不同的代码  
   
	                 var xmlHttpRequest;  
	                 if (window.XMLHttpRequest) {     
	                     //针对FireFox，Mozillar，Opera，Safari，IE7，IE8     
	                    xmlHttpRequest = new XMLHttpRequest();     
	                     //针对某些特定版本的mozillar浏览器的BUG进行修正     
	                     if (xmlHttpRequest.overrideMimeType) {     
	                         xmlHttpRequest.overrideMimeType("text/xml");     
	                     }     
	                 } else if (window.ActiveXObject) {     
	                     //针对IE6，IE5.5，IE5     
	                     //两个可以用于创建XMLHTTPRequest对象的控件名称，保存在一个js的数组中     
	                     //排在前面的版本较新   
  
	                     var activexName = [ "MSXML2.XMLHTTP", "Microsoft.XMLHTTP" ];     
	                     for ( var i = 0; i < activexName.length; i++) {     
	                         try {     
	                             //取出一个控件名进行创建，如果创建成功就终止循环     
	                             //如果创建失败，回抛出异常，然后可以继续循环，继续尝试创建     
	                            xmlHttpRequest = new ActiveXObject(activexName[i]);   
	                            if(xmlHttpRequest){  
	                                break;  
	                            }  
	                         } catch (e) {     
	                         }     
	                     }     
	                 }     
	                 return xmlHttpRequest;  
	             }

###get代码

	function get(){  
	    var req = createXMLHTTPRequest();  
	    if(req){  
	        req.open("GET", "http://test.com/?keywords=手机", true);  
	        req.onreadystatechange = function(){  
	            if(req.readyState == 4){  
	                if(req.status == 200){  
	                    alert("success");  
	                }else{  
	                    alert("error");  
	                }  
	            }  
	        }  
	        req.send(null);  
	    }  
	}

###POST代码

	function post(){  
	    var req = createXMLHTTPRequest();  
	    if(req){  
	        req.open("POST", "http://test.com/", true);  
	        req.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=gbk;");     
	        req.send("keywords=手机");  
	        req.onreadystatechange = function(){  
	            if(req.readyState == 4){  
	                if(req.status == 200){  
	                    alert("success");  
	                }else{  
	                    alert("error");  
	                }  
	            }  
	        }  
	    }  
	}
### js的this   

JavaScript：this是什么？

**定义：this是包含它的函数作为方法被调用时所属的对象。**
> 说明：这句话有点咬嘴，但一个多余的字也没有，定义非常准确，我们可以分3部分来理解它！
1、包含它的函数。   
2、作为方法被调用时。  
3、所属的对象。  
看例子：

	function to_green(){
	this.style.color="green";
	}
	to_green();


> 上面函数中的this指的是谁？
分析：包含this的函数是，to_green
该函数作为方法被调用了
该函数所属的对象是。。？我们知道默认情况下，都是window对象。
OK，this就是指的window对象了，to_green中执行语句也就变为，window.style.color="green"
这让window很上火，因为它并没有style这么个属性，所以该语句也就没什么作用。
我们在改一下。

	window.load=function(){
	var example=document.getElementById("example");
	example.onclick=to_green;
	}
这时this又是什么呢？

我们知道通过赋值操作，example对象的onclick得到to_green的方法，那么包含this的函数就是onclick

那么this就是example引用的html对象

**this的环境可以随着函数被赋值给不同的对象而改变！**

下面是完整的例子：

	<script type="text/javascript">
	function to_green(){
	this.style.color="green";
	}
	function init_page(){
	var example=document.getElementById("example");
	example.onclick=to_green;
	}
	window.onload=init_page;
	</script>
	<a href="#" id="example">点击变绿</a>

**this的指向是由它所在函数调用的上下文决定的，而不是由它所在函数定义的上下文决定的。**

##作用域

什么是块级作用域呢？

任何一对花括号（｛和｝）中的语句集都属于一个块，在这之中定义的所有变量在代码块外都是不可见的，我们称之为块级作用域。

大多数类C语言都拥有块级作用域，JS却没有

请看下文demo:

	//C语言
	#include <stdio.h>
	void main()
	{
		int i=2;
		i--;
		if(i)
			{
			int j=3;
			}
		printf("%d/n",j);
	}
运行这段代码，会出现“use an undefined variable:j”的错误。可以看到，C语言拥有块级作用域，因为j是在if的语句块中定义的，因此，它在块外是无法访问的。
而JS是如何表现的呢，再看另一个demo:

	functin test(){
		for(var i=0;i<3;i++){
		}
		alert(i);
	}
	test();

运行这段代码，弹出"3"，可见，在块外，块中定义的变量i仍然是可以访问的。

也就是说，JS并不支持块级作用域，它只支持函数作用域，而且在一个函数中的任何位置定义的变量在该函数中的任何地方都是可见的。

那么我们该如何使JS拥有块级作用域呢？是否还记得，**在一个函数中定义的变量，当这个函数调用完后，变量会被销毁**，我们是否可以用这个特性来模拟出JS的块级作用域呢？

看下面这个DEMO：

	function test(){
	(function (){
	for(var i=0;i<4;i++){
	}
	})();
	alert(i);
	}
	test();
这时候再次运行，会弹出"i"未定义的错误， 我们把for语句块放到了一个闭包之中，然后调用这个函数，当函数调用完毕，变量i自动销毁，因此，我们在块外便无法访问了。

在JS中，为了防止命名冲突，我们应该尽量避免使用全局变量和全局函数。那么，该如何避免呢？正如上文demo所示，我们可以把要定义的所有内容放入到一个
	
	(function (){
	//内容
	})();

之中，这时候，我们是不是相当于给它们的外层添加了一个函数作用域呢？该作用域之外的程序是无法访问它们的。


## js闭包
	　function f1(){
	　　　　n=999;
	　　　　function f2(){
	　　　　　　alert(n);
	　　　　}
	　　　　return f2;
	　　}
	　　var result=f1();
	　　result(); // 999


当内部函数 在定义它的作用域 的外部 被引用时,就创建了该内部函数的闭包 ,如果内部函数引用了位于外部函数的变量,当外部函数调用完毕后,这些变量在内存不会被 释放,因为闭包需要它们. 


### 【事件的代理/委托】的原理以及优缺点，这是靠事件的冒泡机制来实现的，优点是

1、可以大量节省内存占用，减少事件注册，比如在table上代理所有td的click事件就非常棒

2、可以实现当新增子对象时无需再次对其绑定事件，对于动态内容部分尤为合适


### 事件冒泡与事件捕获
> 
如果父div有click事件, div里的span也有click事件, 默认你点span的时候父div的click事件也会被激发, 如果你不想激发父div的click事件, 就在span的click事件中stopPropagation()
事件冒泡与事件捕获:   

事件冒泡是一个从后代节点向祖先节点冒泡的过程，这个可以理解吧。   
**事件捕获就正好相反，是一个从祖先节点到后点节点的过程。**

IE只支持冒泡，不支持捕获。

#### 事件的触发有三个阶段
1. document 往事件触发地点，捕获前进，遇到相同注册事件立即触发执行(事件捕获)

2. 到达事件位置，触发事件（如果该处既注册了冒泡事件，也注册了捕获事件，按照注册顺序执行）(处于目标阶段)

3. 事件触发地点往 document 方向，冒泡前进，遇到相同注册事件立即触发(事件冒泡阶段)

我们在注册事件的时候，通常使用的是 捕获 或者 冒泡 的 一种：
	
	obj.addEventListener("click", func, true); // 捕获方式
	
	obj.addEventListener("click", func, false); // 冒泡方式

绑定事件方法的第三个参数，就是控制事件触发顺序是否为事件捕获。true,事件捕获；false,事件冒泡。

默认false,即事件冒泡。

Jquery的e.stopPropagation会阻止冒泡，意思就是到我为止，我的爹和祖宗的事件就不要触发了。

1. event.stopPropagation()方法

这是阻止事件的冒泡方法，不让事件向documen上蔓延，但是默认事件任然会执行，当你掉用这个方法的时候，如果点击一个连接，这个连接仍然会被打开，

2. event.preventDefault()方法

这是阻止默认事件的方法，调用此方法是，连接不会被打开，但是会发生冒泡，冒泡会传递到上一层的父元素；

3. return false  ；

这个方法比较暴力，他会同事阻止事件冒泡也会阻止默认事件；写上此代码，连接不会被打开，事件也不会传递到上一层的父元素；可以理解为return false就等于同时调用了event.stopPropagation()和event.preventDefault()

#### IIFE: Immediately Invoked Function Expression
意为立即调用的函数表达式,也就是说,声明函数的同时立即调用这个函数。

**所以说匿名函数和闭包之间并没有什么关系，只不过很多时候在用到匿名函数解决问题的时候恰好形成了一个闭包，就导致很多人分不清楚匿名函数和闭包的关系**

## HTML结构语义化

> 1 开发的过程中，一定要注意了，尽量使用官方的有语义的标签，不要再使用一堆无意义的标签去堆你的结构。怎么知道，自己的页面结构是否语义化，那就要看你的HTML结构，在去掉CSS样式表之后，是否，依然能很好的呈现内容的结构，代码结构。也就是说，脱掉css的外衣，依然头是头，脚是脚。赤裸裸的完整的一篇文档。这也就是，语义化之后文档的效果。
> 2，其次、其实语义化，也无非就是自己在使用标签的时候多使用有英文语义的标签

### 三.为什么要语义化

* 为了在没有css代码时，也能呈现很好的内容结构，代码结构，以至于达到没有编程基础的非技术人员，也能看懂一二。（其实，就是为了不穿CSS外衣，裸奔依然好看）。
* 提高用户体验，比如：title，alt用于解释名词和图片信息。
* 利于SEO，语义化能和搜索引擎建立良好的联系，有利于爬虫抓取更多的有效信息。爬虫依赖于标签来确定上下文和各个关键字的权重。
* 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以语义的方式来渲染网页。
* 便于团队开发和维护，语义化更具可读性，如果遵循W3C标准的团队都遵循这个标准，可以减少差异化，利于规范化。

### 四.基于此，在写页面结构时，应该注意什么

* 尽可能少的使用没有语义的div和span元素。
* 在对语义要求不明显时，技能使用div也能使用p,那就使用p，以为p默认有上下边距，可以兼容特殊终端。
* 不要使用纯样式标签，如：b、font、u等，改用css设置。
* 需要强调的文本，可以包含在strong或者em标签中（浏览器预设样式，能用CSS指定就不用他们），strong默认样式是加粗（不要用b，因为没语义），em是斜体（不用i同b）；
* 使用表格时，标题要用caption，表头用thead，主体部分用tbody包围，尾部用tfoot包围。表头和一般单元格要区分开，表头标题用th，内容单元格用td；

## BFC

那么 BFC 是什么呢？

BFC 即 Block Formatting Contexts (块级格式化上下文)，它属于上述定位方案的普通流。

具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的一些特性。

通俗一点来讲，可以把 BFC 理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。

### 触发 BFC

只要元素满足下面任一条件即可触发 BFC 特性：

* body 根元素
* 浮动元素：float 除 none 以外的值
* 绝对定位元素：position (absolute、fixed)
* display 为 inline-block、table-cells、flex
* overflow 除了 visible 以外的值 (hidden、auto、scroll)

### BFC 特性及应用
1 同一个 BFC 下外边距会发生折叠

	<head>
	div{
	    width: 100px;
	    height: 100px;
	    background: lightblue;
	    margin: 100px;
	}
	</head>
	<body>
	    <div></div>
	    <div></div>
	</body>
	
如果想要避免外边距的重叠，可以将其放在不同的 BFC 容器中。

	div class="container">
	    <p></p>
	</div>
	<div class="container">
	    <p></p>
	</div>
	.container {
	    overflow: hidden;
	}
	p {
	    width: 100px;
	    height: 100px;
	    background: lightblue;
	    margin: 100px;
	}
2 BFC 可以包含浮动的元素（清除浮动）

	<div style="border: 1px solid #000;">
	    <div style="width: 100px;height: 100px;background: #eee;float: left;"></div>
	</div>

> 由于容器内元素浮动，脱离了文档流，所以容器只剩下 2px 的边距高度。如果使触发容器的 BFC，那么容器将会包裹着浮动元素。

	<div style="border: 1px solid #000;overflow: hidden">
	    <div style="width: 100px;height: 100px;background: #eee;float: left;"></div>
	</div>

3 BFC 可以阻止元素被浮动元素覆盖

先来看一个文字环绕效果：

	<div style="height: 100px;width: 100px;float: left;background: lightblue">我是一个左浮动的元素</div>
	<div style="width: 200px; height: 200px;background: #eee">我是一个没有设置浮动, 
	也没有触发 BFC 元素, width: 200px; height:200px; background: #eee;</div>
	
> 这时候其实第二个元素有部分被浮动元素所覆盖，(但是文本信息不会被浮动元素所覆盖) 如果想避免元素被覆盖，可触第二个元素的 BFC 特性，在第二个元素中加入 overflow: hidden，就会变成：


<div style="height: 100px;width: 100px;float: left;background: lightblue">我是一个左浮动的元素</div>
<div style="width: 200px; height: 200px;background: #eee;overflow:hidden;">我是一个设置浮动, 
也没有触发 BFC 元素, width: 200px; height:200px; background: #eee;overflow:hidden;</div>



这个方法可以用来实现两列自适应布局，效果不错，这时候左边的宽度固定，右边的内容自适应宽度(去掉上面右边内容的宽度)。

## 单行文本截断 text-overflow

	div {
	  white-space: nowrap;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
## 一些基础..
1. html5基础，理解其语义化和新增标签、API的用途。
2. css基础，理解盒模型以及box-sizing属性的使用场景，理解BFC、文档流、负边距等概念，熟悉各种布局方式和常见css3新属性。
3. js基础，es5和es6的主要特性都要掌握。这部分是大部分公司最看重的部分之一。
4. 网络基础，计算机网络课程的知识不能丢，http是重点。
5. 算法基础，不说让你整个红黑树、动态规划什么的，基本的各种排序、栈队列树(函数调用栈、事件队列、DOM 树)的基本实现要了然于胸。

## 何为抽象

程序语言所用抽象的功能：

提取事物的共性，共同的属性，共同的行为。抽象描述了对象（也就是模拟现实的物体）的最基本的特征，抽象提供了一个对象的轮廓，是外部看到的视图。


## JS的6种继承方式

既然要实现继承，那么首先我们得有一个父类，代码如下：
	
	// 定义一个动物类
	function Animal (name) {
	  // 属性
	  this.name = name || 'Animal';
	  // 实例方法
	  this.sleep = function(){
	    console.log(this.name + '正在睡觉！');
	  }
	}
	// 原型方法
	Animal.prototype.eat = function(food) {
	  console.log(this.name + '正在吃：' + food);
	};
### 1、原型链继承
核心： 将父类的实例作为子类的原型

	function Cat(){ 
	}
	Cat.prototype = new Animal();
	Cat.prototype.name = 'cat';
	
	//　Test Code
	var cat = new Cat();
	console.log(cat.name);
	console.log(cat.eat('fish'));
	console.log(cat.sleep());
	console.log(cat instanceof Animal); //true 
	console.log(cat instanceof Cat); //true
特点：

非常纯粹的继承关系，实例是子类的实例，也是父类的实例
父类新增原型方法/原型属性，子类都能访问到
简单，易于实现

缺点：




- 要想为子类新增属性和方法，必须要在new Animal()这样的语句之后执行，不能放到构造器中
- 无法实现多继承
- 来自原型对象的引用属性是所有实例共享的（详细请看附录代码： 示例1）
- 创建子类实例时，无法向父类构造函数传参
- 推荐指数：★★（3、4两大致命缺陷）

2017-8-17 10:21:43补充：感谢 MMHS 指出。

缺点1中描述有误：可以在Cat构造函数中，为Cat实例增加实例属性。

如果要新增原型属性和方法，则必须放在new Animal()这样的语句之后执行。

### 2、构造函数继承
核心：使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类（没用到原型）

	function Cat(name){
	  Animal.call(this);
	  this.name = name || 'Tom';
	}
	
	// Test Code
	var cat = new Cat();
	console.log(cat.name);
	console.log(cat.sleep());
	console.log(cat instanceof Animal); // false
	console.log(cat instanceof Cat); // true
特点：

解决了1中，子类实例共享父类引用属性的问题
创建子类实例时，可以向父类传递参数
可以实现多继承（call多个父类对象）

缺点：


- 实例并不是父类的实例，只是子类的实例
- 只能继承父类的实例属性和方法，不能继承原型属性/方法
- 无法实现函数复用，每个子类都有父类实例函数的副本，影响性能
- 推荐指数：★★（缺点3）

### 3、实例继承
核心：为父类实例添加新特性，作为子类实例返回

	function Cat(name){
	  var instance = new Animal();
	  instance.name = name || 'Tom';
	  return instance;
	}
	
	// Test Code
	var cat = new Cat();
	console.log(cat.name);
	console.log(cat.sleep());
	console.log(cat instanceof Animal); // true
	console.log(cat instanceof Cat); // false

特点：

不限制调用方式，不管是new 子类()还是子类(),返回的对象具有相同的效果
缺点：

实例是父类的实例，不是子类的实例
不支持多继承
推荐指数：★★

### 4、拷贝继承

	function Cat(name){
	  var animal = new Animal();
	  for(var p in animal){
	    Cat.prototype[p] = animal[p];
	  }
	  Cat.prototype.name = name || 'Tom';
	}
	
	// Test Code
	var cat = new Cat();
	console.log(cat.name);
	console.log(cat.sleep());
	console.log(cat instanceof Animal); // false
	console.log(cat instanceof Cat); // true

特点：

支持多继承
缺点：

效率较低，内存占用高（因为要拷贝父类的属性）
无法获取父类不可枚举的方法（不可枚举方法，不能使用for in 访问到）
推荐指数：★（缺点1）

### 5、组合继承
核心：通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用
	
	function Cat(name){
	  Animal.call(this);
	  this.name = name || 'Tom';
	}
	Cat.prototype = new Animal();
	
	// 感谢 @学无止境c 的提醒，组合继承也是需要修复构造函数指向的。
	
	Cat.prototype.constructor = Cat;
	
	// Test Code
	var cat = new Cat();
	console.log(cat.name);
	console.log(cat.sleep());
	console.log(cat instanceof Animal); // true
	console.log(cat instanceof Cat); // true

特点：


- 弥补了方式2的缺陷，可以继承实例属性/方法，也可以继承原型属性/方法
- 既是子类的实例，也是父类的实例
- 不存在引用属性共享问题
- 可传参
- 函数可复用

缺点：

调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了）
推荐指数：★★★★（仅仅多消耗了一点内存）

### 6、寄生组合继承
核心：通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点

	function Cat(name){
	  Animal.call(this);
	  this.name = name || 'Tom';
	}
	(function(){
	  // 创建一个没有实例方法的类
	  var Super = function(){};
	  Super.prototype = Animal.prototype;
	  //将实例作为子类的原型
	  Cat.prototype = new Super();
	})();
	
	// Test Code
	var cat = new Cat();
	console.log(cat.name);
	console.log(cat.sleep());
	console.log(cat instanceof Animal); // true
	console.log(cat instanceof Cat); //true
	
	//感谢 @bluedrink 提醒，该实现没有修复constructor。
	
	Cat.prototype.constructor = Cat; // 需要修复下构造函数

特点：

堪称完美
缺点：

实现较为复杂
推荐指数：★★★★（实现复杂，扣掉一颗星）

## call和apply的作用和区别
	obj.call(thisObj, arg1, arg2, ...);
	obj.apply(thisObj, [arg1, arg2, ...]);
两者作用一致，都是把obj(即this)绑定到thisObj，这时候thisObj具备了obj的属性和方法。

或者说thisObj『继承』了obj的属性和方法。唯一区别是apply接受的是数组参数，call接受的是连续参数。

	add(5,3); //8
	add.call(sub, 5, 3); //8

通过call和apply，我们可以实现对象继承。
示例：

	var Parent = function(){
	    this.name = "yjc";
	    this.age = 22;
	}
	
	var child = {};
	
	console.log(child);//Object {} ,空对象
	
	Parent.call(child);
	
	console.log(child); //Object {name: "yjc", age: 22}

以上实现了对象的继承。


## 理解事件、事件处理函数、钩子函数、回调函数

*  js派函数监听事件	=>监听函数就是所谓的钩子函数=>函数钩取事件：函数主动找事件=>钩子函数* 
*  js预留函数给dom事件，dom事件调用js预留的函数 =>事件派发给函数：事件调用函数=>回调函数


dom通过事件通知js的过程即是回调，对应的函数就是回调函数

js通过监听函数得知事件的过程即是钩取，对应的函数就是钩子函数

钩子函数和回调函数都是事件处理函数

## commonjs规范
1、CommonJs规范的出发点：JS没有模块系统、标准库较少、缺乏包管理工具；为了让JS可以在任何地方运行，以达到Java、C#、PHP这些后台语言具备开发大型应用的能力； 

2、在CommonJs规范中：

* 一个文件就是一个模块，拥有单独的作用域； 
* 普通方式定义的变量、函数、对象都属于该模块内；* 
* 通过require来加载模块；* 
* 通过exports和modul.exports来暴露模块中的内容； 

3、所有代码都运行在模块作用域，不会污染全局作用域；模块可以多次加载，但只会在第一次加载的时候运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果；模块的加载顺序，按照代码的出现顺序是同步加载的; 

4、\_\_dirname代表当前模块文件所在的文件夹路径，__filename代表当前模块文件所在的文件夹路径+文件名; 

5、require（同步加载）基本功能：读取并执行一个JS文件，然后返回该模块的exports对象，如果没有发现指定模块会报错;
 

6、模块内的exports：为了方便，node为每个模块提供一个exports变量，其指向module.exports，相当于在模块头部加了这句话：var exports = module.exports，在对外输出时，可以给exports对象添加方法，**PS：不能直接赋值（因为这样就切断了exports和module.exports的联系**）;

## AMD规范

> CommonJs对服务器端不是一个问题，因为所有的模块都存放在本地硬盘，可以同步加载完成，等待时间就是硬盘的读取时间。但是，对于浏览器，这却是一个大问题，因为模块都放在服务器端，等待时间取决于网速的快慢，可能要等很长时间，浏览器处于"假死"状态。
> 
> 因此，浏览器端的模块，不能采用"同步加载"（synchronous），只能采用"异步加载"（asynchronous）。这就是AMD规范诞生的背景。


AMD是"Asynchronous Module Definition"的缩写，意思就是"异步模块定义"。它采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。
AMD也采用require()语句加载模块，但是不同于CommonJS，它要求两个参数：

	require([module], callback);

第一个参数[module]，是一个数组，里面的成员就是要加载的模块；第二个参数callback，则是加载成功之后的回调函数。如果将前面的代码改写成AMD形式，就是下面这样：

	　　require(['math'], function (math) {
	　　　　math.add(2, 3);
	　　});

### requejs使用

1 加载

	　　<script src="js/require.js" data-main="js/main"></script>
2 主模块的写法

	　　// main.js
	
	　　require(['moduleA', 'moduleB', 'moduleC'], function (moduleA, moduleB, moduleC){
	
	　　　　// some code here
	
	　　});

3 模块的加载

使用require.config()方法，我们可以对模块的加载行为进行自定义。require.config()就写在主模块（main.js）的头部。参数就是一个对象，这个对象的paths属性指定各个模块的加载路径。

	　　require.config({
	
	　　　　paths: {
	
	　　　　　　"jquery": "lib/jquery.min",
	　　　　　　"underscore": "lib/underscore.min",
	　　　　　　"backbone": "lib/backbone.min"
	
	　　　　}
	
	　　});

5 AMD模块的写法

require.js加载的模块，采用AMD规范。也就是说，模块必须按照AMD的规定来写。

具体来说，就是模块必须采用特定的define()函数来定义。如果一个模块不依赖其他模块，那么可以直接定义在define()函数之中。

假定现在有一个math.js文件，它定义了一个math模块。那么，math.js就要这样写：

	　　// math.js
	
	　　define(function (){
	
	　　　　var add = function (x,y){
	
	　　　　　　return x+y;
	
	　　　　};
	
	　　　　return {
	
	　　　　　　add: add
	　　　　};
	
	　　});
加载方法如下：

	　　// main.js
	
	　　require(['math'], function (math){
	
	　　　　alert(math.add(1,1));
	
	　　});

如果这个模块还依赖其他模块，那么define()函数的第一个参数，必须是一个数组，指明该模块的依赖性。


	　　define(['myLib'], function(myLib){
	
	　　　　function foo(){
	
	　　　　　　myLib.doSomething();
	
	　　　　}
	
	　　　　return {
	
	　　　　　　foo : foo
	
	　　　　};
	
	　　});
加载非规范的模块

> require.config()接受一个配置对象，这个对象除了有前面说过的paths属性之外，还有一个shim属性，专门用来配置不兼容的模块。具体来说，每个模块要定义（1）exports值（输出的变量名），表明这个模块外部调用时的名称；（2）deps数组，表明该模块的依赖性

比如，jQuery的插件可以这样定义：

	　　shim: {
	
	　　　　'jquery.scroll': {
	
	　　　　　　deps: ['jquery'],
	
	　　　　　　exports: 'jQuery.fn.scroll'
	
	　　　　}
	
	　　}
## requireJS的基本原理

requireJS是使用创建script元素，通过指定script元素的src属性来实现加载模块的。但这里有几个基本问题需要解决：

1、模块依赖加载之后，如何调用回调函数

> 使用script来加载这些模块依赖，并且监听load事件，且每个script元素都会有一个自定义的属性，用来指明模块名

2、加载依赖之后，如何将接口暴露给回调函数

3、如何解决循环依赖的问题

> 在模块加载依赖的时候，先检查模块依赖中是否存在正在注册的模块，如果存在的话，则先将模块依赖数量减一。通过这种方法用来解决循环依赖的问题。

4、如何解决重复加载的问题
> 将已定义的模块保存在一个对象中，当加载模块依赖的时候，如果在这个对象中存在的话，则直接返回这个模块。否则的话，则再走一遍加载的模块的流程。

### prototype模式的验证方法

1 isPrototypeOf() **方法** 检查一个对象是否存在于另一个对象的原型链上。

	语法：  prototypeObj.isPrototypeOf(object)
	参数：  object  在该对象的原型链上搜寻
	返回值：  Boolean，表示调用对象是否在另一个对象的原型链上。
	
	描述：isPrototypeOf 方法 检查一个对象是否存在于另一个对象的原型链上。
	
2 hasOwnProperty() 判断一个属性是本地属性还是继承自prototype对象的属性

3 in 判断是否在某个对象里

4 instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。
	
	语法: object instanceof constructor

	参数: object 要检测的对象. constructor 某个构造函数

	描述:instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。
### isPrototypeOf 和 instanceof
> 细细品味会发现两者的区别主要是：
> 
> A.isPrototypeOf(B) 判断的是A对象是否存在于B对象的原型链之中
> 
> A instanceof B  判断的是B.prototype是否存在与A的原型链之中


> 所以就有下面的结论：
> 如果 A.isPrototypeOf(B)  返回true 则B instanceof A 一定返回true


　　　　
引用 [https://www.cnblogs.com/ArthurXml/p/6555509.html](https://www.cnblogs.com/ArthurXml/p/6555509.html)



 	var array = new Array();
	//判断 Array.prototype 是否在 array 的原型链中
	console.log(array instanceof Array); // true
	console.log(Array.isPrototypeOf(array)); //false
    console.log(Array.prototype.isPrototypeOf(array)); //true

	



### PhantomJS

有时，我们需要浏览器处理网页，但并不需要浏览，比如生成网页的截图、抓取网页数据等操作。

PhantomJS的功能，就是提供一个浏览器环境的命令行接口，你可以把它看作一个“虚拟浏览器”，除了不能浏览，其他与正常浏览器一样。它的内核是WebKit引擎，不提供图形界面，只能在命令行下使用，我们可以用它完成一些特殊的用途。

PhantomJS是二进制程序，需要安装后使用。

	$ npm install phantomjs -g
使用下面的命令，查看是否安装成功。

	$ phantomjs --version

REPL环境
phantomjs提供了一个完整的REPL环境，允许用户通过命令行与PhantomJS互动。键入phantomjs，就进入了该环境。

	$ phantomjs
这时会跳出一个phantom提示符，就可以输入Javascript命令了。

### Karma和Jasmine自动化单元测试


## window 和 Window是不一样的

Window是类，window是实例，而且通常是单例模式。

	> window instanceof Window
	< true

	window === this

### 内存泄漏

程序的运行需要内存。只要程序提出要求，操作系统或者运行时（runtime）就必须供给内存。

对于持续运行的服务进程（daemon），必须及时释放不再用到的内存。否则，内存占用越来越高，轻则影响系统性能，重则导致进程崩溃。

不再用到的内存，没有及时释放，就叫做内存泄漏（memory leak）。

有些语言（比如 C 语言）必须手动释放内存，程序员负责内存管理。

全局变量引起的内存泄漏

	function leaks(){  
	    leak = 'xxxxxx';//leak 成为一个全局变量，不会被回收
	}

闭包引起的内存泄漏

	var leaks = (function(){  
	    var leak = 'xxxxxx';// 被闭包所引用，不会被回收
	    return function(){
	        console.log(leak);
	    }
	})()


	dom清空或删除时，事件未清除导致的内存泄漏
	<div id="container">  
	</div>
	
	$('#container').bind('click', function(){
	    console.log('click');
	}).remove();

### 函数的3种定义方法

#### 1.1 函数声明

	//ES5
	function getSum(){}
	function (){}//匿名函数
	//ES6
	()=>{}//如果{}内容只有一行{}和return关键字可省,
#### 1.2 函数表达式(函数字面量)

	//ES5
	
	var sum=function getSum(){}
	//ES6
	let sum=()=>{}//如果{}内容只有一行{}和return关键字可省,
#### 1.3 构造函数

	var sum=new GetSum(num1,num2)
#### 1.4 三种方法的对比

1.函数声明有预解析,而且函数声明的优先级高于变量;

2.使用Function构造函数定义函数的方式是一个函数表达式,这种方式会导致解析两次代码，影响性能。第一次解析常规的JavaScript代码，第二次解析传入构造函数的字符串

### 2.ES5中函数的4种调用
在ES5中函数内容的this指向和调用方法有关

2.1 函数调用模式
包括函数名()和匿名函数调用,this指向window

	 function getSum() {
	    console.log(this) //window
	 }
	 getSum()
	 
	 (function() {
	    console.log(this) //window
	 })()
	 
	 var getSum=function() {
	    console.log(this) //window
	 }
	 getSum()
2.2 方法调用
对象.方法名(),this指向对象

	var objList = {
	   name: 'methods',
	   getSum: function() {
	     console.log(this) //objList对象
	   }
	}
	objList.getSum()
2.3 构造器调用
new 构造函数名(),this指向构造函数

	function Person() {
	  console.log(this); //指向构造函数Person
	}
	var personOne = new Person();
2.4 间接调用
利用call和apply来实现,this就是call和apply对应的第一个参数,如果不传值或者第一个值为null,undefined时this指向window

	function foo() {
	   console.log(this);
	}
	foo.apply('我是apply改变的this值');//我是apply改变的this值
	foo.call('我是call改变的this值');//我是call改变的this值


#### 4.call,apply和bind

- IE5之前不支持call和apply,bind是ES5出来的;

- call和apply可以调用函数,改变this,实现继承和借用别的对象的方法;

#### 4.3 bind
bind是function的一个函数扩展方法，bind以后代码重新绑定了func内部的this指向,不会调用方法,不兼容IE8

	var name = '李四'
	 var foo = {
	   name: "张三",
	   logName: function(age) {
	   console.log(this.name, age);
	   }
	 }
	 var fooNew = foo.logName;
	 var fooNewBind = foo.logName.bind(foo);
	 fooNew(10)//李四,10
	 fooNewBind(11)//张三,11  因为bind改变了fooNewBind里面的this指向

#### 5.合并数组

let arr1=[1,2,3]; 
let arr2=[4,5,6]; 
Array.prototype.push.apply(arr1,arr2); //将arr2合并到了arr1中
#### 6.求数组最大值

Math.max.apply(null,arr)
#### 7.判断字符类型

Object.prototype.toString.call({})


4.call,apply和bind
1.IE5之前不支持call和apply,bind是ES5出来的;

### token

Token 应该被保存起来（放到 local / session stograge 或者 cookies）

浏览器不支持 session storage 时都应该转存到 cookies 里

### js操作cookie

js设置cookie
	
	function setCookie(name,value,time)
	{
	    var Days = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
		document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
	}

JS读取cookie:

	function getCookie(name) {  
	    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");  
	    if(arr=document.cookie.match(reg)){ 
	        return unescape(arr[2]); 
	        } else {
	          return null;  
	        }  

	}

    //"(^| )" 这个匹配开头和空格

##### 分割成数组然后遍历的形式

    function getCookieByArray(name){
     var cookies = document.cookie.split(';');
     var list;
     for(var i=0; i<cookies.length ; i++){
         list = cookies[i].split('=');
          if (list[0].replace(' ', '') == name) {
           return list[1];
      }
     }
    }


js删除cookies

	function delCookie(name)
	{
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval=getCookie(name);
		if(cval!=null)
		document.cookie= name + "="+cval+";expires="+exp.toGMTString();
	}
	
### Dom优化方案

如下的这些DOM操作会导致重绘或重排：

- 增加、删除和修改可见DOM元素

- 页面初始化的渲染

- 移动DOM元素

- 修改CSS样式，改变DOM元素的尺寸

- DOM元素内容改变，使得尺寸被撑大

- 浏览器窗口尺寸改变

> 现代浏览器会针对重排或重绘做性能优化，比如，把DOM操作积累一批后统一做一次重排或重绘。

>但在有些情况下，浏览器会立即重排或重绘。比如请求如下的DOM元素布局信息：offsetTop/Left/Width/Height、scrollTop/Left/Width/Height、clientTop/Left/Width/Height、getComputedStyle()

DOM操作带来的页面重绘或重排是不可避免的，但可以遵循一些最佳实践来降低由于重排或重绘带来的影响。

如下是一些具体的实践方法：

#### 1. 合并多次的DOM操作为单次的DOM操作

    element.style.cssText += 'border: 1px solid #f00;';
    
#### 2. 把DOM元素离线或隐藏后修改

    - 使用文档片段
    - 通过设置DOM元素的display样式为none来隐藏元素
    
3. 设置具有动画效果的DOM元素的position属性为fixed或absolute

4. 谨慎取得的DOM元素的布局信息
5. 使用事件托管方式绑定事件

**在Chrome上createElement比innerHTML快**

    var start = new Date().getTime() ;
    var test = document.getElementById("test") ;
    
    for(var i = 0 ; i < 1000 ; i ++){
        test.innerHTML += "<div></div>" ;
    }
    
    console.log("innerHTML:" + (new Date().getTime() - start)) ;
    document.getElementById("test").innerHTML = "" ;
    
    start = new Date().getTime() ;
    
    for(var i = 0 ; i < 1000 ; i ++){
        test.appendChild(document.createElement("div")) ;
    }
    
    console.log("createElement:" + (new Date().getTime() - start)) ;
 
#### 3. 使用选择器方法替代传统方法

**querySelectorAll** 方法返回满足条件的所有节点

**querySelector** 返回满足条件的第一个节点。

使用这两个方法来替代我们以前经常用的getElementById，getElementsByTagName等方法也是提高性能的一个途径。

#### 4. 事件代理
越多的事件绑定页面就加载越慢并且占用更多内存，同时绑定太多事件也会使得代码的可读性降低。

使用事件代理的方法原理就是把事件绑定到元素的父节点,在处理函数中判断target

根据不同的target执行不同的逻辑。这样能很大程度的减少绑定是事件数量,并且提高代码的简洁度。