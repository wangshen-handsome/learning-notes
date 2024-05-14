---

layout: fifthStagefive

title: 五阶段 | 第五天

---

```js
/*
*@ course 常用界面API、授权、获取用户信息、获取用户手机号、weui、云开发
*@ author 杨亚月
*@ time  2022/07/25
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

## 三.常用界面api及案例

常用界面API：wx.showToast()、wx.showLoading()、wx.hideLoading()、wx.setNavigationBarTitle()

案例需求：请求接口，获取数据，进行数据渲染，添加点击事件，跳转页面，动态显示导航，使用交互api，完善页面加载效果

代码案例：

```js
数据加载中的提示

    wx.showLoading({
      title: '数据加载中',
    })
    
    if(res.data.showapi_res_body.remark=="查询成功！"){
      // 隐藏提示
      wx.hideLoading()
    }


提示信息  成功   。。。失败
      wx.showToast({
        title: '加载完毕',
        icon:'none',
        // image:"/imgs/laba.jpg"
        duration:1500
      })

动态设置顶部标题
  // api  动态设置顶部标题
    wx.setNavigationBarTitle({
      title:“标题名字”
    })



弹窗

  wx.showModal({
      title:"新增提示",
      // content:"确定要删除吗",
      showCancel:true,
      cancelText:"返回",
      confirmText:"跳转",
      cancelColor:"red",
      confirmColor:"yellow",
      editable:true,
      placeholderText:"请输入新增内容",
      success(res){
        console.log(res)
        if(res.confirm){
          // 执行确定操作
        }else{
          // 取消
        }
      }
    })
```



## 四、授权

### 4.1概述

(1)部分接口需要经过用户授权同意才能调用,比如获取用户信息，保存图片到相册等，我们把这些接口按使用范围分成多个 scope ，用户选择对 scope 来进行授权，当授权给一个 scope 之后，其对应的所有接口都可以直接使用。
(2)此类接口调用时：

- 如果用户未接受或拒绝过此权限，会弹窗询问用户，用户点击同意后方可调用接口；

- 如果用户已授权，可以直接调用接口；

- 如果用户已拒绝授权，则不会出现弹窗，而是直接进入接口 fail 回调。请开发者兼容用户拒绝授权的场景。

  

### 4.2检测授权状态  wx.getSeting  及进行授权

```js
首先检测之前有没有授权过，
如果授权了，直接调相应的api
如果拒绝了，继续弹窗提示

   wx.getSetting({
      success(res){
        console.log(res,"已经授权过的")
        // 调录音的授权
        if(res.authSetting["scope.record"]){
          // 授权过,直接调api
          wx.startRecord()
        }else{
          // 没有授权过，出现授权的弹窗
          wx.authorize({
            scope: 'scope.record',
            success(){
              console.log("允许")
              wx.startRecord()
            },
            fail(){
              console.log("拒绝")
              wx.showToast({
                title: '允许解锁更多功能',
                icon:'none'
              })
            }
          })
        }
      }
    })
```



## 五、获取用户信息

### 5.1通过API获取用户信息

```js
<!-- 不推荐的情况   直接拿到信息  不用授权 -->
<open-data type="userNickName"></open-data>
<open-data type="userAvatarUrl"></open-data>


推荐的情况
wxml文件里

<button bindtap="_getinfo" wx:if="{{!isShow}}">获取用户信息</button>


<view wx:else>
  <image src="{{userInfo.avatarUrl}}"></image>
  <text>{{userInfo.nickName}}</text>
</view>

js文件里

Page({
  data:{
    isShow:false,
    userInfo:{}
  },

  _getinfo(){
     wx.getUserProfile({
       desc:"获取用户信息",
       success:res=>{
        console.log(res.userInfo)

        // 当拿到用户信息后，可以把信息存入缓存
        // 用到时 去取  如果能取出 已经授权过
        // 如果取不出，代表没授权
        wx.setStorageSync('userinfo', res.userInfo)

        this.setData({
          userInfo:res.userInfo,
          isShow:true
        })

       },
       fail(){
         console.log("拒绝")
         wx.showToast({
           title: '允许解锁更多功能',
           icon:'none'
         })
       }
     })
  },
      // 点 编译  会走onLoad  在onLoad里判断有没有缓存
  onLoad(){
    let userinfo = wx.getStorageSync('userinfo') || null
    if(userinfo==null){
      // 没有授权，显示按钮
      this.setData({
        isShow:false
      })
    }else{
      // 受过权， 显示的头像信息
      this.setData({
        isShow:true,
        userInfo:userinfo
      })
    }
  }
})
```

### 5.2基础库兼容

```js
    if(!wx.getUserProfile){
      wx.showToast({
        title: '请升级您的微信',
        icon:'none'
      })
      return
    }
