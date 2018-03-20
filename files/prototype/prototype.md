# JS 原型与原型链

##一. 普通对象与函数对象
JavaScript 中，万物皆对象！但对象也是有区别的。  
分为普通对象和函数对象，Object 、Function 是 JS 自带的函数对象

##二. 构造函数

二. 构造函数
我们先复习一下构造函数的知识：
    
    function Person(name, age, job) {
     this.name = name;
     this.age = age;
     this.job = job;
     this.sayName = function() { alert(this.name) } 
    }
    var person1 = new Person('Zaxlct', 28, 'Software Engineer');
    var person2 = new Person('Mick', 23, 'Doctor');
上面的例子中 person1 和 person2 都是 Person 的实例。这两个实例都有一个 constructor （构造函数）属性，该属性（是一个指针）指向 Person。 即：

      console.log(person1.constructor == Person); //true
      console.log(person2.constructor == Person); //true
我们要记住两个概念（构造函数，实例）：
###person1 和 person2 都是 构造函数 Person 的实例
一个公式：
###实例的构造函数属性（constructor）指向构造函数。

##三. 原型对象

在 JavaScript 中，每当定义一个对象（函数也是对象）时候，对象中都会包含一些预定义的属性。其中每个函数对象都有一个prototype 属性，这个属性指向函数的原型对象。
    function Person() {}
    Person.prototype.name = 'Zaxlct';
    Person.prototype.age  = 28;
    Person.prototype.job  = 'Software Engineer';
    Person.prototype.sayName = function() {
      alert(this.name);
    }
      
    var person1 = new Person();
    person1.sayName(); // 'Zaxlct'
    
    var person2 = new Person();
    person2.sayName(); // 'Zaxlct'
    
    console.log(person1.sayName == person2.sayName); //true




我们得到了本文第一个「定律」：

####每个对象都有 __proto__ 属性，但只有函数对象才有 prototype 属性


原型对象其实就是普通对象（但 Function.prototype 除外，它是函数对象，但它很特殊，他没有prototype属性（前面说道函数对象都有prototype属性））

其实它还有一个默认的属性：constructor

> 在默认情况下，所有的原型对象都会自动获得一个 constructor 属性，这个属性（是一个指针）指向 prototype 属性所在的函数（构造函数Person）

### 即：
### Person.prototype.constructor == Person


这两个「公式」好像有点联系：

> person1.constructor == Person  
> Person.prototype.constructor == Person  
person1 为什么有 constructor 属性？那是因为 person1 是 Person 的实例。    
那 Person.prototype 为什么有 constructor 属性？？同理， Person.prototype （你把它想象成 A） 也是Person 的实例。  
也就是在 Person 创建的时候，创建了一个它的实例对象并赋值给它的 prototype，基本过程如下：

>  var A = new Person();   
>  Person.prototype = A;  
###结论：原型对象（Person.prototype）可以理解成是 构造函数（Person）的一个实例???。

###原型对象是在函数创建的时候自动获得的一个对象，并不是构造函数的一个实例。

**原型对象其实就是普通对象（但 Function.prototype 除外，它是函数对象，但它很特殊，他没有prototype属性（前面说道函数对象都有prototype属性））。**


