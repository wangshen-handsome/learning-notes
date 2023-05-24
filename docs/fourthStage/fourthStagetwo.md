## day02事件、修饰符、表单、生命周期

### 回顾

配置对象中的属性

```
el data methods
```



指令

```
v-text v-html v-bind v-on v-if v-show v-model v-for
```



动态样式

```
class 和 style
```













### 一、综合的案例（学员信息管理）

`学员面试上机题`

```
1、分析产品逻辑，思考相关代码，分析功能结构
2、搭建静态页面
3、实现基本的交互
4、优化项目
```

![image-20220207162248404](/public/img/fourthStage/two/image-20220207162248404.png)



#### bootstrap

```
如何在vue中引入bootstrap?

官网地址：https://www.bootcss.com/

下载命令：npm i bootstrap@3.4.1
```



#### 实现步骤

0、搭建静态页

1、创建假数据，实现列表循环

2、创建用户信息（对象），实现双向数据绑定

3、封装一个添加事件

4、封装一个重置事件

5、封装一个删除事件

6、封装全部删除事件

7、本地存储数据

8、检查本地是否有数据，如果没有，则赋一个空数组，增加、删除、取时都存一下



#### 刷新页面会出现{{}}闪动的问题

```
一、利用 v-text 这个指令去渲染列表，可以解决这个bug（但是过于麻烦，基本不用）
        
二、v-cloak 这个指令专门用于解决这个问题，它是全局解决
    方法：在根标签上添加v-cloak这个指令，并在style中添加样式display:none
```

```html
<div id="box" v-cloak> </div>

<style>
    [v-cloak] {
        display: none;
    }
</style>
```





#### 离线存储

```
离线存储是H5新增的属性
本地存储：localStorage
会话存储：sessionStorage


面试题：
一、localStorage和sessionStorage的区别

相同点： 
1、都是以字符串格式进行存储
2、大小都是5MB-20MB左右
3、它们的语法都相同
    存： 
        localStorage/sessionStorage.setItem(key,value)
    取值：
        localStorage/sessionStorage.getItem(key)
    删除：（删除某一项）
        localStorage/sessionStorage.removeItem(key)

不同点：
1、localStorage叫本地存储又叫永久性存储，不主动删除它永远存在，关闭浏览器关闭电脑，依然在
2、sessionStorage叫会话存储存储。关闭浏览器选项卡即删除

使用场景：
购物车、登录、记住密码。。。

二、localStorage和sessionStorage以及cookie的区别

三、谁可以实现跨页面存储(同一个网站的不同的tab页)
localStorage
```

一加载进来要取一下本地存储，添加以后存本地，删除以后存本地，全部删除以后存本地





### 二、事件

```
事件的流程
如何定义事件=>事件的传参=>如何获取事件对象=>事件的传播=>不同的框架或者库中有什么区别

```

1、事件传参

```html
<button @click='getParams("王昭君")'>获取参数</button>

```

2、获取事件对象

```
1、显示传入事件对象：必须用到$event

2、隐式传入事件对象

```

```html
<div>
	<button @click='getEvent($event)'>显示传入事件对象</button>
</div>
<div>
	<button @click='getEvent'>隐式传入事件对象</button>
</div>

```

```js
methods: {
    getEvent(ev) {
        console.log(ev);
    }
}

```



3、回顾原生事件的传播

```
如何阻止事件的默认行为（如右键菜单）
	ev.preventDefault()

如何阻止事件冒泡
	ev.stopPropagation()

```



### 三、修饰符

```
修饰符就是起修饰作用，通过.来调用。

注意点：修饰符 可以连续调用  .self.once
要和指令区别开来，指令是属性，修饰符是对事件起修饰作用的，加在事件名后面的

```



#### 1、事件修饰符

它就是用来修饰事件

```
@事件名.修饰符="函数"

如：@click.stop="smallFn"

```



```
.prevent 	阻止事件默认行为
.stop 		阻止冒泡事件
.self 		只触发自己，任何其它的如冒泡都不能触发我，只能我自己触发我
.once 		只触发一次
.capture 	事件捕获

```

```html
<!-- 
    .prevent 	阻止事件默认行为
    .stop 		阻止冒泡事件
    .self 		只触发自己，任何其它的如冒泡都不能触发我，只能我自己触发我
    .once 		只触发一次
    .capture 	事件捕获（几乎没用）
-->

<!-- prevent 阻止事件默认行为 -->
<div class="box" @contextmenu.prevent="fn"></div>

<!-- stop 阻止冒泡 -->
<div class="big" @click="bigFn">
    <div class="small" @click.stop="smallFn"></div>
</div>

<!-- self 只能自己触发 -->
<div class="big" @click.self="bigFn">
    <div class="small" @click="smallFn"></div>
</div>

<!-- once 只能触发一次 -->
<div class="big" @click.once="bigFn">
    <div class="small" @click="smallFn"></div>
</div>

<!-- .once.self 只能触发一次且是我自己触发的 -->
<div class="big" @click.once.self="bigFn">
    <div class="small" @click="smallFn"></div>
</div>

<!-- .capture  将原来的冒泡的事件模型改为捕获模型 -->
<div class="big" @click.capture="bigFn">
    <div class="small" @click.capture="smallFn"></div>
</div>

```

