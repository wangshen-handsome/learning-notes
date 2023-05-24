## 一、class操作

- jQuery元素.addClass('class名'); 添加 一次可以添加多个
- jQuery元素.removeClass('class名'); 删除 一次可以删除多个
- jQuery元素.toggleClass('class名'); 切换 如果有这个class，则删除，如果没有，则添加
- jQuery元素.hasClass('class名'); 查找是否有，返回布尔值

```js
var box = $('#box');

box.addClass('abc1 aaa'); // 添加
box.removeClass('abc aaa'); // 删除
box.toggleClass('bb1'); // 切换
console.log(box.hasClass('abc')); // 是否有某个class
```



## 二、css操作

- jQuery元素.css('样式属性', '值'); // 设置
- jQuery元素.css('样式属性'); // 获取
- jQuery元素.css({'样式属性1': '值1', '样式属性2': '值2', ...}); // 参数为对象，可以一次设置多个

注意

1、如果是数字，将会自动转化为像素值。

2、在 css 方法中，如果属性中带有‘-’符号，例如 font-size 和 background-color属性，如果在设置这些值时，不带引号，那么就要用驼峰式写法。如果带上引号，可以写成font-size 也可以写成 fontSize。加上引号是个良好的习惯。



## 三、元素宽高

```html
<div id="box"></div>

<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
    var box = $('#box');

    // 原生
    // window.getComputedStyle   currentStyle
    // 元素.clientWidth
    // 元素.offsetWidth

    // ---------------------------------------
    // jq中，也可以获取隐藏元素的宽高，原生不可以
    // 获取
    console.log(box.css('width')); // '100px'
    console.log(box.width()); // 100  width
    console.log(box.innerWidth()); // 120  width+padding
    console.log(box.outerWidth()); // 122  width+padding+border
    console.log(box.outerWidth(true)); // 142  width+padding+border+margin

    // 设置
    box.width(200);
    box.innerWidth(200);
    box.outerWidth(200);
    box.outerWidth(200, true);

    // ----------------------------------
    // 获取可视区宽高
    alert($(window).width());
    alert($(window).height());

    // 获取文档宽高
    alert($(document).width());
    alert($(document).height());
</script>
```



## 四、元素的位置

- jQuery对象.offset();

```js
// jQuery对象.offset();
// 获取元素相对于文档的偏移，其中返回的对象包含两个属性。即 left和 top。它只对可见元素有效。
// 原生封装的方法：getPos
var box3 = $('.box3');
console.log(box3.offset());
```

- jQuery对象.position();

```js
// jQuery对象.position();
// 获取元素到离它最近的有定位属性的父级的距离，如果没有定位的父级，则到body的距离
// 原生：offsetLeft offsetTop
console.log(box3.position());
```





## 五、滚动条

- 获取滚动条
  - jQuery对象.scrollTop()
  - jQuery对象.scrollLeft()
- 设置滚动条
  - jQuery对象.scrollTop(值)
  - jQuery对象.scrollLeft(值)

```js
// 在窗口上滚动的时候，获取滚动条的高度
$(window).scroll(function () {
    console.log($(window).scrollTop());
});

// 在页面上点击一下，设置滚动条的高度
$(document).click(function () {
    $(window).scrollTop(500);
});
```



## 六、创建节点

- $('html 片段')

