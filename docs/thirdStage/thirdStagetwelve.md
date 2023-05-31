---

layout: thirdStagetwelve

title: 三阶段 | 第十二天

---

## 回顾

1、mysql

```
1、下载
npm i mysql
2、引入
const mysql = require('mysql');
3、连接数据库
let connectObj = mysql.createConnection({
    host:'主机名',
    user:'用户名',
    password:'密码',
    port: 端口号,
    database:'要操作哪个数据库'
});
4、发起请求
connectObj.query(sql, (err, result)=>{
	err: 失败的对象
	result: 成功的返回内容
})
```

2、 promise

```
异步：回调（回调地狱）/  promise/async/await

let pro = new Promise((resolve, reject)=>{
	resolve(成功执行传入参数);
	reject(失败执行传入参数)
})

pro.then((result)=>{
	result:成功时返回的参数
})
pro.catch((err)=>{
	err:失败时返回的参数
});

promise状态
pending 状态=> 成功的 fulfilled
pending 状态=> 失败的 rejected

Promise.all([pro1, pro2, ...])
返回一个promise对象，还可以再用then和catch
```

3、async

```
async function name(){
 	let res1 = await pro1;
 	let res2 = await pro2;
}
name();
```



## 一、原生ajax

知道流程（原理）即可，不需要你封装，因为有jquery。后面的vue、小程序...都有对应的

### 1. 介绍

#### 1.1 定义

全称：Asynchronous JavaScript and XML   (异步的 JavaScript 和 XML)

ajax就是非常典型的异步形式。xml是一种数据表示形式（但是已经过时了。现在已经让json代替了）

https://www.w3school.com.cn/xml/index.asp



###### 作用

代替浏览器地址栏（向服务器发送请求），ajax也可以向服务器发送http请求



#### 1.2 传统请求的问题

浏览器地址栏，是同步的（会阻塞代码运行），当服务器很忙碌的时候会卡顿（等待），就造成了资源浪费 。



#### 1.3 Ajax优势

ajax就可以解决同步问题，因为ajax是异步的。

ajax还可以实现页面的局部更新



#### 1.4 Ajax请求与传统请求的区别：

- ###### 传统方式请求：

  ![05-1传统请求](/public/img/thirdStage/twelve/05-1传统请求.jpg)

- ###### ajax方式请求：

![05-2ajax请求方式](/public/img/thirdStage/twelve/05-2ajax请求方式.jpg)



![](/public/img/thirdStage/twelve/ajax.png)



#### 1.5 应用场景：

只要是**页面中局部更新内容都**可以使用ajax进行处理。



###### 1.5.1 表单验证：

![05-3ajax应用表单验证](/public/img/thirdStage/twelve/05-3ajax应用表单验证.png)



###### 1.5.2 数据分页显示：

![05-4ajax应用数据分页显示](/public/img/thirdStage/twelve/05-4ajax应用数据分页显示.png)





### 2. 原理

实现过程：直接使用express创建一个服务器，它有四个路由，分别为register_get和register_post页面的路由，checkuser的get和post注册功能的路由。

注册功能的路由提供后端逻辑（判断是否能注册，只要不是demo就可以注册）。前端页面中实现ajax的基本流程（get/post方式）。

要实现的功能是：检查用户名是否存在，返回可以注册或用户名已占用的对象。





#### 2.1 方法

###### XMLHttpRequest

作用：它是一个构造函数，用于创建ajax对象

语法：

```js
let xhr = new XMLHttpRequest();
let xhr = new ActiveXObject("Microsoft.XMLHTTP");  //IE5/6
```



###### open

作用：规定请求的类型、URL 以及是否异步处理请求。

语法：

```js
xhr.open(method,url,async)
```

method: get / post / delete / put



###### send

作用：发送，post时，数据通过send的参数传给后端，get时，数据通过url地址栏后面跟上传给后端

语法：

```js
xhr.send(string)
```



#### 2.2 属性

###### readyState

作用：ajax状态码

语法：

```js
xhr.readyState
```

