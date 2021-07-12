
### 1.  jQuery基本概念介绍
 
#### 1.1 什么是jQuery
一个javascript库，把常用方法写到一个js文件中，需要的时候直接调用即可
学习jQuery就是学习一些方法
 
#### 1.2 为什么要学习jQuery
write less do more
 
#### 1.3 jQuery的使用
a.引包     b.入口函数     c.实现功能
 
#### 1.4 版本介绍
> 3个版本 1.x      2.x     3.x
> 其中版本1兼容IE6/7/8，版本2和3实现的功能更多一些，版本3更适合最新的浏览器
> 每个大版本又分为压缩版（compressed）和非压缩版（uncompressed），由于其格式和体积不同：压缩版一般是在生产环境中，即项目上线时使用；非压缩版是在开发环境中
 
#### 1.5 引包注意事项
1.忘记引包      2.引包顺序出错      3.引包路径出错
 
#### 1.6 入口函数详细介绍
第一种：
	
	$("document").ready(function () {  } ); 
	    
第二种：

	$(function () {  } );
	
**和js的入口函数window.onload的区别：**

jQuery--文档树加载完成的时候执行，不会等待突破资源的加载完成

js--文档树加载完成后，必须等待图片等的资源加载完成才会执行
 
#### 1.7 jQuery中的\$符号

本质就是一个函数，且\$ === jQuery，可分为3种功能:
	
	 1，$(function () {    } );  参数是function，功能是入口函数
	 2，$("#id"); $(".wrap");等  参数是字符串，一般都是选择器，功能是查找页面的元素
	 3，$(domObj);  将dom对象转化成jQuery对象
	     
	 
#### 1.8 jQuery对象和DOM对象
jQuery对象：用jQuery方法获取到的元素返回的对象

DOM对象：使用JavaScript中的方法获取页面中的元素返回的对象

两者的区别：jQuery对象就是DOM对象的包装集（伪数组）

两者之间的转换：

     jQuery对象转DOM对象：通过索引-- jQueryObj[index]  或  jQueryObj.get(index)
     DOM对象转jQuery对象：$(domObj)
 
####1.9 jQuery和javascript
js是一种脚本语言，jQuery是靠js写成的，jQuery就是一个js库
 
### 2. jQuery常用选择器
 
#### 2.1 基本选择器

	$(".className")  类选择器
	$("#id")  id选择器
	$("tagName") 标签选择器
	$("selector1,selector2")  并集选择器
	$("selector1selector2") 交集选择器
 
#### 2.2 层级选择器
	后代 选择器  $("selector1 selector2")
	子代 选择器  $("selector1>selector2")
 
#### 2.3 过滤选择器
格式：

	$("selector:filter")
	        odd   $("selector:odd")  奇数过滤选择器
	        even  $("selector:even")  偶数过滤选择器
	        eq(index)  $("selector:eq(index)")  序号过滤选择器
 
#### 2.4  筛选选择器
筛选选择器全都是方法

	children(selector)
	find(selector)
	prev()
	prevAll()
	next()
	nextAll()
	siblings(selector)
	parent()
	eq(index)
 
### 3.jQuery操作样式
 
#### 3.1 css操作
	设置单个样式      css(name, value)
	设置多个样式      css(obj)  {name:value,name:value....,name:value}
	获取样式            css(name)
	 
#### 3.2 class操作
	添加class      addClass(className)  追加
	移除class      removeClass(className) 如果不传参数 移除所有的样式
	判断class样式      hasClass(className)
	切换class样式      toggleClass(className)  若有则移除，若无则添加
	 
### 4.jQuery动画
 
#### 4.1 显示和隐藏动画
	show(speed, callback)     hide(speed, callback)     toggle(speed, callback)
	
	speed(可选)：动画的执行时间
	     1.如果不传，就没有动画效果。
	     2.毫秒值(比如1000),动画在1000毫秒执行完成(推荐)
	     3.固定字符串，slow(200)、normal(400)、fast(600)，如果传其他字符串，则默认为normal。
	callback(可选):执行完动画后执行的回调函数
	 
#### 4.2 滑入与滑出动画

	slideDown(speed, callback)     slideUp(speed, callback)     slideToggle(speed, callback)
	     方法详解同显示与隐藏动画
	 
#### 4.3 淡入与淡出动画

	fadeIn(speed, callback)     fadeOut(speed, callback)     fadeTo(speed, value, callback)     fadeToggle(speed, callback)
	     方法详解同显示与隐藏动画
	     fadeTo()     淡入淡出只能控制元素的不透明度从完全不透明到完全透明，而fadeTo可以指定元素不透明度的具体值，并且时间参数是必须的，因为若只有value，系统会优先把它解析成第一个参数speed
	 