```



## 六、获取用户手机号

(1)需要用户主动触发才能发起获取手机号接口,该功能不由 API 来调用，需用 button 组件的点击来触发

(2)获取微信用户绑定的手机号，需先调用wx.login接口; （只有调用了wx.login 才有code,code解密时需要）

(3)目前该接口针对非个人开发者，且完成了 认证 的小程序开放（不包含海外主体）  （目前暂时使用测试号）

### 6.1微信登录

```js
wx.login({
	success(){
	
	}
})
```

### 6.2开放数据检验与解密

小程序可以通过各种前端接口获取微信提供的开放数据,但是开发者服务端获取这些开放数据时，需要对发放数据进行解密;

```
解密的接口   了解

```

### 6.3获取手机号码

测试号地址：https://developers.weixin.qq.com/sandbox    

测试号获取:登陆时  手机微信扫码  选择测试号登陆即可

代码案例：

```js
<button open-type="getPhoneNumber" bindgetphonenumber="gettel" >获取手机号</button>   出现弹窗


js：
Page({
  gettel(e){
    console.log(e)
    if(e.detail.errMsg=="getPhoneNumber:fail user deny"){
      // 拒绝
      wx.showToast({
        title: '允许解锁更多功能',
        icon:'none'
      })
    }else{
      // 允许
      let {encryptedData,iv} = e.detail
      //   加密数据     加密向量
      // 把手机号解密 （调接口）
      // 参数：{iv,encryptedData,appid,secret,code}
      
      let appid ="wx03fd641bb5605693"
      let secret = "8b353c6038500bc14534c5291089ce41"
      wx.login({
        success(result){
          let code = result.code
          wx.request({
            url: 'http://localhost:3000/v1/getPhoneNumber',
            data:{
              encryptedData,iv,appid,secret,code
            },
            success(telres){
              // 15560166232
              console.log(telres)
            }
          })
        }
      })
    }
  }
})

```

#### 4.检测登陆（了解）

```js
    wx.checkSession({
        success(){
          console.log("已登录")
        },
        fail(){
          console.log("未登录")
        }
      })

```



## 七、WeUI框架 

### 7.1组件库概述

一套基于样式库weui-wxss开发的小程序扩展组件库，同微信原生视觉体验一致的UI组件库，由微信官方设计团队和小程序团队为微信小程序量身设计，令用户的使用感知更加统一。

### 7.2安装构建使用

```json
扩展库的方式引入：（推荐  不计算组件库的大小）
1、在app.json 中  写入如下代码
 "useExtendedLib": {
    "weui": true
  }


2、页面中使用，需要在页面.json 文件中 先引入：（使用哪些 需要引入哪些）
 "usingComponents": {
    "mp-icon": "weui-miniprogram/icon/icon"
  }
  
3、在页面的wxml里 用
<mp-icon icon="add" color="black"></mp-icon>

```



### 7.3案例代码  （weui设计图  的顶部导航和tabbar）

```js
页面的json：
{
  "navigationStyle":"custom",
  "usingComponents": {
    "mp-icon": "weui-miniprogram/icon/icon",
    "mp-navigation-bar": "weui-miniprogram/navigation-bar/navigation-bar",
    "mp-tabbar": "weui-miniprogram/tabbar/tabbar"
  }
}

页面的wxml：
<!-- <mp-icon icon="add" color="black"></mp-icon> -->

<mp-navigation-bar
back="{{false}}"
background="red"
color="white"
>

<view slot="left" class="left">
  <text>首页</text> | <text>返回</text>
</view>

<view slot="center"> 
  <mp-icon icon="search" type="field" color="white"></mp-icon>订单查询
</view>
</mp-navigation-bar>


<mp-tabbar bindchange="_tab" list="{{list}}"></mp-tabbar>

页面的wxss：

.left{
  width: 160rpx;
  height: 60rpx;
  border: 1px solid #fff;
  border-radius: 40rpx;
  text-align: center;
  line-height: 60rpx;
  font-size: 24rpx;
}

