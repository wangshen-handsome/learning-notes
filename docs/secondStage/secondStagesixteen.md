---

layout: secondStagesixteen

title: 二阶段 | 第十六天

---

## 一、扩展原型上的方法

#### 1、原码中的构造函数

```js
String Number Boolean Function Array Object RegExp Date Error
```



#### 2、扩展字符串的indexOf方法

让它兼容IE8及以下

```js
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (val, index) {
        index = typeof index === 'undefined' ? 0 : index;
        for (var i = index; i < this.length; i++) {
            if (this[i] === val) {
                return i;
            }
        }
        return -1;
    }
}

var arr = [2, 3, 42, 3, 3, 2];
console.log(arr.indexOf(3)); // 1
console.log(arr.indexOf(3, 2)); // 3
```

#### 3、扩展字符串的trim方法

让它兼容IE8及以下

```js
if (!String.prototype.trim) {
    String.prototype.trim = function () {
        var re = /^\s+|\s+$/g;
        return this.replace(re, '');
    }
}
var str = '   abc   ';
console.log('(' + str.trim() + ')');
```





## 二、继承

孩子继承父亲，必须得有两方

#### 1、原型链继承

```js
// 父类
function Student() {
    this.job = '学生';
    this.ah = ['吃饭', '打豆豆', '跳舞'];
}
Student.prototype.showJob = function () {
    console.log(this.job);
};

// 子类
function SmallStudent() {}

// 一句话实现继承：原型链继承，将父的实例赋给子的原型
// 但是它有很多的问题，如果属性中有引用类型，会一改全改
SmallStudent.prototype = new Student();

// -----------------------
var s1 = new SmallStudent();
console.log(s1);
// console.log(s1.job);
// console.log(s1.ah);
// s1.showJob();
s1.ah.push('捉毛毛虫');

var s2 = new SmallStudent();
console.log(s2.ah);
```

![image-20220425104809497](/public/img/secondStage/sixteen/image-20220425104809497.png)



#### 2、对象冒充继承

```js
// 父类
function Student() {
    this.job = '学生';
    this.ah = ['吃饭', '打豆豆', '跳舞'];
}
Student.prototype.showJob = function () {
    console.log(this.job);
};

// 对象冒充继承：在子的构造函数中，调父的函数，并用call改this指向
// 不足：只能继承构造函数中的属性，不能继承原型链上的方法
// 好处：解决了原型链继承的不足
// 子类
function SmallStudent() {
    Student.call(this); // 继承了父的两个属性
}

var s1 = new SmallStudent();
console.log(s1);
// console.log(s1.job);
// console.log(s1.ah);
// s1.showJob();
s1.ah.push('打豆豆');

var s2 = new SmallStudent();
console.log(s2);
console.log(s2.ah);
```

![image-20220425104843230](/public/img/secondStage/sixteen/image-20220425104843230.png)



#### 3、组合继承

```js
// 父类
function Student() {
    this.job = '学生';
    this.ah = ['吃饭', '打豆豆', '跳舞'];
}
Student.prototype.showJob = function () {
    console.log(this.job);
};

// 子类
// 组合继承：对象冒充继承属性，原型链继承方法
// 问题
// 1、同样的属性在原型链中会出现多次
// 2、constructor本应该指向自己的构造函数，但是它却指向了父的构造函数

function SmallStudent() {
    Student.call(this);
    this.name = '小花';
}
SmallStudent.prototype = new Student();

// -------------------------
var s1 = new SmallStudent();
console.log(s1);
console.log(s1.constructor);
// console.log(s1.ah);
// console.log(s1.job);
// s1.showJob()
```

![image-20220425113806124](/public/img/secondStage/sixteen/image-20220425113806124.png)

#### 4、寄生组合继承

```js
// 父类
function Student() {
    this.job = '学生';
    this.ah = ['吃饭', '打豆豆', '跳舞'];
}
Student.prototype.showJob = function () {
    console.log(this.job);
};

// 子类
// 寄生组合继承
// 对象冒充继承属性
function SmallStudent() {
    Student.call(this);
    this.name = '小花';
}
// 四句话实现继承父的原型上的方法
var F = function () {};
F.prototype = Student.prototype;
SmallStudent.prototype = new F();
SmallStudent.prototype.constructor = SmallStudent;

// 在四句话的后面，可以再添加自己原型上的方法
SmallStudent.prototype.showName = function () {
    console.log(this.name);
};

// --------------------------------
var s1 = new SmallStudent();
console.log(s1);
console.log(s1.ah);
console.log(s1.constructor);
```

