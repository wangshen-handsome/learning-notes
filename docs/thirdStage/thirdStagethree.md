## 一、函数扩展

### 1. 箭头函数基本用法

箭头函数主要用在回调函数中，如map、forEach等，一般不用在事件函数、对象的方法中。

语法：箭头函数通过变量声明的形式去定义它，本质上是变量中存储了一个函数

```js
let 函数名 = ( 参数列表 ) => {
    ......代码块
	return 返回值
}
```

#### 参数相关特性

- 没有参数
- 多个参数
- 一个参数（有且只有一个参数，则可以省略小括号 ）
- 剩余参数（箭头函数没有arguments，只能使用rest接收剩余参数）

```js
// - 没有参数
let fn = () => {
    console.log('我是箭头函数，我执行了');
    return '小王';
};
console.log(fn());

// - 多个参数
let fn = (a, b) => {
    return a * b;
};
console.log(fn(3, 4));

// - 一个参数（有且只有一个参数，则可以省略小括号 ）
let fn = a => {
    return a * a;
};
console.log(fn(3));

// - 剩余参数（箭头函数没有arguments，只能使用rest接收剩余参数）
let fn = (a, ...rest) => {
    // console.log(arguments); // 箭头函数中没有arguments
    console.log(rest);
};
fn(1, 2, 3, 4);
```







#### 返回值的特性

- 完整的写法：没有省略return关键字
- 省略return：函数中只有一行代码，可以省略return，且同时花括号也需要省略
- 省略return，且返回对象时的注意事项（对象外面要加小括号，不然分不清大括号是函数的还是对象的） 

```js
// - 完整的写法：没有省略return关键字
let fn1 = (a, b) => {
    a++;
    b++;
    return a * b;
};
console.log(fn1(2, 3));

// - 省略return：函数中只有一行代码，可以省略return，且同时花括号也需要省略
let fn2 = (a, b) => a * b;
console.log(fn2(2, 3));

let fn3 = a => a * a;
console.log(fn3(3));

// - 省略return，且返回对象时的注意事项（对象外面要加小括号，不然分不清大括号是函数的还是对象的）
// let fn4 = (name, age) => {
//   return {
//     name,
//     age,
//   };
// };

let fn4 = (name, age) => ({ name, age });

console.log(fn4('zs', 3)); // {name: 'zs', age: 3}
```







#### 不做为构造函数

new调用时，会报错

```js
let Person = function (name, age) {
    this.name = name;
    this.age = age;
};
let p1 = new Person('zs', 3);
console.log(p1); // {name: 'zs', age: 3}

// ----------------------
let Fn = () => {};
new Fn(); // Fn is not a constructor (箭头函数不能用于构造函数)
```





### 2. 箭头函数中this问题

回忆普通函数、事件函数、对象的方法调用、call/apply调用时函数中的this

```js
// 函数中的this不是在定义的时候确定的，而是调用的时候确定的
let fn = function () {
    console.log(this);
}

// 1、直接调用
fn(); // window

// 2、事件调用
document.onclick = fn; // document

// 3、作为对象的方法调用
let obj = {
    fn,
};
obj.fn(); // obj

// 4、call/apply改函数中的this指向
fn.call(document); // document
```







**箭头函数没有自己的this，箭头函数的this取决于它所处的上层环境是哪个对象，那么此this就指向这个对象。**

普通函数可以通过事件、apply/call等改变this指向，但是箭头函数都不能。

分别以：普通函数、事件函数、call/apply、构造函数试试

```js
// 箭头函数没有自己的this，箭头函数的this取决于它所处的上层环境是哪个对象，那么此this就指向这个对象
// 箭头函数中的this是定义的时候确定的，而不是调用的时候确定的
// 箭头函数定义在什么环境下，它的this就确定了。不能通过事件函数、call、apply等改this
let fn1 = () => {
    console.log(this);
};

// 1、直接调用
fn1(); // window

// 2、事件调用
document.onclick = fn1; // window

// 3、对象的方法
let obj = {
    fn1: fn1,
};
obj.fn1(); // window

// 4、call和apply调用
fn1.call(document);

// 5、构造函数中调用
function Person(name, age) {
    this.name = name;
    this.age = age;

    let fn = () => {
        console.log(this); // p1
    };
    fn();
}

let p1 = new Person('zs', 3); // {name: 'zs', age: 3}
console.log(p1);
```



#### 关于环境的补充

只有**script全局和函数内才能称为环境**，即全局环境和局部环境



