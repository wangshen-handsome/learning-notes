---

layout: thirdStagenine

title: 三阶段 | 第九天

---

## 回顾

#### 1、什么是中间件

就是一个**函数**，提高我们开发效率，路由的升级版。

```
app.use([/前缀,] (err, req, res, next)=>{})
```



#### 2、自定义中间件

###### 404

404错误处理(app.js)，放在所有路由的最后

我们没有配置这个路由，但是用户访问了，就会进到这里

```
app.use((req, res)=>{
	res.status(404);
	res.send({
		code: 404,
		msg: 'not found'
	})
})
```



###### 逻辑错误处理

```
 app.get('/login', (req, res, next)=>{
 	next('错误消息')
 })
```

```
app.use((err, req, res, next)=>{
	res.status(500);
	res.send({
		code: 500,
		msg: err
	})
})
```



#### 3、内置中间件

###### 开放静态资源

写在app.js中

```
app.use( [/前缀], express.static( 要开放的文件夹绝对路径 ) )
```

###### 获取post参数

```js
app.use(express.urlencoded({extended:false})) // 接收查询字符串参数
app.use(express.json()) // 接收json字符串对象
```

前端设置请求头

```
Content-Type: application/x-www-form-urlencoded
Content-type: application/json
```



#### 4、第三方中间件

```
serve-favicon
svg-captcha
```





## 项目的开发流程

1、创建基本的项目结构

​	app.js：入口

​	package.json：项目管家    `npm init -y`

​	views：html页面存放位置

​	static：前端的静态资源

​	config：放一些配置（如果有的话）

​	routes：模块化路由文件夹

​	tools：项目的一些公共方法（自己封装的）

2、使用git单独管理项目

```sh
git init -y

```

3、创建git的忽略文件 .gitignore

4、把项目上传到公共仓库： 码云

5、开发者要先clone项目

6、安装依赖

```sh
npm i

```

### 入口文件 app.js 必不可少的配置

1、 创建服务器

```js
const express = require('express')
const app = express()
app.listen(3000)

```

2、开放静态资源

```js
// 静态资源是一般放在static文件夹或者public文件夹
app.use( '/static', express.static( path.join( __dirname,'static' ) ) ) 
app.use( '/public', express.static( path.join( __dirname,'public' ) ) ) 

```

3、配置post中间件

```js
app.use( express.urlencoded( { extended:false } ) )
app.use( express.json() )

```

4、一般都会把路由进行模块化的

```js
// 会把每一个路由文件放在routes文件夹
// 比如：user.js   product.js
let userRouter = require('./routes/user.js')
app.use( userRouter ) 

```

5、配置404和统一逻辑错误处理

```js
app.use((req, res) => {
    res.status(404);
    res.send({
        status: 404,
        msg: 'not found'
    })
})

app.use((err, req, res, next) => {
    res.status(500);
    let data = {
        msg: err,
        status: 500
    }
    res.send(data);
})

```



## 一、文件上传

**实现原理**：上传文件是先将文件存放于服务器上的一个临时文件夹，这个时候文件是没有后缀名的，然后再从临时文件夹里，通过改名的方式，将文件剪切到永久存放文件夹中。

改名有两种形式，一是保留原名，二是重新生成一个不重复的名字



### 1. 前端

注意：必须是post提交，enctype必须是multipart/form-data

这里用form表单，以后可以用ajax提交

```html
<form action="/up" method="post" enctype="multipart/form-data">
    <p>
        <input type="file" name="f">
    </p>
    <p>
        <input type="text" name="uname" placeholder="用户名">
    </p>
    <p>
        <input type="submit" value="提交">
    </p>
</form>

```

url地址长度是有限的，所以get传的参数的大小也是有限的。post传参的大小没有限制。因此文件上传要用post



### 2. 后端

formidable   **模块包**，使用关键是看手册

```sh
npm i formidable@1

```

