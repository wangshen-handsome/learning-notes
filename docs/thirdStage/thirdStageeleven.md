## 一、Node操作Mysql

### 介绍和意义

学完了sql语句，这是基本的，然后做为后端工程师要通过后端语言和数据库联系起来（写功能）。后端写了什么功能用户才能使用什么功能。

### 1. 操作流程

![4-12node操作mysql](/public/img/thirdStage/eleven/4-12node操作mysql.png)

#### 1.1 下载mysql模块

```sh
npm i mysql
```

#### 1.2 在后端js文件中引入mysql

```js
const mysql = require('mysql')
```

#### 1.3 创建mysql数据库的配置连接

```js
let connectObj = mysql.createConnection({
    host:'主机名',
    user:'用户名',
    password:'密码',
    port: 端口号,
    database:'要操作哪个数据库'
});
```

#### 1.4 使用connectObj.query

使用query方法执行sql语句，并返回结果

```js
let sqlStr = `SELECT * FROM student`;
connectObj.query(sqlStr, (err,result)=>{
	err : 错误信息
    result: 结果
})
```



**完整操作流程**

```js
// 1、安装mysql    npm i mysql

// 2、引入
const mysql = require('mysql');

// 3、创建mysql数据库的配置连接
let connectObj = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    port: 3306, // 如果是默认的3306，可以不写
    database: 'zuoye'
});

// 4、使用connectObj.query(sql语句, (err, result)=>{})
//      sql语句最好在navicat里面测试好
//      回调函数有两个参数，err即错误对象，result即结果
//      如果sql语句写错了或者数据库连接配置错了，err才有值，否则err为null

let sqlStr = `SELECT * FROM xsb`;
connectObj.query(sqlStr, (err, result) => {
    console.log(err, '错误对象');
    console.log(result, '结果');
});
```





### 2、node操作mysql的增删改查

#### 1、删除

![image-20210518110607416](/public/img/thirdStage/eleven/image-20210518110607416.png)

```
OkPacket {
  fieldCount: 0,   
  affectedRows: 1, // 受影响的行 
  insertId: 0,     
  serverStatus: 34,
  warningCount: 0, 
  message: '',     
  protocol41: true,
  changedRows: 0   
}
```

```js
let sql = `DELETE FROM xsb WHERE xm='钱小平'`;
connectObj.query(sql, (err, result) => {
  // console.log(err); // 错误对象，如果连接信息错误，或者sql错误，错误对象才有值
  // console.log(result); // 返回的信息

  if (err) {
    console.log('查询错误');
    return;
  }
  // 如果有受影响的行，则证明删除成功
  if (result.affectedRows) {
    console.log('删除成功');
  }
});
```



#### 2、更新

```
OkPacket {
  fieldCount: 0,
  affectedRows: 1, // 受影响的行
  insertId: 0,
  serverStatus: 34,
  warningCount: 0,
  message: '(Rows matched: 1  Changed: 1  Warnings: 0',
  protocol41: true,
  changedRows: 1
}
```

```js
let sql = `UPDATE xsb SET xm='周扒皮',sex='男' WHERE xh='9521103'`;
connectObj.query(sql, (err, result) => {
  // console.log(err); // 错误对象，如果连接信息错误，或者sql错误，错误对象才有值
  // console.log(result); // 返回的信息

  if (err) {
    console.log('查询错误');
    return;
  }
  // 如果有受影响的行，则证明更新成功
  if (result.affectedRows) {
    console.log('更新成功');
  }
});


```



#### 3、添加

```js
OkPacket {
  fieldCount: 0,   
  affectedRows: 1, 
  insertId: 9,     // 新增的id
  serverStatus: 2, 
  warningCount: 0, 
  message: '',     
  protocol41: true,
  changedRows: 0   
}

```

返回的值里面，有一个insertId，代表新添加的数据的id

![image-20210518111758004](/public/img/thirdStage/eleven/image-20210518111758004.png)

```js
let sql = `INSERT INTO xsb (xh,xm,sex,age,szx) VALUES ('123','谢广坤','男',33,'哈佛')`;
connectObj.query(sql, (err, result) => {
  // console.log(err); // 错误对象，如果连接信息错误，或者sql错误，错误对象才有值
  // console.log(result); // 返回的信息

  if (err) {
    console.log('查询错误');
    return;
  }
  // 如果有受影响的行，则证明新增成功
  if (result.affectedRows) {
    console.log('新增成功');
  }
});

```





#### 4、查找

注意：