#### 4.4 自定义动画
	animate(prop, speed, easing, callback) 
	     其中prop--要执行动画的css属性（必选）: {name: value, name: value, ... name: value}
	     speed--要执行的动画时长（可选）
	     easing--执行动画的方式，控制速度（可选）
	     callback--动画执行完之后要执行的回调函数（可选）
 
#### 4.5 easing参数
这个参数是用来控制动画在不同的动画点中设置动画速度，默认为swing

swing--在开头和结尾移动慢，在中间移动速度快
     
linear--匀速移动
     
 
#### 4.6 动画队列问题及停止动画
动画队列
> jQuery中有个动画队列的机制。当我们对一个对象添加多次动画效果时后添加的动作就会被放入这个动画队列中，等前面的动画完成后再开始执行。可是用户的操作往往都比动画快，如果用户对一个对象频繁操作时不处理动画队列就会造成队列堆积，影响到效果。

停止动画    
 
	stop(clearQueue, jumpToEnd)
		clearQueue--是否清除动画队列
		jumpToEnd--是否跳转到当前动画的最终效果
	 


### 5.jQuery操作DOM节点
 
#### 5.1 创建元素节点

	$(htmlStr)
	htmlStr:html格式的字符串
	会将html字符转换成jQuery对象
 
#### 5.2 添加元素
5.2.1添加新建的元素

方法一：将jQuery对象添加到调用者内部的最后面

.append(jQueryObj);
方法二：参数字符串，会自动创建成jQuery对象
	
	.append(htmlStr);

   
   
 
#### 5.2.2添加已经存在的元素
append     追加（添加元素到当前元素的所有子元素的最后面 ）
	
	$("ol").append("<li>插入项\</li>");
prepend     添加元素到当前元素的所有子元素的最前面
	
	$("p").prepend("<b>Hello world!</b>");
prependTo
	
	$("<b>Hello World!</b>").prependTo("p");
  
  
before     添加元素到当前元素的前面

after     添加元素到当前元素的后面

**注意：这些方法括号内可以是htmlStr（html字符串），也可以是jQuery对象**


 
#### 5.2.3使用html方法创建元素
\$("div").html()
 
#### 5.3 清空元素
empty()  清空当前元素的子元素，当前元素不会被删除（清理门户）

html("")  不推荐使用，造成内存泄漏  因为子元素注册的事件不会被清理，会一直占用内存
 
#### 5.4 删除元素
remove()  删除当前元素的所有节点，包括其自身 （自杀）
 
#### 5.5 克隆元素
clone(flag) 克隆当前元素，如果flag为true则事件也会被克隆 ，默认是深度克隆
 
### 6.jQuery操作属性
 
#### 6.1 设置单个属性
attr(name, value);     //参数1--需要设置的属性名     //参数2--对应的属性值
 
#### 6.2 设置多个属性
attr({name1:value1, name2:value2...});     //参数是一个对象
 
#### 6.3 获取属性
attr(name);     //传需要获取的属性名称，返回对应的属性值
 
#### 6.4 移除属性
removeAttr(name)        //若属性不存在，返回undefined
                        //若无参数，不执行任何操作。只删除name
 
#### 6.5prop方法
针对checked、selected、disabled这些单属性（boolean类型），其他同attr

	obj.attr('checked'): checked
	obj.prop('checked'): false
 
### 7.jQuery操作值和内容
 
#### 7.1 val方法
	val()     //用于设置和获取表单元素的值
	          tip: 给select设置值的时候，如果有和值对应的option，那么这个option被选中；如果没有跟值对应的option，select选中空白
#### 7.2 html方法
html(htmlStr)    //参数是html字符串
 
#### 7.3 text方法
text(htmlStr)     //设置内容
text()    //获取内容
 
tip: html()和text()的区别
1，html()会识别html标签
2，text()会把内容直接当成字符串，并不会识别html标签
 
### 8. jQuery操作尺寸
 
#### 8.1 width方法
width(num)     //设置高度，传的是数字类型
width()     //获取高度
 
#### 8.2 height方法
同width方法

-----
## 9.jQuery操作坐标值
 
#### 9.1 offset方法

	offset({left:num, top:num})     //设置位置
	offset()     //获取位置，获取的也是一个对象格式的
	     tip: 1，设置或获取元素相对于文档document的位置
	          2，使用offset操作，如果元素没有设置定位(默认position:static)，则会把position修改为relative.会修改left、top
	 
#### 9.2 position方法

position()          //只能获取，不能设置

获取其相对于最近的定位的父元素的位置
 
### 10.jQuery操作滚动
 
#### 10.1scrollLeft方法
	scrollLeft(num) //设置水平方向滚动条的位置
	scrollLeft()        //获取位置
	     注册给document或window都行
 
#### 10.2scrollTop方法
方法同scrollLeft方法
 
