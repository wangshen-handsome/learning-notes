## 一、es6模块化(重点)

在Node开发中，使用的是commonjs规范：

​	module.exports = {}

​	exports.xxx = 数据

​	require( 引入 )

模块化思想，能更好解决代码没有规范。

而在es6之前，前端（浏览器端）是没有模块化的。

但是在es6中，也就是语法层面上就支持了模块化，不依赖任何东西。

在我们以后学习 vue、react、小程序等，只要是前端就推荐使用es6的模块化语法 。



![image-20211104091242914](/public/img/thirdStage/nineteen/image-20211104091242914.png)



![image-20211104091256258](/public/img/thirdStage/nineteen/image-20211104091256258.png)





### 1. 使用es6模块化步骤

(1) 使用export暴露数据

(2) 使用import引入模块

(3) 在html中引入的**入口js文件**，注意为script的属性设置  **type="module"**，**html文件必须用服务器访问**



### 2. export

#### 暴露：

语法1：

```js
export var 变量1 = 值1;
export var 变量2 = 值2;
。。。。
```

语法2：（推荐使用）

```js
let 变量1 = 值1;
let 变量2 = 值2;
。。。
export {变量1,变量2,,}
```

描述：暴露多个数据，注意变量的名称和暴露的名称一致

#### 引入：

语法：文件名必须有后缀

```js
import { 变量1, 变量2, ... } from 文件
import { 变量 as 新变量名 } from 文件
```

描述：加载模块

```js
// a.js
// 第一种暴露方式：一个一个暴露
export let uname = 'zs';
export let age = 3;
export let fn = function () {
    console.log('我是前端开发');
}
```

```js
// b.js
// 第二种暴露形式：一起暴露（推荐使用）

let a1 = 10;
let a2 = 20;
let a3 = 30;

export { a1, a2, a3 };
```



main.js引入

```js
import { uname, age, fn } from './a.js';

console.log(uname);
console.log(age);
fn();

// -----------------------------

// 如果某个变量被使用了，则可以用别名来代替
let a3 = '平头哥'
import { a1, a2, a3 as aa3 } from './b.js';
console.log(a1, a2, aa3); // 10 20 30

console.log(a3); // 平头哥
```



### 3. export default

#### 默认暴露

语法：

```js
export default 内容
```

描述：只暴露一个数据



#### 引入

语法：

```js
import 变量 from "文件路径"
```



当然，在有默认暴露的时候，也可以暴露多个，但是要注意，在引入的时候，默认暴露要放在前面

```js
// c.js
// 有默认暴露，照样可以暴露别的
let b1 = 10;
let b2 = 20;
export { b1, b2 };


// 第三种方式：默认暴露
export default function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

```

main.js引入

```js
// 默认暴露的一定要写在其它暴露的前面
import getRandom, { b1, b2 } from './c.js';
for (var i = 0; i < 10; i++) {
    console.log(getRandom(2, 8));
}
console.log(b1 + b2);

```

![image-20220607094615369](/public/img/thirdStage/nineteen/image-20220607094615369.png)





## 二、websocket(了解)

了解websocket和http之间的区别应对面试



### 1、websocket介绍

http是无状态的特点，请求完毕立马断开连接 。

比如：聊天项目、实时更新的金融产品、实时更新的数据（体育）

像这种项目，我们第一印象就是使用ajax实现（ 在客户端开个定时器：每3秒、5秒去服务器发请求 ）：但是太浪费资源（对于服务器来说太累了）

websocket就是解决以上的问题。websocket是一个协议 。

![image-20210528101518143](/public/img/thirdStage/nineteen/image-20210528101518143.png)

### 2、socket.io模块

使用步骤： 

(0)生成项目管家

(1)下载socket.io的2的版本，同时下载express

```js
npm i socket.io@2
npm i express

```

(2)使用express搭建服务器并配置socket.io

```js
const express = require('express');
const app = express();
let server = app.listen(3000); // 端口开启成功之后，会返回一个http服务器对象

let io = require('socket.io')(server); // 引入socket.io，它返回一个函数，我们调用函数并传入http服务器，返回io服务器对象

```



(3)启动服务器

(4)配置客户端

(5)访问服务器建立连接

(6)业务代码



当启动使用socket.io的项目中，会暴露一个js文件给前端：**/socket.io/socket.io.js**

http://localhost:3000/socket.io/socket.io.js

