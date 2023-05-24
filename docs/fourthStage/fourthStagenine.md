## day09 UI框架、css预处理与vuex状态管理

### 课程回顾

- vue的基本指令
- 表单的输入
- 事件的绑定
- 常用的修饰符
- 生命周期
- watch侦听器
- computed计算属性
- 过渡动画
- 过滤器
- 组件的创建方式
- vue-cli脚手架
- 组件的传值（组件的通信）
- 如何在脚手架中引入插件
- ref属性
- slot槽口
- is属性
- 组件的缓存 （keep-alive） activated
- 混入
- vue-router
- axios 数据交互

------

### 一、UI框架

#### 1.1、pc端

- elementUI

  - 官网地址

  ```
  https://element.eleme.cn/#/zh-CN
  ```

  - 概念

  ```
  Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库
  ```

  - 通过npm下载安装(安装到项目依赖中)

  ```
  npm i element-ui@2.15.8
  ```

  - 全局引入

  main.js

  ```js
  // 全局引入elementUI框架
  import ElementUI from 'element-ui'
  // 全局引入elementUI样式
  import 'element-ui/lib/theme-chalk/index.css'
  Vue.use(ElementUI)
  ```

  - 组件分类

  ```
  Basic：基本组件
  Form：表单
  Data：数据
  Notice：通知
  Navigation：导航
  Others：其它
  ```

  - 使用element-ui

  ```
  1、初始化项目并重置（三步）
  2、创建 components / pcDemo.vue 模块
  3、设置路由，并在app.vue中设置出口
    {
      path: '/pcdemo',
      component: () => import('../components/pcDemo'),
    },
  4、main.js 中全局引入 element-ui
  ```

  

##### 1、Layout 布局

`用得较少`

通过 row（行） 和 col（列） 组件，并通过 col 组件的 `span` 属性，我们就可以自由地组合布局。span属性值为1--24，即占24分之几

```vue
<el-row>
    <el-col :span="12">你好啊</el-col>
    <el-col :span="12">你好啊</el-col>
</el-row>
```

关键：要看Row Attributes 和  Col Attributes文档



##### 2、Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构

如：左右布局，上中下布局等等

```vue
<el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
</el-container>
```

```
<el-container>：外层容器。

<el-header>：顶栏容器。

<el-aside>：侧边栏容器。

<el-main>：主要区域容器。

<el-footer>：底栏容器。

```



##### 3、Icon 图标

```vue
<i class="el-icon-edit"></i>
<i class="el-icon-share"></i>
<i class="el-icon-delete"></i>
<el-button type="primary" icon="el-icon-search">搜索</el-button>

```



##### 4、Button 按钮

```vue
<el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>

```

加`plain`为朴素按钮，加`round`为圆角按钮，加`circle`为圆形按钮



##### 5、Radio 单选框

```vue
<template>
  <el-radio v-model="radio" label="1">备选项</el-radio>
  <el-radio v-model="radio" label="2">备选项</el-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>

```



##### 6、Checkbox 多选框



##### 7、Input 输入框



##### 8、InputNumber 计数器



##### 9、Select 选择器



##### 10、Cascader 级联选择器



##### 11、Switch 开关（不常用）



##### 12、Slider 滑块（不常用）



##### 13、时间

常用（DateTimePicker 日期时间选择器）



##### 14、Upload 上传



##### 15、Form 表单

主要用到表单验证



##### 16、Table 表格

重要，用得多



##### 17、 Tree 树形控件

用于分配权限



##### 18、Message 消息提示



##### 19、MessageBox 弹框



##### 20、NavMenu 导航菜单



##### 21、Dialog 对话框



都看看，有个印象









#### 1.2移动端

- vantUI

  - 官网地址

  ```
  https://youzan.github.io/vant/v2/#/zh-CN/
  
  ```

  - 概念

  ```
  轻量、可靠的移动端 Vue 组件库
  
  ```

  - 下载命令

  ```
  npm i vant@latest-v2
  
  "vant": "^2.12.50"
  注意：选组件时，也要注意版本
  
  ```

  - 全局引入

  main.js

