---

layout: thirdStagesix

title: 三阶段 | 第六天

---

## 回顾

commonjs规范

```
暴露数据
module.exports  或者  exports

引入数据
let obj = require(路径); 路径：如果是自定义模块，必须以 ./ 或者 ../ 开头
```



模块分类

```
自定义模块、内置（核心）模块、第三方模块

自定义模块，必须以 ./ 或者 ../ 开头
第三方模块：必须放在node_modules中
```



npm的使用

```
npm init
npm i 包名
npm r 包名

工作中的处理
1、创建项目文件夹（不要有中文）
2、npm init -y   (进入到项目根目录，初始化项目，生成项目管家)
3、npm i 包名    (安装使用的包)
4、写你的业务逻辑
```







### 7.包的分类

分为项目包和全局包



#### 1、项目包

被安装到项目的node_modules文件夹的包，都是项目包。

项目包又分为两类：

1）开发依赖包：被记录到devDependencies节点中的包，只在开发期间会用到（只是在写代码的时候用）

2）项目依赖包：被记录到dependencies节点中的包，在开发期间和项目上线之后都会用到。

总结：我们的包会很多很多，只记录你自己下载的包即可（但是也不用刻意记，因为常用的就那么几个，而且package.json帮我们记录了）







#### 2、全局包

全局包又称为**工具包**，使用的时候同npm一样，也是在cmd命令行中使用的，并不是在代码文件中引入的，是当作工具使用的。

任何目录下执行安装命令：

```sh
npm i 包名 -g
```

常用工具包 ： webpack  nodemon  npm  node 

使用特点：

1）并不是在代码文件中引入的，全局包像npm一样当作可执行程序进行使用

2）决定某个包是否需要全局安装，需要参考其官方提供的使用说明书

3）全局包会被安装到C:\Users\用户\AppData\Roaming\npm目录下



###### 全局包案例

markdown工具包

作用：把 .md 文件转换成 .html文件

npm地址：https://www.npmjs.com/package/markdown

```sh
npm i markdown -g
```

命令行：

```sh
md2html 笔记06.md > abc.html
```



### 8.包加载机制( 总结 )

#### 1、内置模块的加载机制

内置模块是由Node.js官方提供的模块，**内置模块的加载优先级最高**。

例如，**require('fs') ** 始终返回内置的fs模块，即使在node_modules目录下有名字相同的包也叫做fs，但它也只会引入核心的内置fs模块

总结：所以第三方模块和自定义模块不要起内置模块的名称



```js
// require(路径)，路径中没有以./或者../开头，它会优先加载内置模块，如果内置模块没有，则会去加载第三方模块，如果第三方模块也没有，则报错
// let fs = require('fs'); // 加载内置模块
// console.log(fs);


let fs1 = require('fs1'); // 没有这个内置模块，则加载第三方模块，如果第三方模块也没有在node_modules中，则报错
console.log(fs1);
```



**总结**：路径中没有以./或者../开头，它会优先加载内置模块，如果内置模块没有，则会去加载第三方模块，如果第三方模块也没有，则报错



#### 2、自定义模块加载机制

