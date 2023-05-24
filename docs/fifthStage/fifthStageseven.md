

```js
/*
*@ course  uni-app工具创建、配置、基础语法、生命周期，组件通信、全局变量、VueX使用
*@ author 杨亚月
*@ time 2022/07/27
**/
```

## 一、知识点回顾

```
暂无
```

## 二、作业讲解

```
暂无
```



## 三、框架概述 

微信小程序 + vue ≈ uni-app框架

组件和api    用的微信小程序

语法  数据绑定 事件   用的vue

### 3.1uni-app概述

官网地址：https://uniapp.dcloud.io/

```
uni-app 是一个使用 Vue.js (opens new window)开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。  （写一套代码   可以发布多个平台）



uni-app在手，做啥都不愁。即使不跨端，uni-app也是更好的小程序开发框架（详见 (opens new window)）、更好的App跨平台框架、更方便的H5开发框架。不管领导安排什么样的项目，你都可以快速交付，不需要转换开发思维、不需要更改开发习惯。（就算只实现一端  也可以使用uni-app框架）
```

### 3.2为什么要学习uni-app?

```
写一套代码   可以发布多个平台
```



### 3.3其他多端框架（了解）

```
   wepy： (小程序)

		WePY 是一款让小程序支持组件化开发的框架,通过预编译的手段让开发者可以选择自己喜欢的风格去开发小程序。腾讯开源
		
​	mpvue：（vue语法）

		mpvue 是美团点评开源的一个使用 Vue.js 开发小程序的前端框架

​	Taro ：（react语法）  

		Taro 是由京东 - 凹凸实验室打造的一套遵循 React 语法规范的多端统一开发框架
```



## 四、项目创建

### 4.1HBuilderX工具创建（推荐）

![1658885958600](/public/img/fifthStage/seven/1658885958600.png)



#### 4.1.1运行

