## day06 is、slot、混入、路由

### 课程的回顾

- 组件通信
  - 父子
    - props(单向数据流、props不可更改、props类型)
  - 子父
    - $emit(自定义事件, 参数)
  - 非父子
    - 本地存储
    - vuex
    - eventBus 中央事件处理
- ref
  - DOM
  - 组件
- jq
- swiper





------

### 一、通讯录的案例

#### 1.1 搭建通信录基本静态骨架

#### 1.2 按照产品需求进行组件的抽离（拆分）

#### 1.3 创建假数据实现列表数据的动态渲染

#### 1.4 点击新建联系人，出现表单弹框

#### 1.5 点击编辑联系人，出现表单弹框

#### 1.6 实现列表的删除

#### 1.7 实现添加联系人

#### 1.8 实现编辑联系人



![image-20220215105548802](/public/img/fourthStage/six/image-20220215105548802.png)

------

### 二、is属性的用法

#### 1、用法

- 直接渲染组件

```vue
<div is='引入的组件名称'></div>
```

- 动态组件切换（常用）

```vue
<div :is='变量'></div>

data(){
	return {
		变量:'组件名称'
	}
}
```



我们注册的组件，有两种方式去渲染，普通和is属性

```html
<!-- 1、普通：当做标签元素去渲染 -->
<v-son></v-son>

<!-- 2、通过is属性去渲染组件，这个时候组件名就不用烤串写法 -->
<div is='vSon'></div>
```



但是，is属性通常用于渲染动态组件（选项卡），如下：

```html
<div>
    <button @click="comType='vSon'">子组件</button>
    <button @click="comType='vGoods'">商品组件</button>
</div>
<div :is="comType"></div>
```

```js
// 引入子组件
import vSon from "./son.vue";
import vGoods from "./goods.vue";
export default {
    data() {
        return {
            comType: "vSon",
        };
    },
    components: {
        vSon,
        vGoods,
    },
};
```











#### 2、组件缓存（扩展）

keep-alive

这个时候我们思考一个问题，当组件切换时，是类似于v-show还是类似于v-if？



`我们在每个子组件中添加上挂载完成钩子函数`

事实证明，类似于v-if，哪这就有个问题，如果组件的内容没有发生变化，我们不需要每次都重新加载DOM节点。因此就需要**组件缓存**。即将需要缓存的组件放入`<keep-alive></keep-alive>`中

```html
<!-- 组件的缓存 -->
<keep-alive>
	<div :is="comType"></div>
</keep-alive>
```



#### 3、使xxx激活（扩展）

activated

如果整个组件缓存了，但是该组件中某部分又不需要缓存，则可以使用**activated**使xxx被激活的钩子函数，它会每次都执行。即缓存了以后，mounted只执行一次，但是activated每次都会执行

注意：这个钩子函数，必须在缓存了之后才会有

```js
activated() {
    // 使。。。激活  钩子函数
    console.log("激活了");
    // 如果某一部分内容不需要被缓存，可以放在这个函数中渲染
    this.timer = new Date().toLocaleTimeString();
},
```





### 四、slot槽口（插槽）

被嵌套的组件标签之间的内容无法渲染，如果一定要渲染，我们可以借助槽口实现。（一般我们自己项目中用得少，但是ui框架中用得多）

槽口又称插槽，就是在子组件中，如何渲染父组件调用子组件标签时，它标签之间传过来的内容



**槽口意义**：父组件向子组件传内容html，在子组件里面展示



#### 4.1匿名槽口

- 父组件中，子组件标签之间传值

```vue
<子组件>
	要渲染的内容
</子组件>
```

- 子组件中用slot标签接收标签之间的传值

```vue
<slot></slot>

```

![image-20220211114524030](/public/img/fourthStage/six/image-20220211114524030.png)



#### 4.2具名槽口

- 父组件

```vue
<子组件>
	<div slot='属性值1'>
        要渲染的内容1
    </div>
        <div slot='属性值2'>
        要渲染的内容2
    </div>
</子组件>

```