```js
// 语法：$('html片段')
      $(function () {
        // 创建一个空的div
        $('<div></div>').appendTo('body');
        $('<div>').appendTo('body');

        // 创建有内容的
        $('<div class="abc" title="智说">小二上茶</div>').appendTo('body');

        // 创建大段片段
        $(`<nav>
          <div class="main">
            <img src="./img/index/logo.png" alt="" class="logo" />
            <ul class="">
              <li class="check"><a href="./index.html">首页</a></li>
              <li><a href="./pages/online.html">同步课程</a></li>
              <li><a href="javascript:;">在线练习</a></li>
              <li><a href="javascript:;">精品课程</a></li>
            </ul>
            <div class="search">
              <div class="left">课程<i class="iconfont icon-down"></i></div>
              <input type="text" placeholder="搜索感兴趣的内容" />
              <img src="./img/index/search.png" alt="" />
            </div>
            <div class="login">
              <a href="./pages/loginAndRegister/login.html">登陆</a>
              /
              <a href="./pages/loginAndRegister/register.html">注册</a>
            </div>
            <div class="user">
              <img src="./img/login/user.png" alt="" />
              <div class="userlist">
                <ul>
                  <li><a href="javascript:;">我是用户名</a></li>
                  <li><a href="javascript:;">课程中心</a></li>
                  <li><a href="./pages/product.html">订单中心</a></li>
                  <li><a href="javascript:;">资金管理</a></li>
                  <li><a href="./pages/userSeting.html">个人中心</a></li>
                  <li class="out"><a href="javascript:;">退出登陆</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>`).appendTo('body');
      });
```



## 七、添加节点

1、将元素插入目标中，作为子元素，放在最后

- 元素.appendTo(目标);
- 目标.append(元素);

2、将元素插入目标中，作为子元素，放在最前

- 元素.prependTo(目标);
- 目标.prepend(元素);

3、将元素插入到目标元素的后面，作为兄弟元素

- 元素.insertAfter(目标);
- 目标.after(元素);

4、将元素插入到目标元素的前面，作为兄弟元素

- 元素.insertBefore(目标);
- 目标.before(元素);



## 八、替换节点

- 被替换的元素.replaceWith(新的替换的元素);
- 新的替换的元素.replaceAll(被替换的元素);



## 九、删除节点

- jQuery对象.remove(); 返回被删除元素的引用，不保留之前的事件
- jQuery对象.detach(); 返回被删除元素的引用，保留之前的事件
- jQuery对象.empty(); 清空元素，删除元素的子孙节点



```html
<button>remove</button>
<button>detach</button>
<button>empty</button>
<ul>
    <li>吃饭</li>
    <li>睡觉</li>
    <li>打豆豆</li>
</ul>
```

```js
var btn = $('button');
var ul = $('ul');

ul.click(function () {
    console.log('康说');
});

// remove
btn.eq(0).click(function () {
    var v = ul.remove(); // v存在于内存中，没地方可以去
    // console.log(v);

    setTimeout(function () {
        v.appendTo('body');
    }, 3000);
});

// detach
btn.eq(1).click(function () {
    var v = ul.detach(); // v存在于内存中，没地方可以去
    // console.log(v);

    setTimeout(function () {
        v.appendTo('body');
    }, 3000);
});

// empty
btn.eq(2).click(function () {
    // ul.empty(); // 建议使用
    // ul.html('');
});
```



## 十、克隆节点

- jQuery对象.clone(参数); 参数可选。布尔值。规定是否复制元素的所有事件处理

```js
var btn = $('button');
var ul = $('ul');

ul.click(function () {
    console.log('胡说');
});

btn.click(function () {
    var v = ul.clone(true);
    // console.log(v);
    v.appendTo('body');
});

```



## 十一、事件

#### 1、事件对象

