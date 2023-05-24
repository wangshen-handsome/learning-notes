## 一、BOM

**window**是js中最大的对象，表示窗口，包含document

**document**文档对象，表示HTML



所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员。全局变量是 window 对象的属性。全局函数是 window 对象的方法。

```js
// 所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员

var a = 10;

console.log(a);
console.log(window.a);

// ----------------------
function fn() {
    console.log(this);
}
fn(); // this是window，fn的前面其实是隐藏着一个window，只不过我们一般不用写
window.fn(); // this是window
```





#### 1、系统对话框

```js
// window是js中最大的对象，所有的一切方法和属性，都是window对象方法和属性

// 1、带确定按钮的弹出窗，没有返回值
var n = window.alert("弹出窗");
console.log(n);

// 2、带有确定和取消按钮的弹出窗，确定返回true，取消返回false
var n = window.confirm("是否重置？");
console.log(n);

// 3、带有输入框的弹出窗，确定返回输入的内容，取消返回null
var n = window.prompt("请输入分数");
console.log(n);
```



#### 2、打开和关闭

- window.open(url, 打开窗口的方式(默认新窗口), 设置窗口大小, 新窗口是否取代浏览器历史记录中的位置)
  - _self ：在当前窗口打开
  - _blank: 在新窗口打开（默认新窗口打开）
  - 返回新页面的window对象
- 被关闭的window对象.close(); // 只能关闭由js打开的页面

```js
var btn = document.querySelectorAll("button");
var w; // 新窗口的window引用

// 打开
btn[0].onclick = function () {
    w = open("https://www.baidu.com", "_blank", "width=500,height=300");
    // console.log(w);
    console.log(w == window); // fasle
};

// 关闭
btn[1].onclick = function () {
    w.close();
};
```

#### 3、location

```js
// console.log(location); // 它是一个对象，它下面有很多的属性和方法

console.log(location.href); // 返回浏览器地址 可以设置
console.log(location.search); // 返回?号以后的东西，包括?号   可以设置
console.log(location.hash); // 返回#号以后的东西，包括#号   可以设置
console.log(location.host); // 返回服务器名称和端口号（如果有）
console.log(location.hostname); // 不带端口号的服务器名称
console.log(location.pathname); // URL中的目录和（或）文件名，以根目录为基础，标明文件在服务器上的位置
console.log(location.port); // 端口号
console.log(location.protocol); // 协议 http   https

setTimeout(function () {
    // location.href = "https://www.baidu.com/"; // 跳转页面
    location.reload(); // 重新加载页面
}, 4000);
```

#### 4、history

- history.go(-1);//后退一页
- history.go(1);//前进一页
- history.go(2);//前进两页
- history.back()  后退
- history.forward()  前进

#### 5、navigator 

navigator 对象的属性通常用于检测显示网页的浏览器类型

```js
console.log(navigator.appCodeName); // 浏览器代号
console.log(navigator.appName); // 浏览器名称
console.log(navigator.appVersion); // 浏览器版本
console.log(navigator.cookieEnabled); // 是否启用了cookie
console.log(navigator.platform); // 硬件平台
console.log(navigator.userAgent); // 用户代理
console.log(navigator.systemLanguage); // 用户代理语言
```



#### 6、事件

```js
// 当 html 文档和资源都加载完成后触发
window.onload = function () {
    console.log('加载完成了');
}

// 当窗口大小（可视区）发生变化时会触发，连续触发
window.onresize = function () {
    console.log(1);
}

// 当拖动滚动条的时候触发，连续触发
window.onscroll = function () {
    console.log(1);
}
```



## 二、宽高、位置属性

#### 1、元素宽高

```js
// 获取元素的宽高

// 获取元素宽高有单位
// 元素.style.width  只能获取行间的
// window.getComputedStyle   元素.currentStyle

var box = document.getElementById("box");

// 返回值没有单位，隐藏元素的宽高不能获取
console.log(box.clientWidth); // 120   width+padding
console.log(box.offsetWidth); // 122   width+padding+border

console.log(box.clientHeight);
console.log(box.offsetHeight);
```

#### 2、可视区宽高

获取特殊标签

- console.log(document); // 文档
- console.log(document.body); // body标签
- console.log(document.title); // title标签的内容
- console.log(document.documentElement); // html标签

```js
// 可视区的宽高
alert(document.documentElement.clientWidth);
alert(document.documentElement.clientHeight);
```

#### 3、元素位置

- 元素.offsetLeft
- 元素.offsetTop

获取到离它最近的有定位属性的父级的距离，如果没有定位的父级，获取到body的距离

```html
<div class="box1">
    <div class="box2">
        <div class="box3"></div>
    </div>
</div>

```

```js
var box3 = document.querySelector('.box3');
console.log(box3.offsetLeft);
console.log(box3.offsetTop);
console.log(box3.offsetParent);

// -------------------------------------
// 封装一个方法，用于获取任何一个元素到文档的距离
// 传入一个元素，返回一个对象 {left: xx, top: xx}
function getPos(ele) {
    var l = 0;
    var t = 0;

    while (ele) {
        l += ele.offsetLeft;
        t += ele.offsetTop;
        ele = ele.offsetParent;
    }

    return {
        left: l,
        top: t,
    };
}

console.log(getPos(box3));

```



#### 4、滚动条

- 获取
  - 元素.scrollTop
  - 元素.scrollLeft
- 设置
  - 元素.scrollTop = 值
  - 元素.scrollLeft = 值

```js
// 文档的滚动条，在滚动的过程中，不断的打出滚动条的高度
window.onscroll = function () {
    var t = document.documentElement.scrollTop;
    console.log(t);
};

// 在页面中点击一下，滚动条的距离到500的位置
document.onclick = function () {
    document.documentElement.scrollTop = 500;
};

```

案例：返回顶部

案例：弹出窗

总结：

```
client
    clientWidth：width + padding
    clientHeight：height + padding
    
    clientTop: 元素上边框的宽高
    clientLeft

offset
    offsetWidth：width + padding + border
    offsetHeight：height + padding + border
    offsetTop：跑它最近的有定位属性的父级的距离，如果没有定位的父级，则到body的距离
    offsetLeft：
    offsetParent: 

scroll
    scrollTop：被卷去的高
    scrollLeft：被卷去的宽
    
    scrollWidth: 获取元素实际内容宽
    scrollHeight: 获取元素实际内容高

```



#### 5、懒加载

- 减少了加载时的线程数量，使可视区域内的图片也能够快速加载，优化了用户体验。
- 减少了同一时间发向服务器的请求数，服务器压力剧减。

方法：在写网页`<img>`标签时并不会将图片的路径放入src属性。而是自定义一个其他的属性`_src`。将路径放入这个自定义的属性中。那么在加载页面时，这个图片一开始是无法加载的。而当浏览器的可视区域移动到此图片上时，将_src中的路径赋值给src属性，并开始加载。