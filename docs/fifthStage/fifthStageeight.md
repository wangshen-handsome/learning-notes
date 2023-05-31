---

layout: fifthStageeight

title: 五阶段 | 第八天

---

```js
/*
*@ course  环境判断、平台判断、网络请求、uView组件库、项目初始化、首页数据、商品分类列表
*@ author 杨亚月
*@ time 2022/07/28
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

## 三、运行环境判断

```
开发环境  开发过程中的环境   域名  http://localhost:3000
生产环境  线上的环境        域名  http://yangyayue.club


作用：可以动态的修改服务器地址

通过process.env.NODE_ENV   判断是啥环境

返回值：development（开发环境）   production （生产环境）
```



```js
在utils目录里 新建了一个config.js 文件

let baseurl = null;
if(process.env.NODE_ENV=='development'){
	// 开发环境
	baseurl = "http://localhost:3000"
}else{
	// 生产环境
	baseurl = "http://yangyayue.club"
}

```



## 四、平台判断

### 4.1编译期判断    （条件编译）

两个使用场景

- 不同端显示不同的内容
- uni-app框架 多端项目   不能保证每一端都没有问题，如果微信小程序端有问题  单独针对去处理

```html
template  可以编译
		<!-- #ifdef H5 -->
			<button>只在h5中显示</button>
		<!-- #endif -->
		
		<!-- #ifdef MP-WEIXIN -->
			<button>只在微信中显示</button>
		<!-- #endif -->
		
		<!-- #ifdef MP-ALIPAY -->
			<button>
				就在支付宝显示
			</button>
		<!-- #endif -->
		
		<!-- #ifndef H5 -->
			<button>除了h5端都显示</button>
		<!-- #endif -->



css  编译
<style>
/* #ifdef H5 */
.box{
	width: 117.19rpx;
	height: 117.19rpx;
	background-color: red;
}

/* #endif */


/* #ifdef MP-WEIXIN */
.box{
	width: 317.19rpx;
	height: 317.19rpx;
	background-color: yellow;
}
/* #endif */
</style>


js编译
fn(){
				// #ifdef H5
					uni.showToast({
						title:"在h5点击了",
						icon:"none"
					})
				// #endif
			
				
				// #ifdef MP-WEIXIN
					uni.showToast({
						title:"在为微信点击了",
						icon:"none"
					})
				// #endif
			
			}
```



## 五、网络请求

```js
// 封装网络请求
import baseurl from "./config"
const http = (options)=>{
   return new Promise((resolve,reject)=>{
    uni.request({
      url: baseurl+'/'+options.url,
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



## 六、uView 组件库

```
专门针对  uni-app框架设计的组件录
uni-app可以支持多端
uview也可以

https://www.uviewui.com/
```



### 6.1安装

```
通过下载方式安装：https://ext.dcloud.net.cn/plugin?id=6682
选择  下载插件 ZIP
下载完之后  把文件夹放到项目的根目录下，修改文件夹名字是 uview-ui

```



### 6.2配置

```
配置地址：https://v1.uviewui.com/components/downloadSetting.html

```



### 6.3快速上手

```html
	<u-icon name="chat"></u-icon>
	<u-count-down timestamp="3600"></u-count-down>

```



## 七、工程初始化

### 7.1项目介绍

```
前端：uni-app框架和 uviewui框架 写的  多端商城项目

后端：express框架+mysql+node        后端接口


```



### 7.2服务端初始化

```
1、运行管理后台 （vue项目 + elementui）
   npm i
   npm start
   
   账号：admin
   密码：123123
	

2、运行接口
   npm i
   npm start
	连接数据库（注意数据库的连接参数）
	

```





### 7.3导入工程模板

```
复制静态文件   新建一个u-shop  项目的目录

```



### 7.4工程运行

```
运行到h5
运行到微信

```



## 八、首页数据

### 8.1骨架屏 

```
暂无
```


### 8.2商品分类快速导航 

```
暂无
```



### 8.3商品活动banner

```
暂无
```



### 8.4商品秒杀活动

```
暂无
```



### 8.5热门推荐商品

```
暂无
```



## 九、商品分类列表

```
暂无
```



## 十、课后作业

```
完成当天项目内容

```

