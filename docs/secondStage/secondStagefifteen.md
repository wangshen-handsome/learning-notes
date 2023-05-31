---

layout: secondStagefifteen

title: 二阶段 | 第十五天

---

## 一、编程思想

1、面向过程：面向过程思想强调的是**步骤**，当碰见问题时，思考的是“我该怎么做”，分析出解决问题所需的步骤，一步步的去实现。

2、面向对象：面向对象思想强调的是**对象**，当碰见问题时，思考的是“我该让谁来做”。这个“谁”其实就是对象。找合适的对象做合适的事情。而对象如何去做(采用什么样的步骤)我们就不关心了，最终把问题解决掉就可以了。



**相关概念：**

```js
var 对象 = {
    key1: value1,
    key2: value2,
    ...
}
```

1、**对象**：无序的名值对

2、**对象组成**：

- 1、属性：对象的特征描述，静态，名词
- 2、方法：对象的行为，动态（函数）

3、**对象的基本特征**：封装、继承、多态（了解）

4、**类和实例**

- 类：类是对象的类型模板
- 实例：实例是根据类创建的对象
- 面向对象学习，就是学习创建类（模板），利用类生成实例（月饼）

![]( /public/img/secondStage/fifteen/类和实例.jpg)





## 二、对象的读写

```js
var obj = {
    name: 'zs',
    age: 3,
    ab: undefined,
    fn: function () {
        console.log('前端开发');
    },
};

// 读
console.log(obj.name);
console.log(obj['age']);

// 写
obj.name = 'ls';
obj['age'] = 10;
console.log(obj);

// 遍历
for (var attr in obj) {
    console.log(attr, obj[attr]);
}

// ---------------------
// in操作符：检查对象是否有这个key，如果有，返回true，否则返回false
// 语法：key in 对象
// 关心的是是否有这个属性，而不关心值是什么，即便值是null和undefined
console.log('name' in obj);
console.log('age' in obj);
console.log('fn' in obj);
console.log('ab' in obj); // true
console.log('dd' in obj);

// -----------------------------
// delete操作符：删除对象的某一个key
// 语法：delete 对象.key
delete obj.ab;
delete obj.fn;

console.log(obj);
```



## 三、面向对象的创建

#### 1、字面量创建

```js
var obj1 = {
    name: 'zs',
    age: 3,
    fn: function () {
        console.log(this.name);
    },
};
console.log(obj1);
obj1.fn();

var obj2 = {
    name: 'ls',
    age: 5,
    fn: function () {
        console.log(this.name);
    },
};
console.log(obj2);
obj2.fn();

// 不足：代码冗余，创建多个一样的实例，就得写多次
```



#### 2、实例创建

```js
var obj1 = new Object(); // obj1就是实例
obj1.name = 'zs';
obj1.age = 3;
obj1.fn = function () {
    console.log(this.name);
};
console.log(obj1);

var obj2 = new Object(); // obj2就是实例
obj2.name = 'ls';
obj2.age = 5;
obj2.fn = function () {
    console.log(this.name);
};
console.log(obj2);

// 不足：代码冗余，创建多个一样的实例，就得写多次
```



#### 3、工厂模式

工厂模式归根到底是封装函数

```js
function createPerson(name, age) {
    // 准备原料
    var obj = new Object();

    // 加工
    obj.name = name;
    obj.age = age;
    obj.fn = function () {
        console.log(this.name);
    };

    // 出厂
    return obj;
}

var p1 = createPerson('zs', 3);
console.log(p1);

var p2 = createPerson('ls', 5);
console.log(p2);
```

**instanceof**

```js
// 我们认为p1和p2都是createPerson创建的，借用 instanceof 检查一下却返回false
// 因此工厂模式的不足：不能标识它是由谁创建的

// 对象 instanceof 函数，如果对象是函数创建的，返回true，否则返回false

console.log(p1 instanceof createPerson); // false
console.log(p1 instanceof Object); // true

console.log([] instanceof Array); // true
console.log([] instanceof Object); // true  Object是js世界的老大，所有的一切方法和属性，最终都在Object上面
```



#### 4、构造函数模式

**构造函数的特点：**

1、构造函数名首字母大写(为了区分普通函数，不是必须，是约定)

2、构造函数方法没有显示的创建对象(new Object())

3、直接将属性和方法赋值给 this 对象

4、没有 return 语句，不需要返回对象

5、通过构造函数创建对象，必须使用 new 运算符(直接调用跟普通函数一样)

```js
// 构造函数
function CreatePerson(name, age) {
    this.name = name;
    this.age = age;
    this.fn = function () {
        console.log('我不是老王');
    };
}
```

以这种方式调用构造函数实际上会经历以下4个步骤

(1) 创建一个新对象；

(2) 将构造函数的作用域赋给新对象（因此 this 就指向了这个新对象）；

(3) 执行构造函数中的代码（为这个新对象添加属性）；

(4) 返回新对象(隐式返回)。（因此p1就是这个新对象，同时p1也是this）