在后端创建两个文件夹：

- 创建一个 tempdir：上传文件的临时目录
- 创建一个 uploads：最后保存的目录

```js
const formidable = require('formidable');

app.post('/up', (req, res, next) => {
  // 实例化一个上传表单功能
  const form = formidable({
      uploadDir : '' // 临时的路径存放地址，要绝对地址
  });
 
  form.parse(req, (err, fields, files) => {
      	// err: 错误信息
    	// fields : 普通的表单元素数据
        // files : 文件数据
        // 处理具体的业务。比如：文件名的重命名，把文件最终放在的位置是哪里
  });
});

```

上传文件的数据格式

![image-20220316103814549](/public/img/thirdStage/nine/image-20220316103814549.png)

```json
f: File {
  size: 65580, // 文件大小
  path: 'tempdir\\upload_c9ded308b56cec4beca983633426411e', // 临时文件的绝对路径
  name: 'erha2.jpg', // 文件的原名称，用path.extname()从这个里面可以获取到后缀名
  type: 'image/jpeg', // 文件类型
}

```





### 3. 服务器处理完毕响应结果

文件处理的两种方式：**保留原名**和**重命名**

- 保留原文件名：如百度网盘
- 生成唯一不重复文件名：如上传的头像

​		1）年月日时分秒 + 6位随机数

```js
const timeStamp = require('time-stamp')

let ming1 = timeStamp( 'YYYYMMDDHHmmss' ) + Math.random().toString().slice(2,8)
console.log( ming1 );

```

​		2）使用第三方模块uuid，使用方法：https://www.npmjs.com/package/uuid

```sh
npm install uuid

```

```js
const { v4: uuidv4 } = require('uuid');
uuidv4(); // '唯一的字符串'

```



### 完整代码

```js
const express = require('express')
const app = express()
app.listen(3000)
const formidable = require('formidable');

const fs = require('fs')
const path = require('path')

app.post('/up',(req,res)=>{

    // 实例化一个上传表单功能
    const form = formidable({
        uploadDir :path.join( __dirname,'tempdir' ) // 临时的路径存放地址
    });
    form.parse(req, (err, fields, files) => {
        // err: 错误信息
        // fields : 普通的表单元素数据
        // files : 文件数据
        // 处理具体的业务。比如：文件名的重命名，把文件最终放在的位置是哪里？
        console.log( fields,'普通的表单元素数据' )
        console.log( files,'文件数据' )
        /*
            f: File {
                size: 65580, //文件大小
                path: 'tempdir\\upload_c9ded308b56cec4beca983633426411e',//文件的路径
                name: 'erha2.jpg', //文件的原名称
                type: 'image/jpeg',//文件类型
            }
        */ 
        // 1. 保留原文件名称
        let newFile = path.join(__dirname, './uploads/' + files.f.name); // 新文件地址
        let oldFile = files.f.path; // 原文件地址
        fs.renameSync(oldFile, newFile); // 剪切文件并改名
        res.send('文件上传成功')
    });
})

```



## 二、cookie

cookie相当于用户访问时，服务器把你的信息给你，让你存在浏览器，下次访问时，带着你的信息，服务器就知道你是谁了。



### 1. 介绍

Cookie的产生是**HTTP的特点所决定的**。HTTP协议有一个非常重要的特点是**无状态的**，也就是说当客户端请求服务器，每一个请求和响应结束以后，这次的连接是马上断开的（**这是为了释放资源**）。同时服务器是不保留连接者相关的信息的。Cookie要解决HTTP无状态的问题。

**cookie 本质上它是一个会话技术。**

![](/public/img/thirdStage/nine/3-7cookie的现实场景.jpg)



### 2. 特点

- 含有过期时间（默认关闭浏览器，Cookie销毁，但可以设置有效期）

  专业术语叫会话结束则 cookie 销毁。会话的英文解释叫session

