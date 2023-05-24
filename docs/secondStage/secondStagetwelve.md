## 一、事件基础

#### 1、事件函数

- 当事件被触发时调用的函数就是事件函数

```js
var box = document.getElementById('box');
function fn() {
    console.log(this);
}

fn(); // 普通函数

box.onclick = fn; // fn是事件函数，当事件被触发时调用的函数
```





#### 2、事件对象

- 事件对象：当一个事件发生的时候，跟这个事件有关的一些详细信息，保存在一个对象中，这个对象就是事件对象
- IE和谷歌：全局的event对象
- 标准浏览器：事件函数的第一个参数
- 兼容：IE9及以上，用事件函数的第一个参数，而IE8及以下，用全局的event

```js
box.onclick = function (ev) {
    // console.log(ev); // 标准浏览器支持
    // console.log(event); // IE8及以下支持

    var ev = ev || event; // 事件对象兼容
    // console.log(ev);

    console.log(ev.type); // 事件类型

    // console.log(ev.target); // 事件源，标准浏览器支持
    // console.log(ev.srcElement); // 事件源，IE8及以下支持
    var target = ev.target || ev.srcElement; // 事件源的兼容
    target.style.background = 'pink';

    console.log(ev.clientX, ev.clientY); // 鼠标到可视区的距离
    console.log(ev.pageX, ev.pageY); // 鼠标到文档的距离，IE8及以下不支持

    console.log(ev.shiftKey); // 事件发生时，shift键是否按下
    console.log(ev.ctrlKey); // 事件发生时，ctrl键是否按下
    console.log(ev.altKey); // 事件发生时，alt键是否按下
};
```



## 二、事件绑定与取消

#### 1、事件绑定

- 格式：元素.addEventListener(不要on的事件名, 函数, 是否捕获);
- 格式：元素.attachEvent(要on的事件名, 函数);

```html
<div id="box"></div>

<script>
    var box = document.getElementById('box');

    function fn1() {
        console.log(1);
        console.log(this == window);
    }
    function fn2() {
        console.log(2);
    }

    // 需求：给同一个元素的同一个事件绑定不同的处理函数

    // ------------------------
    // 不可以，本质上是一种赋值的写法，后面的会覆盖前面的
    box.onclick = fn1;
    box.onclick = fn2;

    // ------------------------
    // 标准浏览器支持（IE9及以上）
    // 格式：元素.addEventListener('不要on的事件名', 函数, 是否捕获);
    // 是否捕获：默认可以不写，即false不捕获
    box.addEventListener('click', fn1, false);
    box.addEventListener('click', fn2, false);

    // -----------------------------
    // IE8及以下支持
    // 格式：元素.attachEvent('要on的事件名', 函数);
    box.attachEvent('onclick', fn1);
    box.attachEvent('onclick', fn2);

    // ------------------------
    // 标准浏览器的事件绑定和 ie 浏览器的事件绑定的区别：
    // ● ie 没有捕获，标准有捕获
    // ● ie 的事件名称前面有 on，标准没有
    // ● 标准的 ie 会根据事件的顺序正序执行，非 ie 标准逆序，标准正序
    // ● ie 的 this 是 window，标准的是触发这个事件的对象

    // ---------------------------
    // 事件绑定兼容

    // 兼容原理：标准浏览器返回一个函数，IE8及以下返回undefined
    console.log(box.addEventListener);
    if (box.addEventListener) {
        // 标准浏览器
        box.addEventListener('click', fn1, false);
        box.addEventListener('click', fn2, false);
    } else {
        // IE8及以下
        box.attachEvent('onclick', fn1);
        box.attachEvent('onclick', fn2);
    }

    // ----------------------------

    // 事件绑定封装函数
    // ele元素   event事件   callback函数
    function bind(ele, event, callback) {
        if (ele.addEventListener) {
            // 标准浏览器
            ele.addEventListener(event, callback, false);
        } else {
            // IE8及以下
            ele.attachEvent('on' + event, callback);
        }
    }

    bind(box, 'click', fn1);
    bind(box, 'click', fn2);
</script>
```



#### 2、取消事件绑定

标准浏览器

- 格式：元素.addEventListener(不要on的事件名, 函数, 是否捕获);
- 解绑：元素.removeEventListener(不要on的事件名, 函数, 是否捕获);

IE8及以下

- 格式：元素.attachEvent(要on的事件名, 函数);
- 解绑：元素.detachEvent(要on的事件名, 函数);

