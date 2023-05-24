## 回顾

```
git基本语法
git config --global user.name 用户名
git config --global user.email 邮箱
git config --list

git init 
git add .
git commit -m 提交描述
查看版本
git log
git log --oneline
git reflog   查看全部版本
查看状态
git status
回退
git reset --hard 版本号
清屏
clear



git分支
git branch 分支名   创建分支
git branch    查看分支
git checkout 分支名    切换分支
git merge 分支名　　　合并分支




远程仓库
git push 仓库地址 分支
git push 仓库别名 分支
git push -u 仓库别名 分支
git push 

git remote -v
git remote add 别名 远程仓库地址

git clone 远程仓库地址   克隆
git pull    拉取，只拉取有改变的



ssh
让自己上传免输帐号和密码，并且加密码
1、生成公钥
ssh-keygen -t rsa -b 4096 -C "开发者的邮箱"
2、将公钥放到自己仓库
3、验证是否成功
ssh -T git@gitee.com
4、使用git打头的地址实现上传下载
```









## 一、 ECMASCript6简介

ECMAScript 6.0（以下简称 ES6）泛指 JavaScript 语言的下一代标准。



### 1.1 Javascript遗留问题（es5之前的一些问题）

弱类型语法造成的程序不可预测性（比如：未声明变量即可使用）

语法过于松散，实现相同的功能，不同的人可能会写出不同的代码



### 1.2 为什么使用ES6

es6的语法和新增一些函数，帮我们解决了一些问题，和提升一些开发效率 。

为后面阶段学习框架做准备



### 1.3 ECMAScript6历史版本

ES6 实际上是一个泛指，泛指 ES2015 及后续的版本

![1-1ECMA版本](/public/img/thirdStage/two/1-1ECMA版本.png)

es6全称：es2015年6月份发布的，每年的6月份都会更新一代。



## 二、 let和const命令

ES6新增了`let`命令，用来声明变量。

ES6新增了`const`命令，用来声明一个只读的常量。



### 2.1let命令

#### 2.1.1 语法

```js
let 变量名 = 值
```



#### 2.1.2 let命令特点

- 不存在变量提升与暂时性死区（永远是先声明，再使用）
- 不能重复声明
- 块级作用域（if for while switch function，不包括对象）
- let和循环（循环后的i和点击按钮打出下标）

```js
// let 变量名 = 值;
// 作用：声明变量

// - 不存在变量提升与暂时性死区（永远是先声明，再使用）
console.log(a);
var a = 5;

console.log(a); // Cannot access 'a' before initialization(不能在声明之前访问)
let a = 5;

// ---------------------------------

// - 不能重复声明
var a = 5;
var a = 10;
console.log(a);

let b = 5;
let b = 10;
console.log(b); // Identifier 'b' has already been declared

// -------------------------------

// - 块级作用域（if for while switch function，不包括对象）
// 这几个语句都有大括号，在大括号里面let声明的变量，都只在这个大括号里面用
// var没有块级作用域
if (true) {
    var a = 5;
    let b = 10;
}
console.log(a);
console.log(b); // b is not defined

// -------------------------------
// - let和循环（循环后的i和点击按钮打出下标）
for (var i = 0; i < 3; i++) {}
console.log(i); // 3

for (let i = 0; i < 3; i++) {}
console.log(i); // i is not defined


// 点击按钮，打出它的下标
var btn = document.getElementsByTagName('button');
for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        console.log(i); // 3 3 3
    };
}

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        console.log(i); // 0 1 2
    };
}
```





### 2.2const命令

#### 2.2.1 语法

```js
const 常量名 = 常量值
```



#### 2.2.2 const特点及建议

- 按照规范建议常量名大写
- 声明常量必须赋值
- 一旦声明常量，则值是不能改的（指的是内存地址不能修改）

```js
// 语法：const 常量名 = 常量值
// 作用：声明一个只读的常量

// -------------------------
// - 按照规范建议常量名大写

// ------------------------
// - 声明常量必须赋值
const FirstName = '刘';

// --------------------------
// - 一旦声明常量，则值是不能改的（指的是内存地址不能修改）
// FirstName = '张'; // 常量一旦赋值，则值不可以改

// 如果声明的是对象，则属性是可以改的
const OBJ = {
    name: 'zs',
    age: 3,
};
OBJ.name = 'ls';
console.log(OBJ);
```





## 三、 数据类型和数据结构

### 1.字符串扩展

#### 1.1 模板字符串

原字符串的问题：