- 大小限制在4KB左右（了解）

- 存储在客户端（浏览器）

- 数量限制：最多不能超过50个Cookie（了解）

  cookie以前的资料中介绍是不能超过50个。但是从cookie到现在已经过去好多年了。它做了一个升级 。如果最多50个，那么当超过50个的时候如51个，那么第51个cookie会把第1个给覆盖掉（了解）

- Cookie只能存储字符串

- 不同的浏览器及不同项目之间不能共享Cookie

- 存储Cookie后在整个项目中有效（页面之间共享）

### 3. 应用场景

​	保存登录者的信息

​	平时的爱好

### 4. cookie实现原理

![](/public/img/thirdStage/nine/3-8Cookie实现流程.jpg)

第3步：cookie是通过响应头传递给客户端的，set-cookie字段

![image-20210515114624411](/public/img/thirdStage/nine/image-20210515114624411.png)

第4步：客户端收到服务器传递过来的cookie以后，自动保存在浏览器本地。![image-20210515114851841](/public/img/thirdStage/nine/image-20210515114851841.png)

第5步：在以后请求中浏览器会自动的携带cookie传递到服务器端（是通过请求头的cookie字段）

![image-20210515115051378](/public/img/thirdStage/nine/image-20210515115051378.png)





### 5. cookie-parser （中间件）

#### 5.1 下载

```sh
npm i cookie-parser

```



#### 5.2 引入并开启cookie功能

```js
const cookieParser = require("cookie-parser"); // 引入cookie-parser中间件
app.use(cookieParser()); // 使用cookie-parser中间件，全局开启cookie功用

```

#### 5.3 设置cookie

**在res中设置**

返回的时候设置cookie

```js
res.cookie(key, value [,option])

```

参数说明：

​		option：可选参数，{ maxAge : ms}   过期时间，表示多长时间后过期。以毫秒为单位



#### 5.4 获取cookie

**在req中获取**

当前端有了cookie，请求的时候会带上cookie，后端可以在req中获取，它是一个对象

```js
req.cookies

```

#### 知识点的完整案例

```js
const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('http://localhost:3000');
});

const cookieParser = require('cookie-parser'); // 引入cookie-parser中间件
app.use(cookieParser()); // 使用cookie-parser中间件，全局开启cookie功用

// demo1被访问时，设置cookie，后端生存cookie，存在浏览器中
app.get('/demo1', (req, res) => {
  // res.cookie(key, value [,option])
  res.cookie('name', 'zs');
  res.cookie('age', 3, { maxAge: 24 * 60 * 60 * 1000 }); // 一天以后过期
  res.cookie('obj', { a: 1, b: 2 }, { maxAge: 24 * 60 * 60 * 1000 });

  res.send('后端 设置cookie');
});

// demo2被访问时，会待上cookie
// 前端访问后端时，会携带cookie，后端就可以在req.cookies中取得
app.get('/demo2', (req, res) => {
  console.log(req.cookies); // { name: 'zs', age: '3', obj: { a: 1, b: 2 } }
  res.send('后端 获取cookie');
});

app.get('/a/b/c', (req, res) => {
  let { name, age, obj } = req.cookies;
  console.log(name, age, obj);
  res.send('cookie在整个项目中有效');
});


```



#### 案例

1）/login路由中通过req.cookie方法设置cookie

​	设置用户名（应该登录了以后才设置cookie）

2）/welcome路由中设置欢迎界面

​	检查cookie，如果没有cookie，则显示游客，如果有cookie，则显示用户名

3）设计“/user/edit”路由，如果登录了可以正常访问，如果未登录则不让访问（权限管理雏形）

