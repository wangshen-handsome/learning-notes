---

layout: secondStagetwenty

title: 二阶段 | 第二十天

---

## 一、初识jQuery

#### 1、什么是 jQuery

jQuery 是一个优秀的 JavaScript 库，是一个由 John Resig 创建于 2006 年 1 月的开源项目。jQuery 是一个快速、小型、功能丰富的 JavaScript 库。其设计的宗旨是“write less，do more”，即倡导写更少的代码，做更多的事情。

#### 2、jQuery 的作用

jQuery 封装了 JavaScript 常用的功能代码，优化了 DOM 操作、事件处理、动画设计和Ajax 交互，学习 jQuery 的本质就是学习如何调用这些函数。

#### 3、jQuery 的优势

jQuery 强调的理念是写得少，做得多（write less, do more），jQuery 独特的选择器、链式操作、事件处理机制和封装完善的 ajax 都是其他库望尘莫及的。概括起来，jQuery 有以下优势。

● 轻量级，核心文件才几十 kb。

● 简化了 DOM 操作、事件处理、动画设计和 Ajax 交互。

● 强大的选择器功能。

● 链式操作、隐式迭代。

● 丰富的插件支持。

● 免费、开源。

#### 4、下载

1、英文官网：https://jquery.com/

2、中文官网：https://www.jquery123.com/

3、cnd：https://www.bootcdn.cn/jquery/

#### 5、类库型说明

jQuery 库的类型分为两种，分别是生产版本（最小化和压缩版）和开发版（未压缩版），它们的区别是：

开发版：完整无压缩版本，主要用于测试、学习和开发

生产版：经过工具压缩或经过服务器开启 Gzip 压缩，主要应用于产品和项目

#### 6、版本介绍

jQuery 库分为 1.x 的版本和 2.x、3.x 的版本，1.x 的版本兼容 IE678，而 2.x、3.x 的版本不兼容 IE678。

#### 7、引入jQuery

```
jQuery 不需要安装，他就是一个 js 文件，把下载的 jQuery 放到一个公共的位置，想要在某个页面上使用 jQuery 时，只需要在相关的 HTML 文档中引入该库文件即可。  

一般可以放在 head 标签中或者</body>标签前面，但是一定要注意，要在其它 js 文件前面引入 jQuery 库。

当我们需要使用 jQuery 的时候，会在 HTML 文档中引入 jquery.js,可以通过以下两种方式引入：
```

```html
<!-- 引入本地文件 -->
<script src="js/jquery.js"></script>
<!-- 引入线上文件 -->
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
```

#### 8、什么是$

$是 jQuery 的别名，也可以使用 jQuery 替代，但是为了方便，会直接使用$。

$是 jQuery 的顶级对象，相当于原生 JavaScript 中的 window。把元素利用$包装成jQuery 对象，就可以调用 jQuery 的方法。



## 二、使用

#### 1、页面加载

```js
// 页面加载执行
// 原生
window.onload = function () {
    console.log('我是原生，我加载完成了');
};

// jQuery
$(document).ready(function () {
    console.log('我是jq，我加载完成了');
});
$(function () {
    console.log('我是jq，我简写了');
});

// $(document).ready(function (){}) 同 window.onload = function (){}的区别：
// 1、执行时机不同，window.onload 必须等待网页中文档和资源都加载完成才能执行，而$(document).ready()是等文档加载完成后调用。
// 2、window.onload 只能写一个，多个时后面的会覆盖掉前面的，而$(document).ready()可以写多个，不会覆盖。
// 3、window.onload 没有简写形式，而$(document).ready()可以简写成$(function(){})。
```

#### 2、DOM对象和JQ对象

```html
<div id="box"></div>
<script>
    $(function () {
        // 关系：两者可以共存，不能混用

        // DOM对象
        var box = document.getElementById('box');
        console.log(box);

        // jq对象
        var $box = $('#box');
        console.log($box);
    })
</script>
```

#### 3、互转

```js
$(function () {
    // jq转原生
    var $box = $('#box');
    var $li = $('li');
    // console.log($box);
    // console.log($li);

    // 方式一：jq对象[下标]
    console.log($box[0]);
    console.log($li[0]);

    // 方式二：jq对象.get(下标);  如果不传下标，返回的是一个数组，即便只有一个元素，也是一个数组，传参返回对应下标的元素
    console.log($box.get());
    console.log($li.get());

    // ---------------------
    // 原生转jq: $(原生)
    var box = document.getElementById('box');
    console.log(box);
    console.log($(box));
});
```

## 三、选择器

选择器是 jQuery 的根基，在 jQuery 中，对事件处理、遍历 DOM 和 ajax 操作都依赖于选择器。如果能熟练地使用选择器，不仅能简化代码，而且可以达到事半功倍的效果。

