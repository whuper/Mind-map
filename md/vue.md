### vue案例

- https://github.com/coligo-io/notes-app-vuejs-vuex
- https://github.com/liangxiaojuan/vue-Meizi
- https://github.com/superman66/vue-axios-github
- https://github.com/skyronic/vue-spa
- https://github.com/allan2coder/VUE2-SPA-Tutorial
- https://github.com/alloyteamzy/vue2_blog
- https://github.com/bailicangdu/vue2-happyfri
- https://github.com/keepfool/vue-tutorials
- https://github.com/Awheat/vue2-douban-market


## vuex

mapgetter
mapstate
mapaction

## vue学习过程

#### 声明式渲染
Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统：

	<div id="app">
	  {{ message }}
	</div>
	var app = new Vue({
	  el: '#app',
	  data: {
	    message: 'Hello Vue!'
	  }
	})

#### 在 Vue 中注册组件

	// 定义名为 todo-item 的新组件
	Vue.component('todo-item', {
	  template: '<li>这是个待办项</li>'
	})

现在你可以用它构建另一个组件模板：

	<ol>
	  <!-- 创建一个 todo-item 组件的实例 -->
	  <todo-item></todo-item>
	</ol>

但是这样会为每个待办项渲染同样的文本，这看起来并不炫酷。我们应该能从父作用域将数据传到子组件才对。让我们来修改一下组件的定义，使之能够接受一个 prop：
	
	Vue.component('todo-item', {
	  // todo-item 组件现在接受一个
	  // "prop"，类似于一个自定义特性。
	  // 这个 prop 名为 todo。
	  props: ['todo'],
	  template: '<li>{{ todo.text }}</li>'
	})

#### 创建一个 Vue 实例

	var vm = new Vue({
	  // 选项
	})

除了数据属性，Vue 实例还暴露了一些有用的实例属性与方法。它们都有前缀 $，以便与用户定义的属性区分开来。例如：
	
	var data = { a: 1 }
	var vm = new Vue({
	  el: '#example',
	  data: data
	})
	
	vm.$data === data // => true
	vm.$el === document.getElementById('example') // => true
	
	// $watch 是一个实例方法
	vm.$watch('a', function (newValue, oldValue) {
	  // 这个回调将在 `vm.a` 改变后调用
	})

#### 模板语法
##### 文本(Text)
数据绑定最基本的形式，就是使用 “mustache” 语法（双花括号）的文本插值(text interpolation)：

	<span>Message: {{ msg }}</span>

#### 原始 HTML(Raw HTML)

	<p>使用双花括号语法：{{ rawHtml }}</p>
	<p>使用 v-html 指令：<span v-html="rawHtml"></span></p>

#### 属性(Attributes)

不能在 Vue 模板中的 HTML 属性上使用双花括号语法(mustache)。而是应该使用 v-bind 指令：

	<div v-bind:id="dynamicId"></div>
在属性是布尔类型的一些情况中，v-bind 的作用有点不同，只要值存在就会隐含为 true。在这个例子中：

	<button v-bind:disabled="isButtonDisabled">Button</button>

#### 使用 JavaScript 表达式
到目前为止，我们只实现了将模板绑定到基本的属性键上。然而，Vue.js 实际上能够支持通过完整的 JavaScript 表达式，将模板与任意的数据绑定在一起：

	{{ number + 1 }}
	
	{{ ok ? 'YES' : 'NO' }}
	
	{{ message.split('').reverse().join('') }}
	
	<div v-bind:id="'list-' + id"></div>

#### 指令(Directives)

指令(directive)是带有 v- 前缀的特殊属性

	<p v-if="seen">Now you see me</p>

#### 参数(Arguments)

一些指令能够接收一个“参数”，在指令名称之后以 : 表示。例如，v-bind 指令可以用于响应式地更新 HTML 属性：

	<a v-bind:href="url"> ... </a>
这里 href 是参数，告知 v-bind 指令将元素的 href 属性与表达式 url 的值绑定在一起。

另一个示例是 v-on 指令，用于监听 DOM 事件：

	<a v-on:click="doSomething"> ... </a>
这里，参数是要监听事件的名称

#### 修饰符(Modifiers)

修饰符(modifier)是以 . 表示的特殊后缀，表明应当以某种特殊方式绑定指令。例如，.prevent 修饰符告诉 v-on 指令，在触发事件后调用 event.preventDefault()：

	<form v-on:submit.prevent="onSubmit"> ... </form>

#### v-bind 简写
	<!-- 完整语法 -->
	<a v-bind:href="url"> ... </a>
	
	<!-- 简写 -->
	<a :href="url"> ... </a>
