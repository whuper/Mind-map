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