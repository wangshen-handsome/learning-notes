---

layout: secondStagetwentyTwo

title: 二阶段 | 第二十二天

---

## 一、jQuery预制动画

#### 1、显示隐藏

宽、高、透明度同时改变

通常情况下，仅仅就是实现显示隐藏的效果。替换css的display的显示和隐藏。它会记住你隐藏之前的display状态

- jQuery对象.show(speed, easing, callback); 显示
- jQuery对象.hide(speed, easing, callback); 隐藏
- jQuery对象.toggle(speed, easing, callback); 开关效果

参数可选

- speed(速度)(默认为0)：number(单位毫秒) 、fast(200ms)、normal(400ms)、slow(600ms)。
- easing(运动的形式)："swing"慢快慢(默认)   "linear"匀速
- callback(回调函数)



#### 2、淡入淡出

透明度的改变

- jQuery对象.fadeIn(speed, callback) 显示
- jQuery对象.fadeOut(speed, callback) 隐藏
- jQuery对象.fadeTo(speed, opacity, callback) 透明到多少
- jQuery对象.fadeToggle(speed, callback) 如果显示的，则隐藏，如果是隐藏的，则显示

参数可选

- speed(速度)(默认为400)：number 、fast(200ms)、normal(400ms)、slow(600ms)
- callback(回调函数)



#### 3、滑入滑出

高度的改变

- jQuery对象.slideDown(speed, callback); 显示
- jQuery对象.slideUp(speed, callback); 隐藏
- jQuery对象.slideToggle(speed, callback); 如果是显示的，则隐藏，如果是隐藏的，则显示

参数可选

- speed(速度)(默认为400)：number 、fast(200ms)、normal(400ms)、slow(600ms)
- callback(回调函数)



## 二、自定义运动

#### 1、方式一

```
语法格式一
jQuery对象.animate({styles}, speed, easing, callback);
        styles : 必需。规定产生动画效果的一个或多个css属性/值。 {width: 300, height:300}
        speed : 时间(默认:400)
        easing : 运动形式，(swing(慢快慢 默认) linear(匀速) )
        callback : 回调函数，函数中的this就是运动的这个元素
```

```js
var box = $('#box');

// 1、通常用法
box.click(function () {
    box.animate(
        {
            width: 300,
            height: 300,
            opacity: 0.3,
            left: 300,
            top: 200,
        },
        3000,
        'linear',
        function () {
            console.log('我运动完成了');
            console.log(this);
        }
    );
});

// 2、递增递减
box.click(function () {
    box.animate(
        {
            left: '+=50',
        },
        1000
    );
});

// 3、链式运动
box.click(function () {
    box
        .animate({ left: 300 }, 1000)
        .animate({ top: 300 }, 1000)
        .animate({ width: 300 }, 1000)
        .animate({ height: 300 }, 1000)
        .animate({ opacity: 0.3 }, 1000);
});
```



**动画队列**

```js
// 需求：元素宽运动到了 500 后，再把元素背景变成黄色。
var box = $('#box');

box.click(function () {
    // box.animate({ width: 500 }, 3000).css('background', 'yellow');

    // 方式一：利用回调
    box.animate({ width: 500 }, 3000, function () {
        box.css('background', 'yellow');
    });

    // ------------------------------
    // 方式二：利用queue()函数
    box
        .animate({ width: 500 }, 3000)
        .queue(function (next) {
        $(this).css('background', 'yellow');
        next(); // 继续执行后续的动画队列
    })
        .animate({ height: 500 }, 3000);
});
```

#### 2、方式二

```
语法格式二
jQuery对象.animate({ styles }, { options });

styles : 必需。规定产生动画效果的一个或多个css属性/值。 {width: 300, height:300}
options: 可选，规定动画的额外选项
        duration: 设置动画的速度
        easing: 运动的形式，规定要使用的 easing 函数
        complete: 规定动画完成之后要执行的函数
        step: 规定动画的每一步完成之后要执行的函数，该函数的第二个参数下有一个pos属性，即运动的百分比
        queue: 布尔值。是否将这个animate加入到动画队列，默认加入
```