描述：在创建ajax对象，配置ajax对象，发送请求，以及接收完服务器端响应数据，这个过程中的每一个步骤都会对应一个数值，这个数值就是ajax状态值。

包含的状态值：我们关心的是4

​		 0：请求未初始化，还没有调用open

​		 1：请求已经建立，但是还没有发送send 

​		 2：请求已经发送  已经执行了send

​		 3：请求正在处理中，通常响应中已经有部分数据可以用了 

​		 **4：响应已经完成，可以获取并使用服务器的响应** 



###### status

作用：服务器状态码

语法：

```js
xhr.status
```

描述：无论AJAX访问是否成功，由HTTP协议根据所提交的信息，服务器所返回的HTTP头信息代码，该信息使用“ajax.status”所获得；（由数字1XX,2XX三位数字组成)

常见状态码：200，304，404，500



###### responseText 

作用：服务器响应的文本数据

语法：

```js
xhr.responseText  无论后端返回什么，它得到的都是字符串

```



#### 2.3 事件

语法：

```js
xhr.onreadystatechange  = callback

```

描述：当请求被发送到服务器时，每当 readyState 改变时，就会触发 onreadystatechange 事件



### 3. 实现步骤

(1)创建Ajax对象 

(2)Ajax请求的地址与请求方式

(3)发送请求 

(4)获取服务器响应给客户端的数据

(5)处理服务器响应数据    JSON.parse和JSON.stringify



#### 完整案例

以get的方式访问  /checkuser 地址实现注册

假定输入的是demo，则用户名已经占用，其它的可以注册（注意：是不刷新页面的）

```html
<h2>注册-get方式</h2>
<input type="text" id="txt">
<span id="tip"></span>

<script>
    // ajax基本流程

    var txt = document.getElementById('txt');
    var tip = document.getElementById('tip');

    // 输入框失焦的时候，触发ajax请求
    txt.onblur = function () {
        // 0、取得用户输入
        var val = this.value;

        // 1、创建Ajax对象，xhr它的下面有很多的属性和方法
        let xhr = new XMLHttpRequest();

        // 2、设置请求地址与请求方式
        // xhr.open(method, url, async)
        // get请求的数据，数据跟在url的后面传输
        xhr.open('get', '/checkuser?username=' + val, true);

        // 3、发送请求
        xhr.send();

        // 4、获取服务器响应给客户端的数据
        //   事件：xhr.onreadystatechange 事件，当ajax的状态发生变化的时候会调用这个函数

        //   ajax状态：xhr.readyState
        //     0：请求未初始化，还没有调用open
        // ​	1：请求已经建立，但是还没有发送send 
        // ​	2：请求已经发送  已经执行了send
        // ​	3：请求正在处理中，通常响应中已经有部分数据可以用了 
        // ​	4：响应已经完成，可以获取并使用服务器的响应

        //   xhr.status: 服务器状态码   常见状态码：200，304，404，500

        //   xhr.responseText: 服务器响应的文本

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) { // 响应已经完成，可以获取并使用服务器的响应
                if (xhr.status === 200) { // 服务器状态码为200
                    // 5、处理服务器响应数据

                    // 返回的是字符会串
                    // console.log(xhr.responseText); // 服务端返回的数据
                    // tip.innerHTML = xhr.responseText;

                    // -----------------------------------

                    // 返回的是对象
                    let data = JSON.parse(xhr.responseText);
                    // console.log(data);
                    tip.innerHTML = data.msg;

                }
            }
        }

    }

</script>

```





### 4. ajax的get和post传参

#### 4.1 get

语法：

```js
xhr.open('get', 'http://www.api.com?username=ujiuye&password=123456')

```

描述：get传参只需要在url地址后按照?key=value格式进行传递

代码案例：

```js
oAjax.open( 'get',`http://localhost:3000/checkuser?user=${username}`,true )

```



#### 4.2 post

注意：在send发送前，要设置好请求头

语法1：传查询字符串

```js
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded') 
xhr.send('username=ujiuye&password=123456');

