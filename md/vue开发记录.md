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