![image-20220425113852622](/public/img/secondStage/sixteen/image-20220425113852622.png)

继承的终极实现

```js
// 父类
function Student() {
    this.job = '学生';
    this.ah = ['吃饭', '打豆豆', '跳舞'];
}
Student.prototype.showJob = function () {
    console.log(this.job);
};

// 子类
// 寄生组合继承: 是我们继承的标准方式
function SmallStudent() {
    Student.call(this); // 继承属性
    this.name = '小花'; // 下面再写自己的属性
}
inherits(SmallStudent, Student); // 继承原型上的方法
// 下面再写自己的方法
SmallStudent.prototype.showName = function () {
    console.log(this.name);
};

// --------------------------------
var s1 = new SmallStudent();
console.log(s1);
console.log(s1.ah);
console.log(s1.constructor);

function inherits(Child, Parent) {
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}
```







## 三、less

LESS 是一个 CSS 预处理器，是一种动态样式表语言，扩展了 CSS 的功能。 

CSS 预处理器是一种脚本语言，可扩展 CSS 并将其编译为常规 CSS 语法，以便可以通过Web 浏览器读取。

它提供诸如变量，函数， mixins 和操作等功能，可以构建动态 CSS，可以让 CSS 更加简洁，适用性更强，可读性更强，更易维护。



#### LESS 优点

- LESS 轻松地生成可在浏览器中工作的 CSS。
- LESS 能够嵌套编写更干净，组织良好的代码。
- 通过使用变量可以更快地实现维护。
- LESS 能够通过在规则集中引用它们来轻松地重用整个类。



#### less在vscode中的配置

1、安装插件：Easy LESS

2、配置

vscode -> 设置 -> 搜索Easy LESS  -> 点击在settings.json中编缉

![image-20210630165800995](/public/img/secondStage/sixteen/image-20210630165800995.png)

![image-20210630165655070](/public/img/secondStage/sixteen/image-20210630165655070.png)

```json
"less.compile": {
    "compress": false,
    "sourceMap": true,
    "out": "..\\css\\"
},

```



#### less语法

```less
// 1、注释
// 这个注释不会编译，即在css中不可见
/* 这个注释在会编译，在css中可见 */

// 2、引入外部的less文件，后缀可以不写，如果引css，后缀必须写
@import './base';

#box {
    width           : 200px;
    height          : 200px;
    background-color: red;
}

/* 2、层次嵌套------------------------------- */
#main {
    color: #ccc;

    h1 {
        color: #f00;

        p {
            color: #000;
        }
    }
}

/* 3、&引用父元素------------------------------- */
a {
    color: #ccc;

    &:hover {
        color: red;
    }
}

/* 4、变量------------------------------- */
@defaultColor: #666;
@color       : #ff0876;

h1 {
    color: @defaultColor;
}

h3 {
    color: @color;
}

/* 5、普通混入------------------------------- */
// 混入相当于是一个函数
.border {
    border       : 1px solid #f00;
    border-bottom: 3px solid #ff0ff0;
}

#main a {
    .border; // 把上面的样式带入这个标签
    color: aqua;
}

/* 6、混入参数------------------------------- */
// 相当于定义一个函数
.border-radius(@radius) {
    border-radius        : @radius;
    -moz-border-radius   : @radius;
    -webkit-border-radius: @radius;
}

.title {
    .border-radius(14px);
}

/* 7、混入参数默认值------------------------------- */
.rounded-corners (@radius: 5px) {
    // 默认值为 5px，没有传递参数时使用
    border-radius        : @radius;
    -moz-border-radius   : @radius;
    -webkit-border-radius: @radius;
}

.title {
    // .rounded-corners; // 不传参数时使用默认值
    .rounded-corners(10px); // 传参时以传递的参数为主
}

/* 8、arguments------------------------------- */
.box-shadow (@x: 0, @y: 0, @blur: 1px, @color: #000) {
    -moz-box-shadow   : @arguments;
    -webkit-box-shadow: @arguments;
    box-shadow        : @arguments;
}

.box {
    .box-shadow(2px, 2px);
}

/* 9、继承------------------------------- */
.public {
    width : 100px;
    height: 100px;
}

nav ul {
    &:extend(.public);
    list-style: none;
}

/* 10、运算------------------------------- */
@fontSize: 10px;

.myclass {
    font-size: @fontSize * 2;
    width    : 120px-34;
    color    : green;
}

```

