---

layout: secondStageone

title: 二阶段 | 第一天

---

## 一、课程介绍

**讲师**：彭作洪



**时间安排：总共25天**

- 原生js：16天
- 项目：3天
- jquery+zepto: 4天
- Bootstrap：1天
- 答辩：1天



**目的要求：**
 1、使用js实现逻辑和交互；
 2、实现从后端请求数据前端渲染
 重要性：是我们后面学习node和框架的基础

**学习目标**
培养解决问题的能力（发现问题、分析问题、解决问题）
解决问题（百度 问人）
	百度：会百度，关键字，从搜索结果中快速匹配需要的信息
	问人：要做什么、实现思路、出现问题在哪、可能的原因是什么

**学习要求**

- 课堂要求：
  互动非常重要、要有气氛
  主动回复、主动提问
- 作业要求：
  作业按时提交
- 作业内容：
      正常作业：老师代码敲三遍
      其他作业：小题目
- 笔记整理：每天整理





## 二、javaScript简介

#### 1、网页三部分组成

- html：超文本标记语言，专门编写网页内容的语言。（结构）
- css：层叠样式表（装修、样式）
- javaScript：网页交互的解释性脚本语言，专门编写客户端交互行为。（交互）



#### 2、什么是javaScript（记住）

JavaScript 是一种**具有面向对象能力**的、**解释型**的程序设计语言。

- 开发公司：Netscape（网景）
- 作者：布兰登·艾奇 (Brendan Eich)
- 时间：1995
- 作用：实现网页交互、网页特效、前后端数据交互



扩展阅读：--------------------------------------------------------------

Javascript诞生记

http://www.ruanyifeng.com/blog/2011/06/birth_of_javascript.html



#### 3、JavaScript 特点

1、**解释性**：计算机可以直接识别语言，读取一行，执行一行。

2、**基于对象**：内部提供了一些对象（工具），这些对象的方法或者属性可以实现 js 的基本功能。

3、**事件驱动**：JavaScript 可以直接对用户或者客户交互做出响应，无须经过 web 服务器，它对用户的响应，以事件驱动的方式进行。

4、**安全性**：JavaScript 是一种安全性语言，它不允许访问本地的硬盘，并不能将数据存入到服务器上，不允许对网络文档进行修改和删除，只能通过浏览器实现信息浏览或动态交互。

5、**跨平台**：JavaScript 依赖于浏览器本身，与操作环境无关，只要能运行浏览器的计算机，并支持 JavaScript 的浏览器就可正常执行。




#### 5、javaScript的组成（记住）

1、ECMAScript：该语言的核心、基本语法、语句、变量、关键字等等

2、DOM：document object model   (文档对象模型)

3、BOM：browser object model  (浏览器对象模型)





## 三、javaScript初体验

#### 1、引入javascript

##### 1、行间

```html
<!-- 方式一：行间js -->
<!-- onclick="点击要做的事" -->
<!-- alert('弹出的内容')  具有阻塞代码的作用（如果不点确定，代码不能向下走） -->

<div onclick="alert('小二，上茶')" style="width: 200px; height: 200px;background: red;"></div>
```



##### 2、内嵌

```html
<!-- 方式二：内嵌 -->
<script>
    alert('姐妹，我是js，我运行了');
</script>
```



##### 3、外链

```html
<!-- 方式三：外链 -->
<script src="js/a.js"></script>
```



**注意问题：**

```js
1、js 从上向下一行一行执行

2、alert 具有阻塞代码的作用

3、alert('')  只有数字和变量不加引号，其它的都加

4、js可以放在页面的任何地方，但是我们建议放在head中或者</body>的前面

5、一个script标签，用了外链，就不要再用做内嵌

6、建议每行js完成，加分号

7、js区分大小写

8、建议：js用单引号，html用双引号

```

##### 4、注释

// 单行注释 ctrl+/

/* 多行注释 */  ctrl+shift+/   多行注释不能嵌套



#### 2、变量（掌握）

**变量**是存储数据的容器，我们通过变量名获取数据，修改数据。



**命名规则**：

- 1、只能由数字、英文字母、$、下划线组成
- 2、不能以数字开头
- 3、不能包含关键字、保留字

**建议**：

- 1、见名知意，命名要有语义化
- 2、驼峰命名 fontSize firstName borderTopColor 



**关键字**

![](/public/img/secondStage/one/关键字.png)

**保留字**

![](/public/img/secondStage/one/保留字.png)





#### 3、变量声明

1、声明并赋值

```js
// 1、声明并赋值(最常用)
var uname = 'zs';
var age = 3;
alert(uname);
alert(age)
```



2、先声明，再赋值

```js
// 2、先声明，再赋值
var username; // 先声明
username = '李四'; // 再赋值
alert(username);
```



