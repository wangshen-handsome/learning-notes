---

layout: fourthStageseven

title: 四阶段 | 第七天

---

## day07 路由



### vue中跳转页面

有两种方式：路由导航和编程式导航



#### 6.8路由导航

这种方式会多添加一层标签，相当于原生html中外面包了一个a标签

```vue
<li v-for="item in goodslist" :key="item.id">
    <router-link to="/detail">
        <img :src="item.img" :alt="item.name" />
        <div>
            <p>商品名称：{{ item.name }}</p>
            <p>商品价格：{{ item.price }}</p>
            <button>抢购</button>
        </div>
    </router-link>
</li>
```



#### 6.9编程式导航

所谓编程式导航，就是在函数中，编写js逻辑，实现跳转

这里主要用的是**$router**这个对象下面的一些方法，如：push() replace() go() back()



- push()

```
push() 往历史记录中添加一条记录 参照原生history API中的pushState()
```

- replace()

```
 replace() 替换当前这条历史记录 参照原生history API中的replaceState()
```

- go()

```
go(n) n是一个整数，代表页码 0代表当前页  -1代表上一页  1代表下一页
```

- back()

```
回退一页
```





- 视图

```vue
<li v-for="item in goodslist" :key="item.id" @click="goDetail">
    <img :src="item.img" :alt="item.name" />
    <div>
        <p>商品名称：{{ item.name }}</p>
        <p>商品价格：{{ item.price }}</p>
        <button>抢购</button>
    </div>
</li>
```

- 逻辑代码

  ```js
  goDetail() {
      this.$router.push("/detail");
      // this.$router.replace('/detail')
  },
  ```





### 跳转页面并传值有两种方式，动态路由和query



#### 6.10 动态路由（不常用）

**首页的商品跳商品详情：用动态路由并传参**

通过以下三步实现：改路由地址 -> 导航并传参 -> 取值

导航分为两种方式：**路由导航**和**编程式导航**两种。但是取值都是用**parmas**



**一、将固定路由改成动态路由**

router => index.js

```
{
	path:'/地址/:变量'
}

如：
{
    path: '/detail/:id',
    component: vDetail,
},
```

**二、修改导航并携带参数**

它有两种不同的方式

- 方式1：路由导航跳转并携带参数

```vue
<router-link :to='"/地址/"+要传递的数据参数'>
    内容
</router-link>

```

- 方式2：编程式导航跳转并携带参数

  视图部分

```html
<li @click="goDetail(要传递的数据参数)">
    内容
</li>

```

​	    逻辑部分

```js
goDetail(形参) {
    this.$router.push("/地址/"+形参);
}

```

三、取值

```
this.$route.parmas.变量

```





#### 6.11 query传参（常用）

**分类跳转到分类列表，用 query 参数**

注意点：不需要修改路由地址

也分为两种方式：**路由导航**和**编程式导航**两种。但是取值是一样的，用**query**



- 路由导航跳转并携带参数

```vue
<router-link :to='"/地址?参数名="+要传递的数据参数'>
</router-link>

```

如：

```html
<li v-for="item in sortlist" :key="item.id">
    <router-link :to="'/list?id=' + item.id">
        {{ item.name }}
    </router-link>
</li>

```





- 编程式导航跳转携带参数

  - 视图部分，如

  ```html
  <li v-for="item in sortlist" :key="item.id" @click="goList(item.id)">
      {{ item.name }}
  </li>
  
  ```

  

  - 逻辑部分

  ```js
  goList(形参) {
      // 方式一：直接拼接
      this.$router.push('"/地址?参数名="+形参');
  
      // 方式二：写成对象。如果要传多个参数，可以用以下这种写法
      this.$router.push({
          path:'/地址',
          query:{
              参数名1:形参1,
              参数名2:形参2
          }
      })
  }
  
  ```

  ​	如

  ```js
  goList(id) {
  	this.$router.push("/list?id=" + id);
  },
  
  ```

  

- 取值

```js
this.$route.query.参数名

```









------

**到这里总结**