前端就会有一个io方法（函数）

```js
let socket = io('http://localhost:3000'); // 调用io，传入websocket服务器地址，就会返回一个socket对象，通过这个socket对象，就可以向后端发起请求(emit) 和 接收后端的响应(on)

```

后端用on监听前端的连接，触发connect事件

```js
io.on('connect', (socket) => {
    // socket代表连接进来的哪个用户
    // io.sockets代表所有连接进来的用户

    console.log('有一个连接进来了');
})

```





### 3、常用方法



#### 3.1 io

语法：

```js
io( websocket服务器地址 )

```

描述：客户端与服务器端建立连接（**浏览器端使用**），返回socket对象



**先写emit，再写on。emit是传消息，on是接收消息**

#### 3.2 on

语法1：

```js
io.on( 'connect', callback )

```

**后端用**

描述1：语法1为当用户连接服务器则触发connect事件，注意：前端需要 io( websocket服务器地址 )





语法2：

```js
websocketObj.on( 自定义事件, callback )

```

前后均可

描述2：语法2为客户端监听服务器端发送过来的消息，也可以是服务器端兼听客户端发过来的消息

`作用：定义emit要执行的函数，第二个参数为函数`



#### 3.3 emit

emit:发射

语法1：

```js
websocketObj.emit( 自定义事件, 消息对象 )

```

前后均可

描述1：触发事件并发送消息



语法2：

```js
io.sockets.emit(自定义事件, 消息对象)

```

后端用

描述2：触发所有客户端兼听的事件并发送消息

`触发on定义的函数，第二个参数为数据`



```js
const express = require('express');
const app = express();
const server = app.listen(3000); // app.listen()调用，返回http服务器
const io = require('socket.io')(server); // 引入socket.io，它返回一个函数，我们调用函数并传入http服务器，返回io服务器对象
// 注意这里就有两个服务器。一个是http服务器，一个是io服务器


// io服务器对象，建立与客户端的连接，注意：它不会断开连接，连接事件必须是connect
// 只要有用户访问这个网站，就会建立此连接
// 当建立与客户端的连接成功以后，会返回当前这个用户的连接信息对象，socket即为请求进来的用户对象
// 总结：io为服务器对象，socket为某一个客户端，io.sockets为所有的客户端
io.on('connect', (socket) => {
    socket.on('qth', function (msg) {
        console.log(msg);

        // socket.emit('htq', '我是后端，我传给你消息了')
        io.sockets.emit('htq', '我给你们都发消息了')
    })
});

```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <input type="text" id="txt">
    <button id="btn">发送消息</button>

    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

    <!-- 当启动使用socket.io的项目中，会暴露此文件：/socket.io/socket.io.js，供前端使用 -->
    <script src="http://localhost:3000/socket.io/socket.io.js"></script>

    <script>
        // 只要引入了/socket.io/socket.io.js，就会有一个io，它是一个函数

        // 函数调用，会返回一个socket对象（函数调用要传参）
        // socket对象即可以兼听服务器触发的事件，也可以触发服务端兼听的事件
        let socket = io('http://localhost:3000');

        // 触发服务端兼听的事件
        $('#btn').click(function () {
            // 向后端发，用emit触发后端兼听的事件，把数据带过去
            socket.emit('qth', $('#txt').val())
        });

        socket.on('htq', function (msg) {
            console.log(msg);
        })
    </script>
</body>

</html>

```









## 三、webpack(难：了解)

### 1. webpack概念

webpack：**前端资源**模块化管理和打包工具。可以将许多松散的模块，按需打包成线上环境所需的前端资源。同时webpack依赖node环境 。webpack对一些模块的版本要求非常严格，因此，安装的时候，一般都带上版本号

注意：**webpack是前端开发者需要的一个工具**。不是后端的



#### 为什么学习webpack

前端资源特别分散，如html、css、js、img、字体...，需要进行打包

更重要的目的：学习webpack是为**vue和react**环境做准备。

目的：学习如何配置webpack。

但是在学习vue和react中你又不用配置，因为vue和react都是配置好的。



### 2. 准备工作

webpack官网   https://www.webpackjs.com

(1)安装node，webpack依赖node环境

(2)安装webpack和webpack-cli

任意目录下运行

```sh
npm i webpack@4 webpack-cli@3 -g

```

(3)检查webpack是否安装成功

```sh
webpack -v