```html
<div id="box"></div>

<script>
    var box = document.getElementById('box');

    function fn1() {
        console.log(1);
    }
    function fn2() {
        console.log(2);
    }

    // 需求：给同一个元素的同一个事件绑定不同的处理函数

    // ------------------------
    // 不可以，本质上是一种赋值的写法，后面的会覆盖前面的
    box.onclick = fn1;
    box.onclick = null;

    // ------------------------
    // 标准浏览器支持（IE9及以上）
    // 格式：元素.addEventListener('不要on的事件名', 函数, 是否捕获);
    // 取消事件绑定：元素.removeEventListener('不要on的事件名', 函数, 是否捕获);
    // 是否捕获：默认可以不写，即false不捕获
    box.addEventListener('click', fn1, false);
    box.addEventListener('click', fn2, false);
    box.removeEventListener('click', fn2, false);

    // -----------------------------
    // IE8及以下支持
    // 格式：元素.attachEvent('要on的事件名', 函数);
    // 取消事件绑定：元素.detachEvent('要on的事件名', 函数);
    box.attachEvent('onclick', fn1);
    box.attachEvent('onclick', fn2);
    box.detachEvent('onclick', fn2);

    // ----------------------------

    // 事件绑定封装函数
    // ele元素   event事件   callback函数
    function bind(ele, event, callback) {
        if (ele.addEventListener) {
            // 标准浏览器
            ele.addEventListener(event, callback, false);
        } else {
            // IE8及以下
            ele.attachEvent('on' + event, callback);
        }
    }

    function unbind(ele, event, callback) {
        if (ele.removeEventListener) {
            // 标准浏览器
            ele.removeEventListener(event, callback, false);
        } else {
            // IE8及以下
            ele.detachEvent('on' + event, callback);
        }
    }

    bind(box, 'click', fn1);
    bind(box, 'click', fn2);
    unbind(box, 'click', fn2);
</script>
```





## 三、DOM事件流

#### 1、事件流

- 事件流：当事件发生的时候，事件会按一定的顺序在根节点和各元素节点之间传播，所经过的节点，都会触发对应的事件。
- 事件流分为三个阶段：
  - 1、捕获阶段：从最外层的document->html->body->box1->box2->box3这个过程，从外到里
  - 2、处于目标阶段：到达了box3的上面
  - 3、冒泡阶段：从最里面的box3->box2->box1->body->html->document的过程，从里到外

总结：addEventListener可以选择捕获触发或者冒泡触发，但是attachEvent和元素.事件都只能冒泡触发，为了兼容，因此，我们一般都只是使用冒泡触发

```html
<div id="box1">
    <div id="box2">
        <div id="box3"></div>
    </div>
</div>
```

```js
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');

function fn() {
    console.log(this.id);
}

// 这种形式的事件绑定，默认就是冒泡
// box1.onclick = fn;
// box2.onclick = fn;
// box3.onclick = fn;

// -----------------------------

// 捕获触发
box1.addEventListener('click', fn, true);
box2.addEventListener('click', fn, true);
box3.addEventListener('click', fn, true);

// 冒泡触发，第三个参数不写，认就是冒泡
box1.addEventListener('click', fn, false);
box2.addEventListener('click', fn, false);
box3.addEventListener('click', fn, false);
```



#### 2、捕获与冒泡

- 冒泡，事件在子元素发生，子元素先处理，然后子元素传递到父元素
- 捕获，事件在子元素发生，先经过父元素，父元素先处理，在分发到子元素

注意：**冒泡是默认存在的**

![image-20220420112902631](/public/img/secondStage/twelve/image-20220420112902631.png)



#### 3、阻止冒泡

- 标准浏览器：event.stopPropagation();
- IE 浏览器：event.cancelBubble = true;

```js
var span = document.querySelector('span');
var box = document.getElementById('box');

// 1、点击span，box展示
span.onclick = function (ev) {
    var ev = ev || event;
    box.style.display = 'block';

    // ev.stopPropagation(); // 标准浏览器
    // ev.cancelBubble = true; // IE 浏览器
    stopPropagation(ev); // 阻止冒泡的兼容
}

// 2、点击页面的任何地方，box隐藏
document.onclick = function () {
    box.style.display = 'none';
}

// 阻止冒泡的兼容
function stopPropagation(ev) {
    if (ev.stopPropagation) {
        ev.stopPropagation();
    } else {
        ev.cancelBubble = true;
    }
}
```



