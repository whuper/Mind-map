
# 用户(一般对应企业)

## 应用(和角色对应) 有唯一id

### 工程

#### 产品,通道,规则引擎

##### 设备


## 登录过程

### /iotapi/login

##### 请求
{"username":"test","password":"iotn2n.com","_method":"GET","_ApplicationId":"shuwa","_JavaScriptKey":"webapi","_ClientVersion":"js2.12.0","_InstallationId":"4a5c31b0-6fbf-40eb-864b-a8822551ba1b"}


##### response

{"ACL":{"GQiTGNKcaC":{"read":true,"write":true},"role:developer":{"read":true}},"createdAt":"2020-04-08T12:27:18.896Z","email":"test@iotn2n.com","emailVerified":true,"nick":"测试帐号","objectId":"GQiTGNKcaC","phone":"","roles":[{"alias":"tyApRskkxw","name":"tyApRskkxw"},{"alias":"开发者","name":"developer"},{"alias":"8R1iBSpyZG","name":"8R1iBSpyZG"}],"sessionToken":"r:6c6292e6e7ae8a964c9fa563604b76a6","updatedAt":"2020-04-10T12:36:08.242Z","username":"test"}

### /api/apihub

	method:get

		{
			access_token: "r:b53667b3f0ef0af98fa5e7fa85b3a368"
			appid: "tyApRskkxw"
			dashboard: "/roles/platform_overview"
			desc: "file"
			expires_in: 8000
			file: "http://file.iotn2n.com/shapes/upload"
			graphql: "http://cad.iotn2n.com:5080/iotapi/graphql"
			rest: "http://cad.iotn2n.com:5080/iotapi"
		}

### /iotapi/classes/Navigation

//获取导航菜单



#### topo

https://github.com/phynos/WebTopo


		在使用工控软件中，我们经常提到组态一词，组态英文是“Configuration”，其意义究竟是什么呢？简单的讲，组态就是用应用软件中提供的工具、方法，完成工程中某一具体任务的过程。
		与硬件生产相对照，组态与组装类似。如要组装一台电脑，事先提供了各种型号的主板、机箱、电源、CPU、显示器、硬盘、光驱等，我们的工作就是用这些部件拼凑成自己需要的电脑。当然软件中的组态要比硬件的组装有更大的发挥空间，因为它一般要比硬件中的“部件”更多，而且每个 “部件” 都很灵活，因为软部件都有内部属性，通过改变属性可以改变其规格（如大小、形状、颜色等）。
		
		在组态概念出现之前，要实现某一任务，都是通过编写程序（如使用BASIC , C , FORTRAN等）来实现的。编写程序不但工作量大、周期长，而且容易犯错误，不能保证工期。组态软件的出现，解决了这个问题。对于过去需要几个月的工作，通过组态几天就可以完成。
		组态软件是有专业性的。一种组态软件只能适合某种领域的应用。组态的概念最早出现在工业计算机控制中。如DCS(集散控制系统)组态，PLC（可编程控制器）梯形图组态。人机界面生成软件就叫工控组态软件。其实在其他行业也有组态的概念，人们只是不这么叫而已。如AutoCAD，PhotoShop，办公软件(PowerPoint)都存在相似的操作，即用软件提供的工具来形成自己的作品，并以数据文件保存作品，而不是执行程序。组态形成的数据只有其制造工具或其他专用工具才能识别。但是不同之处在于，工业控制中形成的组态结果是用在实时监控的。组态工具的解释引擎，要根据这些组态结果实时运行。从表面上看，组态工具的运行程序就是执行自己特定的任务。
		虽然说组态就是不需要编写程序就能完成特定的应用。但是为了提供一些灵活性，组态软件也提供了编程手段，一般都是内置编译系统，提供类BASIC语言，有的甚至支持VB。


##### 左侧列表
WebTopo-master\src\components\topo\TopoToolbox.vue


#### 点击左侧的svg组件,报jquery不存在的问题


		<embed :src="value.info.style.url" :width="20" :height="20" style="pointer-events: none;text-align:center"
										type="image/svg+xml"
										pluginspage="http://www.adobe.com/svg/viewer/install/" />



#### 组态数据保存

