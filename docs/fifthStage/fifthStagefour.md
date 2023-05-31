---

layout: fifthStagefour

title: 五阶段 | 第四天

---

```js
/*
*@ course 导航、自定义组件、 常用界面API、授权、获取用户信息、获取用户手机号、
*@ author 杨亚月
*@ time  2022/07/22
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

## 三、图片组件和地图组件

```html
<image src="/img/one.png" lazy-load 	show-menu-by-longpress bindload="_load"></image>
lazy-load  懒加载
show-menu-by-longpress  长按出现保存、小程序码。。。

```

```js
<map longitude="{{longitude}}" latitude="{{latitude}}" markers="{{mark}}"></map>


Page({
  data:{
    latitude:'',
    longitude:'',
    mark:[{
      longitude:116.40717,
      latitude:39.90469,
      iconPath:'../../img/load.gif'
    }]
  },
  // 页面一加载就获取
  onLoad(){
    let that = this
    wx.getLocation({
      success(res){
        that.setData({
          latitude:res.latitude,
          longitude:res.longitude
        })

      }
    })
  }
})


注意L要在app.json里声明如下代码：
  "permission": {
    "scope.userLocation": {
      "desc": "获取地理位置"
    }
  }
```



## 四、导航

vue跳转

```js
<router-link to="/login"></router-link>

this.$router.push("/login")
this.$router.replace("/login")
this.$router.go("/login")
```



### 4.1导航组件（声明式导航）

```html
<!-- 

  open-type="navigate"    保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面
  open-type="redirect"    不保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面
  open-type="switchTab"   跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
  open-type="reLaunch"    关闭所有页面，打开到应用内的某个页面
  open-type="navigateBack" delta="1"  返回  delta 返回页面的层级 最多10层
 -->

<navigator target="self" url="../imgcom/imgcom" open-type="navigate">
  <button type="primary">navigate跳转</button>
</navigator>

<navigator target="self" url="../imgcom/imgcom" open-type="redirect">
  <button type="primary">redirect跳转</button>
</navigator>

<navigator target="self" url="../index/index" open-type="switchTab">
  <button type="primary">switchTab跳转</button>
</navigator>

<navigator target="self" url="../imgcom/imgcom" open-type="reLaunch">
  <button type="primary">reLaunch跳转</button>
</navigator>


<!-- 跳转到外部小程序 -->
<navigator target="miniProgram" app-id="wx8ca0e15a6a544407">
  <button>进入小u讲故事</button>
</navigator>
```



### 4.2路由API（编程式导航）

```js
1、先绑定点击事件
 goimg(){   非tabbar
    wx.navigateTo({
      url:"../imgcom/imgcom"
    })
  }
  
  
  
   goimg(){ tabbar
    wx.switchTab({
      url: '../index/index',
    })
  }
```

### 4.3导航传参

```js
(1)组件形式传参  直接拼接
<navigator target="self" url="../imgcom/imgcom?id=10&title=hello" open-type="navigate">
  <button type="primary">navigate跳转</button>
</navigator>


(2)api形式传参
    wx.navigateTo({
      // url:"../imgcom/imgcom?age="+this.data.age+"&name="+this.data.name+""
    url:`../imgcom/imgcom?age=${this.data.id}&name=${this.data.name}`
    })

```

### 4.4接收导航传参

```js
在到达的页面的onLoad声明周期函数里接收
比如A页面跳到B页面   在B页面的onLoad里接收
  onLoad(options){
      console.log(options)
  }

```

**说明**：可以在微信开发者工具选择普通编译--继续选择添加编译模式--选择启动页面--添加启动参数即可，然后即可在当前目标页面的onLoad中获取参数

## 五、自定义组件

自己封装组件

### 5.1概述

小程序支持简洁的组件化编程，开发者可以将页面内的功能模块抽象成自定义组件，以便在不同的页面中重复使用；自定义组件在使用时与基础组件非常相似

### 5.2创建自定义组件

```
暂无
```



### 5.3组件引用与使用 

```json
局部引用： 在某个页面的json文件里引用

  "usingComponents": {
    "my-btn":"../../components/my-btn/my-btn"
  }

