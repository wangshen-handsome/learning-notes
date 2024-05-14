---

layout: thirdStagefour

title: 三阶段 | 第四天

---

## 一、Node简介（了解）

Node.js是一个能够在服务器端运行JavaScript的开放源代码、跨平台的JavaScript**运行环境**。

Node.js 采用 Google 开发的 V8 引擎运行 js 代码，使用**事件驱动**、**非阻塞**和**异步I/O**模型等技术来提高性能，可优化应用程序的传输量和规模。

Node.js主要用于编写像Web服务器一样的网络应用

官网地址：https://nodejs.org/en/

中文官网：http://nodejs.cn/



### 1. 什么是Node.js

它是一个**环境** 。比如浏览器就是一个环境，它可以解析（html、css、js）

而Node就是ECMAScript的环境（它对es6支持非常友好）



### 2. 为什么学习Node.js

浏览器是前端工程师特有的环境，而node它是后端环境。而后端有哪些语言（php、java、python、C#....）

也就是说js的脚伸到后端了。比如：java能做的事情我们node也能做。

前端干不了的事情后端来干（比如我们用node）。因为语法不用学了，已经学完了，降低成本。

比如前端干不了以下事情 ： 数据库操作、删除文件、动态网站。

通过学习Node.js**深刻认识前后端交互**，而且后面学习的Vue、React它们环境都依赖Node。



### 3. Node.js简史

它是2009年发布-2022年 ，经过这几年发展，Node也已经很成熟了。



### 4. Node.js的特点

- 单线程

  PHP、java这些都是多线程 。而node是单线程

  `什么是多线程？什么是单线程？`

- 非阻塞I/O

  I/O：是文件读写操作，指令操作。非阻塞：程序顺利往下执行

- 事件驱动

  程序怎么知道该执行了呢？就是由事件驱动（事件触发）



### 5. Node与JavaScript之间的区别

JavaScript：ECMAScript、BOM、DOM

Node: 没有**DOM和BOM**，另外有自己特有的API： 如文件系统等api



### 6. Node的应用领域

- API接口
- 动态网站开发
- 即时通信
- 有一些第三方团队会基于Node开发一些前端工具





## 二、Node安装

### 1.下载与安装

下载地址1：http://nodejs.cn/download/（V14只支持win10及以上）

下载地址2：https://npm.taobao.org/mirrors/node/   v12

​					  https://npm.taobao.org/mirrors/node/v12.6.0/

​					node-v12.6.0-x64.msi    （win 64位）

​					node-v12.6.0-x86.msi    （win 32位）

​					node-v12.6.0.pkg 	       （苹果）



安装：一路next，可以换路径，但尽量不要有中文。

验证node是否安装成功：打开cmd（命令提示符）： win+r->输入cmd->回车。输入:  node -v



### 2. 第一个nodejs程序

​	1、先创建一个js文件。编写代码

​	2、使用node环境运行js文件（先输入node空格，再把文件拖到cmd中，回车，这个小黑窗口就相当于浏览器的控制台）







## 三、命令行与cmd

### cmd和命令介绍

**CMD**一般指命令提示符。

**命令**就是一条一条的指令 。当用户发出指令那么计算机就会根据指令完成某些操作。

为什么还要学习命令？能很好的提升我们的开发效率，降低内存的使用空间。



### 打开cmd的方式

第1种：开始->输入cmd->回车

第2种：win+r->输入cmd->回车

第3种：在任意目录下的地址栏输入 cmd -> 回车

第4种：在任意目录下，按shift+右键，在菜单栏中有 “在此处打开命令窗口”

**重点第三种 和 第四种**



### 常用命令（了解）

1、切换目录

```sh
cd 目录名称    : change directory(目录)
cd ..         : 切换到上级
d:			  : 直接换到D盘
```

2、查看目录下的信息

```sh
dir
```

3、清屏

```sh
cls
```

4、创建目录

```sh
md 目录名称   : made（生产） directory
```

5、删除目录

```sh
rd 目录      	:remove directory  只能删除空目录
```

https://jingyan.baidu.com/article/6766299796ce9354d41b8443.html

https://jingyan.baidu.com/article/36d6ed1f0355235bcf4883d4.html

cmd命令不是重点，重点是**使用技巧**和cd、cls



### 使用技巧（重要）

结合tab键补全文件名。

↑ ↓ 上下箭头，寻找最近记录

**总结：使用node运行文件，都使用相对路径（相对于打开cmd的相对目录）**



## 四、环境变量

#### 什么是环境变量？