如下，对象的花括号不属于环境。

```js
let obj = {
    fn1:function(){
        console.log('fn1 function',this)
    },
    fn2(){
        console.log( 'fn2 简写',this );
    },
    fn3:()=>{
        console.log( 'fn3 箭头',this );
    }
}

obj.fn1(); // obj
obj.fn2(); // obj
obj.fn3(); // window
```

### 3. 箭头函数的使用场景

加薪优化，可以写成一行

```js
let persons = [
    {
        username:'张飞',
        sex:'男',
        salary:50000 
    },
    {
        username:'关羽',
        sex:'男',
        salary:60000
    }
]

// let o = persons.map((item) => {
//   return {
//     ...item,
//     salary: item.salary + 2000,
//   };
// });

let o = persons.map(item => ({ ...item, salary: item.salary + 2000 }));
console.log(o);
```

全选优化，可以写成一行

```js
var cartGoods = [
    {
        goodsname:'小米10',
        price:5000,
        isChecked:true,//代表是否选中了
    },
    {
        goodsname:'苹果10',
        price:3000,
        isChecked:true,//代表是否选中了
    }
]

// let o = cartGoods.every((item) => {
//   return item.isChecked;
// });

let o = cartGoods.every(item => item.isChecked);
console.log(o);

```



### 4. 函数参数默认值

类似于解构赋值中的默认值，函数的参数也可以设置默认值

```js
let [a, b, c = '小王'] = ['刘备', '关羽']

```



```js
// 之前的做法
function fn(a, b) {
    b = typeof b === 'undefined' ? 1 : b;
    return a * b;
}
console.log(fn(2, 3));
console.log(fn(2));

// ------------------------------
// 使用函数默认参数
function fn(a, b = 1) {
    return a * b;
}
console.log(fn(2, 3)); // 6
console.log(fn(2)); // 2

```

案例：封装一个方法，用于创建元素并添加到页面中

```js
function createBox(w = 100, h = 100, bg = 'green') {
    let box = document.createElement('div');
    box.style.width = w + 'px';
    box.style.height = h + 'px';
    box.style.background = bg;
    document.body.appendChild(box);
}
createBox(200, 300, 'red');
createBox();

```



最优：用对象解构、对象解构默认值、和函数参数默认值

```js
// 更好的方法，传入一个对象
function createBox({ w = 100, h = 100, bg = 'red' } = {}) {
    let box = document.createElement('div');
    box.style.width = w + 'px';
    box.style.height = h + 'px';
    box.style.background = bg;
    document.body.appendChild(box);
}

createBox({ w: 200, h: 200, bg: 'yellow' });
createBox({ w: 200, h: 200 });
createBox();

```





## 二、类class

### 1.面向对象编程

#### 1.1 概念

面向对象是一种以对象为中心的编程思想。面向对象是相对于面向过程来讲的，面向对象把相关的数据和方法组织为一个整体来看待，从更高的层次来进行系统建模。

PHP、JAVA、Python、javaScript  都可以使用面向对象思想编写功能。

###### 面向过程

面向过程思想强调的是步骤，当碰见问题时，思考的是**“我该怎么做”**，分析出解决问题所需要的步骤，一步步的去实现。
例如：想吃蛋炒饭，首先想到的是我要如何做，包括哪些步骤。比如：起锅烧油，加入鸡蛋，加入米饭，加入调料，翻炒，装盘等。

###### 面向对象

面向对象思想强调的是对象（是一个整体），当碰见问题时，思考的是“**我该让谁来做**”。这个**“谁”**其实就是对象。找合适的对象做合适的事情。而对象如何去做（采用什么样的步骤）们就不关心了，最终把问题解决掉就可以了。

例如：还是想吃蛋炒饭，首先想到的是让谁来帮我做蛋炒饭，比如找厨师来帮我做蛋炒饭。具体厨师如何去做这个蛋炒饭，做饭的步骤是怎么样的我们并不关心。只要最终把蛋炒饭做好就可以了。

不同的对象有不同的功能（ 对于你来说：去下单、吃即可 ），对象由**属性和方法**组成。



#### 1.2 类和对象的关系

现实中先有对象，根据不同的对象有着相似的特点（归为一类）

程序中（先有类，使用类实例化对象），之前都是使用构造函数创建对象

es5的构造函数有一些问题：一是方法必须加在原型上，二是使用function创建对象对于其它语言的工程师觉得很另类 。



### 2. class的基本使用

1、传统方式创建对象

