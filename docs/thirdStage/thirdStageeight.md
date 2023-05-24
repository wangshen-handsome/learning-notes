## 回顾

espress本质上是存放在npm上的一个第三方包



#### 使用

```
npm init -y
npm i express
```

```
const express = require('express');
let app = express();
app.listen(3000);

app.get('/login', (req, res)=>{})
app.post('/login', (req, res)=>{})
app.delete('/login', (req, res)=>{})
app.put('/login', (req, res)=>{})
```

#### 请求对象

```
req.query	获取查询字符串参数
req.params	获取动态路由
```

#### 响应对象

```
res.send(数据); 字符串  html  对象
res.snedFile(绝对路径)   响应文件
```

#### 工具的使用

```
nodemon 
rest client
```

#### 模块化路由

route/student.js

```
const express = require('express');
let router = express.Router();

router.get('/', ()=>{})

module.exports = router;
```

app.js（启动项目入口）

```
const express = require('express');
let app = express();
app.listen(3000);

let student = require('./route/studen');
app.use(student)
```







## 一、中间件

### 1. 简介

中间件（Middleware），特指业务流程的中间处理环节。我们可以把中间件看作工厂中的车间。



比如：在处理铁矿石的时候，至少都要经过三个处理环节，从而保证处理过后的矿石达到标准的钢材。处理铁矿石的这三个中间处理环节，就可以叫做中间件。

**中间件其实是路由的升级**，也能达到请求的匹配，只不过必须要进行下一步处理，以**到达最终的路由匹配**，就像在工厂中生产产品，最后必须要出厂。

中间件其实就是到达最终匹配路由的时候，先做一些事

![](/public/img/thirdStage/eight/3-5中间件原理-炼钢车间.png)

前端用户请求服务器，包括get、post、delete、put。都有对应的回调。但是写项目的时候其实还要在响应之前做其它的中间的处理业务。

所以为了提升工厂的效率，才会建立 **必要的车间（就是我们的中间件）**



### 2. 中间件的好处

中间件就是函数，是提升我们的开发效率的。



### 3. 中间件执行流程

当一个请求到达Express的服务器之后，可以连续调用多个中间件，从而对这次请求进行预处理。但是必须要有一个最终的匹配路由进行响应给客户端结果。

![](/public/img/thirdStage/eight/3-6程序中的中间件执行流程.png)



### 4. 使用中间件

#### 1、语法

```js
app.use( [前缀,] (req,res,next )=>{} )
```

中间又是路由的升级版，这个函数的第三个参数往往使用频率是比较高的。next下一步。



#### 2、基本使用（自定义中间件）

**中间件的使用规则：**

- 在所有的路由前面定义中间件，只有错误中间件放在所有路由的后面
- 使用中间件的语法形式和定义路由是相似的
- 无论什么请求都会经过中间件（都会匹配到中间件）
- 中间件及路由的req是共享的一个对象，因此在中间件中的一些公共数据可以绑定到 req 对象上，供具体的路由中使用
- 中间件必须要next往下走，匹配最终路由



**案例需求**：无论什么请求及何种路径，都要获取当前的请求时间      `使用time-stamp第三方包获取时间`。

1、没有使用中间件

```js
const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('http://localhost:3000');
});

let timeStamp = require('time-stamp'); // 引入时间模块

// 案例：无论什么请求及何种路径，都要获取当前的请求时间

app.get('/login', (req, res) => {
  let time = timeStamp('YYYY年MM月DD日 HH:mm:ss');
  // console.log(time);
  res.send(`get-login，当前时间是：${time}`);
});

app.post('/login', (req, res) => {
  let time = timeStamp('YYYY年MM月DD日 HH:mm:ss');
  res.send(`post-login--${time}`);
});

app.get('/register', (req, res) => {
  let time = timeStamp('YYYY年MM月DD日 HH:mm:ss');
  res.send(`get-register--${time}`);
});

app.post('/register', (req, res) => {
  let time = timeStamp('YYYY年MM月DD日 HH:mm:ss');
  res.send(`post-register--${time}`);
});

```

