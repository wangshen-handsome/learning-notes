## 回顾

同步和异步

```
同步：函数名中有sync，数据用变量接收
	let data = fs.readFileSync( path[,options] )
异步：函数名中没有sync，数据在回调函数中
	
错误处理
	同步：try...catch
	异步：回调函数的第一个参数就是错误对象
```



文件操作

```
读取文件：fs.readFileSync( path[,options] )
写入文件：fs.writeFileSync( path,data[,options] )
删除文件：fs.unlinkSync( filepath )
修改文件名称：fs.renameSync( oldpath, newpath )
文件信息：let stat = fs.statSync( path )
```



文件夹操作

```
创建文件夹：fs.mkdirSync( path[,options] )
删除文件夹：fs.rmdirSync( path[,options] )
读取文件夹：fs.readdirSync(path)
```



全局变量

```
__dirname：当前文件所在的绝对地址目录
__filename：当前文件所在的绝对地址目录（包含文件名称）
```





## 一、模块系统

### 1. 模块化介绍

#### 传统开发的问题

随着项目的扩大，然后代码就越来越庞大，如果没有很好的规划，后期维护就非常复杂（甚至就维护不了）。

比如：前端html中有很多特效会依赖文件：如a依赖b，b依赖c

a.js、b.js、c.js、....

```html
<script src="c.js"></scripts>
<script src="b.js"></scripts>
<script src="a.js"></scripts>
```

#### 传统的解决方式

```
我们可以用全局命名、也可以用闭包、也可以面向对象封装。这就造成了程序员随心所欲的封装，没有规矩（规范）
```

我们node中提出了模块的概念。把公共的函数（代码）进行**模块化**封装（那么一定是有要求的【规范】）。



#### 模块化的好处

1、有了规范

2、代码复用高

3、易维护

![](/public/img/thirdStage/five/2-4模块.png)

![](/public/img/thirdStage/five/2-5模块.png)



![](/public/img/thirdStage/five/2-6模块.png)



### 2. Commonjs规范

这个commonjs规范是node中特有的，就是约束node中的模块的。



#### commonjs组成

(1)、如何定义数据和功能函数（即如何定义公共代码）

(2)、外部如何使用定义的数据和功能函数



#### 定义规范的好处

既然是规范，那么就应该是大家默认都应该遵守的，这样就降低了沟通的成本，极大方便了各个模块之间的相互调用，利于团队协作开发。



### 3. 模块的种类

- 自定义模块：（开发者自己定义的模块，每一个js文件都可以称为一个模块）
  - 开发者，使用commonjs规范自己写的js文件，都称为自定义模块
- 内置模块：（由Node.js官方提供，如：fs、path、querystring等）
- 第三方模块：（由第三方开源出来的模块，使用前需要npm工具从npm社区下载）
  - 第三方（可以是个人、也可以是一个小团队、也可以是公司）



### 4. 自定义模块

#### 介绍

开发者，遵守commonjs规范自己写的js文件，都称为自定义模块



#### 使用步骤

1、创建模块文件

2、在模块文件定义公共数据

3、把数据暴露出去

- 用**module.exports**或**exports**进行暴露

4、在某些文件中使用这些数据（引入：**require**）

- 注意：自定义模块引入必须以 **.或..** 开头，这是commonjs规定的







如1：在module_demo文件夹下，创建m1.js模块文件

**使用module.exports暴露**

module.exports它是一个对象，可以给它加属性，也可以给它赋值，暴露出去的是module.exports这个对象。因此有下面两种暴露方式

```js
// 1、定义数据
let uname = '小赵';
let age = 3;
let fn = function () {
  console.log('我是前端开发');
};


// 2、module.exports 暴露数据
// 暴露方式一
module.exports.uname = uname;
module.exports.age = age;
module.exports.fn = fn;

// 暴露方式二
module.exports = {
  uname,
  age,
  fn,
};
```

在其他的页面引入

```js
// 接收一个对象
let obj = require('./module_demo/m1.js');
console.log(obj); // { uname: '小赵', age: 3, fn: [Function: fn] }

// ----------------------
// 解构数据
let { uname, age, fn } = require('./module_demo/m1.js');
console.log(uname, age);
fn();
```



如2：在module_demo文件夹下，创建m2.js模块文件

**使用exports暴露**

```js
// 1、定义数据
let uname = '小赵';
let age = 3;
let fn = function () {
  console.log('我是前端开发');
};

// 2、exports 暴露数据
// exports就是module.exports的引用，但是默认暴露的是module.exports
// 只有这一种方式
exports.uname = uname;
exports.age = age;
exports.fn = fn;

```

