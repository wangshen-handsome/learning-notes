---

layout: fourthStageten

title: 四阶段 | 第十天

---

## 小U商城后台管理项目

### 一、创建项目

```
vue create umall-admin

一定要选择 vuex、vue-router
如果你想用less，就加上css预处理器
```

### 二、根据下载相关依赖

```
npm i element-ui@2.15.8 axios


+ element-ui@2.15.8
+ axios@0.27.2

element-ui这里要用2.15.8的版本，否则后面用时间时会报错
```

### 三、初始化清空并运行

1、删除assets下面的图片，components下面的组件，views文件夹

2、重置App.vue

3、重置router->index.js



```
npm run serve
```

### 四、全局引入element-ui

在main.js下

```js
// 全局引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入清除全局样式
import './assets/css/base.css';
```

创建清除样式 assets/css/base.css 并引入到main.js中

```css
* {
  margin: 0;
  padding: 0;
}
```



### 五、全局封装接口模块

创建：request->index.js

```js
// 这个文件模块用于管理：拦截器、get和post方法二次封装
import axios from 'axios'; // 引入axios
import qs from 'querystring'; // 引入原生node的字符串查询方法
import store from '../store'; // 引入封装好的仓库文件
let baseUrl = '/api'; // 基础url地址

// 创建请求拦截器
axios.interceptors.request.use((req) => {
  // if (req.url != '/api/login' || req.url != '/api/register') {
  //   req.headers.authorization = store.getters.getUser.token;
  // }
  return req;
});
// 响应拦截
axios.interceptors.response.use((res) => {
  // return res.data;
  return res;
});

/* 
  二次封装get方法
  url：指调取的接口地址
  params：数据参数对象
*/
export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseUrl + url, {
        params,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

/* 
  二次封装post方法
  url：指调取的接口地址
  params：数据参数对象
  isFile：是否有上传文件，默认不上传文件
*/
export const post = (url, params = {}, isFile = false) => {
  let data = null;
  if (isFile) {
    // 有文件上传
    data = new FormData();
    for (let attr in params) {
      data.append(attr, params[attr]);
    }
  } else {
    // 没有文件上传，则把数据拼成查询字符串
    data = qs.stringify(params);
  }

  return new Promise((resolve, reject) => {
    axios
      .post(baseUrl + url, data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
```

创建：request->api.js

```js
import { get, post } from './index';

// 这里是你所有的接口封装
// 接口就分两种情况，如果有参数，就传一个对象进来，如果没有参数，就不传参。不再区分get和post的传参不同

// 轮播图
export const getBanner = () => get('/getbanner');
```





### 六、根据产品需求创建一级路由以及重定向

一级路由定义在pages文件夹下。这里先定义**登录**一级路由模块并**重定向**（先开发登录），并设置好一级路由出口

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('../pages/login.vue')
  },
  {
    path: '*',
    redirect: '/login'
  }
]

const router = new VueRouter({
  routes
})

export default router
```



### 七、搭建登录页静态骨架以及基本逻辑验证

创建：pages/login.vue

这里只先做登录格式验证，不请求数据，验证成功，跳到index页

![image-20220619160911351](/public/img/fourthStage/ten/image-20220619160911351.png)



表单里面的关键属性有：

- el-form上的**model**属性和el-input上的**v-model**属性用于数据
- el-form上的**rules**和el-form-item上的**prop**属性用于较验规则
- 表单上的validate方法，进行全局验证（要在el-form上面加ref，方便找到它，好调用validate）

```
el-form 表单输入
	model	表单数据对象	object
	rules	表单验证规则	object，Form 组件提供了表单验证的功能，只需要通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可
	validate，对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise

```





### 八、搭建index界面的基本骨架

创建：pages/index.vue

使用 container 布局容器搭建基本布局

```vue
<el-container>
    <el-header class="my-header">
        <h1>小U商城后台管理系统</h1>
    </el-header>
    <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
    </el-container>
</el-container>

```



使用 NavMenu 导航菜单搭建左侧布局

```
el-menu
    default-active	当前激活菜单的 index	string
    background-color	菜单的背景色（仅支持 hex 格式）	string
    text-color	菜单的文字颜色（仅支持 hex 格式）	string
    active-text-color	当前激活菜单的文字颜色（仅支持 hex 格式）	string
    unique-opened	是否只保持一个子菜单的展开	boolean
    router	是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转

```



```
一级
login.vue
index.vue

二级
0欢迎页-home.vue
1菜单管理-menu
2角色管理-role
3管理员管理-user
4商品分类-cate
5商品规格-specs
6商品管理-goods
7会员管理-member
8轮播图管理-banner
9秒杀活动-seck

```



### 九、实现点击左侧导航渲染右侧视图

创建

views/home.vue（欢迎页）

views/menu.vue（菜单管理）

views/role.vue（角色管理）

views/user.vue（管理员管理）



二级视图，并做好路由出口

```js
const routes = [
  {
    path: '/login', // 登录页
    component: () => import('../pages/login'),
  },
  {
    path: '/index', // 页面布局而已，一旦到这里就让它重定向到欢迎页
    component: () => import('../pages/index'),
    children: [
      {
        path: '/home', // 欢迎页
        component: () => import('../views/home'),
      },
      {
        path: '/menu', // 菜单管理
        component: () => import('../views/menu'),
      },
      {
        path: '',
        redirect: '/home',
      },
    ],
  },
  {
    path: '*',
    redirect: '/index',
  },
];

```



注意点：

```
当页面刷新的时候，保持选中状态与当前path地址一致

如何做到？