- 查的结果以数组形式返回（无论什么时候，哪怕没有查到数据也返回一个数组）
- 而其它的几个都返回一个对象，对象中的affectedRows代表受影响的行

```js
let sql = `SELECT xh,xm FROM xsb WHERE id=20`;
connectObj.query(sql, (err, result) => {
  // console.log(err); // 错误对象，如果连接信息错误，或者sql错误，错误对象才有值
  // console.log(result); // 返回的信息

  if (err) {
    console.log('查询错误');
    return;
  }
  // 查找返回一个数组，没有值数组为空
  console.log(result);
});

```





### 3、node+express脚手架+mysql+前端表单

实现原理：前端通过表单实现注册，后端将注册信息写入到数据库中（这里只用实现注册即可）

1、安装express脚手架

```
express --view=ejs 项目名

```

2、在 package.json中，改node 为 nodemon

```
"scripts": {
    "start": "nodemon ./bin/www"
  },

```

3、启动项目

4、重置404和500

5、清空public和views，删除routes下的  user.js，注意，要改app.js中的模块化引入，否则报错









前端register.ejs文件

```html
<form action="/register" method="post">
    <p>
        <input type="text" name="username" placeholder="请输入用户名" />
    </p>
    <p>
        <input type="text" name="password" placeholder="请输入密码" />
    </p>
    <p>
        <button>注册</button>
    </p>
</form>

```



后端routes下的index.js文件

```js
var express = require('express');
var router = express.Router();

const mysql = require('mysql'); // 引入mysql
let connectObj = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 3306,
  database: 'xiaou2',
});

router.get('/', function (req, res, next) {
  res.send('首页');
});

// 渲染注册页面路由
router.get('/register', function (req, res, next) {
  res.render('register');
});

// 注册功能路由
router.post('/register', function (req, res, next) {
  let { username, password } = req.body; // 获取用户输入

  // 1、必要的判断
  if (!username || !password) {
    next('用户名和密码必须填写');
    return;
  }

  // 2、查找数据库是否有这个用户
  let sql1 = `SELECT * FROM user WHERE username = '${username}'`;
  connectObj.query(sql1, (err, result) => {
    if (err) {
      next('服务器内部错误');
      return;
    }

    // 读取数据，不论有不有数据，都返回一个数组
    if (result.length) {
      next('用户名已占用');
      return;
    }

    // 3、向数据库添加数据
    let sql2 = `INSERT INTO user (username, password) values ('${username}', '${password}')`;
    connectObj.query(sql2, (err, result) => {
      if (err) {
        next('服务器内部错误');
        return;
      }

      if (result.affectedRows) {
        res.send({
          code: 200,
          msg: '注册成功',
        });
      }
    });
  });
});

module.exports = router;

```







## 二、promise与异步(重点)

### 简介

这不是Node特有的，这是ES6里面语法，在前端和后端都可以使用。

作用：Promise是**异步编程**的一种解决方案，比传统的解决方案（回调函数和事件）更合理。ES6将其写进了语言标准，统一了用法。



已见的回调函数形式有哪些？：Array.prototype上的一些方法（ forEach、every、.... ）、事件函数都是回调，Node中很多都是回调形式的（不带sync基本上都是回调形式），这些回调函数的都是属于异步编程 。

注意：**异步编程**和**回调编程**其实是一个意思 （层层嵌套，这是我们开发者不习惯的）。Promise把回调形式去除，那么进而变成同步的形式。

简单说Promise就是一个容器，里面保存着某个未来才会结束的事件的结果（通常是一个异步操作）。Promise提供统一的API，各种异步操作都可以用同样的方法进行处理。



### 1. 同步

一行一行代码执行，会阻塞代码，函数中的结果我们可以用return返回( 即函数调用后可以用一个变量接收 )

代码演示：

- (1)使用alert介绍同步阻塞
- (2)使用函数计算两个数的和调用后用变量接收

```js
console.log(1);
alert(123);
console.log(2);

function fn(a, b) {
    return a + b;
}
let num = fn(3, 5)
console.log(num);

console.log('我是最后的代码');

```



### 2. 异步

有些业务，在底层必须要使用异步回调形式才能去处理。

**特点：不会阻塞代码执行，结果不能通过return返回出来，而是必须用回调函数接收结果。**

**异步的业务和同步不一样（ 同步代码是瞬间执行完的 ），而异步的是要有条件的（这个条件满足了才去做其它事情，所以就造成了有一个等待时间的过程）**

常见的应用场景：

(1)网络请求

(2)读取文件

(3)js中的事件函数就是非常典型的异步表现形式



代码演示：使用定时器模拟异步感受异步编程的特点。