```

语法2：传json字符串，将对象转成json字符串

```js
xhr.setRequestHeader('Content-Type', 'application/json') 
let data = {username:'ujiuye',password:'123456'}
xhr.send(JSON.stringify(data))

```



描述：使用setRequestHeader设置请求头，并传递对应的post参数

代码案例：

```js
// 2、设置请求地址与请求方式
// xhr.open(method, url, async)
//      get请求的数据，跟在url的后面传输
//      post请求的数据，放在send中传输
xhr.open('post', '/checkuser', true);

// 3、发送请求
// 方式一：发送查询字符串，前端要设置对应的请求头，后端要设置对应的接收中间件
// xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// xhr.send(`username=${val}&password=123`);


// 方式二：发送json字符串，前端要设置对应的请求头，后端要设置对应的接收中间件
let obj = {
    username: val,
    password: 123
}
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify(obj)); // 参数为真正的json字符串

```



## 二、Jquery之Ajax

都是依赖于 XMLHttpRequest 封装出来的。

https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js



### 1. $.get()   了解

语法：

```js
$.get(URL[, data], callback)

```

描述：发送get请求，data为请求时传递的参数  

```
{ key:value, key:value, ... }
```

代码案例：

```html
<h2>jquery-注册-get方式</h2>
<input type="text" id="txt">
<span id="tip"></span>

<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
    // $.get(URL[, data], callback)

    let txt = $('#txt');
    let tip = $('#tip');

    txt.on('blur', () => {

        // 发送jquery的get请求
        $.get('/checkuser', { username: txt.val() }, (result) => {
            console.log(result); // jquery返回的json字符串会自动包装成对象
            tip.html(result.msg);
        })

    })
</script>

```

后端

```js
// get方式，注册功能(检查用户名是否占用，只要不是demo就可以注册)
app.get('/checkuser', (req, res) => {
    console.log(req.query);

    let { username } = req.query;
    if (username === 'demo') {
        // res.send('用户名已占用');
        res.send({
            status: 500,
            msg: '用户名已占用'
        })
    } else {
        // res.send('可以注册');
        res.send({
            status: 200,
            msg: '可以注册'
        })
    }
})

```





### 2. $.post()    了解

语法：

```js
$.post(URL[, data], callback)

```

描述：发送post请求，data为请求时传递的参数 
  
```
{ key:value, key:value, ... }
```

代码案例：

```html
<h2>jquery-注册-post方式</h2>
<input type="text" id="txt">
<span id="tip"></span>

<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>

    // $.post(URL[, data], callback)

    let txt = $('#txt');
    let tip = $('#tip');

    txt.blur(function () {
        $.post('/checkuser', { username: txt.val() }, (result) => {
            console.log(result);
            tip.text(result);
        })
    });
</script>

```

后端，注意要设置接收post数据

```js
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// post方式，注册功能(检查用户名是否占用，只要不是demo就可以注册)
app.post('/checkuser', (req, res) => {
    console.log(req.body);
    let { username } = req.body;

    if (username === 'demo') {
        res.send('用户名已占用');
    } else {
        res.send('可以注册');
    }
})

```





### 3. $.ajax()   掌握

语法：

```js
$.ajax({
    url: '', // 请求地址(必须)
    type: '', // 请求方式  默认get
    data: {}, // 传递的参数
    success: function (res) { }, // 成功的回调
    error: function (err) { } // 失败的回调
})

```



描述：可以发送get和post请求

```js
$.ajax({
    url: 'http://localhost:3000/checkuser',
    data: {
        user: 'aaa',
        age: 20,
        pasword: '123123'
    },
    success: function (res) {
        console.log(res)
    }
})

```

```js
$.ajax({
    url: 'http://localhost:3000/checkuser',
    data: {
        user: 'bbb',
        age: 30,
        pasword: '123123'
    },
    type: 'post',
    success: function (res) {
        console.log(res)
    }
})