[https://www.jianshu.com/p/dee9f8b14771](https://www.jianshu.com/p/dee9f8b14771)

> （上面的例子中 person1 和 person2 都是 Person 的实例。这两个实例都有一个 constructor （构造函数）属性。  
> --------这个好像写的不对，person1 和 person2.其实并没有constructor 这个属性，这是属性是属于Person的原型对象的。  
> 只是person1 和 person2和可以继承原型对象的  constructor这个属性。还有person1与Person2这两个实例其实与构造函数Person并没有直接关系，person1与Person2是与Person的原型对象才有直接关系。  
> 
> （我们要记住两个概念（构造函数，实例）：  
> person1 和 person2 都是 构造函数 Person 的实例   
> 一个公式：  
> 实例的构造函数属性（constructor）指向构造函数。）这个总结好像有问题......

##四. __proto__

JS 在创建对象（不论是普通对象还是函数对象）的时候，都有一个叫做__proto__ 的内置属性，用于指向创建它的构造函数的原型对象。  
对象 person1 有一个 __proto__属性，创建它的构造函数是 Person，构造函数的原型对象是 Person.prototype ，所以：  
###person1.__proto__ == Person.prototype

	Person.prototype.constructor == Person;
	    
	person1.__proto__ == Person.prototype;  
		
	person1.constructor == Person;
	
##五. 构造器

熟悉 Javascript 的童鞋都知道，我们可以这样创建一个对象：  
var obj = {}  
它等同于下面这样：   
var obj = new Object()

obj 是构造函数（Object）的一个实例。所以：  

	obj.constructor === Object  
	obj.__proto__ === Object.prototype

新对象 obj 是使用 new 操作符后跟一个构造函数来创建的。构造函数（Object）本身就是一个函数（就是上面说的函数对象），它和上面的构造函数 Person 差不多。只不过该函数是出于创建新对象的目的而定义的。所以不要被 Object 吓倒。

同理，可以创建对象的构造器不仅仅有 Object，也可以是 Array，Date，Function等。
所以我们也可以构造函数来创建 Array、 Date、Function

	var b = new Array();
	b.constructor === Array;
	b.__proto__ === Array.prototype;
	
	var c = new Date(); 
	c.constructor === Date;
	c.__proto__ === Date.prototype;
	
	var d = new Function();
	d.constructor === Function;
	d.__proto__ === Function.prototype;
###这些构造器都是函数对象

##七. 函数对象 （复习一下前面的知识点）

所有函数对象的proto都指向Function.prototype，它是一个空函数（Empty function）

	Number.__proto__ === Function.prototype  // true
	Number.constructor == Function //true
	
	Boolean.__proto__ === Function.prototype // true
	Boolean.constructor == Function //true
	
	String.__proto__ === Function.prototype  // true
	String.constructor == Function //true
	
	// 所有的构造器都来自于Function.prototype，甚至包括根构造器Object及Function自身
	Object.__proto__ === Function.prototype  // true
	Object.constructor == Function // true
	
	// 所有的构造器都来自于Function.prototype，甚至包括根构造器Object及Function自身
	Function.__proto__ === Function.prototype // true
	Function.constructor == Function //true
	
	Array.__proto__ === Function.prototype   // true
	Array.constructor == Function //true
	
	RegExp.__proto__ === Function.prototype  // true
	RegExp.constructor == Function //true
	
	Error.__proto__ === Function.prototype   // true
	Error.constructor == Function //true
	
	Date.__proto__ === Function.prototype    // true
	Date.constructor == Function //true
	JavaScript中有内置(build-in)构造器/对象共计12个（ES5中新加了JSON），这里列举了可访问的8个构造器。剩下如Global不能直接访问，Arguments仅在函数调用时由JS引擎创建，Math，JSON是以对象形式存在的，无需new。它们的proto是Object.prototype。如下
	
		Math.__proto__ === Object.prototype  // true
		Math.construrctor == Object // true
		
		JSON.__proto__ === Object.prototype  // true
		JSON.construrctor == Object //true
上面说的函数对象当然包括自定义的。如下
		
		// 函数声明
		function Person() {}
		// 函数表达式
		var Perosn = function() {}
		console.log(Person.__proto__ === Function.prototype) // true
		console.log(Man.__proto__ === Function.prototype)    // true

这说明什么呢？

** 所有的构造器都来自于 Function.prototype，甚至包括根构造器Object及Function自身。所有构造器都继承了·Function.prototype·的属性及方法。如length、call、apply、bind**

（你应该明白第一句话，第二句话我们下一节继续说，先挖个坑：））
Function.prototype也是唯一一个typeof XXX.prototype为 function的prototype。其它的构造器的prototype都是一个对象（原因第三节里已经解释过了）。如下（又复习了一遍）：
	
	console.log(typeof Function.prototype) // function
	console.log(typeof Object.prototype)   // object
	console.log(typeof Number.prototype)   // object
	console.log(typeof Boolean.prototype)  // object
	console.log(typeof String.prototype)   // object
	console.log(typeof Array.prototype)    // object
	console.log(typeof RegExp.prototype)   // object
	console.log(typeof Error.prototype)    // object
	console.log(typeof Date.prototype)     // object
	console.log(typeof Object.prototype)   // object

噢，上面还提到它是一个空的函数，console.log(Function.prototype) 下看看（留意，下一节会再说一下这个）

知道了所有构造器（含内置及自定义）的__proto__都是Function.prototype，那Function.prototype的__proto__是谁呢？
相信都听说过JavaScript中函数也是一等公民，那从哪能体现呢？如下

	console.log(Function.prototype.__proto__ === Object.prototype) // true
	
这说明所有的构造器也都是一个普通 JS 对象，可以给构造器添加/删除属性等。同时它也继承了Object.prototype上的所有方法：toString、valueOf、hasOwnProperty等。（你也应该明白第一句话，第二句话我们下一节继续说，不用挖坑了，还是刚才那个坑；））

最后Object.prototype的proto是谁？
###Object.prototype.__proto__ === null // true
已经到顶了，为null。(读到现在，再回过头看第五章，能明白吗？)

	Function.prototype.__proto__ === Object.prototype
	true
	Array.prototype.__proto__ === Object.prototype
	true
	Number.prototype.__proto__ === Object.prototype
	true
	Object.prototype.__proto__ === Object.prototype
	false


##八. Prototype

> 在 ECMAScript 核心所定义的全部属性中，最耐人寻味的就要数 prototype 属性了。  
> 对于 ECMAScript 中的引用类型而言，prototype 是保存着它们所有实例方法的真正所在。   
> 换句话所说，诸如 toString()和 valuseOf() 等方法实际上都保存在 prototype 名下，只不过是通过各自对象的实例访问罢了。

####——《JavaScript 高级程序设计》第三版 P116	