2、使用中间件

```js
const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('http://localhost:3000');
});

let timeStamp = require('time-stamp'); // 引入时间模块

// 定义获取前时间中间件
app.use((req, res, next) => {
  let time = timeStamp('YYYY年MM月DD日 HH:mm:ss');
  // console.log(time);
  req.time = time; // 将时间放在了请求对象上，后面的路由都可以获取到这个请求对象上的属性

  next();
});

app.get('/login', (req, res) => {
  res.send(`get-login，当前时间是：${req.time}`);
});

app.post('/login', (req, res) => {
  res.send(`post-login--${req.time}`);
});

app.get('/register', (req, res) => {
  res.send(`get-register--${req.time}`);
});

app.post('/register', (req, res) => {
  res.send(`post-register--${req.time}`);
});

```



#### 3、中间件加前缀

作用：就是达到**过滤的目的**，只有前缀匹配的路由会先被中间件处理

比如：我只关心注册时间，而登录时间不关心，就可以加前缀 

```js
const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('http://localhost:3000');
});

let timeStamp = require('time-stamp'); // 引入时间模块

// 定义获取前时间中间件
// 只关心注册时间，不关心登录时间
app.use('/register', (req, res, next) => {
  let time = timeStamp('YYYY年MM月DD日 HH:mm:ss');
  // console.log(time);
  req.time = time; // 将时间放在了请求对象上，后面的路由都可以获取到这个请求对象上的属性

  next();
});

app.get('/login', (req, res) => {
  res.send(`get-login，当前时间是：${req.time}`); // undefined
});

app.post('/login', (req, res) => {
  res.send(`post-login--${req.time}`); // undefined
});

app.get('/register', (req, res) => {
  res.send(`get-register--${req.time}`); // 有时间
});

app.post('/register', (req, res) => {
  res.send(`post-register--${req.time}`); // 有时间
});

```



### 5. 中间件种类

**共有四种：应用级别、错误、内置、第三方等四种**



#### 5.1 应用级别的中间件

前面讲的所有的路由 app.method() 的形式都属于应用级别的中间件

app.get() / app.post() / app.delete() / app.put()



#### 5.2 错误中间件

其实就是自定义中间件的特殊形式，**只不过错误中间件都是放在所有路由的后面。**

它有两种形式，404错误 和 逻辑错误



###### 1、404

作用：访问路径不存在的时候（没有定义该路由而用户访问了），给用户返回的信息，它返回有两种形式

- 返回json数据给前端工程师看（前后端分离）
- 返回一个404页面，给用户看

注意：错误中间件一般不加前缀，也不用next下一步，同时要用`res.status(404)`设置状态码

```js
const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('http://localhost:3000');
});

const path = require('path');

app.get('/demo1', (req, res) => {
  res.send('我是demo1');
});

app.get('/demo2', (req, res) => {
  res.send('我是demo2');
});

// 404错误，放在所有路由的最后
// 错误中间件一般不加前缀，也不用next下一步，同时要用res.status(404)设置状态码
app.use((req, res) => {
  // 响应的方式有两种

  // 方式一：返回json数据给前端工程师
  // res.status(404); // 设置状态码
  // res.send({
  //   status: 404,
  //   code: 'not found',
  // });

  // 方式二：返回html页给用户看
  res.status(404); // 设置状态码
  let pathUrl = path.join(__dirname, './views/404.html');
  res.sendFile(pathUrl);
});

```



###### 2、逻辑错误（数据统一处理）

除了404错误，还有一些逻辑错误：比如登录、注册等常见的错误（ 如用户名或密码不能为空、用户不存在等 ）

**数据统一处理有四个参数**

```
app.use((err,req,res,next)=>{  })

```



1、什么时间会进入到数据统一处理这个中间件呢？

普通路由可以有第三个参数next，当在next调用时，会将参数传给统一逻辑处理的第一个参数err

```js
app.get('/路径', (req, res, next)=>{

	next('数据'); // 此时会进入逻辑处理中间件，数据做为参数传给逻辑错误中间件的第一个参数err
})

```



