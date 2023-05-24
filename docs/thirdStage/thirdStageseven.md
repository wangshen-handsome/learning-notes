原生node：文件操作系统、模块、npm与包、服务器





## 一、express简介

Express是基于**Nodejs**平台，快速、开放、极简的 Web 开发框架

类似于前端使用的原生JS => JQuery

官网地址：https://www.expressjs.com.cn/

作用：使用 Express，我们可以方便、快速的创建**Web网站的服务器**或**API接口**（纯json数据的服务器）。

本质上：express是一个第三方包，存在于npm社区中。



## 二、安装及基本使用

### 1. 初始化项目并安装express

```
1)初始化项目
	npm init -y  :  项目名称不要有中文、特殊符号、空格、也不要起特殊名称（第三方包、内置模块的名称）
2)下载express
	npm i express
```

### 2. 初体验：express创建web服务器

创建app.js

```js
// 1. 引包
const express = require('express')
// 2. 创建一个服务
const app = express()
// 3. 监听端口
app.listen(3000, ()=>{ // 3000开放成功，则运行此回调函数，写不写都行，就是方便开发者看的
    console.log( 'http://localhost:3000  可以访问了' )
})
```



#### 初体验案例

```js
// 1. 引包
const express = require('express');
// 2. 创建一个服务
const app = express();
// 3. 监听端口
app.listen(3000,()=>{ // 3000开放成功，则运行此回调函数，写不写都行，就是方便开发者
    console.log( 'http://localhost:3000  可以访问了' )
});


// 请求地址是http://localhost:3000， 会执行这里
app.get('/', (req, res) => {
    res.send('我是首页')
})

// 请求地址是http://localhost:3000/login， 会执行这里
app.get('/login', (req, res) => {
    res.send('<h1>我是登录页</h1>')
})

// 请求地址是http://localhost:3000/register， 会执行这里
app.get('/register', (req, res) => {
    res.send({ msg: '我是注册', code: 200 });
})
```



### 3. app对象

使用express实例出来的对象



#### app.get(路径, 监听函数) 

作用：监听用户发送的get请求，有两个参数

参数1：路径，必须以 “/” 开头

参数2：回调函数，回调函数有至少有2个参数

​			1） req：request对象

​			2） res：response对象

**什么是get请求？** 通过浏览器直接访问的网址（url）、页面里面的src（js、img）、link中的href(css)都是get请求。以及我们使用表单（method为get），本质上还是使用浏览器的地址栏发请求

`通过查看网络，可以看到这些的get请求`





#### app.post(路径, 监听函数)

作用：监听用户发送的post请求，有两个参数

参数1：路径，必须以 “/” 开头

参数2：回调函数，回调函数有至少有2个参数

​			1） req：request对象

​			2） res：response对象

目前只能通过form表单，设置表单的method为post发起post请求

`编写代码演示post请求`



###### 后端代码

```js
const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('http://localhost:3000');
})

// get请求
app.get('/login', (req, res) => {

    res.send('我是login的get请求');
})

// post请求
app.post('/login', (req, res) => {

    res.send('我是login的post请求');
})
```

###### 前端的表单代码

```html
<form action="http://localhost:3000/login" method="post">  
    <!-- 默认为method为get -->
    <input placeholder="用户名" name="username">
    <input type="submit" value="登录">
</form>
```



#### 关于表单传递的参数说明

get的请求，表单参数直接会拼接在url地址?后面，以querystring查询字符串的形式传递到后端

post的请求，表单参数是看不到的（这个相对安全）  以**请求体的方式传递到后端**





**总结：**

get请求：url地址栏、js、css、图片、form表单的get

​	数据：用?号跟在url的后面

post请求：form表单的post、ajax的post

​	数据：请求体中







### 4. response响应对象

#### 1、res.send()返回

特点：

1、返回的数据类型更加灵活，可以是string、Object
2、根据数据类型灵活的设置Content-type( **主要是html和json** )，并且默认就是utf-8
           2.1：普通的字符当作 html 渲染
           2.2 :  返回的是Object，则 application/json 渲染

```js
// 响应多种类型的数据
app.get('/demo1', (req, res) => {

    // 1、返回的数据类型更加灵活，可以是string、Object
    // 2、根据数据类型灵活的设置Content-type( 主要是html和json )，并且默认就是utf-8
    //      2.1: 普通的字符当作 html 渲染
    //      2.2: 返回的是Object，则 application/json 渲染

    // res.send('你是隔壁小王'); // 响应字符串
    // res.send('<h1>你好</h1>'); // 响应html
    res.send({ uname: 'zs', age: 3 }); // 响应对象
    // res.send('abc'); // 响应两次，就会报错
})
```





