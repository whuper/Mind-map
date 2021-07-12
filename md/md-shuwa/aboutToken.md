### Parse.User.logIn(this.username, this.password)
必须要做的一步


第三方应用 
 sessionToken : 

#####  /iotapi/pumptoken 
访问该接口需要上一步login的token

平台的token,等于平台上 appid和appSecret登录获取的sessionToken

### 


### token存在vuex里刷新页面就没了。

存在cookie里,刷新后还在,但会自动被加到http请求头里,如果不设置期限,默认会话结束就过期



存在sessionstorage里,浏览器关闭时,会消失,手动在地址栏打开新的标签页,获取不到(区别与后台的session)

存在localstorage里,持久(但不能像cookie一样设置有效期),手动打开新的标签也能获取到,对于不变的数据,推荐使用


\$vm.$q.cookies.get("pump_token").topo


## pump 使用accessToken的表