```js
        methods: {
          fn() {
            console.log('我是右键菜单事件触发了');
          },

          bigFn() {
            console.log('我是大盒子，我触发了');
          },
          smallFn() {
            console.log('我是小盒子，我也触发了');
          },
        },

```







#### 2、键盘修饰符

用来修饰键盘事件

```
@键盘事件名.修饰符="函数"

如：@keyup.left="fn2"

```



通过原生的键盘事件和vue对比

```
除了单词之外，你可以利用keyCode码作为修饰符
.enter 	回车     	.13
.left 	左箭头    	.37
.right 	右箭头   	.39
.up 	上箭头     .38
.down 	下箭头    	.40
.space 	空格     	.32

```

```html
<input v-model='val' @keyup.enter='enter' type="text">

```

```js
// 封装一个enter事件
enter() {
    console.log('我被回车触发了');
}

```







#### 3、表单修饰符

用来修饰v-model这个指令的（不太常用）

```
v-model.表单修饰符='变量'

如：v-model.lazy='str'

```

```
.lazy     	延迟渲染，当失去焦点的时候才去修改数值。vue默认是oninput事件，用.lazy可改成onchange
.trim  		当失去焦点的时候去掉首尾空格，在视图上有变化
.number 	即便input的type类型是number，但是利用v-model绑定数据得到的数据类型仍然是字符串。但是通过.number这个修饰符，可以让它的结果数据类型保持数值型

```

```html
<div>
    lazy:
    <input type="text" v-model.lazy='str'> {{str}}
</div>
<div>
    trim:
    <input type="text" v-model.trim='info'> {{info}}
</div>
<div>
    number:
    <input type="number" v-model.number='num'> {{typeof num}}
</div>

```





### 四、表单

- 登录

```
体验用一个对象来保留登录所有的数据

```



- 注册

```
体验各种表单控件如何设置或获取值

1、姓名 单行文本  username
2、性别 单选框 sex   一般对于这样的数据，后端都会设置类型值，它不会去接收一个男或者女，而是接收0和1，如：0代表男 1代表女
3、工作种类 下拉框单选   job
4、爱好 复选框多选  hobby
5、是否同意协议  复选框单选   isAgree
6、描述   多行文本域    desc

```

```html
<div id="box">
    <h1>注册</h1>
    
    <div>
        姓名：
        <input type="text" v-model="regInfo.username" />
    </div>
    
    <div>
        性别：
        <!-- 
            1、单选框中的v-model是和它的value值绑定的，即它的值要和value匹配（当匹配时，这个单选选中）
            2、通过动态绑定去改变value的数据类型，value一般为数值类型
        -->
        <input type="radio" :value="0" v-model="regInfo.sex">男
        <input type="radio" :value="1" v-model="regInfo.sex">女
    </div>
    
    <div>
        <!-- 
            1、下拉框的v-model要绑定在select上
            2、v-model的值是和option的value值绑定在一起的
        -->
        工作种类：
        <select v-model="regInfo.job">
            <option value="test">啥也不是的测试</option>
            <option value="UI">切图仔小UI</option>
            <option value="java">码农java</option>
            <option value="web">前端开发攻城狮</option>
        </select>
    </div>
    
    <div>
        <!-- 
            复选框的多选
            多选：需要初始值是一个空数组
            v-model也要同value匹配，只不过多选时，v-model是一个数组
        -->
        爱好：
        <input type="checkbox" value='干饭' v-model="regInfo.hobby">干饭
        <input type="checkbox" value='打游戏' v-model="regInfo.hobby">打游戏
        <input type="checkbox" value='记录美好生活' v-model="regInfo.hobby">记录美好生活
        <input type="checkbox" value='睡觉' v-model="regInfo.hobby">睡觉
    </div>
    
    <div>
        <!-- 
            复选框的单选
            单选：需要初始值是空字符串，也可以直接赋值true或者false，且不用给它value值
        -->
        是否同意协议：
        <input type="checkbox" v-model="regInfo.isAgree">{{regInfo.isAgree}}
    </div>
    
    <div>
        描述：
        <textarea v-model="regInfo.desc"></textarea>
    </div>
    
    <div>
        <button @click="register">注册</button>
    </div>
</div>

```