**页面之间跳转有两种方式：路由导航和编程式导航**

所谓的路由导航就是使用标签`<router-link to="地址">`

所谓的编程式导航就是在方法中写js逻辑实现跳转`this.$router.push('地址')`

**页面之间传值有两种方式：动态路由和query参数**

动态路由就是在路由地址上加：/地址/:id			在parmas里面取

所谓query参数，就是在地址后面加 ?参数名=值		在query里面取

------











#### 6.12 路由懒加载

```
单页应用有一个最大的缺点，首次加载过慢，因为第一次加载，要加载全部的css、js和HTML
我们可以从路由着手去优化，没有触发的路由，第一次不加载

今后做的所有的项目都要用路由懒加载

```

router=>index.js

```js
// 方法1：
const userCenter = () => import('../views/usercenter');
{
    path: "/user",
    component: userCenter ,
},
    
    
//方法2：建议使用
{
    path: "/user",
    component:()=> import('../views/usercenter')
},

```

检测：打开网络，每打开一个路由，就会有新的js加载，说明已经懒加载了



#### 6.13 路由模式

- 设置

```js
const router = new VueRouter({
  routes,
  // mode: 'hash' // 默认模式，地址上会有#号
  mode: 'history'
})

```

- 路由两种模式（hash和history）的区别

```
在开发模式下：就只有带#号 和 不带# 美观的问题

但是在生产环境下：
hash打包的生产物在服务器上，前进后退刷新都没有问题。因为它是模拟完整的url地址，当地址发生变化，不会重新加载（#后面的不算url地址，#号后面的东西发生变化，不会请求服务器）

history的生产物在服务器上，前进后退都没有问题，但刷新出现了问题，因为它是完整的URL地址，当地址发生变化时，会请求服务器，这个时候，服务器就一定要有配置
history利用的就是原生window.history.pushState()方法

```



**在服务器环境下，测试两种模式的区别**

vue项目生产环境打包，放到express的服务器中，可以查看这两种的差异



1、分别打包两种生产物

```sh
npm run build

```



2、创建express服务器，hash和history创建的生产物分别放入static文件夹下

```sh
npm init -y
npm i express

```



创建app.js

```js
const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('http://localhost:3000');
});

const path = require('path');
app.use(express.static(path.join(__dirname, './static'))); // 开启static文件夹静态资源

```

启动项目

```
nodemon app.js

```

访问

```
http://localhost:3000

```

以上，就可以看到history模式下，刷新会有问题



##### 解决history模式在node服务器出错的问题

对于 Node.js/Express，请考虑使用 [connect-history-api-fallback 中间件]

https://v3.router.vuejs.org/zh/guide/essentials/history-mode.html

```sh
安装：
npm i connect-history-api-fallback

```

```js
const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('http://localhost:3000');
});

// 引入中间件
// 解决history在服务器上刷新出错的问题，使用connect-history-api-fallback中间件
var history = require('connect-history-api-fallback');
app.use(history());

const path = require('path');
app.use(express.static(path.join(__dirname, './static'))); // 开启static文件夹静态资源

```

这样，在node的服务器下，history刷新就不会出错了





#### 6.14 路由导航守卫

其实就是访问路由不同阶段的拦截。它本质还是函数。

`注意：要同后面学的axios的拦截器区分开，路由导航守卫是做权限管理的，axios是管理请求头和过滤请求数据的`





路由导航守卫分为三个阶段：**全局路由导航守卫（2个）** -> **路由独享守卫（1个）** -> **组件守卫（3个）**

- 全局路由导航守卫，写在路由器上

```
全局路由导航守卫-前置
	路由器.beforeEach((to,from,next)=>{})    	常用

全局路由导航守卫-后置
	路由器.afterEach((to,from)=>{})     		（很少用），它没有next

```

- 路由独享守卫，写在某条路线上

```
	beforeEnter(to,from,next){}    常用

```

- 组件守卫，写在某个组件内部的配置对象上

