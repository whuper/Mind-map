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