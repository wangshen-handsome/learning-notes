

```js
/*
*@ course  Behavior及计算属性computed 、分包、基础库版本兼容、骨架屏、发布
*@ author 杨亚月
*@ time 2022/07/26
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

## 三、组件代码特性共享Behavior及计算属性computed 

### 3.1Behavior组件间代码共享特性 

#### 3.1.1介绍

behavior是用于组件间代码共享的特性,意思就是定义一部分公共代码特性，每个 behavior 可以包含一组属性、数据、生命周期函数和方法。组件引用它时，它的属性、数据和方法会被合并到组件中，生命周期函数也会在对应时机被调用，方便管理与统一修改. 每个组件可以引用多个 behavior ，behavior 也可以引用其它 behavior 

### 3.2computed计算属性

Behavior就是一个行为    computed就是一个Behavior

#### 3.2.1概述

computed是小程序自定义组件扩展 behavior,在小程序组件中，计算属性 computed 和监听器 watch 的实现。在 data 或者 properties 改变时，会重新计算 computed 字段并触发 watch 监听器。目前针对的是component，在页面使用需要引入其他的三方库;

#### 3.2.2安装

```js
(1)详情  本地设置   勾选 使用npm模块
(2)生成package.json文件    命令：npm init -y
(3)下载计算属性的包    包名  miniprogram-computed   命令：npm i miniprogram-computed
(4)菜单栏里  工具 -> 构建npm


引入：
在自定义组件的js里
// 计算属性引入到页面里
let mycomputed = require("miniprogram-computed").behavior

注册：
  behaviors:[mycomputed],
```

#### 3.2.3computed 基本用法

```js
在自定义组件的js里

如下图：


自定义组件的wxml里：
<view>num1:{{num1}}</view>
<view>num2:{{num2}}</view>
<view>sum:{{sum}}</view>

<button bindtap="change">change</button>
```

![1658804033492](/public/img/fifthStage/six/1658804033492.png)



#### 3.2.4 购物车案例

```
课堂代码   cart页面
```



## 四、工程优化 

官网地址：https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages.html

### 4.1分包  

某些情况下，开发者需要将小程序划分成不同的子包，在构建时打包成不同的分包，用户在使用时按需进行加载。每个使用分包小程序必定含有一个主包。所谓的主包，即放置默认启动页面/TabBar 页面，以及一些所有分包都需用到公共资源/JS 脚本；而分包则是根据开发者的配置进行划分。

**优势**

(1)在小程序启动时，默认会下载主包并启动主包内页面，当用户进入分包内某个页面时，客户端会把对应分包下载下来，下载完成后再进行展示。（按需加载）
(2)单个分包/主包大小不能超过 2M,整个小程序所有分包大小不超过 20M,能够将工程大小扩充到20M
(3)对小程序进行分包，可以优化小程序首次启动的下载时间，以及在多团队共同开发时可以更好的解耦协作。

```

```

#### 1.1.配置分包结构     重点

在app.json  里

```json
  "subpackages":[{
    "root": "packageA",   分包的根目录
    "pages": [            分包下的页面
      "apple/apple",
      "banana/banana"
    ]
  },{
    "root": "packageB",
    "pages": [
      "cat/cat",
      "dog/dog"
    ]
  }],
```



#### 1.2.独立分包

自己独立起来的包， 不依赖主包

弊端：不能使用主包里的资源

```json
  "subpackages":[{
    "root": "packageA",
    "pages": [
      "apple/apple",
      "banana/banana"
    ]
  },{
    "root": "packageB",
    "pages": [
      "cat/cat",
      "dog/dog"
    ],
    "independent": true   开启独立分包
  }],


让谁是独立分包  就给谁加"independent": true

```



#### 1.3.分包预下载

提前加载出来  

preloadRule 配置  写在app.json 文件里

```json
  "preloadRule":{
    "pages/index/index":{
      "network": "all",   网络情况  all 所有网络   wifi 仅在wifi下加载
      "packages": ["packageA"]
    },
    "pages/logs/logs":{
      "network": "all",
      "packages": ["packageB"]
    }
  },
进入到index页面时   提前加载包A
进入到logs页面时    提前加载包B

```



### 4.2基础库低版本兼容 

小程序的功能不断的增加，但是旧版本的微信客户端并不支持新功能，所以在使用这些新能力的时候需要做兼容。

#### 4.2.1API 存在判断

```js
    if(!wx.getUserProfile){
      wx.showToast({
        title: '请升级',
        icon:'none'
      })
      return
    }

  wx.getUserProfile({
      desc: '获取用户信息',
    })
  }


```

#### 4.2.2wx.canIUse   是api

```js
 let res = wx.canIUse('getUserProfile')
    if (!res) {
      wx.showToast({
        title: '请升级',
        icon: 'none'
      })
      return
    }
  wx.getUserProfile({
      desc: '获取用户信息',
    })
  }

```



### 4.3骨架屏使用 

官网地址：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html

```
(1)点击模拟器右下角 “...”  选择生成骨架屏   （作用：生成骨架屏的 wxml 和 wxss文件）
(2)在页面的wxml里   引入骨架屏的  wxml文件
(3)在页面的wxss里   印入骨架屏的  wxss文件
(4)让骨架屏和实际的内容  二选一  出现  定义一个变量  做判断即可
(5)过两秒钟  改变变量的值 （在实际开发中  数据获取到时候 就改变变量的值）

参考课堂代码的  cart页面

```

可在 `project.config.json` 增加字段 `skeletonConfig` 进行骨架屏相关配置

增加的内容  

![1658820276477](/public/img/fifthStage/six/1658820276477.png)



注意:一旦修改了骨架屏配置   需要重新点击三个点  生成骨架屏    才会更新新的 配置

## 五、小程序发布

- 调接口写的小程序

  ```
  (1)先登进微信后台  配置服务器域名（域名配置的是  调接口时  用到的服务器地址   必须是https的协议）
  (2)直接点击 上传   按钮
  (3)提交审核
  (4)等待审核通过  在版本管理里  点击提交发布按钮
  
  
  ```

  ![1658826678978](/public/img/fifthStage/six/1658826678978.png)



- 云开发写的小程序

  ```
  (1)直接点击 上传   按钮
  (2)提交审核
  (3)等待审核通过  在版本管理里  点击提交发布按钮
  
  ```

  

## 六、课后作业

```
(1)当天课上代码至少练习1遍 (云开发上传图片  分包  购物车)
(2)结合网络api  继续完善童话故事案例，实现故事详情页
(3)在之前作业的基础上，给童话故事项目中的首页、列表页面、详情页面添加骨架屏效果；最后项目发布上线。


```