全局引用：  在app.json 文件里引用
  "usingComponents": {
    "my-btn":"./components/my-btn/my-btn"
  }

```

```html
使用：
<my-btn></my-btn>

```



### 5.4丰富组件

定义了一个按钮

```js
组件的wxml里
<view class="{{size}}" style="background:{{color}}">
  按钮{{color}}
</view>
组件的wxss里
.mini{
  width: 200rpx;
  height: 80rpx;
  border: 1px solid #666;
  border-radius: 40rpx;
  background: #999;
  text-align: center;
  line-height: 80rpx;
  color: #fff;
  margin: 20rpx 0;
  font-weight: bold;
}

.default{
  font-weight: bold;
  width: 400rpx;
  height: 80rpx;
  border: 1px solid #666;
  border-radius: 40rpx;
  background: #999;
  text-align: center;
  line-height: 80rpx;
  color: #fff;
  margin: 20rpx 0;
}

组件的js里

Component({
  // 调用组件时  传来的属性 必须在properties定义
  properties: {
    size:{
      type:String, //传来属性的值的类型 ,null 代表所有类型都能传
      value:"default" //属性的默认值
    },
    color:{
      type:null,
      value:"#999"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})


```



### 5.5数据与方法 

```js
 /**
   * 组件的初始数据
   */
  data: {
    msg:"hello"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    change(){
      console.log("自定义方法")
    }
  }

```



### 5.6properties组件对外开放属性 

```
// 调用组件时  传来的属性 必须在properties定义 
在丰富组件里

```



### 5.7slot插槽使用 

#### 5.7.1默认插槽  只有一个插槽

```html
组件的wxml里
<view class="{{size}}" style="background:{{color}}">
   <slot></slot>
</view>

页面中使用
<my-btn size="mini" color="red"> 红按钮 </my-btn>


```

#### 5.7.2多个插槽

```html
(1)组件的js里声明多个插槽
  options:{
    multipleSlots:true
  },
(2)组件的wxml里定义出来插槽
<view class="{{size}}" style="background:{{color}}">
   <slot name="one"></slot>
   <slot name="two"></slot>
</view>
(3)页面的wxml里使用
<my-btn>
    <view slot="one">111</view>
    <view slot="two">222</view>
</my-btn>

```



### 5.8组件间通信与事件 

```js
(1)父传子
vue里
父组件：  :msg="传的值"
子组件：  props:["msg"]

小程序：
如上边 自定义按钮，在页面组件里传的color  size  这就是父传子

(2)子传父
vue里

子组件： this.$emit("自定义函数名","传的值")
父组件：@自定义函数名   在里边直接拿值

小程序 （模拟vue）

子组件： this.triggerEvent("abc",this.data.val)
父组件：<my-view bindabc="fn"></my-view>   在fn函数里直接拿值



(3)子传父（小程序特有的） 借助选择器

在父组件的wxml
<my-view id="myview" bindtap="fn2"></my-view>


在父组件的js
fn2(){
   let res = this.selectComponent("#myview")
   console.log(res.data)
},

```



### 5.9observers数据监听器 

```js
在自定义组件的js里监听


组件的wxml
<view> num1:{{num1}} </view>
<view> num2:{{num2}} </view>
<view> sum:{{sum}} </view>
<view> price:{{obj.price}} </view>

<!-- 点击按钮时 让num1和num2 ++   
      sum跟着去计算
-->
<my-btn bindtap="add"></my-btn>

组件的js

// components/my-obs/my-obs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    num1:10,
    num2:9,
    sum:0,
    obj:{
      id:1,
      price:99
    }
  },

  attached(){
    this.setData({
      sum:this.data.num1+this.data.num2
    })
  },

  observers:{
    // 监听num1 num1 
    // "num1,num2":function(a,b){
    //   this.setData({
    //     sum:a+b
    //   })
    // }


    // 监听所有
    "**":function(obj){
      console.log(obj)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    add(){
      this.data.num1++
      this.data.num2++
      this.data.obj.price++
      this.setData({
        num1:this.data.num1,
        num2:this.data.num2,
        obj:this.data.obj
      })
    }
  }
})