cmd打开文件或目录的时候。环境变量能够方便开发者更好的寻找你的一些程序文件

其实就是将你安装好的程序文件的安装目录地址，加入到**系统环境变量**  或  **用户环境变量中**



当在cmd中输入mspaint（画图） 或 notepad（记事本）的时候，打开对应的画图和记事本，其实就是这两个在环境变量中。

#### 如何配置环境变量？

以qq为例，给大家配置环境变量。

计算机->右键->属性->高级系统设置->高级->环境变量->  就能见到**用户的环境变量和系统的环境变量**。找到变量path（路径）即可修改，用`;`分隔即可

win10：

![1-7环境变量win10](/public/img/thirdStage/four/1-7环境变量win10.png)

win7：

![image-20210318102602330](/public/img/thirdStage/four/image-20210318102602330.png)





#### 总结

当运行cmd时，出现`xxx不是内部或外部命令，也不是可运行的程序`时。你要确定有没有安装，要么就是环境变量出了问题。

而node.js安装成功以后，自动把node的路径安装到了环境变量path中。所以可以直接在任意目录下运行node.exe







## 五、文件系统/模块

在Nodejs中可以通过内置的fs模块（功能）来操作系统文件。

文件系统操作都具有**同步和回调**两种方式。所有node中的90%以上的方法（都有同步和异步两种形式）



### 1. 文件的操作流程(了解)

**打开文件 -> 对文件进行操作 -> 关闭文件（释放内存）** 

这里了解即可，重点是后面简单的操作方法



#### 1）打开文件

语法：

```js
fs.openSync(path[, flags])
```

返回文件引用

参数说明：

​	      path：必写参数，是要打开的目标文件名的字符串(可以包含文件所在的具体路径)

​          flags：可选参数，设置打开文件的模式（默认为只读），常用的模式：只读r、写入w、追加a

打开模式表：

| 模式  | 说明                                                                        |
| ----- | :-------------------------------------------------------------------------- |
| **a** | 文件用于追加。 如果文件不存在，则创建该文件                                 |
| ax    | 类似于a，但如果路径存在，则失败                                             |
| a+    | 打开文件用于读取和追加。 如果文件不存在，则创建该文件                       |
| ax+   | 类似于 'a+'，但如果路径存在，则失败                                         |
| as    | 打开文件用于追加（在同步模式中）。 如果文件不存在，则创建该文件             |
| as+   | 打开文件用于读取和追加（在同步模式中）。 如果文件不存在，则创建该文件       |
| r+    | 打开文件用于读取和写入。 如果文件不存在，则会发生异常                       |
| rs+   | 打开文件用于读取和写入（在同步模式中）。 指示操作系统绕过本地的文件系统缓存 |
| **w** | 打开文件用于写入。 如果文件不存在则创建文件，如果文件存在则截断文件         |
| wx    | 类似于 'w'，但如果路径存在，则失败                                          |

#### 2）写入内容 

语法：

```js
fs.writeSync( 文件的引用, 内容 )
```

#### 3）关闭文件

语法：

```js
fs.closeSync(文件的引用)
```





案例：使用程序往demo下的abc.txt中写入hello

```js
const fs = require('fs'); // 必须先引入fs内置模块
// console.log(fs); // 它是一个对象，它下面有很多操作文件的方法

// 打开文件 -> 对文件进行操作 -> 关闭文件（释放内存）

// 1、打开文件：返回文件引用
// fs.openSync(path[, flags])    常用的模式：只读r(默认)、写入w、追加a
let file = fs.openSync('./demo/abc.txt', 'a');

// 2、对文件进行操作
// fs.writeSync( 文件的引用, 内容 )
fs.writeSync(file, 'hello');

// 3、关闭文件（释放内存）
// fs.closeSync(文件的引用)
fs.closeSync(file);

```



### 一些坑

文件名不要叫node.js，文件夹名不要叫node







### 2. 进制（了解）

对编程没有帮助，了解即可



#### 2.1 常见进制简述

常见有：二进制、八进制、十进制、十六进制...

所有数据底层都是二进制（0和1），计算机只认识0和1， 而且文件的数据读写和网络中的数据传输都是以二进制传递的



#### 2.2 进制转换原理

2进制逢2进1，10进制逢10进1



十进制：143  转 10进制的原理(任何非零数的0次方都是1)

```
1*10^2   +  4*10^1    +  3*10^0 =   143

```

二进制：1010   转   十进制的原理

```
1*2^3 + 0*2^2  +  1*2^1 + 0*2^0 =  10

```

在线转换器

https://tool.lu/hexconvert/