#### v-on 简写
	<!-- 完整语法 -->
	<a v-on:click="doSomething"> ... </a>
	
	<!-- 简写 -->
	<a @click="doSomething"> ... </a>



#### 计算属性

在模板中放入太多的逻辑会让模板过重且难以维护。例如：

	<div id="example">
	  {{ message.split('').reverse().join('') }}
	</div>

对于任何复杂逻辑，应当使用计算属性。
	
	<div id="example">
	  <p>Original message: "{{ message }}"</p>
	  <p>Computed reversed message: "{{ reversedMessage }}"</p>
	</div>
	var vm = new Vue({
	  el: '#example',
	  data: {
	    message: 'Hello'
	  },
	  computed: {
	    // 计算属性的 getter
	    reversedMessage: function () {
	      // `this` 指向 vm 实例
	      return this.message.split('').reverse().join('')
	    }
	  }
	})

计算属性缓存 vs 方法

相比之下，每当触发重新渲染时，**调用方法将总会再次执行函数**

**计算属性 vs 侦听属性**

	<div id="demo">{{ fullName }}</div>
	var vm = new Vue({
	  el: '#demo',
	  data: {
	    firstName: 'Foo',
	    lastName: 'Bar',
	    fullName: 'Foo Bar'
	  },
	  watch: {
	    firstName: function (val) {
	      this.fullName = val + ' ' + this.lastName
	    },
	    lastName: function (val) {
	      this.fullName = this.firstName + ' ' + val
	    }
	  }
	})
上面代码是命令式且重复的。将它与计算属性的版本进行比较：

	var vm = new Vue({
	  el: '#demo',
	  data: {
	    firstName: 'Foo',
	    lastName: 'Bar'
	  },
	  computed: {
	    fullName: function () {
	      return this.firstName + ' ' + this.lastName
	    }
	  }
	})

好得多了，不是吗？


#### class 和 style 绑定

	<div class="static"
	     v-bind:class="{ active: isActive, 'text-danger': hasError }">
	</div>
然后，给定以下 data：
	
	data: {
	  isActive: true,
	  hasError: false
	}
将会渲染为：

	<div class="static active"></div>

绑定对象，也可以无需内联，而是外部引用 data：
	
	<div v-bind:class="classObject"></div>

	data: {
	  classObject: {
	    active: true,
	    'text-danger': false
	  }
	}


我们还可以将 class 和 style 与某个 computed 属性绑定在一起，此 computed 属性所对应的 getter 函数需要返回一个对象。这是一种常用且强大的用法：

	<div v-bind:class="classObject"></div>
	data: {
	  isActive: true,
	  error: null
	},
	computed: {
	  classObject: function () {
	    return {
	      active: this.isActive && !this.error,
	      'text-danger': this.error && this.error.type === 'fatal'
	    }
	  }
	}

#### 数组语法
我们可以向 v-bind:class 传入一个数组，来与 class 列表对应：

	<div v-bind:class="[activeClass, errorClass]"></div>
	data: {
	  activeClass: 'active',
	  errorClass: 'text-danger'
	}
会被渲染为：

	<div class="active text-danger"></div>

#### 数组语法
v-bind:style 的数组语法，可以在同一个元素上，使用多个 style 对象：

	<div v-bind:style="[baseStyles, overridingStyles]"></div>

#### 用 key 控制元素是否可复用

### v-if 和 v-show

v-if 是“真实”的条件渲染，因为它会确保条件块(conditional block)在切换的过程中，完整地销毁(destroy)和重新创建(re-create)条件块内的事件监听器和子组件。

v-if 是惰性的(lazy)：如果在初始渲染时条件为 false，它不会执行任何操作 - 在条件第一次变为 true 时，才开始渲染条件块。

相比之下，v-show 要简单得多 - 不管初始条件如何，元素始终渲染，并且只是基于 CSS 的切换。

通常来说，v-if 在切换时有更高的性能开销，而 v-show 在初始渲染时有更高的性能开销。因此，如果需要频繁切换，推荐使用 v-show，如果条件在运行时改变的可能性较少，推荐使用 v-if。

当与 v-if 一起使用时，**v-for 具有比 v-if 更高的优先级**。


#### 带有 v-if 的 v-for
当它们都处于同一节点时，v-for 的优先级高于 v-if。这意味着，v-if 将分别在循环中的每次迭代上运行。当你只想将某些项渲染为节点时，这会非常有用，如下：

	<li v-for="todo in todos" v-if="!todo.isComplete">
	  {{ todo }}
	</li>
以上只渲染 todos 中未完成的项。

