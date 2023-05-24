## vue是什么以及vue的基本指令

### 一、vue是什么

```
vue是一套渐进式的JavaScript框架


面试题（不常问）：什么是渐进式？
一句话：自底向上，逐渐增强

vue本身就是一个库，类似于jq，它可以帮助你完成简单的demo。
随着你需求的增加，你要完成的项目越来越复杂，那么我们也可以调用它的核心工具，vue-cli脚手架工具，快速搭建项目。
如果项目再复杂，需要切换跳转、传值等等，那么我们就可以调用vue的核心插件vue-router以及vuex状态管理。

--------------------------------
vue全家桶：vue vue-cli vue-router vuex axios


官方概念：
Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。
```

### 二、作者

```
华人 尤雨溪
vue的框架是他和他的团队开发的。
```

### 三、官网地址

```
https://v2.cn.vuejs.org/

```

### 四、缺点

```
只支持IE9及其以上

Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。
```

### 五、下载以及引入

- 开发环境（未上线版本）提供了错误和警告信息

```
https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js
```

- 生产环境（上线版本）

```
https://cdn.jsdelivr.net/npm/vue@2.7.10
```



#### 5.1 通过CDN进行引入

#### 5.2 核心库下载到本地然后引入

#### 5.3 通过npm去下载核心库

`我们采用这种方式引入`

```
1、通过npm init -y，自动创建package.json的管理文件，用于管理依赖

2、下载vue核心库命令：npm i vue@2
版本：vue@2.7.10
```

### 六、基本应用

第一步：引入核心库

第二步：创建一个容器，让其承载vue的语法

第三步：逻辑操作

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 第一步 引入核心库，建议大家在本地引入开发环境，因为开发环境包含错误信息和警告 -->
    <script src="./node_modules/vue/dist/vue.js"></script>
    <title>这是一个基本案例</title>
</head>

<body>
    <!-- 第二步，创建一个容器，让其承载vue的语法 -->
    <div id="box">
        <!-- 利用{{}} ，叫插值表达式 -->
        {{msg}}
    </div>
    <!-- 原样输出，此处不受vue管控 {{msg}} -->

    <!-- 第三步，逻辑操作 -->
    <script>
        // Vue 是一个构造函数  实例化之后得到了vue的核心属性和方法，它的原型链有三层
        // console.log(new Vue(),'核心库');
        
        // 接收配置对象
        new Vue({
            el: '#box', // 挂载点 类似于 querySelector
            // 属性 也就是数据变量，这里省略了声明方式，省略了let var const，我们可以直接定义
            data: {
                msg: 'vue真的是太简单了。。。。'
            }
        })
    </script>
</body>

</html>
```

![image-20220609093636022](/public/img/fourthStage/one/image-20220609093636022.png)



### 七、基本配置

- el元素

```
挂载点。不能把Vue挂载html或者body上，只能挂载到一个正常的元素上
我们也不推荐挂载到class元素上，因为每一个实例都是唯一的，推荐挂载到id元素上

```

```
错误展示
Do not mount Vue to <html> or <body> - mount to normal elements instead.
不要将Vue挂载到<html>或<body>，而是挂载到普通元素。

```





- 插值表达式与data

```
vue会通过{{}}去渲染data属性，但这里不能写复杂的语句，比如switch、if以及for，但是可以写三目运算。

```

```
data里不能定义函数，因为函数有专门的属性进行管理
可以定义基本数据类型以及复杂数据类型（不包含function）

可以分别演示：字符串、数字、布尔值、对象、数组的展示

```





- methods（方法）

```
查看三种定义方法的方式

总结：一般不用箭头函数。因为函数中的this应该指向的是vue的实例，但箭头函数中的this是window

```



- 响应式的数据

```
vue和jq完全不一样，jq是疯狂的在操作DOM
vue不会直接去操作DOM，而是利用数据去驱动视图
响应式：即数据发生变化，视图就会发生变化

定义的数据和方法都挂载在vue的实例上面，因此data中的和methods中的不能重名

思考：如何在methods函数中取得data中的数据？

```

注意：以上均为配置对象的属性



### 八、指令

#### 什么是指令

指令就是**属性**，它是一个特殊自定义的属性

在开始标签中，以 `v-` 为开头的属性，结果直接作用于DOM节点，这种我们称之为指令。



#### 指令分类

- 系统指令（内置指令）：vue作者直接封装的，可以满足日常开发需求（重点）
- 自定义指令：根据自己的需求，自我封装指令



#### 基本指令

- v-text

```
作用：文本输出

```

```html
<h1 v-text="msg"></h1>

```





- v-html

```
作用：用于解析html语法

```

```html
<div v-html="con"></div>

```





- v-bind

```
作用：动态绑定属性，我们可以简写成 :

```

用图片的src 和 a标签的href属性测试看看

```html
<!-- 直接给title给值，它认为就是一个字符串，而不是当做一个变量 -->
<h1 title="title">{{msg}}</h1>

<!-- 加上v-bind，它就认为title是一个变量了 -->
<!-- v-bind 动态绑定属性，我们可以简写成 : -->
<h1 v-bind:title="title">{{msg}}</h1>

<hr />
<!-- <img v-bind:src="imgUrl" alt="" /> -->
<img :src="imgUrl" alt="" />
<a :href="url">百度</a>