```js
const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('http://localhost:3000');
});

const cookieParser = require('cookie-parser'); // 引入cookie-parser中间件
app.use(cookieParser()); // 使用cookie-parser中间件，全局开启cookie功用

// 登录接口，设置cookie
app.get('/login', (req, res) => {
  // 此处应该做登录的逻辑判断
  res.cookie('username', '王二小', { maxAge: 24 * 60 * 60 * 1000 }); // 一天以后过期

  res.send('登录');
});

// 欢迎页
app.get('/welcome', (req, res) => {
  let { username } = req.cookies;
  // console.log(username);
  if (username) {
    res.send('欢迎' + username + '回家');
  } else {
    res.send('欢迎游客回家');
  }
});

// 编缉页（需要用户权限）
app.get('/user/edit', (req, res) => {
  let { username } = req.cookies;
  if (username) {
    res.send(username + '你好，可以编缉');
  } else {
    res.send('你还没有登录，请到登录');
  }
});


```



## 三、session

session相当于用户访问时，服务器在服务器本地存下你的信息，但是给你一把钥匙，以后你访问服务器时，带上这把钥匙，就可以开启存在服务器本地的信息。



### 1. 介绍

它也是一种会话技术 。

Session是另一种记录用户状态的机制，不同的是Cookie保存在**客户端浏览器**中，而Session保存在**服务器**上。

当服务端使用Session后，那么服务器会把Session信息存储在服务器上，但是会将Session标识记录在对应客户端上（依赖cookie存储的）。

![](/public/img/thirdStage/nine/3-12session的现实场景.jpg)

### 2. 特点

- Session存储在服务器
- 依赖cookie
- 可以存储任意类型
- **通过客户端的sessionid标识符区分Session**  sessionid标识就相当于是一把钥匙
- Session没有大小限制

### 3. 应用场景

cookie能做的sessioin都能做

### 4. 实现原理

![session](/public/img/thirdStage/nine/session.png)



![](/public/img/thirdStage/nine/3-14Session实现流程.jpg)



### 5. cookie-session

#### 5.1 下载

```sh
npm i cookie-session

```



#### 5.2 引入并开启session功能

```js
const cookieSession = require("cookie-session"); // 引入cookieSession中间件

// 使用cookieSession中间件
app.use(cookieSession({
  name: 'sessionids', // sessionid的名称，默认可以省略
  keys: ['secret1','secret2','secret3'], // 密钥锁，随便加，不限个数
  maxAge: 24 * 60 * 60 * 1000 // ms，session的有效期
}))

```





#### 5.3 设置Session数据

**在req中设置**

```js
req.session[key] = value

```



#### 5.4 访问Session数据

**在req中访问**

```js
req.session[key]

```

session完整示例

```js
const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('http://localhost:3000');
});

const cookieSession = require('cookie-session'); // 引入cookieSession中间件
app.use(
  cookieSession({
    // name: 'xiaoer', // sessionid的名称，默认可以省略
    keys: ['dsagfsfwqerew', 'dsafdsgre', 'jiutfdgfds'], // 密钥锁，随便加，不限个数
    maxAge: 24 * 60 * 60 * 1000, // ms，session的有效期
  })
);

// 设置session，在req中
app.get('/demo1', (req, res) => {
  // 做一些服务器验证，比如：用户名和密码是否匹配，如果匹配了，才设置
  req.session.name = 'zs';
  req.session.age = 3;
  req.session.obj = {
    a: 1,
    b: 2,
  };
  res.send('设置session');
});

// 获取session，在req中
app.get('/demo2', (req, res) => {
  console.log(req.session); // 一个对象，可以解构
  res.send('获取session');
});

```



#### 图片验证码案例