```js
// 两秒钟以后，取得参数的和
function fn(a, b) {
    console.log(1);
    setTimeout(function () {
        return a + b;
    }, 2000);
    console.log(2);
}
let num = fn(4, 6);
console.log(num);

```

而解决方案，就是下面要介绍的**回调函数**

```js
// 异步，用回调函数解决
// 回调函数：函数B传入到函数fn中，做为fn的参数，在fn里面满足某个条件的情况下，被调用，这个B函数就是回调函数
function fn(a, b, callback) {
    console.log(1);

    setTimeout(function () {
        let num = a + b;
        callback(num);
    }, 2000);

    console.log(2);
}

fn(4, 6, function B(res) {
    console.log(res);
});

```

![image-20220525141151863](/public/img/thirdStage/eleven/image-20220525141151863.png)





### 3. 回调函数

#### 3.1 简介

在使用JavaScript时，为了实现某些逻辑经常会写出层层嵌套的回调函数，如果嵌套过多，会极大影响代码可读性和逻辑，这种情况被称为**回调地狱**。而往往一些异步操作需要使用回调函数拿到结果

![1-2回调函数](/public/img/thirdStage/eleven/1-2回调函数.png)



#### 3.2 表现形式

**回调函数**：有函数A，有函数B，函数B当作实参传递至函数A中，那么函数B是函数A的回调函数，而函数B是在函数A中满足某个条件下执行的。

```js
// 我想着2秒钟以后，得出2+4的值，而后续要乘以10
function A(callback) {
    setTimeout(function () {
        let sum = 2 + 4
        callback(sum);
    }, 2000)
}


function B(result) {
    let r = result * 10
    console.log(r);
}

A(B)

```

#### 3.3 优化回调函数

###### 优化前

![1-3回调函数](/public/img/thirdStage/eleven/1-3回调函数.png)

###### 优化后

![1-4回调函数](/public/img/thirdStage/eleven/1-4回调函数.png)





### 4.promise

学习promise，是为了解决异步编程，之前我们用回调解决异步，但是不太好用，会层层嵌套，因此要学promise，promise会将异步变成同步。



#### 4.1. promise简介

​		Promise 是异步编程的一种解决方案，比传统的解决方案（回调函数和事件）更合理。ES6 将其写进了语言标准，统一了用法。

​		简单说Promise就是一个**容器**，里面保存着某个未来才会结束的事件的结果（通常是一个异步操作）。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

​		作用：Promise代表了未来某个将要发生的事件(通常是一个异步操作)， 有了Promise对象，可以将异步操作以同步的流程表达出来，避免了层层嵌套的回调函数。



#### 4.2 语法

Promise它是一个构造函数，要用new调用，它接收一个函数做为参数，而这个函数是同步，它会立即执行。

这个函数有两个参数，分别是resolve（解决，即成功）和reject（拒绝，即失败），它俩其实代表着实例上then和catch这两个方法的函数参数，即成功要执行的和失败要执行的函数。

实例上的方法then和catch的函数参数，分别代表resolve和reject要执行的函数体。resolve和reject执行时并可以传参给then和catch上的函数

注意：如果是同步业务，就不需要Promise处理

```js
new Promise( (resolve, reject)=>{
    //  resolve()
    //  reject()
} )

```

promise基本语法

```js
// console.log(Promise); // 它是一个函数，它要new调用，
// resolve: 成功的
// reject: 失败的

let pro = new Promise(function (resolve, reject) {
    console.log(1);

    setTimeout(function () {
        // resolve('我是成功的时候执行'); // 成功的时候调用
        reject('这是失败要执行的'); // 失败的时候调用
    }, 2000);

    console.log(2);
});

// console.log(pro); // promise实例，它上面有then和catch两个方法，它们调用的时候，分别执行resolve和reject

// 成功的时候执行
pro.then(function (result) {
    console.log(result);
});
// 失败的时候执行
pro.catch(function (err) {
    console.log(err);
});

```

![image-20220525144047600](/public/img/thirdStage/eleven/image-20220525144047600.png)

**案例：**

我想着2秒钟以后，得到1个员工的薪金，如果得到了，加10000，如果得不到，告诉我一声

```js
// 我想着2秒钟以后，得到1个员工的薪金，如果得到了，加10000，如果得不到，告诉我一声
// 用一个随机数，如果大于0.5，就得到了，否则就没有得到

let pro = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let num = Math.random();
        if (num > 0.5) {
            resolve(29999); // 成功了
        } else {
            reject('失败了，失败的原因是：' + num);
        }
    }, 2000);
});

pro.then(function (result) {
    console.log('得到了你的薪金信息，然后加上一万是：' + (result + 10000));
});
pro.catch(function (err) {
    console.log(err);
});

```