```

```
+ webpack-cli@3.3.12
+ webpack@4.46.0

```







### 3. webpack核心介绍

#### webpack.config.js 配置项

| 键名    |      | 概念        | 解释                                                                |
| ------- | ---- | ----------- | ------------------------------------------------------------------- |
| context | 环境 | 入口起点    | 基础目录，**绝对路径**，用于从配置中解析入口起点(entry point)       |
| entry   | 入口 | 入口 (必须) | 配置打包入口文件的名字                                              |
| output  | 出口 | 出口 (必须) | 打包后输出到哪里, 以及输出的文件名                                  |
| module  | 模块 | 加载器配置  | 在rules对应数组中，定义对象规则，主要配置webpack不认识的文件规则    |
| plugins | 插件 | 插件配置    | 配置插件功能（插件有着webpack不具备的某些功能，比如：压缩html文件） |



#### webpack.config.js 语法格式

只有webpack.config.js使用node相关的特性，书写commonjs规范的代码，其它都是前端代码

```js
module.exports = {
    context: '', // 入口的相对路径，必须是一个绝对地址
    entry:'', // 入口文件
    output:{
        path:出口目录, // 必须是绝对路径
        filename:文件名, // 打包以后的文件名
    },
    module: { 
        rules: [ 
            加载器规则 
        ]
    },
    plugins:[
        插件
    ]
}

```



### 4. webpack使用

创建3webpack文件夹，运行cmd，创建项目管家

```
npm init -y

```





#### 4.1 初识webpack进行打包js

![image-20211023143100783](/public/img/thirdStage/nineteen/image-20211023143100783.png)

webpack.config.js配置

```js
const path = require('path');

// webpack的配置
module.exports = {
    entry: './src/main.js', // 入口文件，这个文件中引入别的js、css、less、字体图标等
    output: {
        path: path.join(__dirname, './dist'), // 出口目录，必须是绝对路径
        filename: 'bundle.js' // 打包以后的文件名
    }
}

```

###### 4.1.1打包原理

1、先创建一个项目文件夹（这里创建的是：`1webpack基本使用`，即它就为根目录）

2、在项目文件夹创建webpack.config.js（它为配置文件），在配置文件中必须使用module.exports导出正确的webpack配置，配置文件必须有entry和output属性

4、创建index.html文件，它是使用打包以后的文件的前端页面

5、创建src目录：存放我们前端的源代码文件，在这个里面创建main.js，做为引入的入口，其它的资源都在这里引入

6、创建dist文件夹，用于存放我们打包以后的文件（实际不用创建，会自动创建）

7、当配置好以后，在项目根目录下打开cmd，执行`webpack`命令开始打包

```sh
webpack

```

**8、执行webpack命令，它做了什么 ？**

​      webpack会自动读取你项目根目录下的webpack.config.js的这个文件

​      但是webpack又依赖node环境，node环境也会解析webpack.config.js这些代码的

  	因此在执行前，肯定安装了webpack和webpack-cli

9、在index.html中，应该是引入bundle.js文件而不是main.js



**备注：main.js可以使用模块化语法，引入别的js文件，会一起打包的**



###### 4.1.2 开发环境和生产环境

当我们没有指定mode（方式）属性时，打包会报警告。所以一定要指定mode属性

- 开发环境：development。就是本地（不压缩）
- 生产环境：production。指是我们开发完毕，要上线（就要打包）（压缩）
- 如果没有指定mode属性，则webpack会当作你开发完了要上线了：production

如果是在生产环境，打出来的文件没有压缩，在开发环境，打出来的文件会压缩





#### 4.2 css处理

打包css原理：先将css读入到打包后的js中，再通过js创建节点的方式，添加到html页面的节点中

**目的**：loader的认识和module属性的使用

webpack依赖node。而node只认识js和json文件，所以，要打包其它文件需要合适的loader

![image-20210528150208154](/public/img/thirdStage/nineteen/image-20210528150208154.png)



###### 步骤：

下载：css-loader  3版本  style-loader 2版本  （webpack下载的一些包对版本非常严格）

```sh
npm i css-loader@3 style-loader@2 -D

```

配置webpack.config.js

```js
module: {
	rules: [ 
		{ 
			test: /\.css$/, 
			use: [ 'style-loader', 'css-loader' ]
		}
	]
}

