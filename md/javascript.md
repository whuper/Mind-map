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