```js
const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('http://localhost:3000');
});

const path = require('path');
var svgCaptcha = require('svg-captcha'); // 引入验证码模块
const cookieSession = require('cookie-session'); // 引入cookieSession中间件
app.use(
  cookieSession({
    keys: ['dsagfsfwqerew', 'dsafdsgre', 'jiutfdgfds'], // 密钥锁，随便加，不限个数
    maxAge: 24 * 60 * 60 * 1000, // ms，session的有效期
  })
);

// 渲染页面
app.get('/demo', (req, res) => {
  res.sendFile(path.join(__dirname, './views/ab.html'));
});

// 验证码路由
app.get('/captcha', function (req, res) {
  var captcha = svgCaptcha.create({
    size: 4, // 字符长度，默认4
    ignoreChars: '0oO1iILl', // 被忽略的文字
    noise: 3, // 干扰线的条数
    // color: true, // 颜色是否彩色
    // background: '#cc9966', // 背景色
  });

  req.session.captcha = captcha.text; // 关键点，将验证码放到session中，后面同用户输入的进行对比

  res.type('svg');
  res.status(200);
  res.send(captcha.data);
});

// 检测输入的验证码和图片上的验证码是否一致
app.get('/login', (req, res) => {
  // console.log(req.query); // { code: 'abc' }
  let { code } = req.query; // 用户输入的

  // console.log(code, '用户输入的');
  // console.log(req.session.captcha, '本地session存储的');
  if (code.toLowerCase() === req.session.captcha.toLowerCase()) {
    res.send('验证码验证成功');
  } else {
    res.send('验证失败');
  }
});

```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>表单</h1>

    <form action="/login">
      <!-- 展示验证码图片 -->
      <img src="/captcha" alt="" />

      <input type="text" name="code" placeholder="请输入验证码" />
      <button>发送验证</button>
    </form>
  </body>
</html>


```



总结：session和cookie不是万能的，虽然可以解决 **用户权限**、**在任意页面共享数据**，但是重启服务器又回到初始状态

解决此问题（1不重启服务器、2存储在文件中、3存储在数据库中）





## 四、模板引擎ejs

### 1. 简介

和我们html页面是相关的。html页面是直接让用户看到资源（不可能是死数据），说白了就是html中的标签要和真实的数据进行拼接然后渲染在页面在上。模板引擎帮我们很好的解决拼接的问题。我们学习的模板引擎是ejs。

### 2. 使用步骤

1.下载ejs

```sh
npm i ejs

```

2.在项目中设置ejs模板引擎 ，注意，不用require引入

```js
app.set('view engine', 'ejs');

```

3.在项目根目录下创建views文件夹

4.在views文件夹下创建模板文件

​	必须以 **.ejs为后缀名**



### 3. ejs语法

#### 渲染语法

```js
res.render('模板名称' [, data ])

```

参数说明：

​		参数1为 ejs 的模板名称**不需要添加后缀**，会自动去 views 文件中寻找对应名称的**.ejs文件**

​		参数2为可选参数，向模板中传递的数据，必须是一个对象



#### 模板语法

指的是 .ejs 文件中的语法

###### 1、数据渲染

注意：左边的百分号和等号之间不能有空格

```ejs
<%= 变量名 %>

```



###### 2、分支

```ejs
<% if( 条件 ){ %>
  

<% }else{ %>
     

<% } %>

```



###### 3、循环

```ejs
<% for(let i=0;i<数组.length;i++){ %>

 	循环项           

<% } %>

```



###### 4、包含文件

说明：被包含文件也是.ejs文件，无需携带后缀名，注意，起始百分号后面有-

```ejs
<%- include('公共文件路径')  %>

```



#### 完整案例

###### app.js中的代码

```js
const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('http://localhost:3000');
});

app.set('view engine', 'ejs'); // 设置ejs模板引擎

let username = '猴子';
let age = 3;
let sex = '男';
let isPerson = false;
let arr = ['吃香蕉', '抢苹果', '进水帘洞'];

app.get('/index', (req, res) => {
  // res.render('模板名称' [, data ])
  res.render('index', {
    username,
    age,
    sex,
    isPerson,
    arr,
  });
});

app.get('/list', (req, res) => {
  res.render('list');
});