如果你的意图与此相反，是根据条件跳过执行循环，可以将 v-if 放置于包裹元素上（或放置于 <template> 上）。例如：

	<ul v-if="todos.length">
	  <li v-for="todo in todos">
	    {{ todo }}
	  </li>
	</ul>
	<p v-else>No todos left!</p>

译注：

**变化数组方法**：会对原数组操作的数组方法，如 pop(), shift(), unshift(), splice(), sort() 和 reverse()。

**非变化数组方法**：不会对原数组操作、返回新数组的数组方法，如 filter(), concat() 和 slice()。

### 事件处理

#### 监听事件

我们可以使用 v-on 指令监听 DOM 事件，并在事件被触发时执行一些 JavaScript 代码。

	<div id="example-1">
	  <button v-on:click="counter += 1">增加 1</button>
	  <p>上面的按钮被点击了 {{ counter }} 次。</p>
	</div>
	var example1 = new Vue({
	  el: '#example-1',
	  data: {
	    counter: 0
	  }
	})

#### 定义在 methods 对象中的事件处理器

由于许多事件处理器的逻辑很复杂，所以把 JavaScript 代码都保存在 v-on 属性的值中是不可行的做法。这就是为什么 v-on 还可以接收要调用的方法名。

	<div id="example-2">
	  <!-- `greet` 是在下面 methods 中定义的方法名 -->
	  <button v-on:click="greet">Greet</button>
	</div>
	var example2 = new Vue({
	  el: '#example-2',
	  data: {
	    name: 'Vue.js'
	  },
	  // 在 `methods` 对象中定义方法
	  methods: {
	    greet: function (event) {
	      // methods 里的方法中的 `this` 指 Vue 实例
	      alert('Hello ' + this.name + '!')
	      // `event` 是原始 DOM 事件对象
	      if (event) {
	        alert(event.target.tagName)
	      }
	    }
	  }
	})
	
	// 也可以在 JavaScript 中通过 Vue 实例直接调用方法
	example2.greet() // => 'Hello Vue.js!'

#### 定义在行内的事件处理器

除了直接绑定到方法名，我们还可以在行内 JavaScript 语句中使用 methods 方法：

	<div id="example-3">
	  <button v-on:click="say('hi')">Say hi</button>
	  <button v-on:click="say('what')">Say what</button>
	</div>
	new Vue({
	  el: '#example-3',
	  methods: {
	    say: function (message) {
	      alert(message)
	    }
	  }
	})

在行内语句的事件处理器中，有时我们也需要访问原始 DOM 事件对象。可以使用特殊的 $event 变量将它传递给一个方法：

	<button v-on:click="warn('Form cannot be submitted yet.', $event)">
	  Submit
	</button>
	// ...
	methods: {
	  warn: function (message, event) {
	    // 现在，我们可以访问原始事件对象
	    if (event) event.preventDefault()
	    alert(message)
	  }
	}
#### 事件修饰符(Event Modifiers)

	<!-- 停止点击事件冒泡 -->
	<a v-on:click.stop="doThis"></a>
	
	<!-- 提交事件不再重新载入页面 -->
	<form v-on:submit.prevent="onSubmit"></form>
	
	<!-- 修饰符可以链式调用 -->
	<a v-on:click.stop.prevent="doThat"></a>
	
	<!-- 只有修饰符 -->
	<form v-on:submit.prevent></form>
	
	<!-- 添加事件监听器时，使用事件捕获模式 -->
	<!-- 也就是说，内部元素触发的事件先在此处处理，然后才交给内部元素进行处理 -->
	<div v-on:click.capture="doThis">...</div>
	
	<!-- 只有在 event.target 是元素自身时，才触发处理函数。 -->
	<!-- 也就是说，event.target 是子元素时，不触发处理函数 -->
	<div v-on:click.self="doThat">...</div>

使用 v-on:click.prevent.self 会阻止所有点击

而 v-on:click.self.prevent 只阻止元素自身的点击。

#### 按键修饰符(Key Modifiers)

	<!-- 只在 `keyCode` 是 13 时，调用 `vm.submit()` -->
	<input v-on:keyup.13="submit">

记住所有 keyCode 是非常麻烦的事，所以 Vue 提供一些最常用按键的别名：
	
	<!-- 和上面的示例相同 -->
	<input v-on:keyup.enter="submit">
	
	<!-- 也可用于简写语法 -->
	<input @keyup.enter="submit">

#### checkbox

单选 checkbox，绑定到布尔值：

	<input type="checkbox" id="checkbox" v-model="checked">
	<label for="checkbox">{{ checked }}</label>