jQuery 中的选择器完全继承了 CSS 的风格。利用 jQuery 选择器，可以非常便捷和快速地找出特定的 DOM 元素，然后为它们添加相应的行为，而无需担心浏览器是否支持这一选择器。学会使用选择器是学习 jQuery 的基础，jQuery 的行为规则都必须在获取到元素后才能生效。

#### 1、基本选择器

基本选择器是 jQuery 中最常用的选择器，也是最简单的选择器，它通过元素 id、class和标签名等来查找 DOM 元素。可以使用这些选择器来完成绝大多数的工作。

```html
<div id="box">小张</div>
<p class="abc">小耗子</p>
<ul class="ul1">
    <li>html</li>
    <li>css</li>
    <li>js</li>
</ul>
<ul class="ul2">
    <li>吃饭</li>
    <li>睡觉</li>
    <li>打豆豆</li>
</ul>

<script>
    $('#box').css('background', 'red');
    $('.abc').css('background', 'green');
    $('li').css('background', 'yellow'); // jq帮我们循环了（隐式迭代）

    $('.ul1 li').css('color', 'red'); // 后代元素
    $('#box, .abc, li').css('border-bottom', '2px solid black'); // 群组
</script>
```



#### 2、层次选择器

如果想通过 DOM 元素之间的层次关系来获取特定元素，例如后代元素、子元素、相邻元素和同辈元素等，那么层次选择器是一个非常好的选择。

```html
<ul>
    <li>
        <ol>
            <li>html</li>
            <li>css</li>
            <li>js</li>
        </ol>
    </li>
    <li>吃饭</li>
    <li class="abc">睡觉</li>
    <li>打豆豆</li>
    <li>小张</li>
</ul>
<script>
    $('ul li').css('border-bottom', '5px solid #ccc'); // ul的子孙节点
    $('ul').find('li').css('border-bottom', '5px solid #ccc');

    $('ul>li').css('border-bottom', '5px solid #ccc'); // ul的子节点
    $('ul').children('li').css('border-bottom', '5px solid #ccc');

    $('.abc+li').css('background', 'red'); // 下一个兄弟元素
    $('.abc').next().css('background', 'red');

    $('.abc~li').css('background', 'red'); // 下面所有的兄弟元素
    $('.abc').nextAll().css('background', 'red');
</script>
```



#### 3、过滤选择器

过滤选择器主要是通过特定的过滤规则来筛选出所需的 DOM 元素，过滤规则与 CSS 中的伪类选择器语法相同，即选择器都以一个冒号开头

```html
<ul>
    <li>00</li>
    <li>11</li>
    <li>22</li>
    <li class="abc">33</li>
    <li class="abc">44</li>
    <li>55</li>
    <li>66</li>
    <li>77</li>
</ul>
```

```js
$('li:first').css('background', 'red'); // 第一个元素
$('li').first().css('background', 'red');

$('li:last').css('background', 'red'); // 最后一个元素
$('li').last().css('background', 'red');

$('li:eq(3)').css('background', 'green'); // 下标为3的
$('li').eq(3).css('background', 'red');


$('li:odd').css('background', 'green'); // 下标为奇数
$('li:even').css('background', 'yellow'); // 下标为偶数数
$('li').odd().css('background', 'red');
$('li').even().css('background', 'green');

$('li:not(.abc)').css('background', 'red'); // 排除.abc
$('li').not('.abc').css('background', 'yellow');


$('li:lt(3)').css('background', 'green'); // 下标小于3的
$('li:gt(3)').css('background', 'green'); // 下标大于3的
$('li:lt(5):gt(2)').css('background', 'pink'); // 下标小于5大于2的区间
```



#### 4、表单选择器

为了使用户能够更灵活地操作表单，jQuery 中专门加入了表单选择器。利用这个选择器，能极其方便地获取到表单的某个或某类型的元素。

- $(':checked'); // 选取所有被选中的 input 标签
- $(':input'); // 选取所有 input textarea select button 元素
- $(':text'); // 所有单行文本框，即类型为：type="text"
- $(':password'); // 密码框
- $(':radio'); // 单选框
- $(':checkbox'); // 多选框
- $(':submit'); // 提交按钮
- $(':reset'); // 重置按钮
- $(':button'); // 普通按钮
- $(':file'); // 上传域



```html
<form action="">
    <input type="text">
    <input type="password" name="">
    <input type="radio" name="" checked>
    <input type="checkbox" name="" checked>
    <input type="submit" value="提交">
    <input type="reset" value="重置">
    <input type="button" value="普通按钮">
    <input type="file" name="">
</form>

<script>
	console.log($(':input')); // 所有的input select textarea button 
    console.log($(':password')); // 获取密码框
    console.log($(':checked')); // 选取选中的 checkbox radio option
</script>

```



#### 5、下标