```js
var p1 = new CreatePerson('zs', 3);
console.log(p1);

var p2 = new CreatePerson('ls', 5);
console.log(p2);
```

不通过new调用，函数中的this就是window，且不会有返回值

```js
var p3 = CreatePerson('ls', 5);
console.log(p3); // undefined，属性和方法加给了window

```



优势：解决了工厂模式的不足，知道它是由谁创建的了

```js
console.log(p1 instanceof CreatePerson); // true
console.log(p1 instanceof Object); // true

```

不足：每次创建都会产生一模一样的函数，这样会占用内存空间

```js
// 解决：应该让它们每个实例共用同一个函数
alert(p1.fn);
alert(p2.fn);
console.log(p1.fn == p2.fn); // false

```

**对象的比较**

```js
// 基本数据类型
// 基本类型的比较，是值的比较
console.log(5 == 5); // true

// 引用数据类型
// 引用类型的比较，比较的是内存地址
console.log([] == []); // false

```



#### 5、原型创建对象

1、原型：

js每声明一个function，都有prototype原型，prototype原型是函数的一个默认属性，在函数的创建过程中由js编译器自动添加。

也就是说：当生产一个function对象的时候，就有一个原型prototype。**原型中存储对象共享的属性和方法。** 



2、原型链：当查找对象的某个属性的时候，先找自身，如果自身没有，则找顺着`__proto__`找到原型，如果原型也没有，则继续向上找，一直找到Object的原型。这个查找这个链表就是原型链。

```js
// 原型：每声明一个函数，这个函数都会有一个prototype的属性，它又指向一个对象，这个对象就是原型对象。原型对象保存着这类实例共有的属性和方法
var arr = new Array(1, 2, 3); // Array就是构造函数，arr就是实例

console.log(arr);
console.log(Array.prototype); // Array构造函数，通过构造函数.prototype可以访问原型
console.log(arr.__proto__); // arr是实例，可以通过实例.__proto__访问原型
console.log(Array.prototype == arr.__proto__); // true

```





**原型创建对象**

```js
function CreatePerson() {}
// console.log(CreatePerson.prototype); // 原型对象，{constructor: ƒ}
// console.log(CreatePerson.prototype.constructor); // 它默认有一个constructor，又指向构造函数

CreatePerson.prototype.name = 'zs';
CreatePerson.prototype.age = 3;
CreatePerson.prototype.fn = function () {
    console.log('我是前端开发');
};

var p1 = new CreatePerson();
console.log(p1);
console.log(p1.name);
console.log(p1.fn);

var p2 = new CreatePerson();
console.log(p2);
console.log(p2.name);
console.log(p2.fn);

console.log(p1.fn === p2.fn); // true

// 优势：解决了函数重复的问题
// 不足：不能传参，不能区分创建的多个实例

```

![image-20220424150627553](/public/img/secondStage/fifteen/image-20220424150627553.png)



#### 6、混合模式创建对象

```js
// 混合模式创建对象
// 构造函数 + 原型
// 构造函数里面放自己的属性 原型上放公共的属性

// 构造函数
function CreatePerson(name, age) {
    this.name = name;
    this.age = age;
}

// 原型
CreatePerson.prototype.showName = function () {
    console.log(this.name);
};
CreatePerson.prototype.showAge = function () {
    console.log(this.age);
};

var p1 = new CreatePerson('zs', 3);
console.log(p1);
console.log(p1.name);
p1.showName();

var p2 = new CreatePerson('ls', 5);
console.log(p2);
console.log(p2.name);
p2.showName();

console.log(p2.aa);
console.log(p2.toString);

```

![image-20220424152720674](/public/img/secondStage/fifteen/image-20220424152720674.png)



#### 7、动态混合模式

让代码有一个封装的感觉

```js
function CreatePerson(name, age) {
    this.name = name;
    this.age = age;

    if (!CreatePerson.prototype.showName) {
        CreatePerson.prototype.showName = function () {
            console.log(this.name);
        };
        CreatePerson.prototype.showAge = function () {
            console.log(this.age);
        };
    }
}

var p1 = new CreatePerson('zs', 3);
console.log(p1);

var p2 = new CreatePerson('ls', 5);
console.log(p2);

console.log(p1.showName == p2.showName); // true

```





## 四、面向对象的案例

**面向对象的选项卡**

原则：先写出普通的写法，然后改成面向对象写法

1、普通方法变型

尽量不要出现函数嵌套函数

可以有全局变量

把onload中不是赋值的语句放到单独函数中（init）

2、改成面向对象（）

​	先写构造函数

onload中创建对象，并init调用

全局变量就是属性

函数就是方法

(属性和方法前面，都要加this)

改this指向问题（尽量让this指向对象）



**结论**：我们改成面向对象了之后，感觉是不是更复杂了？确实是这样，确实是更复杂了，但是我们这个面向对象特别适合复杂的开发，对于简单的，不太推荐使用面向对象。面对复杂开发时，它特别容易扩展，同时，复用性特别强。上面的例子，多添加几个，就可以发现特别方便复用和扩展。

