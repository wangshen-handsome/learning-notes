## day04过渡动画、基本组件、脚手架、静态资源引入

### 课程回顾

- 配置对象的属性: el data methods computed watch filters render template
- 指令：8个
- 生命周期：8个
- 修饰符：事件、键盘、表单
- 表单设置、获取，$set
- 脚手架



------



### 一、过渡动画（了解）

```
官方提供了过渡动画的方法
但是如果你的产品需求过于复杂，那你还是利用CSS3去完成
```

#### 1、内置过渡动画

**注意：**

给谁添加过渡动画，就在谁的外层加一个`<transition></transition>`标签

一个页面，它可能会有N个过渡动画，每一个transition标签如何区分呢？

我们通过给transition设置name属性去区分，当做class去使用，进来之前就写`name-enter`，离开之前就写`name-leave`，以此类推

```html
<transition name='aa'>
    <div v-show="isShow" class="box"></div>
</transition>
```



动画分两类，进来和出去，每类又分三个阶段

```
进来
enter 进来之前
enter-active 进来的过程中
enter-to  进来之后

离开
leave 离开之前
leave-active 离开的过程中
leave-to	离开之后
```

```html
<style>
    .box {
        width: 100px;
        height: 100px;
        background-color: red;
        position: absolute;
        top: 50px;
        left: 20px;
    }
    /* 注意：如果没有使用name属性，则动画前缀都以v-开头，如果使用了name属性，则以name属性开头 */
	/* 进来 */
    .aa-enter {
        left: -300px;
        opacity: 0;
    }

    .aa-enter-active {
        transition: all 1s;
    }

    .aa-enter-to {
        left: 20px;
        opacity: 1;
    }

    /* 离开 */
    .aa-leave {
        left: 20px;
        opacity: 1;
    }

    .aa-leave-active {
        transition: all 1s;
    }

    .aa-leave-to {
        left: 800px;
        opacity: 0;
    }
</style>

<!-- 
    给谁添加过渡动画，就在谁的外层加一个transition标签
    一个页面，它会有N个过渡动画，每一个transition标签如何区分？
    我们通过name属性去区分，当做class去使用
-->
<transition name='aa'>
    <div v-show="isShow" class="box"></div>
</transition>
```





#### 2、调用动画库

官网地址

```
https://animate.style
```

下载方式

```
npm i animate.css
  
版本号：animate.css@4.1.1
```

使用方式：引入到本地，再给transition添加类名

- enter-active-class  进来要用的class
- leave-active-class   离开要用的class

```html
<transition 
    enter-active-class='animate__animated animate__rotateIn' 
    leave-active-class='animate__animated animate__rotateOut'
>
    <div v-show="isShow" class="box"></div>
</transition>
```

注意点：我们一般不会**同时使用进来和离开**，一般调一个就可以了。



适用场景

```
v-if 和 v-show的切换

路由的切换

组件的切换
```



### 二、基本组件的概念（component）

组件为配置对象上的属性

#### 2.1 概念

```
我们会把共通的代码（有可能是一个标签也有可能是一大段代码或者代码片段），提取出来封装成为一个组件。

一个组件就是一个vue组件实例。每一个组件拥有vue实例的所有属性和方法（但没有el元素）。另外，data属性是一个函数，函数返回的是一个对象。

el元素，只有实例才有，组件没有el元素，哪么组件如何渲染呢？我们会把组件名称当做标签去进行渲染
组件要用到template属性，它就是模板
组件在哪里渲染，就在哪里注册

```

```
大前端的概念中，分为两大部分：模块和组件
一、模块
共通的js代码我们会封装成为模块，哪里需要哪里导入

ES6的模块化：导出方式决定了导入方式
	导出默认值
	导出：export default 变量/对象/函数
	导入：import 变量名 from 地址
	
	单个导出
	导出：export 变量/对象/函数
	导入：import {变量} from 地址
    

二、组件
共通的视图封装成为组件
哪里需要哪里引入

```





#### 2.2 创建方式

- 局部创建组件

```
components:{ // 复数，可以创建多个
	组件名称: {
		template: '', // 模板。可以是代码片段（只能有一个根标签），也可以是template标签的id
		// 组件其它的配置对象
	}
}

```



**局部创建实例**