```



### 5.10组件的生命周期

- 组件实例刚刚被创建好时， `created` 生命周期被触发。此时还不能调用 `setData` 。 通常情况下，这个生命周期只应该用于给组件 this 添加一些自定义属性字段。
- 在组件完全初始化完毕、进入页面节点树后， `attached` 生命周期被触发。此时， `this.data` 已被初始化完毕。这个生命周期很有用，绝大多数初始化工作可以在这个时机进行。
- 在组件离开页面节点树后， `detached` 生命周期被触发。退出一个页面时，如果组件还在页面节点树中，则 `detached` 会被触发。

## 六、API

### 6.1API概述

API（Application Programming Interface，应用程序接口）是一些预先定义的接口（函数），目的是提供应用程序与开发人员基于某软件或硬件得以访问一组例程的能力。（微信提前封装好的  开发者直接用）

小程序提供主要的API:小程序开发框架提供丰富的微信原生 API，可以方便的调起微信提供的能力，如获取用户信息，本地存储，支付功能等。

#### 6.1.1api分类

```
(1)事件监听api
以 on 开头的 API 是事件监听api    wx.onXXXXX  

(2)同步api
以 Sync 结尾的 API 都是同步 API

(3)异步api
大多数 API 都是异步 API，如 wx.request，wx.login 等。这类 API 接口通常都接受一个 Object 类型的参数
异步可以写回调函数形式  也支持promise

(4)云开发api
开通并使用微信云开发，即可使用云开发API，在小程序端直接调用服务端的云函数

云开发 就是代表后端
前端一个人可以既写前端又写后端
有了云开发  前端直接访问数据库

添加到数据库  wx.XXXXXX.add
查询         wx.XXXXXX.get

```



### 6.2缓存

```
vue  存本地存储
localStorage.setItem(key,value)
localStorage.getItem(key,value)
localStorage.removeItem(key,value)
localStorage.clearItem(key,value)


缓存大小
一条缓存数据  最大1M   所有缓存数据不能超过10M
wx.setStorageSync(key,value)  存  同步
wx.setStorage(key,value)          异步

wx.getStorageSync(key)       取
wx.getStorage(key) 

wx.removeStorageSync(key)    移出一个
wx.removeStorage({})

wx.clearStorageSync()       清空所有
wx.clearStorage()



```

```js
set(){
    let admininfo = {
      username:"admin",
      pwd:"123456",
      token:"dhfdshfidshfoishfushfshfsf"
    }

    wx.setStorageSync('admininfo', admininfo)
    
    // wx.setStorage({
    //   key:"age",
    //   data:18,
    //   success(res){
    //     console.log(res)
    //     // XXXX
    //   }
    // })

    // wx.setStorage({
    //   key:"age",
    //   data:18
    // }).then(res=>{
    //   console.log(res)
    // })
  },


  get(){
    // let res = wx.getStorageSync('age')
    // console.log(res)


    wx.getStorage({
      key:'age',
      success(res){
        console.log(res.data)
      }
    })
  }

```



### 6.3网络(重点)

**语法**

```
Ajax
axios
wx.request



this.$axios.get("接口地址",{params:{需要的参数}}).then(res=>{
	
})


语法：
wx.request({
	url:"接口地址",
	method:"GET/POST",
	data:{XXX},
	header:{
		请求头：token
	}，
	success(){
	
	},
	fail(){
	
	}
	
})

