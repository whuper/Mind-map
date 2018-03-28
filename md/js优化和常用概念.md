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

#### 4.判断undefined和null:	
	
	var tmp = undefined; 
	if (tmp== undefined) 
	{ 
	alert("null or undefined"); 
	}
	
	var tmp = undefined; 
	if (tmp== null) 
	{ 
	alert("null or undefined"); 
	}
说明：null==undefined 


#### 5.判断undefined、null与NaN:

	var tmp = null; 
	if (!tmp) 
	{ 
	alert("null or undefined or NaN"); 
	}
提示：一般不那么区分就使用这个足够。

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

### 手写ajax

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