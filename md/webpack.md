
## webpack-dev-server

webpack-dev-server是一个小型的Node.js Express服务器,它使用webpack-dev-middleware来服务于webpack的包,除此自外，它还有一个通过Sock.js来连接到服务器的微型运行时.

### 自动刷新
webpack-dev-server支持两种模式来自动刷新页面.

1. iframe模式(页面放在iframe中,当发生改变时重载)

1. inline模式(将webpack-dev-sever的客户端入口添加到包(bundle)中)

#### inline模式
inline模式下我们访问的URL不用发生变化,启用这种模式分两种情况

#### 1 当以命令行启动webpack-dev-server时,需要做两点：

> 1 在命令行中添加--inline命令
> 
> 2 在webpack.config.js中添加devServer:{inline:true}
 
#### 2 当以Node.js API启动webpack-dev-server时,我们也需要做两点:

	1 由于webpack-dev-server的配置中无inline选项,我们需要添加webpack-dev-server/client?http://«path»:«port»/到webpack配置的entry入口点中. 	
	2 将<script src="http://localhost:8080/webpack-dev-server.js"></script>添加到html文件中

---

	var config = require("./webpack.config.js");
	var webpack = require('webpack');
	var WebpackDevServer = require('webpack-dev-server');

	config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");
	
	var compiler = webpack(config);
	var server = new WebpackDevServer(compiler, {
	    contentBase:'build/',
	    publicPath: "/assets/"
	});
	server.listen(8080);

在Node中运行上面的代码即可。

注意：webpack配置中的devSever配置项只对在命令行模式有效。


### (Hot Module Replacement)热模块替换

#### 在命令行中运行inline模式，并启用热模块替换
这里只需要多增加 --hot指令就OK了.如下所示.

```
webpack-dev-server --content-base build --inline --hot

```
注意:命令行模式下,webpack.config.js中一定要配置output.publicPath来指定编译后的包(bundle)的访问位置.

#### 在Nodejs API中运行inline模式，并启用热模块替换

这里需要做以下三点:

- 在webpack.config.js的entry选项中添加:webpack/hot/dev-server

- 在webpack.config.js的plugins选项中添加:new webpack.HotModuleReplacementPlugin()

- 在webpack-dev-server的配置中添加：hot:true


## 模块热替换

模块热替换(Hot Module Replacement 或 HMR)是 webpack 提供的最有用的功能之一。它允许在运行时更新各种模块，而无需进行完全刷新。本页面重点介绍实现，而概念页面提供了更多关于它的工作原理以及为什么它有用的细节。

## webpack 热加载基本原理

>  开发一个 React 组件的时候，默认使用了 hmr 插件。每次修改代码后页面直接更新，不需要手动 F5 ，感觉非常惊艳，这体验一旦用上后再也回不去了。
> 
> 当时的 hot reload 实际上配置的是 live reload，也就是每次修改页面刷新。开发小组件每次更新也蛮快的，但如果一个应用应该使用上真正的 hot reload 才比较靠谱。
> 
> 所谓的 hot reload(热加载) 就是每次修改某个 js 文件后，页面局部更新。

#### 基本原理

构建 bundle 的时候，加入一段 HMR runtime 的 js 和一段和服务沟通的 js 。

文件修改会触发 webpack 重新构建，服务器通过向浏览器发送更新消息，浏览器通过 jsonp 拉取更新的模块文件，jsonp 回调触发模块热替换逻辑。

#### 实现
热加载实现主要分为几部分功能

- 服务器构建、推送更新消息
- 浏览器模块更新
- 模块更新后页面渲染

**构建**

热加载是通过内置的 **HotModuleReplacementPlugin** 实现的，构建过程中热加载相关的逻辑都在这个插件中。

#### 总结
热加载只是开发体验的一小步提升，但这个技术背后包含了很多技术的铺垫，慢慢一路发展过来，最终达到让人耳目一新**Hot Reloading with Time Travel**。

webpack 诞生于对 Code Splitting 特性的实现，从 webmake 重写为 webpack 。redux 诞生于 React 热加载探索过程中。

可见对一项看起来不起眼的技术的深入探索是非常值得的，也许某个伟大的开源作品就在探索中诞生了。

## PostCSS 
它提供了一种方式用 JavaScript 代码来处理 CSS。

**它负责把 CSS 代码解析成抽象语法树结构（Abstract Syntax Tree，AST），再交由插件来进行处理**。

插件基于 CSS 代码的 AST 所能进行的操作是多种多样的，比如可以支持变量和混入（mixin），增加浏览器相关的声明前缀，或是把使用将来的 CSS 规范的样式规则转译（transpile）成当前的 CSS 规范支持的格式。

从这个角度来说，PostCSS 的强大之处在于其不断发展的插件体系。目前 PostCSS 已经有 200 多个功能各异的插件。开发人员也可以根据项目的需要，开发出自己的 PostCSS 插件。

### mockjs

### axios

### webpack 插件

html-webpack-plugin 提供html模版

extract-text-webpack-plugin 分离CSS和JS文件

UglifyJsPlugin 压缩JS代码

HotModuleReplacementPlugin

> Hot Module Replacement（HMR）也是webpack里很有用的一个插件，它允许你在修改组件代码后，自动刷新实时预览修改后的效果。
> 
> 在webpack中实现HMR也很简单，只需要做两项配置
> 
> 在webpack配置文件中添加HMR插件；
> 在Webpack Dev Server中添加“hot”参数；

## css-loader 和 style-loader

* css-loader使你能够使用类似@import和url（...）的方法实现require的功能
* style-loader将所有的计算后的样式加入页面中，二者组合在一起使你能够把样式表嵌入webpack打包后的js文件中。

因此，我们这样配置后，遇到后缀为.css的文件，webpack先用css-loader加载器去解析这个文件，遇到“@import”等语句就将相应样式文件引入（所以如果没有css-loader，就没法解析这类语句）

最后计算完的css，将会使用**style-loader**生成一个内容为最终解析完的css代码的style标签，放到head标签里。

> 需要注意的是，loader是有顺序的，webpack肯定是先将所有css模块依赖解析完得到计算结果再创建style标签。因此应该把style-loader放在css-loader的前面（webpack loader的执行顺序是从右到左）。