##　正则表达式

	var patt1 = new RegExp("e"); //RegExp 对象
	var patt = /e/; //简写


### 1. RegExp 对象
**test()**

用于检测一个字符串是否匹配某个模式，如果字符串中含有匹配的文本，则返回 true，否则返回 false。

	var patt = /e/;
	patt.test("The best things in life are free!");

**exec()**

exec() 方法用于检索字符串中的正则表达式的匹配。

该函数返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。

**compile()**

编译正则表达式。

### 2. 字符串方法


**search()**  

用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，并返回子串的起始位置。

	var str = "Visit Runoob!"; 
	var n = str.search("Runoob");

**replace()** 

用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。

	var str = document.getElementById("demo").innerHTML; 
	var txt = str.replace(/microsoft/i,"Runoob");

**match()**

找到一个或多个正则表达式的匹配。

**split()**

把字符串分割为字符串数组。

### 常用正则表达式
	匹配手机号
	/^1[34578]\d{9}$/

	电话号码
	/^0\d{2,3}-?\d{7,8}$/

	匹配邮箱
	/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/

	匹配用户名
	/^[a-zA-z]\w{3,15}$/
	
	\w：匹配包括下划线的任何单词字符。等价于'[A-Za-z0-9_]'。


### js的基本数据类型

基本数据类型有五种Undefined、Null、Boolean、Number和String，也叫做简单的数据类型

还有一种复杂的数据类型是**Object**，但**不属于基本数据类型**。

#### 字符串常用的函数

其实在控制台打印一下就有了的

- charAt() 返回在指定位置的字符。
- concat() 连接字符串。
- fromCharCode() 从字符编码创建一个字符串。
- indexOf() 检索字符串。
- match() 找到一个或多个正则表达式的匹配。
- replace() 替换与正则表达式匹配的子串。
- search() 检索与正则表达式相匹配的值。
- slice() 提取字符串的片断，并在新的字符串中返回被提取的部分。
- split() 把字符串分割为字符串数组。
- substr() 从起始索引号提取字符串中指定数目的字符。
- substring() 提取字符串中两个指定的索引号之间的字符。
- toLocaleLowerCase() 把字符串转换为小写。
- toLocaleUpperCase() 把字符串转换为大写。
- toLowerCase() 把字符串转换为小写。
- toUpperCase() 把字符串转换为大写。
- toString() 返回字符串。
- valueOf() 返回某个字符串对象的原始值。

#### 数组常用的函数


- concat() 连接两个或更多的数组，并返回结果。
- join() 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。
- pop() 删除并返回数组的最后一个元素 ##
- push() 向数组的末尾添加一个或更多元素，并返回新的长度。##
- reverse() 颠倒数组中元素的顺序。 ##
- shift() 删除并返回数组的第一个元素 ##
- slice() 从某个已有的数组返回选定的元素
- sort() 对数组的元素进行排序 ##
- splice() 删除元素，并向数组添加新元素。 ##
- split() 分割数组

- toString() 把数组转换为字符串，并返回结果。

- unshift() 向数组的开头添加一个或更多元素，并返回新的长度。 ##
- valueOf() 返回数组对象的原始值。

map,filter,forEach,some,every等不改变原数组

链接：https://www.imooc.com/article/23750



###　构造函数,实例与原型对象的关系

![](file:///D:/nodejs/electron/mind-map/resources/pictures/prototype.png)

	var Person = function (name) { this.name = name; }//person是构造函数
	var o3personTwo = new Person('personTwo')//personTwo是实例


![](file:///D:/nodejs/electron/mind-map/resources/pictures/bV8wdm.png)

#### 原型对象都有一个默认的constructor属性指向构造函数