## 四、事件默认行为

某些事件，即赋予了元素特殊的操作

- 元素.事件添加的事件：return false;
- 元素.addEventListener()：ev.preventDefault();
- 元素.attachEvent()：ev.returnValue = false;

```js
var a = document.querySelector('a');
a.onclick = function (ev) {
    var ev = ev || event;
    preventDefault(ev);
}

// 阻止默认行为的兼容
function preventDefault(ev) {
    if (ev.preventDefault) {
        ev.preventDefault();
    } else {
        ev.returnValue = false;
    }
}
```



## 五、事件委托

**事件委托**：也叫事件代理，利用事件冒泡原理，只指定一个事件处理程序，就可以管理某一类型的所有事件。

**实现**：将事件添加到父元素上，当事件发生时，父元素会找到对应触发事件的子元素去处理。好处：后期添加的子元素，依然有这个事件。

好处：

- 1、节省性能
- 2、新添加的元素也有之前的事件

```html
<ul>
    <li>吃饭</li>
    <li>睡觉</li>
    <li>打豆豆</li>
</ul>

```

```js
// 点击li，给它添加背景色
var ul = document.querySelector('ul');
var li = ul.getElementsByTagName('li');

// 之前的方法：循环
// 不足：
// 1、每个元素绑定事件，如果元素很多，比较耗性能
// 2、新添加的元素，没有之前是的事件
// for (var i = 0; i < li.length; i++) {
//   li[i].onclick = function () {
//     this.style.backgroundColor = 'red';
//   };
// }

// -------------------------------
// 事件代理
// 好处
// 1、提高性能
// 2、新添加的元素也有之前的事件
ul.onclick = function (ev) {
    var ev = ev || event;
    var target = ev.target || ev.srcElement; // 事件源

    // console.log(target);
    // if (target.nodeName === 'LI') {
    //   target.style.background = 'pink';
    // }

    // 对事件源进行判断，如果符合，就做什么事
    if (target.tagName === 'LI') {
        target.style.background = 'pink';
    }
};

// -------------------------------
// 添加一个新的
var item = document.createElement('li');
item.innerText = '我是新来的';
ul.appendChild(item);

```



## 六、键盘事件

#### 1、键盘事件

- onkeydown 键盘按下
- onkeyup 键盘抬起

在能响应用户输入的元素上触发（表单元素、document都可以响应键盘事件）

```js
var input = document.querySelector('input');

// 按下
input.onkeydown = function () {
    console.log(this.value);
}

// 抬起
input.onkeyup = function () {
    console.log(this.value);
}

```

#### 2、键盘事件的事件对象

```js
var input = document.querySelector('input');

// 事件对象
input.onkeyup = function (ev) {
    var ev = ev || event;

    console.log(ev.key); // 具体的按键(IE8 及以下不支持)
    console.log(ev.keyCode); // 按键对应的编码
    // a:65   z:90   空格:32  回车:13  方向键：37左 38上 39右 40下  esc:27

    console.log(ev.shiftKey); // shift键是否按下
    console.log(ev.ctrlKey); // ctrl键是否按下
    console.log(ev.altKey); // alt键是否按下
};

```



## 七、滚轮事件

标准和IE：

- 事件：onmousewheel
- 方向：ev.wheelDelta  上：120  下：-120

火狐：

- 事件：DOMMouseScroll 必须用addEventListener绑定
- 方向：ev.detail   上：-3  下：3

```js
// 需求：在box上滚动滚轮，向上滚高度减小，向下滚高度增加
var box = document.getElementById('box');
var h = box.clientHeight;
// console.log(h);

bind(box, 'mousewheel', fn); // 标准和IE
bind(box, 'DOMMouseScroll', fn); // 火狐

function fn(ev) {
    if (mousewheel(ev) > 0) {
        // 向上
        h--;
    } else {
        // 向下
        h++;
    }
    box.style.height = h + 'px';
}

// 方向兼容： 上120   下-120
function mousewheel(ev) {
    if (ev.wheelDelta) {
        return ev.wheelDelta; // 标准和IE  上120   下-120
    } else {
        return -40 * ev.detail; // 火狐  上-3  下3
    }
}
// 事件绑定
function bind(ele, event, callback) {
    if (ele.addEventListener) {
        // 标准浏览器
        ele.addEventListener(event, callback, false);
    } else {
        // IE8及以下
        ele.attachEvent('on' + event, callback);
    }
}

```