**但是**：其它的数据文件还需要手动设置Content-type

如：

`res.setHeader('Content-type','image/jpeg')`

**不要刻意去记文件类型。因为我们95%以上返回的数据就是普通字符串和json**

文件类型表：https://tool.oschina.net/commons/



`案例：返回一张图片，只是便于理解设置响应头的意思，实际开发没有意义`

```js
// 响应图片
// 演示可以设置不同的Content-type。图片的展示不用这样
app.get('/img', (req, res) => {
  let url = path.join(__dirname, './/public/img/thirdStage/seven/abc.jpg');
  let data = fs.readFileSync(url); // 读取文件的二进制
  // console.log(data);

  res.setHeader('Content-type', 'image/jpeg');
  res.send(data);
});
```



#### 2、res.sendFile()返回文件

作用：发送一个文件给用户，参数必须是个绝对地址

```js
// 响应文件：主要用于响应html文件
app.get('/file', (req, res) => {
  // res.sendFile(绝对地址); // 关键，参数是文件的绝对地址

  // let url = path.join(__dirname, './/public/img/thirdStage/seven/abc.jpg'); // 图片也不这样用
  // res.sendFile(url);

  // 响应html文件
  res.sendFile(path.join(__dirname, './views/1form表单发起get和post请求.html'));
});
```



#### 3、总结

- res.send(参数)  : 参数可以是字符串，也可以是对象，并且默认设置响应头
- res.sendFile(文件的绝对路径)： 将文件响应给前端（通常响应html页面） 
- 每一次请求都有对应的一次响应，且只能响应一次，send两次就会报错。







### 5. request请求对象

#### 1、req.query

作用：获取url地址 ? 后面的查询字符串参数，它是一个对象

```js
// req.query
// 获取get请求传过来的参数，它是一个对象
app.get('/login', (req, res) => {
    // console.log(req.query); // { name: 'zs', age: '3' }  get请求传过来的参数，它是一个对象
    let { name, age } = req.query; // 解构get请求传过来的参数

    res.send(`我是${name}，我今年${age}岁`);
})

```



#### 2、req.params

作用：获取动态路径的参数，它返回的是一个对象

专业名称：动态路径（路由）。		`params 参数`



如豆瓣电影中，如何获取地址中的数字参数

```
https://movie.douban.com/subject/32493124/
https://movie.douban.com/subject/35164328/
https://movie.douban.com/subject/34973399/

```



如果不用动态路径，上万部电影，就得写上万个路由，这是不可能的

```js
app.get('/subject/32493124/',(req,res)=>{
    res.send('悬崖之上')
})
app.get('/subject/35164328/',(req,res)=>{
    res.send('扫黑')
})

```

![image-20220314142817366](/public/img/thirdStage/seven/image-20220314142817366.png)



使用动态路径

```js
// 模拟豆瓣的动态路径
let arr = [
    { id: 23, msg: '这是我的兄弟' },
    { id: 112, msg: '今天喝什么' },
    { id: 44, msg: '明天不出去了' },
    { id: 5, msg: '就在这里了' },
    { id: 78, msg: '论牛肉的做法' }
]

// 使用动态路径
// : 号后跟一个参数名，参数名随意起
app.get('/subject/:id', (req, res) => {  
    // console.log(req.params); // { id: '34874432' }  返回的是动态参数的对象，这里可以解构
    let { id } = req.params;
    // console.log(id);

    let o = arr.find(item => item.id == id);
    if (o) {
        res.send(o)
    } else {
        res.send('请检查动态路由ID，没有可匹配的')
    }
})

```





**总结get传参**

方式一：查询参数传参，后端用 req.query 获取

```
http://localhost:3000/login?username=zs&pass=123

```

```
app.get('/login', (req, res)=>{
	req.query
})

```

方式二：用动态路由传参，后端用 req.params 获取

```
http://localhost:3000/test/sdf33
http://localhost:3000/test/3432
http://localhost:3000/test/dgdg

```

```
app.get('/test/:id', (req, res)=>{
	req.params
})

```

```js
// http://localhost:3000/demo/12?a=1&b=2
// 12就是动态路由
// a=1&b=2就是查询字符串参数
app.get('/demo/:id', (req, res) => {
  console.log(req.query); // 查询字串参数
  console.log(req.params); // 动态路由参数

  res.send('即有动态路由传参，也有查询字符串参数');
});

```





## 三、工具的使用

### 1、nodemon