```js
// 解构
let { uname, age, fn } = require('./module_demo/m2.js');

console.log(uname, age);
fn();

```



**module.exports和exports的区别**

module.exports和exports它们俩指向同一个对象，但是默认暴露的是module.exports，所以可以对module.exports直接赋一个对象，也可以给它添加属性。exports就只能添加属性，如果直接给exports赋一个对象，则会取消它和module.exports的引用关系。





**原生js模拟module.exports 和 exports的区别**

```js
function fn1() {
    let module = {};
    module.exports = {};
    let exports = module.exports; // module.exports和exports指向同一个对象
    // 给module.exports添加属性
    module.exports.name = 'zs';
    module.exports.age = 3;

    return module.exports;
}

console.log(fn1()); // {name:'zs', age: 3}

// -------------------------
function fn2() {
    let module = {};
    module.exports = {};
    let exports = module.exports; // module.exports和exports指向同一个对象
    // 给exports添加属性
    exports.name = 'zs';
    exports.age = 3;

    return module.exports;
}
console.log(fn2()); // {name:'zs', age: 3}

// ---------------------------
function fn3() {
    let module = {};
    module.exports = {};
    let exports = module.exports; // module.exports和exports指向同一个对象

    // 混合添加属性
    module.exports.name = 'zs';
    exports.age = 3;

    return module.exports;
}
console.log(fn3()); // {name:'zs', age: 3}

// ----------------------
function fn4() {
    let module = {};
    module.exports = {};
    let exports = module.exports; // module.exports和exports指向同一个对象

    // 给module.exports赋一个对象，则会取消和原来exports的引用关系，加给exports的属性不会暴露
    module.exports = {
        name: 'zs',
    };
    exports.age = 3;

    return module.exports;
}
console.log(fn4()); // {name:'zs'}

// ------------------
function fn5() {
    let module = {};
    module.exports = {};
    let exports = module.exports; // module.exports和exports指向同一个对象

    // 给exports赋一个对象，则会取消和module.exports的引用关系，但是默认返回的还是module.exports
    exports = {
        name: 'zs',
        age: 3,
    };

    return module.exports;
}
console.log(fn5()); // {}

```

总结：

- module.exports可以赋对象，也可以改属性。但是一旦赋了对象，则和exports的引用关系就没有了。加给exports的属性也不能暴露出去了。
- exports只能改属性，不能赋对象，因为一赋对象，就切断了和module.exports的引用关系。但是暴露的还是module.exports，所以加给exports的属性不会被暴露出去。

**忠告：这两个以后不要混用。**





#### nodejs模块私有化原理

node的commonjs规范，把我们js模块都进行私有化了（这样不会污染全局变量），每一个js文件中的代码都套了一层匿名函数

```js
// a.js引用b.js文件，其实b.js就是一个模块，则b.js文件的外面，套了一个匿名的函数
// 通过在b.js中打印console.log(arguments.callee.toString())可以看出来
// arguments.callee表示该arguments属于哪个函数

```

![image-20220310111806797](/public/img/thirdStage/five/image-20220310111806797.png)

```js
function (exports, require, module, __filename, __dirname) {
    console.log(arguments.callee.toString());
}

```

```
相当于在模块的外面套了一层函数

通过这个实验，我们知道为什么有require这个方法，为什么可以exports和module.exports暴露，__filename和__dirname是从哪里来的

在模块中写的任何数据，都是属于这个函数的局部变量，外面都是拿不到的，如果你想让外面拿到，只有通过exports或者module.exports暴露

```



面试中关于node底层的可能问





#### 自定义模块练习

```
定义一个名为trim.js文件
暴露一个Trim方法
Trim()  // 去除左右空格
Trim.left()  // 去除左空格
Trim.right()  // 去除右空格

```

trim.js模块

```js
function Trim(str) {
  let re = /^\s+|\s+$/g;
  return str.replace(re, '');
}

Trim.left = function (str) {
  let re = /^\s+/;
  return str.replace(re, '');
};

Trim.right = function (str) {
  let re = /\s+$/;
  return str.replace(re, '');
};

module.exports = Trim;

```

使用模块

```js
let Trim = require('./module_demo/trim.js');
// console.log(Trim);

let str = '   abc   ';
console.log(`(${Trim(str)})`);
console.log(`(${Trim.left(str)})`);
console.log(`(${Trim.right(str)})`);

```









### 5. 内置（核心）模块

fs / url / querystring / path



#### URL( 了解)

作用：解析网址