- 字符串拼接复杂
- 引号嵌套的问题
- 定义字符串时不能换行



#### 1.2 语法

```js
let str = `中公优就业 IT 培训品牌`
```

作用：可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量



#### 优点

可以解析 js 表达式（变量、字符串拼接、函数调用、三目运算）



```js
// let str = `中公优就业 IT 培训品牌`;
// 作用：可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量

// ${简单的js表达式}
// 优势：可以解析 js 表达式（变量、字符串拼接、函数调用、三目运算）

let uname = '敬智浩';
function from() {
    return '宝鸡';
}
let sex = 0; // 0为男，1为女

let str = `我是${uname}，我来自在于${from()}，我今年${1 + 2}岁，我是${sex ? '女' : '男'}孩子`;
console.log(str); // 我是敬智浩，我来自在于宝鸡，我今年3岁，我是男孩子
```





### 2. 新增方法（5个）

- startsWith

start（开始）

语法：字符串.startsWith( 参数字符 )

描述：参数字符串是否在原字符串的头部，返回布尔值   （判断路径以什么开头）

- endsWith 

语法：字符串.endsWith( 参数字符 )

描述：参数字符串是否在原字符串的尾部，返回布尔值  （判断图片扩展名）

- repeat

语法：字符串.repeat( num )

描述：返回一个新字符串，表示将原字符串重复num次

- padStart

语法：字符串.padStart( 目标长度，填充的字符 )

描述：字符串头部补全（如果字符串没有达到这个长度，则在前面添加字符，以达到这个长度）（如补0）

- padEnd

语法：字符串.padEnd( 目标长度，填充的字符 )

描述：字符串尾部补全（如果字符串没有达到这个长度，则在尾部添加字符，以达到这个长度）

```js
// startsWith
// 语法：字符串.startsWith( 参数字符 )
// 描述：参数字符串是否在原字符串的头部，返回布尔值   （判断路径以什么开头）
let str = '/student/abc';
console.log(str.startsWith('/student')); // true
console.log(str.startsWith('/abc')); // false

// -------------------
// - endsWith
// 语法：字符串.endsWith( 参数字符 )
// 描述：参数字符串是否在原字符串的尾部，返回布尔值  （判断图片扩展名）
let str = 'abc.png';
console.log(str.endsWith('.png')); // true
console.log(str.endsWith('.jpg')); // false

// --------------------
// -  repeat
// 语法：字符串.repeat( num )
// 描述：返回一个新字符串，表示将原字符串重复num次
let str = '我不听！';
console.log(str.repeat(10));

// -----------------
// - padStart
// 语法：字符串.padStart( 目标长度，填充的字符 )
// 描述：字符串头部补全（如果字符串没有达到这个长度，则在前面添加字符，以达到这个长度）（如补0）
let a = '3';
let b = '13';
console.log(a.padStart(2, '0'));
console.log(b.padStart(2, '0'));

console.log(toTwo(3));
console.log(toTwo(23));

function toTwo(n) {
    return n.toString().padStart(2, '0');
}

// --------------------
// -  padEnd
// 语法：字符串.padEnd( 目标长度，填充的字符 )
// 描述：字符串尾部补全（如果字符串没有达到这个长度，则在尾部添加字符，以达到这个长度）
let str = '我不听：';
console.log(str.padEnd(20, '你说的，'));
```









### 3.Symbol

做为**了解**即可，用途比较少。为了我们后续学习iterator做铺垫。Symbol 可以当作对象的键。

ES6 引入了一种新的原始数据类型`Symbol`，表示**独一无二的值**。

它是 JavaScript 语言的**第七种数据类型**。 

Symbol 值通过`Symbol()`函数生成。

#### 1. 基础用法

代码案例：

```js
// 基本类型：Number String Boolean Null Undefined Symbol
// 引用类型：Object

// 1、定义一个symbol
let sym = Symbol();
console.log(sym);
console.log(typeof sym); // 'symbol'

// 2、symbol不做任何运算，会报错
// console.log(sym + 1);

// 3、独一无二( 创建的symbol与任何值都不相等 )
let sym2 = Symbol();
console.log(sym == sym2); // false

```



#### 2. Symbol描述符

```js
// 标识符，就是为了好看，好区分是哪一个symbol
let sym1 = Symbol('uname');
let sym2 = Symbol('age');

console.log(sym1, sym2);

```



#### 3. 应用场景

在此之前，对象的键只能是字符串，即便写的不是字符串，也会转成字符串。