```js
// 全局引入vantUI
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

```



```
1、创建 components / vantDemo.vue 模块
2、设置路由，并在app.vue中设置出口
  {
    path: '/vant',
    component: () => import('../components/vantDemo'),
  },
3、main.js 中全局引入

```



组件分类

```
基础组件
表单组件
反馈组件
展示组件
导航组件
业务组件

```



##### 1、按钮

```vue
<van-button type="primary">主要按钮</van-button>
<van-button type="success">成功按钮</van-button>
<van-button type="default">默认按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button>

```



##### 2、Cell 单元格

```vue
<van-cell title="地址" icon="location-o" />
<van-cell title="我的钱包" icon="balance-o"></van-cell>
<van-icon name="balance-o" />

```



##### 3、Toast 轻提示

注意点：

如果是视图，可以直接使用，如果是js，就要单独引入

如这里用了Toast，不单独引入就会报错

```vue
<script>
import { Toast } from "vant";
export default {
  data() {
    return {};
  },
  mounted() {
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
    });
  },
};
</script>

```



#### 关于UI框架的总结

关键看手册





### 二、css预处理器

css预处理器有：**less**、sass、stylus

**使用vue脚手架创建项目时选择css预处理器**

![image-20220925210324428](/public/img/fourthStage/nine/image-20220925210324428.png)

这里以less为例

![image-20220926142047500](/public/img/fourthStage/nine/image-20220926142047500.png)

#### 目录

```
-src
	-less
		index.less 主要的css文件
		color.less 颜色
		size.less  大小

```

#### 使用

color.less文件内容如下

```less
@bg1: red;
@bg2: yellow;
@bg3: green;

```

size.less文件内容如下

```less
@size30: 30px;
@size40: 40px;
@size50: 50px;

```

index.less 引入所有的less文件

```less
@import "./color.less";
@import "./size.less";

```

组件中使用less

```vue
<style scoped lang="less">
@import "../less/index.less";
h3{
  	font-size: @size30;
  	background: @bg1;
}
</style>

```





------

### 三、vuex状态管理（vue的核心插件）

组件通信的方式：

- 父子组件通信：props
- 子父组件通信：自定义事件、ref
- 非父子组件通信：1、中央事件管理（基本不用）  2、离线存储    3、vuex状态管理



#### 2.1 概念

```
共享数据的管理
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式
它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化

注意点：
vuex不是永久性存储，当刷新的时候会回到初始状态。所以它在应用同步操作的时候（没有调用接口），要结合离线存储去实现

一道面试题：vuex 和 离线存储的区别？
1、相同点: 都可以实现数据共享
2、不同点：
	vuex不是永久性存储，一刷新就回到初始状态，但是它是响应式的数据变化。
	离线存储它是永久性存储，但是它没有响应式的数据变化，当数据发生变化，它不刷新，页面是不会改变的
3、使用场景：一般都会结合使用，比如登录、购物车等

```



vuex五大核心

```
state			状态(唯一的数据源)
getters			缓存数据
mutations		变化    （需要commit提交）  （修改数据的唯一方法）
actions			行动    （需要dispatch派遣） （发起异步请求，交给mutations修改数据）
modules			模块

```

![](/public/img/fourthStage/nine/image-20220621112307224.png)

![](/public/img/fourthStage/nine/vuex.png)

总结：如果要异步改变仓库中的数据，必须dispatch触发一个actions（actions中是异步），actions请求完数据后，提交一个commit去触发mutations（mutations中是同步），mutations去修改state，当state一发生变化，依赖它的getters也发生变化，视图就改变。



#### 2.2官网地址

```
https://v3.vuex.vuejs.org/zh/

```

#### 2.3 使用场景

```
只有复杂的中大型项目才会考虑利用vuex去管理一些共享数据
一般的普通项目不需要调用vuex

```

#### 2.4 引入方式