页面的js：
Page({
  data:{
    list:[{
      "text":'订单查询',
      "iconPath":"/imgs/dd.png",
      "selectedIconPath":"/imgs/dded.png"
    },{
      "text":'收获地址',
      "iconPath":"/imgs/dd.png",
      "selectedIconPath":"/imgs/dded.png"
    },{
      "text":'会员等级',
      "iconPath":"/imgs/dd.png",
      "selectedIconPath":"/imgs/dded.png"
    },{
      "text":'客服帮助',
      "iconPath":"/imgs/dd.png",
      "selectedIconPath":"/imgs/dded.png",
      "badge":2
    }]
  },
  _tab(e){
    console.log(e.detail.index)
    if(e.detail.index==0){
      // 
    }else if(e.detail.index==1){
      // 
    }
  }
})

```



## 八、云开发 

前端可以操作后端

利用云开发 api 操作后端

### 8.1概述

云开发为开发者提供完整的原生云端支持和微信服务支持，弱化后端和运维概念，无需搭建服务器，使用平台提供的 API 进行核心业务开发，即可实现快速上线和迭代，同时这一能力，同开发者已经使用的云服务相互兼容，并不互斥。提供了包括数据库、云函数、存储等基础能力

### 8.2基础能力概述

```
三大能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码


```

### 8.3新建云开发模板

![1658735034595](/public/img/fifthStage/five/1658735034595.png)

### 8.4开通云开发、创建环境

```
开通云开发：点击工具栏  “云开发”  按钮  即可开通
创建环境：每个人都分配了两套免费环境，开通后 自动有一套，另一套自己创建

```

### 8.5初始化

![1658737051201](/public/img/fifthStage/five/1658737051201.png)



### 8.6数据库操作

增删改查

```js
1、初始化数据库
const db = wx.cloud.database()

2、增加操作
  _add(){
    db.collection("test").add({
      data:{
        username:'张三',
        age:19
      },
      // success(res){
      //   console.log(res)
      //   if(res._id){
      //     wx.showToast({
      //       title: '添加成功',
      //     })
      //   }
      // }
    }).then(res=>{
        if(res._id){
          wx.showToast({
            title: '添加成功',
          })
        }
    })
  }


3、获取
_get(){
    // 查询所有
    db.collection("test").get({
      success(res){
        console.log(res)
      }
    })

    // 根据id查询   doc()
    let id = "0a4ec1f962de54d31228c23d24647226"
    db.collection("test").doc(id).get({
      success(res){
        console.log(res)
      }
    })


    // 根据条件 where  查询  查询年龄是18的
    let where ={
      age:18
    }
    db.collection("test").where(where).get({
      success(res){
        console.log(res)
      }
    })

  }

更新
_update(){
    // 通过id更新   update(局部更新)    set（替换数据）
    let id = "0a4ec1f962de54d31228c23d24647226"
    db.collection("test").doc(id).update({
      data:{
        age:19
      },
      success(res){
        console.log(res)
      }
    })


    // 通过条件更新  把姓名是张三的 都改成李四
    // db.collection("test").where({username:'张三'}).update({
    //   data:{
    //     username:'李四'
    //   },
    //   success(res){
    //     console.log(res)
    //   }
    // })
  }


删除
  _remove(){
    // 通过id 删除   remove
    let id ="0a4ec1f962de54d31228c23d24647226"
    db.collection("test").doc(id).remove({
      success(res){
        console.log(res)
      }
    })


    // 通过条件删除  名字是李四的都删掉
    db.collection("test").where({username:'李四'}).remove({
      success(res){
        console.log(res)
      }
    })
  }

```

### 8.7云函数

(1)创建云函数

```
- 右击cloundfunctions  选择  “新建Node。js云函数”
-编写云函数（下图是删除多条的云函数）
-编写完成后，记得上传云函数

```

![1658741320705](/public/img/fifthStage/five/1658741320705.png)







(2)调用云函数

```js
在页面的js函数里调用

    // 调用云函数
    wx.cloud.callFunction({
      name:"remove",
      data:{  // 云函数需要的参数
        table:"test", 
        where:{
          age:19
        }
      },
      success(res){
        console.log(res)
      }
    })

```

### 8.8文件存储

```
暂无
```

## 九、课后作业

```
1基础作业
(1)当天课上代码至少练习1遍
(2) weui组件库的页面  完成 
(3) 创建一个用户表（获取用户信息，获取到之后  存入数据库）

```