```





## 三. 跨域

工作中的跨域：

- 开发阶段：前端解决
- 线上阶段：后端解决



### 3.1 简介

不同地域。即项目可以在不同的服务器上。**只有使用ajax的时候才会产生跨域 。**

**跨域解决方案：cors和jsonp**

跨域种类

协议、域名、端口三者中任何一个不一样，则为跨域

![5-5跨域种类](/public/img/thirdStage/twelve/5-5跨域种类.png)

跨域错误

![5-6跨域错误](/public/img/thirdStage/twelve/5-6跨域错误.png)

如果前端代码和后端代码放在一个服务器就可以不用跨域了，但是**实际工作中，后端的代码和前端的代码通常分离（ 前后端分离 ）**



### 3.2 CORS解决跨域

这是后端技术，**跨域指的是后端代码不让前端跨域**。

​	![5-7cors](/public/img/thirdStage/twelve/5-7cors.jpg)

#### 3.2.1 配置cors

###### Access-Control-Allow-Origin

语法：后端的路由中配置响应头，*即所有的请求均可以，不限定某个请求地址

```js
res.header('Access-Control-Allow-Origin', '*');

```

Access 入口 

Control 控制

Allow 允许

Origin 源

描述：默认情况下只能同域发送ajax请求。此属性可以设置哪个来源（ url ）可以请求 。常常设置为 *

通常可以写成中间件

```js
app.use( function(req,res,next){
    // res.header( 'Access-Control-Allow-Origin', 'http://127.0.0.1:5500' )
    res.header( 'Access-Control-Allow-Origin','*' ) // 任意来源
    next()
} )

```

但是，`Access-Control-Allow-Origin`只能允许get和post跨域，其它的put、delete不可以跨域，就又要设置`Access-Control-Allow-Methods`



###### Access-Control-Allow-Methods

语法：

```js
res.header('Access-Control-Allow-Methods', '*');

```

描述：默认情况下，CORS 仅支持客户端发起 GET、POST 请求。如果客户端希望通过 PUT、DELETE 等方式请求服务器的资源，则需要在服务器端，通过 Access-Control-Alow-Methods来指明实际请求所允许使用的 HTTP 方法。

```js
app.use( function(req,res,next){
    //res.header( 'Access-Control-Allow-Origin','http://127.0.0.1:5500' )
    res.header( 'Access-Control-Allow-Origin','*' )//任意来源
    res.header( 'Access-Control-Allow-Methods','*' )//允许所有方法进行跨域
    next()
} )

```



###### 总结

如果后端工程师开发的是接口项目（ 返回的是json数据 ），那么他们的接口服务就应该配置这个可以跨域的响应头



#### 3.2.2 cors中间件

(1)运行 npm i cors 安装中间件

(2)使用 const cors = require('cors') 导入中间件

(3)在所有路由之前调用 app.use(cors()) 配置中间件

```js
const cors = require('cors');
app.use(cors()); // 使用cors中间件，允许跨域

```





### 3.3 JSONP解决跨域

**jsonp跨域只能执行get请求，且必须后端支持**

![image-20220526163047051](/public/img/thirdStage/twelve/image-20220526163047051.png)



JSONP：json + padding， json代表数据，padding代表填充

即把服务端传过来的json数据padding（填充）在html页面中。jsonp和ajax（XMLHttpRequest）没有半点关系

**原理：**往html页面中添加一个script标签，通过script标签的src请求一个地址（请求的地址不论是什么，其结果都会当做js代码来处理），请求的这个地址返回的数据格式一定是   **函数名( json数据 )**  

注意：这个函数是在前端这里定义的。数据是后端操作数据库拿到的。

特点/缺点：jsonp只能发get 。因为**script link img** 都是只能发get。因此script方式的src不会产生跨域。



jsonp原理，了解即可，工作中基本不用，面试中有问

```html
<button>发送jsonp请求</button>

<script>
    function fn(data) {
        console.log(data);
    }

    let head = document.getElementsByTagName('head')[0];
    let btn = document.getElementsByTagName('button')[0];

    // 点击按钮时，创建script标签，设置src属性，并添加到页面中
    // 这个服务器地址，会返回一个  fn(数据)  的内容，它就直接把我们上面定义的fn函数调用了
    btn.onclick = function () {
        let script = document.createElement('script');
        script.src = 'http://localhost:3000/demo';
        head.appendChild(script);
    }