##元素距离浏览器工作区顶端的距离
	
	(javascript)        document.documentElement.scrollTop  
	
	(javascript)        document.documentElement.scrollTop 
	
	(jqurey)             $(window).scrollTop() 
	
	(jqurey)             $(window).scrollLeft()
	
	 网页工作区域的高度和宽度  
	
	(javascript)       document.documentElement.clientHeight// IE firefox       
	
	(jqurey)             $(window).height()
	
	 元素距离文档顶端和左边的偏移值  
	
	(javascript)        DOM元素对象.offsetTop //IE firefox
	
	(javascript)        DOM元素对象.offsetLeft //IE firefox
	
	(jqurey)             jq对象.offset().top
	
	(jqurey)             jq对象.offset().left
	
	获取页面元素距离浏览器工作区顶端的距离
	 页面元素距离浏览器工作区顶端的距离  =  元素距离文档顶端偏移值  -   网页被卷起来的高度  
	 
	
**即：**
	
**	 页面元素距离浏览器工作区顶端的距离 =  DOM元素对象.offsetTop  -  document.documentElement.scrollTop **
 
### 11.jQuery事件机制
 
#### 11.1 jQuery事件的发展历程
JavaScript中已经学习过了事件，但是jQuery对JavaScript事件进行了封装，增加并扩展了事件处理机制。
jQuery不仅提供了更加优雅的事件处理语法，而且极大的增强了事件的处理能力。
#### 1. jQuery事件的发展历程

简单事件绑定>>bind事件绑定>>delegate事件绑定>>on事件绑定(推荐)

#### 2. 简单事件绑定

	click(handler) 单击事件
	mouseenter(handler) 鼠标进入事件
	mouseleave(handler) 鼠标离开事件
	scroll(handler) 滚动事件
	缺点：一次只能绑定一个事件

#### 3. bind事件绑定

不推荐使用，jQuery1.7版本后被on取代

	//绑定多个事件//第一个参数：事件类型//第二个参数：事件处理程序
	$("p").bind("click mouseenter", function(){
	 //事件响应方法
	});
	缺点：不支持动态创建出来的元素绑定事件。

#### 4. delegate事件绑定

支持动态绑定事件

	// 第一个参数：selector，要绑定事件的元素// 第二个参数：事件类型// 第三个参数：事件处理函数
	$(".parentBox").delegate("p", "click", function(){
	 //为 .parentBox下面的所有的p标签绑定事件
	});
	理解：为什么delegate支持动态绑定事件？原因是事件冒泡机制。因为事件时绑定到父元素上的，由子元素触发。

#### 5. on事件绑定

jQuery1.7之后，jQuery用on统一了所有事件的处理方法。
 
#### 11.2 on事件绑定
> 给自身绑定事件 on(types, function)	
> 绑定事件委托     on(types, selector, data, handler)	
> // 1：events，绑定事件的名称可以是由空格分隔的多个事件（标准事件或自定义事件）	
> // 2：selector, 执行事件的后代元素（可选），如果没有后代元素，事件由自己执行。	
> // 3：data，传递给处理函数的数据，事件触发的时候通过event.data来使用	
> // 4：handler，事件处理函数	
>  
> 事件委托的原理：(事件委托)	
> //            1.把事件绑定在父元素上	
> //            2.点击子元素，触发事件冒泡	
> //            3.父元素的事件响应这个事件冒泡	
> //            4.响应事件冒泡的时候，可以知道到底是谁触发的这个事件		
> //            5.用on方法的第二个参数selector和触发事件的这个元素进行对比，如果可以匹配	
> //            6.就触发on方法的第三个参数 function	
 
#### 11.3 事件解绑
#### 11.3.1 unbind()和 undelegate()     //不推荐使用
#### 11.3.2 off()方法

	// 解绑匹配元素的所有事件
	$(selector).off();
	// 解绑匹配元素的所有click事件
	$(selector).off(“click”);
	// 解绑所有代理的click事件，元素本身的事件不会被解绑
	$(selector).off( “click”, “**” );
 
#### 11.4 事件触发
	简单事件触发     //直接调用事件，如$(selector).click();  //触发click事件
	trigger方法触发事件     //type要触发的事件的事件类型
	triggerHandler触发     //type要触发的事件的事件类型，但是不会触发浏览器的默认行为（如获得焦点）
	 
#### 11.5 jQuery事件对象
	对象属性                      解释
	event.type                   事件类型
	event.data                   存储绑定事件时传递的附加数据
	event.target                 点了谁就是谁
	event.currentTarget        当前DOM元素，等同于this
	event.delegateTarget     代理对象
	screenX和screenY          对应屏幕最左上角的值
	offsetX和offsetY           点击的位置距离元素的左上角的位置
	clientX和clientY            距离页面左上角的位置（忽视滚动条）
	pageX和pageY            距离页面最顶部的左上角的位置（会计算滚动条的距离）
	event.wich                   鼠标按键类型，1=鼠标左键 2=鼠标中键 3=鼠标右键
	event.keyCode             按下的键盘代码
	event.stopPropagation() 阻止事件冒泡行为
	event.preventDefault()    阻止浏览器默认行为
 
