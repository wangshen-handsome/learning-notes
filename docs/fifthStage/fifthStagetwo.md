---

layout: fifthStagetwo

title: 五阶段 | 第二天

---

```js
/*
*@ 场景值、逻辑层、WXML语法、WXSS样式、事件系统、WXS脚本语法、视图容器组件
*@ 杨亚月
*@ time 2022/07/19
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



## 三、场景值

### 3.1场景值概述

```
场景值用来描述用户进入小程序的路径
```

### 3.2使用场景

```
KFC

直接搜索小程序  直接点单   进入到首页
到店          扫码点单   进入到点餐页面

不同的情景使用小程序   进入不同的页面
```

### 3.3获取场景值

场景值id：https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html

方式一：

在app.js 文件里  有一个生命周期函数 onLaunch   在函数里直接获取

```js
onLaunch(e){
    // 场景值 通过 场景值id区分 e.scene
    console.log(e.scene)
    // 如果场景值是1001 打印 进入首页
    if(e.scene==1001){
      console.log("进入首页")
    }else{
      console.log("进入点餐页")
    }
    // 如果场景值是1011 打印 进入点餐页
  }
```

方式二：

在app.js文件里 有一个生命周期函数 onShow  在函数里直接获取

```js
  onShow(e){
    console.log(e.scene)
  }
```

方式三：

通过微信封装好的 api获取   [wx.getLaunchOptionsSync](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html)

```js
  onShow(){
       let res = wx.getLaunchOptionsSync()
       console.log(res.scene)
  }
```



## 四、小程序逻辑层   js

app.js    页面的js

### 4.1逻辑层概述 

```
小程序开发框架的逻辑层使用 JavaScript 引擎为小程序提供开发者 JavaScript 代码的运行环境以及微信小程序的特有功能。

逻辑层将数据进行处理后发送给视图层，同时接受视图层的事件反馈。
```

### 4.2小程序注册App() 

![1658285078960](/public/img/fifthStage/two/1658285078960.png)

```js
每个小程序都需要在 app.js 中调用 App 方法注册小程序实例，绑定生命周期回调函数、错误监听和页面不存在监听函数等。

App({
  // 生命周期
  // 进入小程序后只执行一次
  onLaunch(){
    console.log("监听小程序初始化。")
  },

  // 每次进入小程序时  都会执行  执行多次
  onShow(){
    console.log("监听小程序启动或切前台,小程序的显示")
  },

  // 每次离开小程序时  都会执行
  onHide(){
    console.log("监听小程序切后台。")
  },
  //错误监听函数
  onError(){
    console.log("报错啦")
  },
   // 访问不存在的页面执行的函数
  onPageNotFound(){
    console.log("页面找不到啦！！！！")
    // 重定向到404页面
    wx.redirectTo({
      url:"pages/page404/page404"
    })
  }
    
    
  // any 变量  数组  对象  函数   （开发者自己定义的） 以后可以充当全局变量在所有页面中使用   
  userinfo:{
    name:"于旭洋",
    age:18
  },

  arr:["张三","李四"],
  fn(){
    return "我是自定义函数"
  }

})
```

```js
getapp() 获取全局唯一的应用实例  （获取app.js的内容） 在页面中使用

在页面的js里写的
let app = getApp()
console.log(app.baseurl)
```





### 4.3页面注册Page()

![1658287703849](/public/img/fifthStage/two/1658287703849.png)

```js
注册小程序中的一个页面。接受一个 Object 类型参数，其指定页面的初始数据、生命周期回调、事件处理函数等

Page({
   // 初始数据  和vue一样
   data:{
     name:"于旭洋"
   },
    
    //  生命周期 只执行一次      调接口使用...
   onLoad(){ 
     console.log("监听页面的加载")
   },
  //  生命周期  每次进入到该页面都会执行  监听页面的显示
   onShow(){
    console.log("监听页面的显示")
   },
  //  执行一次
   onReady(){
    console.log("监听页面的初次渲染完成")
   },
   onHide  和 onUnload 都是离开页面时候执行的，具体执行谁 要看跳转的方式
    如果用wx.navigateTo跳转 保留了页面 没有卸载
    如果用wx.redirectTo跳转  就卸载页面
   onHide(){
     console.log("监听页面的隐藏")
   },
    
    onUnload(){
     console.log("onUnload--监听页面的卸载")
   },
   
  //  分享给朋友
   onShareAppMessage(){
     return{
       title:"有趣的内容"
     }
   },
  //  分享到朋友圈
   onShareTimeline(){},

  // 监听到下拉刷新
  // 记得提前在json文件里  开启下拉刷新
  onPullDownRefresh(){
    // 两种修改data的值的方式
    // 可以修改值  但是 不能更新页面
    this.data.class = "web班级"
    // 可以修改值  也可以更新页面
    this.setData({
      class:"web班级"
    })
  },

  // 上拉触底（页面中有滚动条） 做分页
  onReachBottom(){
    this.data.page++
    console.log(this.data.page)
    // 调接口 获取第二页的数据
  },  
 
})
```

A页面 跳转到 B页面     经过几个生命周期  (面试题)

```
A（onHide）-> B(onLoad) ->B(onShow) -B(onReady)
```



### 4.4模块化

可以将一些公共的代码抽离成为一个单独的 js 文件，作为一个模块。模块只有通过 [`module.exports`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/module.html) 或者 `exports` 才能对外暴露接口。es6也完全可以

```js
commonJS 规范
暴露

