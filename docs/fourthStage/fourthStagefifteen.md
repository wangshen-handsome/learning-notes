---

layout: fourthStagefifteen

title: 四阶段 | 第十五天

---

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

![](/public/img/fourthStage/fifteen/QQ截图20220212155911.png)

### 五、封装一二级路由

设置好一二级路由重定向

```js
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/index',
    component: () => import('../pages/index'),
    meta: {
      title: '首页',
    },
    children: [
      {
        path: '/home',
        component: () => import('../views/home'),
        meta: {
          title: 'home',
        },
      },
      {
        path: '/sort',
        component: () => import('../views/sort'),
        meta: {
          title: '分类',
        },
      },
      {
        path: '/cart',
        component: () => import('../views/cart'),
        meta: {
          title: '购物车',
        },
      },
      {
        path: '/user',
        component: () => import('../views/user'),
        meta: {
          title: '我的',
        },
      },
      {
        path: '',
        redirect: '/home',
      },
    ],
  },
  {
    path: '/order',
    component: () => import('../pages/order'),
    meta: {
      title: '订单',
    },
  },
  {
    path: '/search',
    component: () => import('../pages/search'),
    meta: {
      title: '搜索',
    },
  },
  {
    path: '/detail',
    component: () => import('../pages/detail'),
    meta: {
      title: '商品详情',
    },
  },
  {
    path: '/list',
    component: () => import('../pages/list'),
    meta: {
      title: '列表',
    },
  },
  {
    path: '*',
    redirect: '/index',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
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



### 六、全局引入vant

```
npm i vant@latest-v2
```

main.js

```
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

```



### 六、封装底部导航

```vue
<template>
  <div>
    <van-tabbar
      v-model="active"
      active-color="#ee0a24"
      inactive-color="#000"
      @change="changeEvent"
      route
    >
      <van-tabbar-item
        v-for="item in footBarList"
        :key="item.path"
        :to="item.path"
      >
        <span>{{ item.title }}</span>
        <template #icon="props">
          <img :src="props.active ? item.active : item.inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      footBarList: [
        {
          path: "/home",
          title: "商城",
          active: require("../assets//public/img/fourthStage/fifteen/tabbar/homeFull.png"),
          inactive: require("../assets//public/img/fourthStage/fifteen/tabbar/home.png"),
        },
        {
          path: "/sort",
          title: "分类",
          active: require("../assets//public/img/fourthStage/fifteen/tabbar/cateFull.png"),
          inactive: require("../assets//public/img/fourthStage/fifteen/tabbar/cate.png"),
        },
        {
          path: "/cart",
          title: "购物车",
          active: require("../assets//public/img/fourthStage/fifteen/tabbar/shopFull.png"),
          inactive: require("../assets//public/img/fourthStage/fifteen/tabbar/shop.png"),
        },
        {
          path: "/user",
          title: "我的",
          active: require("../assets//public/img/fourthStage/fifteen/tabbar/userFull.png"),
          inactive: require("../assets//public/img/fourthStage/fifteen/tabbar/user.png"),
        },
      ],
    };
  },
  methods: {
    changeEvent(n) {
      console.log("我执行了", n);
    },
  },
};
</script>
<style scoped>
.van-tabbar {
  border-top: 1px solid #ccc;
}
</style>

```





### 七、抽离底部导航

到此，移动端基本骨架搭建完成



### 八、封装全局组件：title  搜索





### 九、注册页面布局



### 十、开启后端服务、封装接口

```
npm i axios@0

```



### 十一、注册和登录



### 十二、全局路由导航守卫



### 十三、实现首页



### 十四、实现分类页



### 十五、实现列表页

下拉刷新，上拉加载