- 子组件

```vue
<slot name='属性值1'></slot>
<slot name='属性值2'></slot>

```

![image-20220211114933512](/public/img/fourthStage/six/image-20220211114933512.png)



#### 4.3作用域槽口

```
子组件标签之间内容想要渲染data属性，默认只能渲染父组件的数据属性
但是我们想要渲染子组件自己的数据，这个时候，你可以开辟一个独立作用域，在这个空间内，你就可以调用自己组件的数据属性了

```

- 父组件中

  调用子组件，一般用template标签（因为它不占位），接收v-slot，v-slot的值为传过来的数据对象

```vue
<子组件>
    v-slot是 新语法
	<template v-slot='item'>
       <div>
         item代表子组件自己的数据属性JSON串
       </div>
    </template>
</子组件>

<子组件>
    slot-scope是 旧语法
	<template slot-scope='item'>
       <div>
         item代表子组件自己的数据属性JSON串
       </div>
     </template>
</子组件>

```

- 子组件中

```vue
<slot :自定义属性名='data数据'></slot>

```

![image-20220211135155574](/public/img/fourthStage/six/image-20220211135155574.png)



### 五、mixin 混入

#### 5.1 概念

```
把共通的逻辑代码（即组件实例化的配置对象，比如：data、methods、生命周期...等等）抽离出来，封装成独立的js模块，再引入到不同的组件中
这部分操作，我们称之为混入

```

说白了，混入就是将多个vue模块中的共通的逻辑代码，抽离出来成为一个独立的js模块，再import引入，通过mixins混入到组件中



如两个组件中，一个是登录弹窗，一个是删除提示框，它们的点击弹出和点击关闭，以及点击蒙板关闭都是相似的，这个时候，就可以利用mixin



#### 5.2 使用

**抽离出来的js模块toast.js**

```js
// 默认导出
export default {
    data() {
        return {
            isShow: false
        };
    },
    methods: {
        //封装一个显示事件
        show() {
            this.isShow = true
        },
        //封装一个消失事件
        hide() {
            this.isShow = false
        }
    },
    mounted() {
        console.log('minxins中的挂载');
    }
}

```

在某一个组件中照常使用

```html
<script>
import toast from './toast.js'; // 引入独立的js模块
export default {
    mixins: [toast], // mixins使用，这里写成数组，可以写多个独立的js模块
    // 其它的属性照常写，它会自动和引入的模块中的一起混合
    data() {
        return {
            name:'蔡文姬'
        }
    },
    mounted() {
        console.log('本组件挂载')
    },
};
</script>

```





### 六、路由（vue-router）

在vue中，组件的渲染只能通过以下两种方式

一、组件的嵌套（前面所学就是组件的嵌套）

二、路由的渲染



vue中的路由：一个**路由地址**对应一个**组件**



#### 6.1 概念

```
通过不同的路由地址，渲染不同的组件内容

路由也是vue的核心插件之一

官方概念：
Vue Router 是 Vue.js (opens new window) 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌

```



#### 6.2 路由的官方地址

```
https://v3.router.vuejs.org/zh/

```



#### 6.3 下载方式

有两种方式：**手动安装**和**通过脚手架安装**



##### 6.3.1 通过手动下载安装

- 安装命令（注意，这里安装路由3的版本）

```
npm i vue-router@3

版本： + vue-router@3.6.5

```

- 基本使用

1、在src文件夹下，创建 router=>index.js

```js
// 一、引入vue核心库
import Vue from 'vue'
// 二、引入vue-router库
import VueRouter from 'vue-router'
// 三、调用路由插件
Vue.use(VueRouter)

// console.log(VueRouter); // 构造函数
// console.log(new VueRouter()); // 实例化出来的对象

// 四、实例化路由配置对象并导出
export default new VueRouter({
    // 应该写路由配置属性
})

```

2、main.js中