```html
<ul>
    <li>吃饭</li>
    <li>睡觉</li>
    <li>打豆豆</li>
</ul>

<script>
    // 需求：点击li，打出它的下标
    // 原生点击：元素.onclick = 函数

    // jq点击：jQuery对象.click(函数)
    // 函数中的this即点击的这个元素，且是原生的

    // 下标：jQuery对象.index()

    $('li').click(function () {
        // console.log(this); // this是原生的
        console.log($(this).index());
    });
</script>

```

## 四、节点遍历操作

#### 1、遍历父节点

```html
<div class="box1">
    <div class="box2">
        <div class="box3"></div>
    </div>
</div>

<script>
    console.log($('.box3').parent()); // 父级
    console.log($('.box3').parents()); // 祖先级
    console.log($('.box3').parents('div')); // 祖先级
</script>

```

#### 2、兄弟节点

```html
<ul>
    <li>11</li>
    <li>22</li>
    <li>33</li>
    <li class="abc">44</li>
    <li>55</li>
    <li>66</li>
</ul>

<script>
    $('.abc').next().css('background', 'red'); // 下一个兄弟
    $('.abc').nextAll().css('background', 'red'); // 下面所有的兄弟

    $('.abc').prev().css('background', 'red'); // 上一个兄弟
    $('.abc').prevAll().css('background', 'red'); // 上面所有的兄弟

    $('.abc').siblings().css('background', 'red'); // 所有的兄弟
</script>

```

#### 3、遍历子节点

```html
<ul>
    <li>
        <ol>
            <li>html</li>
            <li>css</li>
            <li>js</li>
        </ol>
    </li>
    <li>吃饭</li>
    <li class="abc">睡觉</li>
    <li>打豆豆</li>
    <li>小张</li>
</ul>
<script>
    $('ul').children().css('border-bottom', '3px solid red'); // 所有的子节点
    $('ul').find('li').css('border-bottom', '3px solid red'); // 所有的子孙节点

    $('ul>li').not('.abc').css('border-bottom', '3px solid red'); // 排除abc
    $('ul>li').filter('.abc').css('border-bottom', '3px solid red'); // 过滤找到abc
</script>

```



## 五、其它操作

#### 1、文本及值的操作

```html
<div id="box1">小张<b>吃饱</b>了</div>
<div id="box2">小李<b>睡着</b>了</div>
<input type="text" value="我是小王" />

<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
    // 类似于原生的：innerHTML
    // jQuery对象.html(); 获取
    // jQuery对象.html(值); 设置
    console.log($('#box1').html());
    $('#box1').html('小赵<i>玩</i>游戏');

    // 类似于原生的：innerText
    // jQuery对象.text(); 获取
    // jQuery对象.text(值); 设置
    console.log($('#box2').text());
    $('#box2').text('小赵<i>玩</i>游戏');

    // 类似于原生的：value
    // jQuery对象.val(); 获取
    // jQuery对象.val(值); 设置
    console.log($('input').val());
    $('input').val('小赵游戏');
</script>

```

#### 2、遍历

```html
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
    // 需求：给所有的li设置内容，值为它的下标

    // jq中的循环
    // jQuery对象.each(function (index, item) {});
    // index下标   item循环的每一项   this同item

    $('li').each(function (index, item) {
        // console.log(index, item, this);
        // console.log(this == item);

        // $(item).html(index); // jq写法
        item.innerHTML = index; // 原生写法
    });
</script>

```

#### 3、属性操作

##### 1、attr

```js
// 类似于原生的：attribute操作
// jQuery 对象.attr(属性名); // 获取
// jQuery 对象.attr(属性名, 属性值); // 设置
// jQuery 对象.removeAttr(属性名); // 删除
// jQuery 对象.attr({属性名:属性值，属性名：属性值}); // 批量操作

// 操作原生属性
console.log($('#box').attr('title'));
$('#box').attr('title', '哥在飞');

// 操作自定义属性
console.log($('#box').attr('abc'));
$('#box').attr('abc', 'def');

$('#box').removeAttr('title');

$('#box').attr({
    aaa: 111,
    bbb: 222,
});

```



##### 2、prop

```js
// 我们还有一个 prop()方法同 attr()方法很像，也是操作属性，但是它同 attr 有区别：
// 1、在操作固有属性时，应该使用 prop
// 2、只存在 true/false 属性，应该使用 prop

// jq 元素.prop('属性名'); // 获取
// jq 元素.prop('属性名', '值'); // 设置
// jq 元素.removeProp('属性名'); // 删除
var input = $('input');
var btn = $('button');

// console.log(input.prop('checked')); // 获取
// input.prop('checked', true); // 设置

btn.click(function () {
    if (!input.prop('checked')) {
        input.prop('checked', true);
    } else {
        input.prop('checked', false);
    }
});

```