```
进入组件之前
	beforeRouteEnter(to,from,next){}			常用，它的函数中没有this

组件内部更新之前
	beforeRouteUpdate(to, from, next) {}

离开组件之前
	beforeRouteLeave(to, from, next) {}         常用

```



```
如：
某基地=>大门（拦截），这个拦截称之为全局拦截。放行（执行next()）=>
进入不同的楼都会遇见一个拦截，我们称之为路由独享=>放行（执行next()）=>
进入不同的教室也会出现一个拦截，这个拦截我们称之为组件内部拦截

```

##### 一、全局路由导航守卫

分前置和后置，写在router=>index.js中的 router 路由器上，在默认导出之前



###### 前置

- 前置导航钩子函数，它接收一个回调函数，该函数有三个参数，to去哪里，from从哪来。to和from它们下面分别有一个path属性，next即执行下一步

```js
路由器.beforeEach((to,from,next)=>{

})


// 前置导航钩子函数
router.beforeEach((to, from, next) => {
  console.log(to, '全局路由导航守卫-前置   到哪去');
  console.log(from, '全局路由导航守卫-前置   从哪来');
  next();
});

```



前置导航钩子函数的适用场景？

最常用的**登录拦截**，有一些项目一定要强制登录，不登录无法访问任何页面

方法步骤：

- 一、创建登录页面并设置路由    login.vue   （一级路由）
- 二、设置登录状态（当登录成功之后，向本地存储中添加一个标识，并跳转到首页）

```vue
<template>
  <div>
    <h1>登录</h1>
    <div class="m20 p20">
      <p class="mb20">
        <input
          type="text"
          class="p10"
          placeholder="请输入用户名"
          v-model="user.username"
        />
      </p>
      <p class="mb20">
        <input
          type="text"
          class="p10"
          placeholder="请输入密码"
          v-model="user.password"
        />
      </p>
      <p>
        <button class="p10" @click="login">登录</button>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      // console.log(this.user);
      // 登录时的验证工作
      // 这里固定了用户名为admin 密码为123
      // 当登录成功了以后(跳到首页)，并向本地会话中存一个状态，方便全局路由导航守卫使用

      // 非空的判断
      if (!this.user.username || !this.user.password) {
        alert("用户名和密码必须填写");
        return;
      }

      // 如果是admin和123，则登录成功
      if (this.user.username === "admin" && this.user.password === "123") {
        alert("登录成功");
        sessionStorage.setItem("isLogin", true);
        this.$router.push("/home");
      } else {
        alert("用户名和密码错误");
        return;
      }
    },
  },
};
</script>
<style scoped>
</style>

```



- 三、根据登录状态进行拦截  router->index.js

实现拦截的思路
1、如果它去的页面是登录页，我们就next
2、如果它有了登录状态，我们就next
3、如果以上都不符合，我们就强制它去登录

```js
// router就是路由器，全局路由导航守卫就加在它上面
// 全局路由导航守卫-前置
router.beforeEach((to, from, next) => {
  console.log(to, '全局路由导航守卫-前置   到哪去');
  console.log(from, '全局路由导航守卫-前置   从哪来');

  // 1、如果它去的页面是登录 我们就next
  if (to.path === '/login') {
    next();
    return;
  }
  // 2、如果它有了登录状态 我们就next
  if (sessionStorage.getItem('isLogin')) {
    next();
    return;
  }
  // 3、如果以上都不符合 我们就强制它去登录
  next('/login');
});

// 全局路由导航守卫-后置 (用得少)
router.afterEach((to, from) => {
  console.log(to, '全局路由导航守卫-后置   到哪去');
  console.log(from, '全局路由导航守卫-后置   从哪来');
});

```



###### 后置

- 后置导航钩子函数（很少用），它没有next

```js
路由器.afterEach((to,from)=>{

})

// 后置导航钩子函数
router.afterEach((to, from) => {
  console.log(to, '全局路由导航守卫-后置   到哪去');
  console.log(from, '全局路由导航守卫-后置   从哪来');
})

```



##### 二、路由独享守卫