##### 应用

report表 **质检项目**->子项目管理(保存了product的id)

product表 | config 字段(新建**检测任务**时候,从product表里取出产品和config字段 by Id) 

device表 | basedata 字段,web组态取证数据 


PumpClient表 检测任务 -> 取证

##### 平台

把绘制后的**组态数据**保存到product表的config字段

产品这里绘制用来给设备里面展示数据

产品 -> 配置 -> 物模型 -> 新增自定义属性

		点绘制 转到web组态内, 修改**数据->物模型配置**属性 为控件添加刚刚新增的属性,并保存

在 产品下添加 设备 -> 点击 视图

---

D:\msys64\home\wenhao\shuwa_vue\WebTopo-master\src\components\topo\TopoProperties.vue
D:\msys64\home\wenhao\shuwa_vue\WebTopo-master\src\components\topo\TopoRender.vue


vue上传图片插件和图片查看插件

https://github.com/waynecz/vue-img-inputer/


#### 原型案例

https://www.axure.com.cn/resource/

https://axhub.im/pro/5a88a10a43a0d992/#g=1&p=%E9%A6%96%E9%A1%B5




## topo

TopoBase.vue 注册控件 (统一导入,导出)

TopoMain.vue 底部状态栏,尺子

TopoProperties.vue 右侧属性面板



定义数据文件（参见 \src\components\topo\data-toolbox下的json文件）

新增控件，根据数据文件的数据自己实现显示方式（在\src\components\topo\control下新增控件，继承组件，可参考其他组件实现方式，整个思想就是利用第一步的数据绘制dom节点或canvas图像）

注册控件到工具栏（在TopoToolbox.vue中）

注册控件（在TopoBase.vue中）


### App.vue

		<template>
			<div id="q-app">
				<router-view />
			</div>
		</template>


### TopoLayout.vue (layouts\TopoLayout.vue)

		<template>
		<router-view />
		</template>


### Editor.vue(pages\topo\Editor.vue)

			<template>
			<div class="topo-editor">
					<WresizePanel3 class="full-height">
							<template v-slot:left>
									<TopoToolbox ref="topoToolbox" class="topo-toolbox" />
							</template>

							<template v-slot:center>
									<TopoMain ref="topoMain" class="topo-main" />
							</template>

							<template v-slot:right>
									<TopoProperties ref="topoProperties" class="topo-properties" />
							</template>
					</WresizePanel3>
			</div>
			</template>


##### 在editor.vue中引入组件 WresizePanel3,TopoToolbox, TopoMain, TopoProperties


##### WresizePanel3(components\panel\WresizePanel3.vue)中有3个slot(插槽),分别引入3个组件

WresizePanel3中三个div可拖拽

##### TopoMain(components\topo\TopoMain.vue引入ruler(components\topo\ruler.vue)

底部的状态栏加按钮,外加尺子


#### 图片背景和basedata

layerStyle方法中设置style样式,背景图片 configData

		vm.configData =	`/classes/Device/` response.basedata;



src\components\topo\util\jsonArray.js


---


## 预览窗口(平台用,deviceId)

Fullscreen.vue(pages\topo\Fullscreen.vue) -> TopoRender.vue(components\topo\TopoRender.vue)

topo-render引入了TopoBase(components\topo\TopoBase.vue)


		const routes = [
			{
				path: '/',
				component: () => import('layouts/TopoLayout.vue'),
				children: [
					{
						path: '', component: () => import('pages/topo/Editor.vue')
					}
				]
			},
			{
				path: '/fullscreen', name: 'TopoFullscreen',component: () => import('pages/topo/Fullscreen.vue')
			}
		]



http://192.168.2.18:9527/iot/pump#/dashboard

http://192.168.2.18:9527/iot/pump#/login


### chrome://inspect/#devices



#### 192.168.2.18


fullscreen?standard=1N8cU1cdAf&pumpclient=9D2pgXTPiG&devicesid=5zWOHnSOQj



Qpanel v-for循环 QRouteTab 子路由





### 预览页组态按钮的点击事件

在toporender中处理


<component> 元素是vue 里面的一个内置组件。