Symbol可以用在对象中，当作键使用。

一般常用于框架、js内置函数和对象中

代码案例：

```js
// 对象的key只能是字符串和symbol
// {
//   key1: value1,
//   key2: value2,
//   ...
// }

// -----------------
// symbol在对象的key中使用
// 之前对象的key只能是字符串，在这以后，对象的key也可以是symbol
let sym1 = Symbol('uname');
let sym2 = Symbol('age');
let obj = {
    [sym1]: 'zs',
    [sym2]: 3,
};
console.log(obj);
console.log(obj[sym1]); // zs
console.log(obj[sym2]); // 3

// --------------------
// 扩展案例（模拟对象的私有属性）：
function createObj(name, age) {
    let sym1 = Symbol('uname');
    let sym2 = Symbol('age');
    return {
        [sym1]: name,
        [sym2]: age,
        fn: 'abc',
    };
}

// 某些属通过对象访问不到，则这些属性就是私有属性
let o = createObj('张三', 3);
console.log(o);

// 循环也只能循环普通的值，symbol的值也不能循环
for (let attr in o) {
    console.log(attr);
}

```







## 四、数组

es6中对数组一些方法进行了扩展。

**数组这种数据结构的特点：有序的。**

### 1. 新增方法（静态方法）

静态方法：Array是个构造函数，函数也是对象，所以在这个函数对象上面可以扩展一些方法，这些方法就是静态方法（Array.isArray()    Array.of()    Array.from()）

实例方法：[].concat()  [].indexOf()，这些方法都存在于数组的**原型**上，所有的数组实例都可以访问



- **Array.of**

语法：Array.of( ...args )

作用：实例化数组，解决new Array()传入数字时的缺陷。

代码案例：

```js
// 语法：Array.of( ...args )
// 作用：实例化数组，解决new Array()传入数字时的缺陷。

let arr1 = [3]; // [3]
console.log(arr1);

let arr2 = new Array(3); // [undefined, undefined, undefined]
console.log(arr2);

let arr3 = Array.of(3);
console.log(arr3); // [3]

```

- **Array.from**

语法：Array.from( arrayLike )

作用：把伪数组转换成数组，相对于ES5的写法，更加简洁方便

伪数组有：arguments、NodeList、HtmlCollection 等

代码案例：

```js
// 语法：Array.from( 伪数组、类数组 )
// 伪数组有：arguments、NodeList、HtmlCollection  类似数组，但是没有数组的哪些方法
// 作用：把伪数组转换成数组，相对于ES5的写法，更加简洁方便


var li = document.querySelectorAll('li');
// console.log(li); // 类数组 伪数组（长得像数组，但是不能使用数组的方法）

// ------------
// es5将类数组转换为数组
let arr = [];
for (let i = 0; i < li.length; i++) {
    arr.push(li[i]);
}
console.log(arr);

// ---------
// es6的Array.from()的方法
let arr2 = Array.from(li);
console.log(arr2);

```



## 五、对象

对象（object）是 JavaScript 最重要的数据类型。ES6 对它进行了重大升级，包括（数据结构本身的改变和Object对象的新增方法）

特点：**对象是无序的**

### 1. 对象属性简写/函数的简写

代码案例：

```js
// 对象的key只能是字符串或symbol
// {
//   key1: value1,
//   key2: value2,
//   ...
// }

let uname = 'zs';
let age = 3;
let sex = '男';

// 原来的写法
let o = {
    uname: uname,
    age: age,
    sex: sex,
};
console.log(o);

// 新的简写
let obj = {
    uname, // 属性名和属性值刚好一样，则可以简写
    age,
    sexA: sex,
    fn: function () {
        console.log('我是fn函数');
    },
    // 函数的简写
    show() {
        console.log('我是show函数');
    },
};

console.log(obj);

```



### 2. 属性名表达式

对象属性名的中括号的用法：中括号中可以解析表达式（变量、字符串拼接、函数调用、数学运算、三目等等）

代码案例：

```js
// 对象的key只能是字符串或symbol
// key用中括号包起来，里面可以放：变量、字符串拼接、函数调用、数学运算、三目等等
// {
//   [key1]: value1,
//   key2: value2,
//   ...
// }

let u = 'uname';
function fn() {
    return 'ddd';
}
let n = 1; // 0男  1女

let obj = {
    [u]: 'zs',
    ['a' + 'ge']: 3,
    [fn()]: '我是一个函数调用',
    [n ? '女' : '男']: '性别',
    [1 + 2]: 3,
};

console.log(obj);

```