所谓的路由独享，就是每一条路由上面的单独的配置属性，它是一个函数。它要写在每一个 path 地址上面

在这里可以做一些拦截，如果符合，我就next，否则我可以让它跳转到某一个页去（如用户权限等）

```js
beforeEnter(to,from,next){

}

```

这里以list页面为例，想进到list页面，如果你是从分类来的，我就让你进，否则到首页去

```js
  {
    path: '/list',
    component: () => import('../pages/list'),
    beforeEnter(to, from, next) {
      console.log(to, '路由独享守卫 到哪去');
      console.log(from, '路由独享守卫 从哪来');

      /* 
        可以配置一些权限的控制
        比如：如果你是从分类来，就next  否则就回到首页
        比如：list这个页面只能从分类进，如果从其它的进，我们就让它到home
      */
      if (from.path === '/sort') {
        next();
      } else {
        next('/home');
      }
    },
  },

```





##### 三、组件守卫

所谓组件守卫，就是写在组件的配置对象上

以detail详情的组件为例



- 进入组件之前

```js
  // 进入组件之前
  beforeRouteEnter(to, from, next) {
    // 注意点：这个函数中没有this，因为还没有进入组件，组件的实例还没有创建（还没有执行生命周期）
    console.log(this, "组件this"); // undefined
    console.log(to, "进入组件之前  到哪去");
    console.log(from, "进入组件之前  从哪来");
    // next();

    // 如果你是从home进到详情的，我就让你进，从其它的不让进
    if (from.path == "/home") {
      next();
    } else {
      next("/home");
    }
  },

```

- 组件内部更新之前

什么是组件内部更新呢？就是当url地址改变的时候（如：/detail/1  --> /detail/2），组件重新渲染，就是更新



注意：如果是history模式，这里会不好用，必须用hash模式

```js
  // 组件内部更新之前
  beforeRouteUpdate(to, from, next) {
    // 这个函数中有this
    console.log(to, "组件更新之前 到哪去");
    console.log(from, "组件更新之前 从哪来");
    next();
  },

```

- 离开组件之前

```js
  // 离开组件之前
  beforeRouteLeave(to, from, next) {
    // 这个函数中有this
    console.log(to, "离开组件之前  到哪去");
    console.log(from, "离开组件之前  从哪来");
    next();
  },

```



总结：导航守卫，用在权限管理上

- 全局路由导航守卫，可以用于全站的权限
- 路由独享：可以控制某个页面的权限（超级管理员，有所有的权限，如果是客服，就只有客服的权限）
- 组件守卫：可以更精细化到某一个小块的权限





#### 6.15 alias别名

在某条路线的属性上加

作用：就是说原来要通过  `/cart`  访问这个路由，现在通过  `/别名`   也能访问这个路由

可以在url地址中输入 `/别名` 也可以访问

```js
{
    path: "/cart",
    component: () => import("../views/cart"),
    alias: "/gouwuche", // 别名，就是说原来要通过/cart访问这个路由，现在通过/gouwuche也能访问这个路由
},

```



#### 6.16 命名路由

在某条路线的属性上加name属性

- 路由文件

```js
{
    path: "/user",
    component: () => import("../views/usercenter"),
    name: "个人中心", // 命名路由
},

```

- 视图中to时使用

```vue
<!-- 路由导航：to属性，除了path地址之外，你也可以通过name属性进行跳转 -->
<!-- <router-link activeClass='active' to="/user">个人中心</router-link> -->

<!-- 我们也可以通过命名路由去访问 -->
<router-link activeClass='active' :to="{name:'个人中心'}">个人中心</router-link>

```





#### 6.17 命名视图（不常用）

即访问一个路径，可以渲染多个视图。其中一个是默认视图，其它的都是命名视图

- router=>index.js

```json
{
    path: "/login", // 访问这一个路径
    // component: () => import("../pages/login.vue"),
    components: {
        // 设置多个视图
        default: () => import("../pages/login.vue"), // 默认视图
        view1: () => import("../pages/test.vue"), // 命名视图
	},
},

```

