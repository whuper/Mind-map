obj.__proto__ === obj.constructor.prototype

Array.prototype = 普通对象
Function.prototype = 空函数对象

Object.prototype.proto === null

Object.__proto__ === Function.prototype

Function.prototype.constructor === Function



###函数的__proto__是空函数对象
所有构造器（含内置及自定义）的proto都是Function.prototype  
所有的构造器都来自于 Function.prototype，甚至包括根构造器Object及Function自身。  

所有构造器都继承了·Function.prototype·的属性及方法。如length、call、apply、bind**
###对象的__proto__是普通对象



###知道了所有构造器（含内置及自定义）的proto都是Function.prototype
###那Function.prototype的proto是谁呢？

####Function.prototype.__proto__ === Object.prototype

这说明所有的构造器也都是一个普通 JS 对象，可以给构造器添加/删除属性等。同时它也继承了Object.prototype上的所有方法：toString、valueOf、hasOwnProperty等