##### 1、单独下载并自定义仓库

- 下载命令。注意这里用的是3的版本

```
npm i vuex@3
+ vuex@3.6.2

```

- 在src下，创建store文件夹，创建index.js文件

```js
// 引入vue核心库
import Vue from 'vue'
// 引入vuex核心插件
import Vuex from 'vuex'
// 调用vuex插件
Vue.use(Vuex)

// console.log(Vuex); // 是一个对象，它下面有Store构造函数方法，用于创建实例
// console.log(new Vuex.Store()); // 实例

// 实例化vuex的仓库并返回配置对象
export default new Vuex.Store({
    // state，唯一的数据源，在组件中可以通过$store.state.name得到
    state:{
        name:'巧克力'
    }
})

```

- 把封装好的仓库模块，注入到vue实例上（main.js中）

```js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

```

至此，在所有的组件实例上，就可以见到一个$store对象

- 创建好one.vue和two.vue两个组件，并配置好路由及路由出口
- 在组件中使用数据

```html
<h2>使用vuex中的数据：{{$store.state.name}}</h2>

```

- 访问http://localhost:8080/#/one或http://localhost:8080/#/two







##### 2、通过脚手架创建项目时引入vuex核心插件

步骤：

1、安装时选择vuex

```
vue create 项目名

```

![image-20220215172316875](/public/img/fourthStage/nine/image-20220215172316875.png)

2、项目初始化，三步

```
一、删除components下面的helloword.vue组件、assets下面的图片、views文件夹
二、初始化路由的模块 

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = []
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



3、创建组件one.vue和two.vue，设置路由及出口

4、在store->index.js的state下面创建数据

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '小王快跑'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

```

5、组件中使用数据

```
<h2>从vuex中获取的数据：{{$store.state.name}}</h2>

```

访问http://localhost:8080/#/one或http://localhost:8080/#/two



### 四、vuex的核心模块

关于vuex，关键有：state、getters、mutations、actions、modules、辅助性函数六块

- state：唯一的数据源
- getters：数据源和视图的中间层，具有缓存效果
- mutations：唯一修改数据的方法（同步，commit提交触发）
- actions：执行异步，再提交到mutations去修改数据 （可以同步和异步，dispatch派遣触发）
- modules：vuex提供拆分模块的方法，主要用于精减主的index.js
- 辅助性函数：用于在视图中精减获取数据或调用方法



#### 3.1 state

state（状态）：唯一的数据源，用于管理共享数据

- 概念

```
官方：
Vuex 使用单一状态树，用一个对象就包含了全部的应用层级状态。至此它便作为一个“唯一数据源 (SSOT (opens new window))”而存在

vuex本身也是响应式的数据变化

```

- 用法

```js
{
	state:{
		// 定义的数据源
	}
}

```

```
组件中取值
$store.state.属性名

```





#### 3.2 getters

- 概念

```
它类似于计算属性，具有缓存的效果
一般我们会将它做为state和视图的中间层所存在
当然大量的计算逻辑，你也可以放置在getters中

```

- 用法

```js
{
	getters:{
		名称(state){
			return state中的内容
		}
	}
}

```



如下这个name值，它在state中的层级比较深 ，我们直接取，要写好几层，而我们通过getters处理之后，层级就简单很多。

当然，它更重要的是对state中的数据做逻辑处理返回，整体而言，它的使用比较简单

![image-20220215214731949](/public/img/fourthStage/nine/image-20220215214731949.png)





#### 3.3 mutations

mutations（变化）：是修改state的唯一方式，且它只能操作**同步**方法

- 概念

```
官方概念：
更改 Vuex 的 store 中的状态的唯一方法是提交 mutation

```

- 用法

```js
// 组件视图中的逻辑：commit去触发mutations中的方法。commit中的type类型传入到mutations中做为函数名
{
	methods:{
		自定义方法名(){
			this.$store.commit('type类型', 参数);
		}
	}
}

// 仓库代码：type类型就是逻辑中的type类型。参数state是数据仓库，参数payload即commit传过来的参数
{
	mutations:{
		type类型(state, payload){
			// state即唯一的数据源
            // payload 代表的参数
		}
	}
}

```