- app.vue

```vue
<template>
  <div>
    <!-- 第一个出口: 默认视图出口 -->
    <router-view></router-view>
    <!-- 第二个出口：命名视图出口，name属性必须要和命名视图的key值一致 -->
    <router-view name="view1"></router-view>
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



#### 6.18 路由元信息（常用）

相当于给这条路线添加一些自定义属性，然后在视图中可以取得这些自定义属性（常用）

```json
{
    path: "/user",
    component: () => import("../views/usercenter"),
    meta: {
        // 自定义。你可以在这里设置很多属性，然后在$route.meta对象中取
        title:'个人中心111'
    },
},

取值：$route.meta.变量名

```



**案例：**

统一设置每个页面的标题，将它做成一个公共的组件，然后引入。这样只要在每条路线上设置meta，就可以，每个组件再使用这个title.vue就行了

common->title.vue

```vue
<template>
  <div>
    <h1>{{ $route.meta.title }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped></style>

```







#### 6.19 滚动行为

**使用场景：**比如在a页面滚动了几屏之后，跳转到b页面，然后再回到a页面，一般会回到a的最顶部，但是我们需要回到a滚了几屏之后的位置，这就需要滚动行为。**但是这个一定要多滚点，不然不会有效果**

即position记住了a跳到b的时候的位置。然后回来时，再把这个位置给a



router=>index.js

```js
const router = new VueRouter({
  routes,

  // 路由的滚动行为
  scrollBehavior(to, from, position) {
    // console.log(position, '滚动位置');
    // 如果用户滑动了滚轴，那么position就有数据，我们可以直接返回该数据，否则清空位置
    if (position) {
      return position;
    } else {
      return {x: 0,y: 0}
    }
  }
})

```


## 小U商城移动端

### 一、创建项目

```
vue create umall-shop
```

### 二、项目初始化

```js
一、删除components下面的helloword.vue和assets下面的图片，删除views文件夹
二、初始化路由的模块

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = []
const router = new VueRouter({
  routes
})
export default router

三、初始化App.vue

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



### 三、分析产品需求看是否为pc端或者是移动端

**全局引入rem.js并清除默认样式**

在assets下面创建js文件夹和css文件夹，放入重置css文件和rem.js文件

main.js

```js
// 引入清除默认样式
import './assets/css/reset.css'
// 引入rem.js
import './assets/js/rem'
```

### 四、根据分析创建出一二级组件

一级组件放在pages中，二级放在views中，其它组件放在component中

五个一级组件，四个二级组件

```
首页：index.vue
	首页：home.vue
	分类：sort.vue
	购物车：cart.vue
	个人中心：user.vue
订单：order.vue
搜索：search.vue
商品详情：detail.vue
商品列表：list.vue
```

![](/public/img/fourthStage/seven/QQ截图20220212155911.png)

### 五、封装一二级路由

设置好一二级路由重定向

```js
import Vue from 'vue';
import VueRouter from 'vue-router';

// 引入一级路由
import vIndex from '../pages/index';
import vDetail from '../pages/detail';
import vList from '../pages/list';
import vOrder from '../pages/order';
import vSearch from '../pages/search';

// 引入二级路由
import cart from '../views/cart';
import home from '../views/home';
import sort from '../views/sort';
import user from '../views/user';

Vue.use(VueRouter);

const routes = [
  {
    path: '/index',
    component: vIndex,
    children: [
      {
        path: '/home',
        component: home,
      },
      {
        path: '/cart',
        component: cart,
      },
      {
        path: '/sort',
        component: sort,
      },
      {
        path: '/user',
        component: user,
      },
      {
        path: '',
        redirect: '/home',
      },
    ],
  },
  {
    path: '/detail',
    component: vDetail,
  },
  {
    path: '/list',
    component: vList,
  },
  {
    path: '/order',
    component: vOrder,
  },
  {
    path: '/serarch',
    component: vSearch,
  },
  {
    path: '*',
    redirect: '/index',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
```



在app.vue中定义好一级路由出口，在index.vue中定义好二级路由出口

app.vue

```vue
<!-- 一级路由出口 -->
<router-view></router-view>
```

index.vue

```vue
<h1>首页</h1>
<!-- 二级路由出口 -->
<router-view></router-view>
```





### 六、封装底部导航

```vue
<template>
  <div>
    <!-- 二级路由出口 -->
    <router-view></router-view>

    <!-- 底部导航 -->
    <div class="footer">
      <router-link active-class="active" to="/home">home</router-link>
      <router-link active-class="active" to="/sort">分类</router-link>
      <router-link active-class="active" to="/cart">购物车</router-link>
      <router-link active-class="active" to="/user">个人中心</router-link>
    </div>
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
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.8rem;
  display: flex;
}
.footer a {
  flex: 1;
  text-align: center;
  line-height: 0.8rem;
  color: #333;
  background: #ccc;
  text-decoration: none;
  font-size: 16px;
}
.footer a.active {
  background: yellow;
}
</style>
```





### 七、抽离底部导航

在components=>vNav.vue中

```vue
<template>
    <div class='footer'>
      <router-link activeClass='active' to="/home">商城</router-link>
      <router-link activeClass='active' to="/cate">分类</router-link>
      <router-link activeClass='active' to="/cart">购物车</router-link>
      <router-link activeClass='active' to="/user">个人中心</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
};
</script>

<style  scoped>
.footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    display: flex;
}
.footer a{
    flex:1;
    text-align: center;
    background: #ccc;
}
.active{
    color: green;
    background: goldenrod !important;
}
</style>

```

在index.vue中再引回来

```vue
<template>
  <div>
    <h1>首页</h1>
    <!-- 二级路由出口 -->
    <router-view></router-view>

    <!-- 封装底部导航 -->
    <v-nav></v-nav>
  </div>
</template>
<script>
import vNav from "../components/vNav.vue";
export default {
  data() {
    return {};
  },
  components: {
    vNav,
  },
};
</script>
<style scoped>
</style>

```

到此，移动端基本骨架搭建完成





### 八、封装轮播图组件

参考资料：

https://www.swiper.com.cn/usage/index.html

https://juejin.cn/post/7068200036949032968

```
npm i swiper@5.4.5

```



在component =>vSwiper.vue中创建，再在home.vue中引入

```vue
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img
          src="https://img30.360buyimg.com/pop/s590x470_jfs/t1/68039/21/18020/100942/627dbfe0Ea13812aa/582a6b7ffd8ad9bd.jpg"
          alt=""
        />
      </div>
      <div class="swiper-slide">
        <img
          src="https://img10.360buyimg.com/pop/s590x470_jfs/t1/222393/2/16355/31621/62832cb1Eb6ae05ca/87734275134da414.jpg"
          alt=""
        />
      </div>
      <div class="swiper-slide">
        <img
          src="https://img12.360buyimg.com/babel/s590x470_jfs/t1/9365/1/16981/84159/627dbee4Efab3440d/42f5cabb3723e370.jpg"
          alt=""
        />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper"; // 注意引入的是Swiper
import "swiper/css/swiper.min.css"; // 注意这里的引入

export default {
  data() {
    return {
      bannerList: [], // 轮播图数据，当我们后面请求了数据之后，再动态展示
    };
  },
  mounted() {
    // 实例化轮播
    new Swiper(".swiper-container", {
      loop: true, // 无缝
      autoplay: true, // 自动
      // 小圆点
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 3rem;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

```



### 九、搭建首页基本静态骨架

![image-20220520221112781](/public/img/fourthStage/seven/image-20220520221112781.png)

![image-20220520221226596](/public/img/fourthStage/seven/image-20220520221226596.png)



### 十、首页商品列表跳转到商品详情

![image-20220520221440694](/public/img/fourthStage/seven/image-20220520221440694.png)

在home.vue页面

```vue
<template>
  <div>
    <!-- 使用轮播图组件 -->
    <v-swiper></v-swiper>

    <!-- 首页商品切换 -->
    <div class="goods">
      <span>热门推荐</span>
      <span>上新推荐</span>
      <span>所有商品</span>
    </div>

    <!-- 商品列表展示，应该有三块 -->
    <ul class="goodsUl">
      <li v-for="item in goodsList" :key="item.id">
        <img :src="item.img" :alt="item.goodsName" />
        <div>
          <h3>{{ item.goodsName }}</h3>
          <span>现价格：￥{{ item.oldPrice }}</span>
          <del>原价格：￥{{ item.newPrice }}</del>
          <button>立即抢购</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import vSwiper from "../components/vSwiper.vue";
export default {
  data() {
    return {
      goodsList: [
        {
          id: 1,
          img: "https://img13.360buyimg.com/seckillcms/s140x140_jfs/t1/222039/22/15787/47580/6284a4a8E147848f7/18779175a6e7816c.jpg.webp",
          goodsName: "啄木鸟",
          oldPrice: "234",
          newPrice: "245",
        },
        {
          id: 2,
          img: "https://img14.360buyimg.com/seckillcms/s140x140_jfs/t1/195626/40/5819/203946/60b58249E4d824b8e/3ee77fa965db8ac8.jpg.webp",
          goodsName: "茶具",
          oldPrice: "340",
          newPrice: "234",
        },
        {
          id: 3,
          img: "https://img20.360buyimg.com/seckillcms/s140x140_jfs/t1/26164/16/16181/41294/62848892E2cc41706/d1afca1d357e6e92.jpg.webp",
          goodsName: "串珠",
          oldPrice: "12",
          newPrice: "1200",
        },
        {
          id: 4,
          img: "https://img13.360buyimg.com/seckillcms/s140x140_jfs/t1/59348/7/18088/100190/6285f1a9Eaa0f571e/41e4c86ec2e53998.jpg.webp",
          goodsName: "轻奢",
          oldPrice: "8",
          newPrice: "19",
        },
      ],
    };
  },
  components: {
    vSwiper,
  },
};
</script>
<style scoped>
.goods {
  height: 0.8rem;
  display: flex;
}
.goods span {
  flex: 1;
  text-align: center;
  line-height: 0.8rem;
  font-size: 0.25rem;
}

.goodsUl {
  width: 96%;
  margin: 0 auto;
  margin-bottom: 1rem;
}
.goodsUl li {
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  margin-bottom: 0.16rem;
}
.goodsUl li img {
  border: 1px solid #ccc;
  border-radius: 4px;
}
.goodsUl li div {
  flex: 1;
  margin-left: 0.2rem;
}
.goodsUl li div h3 {
  font-size: 0.34rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
}
.goodsUl li div span,
.goodsUl li div del {
  font-size: 0.24rem;
  display: block;
  margin-bottom: 0.16rem;
}
.goodsUl li div span {
  color: red;
}
.goodsUl li div del {
  color: #ccc;
}
</style>

```

**配置好详情的路由，点击li，实现跳转**









在vue中，实现页面之间的跳转，有以下两种方式

- 一、路由导航

  这种方式会多添加一层标签，有可能会影响页面布局

```vue
<ul class="goodsUl">
    <li v-for="item in goodsList" :key="item.id">
        <router-link to="/detail">
            <img :src="item.img" :alt="item.goodsName" />
            <div>
                <h3>{{ item.goodsName }}</h3>
                <span>现价格：￥{{ item.oldPrice }}</span>
                <del>原价格：￥{{ item.newPrice }}</del>
                <button>立即抢购</button>
            </div>
        </router-link>
    </li>
</ul>

```

- 二、编程式导航

  所谓编程式导航，就是编写逻辑，实现跳转

  这里主要用的是$router这个对象原型下面的一些方法，如：push() replace() go() back()

  它参照的是原生的 history 的API

  https://developer.mozilla.org/zh-CN/docs/Web/API/History

  

  - 视图

  ```vue
  <ul class="goodsUl">
      <li v-for="item in goodsList" :key="item.id" @click="goDetail">
          <img :src="item.img" :alt="item.goodsName" />
          <div>
              <h3>{{ item.goodsName }}</h3>
              <span>现价格：￥{{ item.oldPrice }}</span>
              <del>原价格：￥{{ item.newPrice }}</del>
              <button>立即抢购</button>
          </div>
      </li>
  </ul>
  
  ```

  - 逻辑代码

  ```js
  methods: {
      // 点击跳转到商品详情
      goDetail() {
          // console.log(this.$router);
          this.$router.push("/detail");
      },
  },
  
  ```



可以在详情页面中定义按钮，点击再返回来

```vue
<p class="m20">
    <button @click="$router.go(-1)">go的方式返回</button>
</p>
<p class="m20">
    <button @click="$router.back()">back的方式返回</button>
</p>

```





### 十一、首页商品列表跳转到商品详情携带动态路由参数（动态路由传参）

### 十二、分类组件中的分类列表跳转到商品列表携带query参数(query传参)



### 十三、封装全局组件（main.js中循环创建）

- 在src下创建common文件夹，在里面创建全局的组件（这里创建了两个组件：goBack.vue和goSearch.vue），并同时并创建一个index.js文件，用于管理所有的全局组件

![image-20220511223007878](/public/img/fourthStage/seven/image-20220511223007878.png)

​		src->common->index.js

```js
// 这个模块专门用于管理所有的全局组件
import Vue from 'vue';

// 引入全局组件
import goBack from './goBack';
import goSearch from './goSearch';

let obj = {
  goBack,
  goSearch,
};

// 循环创建
for (let attr in obj) {
  Vue.component(attr, obj[attr]);
}

```

- 在main.js中引入。一定要在实例的前面引入

  main.js中

```js
// 引入全局组件
import './common'

```

- 在需要使用的地方使用全局组件

```vue
<!-- 使用全局的返回组件 -->
<go-back></go-back>
<!-- 全用全局的搜索组件 -->
<go-search></go-search>

```







### 十四、封装全局过滤器

类似于封装全局组件

- 创建filters文件夹，里面放全局过滤器，并在下面创建一个index.js文件，管理全局的过滤器

  ![image-20220511222913861](/public/img/fourthStage/seven/image-20220511222913861.png)

  

  filters->toPrice.js

```js
// 保留num位小数点
export default (price, num=2) => {
    return price.toFixed(num);
}

```

​		filters->toUpper.js

```js
// 转大写
export default (str) => {
    return str.toUpperCase();
}

```

​		filters->index.js

```js
import Vue from 'vue';

// 引入全局过滤器
import toPrice from './toPrice';
import toUpper from './toUpper';

let obj = {
  toPrice,
  toUpper,
};

for (let attr in obj) {
  Vue.filter(attr, obj[attr]);
}

```

- main.js中引入，要在实例化的前面

```js
// 引入全局过滤器
import './filters'

```

- 使用

```html
<p>商品价格：{{ item.price | toPrice(2) }}</p>

```







### 十五、在脚手架中引入iconfont

- 网址

```
https://www.iconfont.cn/

```

1、先下载好字体图标代码，放到assets文件夹下

2、引入到main.js中

```js
// 引入字体图标
import './assets/font/iconfont.css'

```

3、使用

```vue
<button @click="$router.back()">
    <span class="iconfont icon-fanhui"></span>
    返回
</button>

```







### 十六、在脚手架中引入过渡动画

官网：https://animate.style/

1、下载

```sh
npm i animate.css

```

2、引入到main.js中

```js
// 引入过渡动画
import 'animate.css/animate.min.css';

```

3、谁要有过渡动画，就给哪个标签加transition，并用上动画库的类名

- enter-active-class  进来要用的class
- leave-active-class   离开要用的class

```html
<!-- 加上运动效果，animate__slideInDown  滑动向下 -->
<!-- animate__fadeIn 淡入 -->
<transition enter-active-class="animate__animated animate__fadeIn">
    <router-view></router-view>
</transition>

```
