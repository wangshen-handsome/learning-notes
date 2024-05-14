---

layout: fifthStagethree

title: 五阶段 | 第三天

---

```js
/*
*@ course 事件系统、wxss、wxs、表单组件、导航、自定义组件、常用api
*@ author 杨亚月
*@ time 2022/07/21
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

## 三、事件系统

### 3.1概念

```
事件是视图层到逻辑层的通讯方式。
事件可以将用户的行为反馈到逻辑层进行处理。
事件可以绑定在组件上，当达到触发事件，就会执行逻辑层中对应的事件处理函数。
事件对象可以携带额外信息，如 id, dataset, touches（传参）
```

### 3.2事件绑定

```js
bind*       eg：bindtap   bindlongpress   bindtouchstart....
catch*      eg：catchtap  catchlongpross  catchtouchstart....




事件函数的编写：
_keyvalue:function(){
    console.log("_keyvalue",this)
  },
      
  _jianxie(){
    console.log("_jianxie",this)
    // 每隔一秒 让id+1
    // setInterval(()=>{
    //   this.data.id++
    //   this.setData({
    //     id:this.data.id
    //   })
    // },1000)
    
    let that = this
    setInterval(function(){
      that.data.id++
      that.setData({
        id:that.data.id
      })
    },1000)
  },
  // 箭头函数不建议使用   this=》 undefined
  _jiantou:()=>{
    console.log("_jiantou",this)
  }
```

### 3.3传参接参

```html
传：

<!-- 
  id=""  只有id可以直接传
  data-* data-a  data-title  data-name  data-idx ....
 -->
<button bindtap="_chuancan" id="123" data-a="hello" data-title="小程序">传参</button>


接：
js里:
  // 传参 接参
  _chuancan(e){
    console.log(e.currentTarget)
    console.log(e.target)
  }
```

### 3.4事件分类

```
冒泡事件：当一个组件上的事件被触发后，该事件会向父节点传递。
非冒泡事件：当一个组件上的事件被触发后，该事件不会向父节点传递
```

总结：**

```
1、bind和catch的区别？
	bind  允许事件冒泡
	catch 阻止事件冒泡
	
2、currentTarget 和 target 的区别？

    currentTarget  事件绑定的当前组件  => 事件最终作用到哪个组件身上
    target         触发事件的源组件    =>  是谁触发了这个事件

从currentTarget取值  保险
```

## 四、WXSS样式

wxss相当于css来说  有哪些新特性（面试题）

### 4.1新特性 

```
与 CSS 相比，WXSS 扩展的特性有：

尺寸单位    rpx 单位  （响应式的px单位，可以自动的根据设备屏幕大小  自适应网页宽度）
样式导入    @import “路径”


rpx应用的 结论：
设计稿750px  手机机型调整成iphone 6 7 尺寸，，量的多大px  直接写多少rpx。就自动适配
```

### 4.2全局样式/局部样式 

```
全局样式  app.wxss
局部样式  页面.wxss 
```

### 4.3字体图标 

iconfont.cn

```
1、下载，放到项目里
2、复制iconfont.css 的代码  到 app.wxss里 （不要忘记改 字体文件的路径  .ttf的文件）
3、页面中使用
```

代码案例：

```
<text class="iconfont icon-fangdajing"></text>
```

### 4.4style 和calss

## 五、WXS脚本语法

### 5.1WXS脚本概述 

```

WXS（WeiXin Script）是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构

```
### 5.2WXS 模块

#### 5.2.1遵循CommonJS 模块化规范

  ```js
  // 在wxs里写的内容 如果要用 必须暴露
  // 必须使用commonjs 规范, 不能简写
  module.exports = {
    msg:msg,
    fn:fn
  }
  ```
 
#### 5.2.2 `<wxs>` 标签

注意：

1、必须给wxs 指定 module = “名字”

2、必须暴露（commonjs规范暴露）

```js
<view>{{mywxs1.msg}}</view>
<view>{{mywxs1.fn()}}</view>


<wxs module="mywxs1">
  // 和js一样
  var msg = "刚刚咋静音了，应该网的问题";
  function fn(){
    return "我是自定义函数"
  }


  
  // 在wxs里写的内容 如果要用 必须暴露
  // 必须使用commonjs 规范, 不能简写
  module.exports = {
    msg:msg,
    fn:fn
  }
</wxs>
```

#### 5.2.3.wxs 文件

1、新建外部的 .wxs文件   代码如下

```js
// 直接写js代码即可

// 99=》99.000
function fn1(price){
  return price.toFixed(3)
}

module.exports = {
  fn1:fn1
}


```

2、在页面中使用wxs文件

```html
先引入在使用：
<wxs src="../../wxs/test.wxs" module="mywxs2"></wxs>