2、逻辑错误处理使用4个参数，且必须是4个参数

```js
app.use((err,req,res,next)=>{

    // err为普通路由next调用时，传过来的参数
})

```

只有在某个路由中使用next函数调用，且next函数调用时也传参了，才能到逻辑错误处理这里，它的第一个参数err才能接收next传过来的参数。



**1、没有采用逻辑错误处理，会导致不容易维护**

```js
// 没有采用逻辑错误处理，会导致不容易维护
app.get('/register', (req, res) => {
    let { username, password } = req.query;

    // 1、用户名和密码非空判断
    if (!username || !password) {
        res.send('<h1 style="background: red;">用户名和密码必须填写</h1>');
    }

    // 2、如果用户名是admin，我就说已占用，其它的都可以注册
    if (username === 'admin') {
        res.send('<h1 style="background: red;">用户名已占用</h1>');
    } else {
        res.send('<h1 style="background: yellow;">可以注册</h1>');
    }
})

```





**返回的内容第1**：直接让用户看到的现成的html页面

```js
const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('http://localhost:3000');
});

// 如果我们响应提示不用p标签了，而改成span标签，改的工作量就比较大
// 如果使用统一逻辑错误处理，就只需要改一处即可
app.get('/register', (req, res, next) => {
  let { username, password } = req.query;
  // console.log(username, password);
  // 1、非空判断
  if (!username || !password) {
    next('用户名和密码必须填写');
    return;
  }

  // 2、注册逻辑判断(如果是admin，就说用户名已占用，否则可以注册)
  if (username === 'admin') {
    next('用户名已占用，请换一个');
  } else {
    res.send('<h1>注册成功</h1>');
  }
});

app.use((err, req, res, next) => {
  // console.log(err);
  res.status(500);
  res.send(`<span>${err}</span>`);
});

```



 返回的内容第2：给前端开发者用的json数据

```js
const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('http://localhost:3000');
});

// 返回json数据
app.get('/register', (req, res, next) => {
  let { username, password } = req.query;
  // console.log(username, password);
  // 1、非空判断
  if (!username || !password) {
    next('用户名和密码必须填写');
    return;
  }

  // 2、注册逻辑判断(如果是admin，就说用户名已占用，否则可以注册)
  if (username === 'admin') {
    next('用户名已占用，请换一个');
  } else {
    res.send({
      status: 200,
      code: '注册成功',
    });
  }
});

app.use((err, req, res, next) => {
  // console.log(err);
  res.status(500);
  res.send({
    status: 500,
    code: err,
  });
});

```



#### 5.3 内置中间件

就是express自带的中间件

###### 1、开放静态资源

语法：

```
app.use( [/前缀], express.static( 要开放的文件夹路径 ) )   // 文件夹路径，尽量使用绝对地址，因为底层是在进行文件的读写操作

```

什么是静态资源：除了html页面（前面所用的文件都属于静态资源：图片、样式、字体文件、js脚本等）

开放：我们这些都要放在服务器上，只有开放了用户才能访问。

前缀：前缀一般与文件夹同名，如果不带前缀，访问时，则不加文件夹名，带前缀时，访问时带文件夹名。推荐带前缀



```js
const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('http://localhost:3000');
});

const path = require('path');

// 不带前缀的写法，访问时也不带前缀
// http://localhost:3000//public/img/thirdStage/eight/erha1.jpg
// app.use(express.static(path.join(__dirname, './public'))); // 文件夹路径，尽量使用绝对地址，因为底层是在进行文件的读写操作

// 带前缀
// 访问地址：http://localhost:3000/public//public/img/thirdStage/eight/erha1.jpg
app.use('/public', express.static(path.join(__dirname, './public')));

app.get('/demo', (req, res) => {
  res.sendFile(path.join(__dirname, './views/index.html'));
});

```



####### 总结静态资源使用