案例

```js
// 需求：创建一个对象，对象的key是 a1 -- a100，值为1--100
let obj = {};
for (let i = 1; i <= 100; i++) {
    obj['a' + i] = i;
}
console.log(obj);

```





### 3. 新增静态方法

- **Object.assign**

语法： Object.assign( target, source1, source2, ... )

描述：对象的合并( **浅拷贝** )，将源对象（source），复制到目标对象 ( target )，并返回目标对象

代码案例：

```js
// $.extend(target, source1, source2, ...); // 浅拷贝
// $.extend(true, target, source1, source2, ...); // 深拷贝
// Object.assign()没有jq的方法强大，它只能浅克隆

let o1 = {
    name: 'zs',
};
let o2 = {
    age: 3,
};
let o3 = {
    sex: '男',
    name: 'ls',
};
let o = Object.assign({}, o1, o2, o3);
console.log(o); // {name: 'ls', age: 3, sex: '男'}

```



- **Object.keys**

语法：Object.keys( object )

描述：返回一个数组，成员是参数对象自身的属性的键名

代码案例：

```js
let obj = { name: 'ls', age: 3, sex: '男' };

let arr1 = Object.keys(obj);
console.log(arr1); // ['name', 'age', 'sex']

```



- **Object.values**

语法：Object.values( object )

描述：返回一个数组，成员是参数对象自身的属性的键值

代码案例：

```js
let obj = { name: 'ls', age: 3, sex: '男' };
let arr2 = Object.values(obj);
console.log(arr2); // ['ls', 3, '男']

```



```js
// 作用：将对象像数组一样循环
let obj = { name: 'ls', age: 3, sex: '男' };
Object.keys(obj).forEach(function (item) {
    console.log(item, obj[item]);
});

```





### 4. JSON

- **JSON.parse**

语法：JSON.parse( jsonstr)

描述：把json字符串转换成js对象

**json字符串: 数据类型一定是字符串** **'{}'  且json字符串中的属性名必须是双引号，如果值为字符串则字符串也必须是双引号**

json的值不可以是函数和undefined

- **JSON.stringify**

语法：JSON.stringify( object )

描述：把js对象转换成json字符串



代码案例：

```js
// JSON.parse(json字符串); 将json字符串转成js对象
// JSON.stringify(js对象); 将js对象转成json字符串

let obj = {
    name: 'zs',
    age: 3,
    fn: function () {},
    a: undefined,
    b: null,
};

let str = JSON.stringify(obj);
console.log(str); // '{"name":"zs","age":3,"b":null}'

let o = JSON.parse(str);
console.log(o); // {name: 'zs', age: 3, b: null}

```

作用：对象深拷贝

```js
let o = JSON.parse(JSON.stringify(obj));
o.name = 'li';
console.log(o); // {name: 'li', age: 3, b: null}
console.log(obj); // {name: 'zs', age: 3, a: undefined, b: null, fn: ƒ}

```





## 六、Set（了解）

ES6 提供了新的数据结构 Set。**它类似于数组，但是成员的值都是唯一的，没有重复的值**。

本质上Set是一个构造函数（实例化对象：创建一个set数据结构）

### 1. 基本用法

```js
new Set(数组 | 类数组)

```

代码案例：

```js
// 语法：new Set(数组 | 类数组);
// 特点：类似于数组，但是成员是唯一的

// 创建
let arr = [3, 2, 3, 2, 32, 3, 2];
let set = new Set(arr);
console.log(set); // {3, 2, 32}
console.log(typeof set); // 'object'

```



### 2. 常见方法

- **size**   获取set集合的长度
- **add(值)**  给集合添加值，返回新set
- **delete(值)**  删除某个值，返回布尔值，表示是否删除成功
- **has(值)**  查询这个值是否时集合的成员，返回布尔值
- **clear()**  清空集合,没有返回值

代码案例：

```js
// size   获取set集合的长度
console.log(set.size); // 3

// add(值)  给集合添加值，返回新set
let s = set.add(4);
console.log(s);

// delete(值)  删除某个值，返回布尔值，表示是否删除成功
let a = set.delete(3);
console.log(a); // true

// has(值)  查询这个值是否是集合的成员，返回布尔值
console.log(set.has(4)); // true

// clear()  清空集合,没有返回值
set.clear();
console.log(set);

```

### 3. 应用

数组去重

```js
let arr2 = [3, 2, 3, 2, 32, 3, 2];
console.log(Array.from(new Set(arr2))); // [3, 2, 32]

```