总结：new Promise接收一个函数，这个函数有两个参数，分别代表成功和失败，new Promise 调用之后，会返回一个对象，这个对象下面有then和catch两个方法，分别代表成功执行和失败执行



#### 4.2 promise状态



![](/public/img/thirdStage/eleven/1-4promise状态转换.jpg)



```js
let pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(33);
        reject('失败了');
    }, 3000);
})


// Promise: 许诺的意思，许诺要做A函数中的事情，Promise是个容器
// 所以无论许诺什么事情一定是要有一个结果的（ 满足的【成功的】、不满足的【失败的】 ）
// 立马许诺：也就是new Promise的时候，最开始它的状态是个pending状态，接着状态要么成功，要么失败
// pending => 成功的 fulfilled（满足的）
// pending => 失败的 rejected（拒绝）

/*
    Promise函数可以传递一个函数A，而函数A可以定义两个形参a,b，一般写成resolve和reject
    a()  => pending 状态=> 成功的 fulfilled   通常写成(resolve)  解决
    b()  => pending 状态=> 失败的 rejected    通常写成(reject)   拒绝
*/

console.log(pro); // 查看pro的[[PromiseState]]和[[PromiseResult]]

```

**自己话总结**：Promise接收一个函数，这个函数中执行的是同步代码。它是一个承诺，承诺将来要发生的事件，在将来的事件还没有到来的时候，它的状态是pending。当将来的事情到来的时候，它有可能成功变为fulfilled，也有可能失败变为rejected。成功的话resolve调用并可传参，失败的话reject调用并可传参。





### 5. promise对象方法

#### then

语法：then可以接收两个函数作为参数，分别代表成功和失败要执行的函数。但是通常只让then只接收一个参数（即成功时调用的函数）

```js
promise对象.then( (resolve传递过来的正确结果)=>{
   // 代码块
}, (reject传递过来的错误结果)=>{
    // 代码块
} )

```

代码案例：

```js
// 写法一（then接收两个参数）：较少用
pro.then(
    // 成功执行
    function (result) {
        console.log(result);
    },
    // 失败执行
    function (err) {
        console.log(err);
    }
);

```

#### catch

语法：

捕获异常的，代替上面then的第2个错误回调的。

```js
promise对象.catch( (异常)=>{
   // 代码块
} )

```

代码案例：

```js
// 写法二：then和catch分别接收一个函数
pro.then(function (result) {
    console.log(result);
});
pro.catch(function (err) {
    console.log(err);
});

// 写法三：链式写法
pro
    .then(function (result) {
        console.log(result);
    })
    .catch(function (err) {
        console.log(err);
    });

```



### 6.链式调用( 了解 )

jquery的使用就是典型的链式语法 （只要返回一个jquery对象就可以一直 **点** 去使用jquery对象上的方法）

```
jq对象.css().html().animate()

```



promise对象也是链式语法，只要返回一个promise对象那么就可以一直 点 下去 使用then/catch



then调用的函数，会返回一个新的promise对象，如果return返回了值，则会传递到下一次的then调用的函数中做为参数

代码案例：

```js
let pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve('成功了111');
        } else {
            reject('失败了222');
        }
    }, 3000);
});

// then调用的函数，会返回一个新的promise对象，如果return返回了值，则会传递到下一次的then调用的函数中做为参数

// let pro2 = pro.then();
// console.log(pro2); // then调用的函数，会返回一个新的promise对象

pro
    .then(function (result) {
        return result + '我成功了，我再加一点新的'; // return的值会返回到下一个then中做为参数
    })
    .then(function (result) {
        console.log(result);
    })
    .catch(function (err) {
        // 上面两个then，任何一个失败，都会走这里
        console.log(err);
    });

```





### 7.Promise.all()

作用：该方法用于将多个 Promise 实例，包装成一个新的 Promise 实例

比如：我们访问淘宝详情页面或者访问其它页面，而这个页面往往是有很多很多请求的（只有所有的都拿到结果才代表最终数据拿到了）

![](/public/img/thirdStage/eleven/promise.all应用说明.png)



语法：Promise.all它接收一个数组为参数，而数组中的项是promise实例

```js
Promise.all( [ pro1,pro2,... ] )

```

代码案例：