</script>

```

 app.js

```js
const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('http://localhost:3000');
});

app.get('/demo', (req, res, next) => {
    res.send(`fn({uname: 'zs', age: 3})`);
})

```



#### jquery的jsonp

只需要在 $.ajax({}) 中配置  `dataType: 'jsonp'`

```js
const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('http://localhost:3000');
});


app.get('/demo', (req, res, next) => {

    // console.log(req.query);
    let { callback } = req.query; // 前端使用了jsonp跨域，后端得取得函数名，并用函数名包裹数据
    res.send(`${callback}({uname: 'zs', age: 3})`);
})

```

```html
<button>发送jsonp请求</button>

<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>

    $('button').click(function () {
        $.ajax({
            url: 'http://localhost:3000/demo',
            dataType: 'jsonp', // 使用jsonp跨域
            success: function (data) {
                console.log(data);
            },
            error: function (err) {
                console.log(err);
            }
        })
    });
</script>

```





## 四、Promise与Ajax

Ajax的表现形式是异步的，必须有回调。所以要把异步回调变成同步。

```
$.ajax({
	url:'',
	data:{},
	type:{},
	success(res){
		
	}
})

```





### 使用promise封装ajax

```js
function Http({ url = '', type = 'get', data = {} }) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url,
			type,
			data,
			success: function (res) {
				resolve([null, res]);
			},
			error: function (err) {
				resolve([err]);
			}
		})
	})
}

```



总结：前端需要将ajax异步变成同步，就用http.js，后端需要将查询数据计数器的异步变同步，就用db.js





### 使用封装好的方法发送ajax

```js
$('button').click(async function () {
	console.log(1); // 顺序执行

	let res = await Http({
		url: './students.json'
	})
	console.log(res); // 顺序执行

	console.log(2); // 顺序执行
});

```



## 五、Promise、Ajax与async综合

案例：promise、async、ajax封装

1、脚手架安装项目

2、修改默认配置

 node-nodemon

清空public 、 views 、routes/users.js

3、设置404和500







## 六、接口开发规范

### 1. 前言

开发模式：

​	1、从学习express开始到现在，所学习的html和数据的拼接都是在后端处理的（后端工程干的），这种模式叫**后端渲染**。

​	2、后端给前端开发者提供json数据。前端拿到json数据在前端进行html和数据的拼接，最后渲染在页面上，这种模式叫**前端渲染**。

​		使用Express开发可以返回html、css、img等这类的数据。也可以返回json数据： 只提供json数据的Express服务指的就是**接口开发** ，这些数据的返回和之前所讲述http协议有着密不可分的关系，只要正确定义路由、使用合理的请求就能拿到结果，一个好的接口开发工程师应该遵守  RESTful   API  规范。



### 2. RESTful api规范

#### 2.1 简介

RESTful规范，是目前一种比较流行的互联网软件设计规范。

这个规范约束的就是：

​	 1、路由地址应该如何定义

​	 2、返回的json接口数据应该如何规范

#### 2.2 优点

使开发者在进行独立开发或协作开发更能标准，以达到行业的统一。它结构清晰、符合标准、易于理解、扩展方便，越来越多的开发者遵守这种规范。

php/java/node/python 开发都尊守这种规范。



#### 2.3 常用方法规范

(1)GET：SELECT 获取资源

(2)POST：CREATE 创建资源   INSERT INTO

(3)PUT：UPDATE 更新资源 

(4)DELETE：DELETE 删除资源



###### 2.3.1 路由地址如何定义

以学生为例：

只要数据操作都包含：增、删、改、查

| 功能         | 方法   | 路由             | 参数                                                         |
| ------------ | ------ | ---------------- | ------------------------------------------------------------ |
| 增加一个学生 | POST   | /student         | req.body  : 姓名和学号 等等                                  |
| 删除一个学生 | DELETE | /student?id=111  | req.query  : id  以学生的id去删                              |
| 更新一个学生 | PUT    | /student?id=111  | req.query获取id，还要获取更新的新数据   req.body :姓名和学号 |
| 查一个学生   | GET    | /student?id=111  | req.query  获取id                                            |
| 查一个学生   | GET    | /student/111     | req.params  动态路由获取id                                   |
| 查一组学生   | GET    | /students?page=1 | req.query  :  page,size  ( 页码和长度 )                      |



###### 2.3.2 返回的json接口数据应该如何规范

####### 正确的数据

- 增加一个学生

```json
{
	status:200, // 状态码
	msg:'添加成功',
	result: 返回添加成功的那个学生的id
}