```js
var box = $('#box');

box.click(function () {
    box.animate(
        {
            width: 500,
        },
        {
            duration: 3000, // 时间
            easing: 'linear', // 运动形式
            // 运动完成之后的回调
            complete: function () {
                console.log('我执行完成了');
            },
            // 每一步运动的回调
            step: function (a, b) {
                console.log(b.pos); // 运动的百分比
            },
        }
    );
});
```



## 三、运动其它

#### 1、停止运动

```
jQuery对象.stop(clearQueue, gotoEnd);
        clearQueue：代表是否要清空未执行完的动画队列，默认 false
        gotoEnd：代表是否直接将正在执行的动画跳转到末状态，默认 false

jQuery对象.finish(); // 所有运动立即到终点
```

```js
box.click(function () {
    box
        .animate({ width: 500 }, 2000)
        .animate({ height: 500 }, 2000);
});

btn.click(function () {
    // box.stop(); // 停止当前动画，后续动画继续
    // box.stop(true); // 当前动画停止，后续也清除
    // box.stop(true, true); // 当前跳到未状态，后续清除

    box.finish();
});
```

#### 2、延迟运动

```js
// jQuery对象.delay(时间);

var box = $('#box');
box.click(function () {
    box
        .animate({ width: 500 }, 2000)
        .delay(3000) // 延迟3秒
        .animate({ height: 500 }, 2000);
});
```

## 四、$下的方法

#### 1、$.each

- $.each(对象, function (index, item) { });     循环对象(jq对象、[]、{})

注意：jQuery对象.each()只能循环jQuery对象

```js
// 1、循环jq对象
$.each($('li'), function (index, item) {
    console.log(index, item);
});

// 2、循环数组(数组是特殊的对象)
var arr = ['刘备', '关羽', '张飞'];
$.each(arr, function (index, item) {
    console.log(index, item);
});

// 3、循环对象
var obj = {
    name: 'zs',
    age: 3,
    fn: function () {
        console.log('前端开发');
    },
};
$.each(obj, function (key, value) {
    console.log(key, value);
});

```



#### 2、$.map

- $.map(function (value, key) { });
- 作用：循环对象，返回每次函数调用的结果组成的数组(如果调用的结果是null或undefined，则不添加进数组)
- 类似ES6 : Object.keys() Object.values()

```js
var obj = {
    name: 'zs',
    age: 3,
    fn: function () {
        console.log('前端开发');
    },
};

var arr = $.map(obj, function (value, key) {
    // console.log(value, key);
    // return value;
    return key;
});

console.log(arr);

```



#### 3、$.extend

- 语法：$.extend([deep], target, object1 [, objectN]);
- deep：即是否深度克隆

##### 1、对象合并

```js
// 1、合并对象
// $.extend(target, obj1, obj2, obj3, ...);
// 作用obj1 obj2 obj3合并到target上，并返回target
var o1 = {
    name: 'zs',
};
var o2 = {
    age: 3,
    sex: '男',
};
var o3 = {
    fn: '前端开发',
    name: 'ls',
};

// 不推荐
// $.extend(o1, o2, o3);
// console.log(o1);
// console.log(o2, o3);

// 推荐
var o = $.extend({}, o1, o2, o3);
console.log(o);

```

##### 2、对象浅克隆：只克隆了一层

```js
// 浅克隆
var obj = {
    name: 'zs',
    age: 3
}

var o = $.extend({}, obj); // 浅克隆
o.sex = '男';
console.log(o);
console.log(obj);

```

##### 3、深克隆

```js
// 深克隆
var obj = {
    name: 'zs',
    fn: {
        a: '小王'
    }
}
// var o = $.extend({}, obj); // 浅克隆只能克隆一层，如果里面还有对象，则不克隆
var o = $.extend(true, {}, obj); // 深克隆 利用递归调用
o.fn.a = '小张';
console.log(o);
console.log(obj);

```

总结：**如果对象里面是基本类型，则可以用浅克隆。如果里面是引用类型，则必须用深克隆**