在<component>里面使用 v-bind: is，可以实现动态组件的效果。


	保存到数据库里 

	文件上传弹框列表

	右侧任务列表,从report服务里取 classes/PumpClient

	左侧列表平板上无法点击的bug(可能是事件传递问题,可以考虑直接调用子组件)


图片比例适应屏幕  如果调整,部件的位置就乱了!

	服务器设置让axios跨域 

	图标更换

	android平板上获取不到cookie


https://github.com/think2011/localResizeIMG


### android平板调试如何查看控制台信息

usb调试连接chrome://inspect/#devices


1920 * 1200的android屏幕


/2 960 * 600
/3 640 * 400
/4 480 * 300


A4宽高 

分辨率是72像素/英寸时 595×842

150像素/英寸 1240×1754 


### DPR

phone5下device-width=320
iphone6下是375
iphone6+下是414


iPad Landscape Width

1024px

iPad Landscape Height

768px


#### Fullscreen与 topoEditor 处理state的写法不同 注意区分

Fullscreen在代码里获取state是通过getter访问器


### 主页顶部菜单在 navbar->Components/sidebar/index.vue->SidebarItem.vue->(item.vue,link.vue)

上面的菜单组件是 vue-admin-template项目自带的,很累赘

el-menu组件( NavMenu 导航菜单)

sidebar->index.vue  computed熟悉的routes变量

login/index.vue里设置了太多异常的cookie变量

### topo-util.js
		//优先匹配map，否则将自动匹配
		topoUtil.parseViewName = function(component) {
			var viewName = topoUtil.viewRegisterMap[component.type];
			// console.log("viewName :", viewName, component.type);
			if (viewName == undefined) {
				console.info(
					`没有手动配置组件映射，将根据数据的type自动匹配，当前组件类型=${component.type}`
				);
				viewName = "view-" + component.type;
			}
			return viewName;
		};



### 主容器在 app-main

### 底部菜单在TagsView里


	toolbox: jsonArray
	import jsonArray from "./util/jsonArray";


https://tower.im/


$vm.$globalConfig.serverURL = '/'

#### element-ui表格如何在模板中获取当前行的index索引

		<el-table-column type="expand" width="150">
							<template slot-scope="props">
									{{props.$index}}
							</template>
		</el-table-column>

	
### android把网址加到主屏幕


    // 外部url访问
    handleClickVisit(scope) {
      let index = scope.$index;
      let productIdentifier = this.tableData[index].productIdentifier;
      let url =
        window.location.origin + "/iot/" + productIdentifier + "#/login";
      window.open(url, "__blank");
    },

$message.error -> $message
$message.warning -> $message
$message.success -> $message


		// 根据typeof判断对象也不太准确

		表达式	                      返回值

		typeof undefined	       'undefined'
		typeof null	               'object'
		typeof true	               'boolean'
		typeof 123	               'number'
		typeof "abc"	           'string'
		typeof function() {}	   'function'
		typeof {}	               'object'
		typeof []	               'object'


### 同一域名不同的端口也可以共享cookie

attach(className,objectId,className,objectId)

attach(
{
className:'',
objectId:'',
fieldName:''
},{
className:'',
rowId:'objectId'
}
)



### 405 methond not allowed

请检查请求接口的方法名,是否正确

#### 接口报403 (Forbidden)


1. 检查表的acl
2. 表的Security

3. permission表,按name搜索权限

> 平台的#/roles/rolescontrol?

## axios请求

### utilwen.js

	const serviceWen = axios.create({
		baseURL: process.env.BASE_API,
		timeout: 8000
	})



### dev.env.js

	'use strict'
	const merge = require('webpack-merge')
	const prodEnv = require('./prod.env')

	module.exports = merge(prodEnv, {
		NODE_ENV: '"development"',
		BASE_API: '"/api"',
	})


### prod.env.js

	'use strict'
	module.exports = {
		NODE_ENV: '"production"',
		BASE_API: '"/iotapi"'
	}


## /report/pump_empower

classes/Authentication

从这个接口里取 实验室 和 检测单位


src\views\testpumplist\pumplist\Inspection.vue

在这里取出来
inspector_test 123456登录
先把各个方法理清楚

getLaboratoryAndCompany