```





- v-on

```
1、事件绑定，简写成@
2、调用函数，可以加小括号，也可以不加
3、如果逻辑代码只有一句，可以省略封装方法

```

```html
<button v-on:事件名="定义在methods中的函数">点击获取惊喜</button>
<button @事件名="定义在methods中的函数">点击获取惊喜</button>

```







- 条件判断
  - v-if、v-else、v-else-if

它是dom节点的有或无

```
分别查看v-if的三种不同的组合


```

```
v-if的使用场景：购物车
购物车中如果有商品，则展示商品，如果没有商品，则展示购物车空空如也

```





- v-show

```html
<!-- v-show="布尔" 如果值为真，则显示，否则隐藏 -->
<!-- 它是css的显示和隐藏 -->

<button @click="isShow = !isShow">切换显示</button>
<h1 v-show="isShow">{{msg}}</h1>

```



**经典面试题**

```
v-show 和 v-if 的区别是什么？

相同点：
	都可以用于条件判断，都可以控制显示隐藏
不同点：
    v-if是false的时候，删除了（移除了）DOM节点，我们也管它叫惰性加载。
    v-show是false的时候，在它的节点上添加了一个样式：display:none
使用场景：
    如果你疯狂的要显示隐藏，其实就会操作DOM，这个时候就用v-show
    如果是根据不同的条件渲染不同的界面，这个时候就用v-if
    
v-if在初次加载时，如果不用显示，则不创建元素，v-show不论显示或不显示，都要建元素。则v-show的初次加载更耗时

```





- v-model

  双向数据绑定概念：数据会影响视图，同样视图的变化也会影响数据

  它专门是给**表单元素**用的指令，以后看到表单元素，我们就要条件性的反射想到用v-model

```html
双向数据绑定，专用于input表单，v-model的值，一定要和data中的属性一一对应

<input type="text" v-model="msg" />

```







- v-for

  作用：循环遍历

  注意：重复谁，就在谁的标签上添加 v-for

```
数组：
v-for='(item,index) in/of 数组'   item代表你循环的每一个元素（数组每一项）

对象:
v-for='(value,key,index) in/of 对象'  value为对象的value值，key为对象的key值，index为循环当前key时的下标

```



案例：双重for循环（音乐）

![image-20220913203618414](/public/img/fourthStage/one/image-20220913203618414.png)

```js
toplist: [
    {
        title: "飙升榜",
        img: "http://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40",
        songlist: [
            {
                id: 1,
                name: "你要我如何我就如何",
                singger: "大弯区。。。",
            },
            {
                id: 2,
                name: "丑八怪",
                singger: "薛之谦",
            },
            {
                id: 3,
                name: "模特",
                singger: "李荣浩。",
            },
        ],
    },
    {
        title: "新歌榜",
        img: "http://p2.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=40y40",
        songlist: [
            {
                id: 11,
                name: "你要我如何我就如何1",
                singger: "大弯区。。。",
            },
            {
                id: 21,
                name: "丑八怪1",
                singger: "薛之谦",
            },
            {
                id: 31,
                name: "模特1",
                singger: "李荣浩。",
            },
        ],
    },
    {
        title: "原创榜",
        img: "http://p2.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=40y40",
        songlist: [
            {
                id: 12,
                name: "你要我如何我就如何2",
                singger: "大弯区。。。",
            },
            {
                id: 22,
                name: "丑八怪2",
                singger: "薛之谦",
            },
            {
                id: 32,
                name: "模特2",
                singger: "李荣浩。",
            },
        ],
    },
    {
        title: "热歌榜",
        img: "http://p2.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=40y40",
        songlist: [
            {
                id: 15,
                name: "你要我如何我就如何5",
                singger: "大弯区。。。",
            },
            {
                id: 25,
                name: "丑八怪5",
                singger: "薛之谦",
            },
            {
                id: 35,
                name: "模特5",
                singger: "李荣浩。",
            },
        ],
    },
],

```









- v-for中key值的作用：标识唯一性

```
v-for的底层，采用了“就地复用”的原则，这样的好处是极大的提高了渲染的速度，但是也造成了一定的bug

如何解决这个问题，我们需要给每一个标签加一个标识位用于区分，这个标识位不能是索引，一般就用唯一值（数据表中主键）

在脚手架创建的项目中，v-for必须要加key，如果不加，则会报错（建议现在就加上key）

```

演示：通过对一个数组中添加一项，每一项前面有input为checkbox的元素，后面添加没有问题，前面添加时就会有问题





- v-if 和 v-for 的优先级关系

```
结论：v-for的优先级要高于v-if

因此，当循环遍历10条数据，而只显示头三条，就不能用它们合用。合用是先渲染10条，再去掉7条，留下三条
解决：对数据进行二次加工

```





### 九、动态样式

#### 9.1 动态样式之class

- 方法一：变量

```
:class="变量"   变量对应的是定义在data中的class名

```



- 方法二：数组

```
数组格式，可以有N个元素，但是一般我们就用一个
:class="[条件?'类名A':'类名B']"

```

案例：隔行变色



- 方法三：对象

对应的条件如果为真，则这个类名显示

```
:class='{"类名A":条件A, "类名B":条件B, "类名C":条件C, ...}'

```





#### 9.2 动态样式之style

```
:style='样式对象'
注意font-size要么加引号，要么改成驼峰

```

