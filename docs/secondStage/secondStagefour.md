## 一、循环

#### 1、json对象

对象：大括号括着的无序的名值对

特点：它没有长度，没有下标，因此不能for循环，要用for-in循环

```js
var 对象名 = {
    key1: value1,
    key2: value2,
    ...
}
```

```js
var obj = {
    'name': 'zs',
    'age': 3,
    'job': '前端开发'
}
// console.log(obj);
```

**读取和修改**

```js
// 读取（点的方式）: 对象.属性
console.log(obj.name);
console.log(obj.age);

// 读取（中括号的方式）：对象['属性']
console.log(obj['job']);

// 中括号优势，可以读取属性是变量的
var a = 'name';
console.log(obj[a]);


// ------------------------------

// 修改: 对象.属性 = 值; 
obj.name = 'ls';
obj.sex = '女';
obj['sex'] = '不明';
console.log(obj);
```



#### 2、for-in

for-in：循环对象，因为对象没有length属性，所以不能用for循环，只能用for-in

```js
for (var 属性 in 对象) {
    console.log(属性  即key值);
    console.log(对象[属性]  即value值);
}
```

```js
var obj = {
    'name': 'zs',
    'age': 3,
    'job': '前端开发'
}

for (var attr in obj) {
    console.log(attr, '------', obj[attr]);
}
```



## 二、函数声明及调用

函数是由事件驱动的或者当它被调用时执行的可重复使用的代码块。



格式

```js
// 1、函数声明
function 函数名(形参1, 形参2, ...) {
    代码块
}

// 2、函数表达式
var 函数名 = function (形参1, 形参2, ...) {
    代码块
}

// 函数调用：
函数名(实参1, 实参2, ...);
```



## 三、函数的参数

**形参：**在声明函数时，函数中一些不确定的值，我们可以先定义一个变量表示，这个变量我们就称之为形参。每一个形参都是一个变量声明，只不过省略了 var，但是这个时候的形参并没有值。

**实参：**在调用函数时，如果函数声明时有参数，就可以在括号中传入具体的值，这个叫实参。



#### 1、实参和形参个数不等

- 如果实参比形参少，则没有匹配上的形参值为undefined
- 如果实参比形参多，则多的实参也白多

```js
function add(a, b) {
    console.log(a);
    console.log(b);
}

add(3, 5);
add(4, 5, 6); // 实参比形参多，多了也白多
add(8); // 实参比形参少，没有对应上的形参，值为undefined
```



#### 2、arguments

- arguments  函数实参的集合，是一对象，是一个类数组、伪数组，有长度，有下标，可以通过下标获取某一个

```js
// 求不定参数的和（不能实现）
function add(a, b, c) {
    console.log(a + b + c);
}
add(3, 4);
add(7, 8, 9);
```



```js
// 求不定参数的和
// arguments：函数实参的集合，是一对象，是一个类数组、伪数组，有长度，有下标，可以能过下标获取某一个
function add() {
    // console.log(arguments);
    // console.log(typeof arguments); // 'object'
    // console.log(arguments.length);

    var num = 0;
    for (var i = 0; i < arguments.length; i++) {
        // console.log(arguments[i]);
        num += arguments[i];
    }
    console.log(num);
}
add(3, 4);
add(7, 8, 9);
add(3, 4, 5, 6, 7);

```



#### 3、函数参数的类型

```js
function fn(a) {
    console.log(a, typeof a);
}

// 函数的参数可以是任意数据类型，包括函数
fn(3); // 'number'
fn('ab'); // 'string'
fn(true); // 'boolean'
fn(null); // 'object'
fn(); // 'undefined'

fn([11, 22]); // 'object'
fn({
    a: 1,
    b: 2
}); // 'object'
fn(function() {}); // 'function'

```





## 四、作用域及域解析

作用域：**变量**或**函数**的有效使用范围，有**全局作用域**与**函数作用域**两种

**全局作用域**：写在`<script>`标签下

**局部作用域**：函数里面的





#### 1、全局变量和局部变量

**全局变量**：声明在script标签下的变量或函数，全局变量在任何地方都可以访问，任何地方都可以修改

```js
var a = 10; // 全局变量
function fun1() {
    a++;
    console.log(a); // 11
}
function fun2() {
    a++; // 12
    a--; // 11
    console.log(a); // 11
}
fun1();
fun2();
console.log(a); // 11

```

**局部变量**：在函数内部声明的变量或函数，就是局部变量。局部变量或函数只能在函数内部访问

```js
function sum() {
    var a = 10;
    console.log(a); // 10
    function s() {
        console.log(a); // 10
    }
    s();
}
sum();
console.log(a); // 报错 a is not defined
s(); // 报错 s is not defined

```



#### 2、作用域链

JavaScript 中的一种值的查找机制，当需要使用到一个变量或函数，先查找自身作用域，自身作用域没有再从父级作用中找，依次查找，一直到全局，全局还是没有，显示 is not defined。

```js
var a = 10;

function fn() {
    var a = 20;

    function sum() {
        var a = 30;
        console.log(a);
    }
    sum();
}
fn();

```





#### 3、预解析

浏览器是多个功能的集合体，它可以运行js、css、html、图片、音视频等，浏览器有一块专门用于解析js，我们称为js解析器

解析器工作的原理：至少会经历两步

**1、预解析**

找东西，找var、函数、参数，找到之后，var 赋一个值为undefined提到当前域的最上面，函数整体提到当前域的最上面，参数同var

如果函数同var同名，则函数干过var，如果var同var同名，则后面的覆盖前面的，如果函数同名，则后面的覆盖前面的



**2、逐行解读**

从上到下，一行一行的执行，见到+ - * / % ++ -- =等操作，就跑到前面修改变量，遇到读取，就跑到最前面读取这个变量



当遇到函数调用，就又开启一个新的作用域，又执行以上两步



## 五、函数返回值

return特点：

1、函数通过关键字 return 返回函数中的内容

2、return 一次只能返回一个值(如果要返回多个值，可以返回[] 或者 {})

3、函数中只要遇到 return，函数就会结束

4、函数没有返回值，默认结果为 undefined

```js
// 封装一个方法（函数），用于求1--n之间所有数的和

function fn(n) {
    var num = 0;
    for (var i = 1; i <= n; i++) {
        num += i;
    }
    // console.log(num); // 5050 1275
    return num; // 将return后面的值返回到函数的外面
}


var v1 = fn(100); // 函数调用的结果，就是return后面的值
// console.log(v1);
var v2 = fn(50);
// console.log(v2);

console.log(v1 + v2);


// console.log(num); // num是fn局部的变量，外面拿不到

```





## 六、代码复用

代码复用：

1、html 结构尽量标准一样

2、先实现一个，但是里面的标签必须通过父元素获取

3、封装成函数，将父元素作为函数参数

4、调用