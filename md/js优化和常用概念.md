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