// module.exports = baseurl
module.exports = {
  baseurl,
  userinfo
}

引入
let {baseurl,userinfo} = require("../../utils/config")
console.log(baseurl,userinfo)
```

```js
// es6
// export default baseurl
export default {
  baseurl,userinfo
}



// es6 引入
import config from "../../utils/config"
console.log(config)
```



## 五、视图层概述 

```
框架的视图层由 WXML 与 WXSS 编写，由组件来进行展示。

将逻辑层的数据反映成视图，同时将视图层的事件发送给逻辑层。

WXML(WeiXin Markup language) 用于描述页面的结构。

WXS(WeiXin Script) 是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构。

WXSS(WeiXin Style Sheet) 用于描述页面的样式。

组件(Component)是视图的基本组成单元。
```

## 六、WXML语法

### 6.1wxml概述及作用 

```
WXML（WeiXin Markup Language）是框架设计的一套标签语言，结合基础组件、事件系统，可以构建出页面的结构。
```

### 6.2数据绑定  

基本绑定

```html
<view>{{name}}</view>
<!-- 对象 -->
<view>{{userinfo.age}}</view>
<view>{{userinfo.address}}</view>
<!-- 数组 -->
<view>{{goodlist[1].goodsname}}</view>
<view>{{goodlist[1].price}}</view>
<!--
   属性绑定 
  vue  动态绑定属性  v-bind 简写成 ：
  小程序里不需要  直接双{{}}
-->
<view class="{{box}}"></view>

<!-- 关键词绑定  hidden-->
<view hidden="{{false}}">显示</view>
```

```html
<!-- 
  在wxml里的运算只能做简单的运算

  算数运算
  字符串运算
  三元运算
  路径运算
 -->
 <view>{{num1+num2}}</view>
 <view>{{num1+num2+num3}}</view>
 <view>{{num1+num2+num3+66}}</view>
 <view>{{num1+num2+num3+66+1}}</view>

 <view>{{score>60?'及格':'不及格'}}</view>
 <view>{{userinfo.name}}</view>


 <!-- 不能用做稍微复杂的运算 -->
 <view>{{price.toFixed(2)}}</view>
```



### 6.3列表渲染 wx:for 

取别名：wx:for-item="val" wx:for-index="idx" 

```js
<!-- 自带item  index 直接使用 -->
<view wx:for="{{arr}}" wx:for-item="val" wx:for-index="idx"> 
{{val}} ---{{idx}} ----{{item}}
</view>

<view>====================</view>
<!-- 数组对象 -->
<view wx:for="{{goodlist}}">
  <view>商品名：{{item.goodsname}}</view>
  <view>价格:{{item.price}}</view>
</view>

<!-- 循环二维数组 -->
      
<view wx:for="{{goodlist1}}" wx:for-item="val">
  <view>类别:{{val.type}}</view>
  <view wx:for="{{val.children}}">
    <text>{{item.goodsname}}</text>
    <text>{{item.price}}</text>
  </view>
</view>
```

### 6.4wx:key 的问题

```
写完wx：for  自动的报一个警告  缺少wx：key
两种情况：
	如果列表是静态的  可以忽略  不用处理
	如果列表是动态的  必须处理
	
两种处理方法：
	1、 wx：key = “*this” 
	*this 使用的场景 要求 item是唯一的字符串或数字
	
	2、 wx：key = “唯一的属性”
	数组对象使用
```



### 6.5条件渲染  

```html
<!-- 
  vue  
    v-if   v-else-if  v-else
  小程序 
    wx:if   wx:elif   wx:else
 -->
 <!-- 90-100  70-90 60-70 <60 -->
 <view wx:if="{{score>=90&&score<=100}}">优秀</view>
 <view wx:elif="{{score>=70&&score<90}}">良好</view>
 <view wx:elif="{{score>=60&&score<70}}">及格</view>
 <view wx:else>不及格</view>
```

### 6.6模板 

```html
定义一个模板  提供给多个页面去使用
作用：提高代码的复用率


1、定义模板   template   name
<template name="mytem1">
  <view>我是自定义模板</view>
</template>

2、使用模板              is
<template is="mytem1"></template>
3、模板传参
<template is="mytem1" data="{{...msg}}"></template>
```

### 6.7引用

```html
<import src="../../template/header.wxml"></import>  只能引入template之内的内容
<include src="../../template/header.wxml"></include> 能引入template之外的内容
```



1、定义一个外部的模板

2、在页面中引入模板 并使用

```html
在页面的wxml里引入模板结构并使用
<import src="../../template/header.wxml"></import>
<template is="mytem2" data="{{menu}}"></template>

在页面的wxss 里引入模板的样式
@import "../../template/header.wxss";

页面的wxml里引入模板的wxml
页面的wxss里引入模板的wxss
```





## 七、课后作业

```
1、基础作业
(1)当天课上代码至少练习1遍
(2)根据模板语法、事件传参、data数据 更新进行案例编写，完成基础作业2封装加载更多模板案例效果
(3)根据模板语法、模板引入、模板传参，列表渲染完成购物车静态页面编写，参考基础作业3动态图效果，完成对应的效果
参考知识点：
模板定义、模板引入、使用

2、拓展作业

在基础作业3的基础上，通过wxs模块给价格保留两位小数，实现数量的++、--和删除操作。
参考拓展作业1动态图效果，完成对应的效果
```