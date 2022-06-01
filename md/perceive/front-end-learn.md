## 课程体系
入门阶段：

Git、 GitHub、Markdown、 命令行、 编辑器、 语义化、 标签使用、 Form 表单、 切图、 选择器、 常见样式、 浏览器调试、 盒模型、 浮动、 定位、 边距合并、 负边距、 BFC、 居中、 常见布局、 CSS兼容、 字体图标、 编码规范、 静态页面实战等



进阶阶段：

浏览器渲染机制、运算符优先级、函数声明、 函数表达式、 声明前置、 作用域链、 引用类型、 ES5数组、IIFE 对象拷贝、 字符串/数组/Math/正则、 DOM增删改查、 事件模型(冒泡、捕获、事件代理、取消默认)、 BOM、 闭包、 服务器搭建、 动画、 Ajax(Mock数据)、 跨域、 jQuery DOM操作/属性操作/事件/Ajax、 Promise、日常效果实现



高级阶段：

原型、 原型链、 继承、 this、 **模块模式**、**发布订阅模式**、Tab组件/轮播组件/曝光组件/事件管理模块封装、BootStrap源码解析、

 AMD/CMD/UMD规范、

Require.js/R.js、 Node入门、 NPM使用(开发命令行工具)、 工程化(Gulp、NPM Script)、 WebPack入门、 Less、 Flex布局、 移动端适配、 HTTP头/状态码/缓存处理、 Web安全、 CSS3效果、PostCSS、JQuery源码解析、 JQuery插件编写等



毕设阶段：可选一个或者多个项目，如Vue.js项目、Node.JS项目、React项目、小程序项目等。1V1约聊、简历辅导、面试辅导、就业推荐等

## 课程精品内容

软件安装

1. Sublime Text 3 / VSCode / WebStorm 的安装与使用

2. Git Bash 的安装与使用

3. Node.js 的安装与使用

4. npm 的使用



程序员基础

1. 命令行基础

2. 字符编码

2. 内存基础

3. 算法与数据结构基础



框架（Vue & React）

1. 框架特性全介绍

2. 框架基本原理

3. 框架的使用

4. 框架实战



后端

1. **HTTP** 基础（请求与响应）

2. HTTP 进阶（Cookie、缓存、Session 等）

3. 自制一个 Web 服务器

4. 用 GitHub 和 LeanClound 做一个应用



HTML 5 / CSS 3  

1. 常见标签的使用

2. 移动端页面开发（移动端优先）

3. 响应式页面开发

4. 仿英雄联盟官网等



JavaScript （包括 ES 6/7/8）

1. 最透彻的 JS 基础教学

2. 自制 jQuery、自制各种组件

3. 实现一个手机上的 canvas 画板

4. 网易云音乐页面开发



套路与模式

1. Promise、async 的使用

2. 闭包、立即执行函数的使用

3. CommonJS、AMD、ES Modules的使用

4. 常见代码优化手段

* 尽量避免全局变量
* 最小化语句数  
* 优化循环
* 使用innerHTML。
* 使用事件委托
* 使用数组和对象字面量, 不要使用构造函数


5. Web 性能优化手段

6. MVC 与 MVVM 的理解


## JavaScript 设计模式

### JSONP 的缺点以及安全隐患

- 它只支持GET请求而不支持POST等其它类型的HTTP请求
- jsonp在调用失败的时候不会返回各种HTTP状态码。
- 缺点是安全性。万一假如提供jsonp的服务存在页面注入漏洞，即它返回的javascript的内容被人控制的。那么结果是什么？所有调用这个 jsonp的网站都会存在漏洞

### Async & Await 的使用

### postMessage 的安全隐患

### token的实现原理


### 前端路由的实现原理

#### hash 实现
hash 是 URL 中 hash (#) 及后面的那部分，常用作锚点在页面内进行导航，改变 URL 中的 hash 部分不会引起页面刷新

通过 hashchange 事件监听 URL 的变化，改变 URL 的方式只有这几种：通过浏览器前进后退改变 URL、通过<a>标签改变 URL、通过window.location改变URL，这几种情况改变 URL 都会触发 hashchange 事件


### 对象合并

遍历赋值法 
Object.assign()
JQuery的extend

### 回调函数，Promise,async/await三者的区别

https://www.cnblogs.com/onesea/p/13488697.html


这种写法非常「同步」，所以我们认为 async / await 就是 Promise 的语法糖。

解决异步流程问题，promise是约定，而async更优雅。
区别

Promise是es6里的，async是es7了


### es6 新增的 symbol 对象

## 彻底理解同步、异步和事件循环(Event Loop)

- 单线程
- 同步和异步

- 异步过程的构成要素:

 	1 发起函数(或叫注册函数) 2 回调函数callbackFn

- 消息队列和事件循环

> 上文讲到，异步过程中，工作线程在异步操作完成后需要通知主线程。那么这个通知机制是怎样实现的呢？答案是利用消息队列和事件循环。
> 
> 用一句话概括：

工作线程将消息放到消息队列，主线程通过事件循环过程去取消息。

- 消息队列：消息队列是一个先进先出的队列，它里面存放着各种消息。

- 事件循环：事件循环是指主线程重复从消息队列中取消息、执行的过程。




### 招 web 初级，中级，高级前端如何判断技术标准，熟练使用 vue，怎么界定？

web 初级：根据设计图切静态页，会 jQuery，会 todlist，熟悉常用标签，懂盒子模型。

web 中级：会 vue，会 c3 动画，懂原型链，懂事件代理，懂闭包，懂节流、防抖，会 es6。

web 高级：熟悉 vue，懂原理，能写简化版 vue。熟练 c3 动画，过度动画，熟练 flex 布局，grid 布局，圣杯布局。熟练 es6，懂微任务宏任务，能手写轮子，会 class，懂 http 协议，懂数据类型和算法。

熟练使用 vue：
1，深入理解 MVVM 模型，深入理解组件化。
2，会自定义指令，过滤器，事件修饰符，按键修饰符，keepalIve。
3，组件传值方法，至少 5 中。
4，了解声明周期。
5，懂 vuex 原理，状态管理取值方式至少三中。
6，router 守卫。
7，封装组件。


> 发布于：2021年04月01日