```js
let pro1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('11');
    }, 500);
});

let pro2 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('22');
        // reject('失败了');
    }, 3000);
});

let pro3 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('33');
    }, 4000);
});

let pro = Promise.all([pro1, pro2, pro3]);
pro
    .then((result) => {
        // result是每个promise实例成功的值组成的一个数组
        console.log(result); // ['11', '22', '33']
    })
    .catch((err) => {
        console.log(err);
    });

```

说了这么多promise，但是它在then使用时，还是有回调函数，所以我们就要用async函数。不然promise就没有意义





## 三、async函数

ES2017 标准引入了 async 函数，它是一个关键字，被async修饰的函数称为async函数。

作用：async也是处理异步的，它是对Promise的一种扩展，让异步更加方便，彻底解决回调嵌套

再遇到回调，那么最终的解决方案： async函数+Promise对象



### 1、async函数基本用法

注意：async函数返回的也是一个promise对象

async是一关键字，可以在函数前面进行修饰（如果你的业务是同步代码，就没有必要加async关键字）

语法：

**async往往需要await。await是等待的意思，并且await只能出现在async函数中，await的后面跟一个promise对象，await会等promise异步代码执行完成（返回一个结果用变量接收）**

```js
// 一般写法
async function name( ){
	let res1 = await promise异步1
	let res2 = await promise异步2
    ...
}

// 箭头函数写法
async ()=>{
   let res1 = await promise异步1
   let res2 = await promise异步2
   ...
}
   
// 在对象里面的写法
{
    async fn(){
          let res1 = await promise异步1
  		  let res2 = await promise异步2
   		  ...
    }
}
   
// 点击函数写法
btn.onclick = async ()=>{
      let res1 = await promise异步1
  	  let res2 = await promise异步2
   	  ...
}

```



代码案例：

有两个定时器，分别3秒和2秒后返回一个结果，需要将这两个结果计算和

```js
// 有两个定时器，分别3秒和2秒后返回一个结果，需要将这两个结果计算和

function fn1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(33);
        }, 2000);
    });
}

function fn2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(44);
        }, 3000);
    });
}

async function auto() {
    console.log(1);

    // await必须出现在async里面，await后面是promise对象
    let res1 = await fn1();
    let res2 = await fn2();
    console.log(res1, res2);

    console.log(2);
}
auto();

```



### 2、回调函数方法改成promise+async方法

```js
// // 回调函数，2秒以后求两个参数的和
function fn(a, b, callback) {
    setTimeout(function () {
        callback(a + b);
    }, 2000);
}

fn(3, 4, function (result) {
    console.log(result);
});

// -------------------------
// promise+async+await
function fn(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(a + b);
        }, 2000);
    });
}

async function auto() {
    let res1 = await fn(3, 4);
    let res2 = await fn(4, 2);
    let res3 = await fn(7, 8);
    let res4 = await fn(2, 6);
    console.log(res1, res2, res3, res4);
    console.log(res1 + res2 + res3 + res4);
}
auto();

```







## 四、模块化封装数据库

**只要碰到回调函数（Array方法忽略），就可以用Promise进行封装**

(1)新建db.js

(2)使用module.exports暴露方法

```js
const mysql = require('mysql');

const connObj = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'stu'
});

// 函数接收sql字符串，返回promise对象
function Query(sqlStr = '') {
    return new Promise((resolve, reject) => {
        connObj.query(sqlStr, (err, result) => {
            if (!err) {
                // 成功了，数组就有两项，结果在第二项
                resolve([null, result]);
            } else {
                // 失败了，数组只有一项，失败的消息在第一项
                resolve([err]);
            }
        });
    })
}

module.exports = Query;

// -------------------------------------------

// 以下就是具体的demo小示例，在你其它业务代码中，就应该像这样写
let sql = 'SELECT * FROM student WHERE id=1'
async function fn(){
    let r = await Query( sql )
    console.log( r, '我得到了结果' );
}
fn();

```



### 项目中能使用的案例

db.js文件

```js
const mysql = require('mysql');

const connectObj = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    port: '3306', // 端口号，默认的3306可以不写
    database: 'test2' // 数据库名称
})

function Query(sql = '') {
    return new Promise((resolve, reject) => {
        connectObj.query(sql, (err, result) => {
            if (!err) {
                resolve([null, result]);
            } else {
                resolve([err]);
            }
        });
    })
}

module.exports = Query;

```

app.js文件中使用

```js
const Query = require('./db');

// 查询学生表
let str = `SELECT * FROM student`;

async function fn() {
    let result = await Query(str);
    console.log(result); // 这里返回的就是一个数组，如果第一项有值，则是错误了，如果第一项没有值，则到第二项中找数据
}
fn();

```