3、一次声明多个

```js
// 3、一次声明多个(熟练了再用)
var a = 10,
    b = 20,
    c = 30;
```



#### 4、字符串拼接

1、删除要替换的内容

2、写两引号，外面是什么引号就写什么引号

3、在引号之间，写两加号

4、在加号之间，放你的变量



#### 5、js调试



##### 1、输出调试

```js
var uname = '隔壁小王';
var age = 3;

// 1、alert(只能弹出一个值)     
alert(uname);
alert(age);

// 2、控制台打印(以后都用这个)
// console.log(打印内容, ...)
console.log(uname, age);

// 3、页面输出(不用)
document.write(uname)
```

##### 2、断点调试

```js
// 断点调试
var a = 10;
var b = 20;
var c = a + b;
console.log(c);
```



## 四、数据类型

**基本数据类型(简单数据类型)**：Number(数字) String(字符串) Boolean(布尔值) Null(空) Undefined(未定义)

**引用数据类型(复杂数据类型)**：Object(对象)



**数据类型的判断**

- 格式：typeof(参数)    或者    typeof 参数
- 作用：返回六个字符串，表示参数的数据类型



| 数据类型  | 说明                                                                                           | typeof的返回值       |
| --------- | ---------------------------------------------------------------------------------------------- | -------------------- |
| number    | 正数、小数、负数、0，无穷大，NaN、小数的舍入误差                                               | 'number'             |
| string    | 单双引号引起的0个或多个字符，长度，下标，通过下标获取对应的字符                                | 'string'             |
| boolean   | true真 / false 假                                                                              | 'boolean'            |
| null      | “空值”，代表一个空对象指针，使用 typeof 运算得到“object”，所以你可以认为它是一个特殊的对象值。 | 'object'             |
| undefined | 未定义，声明了未赋值，值为undefined                                                            | 'undefined'          |
| object    | 对象（{}   []   function）                                                                     | 'object'  'function' |



#### 1、number

```js
// 整数、小数、负数、0都是数字
var a1 = 12;
var a2 = 0;
var a3 = -3.14;
console.log(a1, typeof a1); // 12 'number'
console.log(a2, typeof a2);
console.log(a3, typeof a3);

```



```js
// 八进制基数范围 0~7，以 0 开头并且没有超过 8 的值，则为八进制
// 十六进制基数范围 0-9、A~F，且 0x 开头，则为十六进制
var a4 = 070; // 8进制
console.log(a4, typeof a4); // 56  'number'
var a5 = 0x10; // 16进制
console.log(a5, typeof a5); // 16 'number'

```



```js
// 特殊的值
var a6 = 1 / 0;
console.log(a6, typeof a6); // Infinity 无穷    'number'

var a7 = 0.1 + 0.2;
console.log(a7, typeof a7); // 0.30000000000000004   'number'
var a8 = 0.07 * 100;
console.log(a8, typeof a8); // 7.000000000000001  'number'

```



```js
// NaN: not a number(不是一个数字)
var num1 = '小王' - 5 + 5;

console.log(num1, typeof num1); // NaN   'number'
console.log(NaN == NaN); // false

// NaN的特点
// 1、NaN不是一个数字，但却是数字类型
// 2、一切涉及NaN操作的，结果都是NaN
// 3、NaN和谁都不相等，包括它自己

```



#### 2、string

```js
// 成对的单、双引号引起来的0个或多个字符

var str1 = "我就是我，不一样的烟火";
var str2 = ''; // 空字符串
var str3 = '   ';
var str4 = '10';

console.log(str1, typeof str1);
console.log(str2, typeof str2); // string
console.log(str4, typeof str4); // 10 string

// -----------------------------
// 字符串的长度，从1开始数   字符串.length
console.log(str1.length); // 11
console.log(str2.length); // 0
console.log(str3.length); // 3
console.log(str4.length); // 2

// ------------------------
// 下标：从0开始数
// 可以能过下标获取对应的字符
// 字符串.charAt(下标)   /  字符串[下标]

console.log(str1.charAt(7));
console.log(str1[7]);

```



#### 3、boolean

true 真  /  false 假

```js
var b1 = true;
console.log(b1, typeof b1); // true 'boolean'

var b2 = false;
console.log(b2, typeof b2); // false 'boolean'

```

#### 4、null和undefined

```js
// Null: 值为空，我们准备为一个变量赋值为对象，但是现在还没有值，则我们可以给它赋为null
var n1 = null;
console.log(n1, typeof n1); // null 'object'


// Undefined: 未定义，当一个变量定义了但是没有赋值，则值为undefined
var n2;
console.log(n2, typeof n2); // undefined 'undefined'

```



**null和undefined的区别？**