注意：这个模块比较特殊，不需要引入（但需要new实例化，将地址做为参数传进去），类似于全局变量的用法

![](/public/img/thirdStage/five/url组成.png)



代码示例：

```js
// 作用：解析网址
// 注意：这个模块比较特殊，不需要引入（但需要new实例化，将地址做为参数传进去），类似于全局变量的用法

const myurl = 'http://www.ujiuye.com:8080/a/b/c?name=zs&age=3#ab';
let obj = new URL(myurl);
console.log(obj); // 返回一个对象，这个对象是对路径的解析
console.log(obj.port);

```

![image-20220310135729669](/public/img/thirdStage/five/image-20220310135729669.png)



#### querystring(了解)

作用：操作查询字符串

类似于JSON.parse() 和 JSON.stringify()，只不过JSON是操作json字符串，它是操作查询字符串

什么是查询字符串？："name=zs&age=3"

```js
const qs = require('querystring');

// 操作查询了符串，可以将对象转成查询字符串，也可以将查询字符串转成对象
let obj = {
  name: 'zs',
  age: 3,
  sex: 'man',
};

// 将对象转成查询字符串
let str = qs.stringify(obj);
console.log(str); // 'name=zs&age=3&sex=man'

// 将查询字符串转成对象
let o = qs.parse(str);
console.log(o); // { name: 'zs', age: '3', sex: 'man' }

```



#### path( 掌握 )

作用：操作路径（**注意，以后只要用到fs模块，就用path拼接绝对路径**）

- parse：解析路径为对象
- basename：获取路径中的文件名
- extname：获取路径中文件的后缀名
- join：将路径拼接为绝对地址



```js
// 路径
const filepath = 'a/b/c/d/a.html'

```



- path.parse(路径)  解析出一个对象，包含路径、完整文件名、后缀名、不包含后缀的文件名等

```js
// 1、解析路径
// parse
let o = path.parse(filepath);
console.log(o); // { root: '', dir: 'a/b/c/d', base: 'a.html', ext: '.html', name: 'a' }

```

- path.basename(路径)（返回完整文件名）/ path.extname(路径)（返回后缀名）

```js
// 2、basename返回完整文件名   extname返回后缀名

console.log(path.basename(filepath)); // 完整的文件名称
console.log(path.extname(filepath)); // 文件扩展名称

```

- path.join( 路径的参数列表, ... ) 

  作用：将参数列表拼成一个路径，正确拼接路径后，还能做到路径的统一（使用频率最多）

```js
// 拼接文件路径(最常用，只要用到fs，就要用到path.join())
let ab = path.join(__dirname, './module_demo/m1.js');
console.log(ab);

// let b = __dirname + '\\module_demo\\m1.js'; // 原来的手动拼接就不用了
// console.log(b);

```



### 6. 第三方模块

第三方模块又称为**包**

#### 包的使用方法

假如你的业务中需要去除字符串左右空格或处理时间

这样就没有必要重复去造轮子，而很多现成的公共代码已经封装好了（trim）（time-stamp）（它们都是使用commonjs规范封装的）



**使用步骤**

1、建立你自己的业务代码（创建一个项目文件夹）

2、在你业务代码下（项目文件夹下）打开cmd，下载第三方模块（包）

```sh
语法：
npm install 包名

如：
npm install trim

```

​	![image-20220310143838571](/public/img/thirdStage/five/image-20220310143838571.png)

下载完成之后，你的项目根目录下会有一个`node_modules`文件夹和`package-lock.json和package.json`文件

3、在自己的业务文件中引入第三方模块（包）

```js
let t = require( 第三方模块名称 )

```

4、根据业务写代码 





代码示例：（具体使用方法，要查看npm上的文档）

```js
let trim = require('trim'); // 引入trim

let str = '   小飞   ';
console.log(`(${trim(str)})`);
console.log(`(${trim.left(str)})`);
console.log(`(${trim.right(str)})`);

```



## 二、npm与包

### 1. 包的概念

**包：**Node.js中的第三方模块又叫做包。就像电脑和计算机指的是同一个事物，第三方模块和包指的是同一个概念，只不过叫法不同。

**npm：**主要内容分为两块

- (1)、包管理工具
- (2)、npm社区



#### 包来源

包是由第三方个人或团队开发出来的，免费供给所有开发者使用。

npm社区：https://www.npmjs.com      只有英文的网站



#### 包的特点

- 在Node.js中，如果只用内置模块或者开发者自己定义的模块开发，效率会很低。所以就有了第三方包
- 包是基于内置模块( 按照commonjs规范 ) 封装出来的，提供了更高级、更方便的API，极大的提高了开发效率
- 包和内置模块之间的关系，类似于jQuery和原生js之间的关系
- 要想称为一个包除了遵守模块化规范以外，还要遵守包的一些规范，如：说明文档，协议说明等

