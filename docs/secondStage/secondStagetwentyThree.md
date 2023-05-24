## 一、插件

http://plugins.jquery.com

https://www.jq22.com



#### 1、类级插件

```js
// 类级别的插件：扩展$下的方法，如 $.map() $.each()
; (function ($) {
    $.extend({
        方法名1: function () { },
        方法名2: function () { }
    })
})(jQuery);
// 使用
$.方法名1();
$.方法名2();
```



#### 2、对象级插件

```js
// 对象级插件：扩展jQuery对象下的方法，如 jQuery对象.css() jQuery对象.html()
; (function ($) {
    $.fn.extend({
        方法名1: function () { },
        方法名2: function () { }
    });
})(jQuery);
// 使用
jQuery对象.方法名1();
jQuery对象.方法名2();
```



#### 3、插件的基本要点

1、jQuery 插件的文件名推荐命名为 jquery.[插件名].js，以免和其他 javascript 库插件混淆。

2、所有的对象方法都应当附加到 jQuery.fn 对象上，而所有的全局函数都应当附加到jQuery 对象本身上。

3、在插件内部，this 指向的是当前通过选择器获取的 jQuery 对象，而不像一般的方法那样，例如 click()，内部的 this 指向的是 DOM 元素。

4、可以通过 this.each 来遍历所有元素。

5、所有的方法或函数插件，都应当以分号结尾，否则压缩的时候可能出现问题，为了更稳妥些，甚至可以在插件头部先加上一个分号，以免他人的不规范代码给插件带来影响。

6、插件应该返回一个 jQuery 对象，以保证插件的可链式操作，除非插件需要返回的是一些需要获取的量，例如字符串或者数组等。

7、避免在插件内部使用$作为 jQuery 对象的别名，而应该使用完整的 jQuery 表示。这样可以避免冲突。当然，也可以利用闭包这种技巧来回避这个问题，使插件内部继续使用$作为 jQuery 的别名。很多插件都是这样做的。





## 二、zepto

Zepto 是移动端开发框架，是 jQuery 的轻量级代替品；API 及语句同 jQuery 相似，但文件更小(可压缩至 8KB)。是目前功能完备的库中最小的一个。随着移动端的愈加火爆，目前很多 HTML5 的框架都在支持移动方向，Zepto 就是 jQuery 的移动端版本, 可以看做是一个轻量级的jQuery。***\*如果你会用jQuery，那么你也会用Zepto\****， Zepto的设计目的是提供 jQuery的类似的 API，但并不是 100%覆盖 jQuery 。Zepto 有一个 5-10k 的通用库、下载并快速执行、有一个熟悉通用的 API，所以你能把你主要的精力放到应用开发上。

 

Zepto.js 中文文档：https://zeptojs.bootcss.com/



#### 1、Zepto.js 介绍

1）Zepto.js 特点

- 1、针对的是移动端
- 2、轻量级，压缩版本只有 9.6KB
- 3、语法大部分同 jQuery 一样，学习成本低，上手快



2）jQuery 和 Zepto 的区别在哪里

- 1、jQuery 更多是在 PC 端被应用，因此，考虑了很多低级浏览器的的兼容性问题；而Zepto.js 则是直接抛弃了低级浏览器的适配问题，显得很轻盈；
- 2、Zepto.js 在移动端被运用的更加广泛；
- 3、jQuery 的底层是通过 DOM 来实现效果的，Zepto.js 是用 css3 来实现的；
- 4、Zepto.js 可以说是轻量级版本的 jQuery



#### 2、zepto模块

为了保持原码的精简，Zepto 默认只加载一些模块，当你需要某些模块时，可以把对应的模块加载进来。



#### 3、zepto的使用

```html
<div id="box"></div>

<script src="./js/zepto.js"></script>
<script src="./js/touch.js"></script>
<script src="./js/fx.js"></script>

<script>
    var box = $('#box');

    box.on('tap', function () {
        console.log('点我了');

        // 运动
        box.animate(
            {
                width: 300,
                height: 300,
                background: 'yellow', // 运动效果是用css3
            },
            3000
        );
    });
</script>
```



#### 4、zepto的特点

##### 1、获取元素宽高

```js
var box = $('#box');

// Zepto 的 width()、height()是根据盒模型决定的，包含 padding 和 border 的值。Zepto 中没有 innerWidth()和 outerWidth()系列。
console.log(box.width());
console.log(box.innerWidth());
console.log(box.outerWidth());
```



##### 2、offset

```js
var box = $('.box3');

// offset: 返回元素到文档的距离
// offset(): jQuery 返回只有 top 和 left。而 Zepto 返回的还包括 width 和 height。
console.log(box.offset());

// position: 返回元素离它最近的有定位属性的父级的距离，没有定位的父级，则到body的距离
// zepto同jquery
console.log(box.position());
```



##### 3、touch事件

**原生事件**

- ​    touchcancel (事件被打断)
- ​    touchend (触摸结束)
- ​    touchmove (触摸中)
- ​    touchstart (触摸开始)



**以下均为zepto模拟出来的移动端事件**

```js
var box = $('#box');

// 点击
box.on('tap', function () {
    console.log('tap点击');
});

// singleTap 和 doubleTap 这一对事件可以用来检测元素上的单击和双击。(如果你不需要检测单击、双击，使用 tap 代替)
// 单击
box.on('singleTap', function () {
    console.log('单击');
});

// 双击
box.on('doubleTap', function () {
    console.log('双击');
});

// 长按  当一个元素被按住超过 750ms 触发
box.on('longTap', function () {
    console.log('长按');
});

// 滑动
box.on('swipe', function () {
    console.log('滑动');
});

// 上滑
box.on('swipeUp', function () {
    console.log('上滑');
});

// 下滑
box.on('swipeDown', function () {
    console.log('下滑');
});

// 左滑
box.on('swipeLeft', function () {
    console.log('左滑');
});

// 右滑
box.on('swipeRight', function () {
    console.log('右滑');
});
```