后端开发，node代码修改完毕需要重新运行node。但是我们想像前端那样，修改代码保存后在浏览器直接刷新即可看到最新的。

#### 1、安装

```sh
npm i nodemon -g

```

在任意目录执行以上代码即可。

#### 2、使用

把nodemon工具代替node命令。以后只要修改了后端代码，服务器就会自动重新启动，我们就不用手动再运行服务器了。

```
nodemon js文件

```

![image-20210513150918606](/public/img/thirdStage/seven/image-20210513150918606.png)





### 2、Rest Client测试工具

专业上叫：**接口测试工具**。即测试请求的工具

它是基于vscode上的一个插件而已

#### 1、安装

![image-20210513151254839](/public/img/thirdStage/seven/image-20210513151254839.png)

#### 2、使用

在项目下创建一个  ***.http** 的后缀文件（名字随意起，但后缀是.http）

```sh
# 我是注释
# 书写标准的请求消息（请求消息包括：请求方法，url，协议，请求头字段 ）
# 注意：“协议，请求头字段”可以省略，但是“请求方法，url”这两个不能省略
# 好处：我们的测试记录都能很好的保留。测试请求也非常方便，比如：测试post就没有必要创建表单

# @变量名：用于声明一个变量，存储后面的哪个地址，不要加分号
@url = http://localhost:3000

#### post请求  两两请求之间用3个#分开
POST http://localhost:3000/login

#### get请求  使用变量
GET {{url}}/login

```

![image-20210513152202270](/public/img/thirdStage/seven/image-20210513152202270.png)





## 四、路由

### 1. 路由概述

#### 1、什么是路由？

广义上来讲，**路由就是映射关系**。对于我们网络请求中的路由是：每一次请求对应每一个请求处理的函数。



#### 2、现实中的路由

![](/public/img/thirdStage/seven/3-3现实中的路由.png)

#### 3、路由的作用

你想使用某种服务，那么一定有一个对应的路由。路由会给我们提供相应的服务（映射关系）



### 2. Express中的路由

包含三个方面：**请求方法、请求的路径、处理函数**  缺一不可。

语法：

```js
app.method( path,callback )

```

参数说明：

​		method：代表请求方式，比如get、post、delete、put

​		path：代表请求路径，必须以  /  开头，同时可以定义动态路径

​		callback：代表回调函数，用户请求**匹配到**路由以后要执行的函数。（ request, response ）

**匹配到( 就是匹配成功 )：注意，只有方法、路径都相等才算匹配成功。**



#### 匹配流程

![](/public/img/thirdStage/seven/3-4路由匹配流程.png)

(1)每当一个请求到达服务器之后，需要先经过路由的匹配，只有匹配成功之后，才会调用对应的处理函数

​	匹配成功: 只有方法、路径都相等才算匹配成功

(2)在匹配时，会按照路由的顺序进行匹配，如果请求类型和请求的 URL 同时匹配成功，则 Express 会将这次请求，转交给对应的 function 函数进行处理。主要是处理业务，并且把最终的结果响应给前端，**且一定是有结果返回**

(3)如果从上到下有相同的路由，则会匹配第1个。**所以定义相同的路由是没有意义的**

`演示相同路由，只会匹配上面第一个，并测试多种请求方式`

```js
const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('http://localhost:3000');
});

// 学员系统
app.get('/student', (req, res) => {
  res.send('查找一个学生');
});

app.delete('/student', (req, res) => {
  res.send('删除一个学生');
});

app.post('/student', (req, res) => {
  res.send('增加一个学生');
});

app.put('/student', (req, res) => {
  res.send('更新一个学生');
});

// 有相同的路径和方法，永远不会匹配到这里
app.get('/student', (req, res) => {
  res.send('查找一个学生2222');
});

```





### 3. express.Router 模块化路由

把公共代码提出来放到一个js文件中。不能把所有的路由信息放在一个js文件中（这样这个js文件会很庞大），需要分门别类的抽离出来 。

#### 步骤

1. 创建单独的路由文件，比如：route/a.js

```js
// 1、引入express，并创建路由模块
const express = require('express')
const router = express.Router()

// 2、定义路由
router.get( 路径，函数 )
router.post( 路径，函数 )

// 3、暴露出去
module.exports = router; // 只能用module.exports进行暴露

```

2. 在使用nodemon运行的那个入口js文件中引入 a.js

```js
const express = require('express');
const app = express();
app.listen(3000);

const rA = require('引入a.js')
app.use( rA ) // 使用定义的路由信息

```



#### 实战

教务管理管理系统（学生student、老师teacher）

对于任何数据都有增、删、改、查的操作