![image-20210511160356902](/public/img/thirdStage/five/image-20210511160356902.png)





### 2. 包管理工具 npm

#### 介绍

包管理工具指的是安装node环境后，自动安装了的npm工具。全称（Node Package Manager），简称 npm 包管理工具。

查看安装的npm的版本：  `npm  -v`

![image-20220516202757896](/public/img/thirdStage/five/image-20220516202757896.png)



#### 包版本号的介绍

第1位数字：表示大版本号，一般当软件整体重写，或出现不向后兼容的改变时，增加此位，此位是0时表示软件还在开发阶段。

第2位数字：表示功能更新，出现新功能时增加此位

第3位数字：表示小修改，如修复bug，只要有修改就增加此位



#### 第一次安装包后的说明

- 初次安装包完成以后，在项目文件夹下多一个**node_modules**的文件夹和**package-lock.json**的配置文件
- **node_modules**文件夹用来存放所有已安装到项目中的**第三方包**。**require()**导入第三方包时，就是从这个目录中查找并加载
- **package-lock.json**配置文件用来记录**node_modules**目录下的每一个包的下载信息，例如包的名字、**版本号**、下载地址等
- 开发者不要手动修改node_modules或package-lock.json文件中的任何代码，npm包管理工具会自动维护它们





### 3.包的用法-看手册

以trim为例：https://www.npmjs.com/package/trim

![image-20210511162109122](/public/img/thirdStage/five/image-20210511162109122.png)



### 4. npm 常用命令

#### init

作用：项目初始化

```sh
npm init 			一问一答的形式生成package.json文件
npm init -y			默认配置，直接生成package.json文件（推荐）

```





#### install/i

作用：安装包

```sh
npm install/i 包名
	默认下载最新的版本
	
npm install/i 包名@版本号
	下载特定的版本包
	npm install trim@1.0.0
	注意：只能保留一个版本
	
npm install/i 包名 -D/--save-dev    安装到开发依赖（devDependencies）
npm install/i 包名 -S/--save		  安装到项目依赖（dependencies），啥也不加，默认也是安装到项目依赖

npm install/i 包名1 包名2 ... 		 一次安装多个包
npm install/i   					根据package.json中的记录安装包

```





#### uninstall/r

作用：删除包，会把node_modules下的包删除掉，同时package-lock.json中的记录也会删除

```sh
npm uninstall/r 包名

```





### 5. npm 淘宝镜像

![2-10淘宝镜像](/public/img/thirdStage/five/2-10淘宝镜像.png)



#### 第一种（不推荐）

全局安装cnpm工具（cnpm使用同npm一模一样 ）

```sh
npm install -g cnpm --registry=https://registry.npm.taobao.org

```

下载的cnpm，下载在以下目录 

![](/public/img/thirdStage/five/QQ截图20210518232759.jpg)

注意：

C:\Users\ibm\AppData\Roaming\npm  ：此目录下是npm下载的**公共包**

这个目录下的所有的 .cmd文件都是可执行程序，需要在命令行执行。





#### 第二种（推荐）

配置npm命令的源

在任意目录下只执行一遍即可

```sh
npm config set registry https://registry.npm.taobao.org

```

**在c/user/用户名**目录下，就会有一个`.npmrc`文件，它就记录着淘宝镜像地址



### 6.package.json

说明：有无package.json和package-lock.json都不影响程序正常执行。但不能没有node_modules，node_modules是存放我们下载的包的。



#### package.json简介

按照规范：在项目根目录中，必须提供一个叫做 package.json 的包管理配置文件。

可以简称为**项目管家** 。是记录你的npm下载的各个包。



#### 开发的问题

![](/public/img/thirdStage/five/团队开发的问题.png)



#### 手动创建package.json

```
1.创建一个package.json文件
	注意：此文件不能为空，且必须是json字符串  {}
2.在项目当中下载你需要的包，比如：trim和time-stamp
	npm工具下载包完成以后，会记录在package.json中的dependencies中
3.当你的项目把node_modules删除也没有关系，但是千万别删package.json文件
4.当删除了node_modules之后，npm install 时会又根据package.json中的记录，安装你的包

```

**所以再传给别人项目的时候，是不给node_modules的**

**团队开发中是如何给别人代码的？ 通过git 。 所以应该使用.gitignore把 node_modues 给忽略掉。**



package.json完整属性如下表