```js
let vm = new Vue({
    el: "#box",
    data: {
        regInfo: {
            username: "", // 姓名
            sex: 0, // 性别，默认选中男，一般都是number类型
            job: "", // 工作
            hobby: [], // 爱好
            isAgree: false, // 是否同意协议
            desc: "" // 描述
        },
    },
    methods: {
        // 封装一个注册方法
        register() {
            console.log(this.regInfo);
        },
    },
});

```







### 五、$set的用法

```
this.obj.age = 19;
如上这种添加新属性的方法，无法实现响应式的数据变化，所以不能这么调用这个语法


vue是响应式的数据变化，数据改变视图就会跟着改变。
底层原理：因为每一个对象的属性本身都有get（取值）和set（赋值）。这样底层的数据劫持就会根据set方法的执行，发现变化就改变视图

我们在向对象添加属性的时候，如果用以上直接添加，这个属性是不会被veu响应式管理的，因为没有使用对象的get（取值）和set（赋值）。必须用$set来添加，这样，这个属性在底层会用到get set。这样这个属性就会是响应式的。

以下两个方法其实是同一个方法
this.$set(对象, key, value)
Vue.set(对象, key, value)

总结：未来在写项目的时候，如果遇见新增属性或者数组元素，无论是对象或者数组都要利用这个方法去添加（主要是对象）

vue对数组的一些方法进行了重新封装，因此这些数组方法可以进行响应式变化：push() pop() unshift() shift() sort() reverse() splice()
其它的数组方法不能实现响应式变化

```

```js
// 要为对象添加某个属性并让它是响应式的，以下两种方法均可
this.$set(this.obj, 'age', 19)
Vue.set(this.obj, 'sex', '男')

```





### 六、生命周期

#### 一、生命周期的概念？

```
从出生到死亡的一个过程。在软件中生命周期是指从创建到销毁的一个过程。
我们的vue在实例化之后，不同的阶段都会触发不同的内置函数，这些函数，我们称之为生命周期函数，也叫钩子函数

```

#### 二、生命周期函数

```
vue中有八大生命周期函数
创建之前  beforeCreate(){}
创建完成  created(){}
挂载之前  beforeMount(){}
挂载完成  mounted(){}
更新之前  beforeUpdate(){}
更新完成  updated(){}
销毁之前  beforeDestroy(){}
销毁完成  destroyed(){}

```

#### 三、页面一加载会触发哪些生命周期函数

```
触发了前四个生命周期函数
创建之前  beforeCreate(){}
创建完成  created(){}
挂载之前  beforeMount(){}
挂载完成  mounted(){}

```

#### 四、如何理解生命周期流程图(重点)

在每个钩子函数中，打印$el和$data

```
vue实例化开始：

1、进入到创建之前，这个时候没有el元素，也没有data数据，但是含有一些内置事件和生命周期函数。

2、生命周期走到创建完成，这个时候依然没有el元素，但是出现了数据data。

3、生命周期走到挂载之前，这个时候出现了大量的逻辑。判断是否有el元素和模板

	1、首先要判断是否含有el元素
	如果有，生命周期继续执行。
	如果没有，判断是否调用了原型上的$mount()，如果有，生命周期继续执行，如果都没有，生命周期结束。（这里要注意：$mount('html选择器')是手动挂载，是vue原型上的方法）

	2、然后，我们要判断是否含有template(模板)配置项（对应的是html片段），如果有，就将它编译到render函数中进行渲染，如果没有就渲染外部HTML。
	这里，我们也可以自己写render函数，render函数的参数也是一个函数，该函数接收两个参数，第一个参数为标签，第二个参数为内容，即将内容放入到这个标签中并调用，返回调用的结果，这个结果会渲染到视图上，代替模板
    render(createElement){
    	// 参数2放入到参数1中，代替el元素渲染到页面
        return createElement('h1', 'render函数渲染内容');
    },
	
	渲染的优先级是： render(){} > template > 外部的HTML

	这个时候视图并没有渲染，用的仍然是未渲染的html内容。数据data依然存在

4、生命周期走到挂载完成，视图进行了重新渲染（用编译后的html替换了挂载点的内容），数据依然存在。这个时候就可以使用DOM节点了。

5、当数据发生变化的时候，会触发更新之前和更新

6、手动调用$destroy()这个方法，会执行销毁之前和销毁（$destroy()是vue原型上的方法）

```



#### 五、常用的生命周期函数有哪些？

```
挂载完成：mounted(){}	此时可以使用dom节点了，可以进行周期性函数的调用
更新完成：updated(){}	又可以使用dom节点了

```

![](/public/img/fourthStage/two/lifecycle.jpg)