构造函数就可以理解为类

```js
// 传统方式创建对象: 构造函数 + 原型链
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 加在构造函数下面静态属性和静态方法
Person.AA = '我是静态属性';
Person.Fn = function () {
    console.log('我是静态方法');
};

// 原型链上添加方法
Person.prototype.showName = function () {
    console.log(this.name);
};
Person.prototype.showAge = function () {
    console.log(this.age);
};

// ---------------------
let p1 = new Person('zs', 3);
console.log(p1);

// 访问列态属性和静态方法:必须通过构造函数来访问
console.log(Person.AA);
Person.Fn();

```



![image-20220308142750603](/public/img/thirdStage/three/image-20220308142750603.png)



2、ES6创建类

```js
class 类名 {
    // 1、静态属性和静态方法：加在构造函数上面，因为构造函数是引用类型，所以可以添加属性或方法，而静态属性或方法，必须通过构造函数来访问
    static 静态属性 = 值;
	static 静态方法 = 函数;

    // 2、constructor为构造器，实例化的时候(即new调用的时候)，此构造器函数自动执行，它的参数都是new时传过来的参数。构造器中的this为实例化出来的哪个对象
    constructor(参数) {}

    // 3、方法都加在原型上
    方法1() { }
    方法2() { }
}

```

如：

```js
// 给人有一种封装的感觉，而且语法规范。最终解析出来代码和传统创建方式一模一样
class Person {
    // 1、静态属性静态方法
    static AA = '我是静态属性';
    static Fn = function () {
        console.log('我是静态方法');
    };

    // 2、实例上的属性和方法
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // 3、原型上的属性和方法
    showName() {
        console.log(this.name);
    }
    showAge() {
        console.log(this.age);
    }
}

let p1 = new Person('zs', 3);
console.log(p1);

console.log(Person.AA);
Person.Fn();

```



### 3.静态属性和静态方法

**实例属性和实例方法**：加在实例上面或者原型上，都可以通过实例来访问，所以称为实例属性和实例方法

**静态属性和方法**：加在构造函数上面，因为构造函数是引用类型，所以可以添加属性或方法，而静态属性或方法，必须通过构造函数来访问

静态方法举列：Array.of、Array.from、Array.isArray、Object.keys、Object.values、Object.assign、JSON.parse、JSON.stringify、Date.now



### 4. 继承

Class 可以通过`extends`关键字实现继承，这比 ES5 的通过修改原型链实现继承，要清晰和方便很多。

```js
class 子类 extends 父类{
	constructor() {
        super(); // super相当于调用父的constructor，必须写在子的constructor的第一行
    }
}

```



#### 基本用法

```js
// 父类
class Person {
    // 1、静态属性静态方法
    static AA = '我是静态属性';
    static Fn = function () {
        console.log('我是静态方法');
    };

    // 2、实例上的属性和方法
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // 3、原型上的属性和方法
    showName() {
        console.log(this.name);
    }
    showAge() {
        console.log(this.age);
    }
}

// 子类    继承父类，本质就是之前的寄生组合继承
class SmallPerson extends Person {
    constructor(name, age, sex) {
        super(name, age); // 相当于调用父的constructor
        this.sex = sex; // 再加自己的
    }
	// 自己原型上添加方法
    showSex() {
        console.log(this.sex);
    }
}

let s1 = new SmallPerson('zs', 3, '男');
console.log(s1);

// 子类也有父类的静态属性和静态方法
console.log(SmallPerson.AA);
SmallPerson.Fn();

```



![image-20220308144648934](/public/img/thirdStage/three/image-20220308144648934.png)

### 5.面向对象的应用场景

对面向对象不要有负担，你只要懂语法即可。我们更多的是使用面向对象思想封装的框架去写业务，而不是用面向对象思想封装框架。

#### 5.1 封装工具原理

代码案例：

```js
class Js {
    constructor() {
        this.version = '1.2.2'
    }
    String() {
        return {
            slice() {

            },
            indexOf() {

            }
        }
    }
    Array() {
        return {
            push() {

            },
            pop() {

            }
        }
    }
}


let js = new Js();
console.log(js);

let array = js.Array();
console.log(array);

let string = js.String();
console.log(string);

```



## 三、iterator 迭代器（了解）

迭代：即遍历、循环



### 1. 简介

Iterator是一种接口机制，**是为各种不同的数据结构提供统一的访问（循环）机制**。