```html
<div id="box">
    <!-- 使用组件 -->
    <!-- 组件最大的特点：可复用 -->
    <one></one>
    <one></one>
</div>

<script>
    new Vue({
        el: '#box',
        data: {},
        components: {
            // 一个组件，就是一个vue实例，它拥有vue所有的属性和方法。但是没有el元素，数据要是一个函数
            // 组件的视图来自于template模板，组件通过标签名在父组件视图中渲染
            one: {
                template: '<h1>李白就是好</h1>'
            }
        }
    })
</script>

```



- 全局创建组件（组件嵌套前再来看）

```
// 一次只能创建一个，要放在实例化的前面
Vue.component('组件名称', {
	template: '', // 可以是代码片段（只能有一个根标签），也可以是template标签的id
	// 组件配置对象
})

```

#### 2.3 组件最大的特点

```
可复用

```

#### 2.4 组件的命名规则

```
1、不要用html元素作为组件名称，即使是大写也不行，因为浏览器不区分标签名大小写
2、如果组件名称是驼峰命名，那么我们将组件名当标签名使用的时候，遇见大写前面要加 '-'

```

#### 2.5 template属性

```
一、template有且只能有一个根元素
二、如果视图过于复杂，全部定义在template属性中不太方便，我们可以单提出template标签。（template标签定义在vue容器的外面，它是不占位的）

```

```
在容器的外面，创建tempalte标签
它是不占位的，你创建N个tempalte，需要用id去区分
template属性指向的就是template标签的id

```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="./node_modules/vue/dist/vue.js"></script>
  </head>
  <body>
    <div id="app">
      <h1>{{msg}}</h1>
      <one></one>

      <hr />
      <two></two>

      <hr />
      <two></two>
    </div>

    <!-- 在vue容器的外面，创建template标签，用ID区分 -->
    <template id="aa">
      <div>
        <h1>{{msg}}</h1>
        <input type="text" v-model="msg" />
        <p>
          <button @click="add">点击</button>
        </p>
      </div>
    </template>

    <script>
      new Vue({
        el: "#app",
        data: {
          msg: "小王快跑",
        },
        components: {
          one: {
            template: "<div><h1>有狗咬</h1><h2>今天吃席</h2></div>",
          },
            
          // 一、template有且只能有一个根元素
          // 二、如果视图过于复杂，全部定义在template属性中不太方便，我们可以单提出template标签。（template标签定义在vue容器的外面，它是不占位的）
          two: {
            data() {
              return {
                msg: "李白说：睡不着真累",
              };
            },
            methods: {
              add() {
                alert("哥们，点我了");
              },
            },
            template: "#aa",
          },
        },
      });
    </script>
  </body>
</html>

```



#### 2.6 组件中的data为什么是一个函数?

```
因为组件是可复用且是独立的。如果data是一个对象，那么它就是引用数据类型，也就是共用一个地址空间，一个组件数据发生变化就会影响其他数据。所以组件中的data用函数去封装，因为函数是独立作用域不会互相干扰。

```

接着看看如何创建全局组件



#### 2.7 组件的嵌套

```
在vue中，我们整个项目可以看成是一颗组件树
所有的组件拼接成了一个完整的项目


注意点：
在哪里渲染组件，就要在哪个实例中注册组件

```

![image-20220209144637360](/public/img/fourthStage/four/image-20220209144637360.png)



- 实例化时，希望写成脚手架那样，则需要创建一个新的对象，对象中有template和components，实例化时用render调用这个对象
- 页面中的组件调用，就要写到这个template中了

![image-20220919114438112](/public/img/fourthStage/four/image-20220919114438112.png)



### 三、脚手架

注意点：在框架中`.js .vue .json`的文件后缀可以省略

#### 3.1 概念

```
vue-cli 是vue的的核心工具之一
通过命令，可以快速搭建出项目的基本骨架

```

#### 3.2 官网地址

```
https://cli.vuejs.org/zh/

```

#### 3.3 全局搭建环境（每一台电脑只需要安装一次）

注意点： 公司中，可以通过查询版本，确定是否需要安装

```
一、全局安装webpack和webpack-cli
npm i webpack@4 webpack-cli@3 -g

查询版本
webpack -v
webpack 4.46.0