## 七、Map（了解）

ES6 提供了 Map 数据结构。**它类似于对象**，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。

**注意：对象的键只能是字符串或symbol，而map的键可以是任何数据类型**

本质上 Map 是一个构造函数（实例化对象：创建一个map数据结构）

### 1. 基本用法

```js
new Map( [ [key1,value1],[key2,value2],... ] )

```

```js
// 语法：new Map( [ [key1,value1], [key2,value2],... ] )
// 特点：类似于对象，但是对象的key只能是字符串和symbol，而map的key可以是任何数据类型

let map = new Map([
    [true, 1],
    [null, 2],
    [undefined, 3],
    [3, 4],
    ['ab', 52],
    [function () {}, 6],
    [[], 7],
    [{}, 8],
]);

console.log(map);
console.log(typeof map); // object

```



### 2. 常见方法

- **size**  获取Map的长度
- **set(key,val)**  添加一条数据
- **get(key)**  根据key获取val
- **has(key)**  是否存在key
- **delete(key)** 删除某条数据
- **clear()** 清空所有数据

代码案例：

```js
// size  获取Map的长度
console.log(map.size); // 8

// set(key,val)  添加一条数据
map.set('新增', 'abc');
console.log(map);

// get(key)  根据key获取val
console.log(map.get(null)); // 2

// has(key)  是否存在key
console.log(map.has(undefined)); // true

// delete(key) 删除某条数据
map.delete('新增');
console.log(map);

// clear() 清空所有数据
map.clear();
console.log(map);

```








## 八、解构赋值

### 1.概念及意义

ES6 允许按照一定**模式**，从数组和对象中提取值，对变量进行赋值，这被称为解构赋值

从而更加方便地从数组或对象中取值。解构赋值分为**数组解构**和**对象解构**

### 2.数组解构

语法：

```js
let [ 变量1, 变量2, ... ] = [ value1, value2, ... ]

```

关键：因为数组是有序的，两边模式一致，则可以右边的值一一对应的赋给左边



```js
let arr = ['刘备', '关羽', '张飞'];

```



#### 2.1 完全解构( 掌握 )

代码案例：前面和后面一一对应，按照顺序依次为左边的变量赋值

```js
let [a, b, c] = arr;
console.log(a, b, c); // 刘备 关羽 张飞

```



#### 2.2 不完全解构

代码案例：前面比后面少

```js
let [a, b] = arr;
console.log(a, b); // 刘备 关羽

```



#### 2.3 解构失败

代码案例：前面多，后面少，没有匹配上的值为undefined

```js
let [a, b, c, d] = arr;
console.log(a, b, c, d); // 刘备 关羽 张飞 undefined

```



#### 2.4 解构默认值

没有值为其变量赋值，或者赋的值为undefined ，默认值才生效

代码案例：

```js
let [a, b, c, d = '许帅康'] = arr;
console.log(a, b, c, d); // 刘备 关羽 张飞 许帅康

```

#### 2.5 缺省( 掌握 )

```js
// 缺省
let [a, , b] = arr;
console.log(a, b);

```



#### 2.6 数组解构应用(数据交换)

```js
// 案例：数据交换
let a = 10;
let b = 20;

// 之前方法
let temp = a;
a = b;
b = temp;
console.log(a, b);

// 新方法
[b, a] = [a, b];
console.log(a, b);

```



### 3.对象解构

对象的解构与数组解构有一个重要的不同。数组的元素是按次序排列的，而对象的属性没有次序。只和键名有关

语法：

```js
完整语法
let { key1:变量名1, key2:变量名2 } = { key1:value1, key2:value2,... }
作用：把key2属性中的值赋值给变量名2，把key1属性中的值赋值给变量名1
                               
简写语法：
let { key2, key1 } = { key1:value1, key2:value2,... }     
简写代表把同名属性的值给了一个和属性名相同的变量（我们就不用再思考起变量名）

```



```js
let person = {
    username: 'zs',
    age: 2
}

```



#### 3.1 完整语法

代码案例：

```js
let { username: name, age: a } = person;
console.log(name, a); // zs 2

```



#### 3.2 简写语法解构(推荐)

代码案例：

```js
let { username, age } = person;
console.log(username, age); // zs 2

```



#### 3.3 解构失败

代码案例：当没有对应的值的时候，就是解构失败，失败的值为undefined

```js
let { username, sex } = person;
console.log(username, sex); // zs undefined

```