现在有Array / Object / Set / Map / String / NodeList / HTMLCollection / Arguments 等多种数据结构，每种都有对应的遍历方法，所以 ES6 加入了Iterator遍历器，只要拥有这个Iterator遍历器，就都可以使用**for...of**进行遍历，这样统一方便。（但是对象没有遍历器）



### 2. 作用

- 为各种数据结构，提供一个统一的、简便的访问接口
- 使得数据结构的成员能够按某种次序排列
- ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of使用
- Iterator是一个抽象的概念，具体的由 for...of / Symbol.iterator 实现

**只要可遍历的数据结构的原型上有 Symbol.iterator 属性，则此数据就可以使用for...of进行遍历。唯独Object没有。**



### 3. for...of

**注意事项：在使用for...of遍历数据时, 要确保被遍历的数据, 拥有Iterator功能**

原生具备iterator接口的数据结构有：

Array / Set / Map / String / NodeList / HTMLCollection / Arguments



分别以：字符串、数组、NodeList、set、map、对象演示

```js
// 只要这个数据类型在原型上有Symbol.iterator，它就可以被for...of遍历(对象没有)
// 字符串、数组、NodeList、set、map、对象

// 字符串
let str = 'hello';
for (let s of str) {
    console.log(s);
}
console.log(String.prototype);

// 数组
let arr = [11, 22, 33];
for (let s of arr) {
    console.log(s);
}
console.log(Array.prototype);

// NodeList
let btn = document.querySelectorAll('button');
console.log(btn);
for (let s of btn) {
    console.log(s);
}

// set
let set = new Set(['a', 'b', 'c', 'a']);
console.log(set);
for (let s of set) {
    console.log(s);
}

// map
let map = new Map([
    ['a', 1],
    ['b', 2],
]);
console.log(map);
for (let s of map) {
    console.log(s); // 数组 ['a', 1]    ['b', 2]
}

// 对象(因为对象的原型上没有Symbol.iterator，因此对象不可以被for...of)
let obj = {
    name: 'zs',
    age: 3,
};
console.log(obj);
for (let s of obj) {
    console.log(s);
}

```







### 4. 数组和Iterator

**目的**：利用数组的遍历器分析 Symbol.iterator

1、数组的原型上有一个 Symbol.iterator 属性，这个属性指向一个函数，这个函数的this是数组

2、Symbol.iterator 这个函数执行完毕会返回一个对象

3、这个对象的原型上有一个next方法，每调用一次next则返回一个值对象

​	 { value:当前值, done: true/false }  value即值  done指结束了吗



```js
let arr = [11, 22, 33];

// 获取数组原型上的 Symbol.iterator，它是一个函数，函数中的this就是被调用的这个数组
// console.log(Array.prototype[Symbol.iterator]);
// console.log(arr[Symbol.iterator]);
// console.log(Array.prototype[Symbol.iterator] === arr[Symbol.iterator]); // true

let iterator = arr[Symbol.iterator]();
console.log(iterator); // 这个函数执行会返回一个对象，这个对象的原型上有一个next方法

// next方法，每调一次，返回一个对象出来，对象有value和done两个属性
console.log(iterator.next()); // {value: 11, done: false}
console.log(iterator.next()); // {value: 22, done: false}
console.log(iterator.next()); // {value: 33, done: false}
console.log(iterator.next()); // {value: undefined, done: true}

```



### 5. 为对象部署iterator接口

代码案例：

```js
// 对象没有iterator接口，就不能使用for-of
// 我们想让对象也能使用for-of，则在它的原型上，布署这样一个方法（在对象的原型上布署）


// 1、数组的原型上有一个 Symbol.iterator 属性，这个属性指向一个函数，这个函数的this是数组
// 2、Symbol.iterator 这个函数执行完毕会返回一个对象
// 3、这个对象的原型上有一个next方法，每调用一次next则返回一个值对象
// ​	 { value:当前值, done: true/false }  value即值  done指结束了吗

Object.prototype[Symbol.iterator] = function () {
    let keys = Object.keys(this); // ['name', 'age']
    let values = Object.values(this); // ['zs', 3]
    let index = 0;

    return {
        next() {
            let arr = [keys[index], values[index]];
            index++;
            return {
                value: arr,
                done: index > keys.length,
            };
        },
    };
};

let obj = {
    name: 'zs',
    age: 3,
    sex: '男',
};
for (let s of obj) {
    console.log(s);
}

```



**总结重点：let、const、模板字符串、对象的简写、解构赋值、...运算符、箭头函数。**