![image-20220926144925704](/public/img/fourthStage/nine/image-20220926144925704.png)





#### 3.4 actions

actions（行动）：它和mutations一样都是方法，但是有以下不同

1、它不能直接修改state（只有mutations可以修改state。但它可以提交commit让mutations修改state）

2、它可以实现同步或异步操作



- 概念

```
官方概念：
action 类似于 mutation，不同在于：
	action 提交的是 mutation，而不是直接变更状态。
	action 可以包含任意异步操作。

```

- 用法

```js
// 组件视图中的逻辑：actions要用dispatch触发，它里面的type类型传到actions当函数名使用。actions中触发mutations
// 总之：先到actions，再到mutations
{
	methods:{
		自定义方法名(){
			this.$store.dispatch('type类型',参数)
		}
	}
}

// 仓库代码：actions中处理后，再调用
{
	mutations:{
		mutation中的type类型(state, payload){
			// 修改state
            // payload 代表的 参数
		}
	},
	actions:{
		type类型(context, payload){ // 此context是整个仓库对象，包含所有方法
            // 异步操作得到结果后，再调用commit
			context.commit(mutation中的type类型, payload)
		}
		
        // 或者利用解构
		type类型({commit},payload){
            // 异步操作得到结果后，再调用commit
			commit(mutation中的type类型, payload)
		}
	}
}

```

这里利用定时器演的异步

![image-20220926152230727](/public/img/fourthStage/nine/image-20220926152230727.png)



总结：mutations只能操作同步，而actions可以操作异步。但是actions它又不能直接操作state中的数据，必须要借助mutations。

actions中的方法，必须要用dispatch调用，然后在actions中，用commit方法调用mutations中的方法。





**关于仓库中命名建议**

如仓库中有一个列表叫list，则以此类推定义出getters、mutations、actions中的名字

```
state：list

getters：get_list

mutations：mutation_list

actions：action_list

```





#### 实战：vuex调用小U的banner接口

需求：本来这个banner只在首页用了。但是如果有这样的需求，banner在其它的页面也要使用，这样就要多次发起ajax请求，就会浪费性能。我们想把它放在vuex中，只用在仓库中调一次，其它的页面就都可以使用。

1、起后端服务

2、前端安装axios

3、封装request请求模块

request->index.js

```js
import axios from 'axios';

let http = axios.create({
    baseURL: '/api'
});

// 请求拦载
http.interceptors.request.use(req => {
    return req;
})

// 响应拦载
http.interceptors.response.use(res => {
    return res.data; // 这里做了数据过滤
})

export default http;

```

request->api.js

```js
import http from './index';

// 获取banner
export function getBanner() {
    return http.get('/getbanner');
}

```

4、封装banner.vue组件

5、定义banner路由

6、在banner.vue中调用接口，会报跨域错误

7、在package.json同级的目录下创建vue.config.js，全局配置，解决跨域（注意，一定要重启**前端服务**）

```js
module.exports = {
    devServer: {
        proxy: 'http://localhost:3000'
    }
}

```

8、在响应拦载哪里，做数据过滤，把一些不需要的去掉，只返回需要的数据

9、在banner.vue中，使用返回过来的数据并渲染页面

10、banner.vue一加载，就只需要数据，因此，把数据放入到仓库中，并通过getters传给组件

11、页面一加载，就要调取接口，但是调取接口是一个异步，将调取接口放到actions中。在banner.vue的mounted的钩子函数中调用

![image-20220621162326371](/public/img/fourthStage/nine/image-20220621162326371.png)

store->index.js