```



**配置context**

context必须是一个绝对地址，后面entry的相对路径，都相对于这个绝对地址

```js
const path = require('path');

// webpack的配置
module.exports = {
    context: path.join(__dirname, './src'), // 配置入口路径（不是必须的），以后的相对路径都相对于这个文件夹
    entry: './main.js', // 入口文件，相对于context这个绝对地址，必须以./或../开头
    output: {
        path: path.join(__dirname, './dist'), // 出口目录，必须是绝对路径，文件夹会自动创建
        filename: 'bundle.js' // 打包以后的文件名
    },
    mode: 'development', // 开发环境development / 生产环境production
    module: {
        rules: [
            {
                test: /\.css$/, // 以.css为结尾的文件匹配这个规则
                use: ['style-loader', 'css-loader'] // 通过css-loader先解析css语法，再通过style-loader把样式追加到html页面中
            }
        ]
    }
}

```





#### 4.3 分离css

1、安装插件

```sh
npm i extract-text-webpack-plugin@next -D

```

2、修改加载器配置

```js
// 引入分离css模块
const ExtractTextPlugin = require("extract-text-webpack-plugin"); 

rules: [ // 加载器的使用规则
	{
		test: /\.css$/,
		use: ExtractTextPlugin.extract({ // 从一个已存在的 loader 中，创建一个提取(extract) loader。
			fallback: "style-loader", 
        	use: "css-loader"  // loader被用于将资源转换成一个CSS单独文件
        })
	}
]

```

3、插件配置

```js
plugins: [ // 插件的配置，插件需要new
    new ExtractTextPlugin('./css/style.css') // 这个参数即为分离后的css放到哪里，放到这个打包以后的dist/css/style.css，在页面中需要link引入一下
]

```



###### 报错说明

![image-20211023170609374](/public/img/thirdStage/nineteen/image-20211023170609374.png)

```js
Error: Cannot find module 'webpack/lib/Chunk'

```

解决方案：在项目目录下下载**webpack@4**

webpack本来是在全局安装了，在这里咱们在项目里面再安装一下

`如果安装时报错，可能是package.json中的name名为webpack`

```sh
npm i webpack@4 -D

```

到此这里，就分离出来了，但是分离出来之后，需要在index.html中手动引一下css





#### 4.4 打包less

创建：src/less/ab.less，并在main.js中引入

1. 需要安装less 和 less-loader 来解析less代码，加载less文件

   less-loader是解析文件的，less是解析语法的

   ```js
   npm i less@3 less-loader@7 -D
   
   ```

2. 在webpack.config.js中，配置加载器, 解析.less文件

   ```js
   { 
   	test: /\.less$/, 
   	use: ['style-loader', 'css-loader', "less-loader"]
   }
   
   ```

3. 但是这样发现css代码没有分离出来，所以还需要使用extract-text-webpack-plugin的配置，分离出css代码

   ```js
   { 
   	test: /\.less$/, 
   	use: ExtractTextPlugin.extract({ 
   		fallback: "style-loader", 
   		use: ['css-loader', "less-loader"]
   	})
   }
   
   ```

4. 观察打包后style.css中多了less文件里的样式代码（即原来的css文件和less都会打包在一起）



#### 4.5  生成html

我使用webpack，我还需要手动的引入 bundle.js和style.css，这样比较麻烦

**html-webpack-plugin**插件可以帮我们生成html并引入js和css。

1、下载

```sh
npm i html-webpack-plugin@4 -D

```

2、引入

```js
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入生成html的模块

```

3、修改配置：插件需要显示的引入到webpack.config.js的plugins属性中

```js
plugins:[
        new HtmlWebpackPlugin({ // 插件配置对象
            title: "webpack 的使用",
            filename: "index.html", // 产出文件名(在dist目录查看)
            template: __dirname + "/index.html", // 以此文件来作为基准编译(注意绝对路径, 因为此文件不在src下)
            favicon: "./assets/favicon.ico", // 插入打包后的favicon图标，原文件在src下面
            minify: {                             // 对html文件进行压缩，
                    collapseBooleanAttributes: true,  // 是否简写boolean格式的属性如：disabled="disabled"简写为disabled
                    minifyCSS: true,                  // 是否压缩html里的css（使用clean-css进行的压缩） 默认值false
                    minifyJS: true,                   // 是否压缩html里的js（使用uglify-js进行的压缩）
                    removeAttributeQuotes: true,      // 是否移除属性的引号 默认false
                    removeComments: true,             // 是否移除注释 默认false
                    removeCommentsFromCDATA: true,    // 从脚本和样式删除的注释, 默认false
             }
        }) // 数组元素是插件的new对象
    ]

