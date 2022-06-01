## Redux

- action 这些是由模块发起的通信请求，其实就是一个数据对象
- Reducers 指定了应用状态的变化如何响应 actions 并发送到 store 的，记住 actions 只是描述了有事情发生了这一事实，并没有描述应用如何更新 state。
- store负责存储状态并可以被react api回调，发布action.

action 来描述“发生了什么”
reducers 来根据 action 更新 state 的用法。

Store 就是把它们联系到一起的对象。

Store 有以下职责：

- 维持应用的 state；
- 提供 getState() 方法获取 state；
- 提供 dispatch(action) 方法更新 state；
- 通过 subscribe(listener) 注册监听器;
- 通过 subscribe(listener) 返回的函数注销监听器。
- 再次强调一下 Redux 应用只有一个单一的 store。当需要拆分数据处理逻辑时，你应该使用 reducer 组合 而不是创建多个 store。


## 如何理解React的声明式

### 声明式与命令式

命令式编程：命令“机器”如何去做事情(how)，按照你的命令实现。

声明式编程：告诉“机器”你想要的是什么(what)，让机器想出如何去做


声明式的好处是您不会陷入表示状态的实现细节中。您要委派保持应用程序视图一致的组织组成部分，因此您只需要担心状态。

想象您有一个管家，你想吃晚饭。您会逐步告诉他们如何做饭。
您必须提供以下说明：

```
Go to the kitchen
Open fridge
Remove chicken from fridge
...
Bring food to the table

```
在声明性世界中，您只需描述您想要的内容

```
I want dinner with chicken.
```