<view>{{mywxs1.fn()}}</view>
```



#### 5.2.4反转字符串示例

```js
function reverse(str){
  // split 把字符串转换成数组
  // reverse  翻转方法  数组才有
  // join   把数组变成字符串
  return str.split("").reverse().join("")
}

module.exports = {
  fn1:fn1,
  reverse:reverse
}
```



## 六、视图容器组件

### 6.1swiper/swiper-item滑块视图容器 

```html
<swiper 
indicator-dots   显示指示点
indicator-color="red"  指示点颜色
indicator-active-color="yellow"  选中的知识点颜色
autoplay 				自动播放
interval="1000"			轮播时间间隔
circular				衔接滑动


>
  <swiper-item wx:for="{{banners}}">
     <image src="/img/{{item}}"></image>
  </swiper-item>
</swiper>


封装焦点
wxml
<view class="container">
  <swiper autoplay interval="1000" circular bindchange="_change">
    <swiper-item wx:for="{{banners}}">
      <image src="/img/{{item}}"></image>
    </swiper-item>
  </swiper>

  <view class="focus">
    <text class="{{index==activeIndex?'active':''}}" wx:for="{{banners}}"></text>
  </view>
</view>



wxss
swiper{
  height: 400rpx;
}
image{
  width: 100%;
  height: 100%;
}

.focus text{
  display: inline-block;
  width: 60rpx;
  height: 20rpx;
  background: #999;
  margin-right: 10rpx;
}
.focus{
  width: 100%;
  position: absolute;
  bottom: 40rpx;
  text-align: center;
}
.container{
  position: relative;
}

.focus .active{
  background: yellow;
}



js
Page({
  data:{
    activeIndex:0,
    banners:["one.png","two.png","three.jpg"]
  },

  _change(e){
    console.log(e.detail.current)
    this.setData({
      activeIndex:e.detail.current
    })
  }
})
```

### 6.2scroll-view可滚动视图区域 

横向

```html
<!-- 
  1、多个子元素宽度之和 超过父元素的宽
  2、给子元素设置内联块
  3、给父元素设置强制不换行
  4、给sroll-view 添加属性 scroll-x
 -->
<scroll-view class="father" scroll-x>
  <view class="left"></view>
  <view class="right"></view>
</scroll-view>


```

纵向滚动

```html
<!-- 
  1、子元素高度之和  大于父元素
  2、给scroll-view 添加属性 scroll-y
 -->

<scroll-view class="father" scroll-y>
  <view>美妆</view>
  <view>美妆</view>
  <view>美妆</view>
  <view>美妆</view>
  <view>美妆</view>
  <view>美妆</view>
  <view>美妆</view>
  <view>美妆</view>
  <view>美妆</view>
  <view>美妆</view>
  <view>美妆</view>
  <view>美妆</view>
  <view>美妆</view>
  <view>美妆</view>
  <view>美妆</view>
</scroll-view>
```



# 七、表单组件

```html
<form action="#" bindsubmit="_submit">
  <!-- type  键盘弹起的类型 -->
  姓名：<input type="text" name="username" placeholder="11" />
  密码：<input type="text" name="pwd" password placeholder="11" />

  选择性别
  <radio-group name="sex">
    <radio value="boy">男</radio>
    <radio value="girl">女</radio>
  </radio-group>
选择爱好
  <checkbox-group name="hobby">
    <checkbox value="a">写代码</checkbox>
    <checkbox value="b">写代码</checkbox>
    <checkbox value="c">写代码</checkbox>
    <checkbox value="d">写代码</checkbox>
  </checkbox-group>
<!--
    只要表单要提交  必须给按钮指定form-type属性 

    同时 form标签身上绑定bindsubmit事件
-->
  <button type="primary" size="mini" form-type="submit">提交</button>
</form>
```



#### 7.1picker 底部弹起的滚动选择器

```js
<picker mode="region" bindchange="change">
  请选择省市区:{{region[0]}}{{region[1]}}{{region[2]}}
</picker>
<picker mode="date">请选择日期</picker>
<picker mode="time">请选择时间</picker>



<!-- 自定义弹出的内容 -->
<picker mode="selector" range="{{range}}" range-key="name">请选择故事类型</picker>




js文件：
Page({
  data:{
    region:[],
    // range:[1,2,3]
    range:[{
      id:1,
      name:"儿童小故事"
    },{
      id:2,
      name:"大人小故事"
    },{
      id:3,
      name:"小猪佩吉小故事"
    }]
  },
  change(e){
    console.log(e.detail.value)
    this.setData({
      region:e.detail.value
    })
  }
})
```



# 八、课后作业

```
(1)表单页面
```