```



###### index.ejs中的代码

```ejs
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>我是index页面</h1>

    <%- include('./head')  %>

    <!-- 数据渲染 -->
    <p>我是一个<%= username %>，我今年<%= age %>岁，我是<%= sex %>孩子</p>

    <!-- 分支 -->
    <% if( isPerson ){ %>
      <p>是个人</p>
    <% }else{ %>
      <p>不是人</p>
    <% } %>

    <!-- 循环 -->
    <h3>爱好</h3>
    <ul>
      <% for(let i=0;i<arr.length;i++){ %>
        <li><%= arr[i] %></li>
      <% } %>
    </ul>

    <!-- 包含文件 -->
    <%- include('./foot')  %>
  </body>
</html>

```



## 五、express脚手架

生成器工具express-generator（又称为脚手架工具） 可以快速创建一个应用的骨架，增加开发效率。

### 1.使用步骤

1.1 全局安装express-generator，一台电脑只用安装一次

```sh
npm i express-generator -g

```

查看版本

```sh
express --version

```



1.2 使用脚手架初始化项目

```sh
express --view=ejs 项目名

```

--view=ejs : 你的项目使用ejs模板引擎



1.3 进入目录，安装所有需要的模块

```sh
cd 项目包名
npm i

```



1.4 启动项目

```sh
npm start

```

这个命令哪来的？package.json :scripts属性中

完整的命令叫 ： npm run start

注意：start是一个特殊的名字，因此可以省略run，其它的都不能省略run。`如：npm run dev`

`进入bin下面的www文件，可以修改端口号。`

![image-20220523165855480](/public/img/thirdStage/nine/image-20220523165855480.png)



1.5 浏览器访问

localhost:3000





### 2. 目录及文件介绍

![image-20220226214817186](/public/img/thirdStage/nine/image-20220226214817186.png)

app.js：入口文件

views：ejs存储的目录

routes：路由存放目录

public：静态资源

bin/www：运行的文件

package.json：项目的配置文件



重置项目：

1、改node 为 nodemon

2、改404和500错误







## 六、koa框架（了解）

Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。

### 1 使用步骤

1.1 全局安装koa脚手架

```sh
npm i koa-generator -g

```

查看koa版本号

```sh
koa2 --version

```

1.2 使用脚手架初始化项目

```sh
koa2 项目包名

```

说明：如果需要ejs模板，在koa2 后加 -e参数

```sh
koa2 -e --ejs 项目包名

```

1.3 进入目录，安装所有需要的模块

```sh
cd myKoaApp 
npm i

```

1.4 启动项目

```sh
npm start

```

1.5 浏览器访问

localhost:3000



### 2. 目录及文件介绍

![image-20220226214744308](/public/img/thirdStage/nine/image-20220226214744308.png)

app.js：入口文件

views：ejs存储的目录

routes：路由存放目录

public：静态资源

bin/www：运行的文件

package.json：项目的配置文件





## 前后端数据交互总结

| 请求方法 | 编码格式                            | 前端要传输的数据格式                                    | 后端如何获取                           | 应用场景 |
| -------- | ----------------------------------- | ------------------------------------------------------- | -------------------------------------- | -------- |
| GET      | url地址后面（querystring）          | url?key1=value1&key2=value2                             | 不需要中间件:req.query                 | 获取数据 |
| POST     | applicaion/x-www-form-urlencoded    | form-data: key1=value1&key2=value2                      | express.urlencoded( { extend:false } ) | 提交数据 |
| POST     | applicaion/json（只能通过ajax）     | request-payload:  '{ "key1":"value1","key2":"value2" }' | express.json()                         | 提交数据 |
| POST     | mutilpart/form-data（可以使用表单） | 文件流                                                  | formidable中间件                       | 文件上传 |
| DELETE   | 同post（只能通过ajax）              |                                                         | req.body                               | 删除数据 |
| PUT      | 同post（只能通过ajax）              |                                                         | req.body                               | 更新数据 |