| 属性名                          | 说明                     |
| ------------------------------- | ------------------------ |
| name                            | 包（项目）的名称         |
| version                         | 包（项目）的版本号       |
| description                     | 包（项目）的描述         |
| main                            | 包（项目）入口文件       |
| scripts(到项目中可以讲到)       | 定义快捷脚本命令         |
| keywords                        | 项目关键词               |
| author                          | 作者                     |
| license                         | 协议                     |
| dependencies                    | 包（项目）依赖的模块     |
| devDependencies ( webpack再说 ) | 包（项目）开发依赖的模块 |



#### 重要属性

**dependencies**   项目依赖

```sh
以下安装方式，会自动的记录到dependencies属性中
npm i 包名
npm i 包名 -S
npm i 包名 --save

```

**devDependencies**   开发依赖

```sh
以下安装方式，会自动的记录到devDependencies属性中
npm i 包名 -D
npm i 包名 --save-dev

```



#### 使用命令创建package.json文件

```sh
npm init  	:  一问一答的形式（不推荐）

npm init -y :  默认配置直接生成package.json文件
			   注意事项：文件夹不要有中文，不要使用第三方模块名称和内置模块的名称定义项目文件夹名

```



#### 以后的工作流程(重点)

```
1、创建项目文件夹（不要有中文）
2、npm init -y   (进入到项目根目录，初始化项目，生成项目管家)
3、npm i 包名    (安装使用的包)
4、写你的业务逻辑

```













### 7.包的分类

#### 1、项目包

被安装到项目的node_modules文件夹的包，都是项目包。

项目包又分为两类：

1）开发依赖包：被记录到devDependencies节点中的包，只在开发期间会用到（只是在写代码的时候用）

2）项目依赖包：被记录到dependencies节点中的包，在开发期间和项目上线之后都会用到。

总结：我们的包会很多很多，只记录你自己下载的包即可（但是也不用刻意记，因为常用的就那么几个，而且package.json帮我们记录了）







#### 2、全局包

全局包又称为**工具包**，使用的时候同npm一样，也是在cmd命令行中使用的，并不是在代码文件中引入的，是当作工具使用的。

安装命令：

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

内置模块是由Node.js官方提供的模块，内置模块的加载优先级最高。

例如，**require('fs') ** 始终返回内置的fs模块，即使在node_modules目录下有名字相同的包也叫做fs，但它也只会引入核心的内置fs模块

所以第三方模块和自定义模块不要起内置模块的名称

```js
// let fs = require('fs'); // 引入内置的模块
// console.log(fs);


// 自己写的放在node_modules中，这样虽然可以引到，但不要这样做
// 引入自己的，但是不要这样做（自定义模块也不要放在node_modules中）
let fs = require('./node_modules/fs/index.js');
console.log(fs);

```





#### 2、自定义模块加载机制

1）使用require()加载自定义模块时，必须指定以**./或../**开头的路径标识符。

2）如果没有指定**./或../**这样的路径标识符，则Node.js会把它当作**内置模块**或**第三方模**块进行加载。

3）自定义模块不要放在node_modules中。

4）在使用require()导入自定义模块时，如果省略了文件的扩展名，则Node.js会按顺序分别尝试加载以下的文件：

​		(1)文件名.js扩展名进行加载

​		(2)文件名.json扩展名进行加载

​		(3)如果以上两个都没有，则加载失败，终端报错  **Error:Cannot find module 'xxx'**





#### 3、第三方模块加载机制

1）如果require()的模块标识符不是内置模块，即没有以‘./’或‘../’开头，则Node.js会从当前模块的父目录开始，尝试从当前文件夹的/node_modules文件夹中加载第三方模块。

2）如果没有找到对应的第三方模块，则移动到再上一层父目录中，进行加载，直到当前项目文件的盘符根目录。

**总结**：一定要把第三方模块下载到项目根目录下的node_modules中，且项目中只有根目录下有node_modules目录





#### 4、package.json中的main属性

main属性，可以指定模块加载的主入口文件，当引入模块时用文件夹名结尾时生效。有三种加载方式：

1）根据目录下的package.json的文件，寻找main属性指定的文件名，作为require()加载的入口。

2）如果目录里没有package.json文件，或者main入口不存在，则Node.js将会加载目录下的index.js文件（所以目录中的默认入口为index.js）

3）如果以上两步都加载失败，则Node.js会在终端打印错误消息，报告模块缺失：Error: Cannot find module 'xxx'

**总结：main属性的作用，指定入口文件，如果没有指定或指定的入口文件不存在，则找index.js文件，如果也没有，则报错**



