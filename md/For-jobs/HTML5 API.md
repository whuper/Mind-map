# HTML5 API
1. [SVG](https://github.com/WaltTing/Trace/tree/master/HTML5/html5_demo)  
1. [canvas](https://github.com/WaltTing/Trace/tree/master/HTML5/html5_demo)  
1. [Drag](https://github.com/WaltTing/Trace/tree/master/HTML5/html5_demo)   
1. [audio](https://github.com/WaltTing/Trace/tree/master/HTML5/html5_demo)  
1. [video](https://github.com/WaltTing/Trace/tree/master/HTML5/html5_demo)     
1. Webworker   
1. Web存储       
1. 地理定位   
1. 应用缓存   
   
### 拖放（Drag 和 drop）是 HTML5 标准的组成部分。

## Canvas vs. SVG
拖放是一种常见的特性，即抓取对象以后拖到另一个位置。

在 HTML5 中，拖放是标准的一部分，任何元素都能够拖放。

	<!DOCTYPE HTML>
	<html>
	<head>
	<script type="text/javascript">
	function allowDrop(ev)
	{
		ev.preventDefault();
	}
	
	function drag(ev)
	{
		ev.dataTransfer.setData("Text",ev.target.id);
	}
	
	function drop(ev)
	{
		ev.preventDefault();
		var data=ev.dataTransfer.getData("Text");
		ev.target.appendChild(document.getElementById(data));
	}
	</script>
	</head>
	<body>
	
	<div id="div1" ondrop="drop(event)"	ondragover="allowDrop(event)"></div>

	<img id="drag1" src="img_logo.gif" draggable="true"	ondragstart="drag(event)" width="336" height="69" />
	
	</body>
	</html>

它看上去也许有些复杂，不过我们可以分别研究拖放事件的不同部分。

设置元素为可拖放
首先，为了使元素可拖动，把 draggable 属性设置为 true ：

	<img draggable="true" />

### 1 拖动什么 ondragstart 和 setData()
然后，规定当元素被拖动时，会发生什么。

在上面的例子中，ondragstart 属性调用了一个函数，drag(event)，它规定了被拖动的数据。

dataTransfer.setData() 方法设置被拖数据的数据类型和值：

	function drag(ev)
	{
	ev.dataTransfer.setData("Text",ev.target.id);
	}

在这个例子中，数据类型是 "Text"，值是可拖动元素的 id ("drag1")。

### 2 放到何处  ondragover
ondragover 事件规定在何处放置被拖动的数据。

默认地，无法将数据/元素放置到其他元素中。如果需要设置允许放置，我们必须阻止对元素的默认处理方式。

这要通过调用 ondragover 事件的 event.preventDefault() 方法：
	
	event.preventDefault()

### 3 进行放置  ondrop
当放置被拖数据时，会发生 drop 事件。

在上面的例子中，ondrop 属性调用了一个函数，drop(event)：

	function drop(ev)
	{
	ev.preventDefault();
	var data=ev.dataTransfer.getData("Text");
	ev.target.appendChild(document.getElementById(data));
	}

###代码解释：

- 调用 preventDefault() 来避免浏览器对数据的默认处理（drop 事件的默认行为是以链接形式打开）
- 通过 dataTransfer.getData("Text") 方法获得被拖的数据。该方法将返回在 setData() 方法中设置为相同类型的任何数据。
- 被拖数据是被拖元素的 id ("drag1")
- 把被拖元素追加到放置元素（目标元素）中

### Canvas
Canvas 通过 JavaScript 来绘制 2D 图形。

Canvas 是逐像素进行渲染的。

在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。

### 什么是 Canvas？
HTML5 的 canvas 元素使用 JavaScript 在网页上绘制图像。

画布是一个矩形区域，您可以控制其每一像素。

canvas 拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。

### 什么是SVG？

- SVG 指可伸缩矢量图形 (Scalable Vector Graphics)
- SVG 用于定义用于网络的基于矢量的图形
- SVG 使用 XML 格式定义图形
- SVG 图像在放大或改变尺寸的情况下其图形质量不会有损失
- SVG 是万维网联盟的标准

 SVG 的优势

### 与其他图像格式相比（比如 JPEG 和 GIF），使用 SVG 的优势在于：

- SVG 图像可通过文本编辑器来创建和修改
- SVG 图像可被搜索、索引、脚本化或压缩
- SVG 是可伸缩的
- SVG 图像可在任何的分辨率下被高质量地打印
- SVG 可在图像质量不下降的情况下被放大

### Canvas 与 SVG 的比较

**Canvas**

- 依赖分辨率
- 不支持事件处理器
- 弱的文本渲染能力
- 能够以 .png 或 .jpg 格式保存结果图像
- 最适合图像密集型的游戏，其中的许多对象会被频繁重绘

**SVG**

- 不依赖分辨率
- 支持事件处理器
- 最适合带有大型渲染区域的应用程序（比如谷歌地图）
- 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）
- 不适合游戏应用

## HTML5 Geolocation API 用于获得用户的地理位置。

鉴于该特性可能侵犯用户的隐私，除非用户同意，否则用户位置信息是不可用的。

## Web 存储

在客户端存储数据
###HTML5 提供了两种在客户端存储数据的新方法：

- localStorage 没有时间限制的数据存储
- sessionStorage 针对一个 session 的数据存储

每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题

### 三者的异同

### cookie

- 一般由服务器生成，可设置失效时间。**如果在浏览器端生成Cookie，默认是关闭浏览器后失效**
- 存放数据大小,4K左右
- 每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题
- 需要程序员自己封装，原生的Cookie接口不友好

### localStorage	

- 除非被清除，否则永久保存
- 一般为5MB
- 仅在客户端（即浏览器）中保存，不参与和服务器的通信
- 源生接口可以接受，亦可再次封装来对Object和Array有更好的支持

### sessionStorage

- 仅在当前会话下有效，**关闭页面或浏览器**后被清除
- 一般为5MB
- 仅在客户端（即浏览器）中保存，不参与和服务器的通信
- 源生接口可以接受，亦可再次封装来对Object和Array有更好的支持

>  localStorage 接替了 Cookie 管理购物车的工作，同时也能胜任其他一些工作。比如HTML5游戏通常会产生一些本地数据，localStorage 也是非常适用的。如果遇到一些内容特别多的表单，为了优化用户体验，我们可能要把表单页面拆分成多个子页面，然后按步骤引导用户填写。这时候 sessionStorage 的作用就发挥出来了。


### localStorage 方法
localStorage 方法存储的数据没有时间限制。第二天、第二周或下一年之后，数据依然可用。

如何创建和访问 localStorage：
	//其他操作方法：点操作和[ ]

	localStorage.lastname="Smith";
	document.write(localStorage.lastname);

	//setItem && getItem
	localStorage.setItem("key", "value");     localStorage.setItem("site", "js8.in");
	var value = localStorage.getItem("key");     
	var site = localStorage.getItem("site");

	localStorage.removeItem("key");     
	localStorage.removeItem("site");

### sessionStorage 方法
sessionStorage 方法针对一个 session 进行数据存储。**当用户关闭浏览器窗口后，数据会被删除**。

如何创建并访问一个 sessionStorage：

	sessionStorage.lastname="Smith";
	document.write(sessionStorage.lastname);

下面的例子对用户在当前 session 中访问页面的次数进行计数：

	<script type="text/javascript">
		if (sessionStorage.pagecount)
		  {
		  sessionStorage.pagecount=Number(sessionStorage.pagecount) +1;
		  }
		else
		  {
		  sessionStorage.pagecount=1;
		  }
		document.write("Visits "+sessionStorage.pagecount+" time(s) this session.");
	</script>

### HTML 5 应用程序缓存(Application Cache)

### HTML 5 Web Workers