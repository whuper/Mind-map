###css的优先级问题

1.  内联样式表的权值最高 1000；

2.  ID 选择器的权值为 100

3.  Class,伪类,熟悉 类选择器的权值为 10

4.  HTML 标签选择器的权值为 1

**当在一个样式声明上使用 !important 规则时，该样式声明会覆盖CSS中任何其他的声明,。尽管技术上 !important 与优先级毫无关系，**

一些经验法则：

Never 永远不要在全站范围的 css 上使用 !important  
Only 只在需要覆盖全站或外部 css（例如引用的 ExtJs 或者 YUI ）的特定页面中使用 !important   
Never 永远不要在你的插件中使用 !important  
Always 要优化考虑使用样式规则的优先级来解决问题而不是 !important  

###DPR

在早先的移动设备中，并没有DPR的概念。随着技术的发展，移动设备的屏幕像素密度越来越高。从iphone4开始，苹果公司推出了所谓的retina视网膜屏幕。之所以叫做视网膜屏幕，是因为屏幕的**PPI**(屏幕像素密度)太高，人的视网膜无法分辨出屏幕上的像素点。iphone4的分辨率提高了一倍，但屏幕尺寸却没有变化，这意味着同样大小的屏幕上，像素多了一倍，于是DPR = 2


而对于设备像素比DPR也有对应的javascript属性window.devicePixelRatio

**以iphone5为例，iphone5的CSS像素为320px \* 568px，DPR是2**，所以其设备像素为640px*1136px设备像素比DPR(devicePixelRatio)是默认缩放为100%的情况下，设备像素和CSS像素的比值

- DPI（Dots Per Inch,每英寸点数）
- PPI(Pixels Per Inch,屏幕像素密度)
- DPR(DevicePixelRatio,设备像素比)

##rem
rem（font size of the root element）是指相对于根元素的字体大小的单位（可以联想一下em）

rem的出现 使很多 移动端的自适应得到了改变，因为 rem是指相对于根元素的字体大小的单位，em是指相对于父元素的字体大小的单位 ，px是固定像素；

###推荐用法
根元素html

	html{	
		font-size:62.5%; /* 10÷16=62.5% */	
	}
	body{
		font-size:1.2rem ; /* 12÷10=1.2 */	
	}