```js
// 事件对象：当事件发生的时候，跟这个事件有关的一些详细信息，保存在一个对象中，这个对象就是事件对象
// 事件函数：被事件调用的函数，就是事件函数
$('#box').click(function (ev) {
    // console.log(ev); // jq封装过以后的事件对象，jq已经兼容了
    // console.log(ev.originalEvent); // 获取原生的事件对象

    console.log(ev.clientX, ev.clientY); // 鼠标到可视区的距离
    console.log(ev.pageX, ev.pageY); // 鼠标到文档的距离
    console.log(ev.which); // 相当于 keyCode，但比 keyCode 强大，还可以记录鼠标的键值，返回 1\2\3 即左\中\右;
    console.log(ev.target); // 事件源
    console.log(ev.delegateTarget); // 事件绑定的对象
    console.log(ev.type); // 事件类型

    console.log(ev.ctrlKey); // 返回 true 或 false，相应的 ctrl 键是否按下
    console.log(ev.shiftKey); // 返回 true 或 false，相应的 shift 键是否按下
    console.log(ev.altKey); // 返回 true 或 false，相应的 alt 键是否按下

    ev.preventDefault(); // 阻止默认事件
    ev.stopPropagation(); // 阻止冒泡的操作
    return false; // 阻止默认事件 + 阻止冒泡的操作
});

```

#### 2、事件的绑定

- 格式：jQuery对象.on('事件名', 函数);

```js
var box = $('#box');

// jq将原生的方法都函数化了
// box.click(function () {
//   console.log(1);
// });
// box.click(function () {
//   console.log(2);
// });

// 1、基本使用
box.on('click', function () {
    console.log('点我了');
});

// 2、一次绑定多个事件
box.on('click mouseover mouseout', function () {
    console.log('执行了');
});

// 3、写成对象的形式
box.on({
    click: function () {
        console.log('点我了');
    },
    mouseover: function () {
        console.log('滑上了');
    },
    mouseout: function () {
        console.log('滑离了');
    },
});

// 4、触发自定义事件
box.on('abc', function () {
    console.log('我是自定义的abc，我触发了');
});
box.trigger('abc'); // 自定义事件，要用trigger触发

```



#### 3、事件的取消

- 格式：jQuery对象.off('事件名'); // 没有参数，取消该元素上所绑定的全部事件

```js
// jq对象.off(事件名); // 事件解绑

var box = $('#box');

box.on({
    click: function () {
        console.log('点我了');
    },
    mouseover: function () {
        console.log('滑上了');
    },
    mouseout: function () {
        console.log('滑离了');
    },
});

// box.off(); // 没有参数，解绑全部事件
// box.off('click'); // 只解绑click
box.off('mouseover mouseout'); // 解绑多个

```



#### 4、事件的命名空间

```js
var box = $('#box');

box.on('click.a', function () {
    console.log('a');
});
box.on('click.b', function () {
    console.log('b');
});

// 需求：只触发a，不触发b
box.off('click.b');

```

#### 5、事件代理

- jQuery对象父级.on('事件', '子级', 函数);

```js
// 事件代理
// jQuery对象父级.on('事件名', '子级', 函数);
// 函数中的this是哪个子级，并且是原生的

$('ul').on('click', '.abc', function (ev) {
    // console.log(this);
    $(this).css('background', 'red');

    console.log(ev.target); // 事件源
    console.log(ev.delegateTarget); // 事件绑定的对象
});

```

#### 6、一次性事件

- jQuery元素.one('事件名', 回调函数);

```js
var box = $('#box');

box.one('click', function () {
    console.log('我执行了');
});

// box.on('click', function () {
//   console.log('我执行了');
//   box.off();
// });

```

#### 7、合成事件

- jQuery元素.hover(滑上执行的函数, 滑离执行的函数); 

```js
var box = $('#box');

// jQuery元素.hover(滑上执行的函数, 滑离执行的函数);

// 同原生的mouseenter mouseleave
// 不同于原生的mouseover mouseout

// 不冒泡
box.hover(
    function () {
        $(this).css('background', 'green');
    },
    function () {
        $(this).css('background', 'red');
    }
);

```

## 十二、滑上事件

```html
<div id="box">
    <span></span>
</div>

<script>
    var box = document.getElementById('box');
    var n = 0;

    // 会冒泡
    // box.onmouseover = function () {
    //   n++;
    //   console.log(n);
    // };

    // 不冒泡
    box.onmouseenter = function () {
        n++;
        console.log(n);
    };
</script>

```