多选 checkbox，绑定到同一个数组：

	<div id='example-3'>
	  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
	  <label for="jack">Jack</label>
	  <input type="checkbox" id="john" value="John" v-model="checkedNames">
	  <label for="john">John</label>
	  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
	  <label for="mike">Mike</label>
	  <br>
	  <span>勾选的名字是：{{ checkedNames }}</span>
	</div>
	new Vue({
	  el: '#example-3',
	  data: {
	    checkedNames: []
	  }
	})

radio

	<input type="radio" id="one" value="One" v-model="picked">
	<label for="one">One</label>
	<br>
	<input type="radio" id="two" value="Two" v-model="picked">
	<label for="two">Two</label>
	<br>
	<span>选中的是：{{ picked }}</span>

### select
	
	<select v-model="selected">
	  <option disabled value="">请选择其中一项</option>
	  <option>A</option>
	  <option>B</option>
	  <option>C</option>
	</select>
	<span>选中的是：{{ selected }}</span>
	new Vue({
	  el: '...',
	  data: {
	    selected: ''
	  }
	})

#### 多选 select（绑定到一个数组）：

	<select v-model="selected" multiple>
	  <option>A</option>
	  <option>B</option>
	  <option>C</option>
	</select>
	<br>
	<span>选中的是：{{ selected }}</span>


使用 v-for 渲染动态的 option：

	<select v-model="selected">
	  <option v-for="option in options" v-bind:value="option.value">
	    {{ option.text }}
	  </option>
	</select>
	<span>选中的是：{{ selected }}</span>
	new Vue({
	  el: '...',
	  data: {
	    selected: 'A',
	    options: [
	      { text: 'One', value: 'A' },
	      { text: 'Two', value: 'B' },
	      { text: 'Three', value: 'C' }
	    ]
	  }
	})
#### 与 value 属性绑定

对于 radio, checkbox 和 select 的 option 选项，通常可以将 v-model 与值是静态字符串的 value 属性关联在一起（或者，在 checkbox 中，绑定到布尔值）：
	
	<!-- 当选中时，`picked` 的值是字符串 "a"（译者注：如果没有 value 属性，选中时值是 null） -->
	<input type="radio" v-model="picked" value="a">
	
	<!-- `toggle` 的值是 true 或 false -->
	<input type="checkbox" v-model="toggle">
	
	<!-- 当选中第一个选项时，`selected` 的值是字符串 "abc"（译者注：如果没有 value 属性，选中时 selected 值是 option 元素内的文本） -->
	<select v-model="selected">
	  <option value="abc">ABC</option>
	</select>

然而，有时可能需要把 value 与 Vue 实例上的一个动态属性绑定在一起。这时我们可以通过 v-bind 来实现。v-bind 还允许我们将 input 元素的值绑定到非字符串值。

#### checkbox
	
	<input
	  type="checkbox"
	  v-model="toggle"
	  true-value="yes"
	  false-value="no"
	>

> true-value 和 false-value 属性不会影响到 input 元素的 value 属性，这是因为浏览器在提交表单时，并不会包含未被选中的 checkbox 的值。如果要确保表单中，这两个值的一个能够被提交（例如 “yes” 或 “no”），请换用类型是 radio 的 input 元素。

#### select 选项
	<select v-model="selected">
	  <!-- 内联对象字面量 -->
	  <option v-bind:value="{ number: 123 }">123</option>
	</select>

	// 选中时：
	typeof vm.selected // => 'object'
	vm.selected.number // => 123

### 修饰符(modifiers)


- .lazy
- .number
- .trim


## 组件基础

这里是一个 Vue 组件示例：

	// 定义一个新的组件，名称为 button-counter
	Vue.component('button-counter', {
	  data: function () {
	    return {
	      count: 0
	    }
	  },
	  template: '<button v-on:click="count++">你点击了 {{ count }} 次。</button>'
	})


组件(component)，是具有 name 名称的可复用 Vue 实例：当前示例中是 <button-counter>。

我们可以使用 new Vue 创建出一个 Vue 根实例，然后将这个组件作为其中的一个自定义元素(custom element)：

	<div id="components-demo">
	  <button-counter></button-counter>
	</div>
	new Vue({ el: '#components-demo' })

由于组件是可复用的 Vue 实例，它们接收的选项，和在 new Vue 时候的选项相同，例如 data, computed, watch, methods 和生命周期钩子。

唯一的例外是，类似 el 这样，根实例上特有(root-specific)的选项。

可以根据需要，多次重复使用组件：

注意，当点击按钮时，每个按钮都维护彼此独立的 count。这是因为每次使用组件时，都会创建出一个新的组件实例。

**data 必须是一个函数**

组件的 data 选项必须是一个函数，以便每个实例都可以维护「函数返回的数据对象」的彼此独立的数据副本



---
### vuex