```

#### 6.3.1get

```js
  get(){
    wx.request({
      url: 'http://localhost:3000/products',
      method:"GET",
      data:{},
      header:{},
      success(res){
        console.log(res)
      }
    })
  },

```

#### 6.3.2post请求

```js
  post(){
    wx.request({
      url: 'http://localhost:3000/login',
      method:"POST",
      data:{
        name:'of',
        age:18
      },
      header:{},
      success(res){
        console.log(res)
      }
    })
  }

```

#### 6.3.3promise封装

```js
// 封装网络请求

const http = (options)=>{
   return new Promise((resolve,reject)=>{
    wx.request({
      url: 'http://localhost:3000/'+options.url,
      method:options.method || 'GET',
      data:options.data || {},
      header:options.header || {},
      success(res){
        resolve(res)
      },
      fail(err){
        reject(err)
      }
    })
   })
}

export default http

```

```js
页面中调用：
    // let options = {
    //   url:"products"
    // }

  //  http(options).then(res=>{
  //    console.log(res)
  //  })

  // let res = await http(options)
  // console.log(res)
.then 和 await 二选一使用

```





## 七.常用界面api及案例

常用界面API：wx.showToast()、wx.showLoading()、wx.hideLoading()、wx.setNavigationBarTitle()

案例需求：请求接口，获取数据，进行数据渲染，添加点击事件，跳转页面，动态显示导航，使用交互api，完善页面加载效果

代码案例：

```

```



## 八、授权

### 8.1概述

(1)部分接口需要经过用户授权同意才能调用,比如获取用户信息，保存图片到相册等，我们把这些接口按使用范围分成多个 scope ，用户选择对 scope 来进行授权，当授权给一个 scope 之后，其对应的所有接口都可以直接使用。
(2)此类接口调用时：

- 如果用户未接受或拒绝过此权限，会弹窗询问用户，用户点击同意后方可调用接口；

- 如果用户已授权，可以直接调用接口；

- 如果用户已拒绝授权，则不会出现弹窗，而是直接进入接口 fail 回调。请开发者兼容用户拒绝授权的场景。

  

### 8.2检测授权状态

```
暂无
```

### 8.3进行授权

```

```



## 九、获取用户信息

### 9.1通过API获取用户信息

```
暂无
```

### 9.2基础库兼容

```
暂无
```



## 十、获取用户手机号

(1)获取微信用户绑定的手机号，需先调用wx.login接口;
(2)需要用户主动触发才能发起获取手机号接口,该功能不由 API 来调用，需用 button 组件的点击来触发
(3)目前该接口针对非个人开发者，且完成了认证的小程序开放（不包含海外主体）

### 10.1微信登录

```
暂无
```

### 10.2开放数据检验与解密

小程序可以通过各种前端接口获取微信提供的开放数据,但是开发者服务端获取这些开放数据时，需要对发放数据进行解密;

```

```

### 10.3获取手机号码

测试号地址：https://developers.weixin.qq.com/sandbox

代码案例：

```

```

## 十一、课后作业

```
1基础作业
(1)当天课上代码至少练习1遍
(2)根据开发能力、云开发、weui组件实现用户授权登录
a.要求：  
		通过用户授权登录后将授权的用户信息写入到数据库中
b.完成标准：
		参考基础作业2图片及基础作业2【用户授权登录】小视频效果
c.参考知识点：
		开发能力
		云开发
		weui组件
		动态设置window
2拓展作业
在基础作业2的基础上，添加用户生活照批量上传功能，将图片首先上传至云端最后将返回的连接存储到数据库中，保证图片上传和返回连接顺序的一致性；

a.要求：  
		在基础作业2的基础上，完成用户生活照批量上传功能，保证上传和返回连接顺序一致性
b.完成标准：
		参考拓展1作业图片及拓展作业1【用户生活照批量上传】小视频效果
c.参考知识点：
		开发能力
		云开发
		weui组件
		promise语法使用 promise.all  async  await语法糖

```