- undefined：未初始化，访问一个空变量返回的值，声明变量但是未赋值
- null：空，访问一个空对象返回的值，声明变量赋值但是值为空



#### 5、引用类型

```js
// 对象
var obj = {
    name: 'zs',
    age: 3
};
console.log(obj); // {name: 'zs', age: 3}
console.log(typeof obj); // 'object'

// 数组
var arr = [11, 22, 33];
console.log(arr); // [11, 22, 33]
console.log(typeof arr); // 'object'

// 函数
function fn() {}
console.log(fn);
console.log(typeof fn); // 'function'

```





## 五、数据类型的强制转换

#### 1、转换为number类型



##### 1、Number(参数)

**作用**：将任何类型转换为数字，不影响原参数

**转换规则：**

1、如果字符串全是数字，则正常转成数字，如果有一个不是数字，则转不成功，不成功则是NaN，空字符串或空格转换成0

2、如果是数字，则简单的返回

3、true转为1，false转为0

4、null转为0

5、undefined转为NaN

```js
var str1 = '12';
var n = Number(str1);
console.log(n, typeof n); // 12 'number'
console.log(str1, typeof str1); // '12' 'string'  不影响原参数

console.log(Number('99万')); // NaN
console.log(Number('')); // 0
console.log(Number('   ')); // 0

console.log(Number(12)); // 12

console.log(Number(true)); // 1
console.log(Number(false)); // 0

console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

```



##### 2、parseInt()和parseFloat()

- parseInt(参数)：将参数转换为整数
- parseFloat(参数)：将参数转换为小数

**转换规则：**

- 从左向右一位一位的看，如果是数字，则提出来，如果不是数字，则到此为止，后面的都不要了

**区别：**

- parseFloat认识一个小数点，而parseInt不认识小数点
- parseInt有第二个参数，即以多少进制转换，而parseFloat它没有第二个参数

```js
var str1 = '12.34万';

console.log(parseInt(str1)); // 12
console.log(parseInt('a12.34万')); // NaN
console.log(parseInt('  034a12.34万')); // 34
console.log(parseInt('    a12.34万')); // NaN

console.log(parseFloat('12.34万')); // 12.34
console.log(parseFloat('12.3.4万')); // 12.3

console.log(parseInt('070', 10)); // 70  在IE8及以下，当做8进制处理返回56，加上第二个参数10就会当做十进制处理

```



#### 2、转换为字符串类型

- String(参数);    可以将任何数据类型转换为字符串
- 参数.toString();   同String，但是不能转换null和undefined



```js
// 格式：String(参数)
// 作用：可以将任何数据类型转换成字符串，不影响原参数

console.log(String(12)); // '12'
console.log(String(1 / 0)); // 'Infinity'
console.log(String(NaN)); // 'NaN'

console.log(String('ab')); // 'ab'  字符串简单返回

console.log(String(true)); // 'true'
console.log(String(false)); // 'false'

console.log(String(null)); // 'null'
console.log(String(undefined)); // 'undefined'

// ------------------------

// 变量.toString()   推荐使用
// 同String(参数)，但是不能转null和undefined

var n1 = null;
// console.log(n1.toString());

var n2 = undefined;
// console.log(n2.toString());

```



#### 3、转换为布尔类型

Boolean(参数);

- 作用：可以将任何数据类型转换成布尔值

规则：

- 1、数字里面的0和NaN转换成布尔为false，其它转换为布尔为true
- 2、字符串里，空字符串为假，其它均为真
- 3、布尔值简单的返回
- 4、null和undefined均转换为false

```js
console.log(Boolean(10)); // true
console.log(Boolean(-9 / 0)); // true
console.log(Boolean(NaN)); // false
console.log(Boolean(0)); // false

console.log(Boolean('ab')); // true
console.log(Boolean('')); // false
console.log(Boolean('    ')); // true

console.log(Boolean(true)); // true
console.log(Boolean(false)); // false

console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

```

**js世界的假值：共6个**

- 假：0 NaN 空字符串 false null undefined
- 真：其它的值都为真，包括一切对象



#### 4、toFixed

数字.toFixed(保留小数的位数)

作用：将数字转换成字符串，并保留几位小数

```js
var n = 3;
console.log(n.toFixed(2)); // 3.00

```

#### 5、isNaN

- isNaN(参数);  是不是不是一个数字？
- 不是数字返回true，是数字返回false
- isNaN自己不判断，找它的好朋友Number()，如果Number()能正确返回数字，则返回false，如果Number()转不成功，则返回true

```js
console.log(isNaN('10')); // false
console.log(isNaN(null)); // false
console.log(isNaN(undefined)); // true
console.log(isNaN(NaN)); // true

console.log(isNaN(true)); // false
console.log(isNaN(false)); // false

```