```js
// 引入封装好的路由模块，在vue配置对象中，有一个router配置属性
import router from './router'
new Vue({
    render: h => h(App),
    router, // 使用
}).$mount('#app')

```



这时，在App.vue的加载完成要执行的mounted函数中，就可以打印一下this，即vue实例，实例上面就可以看到与路由有关的两个属性：**$route和$router**



App.vue中

```js
mounted(){
    console.log(this);
}

```

![image-20220507220343546](/public/img/fourthStage/six/image-20220507220343546.png)

```
route: 路线、路径、航线
router: 路由器

$route是一个对象，它记录着当前url路径的相关信息
$router也是一个对象，它的原型链上有一些如添加路由的方法

```



再看**基本路由的创建**和**路由出口**。

------





##### 6.3.2 通过脚手架安装

**安装的时候选择router**

![image-20220211162027638](/public/img/fourthStage/six/image-20220211162027638.png)

![image-20220211160512901](/public/img/fourthStage/six/image-20220211160512901.png)

说明：路由有两种模式，history历史模式和hash模式

- hash模式：地址栏中会带#号
- history历史模式：地址栏中不带#号，但是打包以后的代码需要后端配置才可以正确跳转



安装完成之后，进入项目，npm run serve启动，并初始化项目

- 初始化项目，共以下三步

```
一、删除components下面的helloword.vue、assets下面的图片和views文件夹
二、初始化路由的模块

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
]
const router = new VueRouter({
  routes
})
export default router


三、初始化app.vue

<template>
  <div>
    <h1>主组件</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>

```





#### 6.4 基本路由的创建

router =>index.js

```js
// 一、引入vue核心库
import Vue from 'vue'
// 二、引入vue-router 库
import VueRouter from 'vue-router'
// 三、调用路由插件
Vue.use(VueRouter);

// 五、引入封装好的组件
import Home from '../components/home.vue'

// 四、实例化路由配置对象并导出
export default new VueRouter({
    // 这里写路由配置属性
    routes:[ // routes，路线，可以设置n个地址，渲染n个组件，因此这里是复数
        {
            path:'/home',  // 地址，它和浏览器的url地址一致
            component:Home  // 组件，上面引入的组件，即url地址是home时，哪个组件展示
        }
    ]
})

```

#### 6.5 路由出口（路由的视图）

路由在router=>index.js中配置好了之后，一定要在视图中使用，即用`<router-view></router-view>`渲染

这里是在 App.vue 渲染

```vue
<!-- 路由出口 路由视图 -->
<router-view></router-view>

```

当我们在url地址中输入/home时，就会展示首页组件，输入/cart就会展示购物车组件

**再回去看脚手架安装路由**





#### 6.6 路由重定向

```
{
    path:'*',
    redirect:'/地址' // 路由的重定向
}

```

```js
// 路由的重定向，即上面所有的路由都无法匹配的时候，指向这个路径。注意一定要放在最下面，有点像404
{
    path: '*',
    redirect: '/home'
}

```





#### 6.7 路由的导航

`<router-link></router-link>`

作用：相当于html中点击a链接跳转到不同的页面。

即点击导航路由，跳转到不同的路由地址，渲染不同的视图

```vue
<!-- 
    路由导航

	router-link和router-view是路由的组件
    router-link被默认解析成a标签，如果不想渲染默认的a标签如何解决？利用tag属性去改变默认标签元素
    router-link的to属性，即跳转的url地址，一定要和path地址一致
    activeClass：高亮、使激活
-->
<router-link activeClass='active' tag='span' to='/home'>首页</router-link>
<router-link activeClass='active' tag='span' to='/cart'>购物车</router-link>

```



在app.vue中演示

```html
<!-- 路由导航 -->
<!-- router-link的to属性，指向打开的地址，一定要和path地址一致 -->
<!-- router-link默认是解析成a标签，如果加是tag属性，可以解析成别的标签 -->
<!-- activeClass 即高亮，选中谁时，使激活 -->
<router-link active-class="active" tag="span" to="/home">首页</router-link>
<router-link active-class="active" to="/cart">购物车</router-link>

<!-- 路由出口 -->
<router-view></router-view>

```

