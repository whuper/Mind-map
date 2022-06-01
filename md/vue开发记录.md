安装 normalize

	npm i normalize.css --save 

main.js

	import 'normalize.css'  

安装：css-loader   和style-loader

	npm install css-loader style-loader  --save-dev


### 方法中操作router

	this.$router.push({ name: 'detail', params: { id: 1 }})

### 方法中改变示例data数据

	const _self = this;

	(res) => {
	
		_self.msg = 'sad';

	}

### 箭头函数的指向

是指定义时候的父级上下文环境,不是指当前调用的

有时候不能用

### 路由嵌套是指视图里嵌套视图,不是指路径

### 计算属性里不能用异步方式改变数据

#### 合理利用created方法

### 在vue中获取dom元素

在vue中可以通过给标签加ref属性，就可以在js中利用ref去引用它

	 <div id="box" ref="mybox">  
	      DEMO  
	    </div>  

	this.$refs.mybox.style.color = 'red';  

### 在vue中获取所有路由链接

	import links from '@/router'

	links.options.routes;

### 服务全局可用:

#### vue插件

Vue.js 的插件应当有一个公开方法 install 。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象：

	MyPlugin.install = function (Vue, options) {
	  // 1. 添加全局方法或属性
	  Vue.myGlobalMethod = function () {
	    // 逻辑...
	  }
	
	  // 2. 添加全局资源
	  Vue.directive('my-directive', {
	    bind (el, binding, vnode, oldVnode) {
	      // 逻辑...
	    }
	    ...
	  })
	
	  // 3. 注入组件
	  Vue.mixin({
	    created: function () {
	      // 逻辑...
	    }
	    ...
	  })
	
	  // 4. 添加实例方法
	  Vue.prototype.$myMethod = function (methodOptions) {
	    // 逻辑...
	  }
	}
	
### mapState 和...mapGetters的区别

 getters是从state派生出来的，两者不相同，所以用mapState拿state，用mapGetters拿getters
 
### 在vue 中使用 vuematerial input聚焦时候宽度增大的问题解决

因为文本框没有初始内容...

### 在vue中使用mock 访问接口报404

因为参数的问题，接口中没有定义参数，在调用的时候，就不能加参数了！否则会报404

### vue常见题


## 全局方法和实例方法

1 全局方法，即可以理解为 window.myGlobalMethod 一样，通过 Vue.myGlobalMethod 来调用，就是一个定义在 Vue 下的静态方法而已

2 实例方法，回想一下 JS 里的类的概念，prototype 原型链的含义，没搞明白的话先去看看这些基础内容。
这里可以这么给你解释，实例方法可以在组件内部，通过 `this.$myMethod` 来调用



### Vue 实现权限控制（异步加载路由）

核心方法就是用 addRoutes() 方法，思路如下：

1.用户登陆成功之后，通过用户ID去获取 当前用户可以访问的路由（动态路由）
2.然后通过 addRoutes() 方法动态添加路由。


在beforeRouterEnter 里做 ?? 


### vue权限控制路由（vue-router 动态添加路由）


用户登录后返回权限菜单，前端根据权限菜单动态添加路由，然后再动态生成菜单栏。

思路如下：

一、定义初始化默认路由。

二、动态配置路由，这里是把所有组件中相应的路由配置成一个个的对象，根据后台返回的菜单tree一个个去匹配。

三、通过匹配，把匹配好的路由数据addRoutes到路由中。

四、为了防止刷新页面后路由数据被清空，这里用判断是否登录的方式，如果已经登陆,从 sessionStorage里再次加载动态路由。


https://blog.csdn.net/qq_28529373/article/details/82685729