```

###### 如果报错说明

> Cannot find module "webpack/lib/node/NodeTeplatePlugins"

在安装html-webpack-plugin插件的工程中，单独的在本地安装一下跟全局webpack对应的版本

npm i webpack@4 -D





#### 4.6 静态资源处理

###### 4.6.1 html中的图片

`指的是src目录下static/img中的静态图片的处理，其实就是拷贝到打包后的文件夹中即可`

> 注意: 非打包的资源，不再被当做模块使用，所以我们只能使用路径引入的方式, 不要使用import/require

> 注意: 引用的相对路径, 要以打包后dist目录中index.html为起点, 来查找static (而且static也会被复制到dist中)
>
> ​	html中的图片，不是打包，只是完全的从src目录下copy到dist中

1、安装插件模块

```sh
npm i copy-webpack-plugin@5 -D

```

2、引入

```js
const CopyWebpackPlugin = require('copy-webpack-plugin'); // 引入处理html中图片的模块

```

3、配置

```js
new CopyWebpackPlugin([{
    from : __dirname + "/src/static", // 从哪个文件夹开始复制
    to : __dirname + "/dist/static" // 复制到那个文件夹
}])

```

注意：

1. 在src目录下，声明static文件夹，放置我们的静态资源
2. 使用static资源，需要直接写打包后的相对路径，项目要打包以后放到服务器上查看

```html
<img src="./static//public/img/thirdStage/nineteen/logo.jpg" alt="">

```





###### 4.6.2 打包css中的资源

css中的资源是需要打包的（包括css中用的**背景图**及**字体图标**）

webpack认为, 图片也是一个模块, 所以才需要loader来解析图片

需要下载2个加载器模块：url-loader、file-loader

`在src下面创建img文件夹，放置背景图片，在index.html中正常使用背景图片，打包以后，在dist下面的index.html中可以看到正确的使用背景图片`

`在src目录下放字体图标文件，在main.js中引入字体图标的css，在index.html中正常使用字体图标即可`



1、下载

```sh
npm i url-loader@4 file-loader@6 -D

```



2、webpack.config.js加载器配置

在module中的rules下，加上此配置

```js
{
    test: /\.(png|jpg|jpeg|gif|svg)$/, // 处理图片文件
    use: 'url-loader'
},
{
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, // 处理字体图标
    loader: 'url-loader'
}

```



#### 4.7 jquery使用

在webpack打包的项目中，使用jQuery功能

1. 下载jquery模块

   ```sh
   npm i jquery
   
   ```

2. 在需要jq的js中引入jquery

   ```js
   import $ from 'jquery'; // 引入jquery
   $('#abc').click(function () {
       alert('点我了')
   })
   
   ```

   



#### 4.8 热更新

好处：

- webpack-dev-server 会实时监听文件变化，自动打包到内存中，而不是生成硬盘上的dist目录
- webpack-dev-server 它还会启动一个本地的服务器，来支持你访问打包后的html网页



1、下载，全局安装

```sh
npm i webpack-dev-server@3 -g

```

检查版本

```sh
webpack-dev-server --version

```



在项目下运行命令: webpack-dev-server 可启动热更新服务器，会根据目录下的webpack.config.js运行，只是在内存中运行起来了

**即开发阶段运行项目，不使用webpack了，而是使用webpack-dev-server来运行项目。**



- 注意: 如果修改了配置(webpack.config.js)文件, 还是需要重启终端, 如果是src下的代码, 会自动打包
- 注意: 默认需要打包输出的文件名必须为 index.html文件
- 默认在端口号:8080上启动我们热更新服务器, 项目都在这个服务器上打开访问
- 当开发完毕还需要使用webpack命令进行打包到dist目录



webpack.config.js配置

```js
devServer: { // 在这里可以对webpack-dev-server进行一些配置
    port: 9090, // 修改端口号，默认为8080
    open: true, // 自动调用默认浏览器打开
}

```



#### 4.9 webpack完整

将`package.json`拷到项目下，修改package.json

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start":"webpack-dev-server",
    "build":"webpack"
},

```

开发阶段就：npm start

完成了打包dist就：npm run build