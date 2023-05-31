---

layout: secondStagefive

title: 二阶段 | 第五天

---

## 一、函数封装

**函数的封装**是把一个或者多个功能通过函数的方式封装起来，对外只提供一个简单的函数接口



#### 1、获取元素样式

##### 1、标准浏览器

```
方式一(IE8及以下不支持)：Computed计算，获取计算以后的样式，返回的是一个对象
window.getComputedStyle(元素)
```

```js
var d = window.getComputedStyle(box);
console.log(d); // 返回一个对象，即这个元素所有的样式
console.log(typeof d); // 'object'

console.log(window.getComputedStyle(box).width);
console.log(window.getComputedStyle(box).height);
console.log(window.getComputedStyle(box).backgroundColor);
```



##### 2、IE浏览器支持

```
方式二(IE8及以下支持)：current当前的，获取当前的样式，返回的是一个对象
元素.currentStyle
```

```js
console.log(box.currentStyle);
console.log(box.currentStyle.width);
console.log(box.currentStyle.height);
console.log(box.currentStyle.backgroundColor);
```



#### 3、浏览器能力判断

```js
// 浏览器能力的判断，在IE8及以下，返回undefined，在IE9及以上，返回一个函数
// console.log(window.getComputedStyle);

if (window.getComputedStyle) {
    // IE9及以上
    console.log(window.getComputedStyle(box).width);
} else {
    // IE8及以下
    console.log(box.currentStyle.width);
}
```



#### 4、封装

- 1、声明函数，把主要代码放入函数中
- 2、找函数中可变量做参数，代入函数中
- 3、调用，调试

```js
// 封装  ele元素  attr样式属性
function getStyle(ele, attr) {
    if (window.getComputedStyle) {
        // IE9及以上
        return window.getComputedStyle(ele)[attr];
    } else {
        // IE8及以下
        return ele.currentStyle[attr];
    }
}
console.log(getStyle(box, 'width'));
console.log(getStyle(box, 'height'));
console.log(getStyle(box, 'backgroundColor'));
```









## 二、this

- this：谁调用了函数，this就指向谁
- this不是在定义的时候确定的，而是在调用的时候确定的



1、普通函数中的this

2、事件函数中的this

3、对象方法中的this



```js
// 函数中的this是调用的时候确定的，而不是定义的时候确定的（调用方式不同，指向不同）

function fn() {
    console.log(this);
}

// 方式一：函数直接调用，函数中的this就是window
fn(); // Window

// 方式二：事件调用，谁让这个函数执行，这个函数中的this就是谁
var box = document.getElementById('box');
box.onclick = fn; // box

// 方式一和方式二的综合
box.onclick = function() { // box
    fn(); // window
}

// ---------------------------
// 方式三：对象的方法（函数）调用，函数中的this，就是调用时前面的这个对象
var obj = {
    name: 'zs',
    sex: '男',
    ab: function() {
        console.log(this);
    }
}
obj.ab(); // obj
```

面试题

```js
var name = 'zs';
var obj = {
    name: 'ls',
    fn: function() {
        console.log(this.name);
    }
}

obj.fn(); // ls

var v = obj.fn; // 把函数赋给了v
v(); // zs
```





## 三、自定义属性

```html
<div id="box" class="abc" title="不服就干" tag="找平头妹">平头哥</div>

<script>
    // 属性分为固有属性与自定义属性
    // 固有属性指系统提供的属性，如 id，class，title等
    // 自定义属性指程序员自定义添加的属性，如果 tag，index 等

    // 1、直接在标签上定义的自定义属性，可以在标签上直观查看，但是暂时无法在 JS 中获取(点和中括号的方式不行)，结果为 undefined。
    // 2、在 JS 中定义属性，不会显示到标签上，无法在标签上直观展示，但是可以正常获取使用，一般自定义属性都是在 JS 中定义的。

    var box = document.getElementById('box');

    // 获取
    console.log(box.title); // 不服就干（固有属性可以通过点或中括号的方式获取）
    console.log(box.tag); // undefined （点和中括号的方式不能获取）

    // 设置
    box.title = 'abc';
    box.index = 1; // 设置的自定义属性，不能在标签上观察到，但可以通过js获取到
    console.log(box.index); // 1
</script>
```