### 12.jQuery补充
 
#### 12.1 链式编程
链式编程原理：return this;
通常情况下，只有设置操作才能把链式编程延续下去。因为获取操作的时候，会返回获取到的相应的值，无法返回 this。	
end(); // 筛选选择器会改变jQuery对象的DOM对象，想要恢复到上一次的状态，并且返回匹配元素之前的状态。
 
 通过end()方法取消当前的jQuery对象，返回前面的jQuery对象。这样当匹配某个按钮时，为其绑定事件处理函数，然后调用end()方法，则又返回前面一个jQuery对象
	 
	 $(function(){   	         
		$('input[type="button"]').eq(0).click(function(){  
		alert('you clicked me!');}).end()  
		.eq(1).click(function(){  
		$('input[type="button"]:eq(0)').trigger('click');}).end()  
		.eq(2).click(function(){  
		$('input[type="button"]:eq(0)').unbind('click'); }).end()  
		.eq(3).toggle(function(){  
		$('.panel').hide('slow');}, function(){ $('.panel').show('slow');};	
	}   
 
#### 12.2 隐式迭代
在方法的内部会为匹配到的所有元素进行循环遍历，执行相应的方法；而不用我们再进行循环，简化我们的操作，方便我们调用。	
如果获取的是多元素的值，大部分情况下返回的是第一个元素的值。	
注意：		
1 隐式迭代在设置值得时候，设置的是全部	
2 获取值得时候，会获取第一个元素的值	
 
#### 12.3 each方法
	有了隐式迭代，为什么还要使用each函数遍历？ 大部分情况下是不需要使用each方法的，因为jQuery的隐式迭代特性。 **如果要对每个元素做不同的处理**，这时候就用到了each方法
	     作用：遍历jQuery对象集合，为每个匹配的元素执行一个函数
	          // 参数一表示当前元素在所有匹配元素中的索引号
	          // 参数二表示当前元素（DOM对象）
	$(selector).each(function(index,element){});
 
#### 12.4 多库并存
> 问题：
> 我们知道jQuery占用了\$这个标识符，如果引用的其他库也用到\$这个标识符，这时候为了保证每个库都能正常使用，这时候就存在了多库共存的问题——后引入的\$的会覆盖掉先引入的库中的$。
	
	解决：（noConflict方法）
	
	1，有别的库和jQuery同时使用了$，若想让其他库使用$，可把jQuery的$给释放掉
	2，多个版本的jQuery同时存在，可以用noConflict来区分多个版本的jQuery
	
	$.noConflict();
	var jq = $.noConflict();
	

### 13.jQuery插件机制
 
jQuery除了官方的几个版本之外，特意开通了插件接口，经过许多年的发展，jQuery插件数不胜数。这些插件可以提供很多额外的功能，如jquery.color.js支持颜色的渐变，ui工程师常用的由官方维护的jQueryUI插件，给我们提供了很大的方便。

我们也可以自定义jQuery插件**（jQuery对象扩展方法--$.fn.pluginName = function ( ) { }）**，是学习jQuery的一些特定方法，jQuery的原生代码归根到底还是javascript。


jquery定义插件
扩展jquery的时候。最核心的方法是以下两种：

#### $.extend(object) 可以理解为jquery添加一个静态方法
#### $.fn.extend(object) 可以理解为jquery实例添加一个方法


    $(function() {  
       $.fn.插件名称 = function(options) {  
          var defaults = {  
             Event : "click",        //触发响应事件  
             msg : "Holle word!"        //显示内容  
          };  
          var options = $.extend(defaults,options);  
          //功能代码部分  
          //绑定事件  
          $(this).live(options.Event,function(e){  
             alert(options.msg);  
          });  
       }  
    });  

调用

    $(function() {  
       //绑定元素事件  
       $("#test").插件名称({  
          Event : "click",        //触发响应事件  
          msg : "插件原来就是这么简单!"     //显示内容  
       });  
    });  



## jquery ajax

	$.ajax({ 
		url: "test.html", 
		data：{name:'wenhao'},
		context: document.body, 
		success: function(){
	        $(this).addClass("done");
	      }
	    });

	$.get(URL,callback);
	
	$.post(URL,data,callback);
	//实例
	$("button").click(function(){
	  $.post("demo_test_post.asp",
	  {
	    name:"Donald Duck",
	    city:"Duckburg"
	  },
	  function(data,status){
	    alert("Data: " + data + "\nStatus: " + status);
	  });
	});
	