```js
import Vue from "vue";
import Vuex from "vuex";
import { getbanner } from "../request/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [], // banner数据
  },
  getters: {
    // 数据返给前端
    get_list(state) {
      return state.list;
    },
  },
  mutations: {
    mutation_list(state, payload) {
      state.list = payload;
    },
  },
  actions: {
    action_list({ commit }) {
      // 发起ajax请求(异步)
      getbanner()
        .then((res) => {
          if (res.code == 200) {
            // 成功了，commit发起一个mutations
            commit("mutation_list", res.list);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});

```

banner.vue

```vue
<template>
  <div>
    <h1>banner组件</h1>
    <ul>
      <li v-for="item in $store.getters.get_list" :key="item.id">
        <img class="img" :src="item.img" alt="" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  mounted() {
    // 加载完成之后，触发actions中的方法
    if (!this.$store.state.list.length) {
      this.$store.dispatch("action_list");
    }
  },
};
</script>
<style scoped>
.img {
  width: 300px;
}
</style>

```





#### 3.5 modules (模块)

`先看下面的辅助性函数`

##### 1、概念

```
因为state是唯一的数据源，所以所有的数据都在这一个大的对象树上。导致state臃肿

modules的出现就是为了解决state臃肿的问题。
它可以把仓库切割成为一个个的小模块，每一个模块中都含有state，getters，mutations，actions，甚至当项目过于复杂的时候我们还可以再嵌套子模块

```



```
命名空间：namespaced

模块中的state会被挂载到主的state对象树中并携带模块名称防止冲突
但是其他的核心属性，比如getters、mutations、actions，都是直接未区分挂载到当前对象树中，为了防止冲突，我们通过设置命名空间为其携带模块名称

使用了命名空间之后，我们再用映射去取时，就不能用数组了，要用对象重命名来取值

```



store仓库下的index.js和其它的模块文件之间的关系如图

![image-20220619125129507](/public/img/fourthStage/nine/image-20220619125129507.png)



![image-20220525210617705](/public/img/fourthStage/nine/image-20220525210617705.png)



##### 2、操作方法

```
将stroe->index.js中的内容拆分到一个个模块中，每个模块都有自己的state、getters、mutations、actions
它还有 namespaced: true  启用命名空间

```



```js
// store->modules->list->index.js里的内容
export default {
    state: {
        name: 'list'
    },
    getters: {
        getTitle(state) {
            return state.name;
        }
    },
    mutations: {},
    actions: {},
    namespaced: true // 命名空间
}

```

![image-20220216144346397](/public/img/fourthStage/nine/image-20220216144346397.png)

```
为什么要启用命名空间，正常情况下，只有state下面的属性会放在以这个模块名为对象的下面，而其它的getters,mutations,actions都是放在主的仓库下
这样，要是每个模块都有同名的属性，会冲突，因此，加上命名空间后，每个前面都会有自己的模块名

如下：
list/getTitle
user/getTitle

```



![image-20220216144719911](/public/img/fourthStage/nine/image-20220216144719911.png)





store->modules->list->index.js是一个完整的模块，然后这个模块又再引入到stroe->index.js中

![image-20220216144851201](/public/img/fourthStage/nine/image-20220216144851201.png)



使用时：

![image-20220216145202393](/public/img/fourthStage/nine/image-20220216145202393.png)





### 五、辅助性函数

`先看这里辅助性函数，再看上面的模块`



- 辅助性函数的目的

```
辅助性函数最大的作用就是映射

如果直接在视图中取vuex中的数据或者调用方法，需要 $store.state.name 等这样的写法
而用辅助性函数，可以直接将值映身到视图的计算属性或方法中，直接调用，就省了$store.state

```



##### 4.1 mapState()

state它是vuex的唯一数据源

mapState（很少用，因为一般都把数据放在getters中，用mapGetters）

因为都是属性，所以拿回来之后，都放在computed计算属性中

```vue
<template>
    当取回来了state中的数据之后，就可以直接在这里渲染了，而不用像之前要$store.state.值

	{{映射仓库中state值}}
</template>

```