1）使用require()加载自定义模块时，必须指定以**./或../**开头的路径标识符。

2）如果没有指定**./或../**这样的路径标识符，则Node.js会把它当作**内置模块**或**第三方模**块进行加载。

3）自定义模块不要放在node_modules中，node_modules放的是第三方模块。

4）在使用require()导入自定义模块时，如果**省略了文件的扩展名**，则Node.js会按顺序分别尝试加载以下的文件：

​		(1)文件名.js扩展名进行加载

​		(2)文件名.json扩展名进行加载

​		(3)如果以上两个都没有，则加载失败，终端报错  **Error:Cannot find module 'xxx'**



**省略文件扩展名的情况**

```js
let obj = require('./demo/m1'); // 省略文件扩展名，则默认加载m1.js，如果没有m1.js，则加载m1.json，如果m1.json也没有，则报错

console.log(obj);
```







#### 3、第三方模块加载机制

第三方模块放在node_modules里面

1）如果require()的模块标识符不是内置模块，即没有以‘./’或‘../’开头，则Node.js会从当前模块的父目录开始，尝试从当前文件夹的/node_modules文件夹中加载第三方模块。

2）如果没有找到对应的第三方模块，则移动到再上一层父目录中，进行加载，直到当前项目文件的盘符根目录。

**总结**：一定要把第三方模块下载到项目根目录下的node_modules中，且项目中只有根目录下有node_modules目录

![image-20220311103748632](/public/img/thirdStage/six/image-20220311103748632.png)



#### 4、package.json中的main属性

main属性，可以指定模块加载的主入口文件，当引入模块时用**文件夹名结尾时生效**。有三种加载方式：

1）根据目录下的package.json的文件，寻找main属性指定的文件名，作为require()加载的入口。

2）如果目录里没有package.json文件，或者main入口不存在，则Node.js将会加载目录下的index.js文件（所以目录中的默认入口为index.js）

3）如果以上两步都加载失败，则Node.js会在终端打印错误消息，报告模块缺失：Error: Cannot find module 'xxx'

**总结：main属性的作用，指定入口文件，如果没有指定或指定的入口文件不存在，则找index.js文件，如果也没有，则报错**

所以后面自己写模块，经常名字为   `模块/index.js`    index.js就是主入口文件



```js
let obj = require('./tools/trim'); // 当以文件夹名结尾时，会根据trim目录中的package.json中的main属性找到主入口文件，如果没有package.json文件或者没有指定main属性，则默认加载index.js，如果也没有index.js，则报错

console.log(obj);

```



![image-20220311111817955](/public/img/thirdStage/six/image-20220311111817955.png)









## 一、服务端与客户端

### 1. 什么是上网

通过因特网（internet）进行获取各种各样的**资源**（文字、图片、音频、视频,....css/js）的过程。

获取资源的过程就也就是**享受服务**的过程 。



### 2. 享受服务的流程

1、现实生活中的服务

![](/public/img/thirdStage/six/2-11用户与海底捞.png)

​	请求：**主动发起诉求**

​	处理：海底捞处理（加工食材）  处理请求

​	响应：就是处理的有结果了   响应结果



2、互联网上的服务(客户端与服务器端的一次请求流程)

![](/public/img/thirdStage/six/2-12客户端与服务器.png)

请求：http://www.ujiuye.com/zt/webqzgcs/

处理：服务端找到请求的这个文件，并把文件发给客户端

响应：客户端的浏览器获取到文件，并把这个文件渲染成用户能看懂的html





### 3. 服务器

远程的一台电脑而已。能放文件。只是配置比个人PC要高的多的多。

服务器是让成千上万的用户进行发起请求的。

举例：CTS服务器、优就业官网、中公教育服务器、淘宝www.taobao.com、百度www.baidu.com、腾讯www.qq.com



### 4. 客户端

指的本地用户（和我们息息相关的）

有很多的表现形式：只要能上网都可以称为客户端 。 PC、Mobile、Ipad、智能手表....

我们这里常常指的是**浏览器**



### 5. url地址

#### 5.1 基本概念

​	URL（全称是Uniform Resource Locator），中文叫**统一资源定位符**，用于标识互联网上每个资源的唯一存放位置。浏览器只有通过URL地址，才能正确定位资源的存放位置，从而成功访问到对应的资源。



#### 5.2 URL

![](/public/img/thirdStage/six/2-13url组成.png)



###### 通信协议

​	协议 ：双方去约束一件事情 。

​	互联网的通信协议，规定了用户如何请求，又规定了服务器如何响应结果。

​	常用的通信协议有：http、https、mysql、qq、邮件协议等

比如：http和https协议

​	http://www.ujiuye.com/

​	https://www.baidu.com/



###### 服务器名称（域名）

​	大名。好记。就是标识某一台远程计算机的，它对应的其实是一个IP地址

​	ujiuye.com / offcn.com  / taobao.com  /  baidu.com

![image-20220226094820655](/public/img/thirdStage/six/image-20220226094820655.png)

如通过访问220.181.38.251也可以打开百度



###### 端口号

​		即封闭的地方，开的一个口子。如故宫是个封闭的（天安门就是端口），大学食堂是封闭的（窗口就是端口）

​		只能封闭的空间开放了端口，才能享受到对应的服务。

​		服务器是封闭的，比如：一台电脑上（安装了各种各样的软件），qq、微信等，每一个软件都有一个独立的端口。

​		同一台电脑上不可能同时运行相同的端口。

​		默认的端口：http：80  、https：443 、 mysql：3306

​		端口的范围（1-65535）



###### 路径

​	以服务器为中心，文件的具体的存放地址。



###### 参数

​	查询字符串参数（querystring），即 url地址中 ? 后面的东西 ，如：key1=value1&key2=value2...

​	动态变化的数据就是参数 。比如：

​		告诉海底捞服务员，我这次要吃**帝王蟹**

​		我要登录那肯定要告诉服务器 **账号和密码**



###### 锚点

​	不是为服务器用的。是前端用的，即#号后面的东西



### 6. 域名与ip的关系

#### IP

每一台计算机都有一个ip地址来区分。 即：x.x.x.x，每一位都是以0-255之间的整数表示，但是不好记，所以出现了域名 



#### 域名

是一个虚拟财产。域名能够很好让我们记住某一个网站



#### DNS服务器

DNS服务器是属于一个组织的，从哪个地方买了域名，这个下面就会有DNS服务器。帮我们把域名指向某一个IP地址。

DNS服务器就可以理解为一个表，记录域名和IP的关系。

![](/public/img/thirdStage/six/2-14DNS-域名与ip的关系.png)

站长之家可以查看域名的信息：  https://whois.chinaz.com/

cmd快速查看域名和ip的指向：

​	`ping 域名` （查看此域名通不通）

查看本机的ip地址：

​	`ipconfig`



## 二、互联网传输协议

什么是协议：协议（ Protocol）是指双方为了完成一个目标结果所必须遵守的规则和约定。

通俗的理解：双方采用约定好的格式来做某件事情，这种事先约定好的格式，就叫做协议。

### 1. 协议分类

#### 1.1 现实中的协议

邮寄规则：寄件人信息、收件人信息

![](/public/img/thirdStage/six/2-15现实中的协议.png)



#### 1.2 互联网中的传输协议

http（HyperText Transfer Protocol）：超文本传输协议 （文本、图片、视频、音频、css、js....）。

规定了如何请求，如何响应。**即我们的数据是如何在网络中传输的**。



### 2. 工作原理

#### 2.1 交互模型（请求与响应）

​		交互模型（请求与响应）：HTTP 协议采用了 **请求/响应** 的交互模型。也就是说必须是**客户端主动发起请求**，再由服务器端处理请求，同时被动的把内容响应给客户端



#### 2.2 http协议的组成

有四部分，即**请求消息、响应消息、请求方法、状态码**



###### 2.2.1 请求消息（request）

描述：客户端发起的请求叫做 HTTP 请求，客户端发送到服务器的消息，叫做 HTTP 请求消息（又叫做 HTTP 请求报文）

**简单来说就是客户端告知服务器我要干什么**。

请求消息分三部分组成：**请求行、请求头部、请求体**

![](/public/img/thirdStage/six/2-16请求消息.png)



请求头部往往是固定的。（我们在请求的时候，浏览器会自动通过请求头额外传递一些参数）

注意：**get方式的请求没有请求体**。post请求有**请求体**



比如：http://www.ujiuye.com/zt/webqzgcs

![image-20210512151226356](/public/img/thirdStage/six/image-20210512151226356.png)





###### 2.2.2 响应消息（response）

描述：响应消息就是服务器响应给客户端的消息内容，也叫作响应报文。比如：海底捞服务员把后厨准备好的食材交付给用户

响应消息分三部分组成：**状态行、响应头部、响应体**

![](/public/img/thirdStage/six/2-18响应消息.png)

![image-20220311144129406](/public/img/thirdStage/six/image-20220311144129406.png)



###### 2.2.3 请求方法(方式)

用来表明要对服务器上的资源执行的某操作，即以何种方式进行请求。

常见请求方法比如：**get获取 / post提交数据 / delete删除 / put更新**



###### 2.2.4 状态码

用来标识响应的状态。服务器的结果要用状态码来进行描述。比如：404页面不存在，200成功

状态码：

​	404    状态码的描述：Not Found

​	200   状态码的描述：OK



常见状态码：

1**   消息

2**   成功

3**   重定向（了解） 成功

4**   不存在  : 如果出现4开头的，都是**前端的问题**

5**   服务器有问题，都是**后端的问题**

[HTTP状态码_百度百科 (baidu.com)](https://baike.baidu.com/item/HTTP状态码/5053660)



## 三、Node创建服务器（了解）

### 创建服务器步骤

需要的是 http 模块，这是一个内置模块（实际工作不这样创建）



1、创建服务器

​	写逻辑( 注意：**有请求必须有响应**，否则一直转圈圈  )

​	假如端口为 3000（注意不能同时开启两个相同的端口）



2、使用浏览器发起请求

​		http://localhost:3000  访问的 是自己的电脑

​		http://127.0.0.1:3000  访问的 是自己的电脑

​		http://自己的IP:3000   访问的 是自己的电脑，别人通过这种方式也能访问你的电脑



​		查看自己的ip：`cmd --> ipconfig`

![image-20210512165811928](/public/img/thirdStage/six/image-20210512165811928.png)

```js
// 1、引入http模块
const http = require('http');

// console.log(http); // {}   它是一个对象，它下面有一个创建服务器的方法

let app = http.createServer(); // 创建服务器，返回服务器的引用

// listen方法开启端口，第一个参数是端口号，第二个参数是一个函数(可写可不写)，即开启成功后的回调
app.listen(3000, () => {
    console.log('3000端口开启成功了');
});

// 服务器要监听客户的请求，当用户向这个3000端口发起请求，就会触发on绑定的request的事件函数
// 该函数有两个参数，请求和响应，有请求进来，就必须有一个响应回去，用end结束响应
// 注意：修改了代码必须使用node重新运行
let n = 0;
app.on('request', (req, res) => {
    n++;
    console.log(n + '次请求进来了');

    res.end('welcomt to node'); // 有请求进来，就一定要有响应回去
})

```

**打开浏览器网络，复盘刚才所讲的请求头和响应头**



```
创建基本服务器的步骤
1、引入 http
2、创建服务器
3、开启监听
4、接受客户端请求

```

```
const http = require('http');

let app = http.createServer();

app.listen(3000, () => {
    console.log('http://localhost:3000  开启成功');
});

app.on('request', (req, res) => {
    res.end('hello');
})

```















### 代码演示1

问题：对中文显示乱码

```js
// 设置响应头信息，在end之前
res.writeHead(200, { 'Content-Type': "text/html;charset=utf8" });

```



只有设置了响应头信息，才能对**中文**进行正确显示

```js
const http = require('http');
let app = http.createServer();
app.listen(3000, () => {
  console.log('http://localhost:3000');
});

app.on('request', (req, res) => {
  // 写在响应的前面，设置文件类型
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
  res.end('<h1>二狗子，回家吃饭了</h1>');
});

```

**打开浏览器网络，在响应头中就可以看到刚才设计的Content-type**



### 代码演示2

打印请求消息。method和url

```js
const http = require('http');
let app = http.createServer();
app.listen(3000, () => {
  console.log('http://localhost:3000');
});

app.on('request', (req, res) => {
  console.log('请求方法', req.method); // 请求方法
  console.log('请求地址', req.url); // 请求地址
  console.log('------------------');

  // 写在响应的前面，设置文件类型
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
  res.end('<h1>二狗子，回家吃饭了</h1>');
});

```

![image-20220311161007010](/public/img/thirdStage/six/image-20220311161007010.png)

注意事项：浏览器默认会请求favicon.icon小图标 。

​					所有请求的url，默认都是 以 / 开头，/ 代表根







### 代码演示3

根据不同路径地址返回不同消息。/login和/register

```js
const http = require('http');
let app = http.createServer();
app.listen(3000, () => {
  console.log('http://localhost:3000');
});

app.on('request', (req, res) => {
  let url = req.url; // 请求的地址
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });

  if (url.startsWith('/login')) {
    // 登录
    res.end('<h1>登录</h1>');
  } else if (url.startsWith('/register')) {
    // 注册
    res.end('<h1>注册</h1>');
  } else {
    // 404
    res.writeHead(404, { 'Content-Type': 'text/html;charset=utf8' });
    res.end('404');
  }
});

```





### 代码演示4

根据不同路径地址返回对应html页面内容/login和/register

```js
const http = require('http');
let app = http.createServer();
app.listen(3000, () => {
  console.log('http://localhost:3000');
});

const fs = require('fs');
const path = require('path');

app.on('request', (req, res) => {
  let url = req.url; // 请求的地址
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });

  if (url.startsWith('/login')) {
    // 登录
    let fileUrl = path.join(__dirname, './views/login.html');
    let data = fs.readFileSync(fileUrl, 'utf-8');
    res.end(data);
  } else if (url.startsWith('/register')) {
    // 注册
    let fileUrl = path.join(__dirname, './views/register.html');
    let data = fs.readFileSync(fileUrl);
    res.end(data);
  } else {
    // 404
    res.writeHead(404, { 'Content-Type': 'text/html;charset=utf8' });
    res.end('404');
  }
});


```





## 总结

1、使用http模块写服务器监听端口不能重复，如果有重复的会报错，端口的范围（1-65535）

2、运行起我们写的服务，不能关

3、修改了后端代码，要重新运行（重新使用node运行），使用node运行的js代码是后端代码 。

​	ps：能够用浏览器看到任何代码都属于前端代码

4、如何访问：

​		http://localhost:3000  访问的 是自己的电脑

​		http://127.0.0.1:3000  访问的 是自己的电脑

​		http://自己的IP:3000   访问的 是自己的电脑，别人通过这种方式也能访问你的电脑