```

- 删除一个学生

```json
{
  	status:200, // 状态码
  	msg:'删除成功'
}

```

- 更新一个学生

```json
{
  	status:200, // 状态码
  	msg:'更新成功'
}

```

- 获取一个学生

```json
{
  	status:200, // 状态码
  	msg:'获取成功',
  	result:{
  		username:'',
  		age:20
  	}
}

```

- 获取一组学生

```json
{
  	status:200, // 状态码
  	msg:'获取成功',
  	result:{
  		data:[ // 具体的学生列表
  			{},
  			{}
  		],
  		page:'', // 当前页码
  		pageTotal:'', // 总页码
  		rows:'' // 总条数
  	}
}

```

  

####### 错误的数据

```json
{
	status:500, // 状态码，状态码不能写死，应该根据不同的错误类型，返回不同的状态码
	msg:'删除失败'
}

```



#### 2.4 根据RESTful 进行接口开发（实操）

(1)使用express脚手架生成接口项目：express --view=ejs myapp 

(2)进入myapp目录，安装依赖 npm i

- 改node为nodemon
- 修改404错误和500错误提示，如`res.send('404');`

(3)创建student.js和teacher.js到routes目录中

(4)定义模块化路由代码

(5)在入口文件app.js中引入路由

(6)启动项目



student.js

```js
var express = require('express');
var router = express.Router();

// 增
router.post('/student', function (req, res, next) {
  // 1、获取数据
  let { username, password } = req.body;

  // 2、进行必要的判断
  if (!username || !password) {
    next('用户名和密码必须填写')
    return;
  }

  // 3、增加成功
  res.send({
    status: 200,
    msg: '增加成功',
    result: 123
  })

});

// 删
router.delete('/student', function (req, res, next) {
  res.send('删除一个学生');
});

// 改
router.put('/student', function (req, res, next) {
  res.send('修改一个学生');
});

// 查
router.get('/student', function (req, res, next) {
  res.send('查找一个学生');
});

module.exports = router;

```

404错误处理

```js
app.use(function (req, res, next) {
  res.status(404);

  res.send({
    status: 404,
    msg: 'not found'
  });
});

```



500统一数据处理

```js
app.use(function (err, req, res, next) {
  res.status(500);

  res.send({
    status: 500,
    msg: err
  });

});

```



api.http起请求

```http
@url=http://localhost:3000/api

#### 增
POST {{url}}/student HTTP/1.1
Content-Type: application/x-www-form-urlencoded

username=zs&password=123

```



#### 2.5 接口说明书

- 接口根地址

  http://localhost:3000/api

- 作用

  添加一个学生

- 接口地址：

  /student

- 请求方式

  POST： application/x-www-form-urlencded 或 application/json 都可以

- 参数：

  即可以是查询字符串格式，也可以是json格式进行传递

  | 参数名   | 值            | 是否必传 |
  | -------- | ------------- | -------- |
  | username | 字符串：小明  | 是       |
  | password | 字符串：ab123 | 是       |

- 拼接的示例

  http://localhost:3000/api/student

- 响应结果

```json
res.send({
    status: 200, // 状态码
    msg: '增加成功', // 提示消息
    result: 123 // 增加学生的ID
})

```



第三方接口

https://www.juhe.cn/docs/api/id/58



