---

layout: secondStagefourteen

title: 二阶段 | 第十四天

---

## 一、回调函数

- 异步：在做某一个操作的时候，其他的操作可以继续执行 （定时器  事件）
- 同步：在做某一个操作的时候，其他的操作只能等待（alert  for）

```js
setTimeout(function () {
    console.log(1);
}, 1000);
console.log(2);
```

```js
box.onclick = function(){
    console.log(3);
}
console.log(4);
```



- 回调函数

```js
// 需求：在fn这个函数里，3s以后拿到a+b的和

// 不可以
function fn(a, b) {
    setTimeout(function () {
        return a + b;
    }, 3000);
}
console.log(fn(3, 4));

// ---------------------------
// 解决：回调函数，是解决异步的一种有效方法
// 将函数做为参数传给另一个函数执行的函数，这个函数就是回调函数
function fn(a, b, callback) {
    setTimeout(function () {
        callback(a + b);
    }, 3000);
}

fn(3, 4, function (res) {
    console.log(res);
});
```







## 二、自执行函数（IIFE函数）

匿名函数，因为没有名字，所以不能调用，因此，匿名函数只能函数自执行   (函数)()



**自执行函数**：IIFE: Immediately Invoked Function Expression（立即调用函数表达式）

注意：自执行函数一定要注意后面加分号

- (函数)();
- (函数());

```js
(function () {
    console.log('我执行了');
})();

(function (a, b) {
    console.log(a + b);
})(3, 5);

var v = (function (a, b) {
    return a + b;
})(10, 20);
console.log(v);
```

**好处：**

- 1、当给一个不熟悉的环境写代码，用自执行函数包起来，防止变量冲突
- 2、避免全局变量污染



## 三、闭包

#### 1、闭包概念

- 1、函数嵌套函数
- 2、内部函数可以读取外部函数的变量、参数或者函数
- 3、这个内部函数在外部函数的外面被调用
- 则这个内部函数就是闭包



**闭包最大的特点是**：它能记住它的诞生环境，这些变量会一直存在内存中

**闭包的作用**：沟通函数内部和外部的桥梁

**闭包优点**：缓存数据，延伸变量的作用范围。

**闭包缺点**：如果大量的数据被缓存，可能造成内存泄漏，在使用闭包的时候要慎重。

```js
function fn() {
    var n = 10;
    return function () {
        n++;
        return n;
    };
}

var v = fn();
console.log(v()); // 11
console.log(v()); // 12
console.log(v()); // 13
```

#### 2、闭包模拟对象的私有属性

```js
var obj = {
    name: 'zs',
};
// name这个属性，即可以直接访问，又可以直接修改，它不是私有的
console.log(obj.name);
obj.name = 'ls';
console.log(obj);

// --------------------------------
// 闭包模拟对象的私有属性
function fn(num) {
    var n = num;
    return {
        getNum: function () {
            return n;
        },
        setNum: function (num) {
            n = num;
        },
    };
}

var obj = fn(3); // {}
console.log(obj); // obj这个对象好像有n这个属性，但是我们不能直接拿到，只能通过getNum 和 setNum拿和设置，这个东西就是一个私有的

console.log(obj.getNum()); // 3
obj.setNum(10); // 设置n
console.log(obj.getNum()); // 10

```

#### 2、循环中的闭包

```html
<ul>
    <li>吃饭</li>
    <li>睡觉</li>
    <li>打豆豆</li>
</ul>

<script>
    // 点击li，打出它的下标

    var li = document.getElementsByTagName('li');

    for (var i = 0; i < li.length; i++) {
        li[i].onclick = function () {
            console.log(i);
        }
    }

    // ------------------------------

    // 解决方式1
    for (var i = 0; i < li.length; i++) {
        li[i].index = i; // 自定义属性
        li[i].onclick = function () {
            console.log(this.index);
        }
    }

    // ------------------------------
    // 解决方式2
    for (var i = 0; i < li.length; i++) {
        li[i].onclick = (function (i) {
            return function () {
                console.log(i);
            }
        })(i);
    }

    for (var i = 0; i < li.length; i++) {
        (function (i) {
            li[i].onclick = function () {
                console.log(i);
            }
        })(i);
    }
</script>
```



## 四、递归

递归函数就是在函数内部调用函数本身，这个函数就是递归函数。递归函数分两步：递和归。

递归函数的作用和循环效果一样，递归的基本思想是把规模大的问题转化为规模小的相似的子问题来解决。