```js
// 视图逻辑中
import { mapState } from 'vuex'; // mapState它是一个函数，调用时传入数组或对象，数组或对象都是state中的属性名

// 计算属性中（因为它也是属性）
computed:{
    // 传入数组
	...mapState(['仓库中state值1', '仓库中state值2'])
    
    // 传入对象，用于给state中的属性设置别名（改名），在这个视图中就用这个别名渲染数据
	...mapState({ 
		想要渲染的名字: 仓库中state值1,
        想要渲染的名字: 仓库中state值2,
	})
}

```



##### 4.2 mapGetters()

getters相当于计算属性。它作为state和视图的中间层存在。它具有缓存效果

因为都是属性，所以拿回来之后，都放在computed计算属性中

```js
import {mapGetters} from 'vuex'

computed:{
	...mapState(['仓库中getters值1', '仓库中getters值2', ...])
	...mapState({
		想要渲染的名字:仓库中getter的值1,
        想要渲染的名字:仓库中getter的值2,
	})
}

```

```vue
<template>
  <div>
    <h1>one</h1>
    <h2>直接使用state中的数据：{{ $store.state.name }}</h2>
    <h2>使用getters转换的数据：{{ $store.getters.getName }}</h2>
    <hr />

    <h1>使用辅助函数</h1>
    <h2>使用辅助函数取得state中的数据：{{ name }}</h2>
    <h2>使用辅助函数取得getters中的数据：{{ getName }}， 今年{{ getAge }}岁</h2>

  </div>
</template>

<script>
// mapState, mapGetters因为是数据属性，所以放在computed中
// mapMutations, mapActions因为是方法，所以放在methods中
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["name"]),
    ...mapGetters(["getName", "getAge"]),
  }
};
</script>

<style scoped>
</style>

```





##### 4.3 mapMutations()

它是修改state的唯一方式，同步的

```js
import {mapMutations} from 'vuex'

// 因为它们都是方法，因此要放在方法里面
methods:{
	...mapMutations(['mutations名字一致']),
	...mapMutations({
		'自定义函数名称':'mutations名字'
	})
}

```

它的好处是，映射过来之后，定义在mutations中的方法名，可以在视图中直接调用且传参，**而不用commit提交**





##### 4.4 mapActions()

它不能直接修改state，它只能commit一个mutations。它可以操作异步方法

```js
import {mapActions} from 'vuex'

methods:{
	...mapActions(['actions名字一致']),
	...mapActions({
		'自定义函数名称':'actions名字'
	})
}

```

它的好处是，映射过来之后，定义在actions中的方法名，可以在视图中直接调用并传参，**而不用dispatch提交**



案例

```vue
<template>
  <div>
    <h1>one</h1>

    <hr />
    <h3>使用辅助性函数--state</h3>
    <p>{{ uname }}</p>
    <p>{{ uage }}</p>

    <hr />
    <h3>使用辅助性函数--getters</h3>
    <p>{{ get_name }}</p>
    <p>{{ get_age }}</p>

    <hr />
    <h3>使用辅助性函数--mutations</h3>
    <p>
      <button @click="mutation_name('辉哥')">修改名字</button>
    </p>

    <hr />
    <h3>使用辅助性函数--actions</h3>
    <p>
      <button @click="action_age(3)">异步修改年龄</button>
    </p>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

// console.log(mapState); // 函数,调用时传入数组或对象，数组或对象都是state中的属性名
// console.log(mapState(["name", "age"]));

export default {
  // 计算属性
  computed: {
    // ...mapState(["name", "age"]), // 用仓库中的原名
    // 改名
    ...mapState({
      uname: "name",
      uage: "age",
    }),
    ...mapGetters(["get_name", "get_age"]),
  },

  // 方法，
  methods: {
    ...mapMutations(["mutation_name"]),
    ...mapActions(["action_age"]),
  },
};
</script>

```



总结：不论是映射数据，还是映射方法，最终的目的是减少在视图层的代码，映射的数据在视图直接使用，映射的方法在视图中直接调用且可以传参。

减少代码量，这是目的