=======================================
二、全局安装vue/cli脚手架
npm i -g @vue/cli@4

查询版本
vue -V  或者是  vue --version
@vue/cli 4.5.17

```

#### 3.4 如何创建一个vue项目

```
vue create 项目名称（不要使用驼峰，不要用关键字）

开发环境运行
npm run serve

生产环境运行（打包）
npm run build

安装依赖(当没有node_modules时运行。如当别人给你一个项目，或者从git上下载一个项目，它就是没有node_modules的，这个时候就要手动安装一下node_modules依赖)
npm i

```



#### 3.5 项目目录

```
README.md			阅读指南
package.json		依赖管理
package-lock.json	锁死文件，当node_modules发生变化时，就会出现，删除也没有关系
babel.config.js		用于解析es6以上语法
.gitignore			利用git上传要忽略的文件

src					代码主战场
----assets				静态资源文件夹，放置js、css、images、fonts等
----components			组件文件夹，一个 .vue 结尾的文件就是一个组件，一个组件中包含三部分
							1、视图 <template>   	html部分
							2、逻辑代码 <script>   js部分
							3、样式 <style>  		css部分
----App.vue				主组件，它和主的html挂钩，别的组件和它挂钩
----main.js				主的js文件，实例化vue就在这里

public				公有文件
----favicon.ico			收藏夹图标
----index.html			主的html文件（不要动）
node_modules		依赖包

```



#### 3.6 初始化项目

通过项目初始化，会得到一个空白的项目

通过以下两步

```
一、删除components下面的helloword.vue 和 assets下面的图片文件

二、初始化主组件（App.vue）
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



#### 3.7 组件的嵌套

```
第一、引入封装好的组件
import 自定义变量名 from '组件的地址'

第二、注册组件
components{
	自定义变量名
}

第三、视图的调用
<template>
  <div>
    <自定义变量名></自定义变量名>
  </div>
</template>

```

案例1：演示最基本的嵌套三步

案例2：演示上中下拆分，中间左右拆分

案例3：作业案例1

![image-20220919155223585](/public/img/fourthStage/four/image-20220919155223585.png)



### 四、单页应用（SPA）

完整的URL组成：

http://nodejs.cn/api/url.html

![image-20220605153943881](/public/img/fourthStage/four/image-20220605153943881.png)



SPA=> single-page-application

`single：单一的      page：页面		application：应用`

目前市场上所有的前端框架都是单页应用（vue、react、angular）

- 什么是单页应用

```
整个项目只有一个html
首次加载的时候，就加载了所有html、css、js

优点：切换速度很快，不需要全刷新，它采用的是局部刷新，大部分页面不需要重新加载，减少了服务器压力，用户体验感好。
缺点：首次加载过慢，会造成空白页面。不利于SEO优化

案例：阮一峰es6入门教程网站
https://es6.ruanyifeng.com

```

- 单页应用和多页应用的区别





### 五、scoped属性

`scoped：域内的`

```
当前样式在当前组件有效（除了根标签）。（建议：根标签一般可以用这个vue文件名作为它的class名）

<style scoped>
    
</style>

```



### 六、如何引入js和css

- 组件内部引入

```js
// 引入普通的js，即这个js没有导出数据，如rem.js。则在script标签下用import引入，可以省略后缀
import '地址';

// 引入普通的css，在当前style标签下引入，注意： .css后缀 不能省略
@import "地址.css";

```

- 全局引入，在main.js中

```js
// 全局引入js和css
import './assets/js/rem'
import './assets/css/home.css'

```



### 七、如何引入本地图片

使用图片

如果是线上的地址，可以放在data数据中直接使用

如果是本地的图片，可以直接在html标签中直接使用，如果放到data数据中，则必须先导入，再使用（导入方式分两种 ）



如果本地图片直接在html模板中使用，可以直接引，但是要放到js的data数据中，则需要如下引

```
方式一、通过node的require引入
data() {
    return {
         img: require('静态资源地址')
    };
},

方式二、通过es6的 import 引入，再赋给data中的数据
import 变量 from '静态资源地址'
data(){
	return {
		img: 变量
	}
}

```



- 线上图片直接使用
- 线上图片放在data数据中使用
- 直接引入本地文件夹中的图片
- node导入图片到data中
- es6导入图片到data中