#### 3.4 解构默认值（重点）

代码案例：当值对应的是undefined时，就可以使用默认值

```js
let { username, sex = '男' } = person;
console.log(username, sex); // zs 男

```



#### 3.5 使用场景

代码案例1：从事件对象中解构鼠标位置等信息

```js
// 从事件对象中取鼠标位置

var box = document.getElementById('box');

// 之前做法
box.onclick = function (ev) {
    console.log(ev.pageX);
    console.log(ev.pageY);
};

// 对象解构
box.onclick = function ({ pageX, pageY }) {
    console.log(pageX, pageY);
};

```

代码案例2：优化函数传参

如果函数需要传很多个参数，就要注意顺序。但我们可以改成只传一个对象，然后在形参哪里解构接收

```js
// 没有优化时，参数要一一对应
function fn(a, b, c, d) {
    console.log(a, b, c, d);
}
fn(1, 2, 3, 4);

```



```js
// 优化后，传一个对象，并解构，还可以有默认值
function fn({ a, b, c, d = 6 }) {
    console.log(a, b, c, d);
}
fn({ b: 2, a: 1, c: 3 })

```



![image-20220307162554396](/public/img/thirdStage/two/image-20220307162554396.png)



## 九、...运算符



### 1. rest参数(剩余参数)

接收剩余参数（如果没有定义形参，则接收所有参数），以数组形式接收，...rest参数必须放在最后，为了代替arguments。（用在函数形参哪里）

```js
function fn(a, b, c, d) {
    console.log(a, b, c, d);
}
fn(1, 2, 3, 4);

// ---------------------
// arguments实参的集合
function fn() {
    console.log(arguments);
}
fn(1, 2, 3, 4);

// -------------------
// ...rest参数
// 没有形参，接收所有的参数
function fn(...ab) {
    console.log(ab); // [1, 2, 3, 4]
}
fn(1, 2, 3, 4);

// 有形参，接收剩余的参数
function fn(a, b, ...rest) {
    console.log(rest); // [3, 4]
}
fn(1, 2, 3, 4);

```





### 2. spread参数(展开参数)

rest参数的逆运算。（用在实参哪里）

当作实参进行传递（展开数组的数据），展开数组、展开对象（ **可用于浅拷贝、数组合并、伪数组转数组** ）

- 当作实参进行传递（展开数组的数据）
- 实现数组、对象浅拷贝
- 数组合并、对象合并
- 伪数组转数组

```js
// 1、当作实参进行传递（展开数组的数据）
function fn(a, b, c, d) {
    console.log(a, b, c, d);
}
fn(1, 2, 3, 4);

var arr = [1, 2, 3, 4];
fn(...arr); // 展开arr，相当于把数组中的项放到了这个里面做为参数

// -------------------------------
// 2、实现数组浅拷贝
let arr = [11, 22, 33];
// 数组浅拷贝之前的方法：循环   concat   slice
let arr2 = [...arr];
arr2.push(44);
console.log(arr2);
console.log(arr);

// ------------------------
// 3、对象的浅拷贝
let obj = {
    name: 'zs',
    age: 3,
};
// 对象的浅拷贝之前的方法：循环   Object.assign()
let obj2 = {
    ...obj,
};
obj2.sex = '男';
console.log(obj2);
console.log(obj);

// -----------------------
// 4、数组合并
let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];
let arr = [...arr1, ...arr2];
console.log(arr); // [1, 2, 3, 'a', 'b', 'c']

// 5、对象合并
let obj1 = {
    name: 'zs',
    age: 3,
};
let obj2 = {
    sex: '男',
};
let o = Object.assign({}, obj1, obj2);
console.log(o);

let o = { ...obj1, ...obj2 };
console.log(o); // {name: 'zs', age: 3, sex: '男'}

// 6、伪数组转数组
let li = document.getElementsByTagName('li');
console.log(Array.from(li));

let aLi = [...li];
console.log(aLi);

```



案例1: 找数组最大值

```js
let arr = [32, 2, 4, 45, 5, 4];

console.log(Math.max.apply(Math, arr));
console.log(Math.max(...arr));

```



案例2：每个人薪水加5000

```js
var persons = [
    {
        username: '张飞',
        sex: '男',
        salary: 50000,
    },
    {
        username: '关羽',
        sex: '男',
        salary: 60000,
    },
];

let o = persons.map(function (item) {
    return {
        ...item,
        salary: item.salary + 2000,
    };
});
console.log(o);
console.log(persons);

```