测试台体 从device取出来以后过滤

## /user

          acl.setRoleReadAccess(item.name,true)
          acl.setRoleWriteAccess(item.name,true)

          acl.setReadAccess(this.nowuserid, true);
          acl.setWriteAccess(this.nowuserid, true);

### vue模版中可以使用原型函数吗



### form里的prop用来验证规则


### vue中视图和控制器变量不一致,请检查字母大小写拼写


### parse数据库的权限有两级,一种是acl(access control list) 一种是class

还有permission




实验室固定写死,检测仪挂到某一个部门(实验室)下面


### 产品分组


parse数据库的 relation和 pointer区别



---

device表

basedata.index 不应该都等于1



在APP.vue中通过url获取参数productId来判断是否是从平台转过来的

set_Config_Data 的初始化也在 APP.vue里



### 图片上传模块化

### webpack chrome 显示真实的请求地址

无法显示


### topo 无法跳到login!!


权限过期以后axios返回状态 与 location.href = '/#/login' 冲突 




### 取证格式

	
	平板,照相机,二次软件取证终端,二次软件审核 视频取证,录音取证
	dateType:['tablet','camera','secondarySFTerminal','secondarySwAudit','videotape',voiceForensics]
	step:1,2,3,4
	reportId
	controlId:identifer


evidence.json type


		<div id="app">
				<div v-if="type === 'A'">
					A
				</div>
				<div v-else-if="type === 'B'">
					B
				</div>
				<div v-else-if="type === 'C'">
					C
				</div>
				<div v-else>
					Not A/B/C
				</div>
		</div>


			{
			"text": ["性能曲线","现场监控","视频","音频","图片","材料",],
                "type": "image",
                "dataType":["image","video","liveMonitor","audio","file","performanceCurve"], //数据类型
                "deviceType": "secondarySFTerminal", //设备 数据来源
                
                }



								{
								status:0(正常),1(异常)  ,	message:'****'// 
								status:0(正常),1(异常),			message:''// 

								status:0(正常),1(异常),			message:''// 
								status:0(正常),1(异常),			message:''// 
								status:0(正常),1(异常),			message:''// 
								status:0(正常),1(异常),			message:''// 
								
								}









### 待完成

组件加入step字段

查清楚 上传的图片url在什么时候,如何保存的


"sourceType":'产品名称' 

获取设备列表

修正系数,修正偏移


### vue中mounted中无法获取到dom元素

解决 : 加上$nextTick和异步setTimeout，延迟获取dom的代码的执行


弹框里的图片列表


组态里 url报错的bug

#### 组态的网关子产品和物模型配置tab栏, 名称匹配不上,且select没有选项


### nodeType==0 设备

物模型配置

 v-model="wumoxing.identifier" 对应组件里的wumoxing identifier

 deviceOptionsWen : JSON.parse(localStorage.getItem("wumoxing"));


### nodeType==1 网关子产品
product 来自 productId

productlist :  JSON.parse(localStorage.getItem("productlist"));

#### 在app.vue里获取产品详情,localStorage.setItem  wumoxing和 productlist



### vue 里 this.$parent 作用 this.$refs
this.$parent 可以访问到父组件 上所有的 data(){ 里的数据信息和生命周期方法，methods里的方法 }！


vue $root和$parent都能够实现访问父组件的属性和方法，两者的区别在于，如果存在多级子组件，通过parent 访问得到的是它最近一级的父组件，通过root 访问得到的是根父组件

实测都不可用 !!!


  // 用来从父级组件聚焦输入框
  focus: function () {
    this.$refs.input.focus()
  }


---

左侧子模版,排序不对 basedata.index 字段


---

全局搜索 Parse.Query


 localStorage.setItem("productlist", JSON.stringify(response));


		 myChart.dispatchAction({
											type: 'downplay',
											seriesIndex: 0,
											dataIndex: 0
									});




https://github.com/linwalker/render-html-to-pdf

fbe541d7d2c2a8ea8ecfd952367234a27a61272a


通过角色来判断不同按钮的显示

---

测试员 liou_test - 取证

审核员 qc_inspector - 审核



vue 循环输出select ? 直接输出按钮吧,点击出现弹框 !