```js
// express中
app.use( '/public', express.static( path.join( __dirname,'./public' ) ) )
/*
    访问：带前缀则，路径中包含开放的文件夹名称：
        http://localhost:3000/public//public/img/thirdStage/eight/erha1.jpg
*/

```

前端页面如何使用静态资源

```html
<!-- 使用  /  开头的绝对地址 -->
<img src="/public//public/img/thirdStage/eight/erha1.jpg" width="300" alt="">
<img src="/public//public/img/thirdStage/eight/erha2.jpg" width="300" alt="">

```



###### 2、接收post参数

就是设置中间件，并在req.body中获取数据

####### 1、方式一，接收查询字符串参数

`此种方式用得较多，它是属于表单格式没有上传文件的方式。`

- app.use(express.urlencoded({extended:false}))
  - 作用：接收前端通过post传过来**查询字符串**形式的参数
  - 前端请求要设置请求头：`Content-Type: application/x-www-form-urlencoded`
  - 后端接收要设置中间件：`app.use( express.urlencoded( { extended:false } ) )`



*.http测试文件中如下

```sh
@url = http://localhost:3000

#### 这里是属于前端开发者的操作
# 当是post请求，必须要设置  Content-Type: application/x-www-form-urlencoded
# 参数以请求体传递过去（即和content-type要空一行）

POST {{url}}/login
Content-Type: application/x-www-form-urlencoded

username=swk111&age=20&password=123456

```

后端

```js
// 接收前端的post请求，且请求头的Content-Type 是 application/x-www-form-urlencoded
// 要设置下面这句话为中间件
app.use( express.urlencoded( { extended:false } ) )

app.post('/login',(req,res)=>{
    console.log( req.body ); // 前端传过来看数据在body中
    res.send('我是登录')
})

```





####### 2、方式二，接收json对象参数

- app.use(express.json())
  - 作用：接收前端post传过来是**json对象**形式的参数
  - 前端请求要设置请求头：`Content-Type: application/json`
  - 后端接收要设置中间件：`app.use( express.json() )`

```sh
#### 前端请求，参数是json的形式
#### 要设置：Content-type: application/json

POST {{url}}/register
Content-Type: application/json

{"username":"zbj","password":"112233"}

```

```js
// 后端接收前端的post请求，且请求头的Content-Type 是 application/json的时候的参数
app.use( express.json() )

app.post('/register',(req,res)=>{
    console.log(req.body)
    res.send('我是注册')
})

```



####### 总结post的接参

成熟的后端应该两个都配置。同时无论是配置哪个，post的参数都在**req.body**中接收。

**注意：**默认的表单post提交： application/x-www-form-urlencoded，且参数是以查询字符串的方式传输







#### 5.4 第三方中间件

即npm上的模块包。看手册，复制粘贴。



###### 1、网站小图标：serve-favicon

作用：解决网站小图标的。统一加载小图标

生成小图标网站：https://tool.lu/favicon



用法步骤

1、安装

```sh
npm i serve-favicon

```

2、使用

```js
// 引入
var favicon = require('serve-favicon');
var path = require('path'); 

// 使用小图标中间件，以后在访问其它路由时，就可以看到这个小图标了
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

```





###### 2、生成图片验证码：svg-captcha

注意：验证码的验证需要配合session来实现

下载

```sh
npm i svg-captcha

```

使用

```js
const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('http://localhost:3000');
});

var svgCaptcha = require('svg-captcha'); // 引入模块

// http://localhost:3000/captcha  作为img标签的src属性

app.get('/captcha', function (req, res) {
  // var captcha = svgCaptcha.create(); // 创建时走默认

  var captcha = svgCaptcha.create({
    size: 4, // 字符长度，默认4
    ignoreChars: '0oO1iILl', // 被忽略的文字
    noise: 3, // 干扰线的条数
    color: true, // 颜色是否彩色
    background: '#cc9966', // 背景色
  });
  console.log(captcha.text); // 验证码的内容，要结合session一起用

  res.type('svg');
  res.status(200);
  res.send(captcha.data);
});

```



前端使用：

```html
<img src="http://localhost:3000/captcha" alt="">

```