#### 2.3 计算机存储原理

最小的存储单位是： b（bit） 位，也称为比特

存储文件的最小单位：B （Byte）字节

1B = 8b

b就是0或1，但是它不能表示具体的数据，需要8个一起，才能表示一个具体数据。

![image-20210510151510928](/public/img/thirdStage/four/image-20210510151510928.png)

#### 2.4 ASCII

![2-1ascii](/public/img/thirdStage/four/2-1ascii.png)

每一个ascii码值代表了一个具体的字符。**底层都会用二进制数表示具体的字符。**

英文、数字（62个 ）  加上特殊符号（100）大致共 162个，则 **8个二进制位（11111111最大255也就是一个字节足以表示了）**

所以：**英文数字特殊符号，只占一个字节 。**

但是：世界上有很多其他国家其它的语言不够存，所以就有utf-8， utf-8国标码（国际通用的）：utf8 一个字符占3个字节。





### 3. 两种编程风格（同步和回调）

`注意： 4.1 读取文件    完成之后，再来看这里`

**同步的特点**： 可以用变量接收函数的返回值，node中所有内置函数名都以 **Sync** 结尾

```js
let str = fs.readFileSync( path[,options] )

```

**回调(异步)的特点**：node中的回调风格的方法，必须传递回调函数，否则报错，然后不以sync结尾 

```js
fs.readFile( path [,options], callback )

```

结果必须用回调函数接收。回调函数的第一个参数是错误对象，第二个参数是读取的数据

注意：推荐使用同步风格



**以回调读取文件为例**

```js
const fs = require('fs');

// fs.readFile( path [,options], callback )
// 结果必须用回调函数接收。回调函数的第一个参数是错误对象，第二个参数是读取的数据

// 没有用第二个参数
fs.readFile('./demo/abc.txt', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log(result.toString());
});

// -------------------
// 有第二个参数
fs.readFile('./demo/abc.txt', { encoding: 'utf-8' }, (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});

// ---------------------
// 读取错误
fs.readFile('./demo/abc1.txt', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log(result.toString());
});

```



### 4. 文件操作

关键：学会看手册

```
http://nodejs.cn/api/fs.html

```



#### 4.1 读取文件

语法：

```js
回调风格：fs.readFile( path[,options],callback )
同步风格：fs.readFileSync( path[,options] )

```

返回文件的内容

参数说明：

​	    path：必选参数，文件路径

​		options：可选参数 { encoding:'utf8' } | 'utf8'，以utf8编码格式读取内容，中括号代表可选参数

​		callback：必选参数，回调函数，返回结果和错误捕获

**同步方法**

代码示例1：不加utf8

返回的值默认是buffer且16进制，这是16进制比2进制短，好显示，需要调toString方法再转成正常的字符

```js
let str = fs.readFileSync('./demo/abc.txt');
console.log(str); // <Buffer 68 65 6c 6c 6f>
console.log(str.toString()); // hello

```

代码示例2：加utf8字符串

```js
// let str = fs.readFileSync('./demo/abc.txt', { encoding: 'utf-8' });
let str = fs.readFileSync('./demo/abc.txt', 'utf-8');
console.log(str);

```





###### 捕获同步代码的错误

如果同步代码报错，则执行catch，并打印错误信息。如果不报错，则catch不执行，代码继续往下走

```js
try {
    执行可能有错误的代码
} catch (error) {
    捕获错误，代码继续向下执行
);

```

代码示例：读取不存在的文件，用try...catch捕获错误

```js
const fs = require('fs');

console.log(1);

try {
  // 执行可能报错的代码，如果有错误，执行catch
  let str = fs.readFileSync('./demo/abc1.txt', 'utf-8');
  console.log(str);
} catch (error) {
  // error则为错误对象
  console.log(error);
}

console.log(2);

```



返回到3，看异步





#### 4.2 写入文件

语法：

```js
fs.writeFileSync( path,data[,options] )

```

参数说明：

​		path：必选参数，文件路径

​		data：文件中写入的数据

​		options：可选参数，设置以何种方式写入内容，主要有替换和追加 

​						｛ flag:'a' ｝ a代表追加append，w代表write，默认为w



w的方式写入（默认的方式）

1、如果没有文件则创建文件，并写入内容
2、如果有此文件，则覆盖内容（ 默认是以 w 的方式进行写入 ）



代码示例：

```js
const fs = require('fs');

// fs.writeFileSync( path,data[,options] )

fs.writeFileSync('./demo/c.txt', 'welcome', { flag: 'a' });

```

#### 4.3 文件信息

语法：