- 运行到浏览器

  点击菜单栏  运行-> 运行到浏览器 -> chrome

  需要提前安装两个插件

  1、[*scss*/sass编译](https://ext.dcloud.net.cn/plugin?id=2046)插件

  2、uni-app编译  插件

  插件安装方法：菜单栏  “工具”  ->插件安装

  

  

- 运行到微信小程序

  点击菜单栏  运行-> 运行到小程序模拟器 -> 运行到微信

  提前开启微信开发者工具的 服务端口

  在微信开发者工具里   设置-安全设置 -开启即可

  提前配置路径  如下图

  ![1658888179219](/public/img/fifthStage/seven/1658888179219.png)

### 4.2vue-cli脚手架创建（了解）

```
https://uniapp.dcloud.io/quickstart-cli.html
```



## 五、工程目录结构

![1658888998841](/public/img/fifthStage/seven/1658888998841.png)

```
uni.scss     内置样式文件
pages.json   全局配置文件  同小程序的  app.json
manifest.json  项目发布时 的配置（比如app的图标  名字...）
main.js        入口文件  同vue的main.js
index.html     主页面文件
App.vue  	   应用的入口文件（同小程序的app.js）

static        静态资源
pages         页面目录
unpackage     项目编译后的代码包 unpackage  dist  dev  项目的代码  （运行后自动生成的）
```



## 六、创建页面

![1658889755734](/public/img/fifthStage/seven/1658889755734.png)

```
右击 pages  选择  创建页面

```



## 七、工程配置pages.json

### 7.1globalStyle全局外观配置

```json
	// 设置顶部导航  同小程序的window
	"globalStyle": {
		"navigationBarTitleText": "uni-app框架",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor":"#6699cc",
		"backgroundColor":"#f00",
		"enablePullDownRefresh": true
		
	},

```

### 7.2页面配置

```json
	{
			"path": "pages/index/index",
			"style": {
				"navigationBarTitleText": "首页"
				// style里可以放所有globalStyle的配置项
			}
		}

```

### 7.3配置tabBar

```json
"list": [
			{
				"pagePath": "pages/index/index",
				"text": "首页",
				"iconPath": "./static/index.png",
				"selectedIconPath": "./static/index_sel.png"
			},{
				"pagePath": "pages/cart/cart",
				"text": "购物车",
				"iconPath": "./static/cart.png",
				"selectedIconPath": "./static/cart_sel.png"
			},{ 
				"pagePath": "pages/my/my",
				"text": "我的",
				"iconPath": "./static/my.png",
				"selectedIconPath": "./static/my_sel.png"
			}
		]
	}

```

### 7.4condition启动模式配置

在小程序端  添加编译模式时用的

```json
	"condition": {
		"current": 1,
		"list": [
			{
				"name": "index",
				"path": "pages/index/index",
				"query": "id=1"
			},
			{
				"name": "cart",
				"path": "pages/cart/cart",
				"query": "name=aaa"
			},
			{
				"name": "my",
				"path": "pages/my/my"
			}
		]
	}

```



## 八、基础语法

```
页面文件遵循 Vue 单文件组件 (SFC) 规范(opens new window)

组件标签靠近小程序规范，详见uni-app 组件规范
接口能力（JS API）靠近微信小程序规范，但需将前缀 wx 替换为 uni，详见uni-app接口规范

数据绑定及事件处理同 Vue.js 规范，同时补充了App及页面的生命周期
为兼容多端运行，建议使用flex布局进行开发

```



### 8.1数据绑定

```html
	   <view>{{msg}}</view>
		<!-- 属性绑定  v-bind  简写：-->
		<image :src="url"></image>
		<!-- 三元运算 -->
		<view :class="activeIndex==0?'active':''"></view>
		<view>{{num1+num2}}</view>

```

### 8.2条件渲染

```html
wx:if  wx:elif  wx:else
v-if   v-else-if  v-else


	<!-- 80-100    70-80  60-70 -->
		<view v-if="score>=80&&score<=100">优秀</view>
		<view v-else-if="score>=70&&score<80">良好</view>
		<view v-else>及格</view>

```



### 8.3列表渲染

```html
v-for="(item,index) in/of  arr"  :key="item.id"



	<view v-for="(item,index) of goods" :key="item.id">
			<text>{{item.goodsname}}</text>=====<text>{{item.price}}</text>
	</view>

```



### 8.4事件处理

```js
		<button @click="fn1($event,'lisi',999)">fn1</button>
		<button @click="fn2" data-title="hello">fn2</button>
		<button @click="fn3($event,888)" data-title="hello" data-age="18">fn3</button>
		
		
		
		   fn3(e,id){
				console.log(e,id)
			},
			fn2(e){
				console.log(e.currentTarget.dataset.title);
			},
			fn1(e,name,id){
				console.log(e,name,id);
			},

```



### 8.5计算属性

```js
computed:{
			// getter 方式    
			// sum(){
			// 	return this.num1+this.num2
			// }
			
			
			 // setter 方式
			 sum:{
				get(){
					return this.num1+this.num2
				},
				
				// 当计算的值 改变时 触发set函数
				set(val){
					console.log(val)
					this.num1 = Number(val.split(".")[0]) 
					this.num2 =Number(val.split(".")[1]) 
				}
			 }
		},

```



### 8.6静态资源及公共文件

```js
资源路径：

template  模板里写的路径
<!-- 相对路径 -->
		<image src="../../static/cart.png" mode=""></image>
		<!-- 绝对 -->
		<image src="/static/cart.png" mode=""></image>
		<image src="@/static/cart.png" mode=""></image>

css 里路径
	/* 相对 */
	/* @import url("../../common/css/ziyuan.css"); */
	/* 绝对 */
	/* @import url("@/common/css/ziyuan.css"); */
	@import url("/common/css/ziyuan.css");


js 的路径
// import ziyuan from "../../common/js/ziyuan.js"
	import "@/common/js/ziyuan.js"
	
	注意：js 文件不支持使用/开头的方式引入

```



### 8.7样式配置

```
结论：设计稿是750px   机型调成iphone 6 7 8 基准机型   量的是多少px 直接写多少rpx；


设计稿是750   1：1  量的是多少px 直接写多少rpx


设计稿是640   
如果设计稿是其他的尺寸，可以通过编辑器自带的功能配置比例

```

![1658906920167](/public/img/fifthStage/seven/1658906920167.png)

### 8.8下拉刷新

```js
需要提前开启页面的下拉刷新   在pages.json中开启

onPullDownRefresh() {
			this.msg = "web0104"
			// uniapp的api 停止下拉效果
			setTimeout(()=>{
				uni.stopPullDownRefresh()
			},500)
		},

```



### 8.9上拉触底

```js
		// 上拉触底触发的函数   默认距离是50  做分页用
		onReachBottom() {
			this.page++
			console.log(this.page)
			// 调用获取函数即可
		},

```



## 九、生命周期 

```
(1)应用的生命周期   在app.vue文件里
onLanuch（初始化）   onShow（显示/或切前台）  onHide （隐藏/切后台）

(2)页面的生命周期（pages里边的页面）   生命周期和小程序一样

onLoad（页面加载）  onShow（页面的显示）onReady（页面初次渲染完成）  onHide（页面的隐藏，可以返回） onunload（页面的卸载  无法返回）

(3)组件的生命周期   （自己创建的组件）  vue的八个钩子函数
创建阶段
beforeCreate
created

挂载阶段
beforeMount
mounted

更新阶段
beforeUpdate
updated

销毁阶段
beforeDestory
destroyed

```



## 十、组件通信

### 10.1单文件组件

![1658909895856](/public/img/fifthStage/seven/1658909895856.png)

```
新建  components 文件夹   右击  选择 新建组件

```



### 10.2父传子

![1658910237016](/public/img/fifthStage/seven/1658910237016.png)

![1658910259772](/public/img/fifthStage/seven/1658910259772.png)

### 10.3子传父



![1658910565855](/public/img/fifthStage/seven/1658910565855.png)

![1658910596599](/public/img/fifthStage/seven/1658910596599.png)

### 10.4兄弟之间组件传值

```js
(1)定义一个中间事件处理器  main.js 文件里
 Vue.prototype.$bus = new Vue()
(2)在一个兄弟里发
	toSon(){
				this.$bus.$emit("abc","我是大哥传来的数据")
	}
(3)在另一个兄弟里接
 		mounted() {
			this.$bus.$on("abc",res=>{
				console.log(res);
			})
		},

```



### 10.5uni-app页面通讯  （兄弟的传值）

```
(1)在一个兄弟里发
	toSon(){
				uni.$emit("toson","我是大哥传来的数据")
	}
(2)在另一个兄弟里接
 		mounted() {
			uni.$on("toson",res=>{
				console.log(res);
			})
		},

```



## 十一、全局变量

### 面试题

#### 10.1.1在微信小程序里  全局变量 有几种方式

```
1、app.js  里定义   在页面的js里 通过  getApp（）
2、本地缓存  wx.setStorageSync()   wx.getStorageSync()
3、模块化， 在utils目录新建一个js文件   在页面里引入使用

```



#### 10.1.2在uni-app    全局变量 有几种方式

```
1、app.js  里定义globalData       在页面的js里 通过  getApp（）
2、本地缓存  uni.setStorageSync()   uni.getStorageSync()
3、模块化， 在utils目录新建一个js文件   在页面里引入使用，，可以挂载原型
4、vuex

```



### 10.2公用模块（模块化）

```js
1、在utils目录里 新建js文件
const baseurl = "http://localhost:3000"
export default baseurl
2、在页面中导入使用
import baseurl from "../../utils/config.js"

```



### 10.3挂载 Vue.prototype

```js
main.js  里 
import config from "@/utils/config.js"
 Vue.prototype.$config = config

页面中使用
this.$config

```



### 10.4globalData

```
在app.vue  里定义
	globalData:{
			userinfo:{
				name:'of',
				age:18
			}
	}
		
页面里获取   getApp() 获取

```



### 10.5数据缓存

```
uni.setStorageSync("key","value")

uni.getStorageSync("key")

```



## 十二、Vuex状态管理

### 12.1概述

```
vue 里使用vuex  需要下载

uni-app里边内置了vuex  不要下载



状态：
state  
mutations
getter
actions
module

```



### 12.2创建仓库

官网地址：https://uniapp.dcloud.io/tutorial/vue-vuex.html

```js
在 uni-app 项目根目录下，新建 store 目录，在此目录下新建 index.js 文件。在 index.js 文件配置如下



// 页面路径：store/index.js 
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);//vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
	state:{//存放状态
		isLogin：false
	}
})
export default store


```



### 12.3将仓库store挂载到prototype   main.js

```js
 import store from "@/store/index.js"

```



### 12.4在页面文件中使用store

```js
获取时 可以用属性方式  也可以用辅助函数获取  mapState

computed:{
			// ...mapState("isLogin")
			isLogin(){
				return this.$store.state.isLogin
			}
		},

```



## 十三、课后作业

```
1基础作业
(1)当天课上代码至少练习1遍
(2)编写一个简单的摇色子效果
a.要求：  
	使用uni-app框架，完成页面效果布局，通过点击按钮，计算最终的结果
b.完成标准：
	参考基础作业2小图片及基础作业2小视频
c.参考知识点：
	uni-app
	动态数据绑定
	事件绑定

2拓展作业
预习条件编译，在基础作业2的基础上，把摇一摇按钮进行设置，不同终端显示不同内容，进行发布。
a.要求：  
	使用uni-app框架，完成页面效果布局，通过点击按钮，计算最终的结果,并且不同的终端显示的按钮的形式不一样
b.完成标准：
	参考基础作业1小图片及拓展作业1小视频
c.参考知识点：
	uni-app
	动态数据绑定
	事件绑定
	条件编译

```