```js
// 求5的阶乘   5*4*3*2*1 = 120

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
// console.log(factorial(5));

// 递
// factorial(5)
// 5 * factorial(4)
// 5 * 4 * factorial(3)
// 5 * 4 * 3 * factorial(2)
// 5 * 4 * 3 * 2 * factorial(1)

// 归
// 5 * 4 * 3 * 2 * 1
// 5 * 4 * 3 * 2
// 5 * 4 * 6
// 5 * 24
// 120
```



```js
var arr = [4, 6, 2, 6, 5, 8, 4, 7, 3];
console.log(fn(arr));

// 快速排序
// 取出数组的第一项，其它项依次同第一项比较，如果比它下，放在左边的数组，如果比它大，放在右边的数组，递归调用刚才的方法

function fn(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    var num = arr.shift(); // 取出数组的第一项
    var left = []; // 存储比它小的数
    var right = []; // 存储比它大的数
    for (var i = 0; i < arr.length; i++) {
        var v = arr[i];
        if (v < num) {
            left.push(v);
        } else {
            right.push(v);
        }
    }
    return fn(left).concat(num, fn(right));
}

```





## 五、防抖与节流

在前端开发的过程中，我们经常会需要绑定一些持续触发的事件，如 resize、scroll、mousemove 等等，但有些时候我们并不希望在事件持续触发的过程中那么频繁地去执行函数。防抖和节流就能很好的解决这个这个问题。

#### 1、防抖debounce

防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。

##### 1、非立即执行

非立即执行版的意思是触发事件后函数不会立即执行，而是在 n 秒后执行，如果在 n秒内又触发了事件，则会重新计算函数执行时间。

```js
var h1 = document.querySelector('h1');
var n = 0;
function fn() {
    n++;
    h1.innerText = n;
}

// fun即要执行的函数  wait时间
function debounce(fun, wait) {
    var timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(fun, wait);
    };
}
var v = debounce(fn, 1000);
document.onmousemove = v;

```

##### 2、立即执行

立即执行版的意思是触发事件后函数会立即执行，然后 n 秒内不触发事件才能继续执行函数的效果。

```js
var h1 = document.querySelector('h1');
var n = 0;
function fn() {
    n++;
    h1.innerText = n;
}

function debounce(fun, wait) { // fun:事件处理函数 wait:等待时间
    var timer; // 维护全局纯净，借助闭包来实现
    return function () {
        if (timer) {
            clearTimeout(timer)
        };
        var tag = !timer; // 第一次时，tag是真
        timer = setTimeout(function () {
            timer = null;
        }, wait);

        if (tag) {
            fun();
        };
    }
}
var v = debounce(fn, 1000);
document.onmousemove = v;

```



#### 2、节流throttle

节流，就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。可以通过时间戳、定时器两种方式实现。

##### 1、时间戳方式

事件会立即执行，并且间隔 1 秒执行 1 次

```js
var h1 = document.querySelector('h1');
var n = 0;
function fn() {
    n++;
    h1.innerText = n;
}

function throttle(fun, wait) {
    var prev = 0; // 上一次的时间戳
    return function () {
        var now = Date.now(); // 当前时间戳
        if (now - prev > wait) {
            fun();
            prev = now;
        }
    };
}

var v = throttle(fn, 1000);
document.onmousemove = v;

```

##### 2、定时器方式

事件会1秒后执行，并且间隔 1 秒执行 1 次

```js
var h1 = document.querySelector('h1');
var n = 0;
function fn() {
    n++;
    h1.innerText = n;
}

function throttle(fun, wait) { // fun要执行的函数   wait时间
    var timer;
    return function () {
        if (!timer) {
            timer = setTimeout(function () {
                fun();
                timer = null;
            }, wait);
        }
    }
}

var v = throttle(fn, 1000);
document.onmousemove = v;

```



## 六、call与apply

- 函数.call(新的this指向, 参数1, 参数2, ...)
- 函数.apply(新的this指向, [参数1, 参数2, ...])

作用：调用函数，并修改函数中的this指向

第一个参数如是null和undefined，则this指向为window

区别：call的后续参数是一个一个传入的，而apply是以一个数组的形式传入的

```js
function fn(a, b) {
    console.log(this);
    console.log(a, b);
}

fn(3, 4); // window  3,4

// 需求：让fn函数调用时，它的this指向是document
fn.call(document, 5, 6); // document 5,6
fn.apply(document, [10, 20]); // document 10,20

fn.call(null, 1, 2); // window
fn.call(undefined, 1, 2); // window

```



```js
var arr = [4, 3, 45, 23, 5, 3];

// 需求：求数组的最大值

console.log(Math.max(4, 3, 45, 23, 5, 3));

// 调用Math.max()，并把第二个数组参数传入，就可以获取最大值
console.log(Math.max.apply(Math, arr));

```