default-active默认选中的项给一个变量，当刷新的时候，让这个变量指向当前地址
mounted() {
	// console.log(this.$route);
	this.defaultActive = this.$route.path;
},

```



### 十、拆分左侧导航菜单成为独立组件

创建components/vNav.vue，放左侧导航，然后再引入到index.vue中





### 十一、实现菜单管理的基本静态布局（未拆分组件）

面包屑

添加按钮

渲染列表

弹窗

其中面包屑和添加按钮放在menu主组件中，渲染列表放在list组件中，弹窗放在dialog中



### 十二、实现菜单管理的拆分

- menu.vue 主组件
- list.vue 列表组件
- dialog.vue 弹框组件



### 十三、实现弹框的静态视图

```
el-dialog 弹窗相关属性

visible	是否显示 Dialog，支持 .sync 修饰符
title	Dialog 的标题，也可通过具名 slot （见下表）传入
show-close	是否显示关闭按钮（可以不展示关闭按钮）
before-close	关闭前的回调，会暂停 Dialog 的关闭（当点击关闭按钮时，调用cancel回调函数）


center	是否对头部和底部采用居中布局

```





### 十四、点击列表编辑渲染编辑弹框

点击添加和编缉按钮，实现不同的标题和按钮



渲染弹窗form表单

看接口，菜单添加 /api/menuadd 要求的数据

根据接口写数据

```js
// 数据
      menuInfo: {
        pid: '', // 上级分类编号  注意：顶级菜单-0  这里写成字符串，方便验证
        title: "", // 菜单名称
        icon: "", // 图标
        type: 1, // 类型 1目录2菜单
        url: "", // 菜单地址
        status: 1, // 状态   1正常2禁用   number类型
      },

```

注意：关闭弹窗时，input输入的内容和验证不会自动关闭，必须在取消的函数里面重置数据和重置表单验证

```js
    // 封装一个关闭弹窗事件
    cancel() {
      this.$emit("cancel", false);
      this.menuInfo = {
        pid: 0, // 上级分类编号  注意：顶级菜单-0
        title: "", // 菜单名称
        icon: "", // 图标
        type: 1, // 类型 1目录2菜单
        url: "", // 菜单地址
        status: 1, // 状态   1正常2禁用   number类型
      };
      this.$refs.menu.resetFields(); // 重置表单验证
    },

```



```vue
<el-form :model="menuInfo">
    <el-form-item label="菜单名称" :label-width="formLabelWidth">
        <el-input v-model="menuInfo.title"></el-input>
    </el-form-item>

    <el-form-item label="上级菜单" :label-width="formLabelWidth">
        <el-select v-model="menuInfo.pid">
            <el-option label="上级菜单" :value="0"></el-option>
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            >
            </el-option>
        </el-select>
    </el-form-item>

    <el-form-item label="菜单类型" :label-width="formLabelWidth">
        <el-radio v-model="menuInfo.type" :label="1">目录</el-radio>
        <el-radio v-model="menuInfo.type" :label="2">菜单</el-radio>
    </el-form-item>

    <el-form-item label="菜单地址" :label-width="formLabelWidth">
        <el-input v-model="menuInfo.url"></el-input>
    </el-form-item>
    
    <el-form-item label="菜单图标" :label-width="formLabelWidth">
        <el-input v-model="menuInfo.icon"></el-input>
    </el-form-item>

    <el-form-item label="菜单状态" :label-width="formLabelWidth">
        <el-switch
            v-model="menuInfo.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
        >
        </el-switch>
    </el-form-item>
</el-form>

```





### 十五、实现菜单列表动态渲染

```
/api/menulist

```



注意点：访问这个地址，需要暂时注销token

```
未实现登录功能，没有token
所以暂时注释掉后端服务app.js中的token验证
大概64行
// 如果想被登录拦截器拦截判断的, 接口放到下面(此拦截器以下所有的路由都需要验证本次请求是否携带token以及token有效期)
// app.use(async (req, res, next) => {
//     if (!req.headers.authorization) {
//         res.send(MError(["请设置请求头,并携带验证字符串"]));
//     } else {
//         if (!await checkToken(req)) { // 过期  
//             res.send(Guest([], "登录已过期或访问权限受限"));
//         } else {
//             next();
//         }
//     }
// });

一定要记得重启

```

可以重新导入空表shop_api无数据.sql，免得原数据影响（可以先实现列表，后再导入空表）







### 十六、把菜单列表接口封装到vuex中模块中

使用vuex的模块数据仓库，创建http请求模块，解决跨域等问题



### 十七、实现菜单列表的渲染



注意给el-table-column渲染数据。item.row为每一条的数据

注意写法格式

```vue
<el-table-column label="状态">
    <template v-slot="item">
		<div>
            <el-button size="mini" plain v-if="item.row.status == 1">启用</el-button>
            <el-button size="mini" plain v-else>禁用</el-button>
        </div>
    </template>
</el-table-column>

```





### 十八、实现菜单的添加功能



### 十九、实现菜单的删除功能

删除注意还要有展示树形结构



要求数据中有children，el-table表格中有row-key="id"，它才能展示出树形结构

```
支持树类型的数据的显示。当 row 中包含 children 字段时，被视为树形数据。渲染树形数据时，必须要指定 row-key="id"。
default-expand-all 展开所有的子项

```

```
<el-table
    :data="get_menulist"
    border
    style="width: 100%"
    row-key="id"
    default-expand-all
>

```





### 二十、实现菜单的数据回显以及编辑功能

数据回显，关键是menu.vue调用dialog.vue，在dialog.vue中定义一个lookup函数，然后父级件通过refs找到它，并执行这个函数，并将ID传过去。