总结：router-link有三个属性：to(必须)    tag    active-class



#### 6.8 路由的嵌套

参考网易云音乐：https://y.music.163.com/m

它的一级有index、列表、播放详情

二级是index下面的三个，分别是推荐音乐、热歌榜、搜索三个



- 一级路由，我们一般都放在**pages**文件夹下
- 二级路由，我们一般都放在**views**文件夹下



一个原则，一般不会在app.vue中写任何内容，只会设置一级路由出口，因为在这个里面写的东西，在所有的视图中都会存在。



操作方法：

1、创建组件

2、设置路由

3、设置路由出口







![image-20220212130259701](/public/img/fourthStage/six/image-20220212130259701.png)

![image-20220212130315686](/public/img/fourthStage/six/image-20220212130315686.png)

![image-20220212130326180](/public/img/fourthStage/six/image-20220212130326180.png)

![image-20220212130114281](/public/img/fourthStage/six/image-20220212130114281.png)

router =>index.js

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 引入一级路由
import vIndex from '../pages/index.vue';
import vList from '../pages/list.vue';
import vDetail from '../pages/detail.vue';

// 引入二级路由
import tj from '../views/tj.vue';
import rg from '../views/rg.vue';
import search from '../views/search.vue';

const routes = [
  {
    path: '/index',
    component: vIndex,
    // 关键：在哪里渲染，就在哪里设置路由。这里想在index组件中渲染，所以就在这里设置二级路由
    // 二级路由写在children属性下面
    
    // 二级路由path加不加/的区别
    // 二级路由地址不加/，你访问的地址应该是：'/一级/二级'
    // 二级路由地址加/，你访问的地址应该是：'/二级'   一般这种方式用得多点
    // children: [
    //   {
    //     path: 'tj',
    //     component: tj
    //   },
    //   {
    //     path: 'rg',
    //     component: rg
    //   },
    //   {
    //     path: 'search',
    //     component: search
    //   },
    //   // 二级路由重定向，这里path不要给值
    //   {
    //     path: '',
    //     redirect: 'tj'
    //   }
    // ]
    children: [
      {
        path: '/tj',
        component: tj
      },
      {
        path: '/rg',
        component: rg
      },
      {
        path: '/search',
        component: search
      },
      // 二级路由重定向，这里path不要给值
      {
        path: '',
        redirect: '/tj'
      }
    ]
  },
  {
    path: '/list',
    component: vList
  },
  {
    path: '/detail',
    component: vDetail
  },
  {
    path: '*',
    redirect: '/index'
  }
]

const router = new VueRouter({
  routes
})

export default router

```

- 一级路由出口（app.vue）

```vue
<template>
  <div>
    <!-- app.vue中，一般只是设置一级路由出口，不写其它的视图 -->
    <router-view></router-view>
  </div>
</template>

```

- 二级路由出口

index.vue

```vue
<template>
  <div>
    <h1>网易云</h1>
    <!-- 
      对应二级路由path属性不加/开头
      <router-link class="item" to="/index/tj">推荐</router-link>
      <router-link class="item" to="/index/rg">热歌</router-link>
      <router-link class="item" to="/index/search">搜索</router-link> 
    -->

    <router-link class="item" to="/tj">推荐</router-link>
    <router-link class="item" to="/rg">热歌</router-link>
    <router-link class="item" to="/search">搜索</router-link>
      
    <!-- 设置二级路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.item {
  padding: 20px;
}
</style>

```





## 作业

搭建小U商城骨架

提升作业： 慢慢开发静态页了



九个路由组件

五个一级：index 订单页 搜索页 商品详情 商品列表

四个二级：home 分类 购物车 我的   二级属于index的









![image-20220608210756999](/public/img/fourthStage/six/image-20220608210756999.png)