```js
let stat = fs.statSync( path )

```

返回一个对象，用于描述文件的信息。

作用：判断文件或文件夹是否存在，如果不存在则报错。还可以判断是文件还是文件夹



参数说明：

​		path：必选参数，文件或文件夹的路径地址

其他：

​		判断文件：stat.isFile()

​		判断目录：stat.isDirectory()

代码示例：

返回的值里面，还有文件大小。创建时间、修改时间、最近访问时间等信息

```js
const fs = require('fs');

// let stat = fs.statSync( path )

let stat = fs.statSync('./demo/c.txt');
// console.log(stat); // 一个对象，文件的信息

console.log(stat.isFile()); // 是否是文件
console.log(stat.isDirectory()); // 是否是文件夹

```









#### 4.4 修改文件名称

语法：同时也是剪切功能（如果路径不一样，就是剪切，如果路径一样，就是重命名）

```js
fs.renameSync( oldpath, newpath )

```

参数说明：

​		oldpath：必选参数，原文件|文件夹路径

​		newpath：必选参数，新文件|文件夹路径

代码示例：

```js
const fs = require('fs');

// fs.renameSync( oldpath, newpath )

// 1、改名
fs.renameSync('./demo/abc.txt', './demo/tianzhu.txt');

// 2、移动文件
fs.renameSync('./demo/tianzhu.txt', './demo2/abc.txt');

```



#### 4.5 删除文件

语法：

```js
fs.unlinkSync( filepath )

```

参数说明：

​		filepath：必选参数，要删除的文件路径（注意，是文件不是文件夹）

代码示例：

```js
const fs = require('fs');

// 删除文件，不能删除文件夹
// fs.unlinkSync( filepath )

fs.unlinkSync('./demo2/abc.txt');

```



### 5. 文件夹操作

#### 5.1创建目录

语法：

```js
fs.mkdirSync( path[,options] )

```

参数说明：

​		path：必选参数，要创建的文件夹完整路径名称

​		options：可选参数：是否递归创建文件夹

​				{ recursive: true/false }   true代表递归创建   （demo/bb/cc/dd）

代码案例：

```js
const fs = require('fs');

// fs.mkdirSync( path[,options] )

// fs.mkdirSync('./demo3'); // 创建一层

fs.mkdirSync('./demo3/a/b/c', { recursive: true }); // 递归创建

```

#### 5.2删除目录

语法：

```js
fs.rmdirSync( path[,options] )

```

参数说明：

​		path：必选参数，要删除的文件夹完整路径

​		options：可选参数，是否递归删除文件夹，{ recursive:true }   true代表递归删除，只有V14版本支持递归删除

代码案例：

```js
const fs = require('fs');

// fs.rmdirSync( path[,options] )
// fs.rmdirSync('./demo2'); // 删除一个空的文件夹

fs.rmdirSync('./demo3', { recursive: true }); // 递归删除，node的14以上版本支持

```



#### 5.3读取目录

语法：

```js
fs.readdirSync(path)

```

参数说明：

​		path：必选参数，要读取的文件夹的完整路径

返回一个一维数组。且只能读取一层目录，要读取目录下所有的文件，需要递归

代码案例：

```js
const fs = require('fs');

// fs.readdirSync(path)

// 返回一个一维数组。且只能读取一层目录

let files = fs.readdirSync('./demo');
console.log(files); // [ 'a', 'aa.js', 'b', 'c.txt' ]

```



### 6.  其他

#### 6.1 全局变量

在浏览器 JavaScript 中，通常 window是顶层对象，而 Node.js 中的顶层对象是 global

Node平台内置了例如：`__filename`  和 `__dirname`等全局变量    setInterval()   setTimeout()等方法

代码示例：

```
__dirname：当前文件所在的绝对地址目录
__filename：当前文件所在的绝对地址目录（包含文件名称）

```



#### 6.2 优化路径

![image-20220516161427100](/public/img/thirdStage/four/image-20220516161427100.png)



fs操作的文件，如果使用**相对路径**（是相对于命令行的路径）

解决：避免在使用fs操作文件的时候，用相对路径。所以以后在使用fs的时候都要改成绝对地址。



```js
const fs = require('fs');

// fs操作的文件，如果使用相对路径（是相对于命令行的路径）
// let str = fs.readFileSync('./demo/c.txt', 'utf-8');
// console.log(str);

// --------------------

// 解决：使用绝对路径
let path = __dirname + '\\demo\\c.txt'; // 拼出一个绝对的地址

let str = fs.readFileSync(path, 'utf-8');
console.log(str);

```

