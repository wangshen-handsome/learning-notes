---

layout: secondStageten

title: 二阶段 | 第十天

---

## 一、获取节点

#### 1、节点

加载 HTML 页面时，web 浏览器生成一个树型结构，用来表示页面内部结构，称之为 DOM树，DOM 将这种树型结构理解为由节点组成。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <!-- 家谱树 -->
    <p>11111111</p>
    <ul id="ul1">
        <li>11111</li>
        <li>22222</li>
        <li>33333</li>
        <li>44444</li>
    </ul>
</body>

</html>
```

![](/public/img/secondStage/ten/图片1.png)



#### 2、子节点

- 父级.children：返回元素子节点（IE8及以下，还返回注释节点）
- 父级.childNodes：在IE8及以下，只返回元素节点，在标准浏览器下，还返回换行文本节点

返回的是一个类数组，有长度，可以通过下标获取某一个

```js
var ul = document.getElementById('ul1');
var li = ul.children; // 4  只有元素节点
// var li = ul1.childNodes; // 在IE8及以下，只返回元素节点，在标准浏览器下，还有可能返回换行文本节点（IE8及以下4个，标准浏览器9个）

console.log(li);
```



#### 3、节点基本属性

- 节点.nodeType
- 节点.nodeName
- 节点.nodeValue

```js
var p = document.querySelector('p');
var ul = document.getElementById('ul1');
var li = ul.childNodes;

// 节点.nodeType：节点类型，由1--12的数字表示
// 1：元素   2：属性   3：文本   9：文档
console.log(p.nodeType); // 1
console.log(ul.nodeType); // 1
for (var i = 0; i < li.length; i++) {
    console.log(li[i].nodeType);
}

// ---------------------------


// 节点.nodeName：节点名称
// 元素节点的名称是大写的标签名，文本节点名称是：#text
console.log(p.nodeName); // P
console.log(ul.nodeName); // UL
for (var i = 0; i < li.length; i++) {
    console.log(li[i].nodeName);
}

// ---------------------
// 节点.nodeValue：节点内容
// 节点内容它认为只有文本有节点内容，元素没有节点内容
console.log(p.nodeValue); // null
console.log(p.childNodes[0].nodeValue); // '11111111'

console.log(p.innerText); // 更好的方法
```

#### 4、父节点

- 元素.parentNode：近回元素的父级
- 元素.offsetParent：返回离它最近的有定位属性的父级，如果没有定位的父级，返回body

```html
<div class="box1">
    <div class="box2">
        <div class="box3"></div>
    </div>
</div>
```

```js
// 元素.parentNode  返回元素的父级
// 元素.offsetParent  返回离它最近的有定位属性的父级，如果没有定位的父级，则返回body

var box3 = document.querySelector('.box3');

console.log(box3.parentNode);
console.log(box3.offsetParent);
```

#### 5、其它节点

```html
<ul id="ul1">
    <li>11111</li>
    <li>22222</li>
    <li>33333</li>
    <li>44444</li>
</ul>

<script>
    var ul = document.getElementById('ul1');

    // 父级.firstChild   在IE8及以下，返回第一个元素节点，在标准浏览器下，有可能返回文本节点
    // 父级.firstElementChild 在标准浏览器下，返回第一个元素节点，在IE8及以下，没有这个属性

    // 第一个子元素
    // console.log(ul.firstChild);
    // console.log(ul.firstElementChild);
    var fisrt = ul.firstElementChild || ul.firstChild;
    fisrt.style.backgroundColor = 'red';

    // 最后一个子元素
    var last = ul.lastElementChild || ul.lastChild;
    last.style.backgroundColor = 'pink';

    // 下一个兄弟元素
    var next = fisrt.nextElementSibling || fisrt.nextSibling;
    next.style.backgroundColor = 'green';

    // 上一个兄弟元素
    var prev = last.previousElementSibling || last.previousSibling;
    prev.style.backgroundColor = 'yellow';
</script>
```



## 二、操作节点

#### 1、创建节点

- 创建标签：document.createElement(标签名);
- 创建文本：document.createTextNode(文本);

#### 2、追加节点

- 父元素.appendChild(子元素); 

  子元素添加到父元素中，放到最后

#### 3、插入节点

- 父元素.insertBefore(要插入的节点, 参考的节点);

  要插入的节点放在参考元素的前面

#### 4、删除节点

- 父元素.removeChild(被删除的元素)

  返回被删除的元素

#### 5、替换节点

- 父元素.replaceChild(新的节点，被替换的节点);

#### 6、克隆节点

- 被克隆的元素.cloneNode(布尔); 

  返回克隆出来的新节点，如果参数为true，则克隆子孙节点，如果为false，则只克隆当前这个标签



## 三、表格操作

DOM提供了可以简便快速获取表格元素的属性，先获取到表格table对象(oTab)，再通过table获取里面的元素



再通过 table 获取里面的元素

- thead-----oTab.tHead	一个
- tfoot------oTab.tFoot 	一个
- Tbody----oTab.tBodies	一堆
- tr----------oTab.rows		一堆
- td----------oTab.tr.cells		一堆(必须通过tr来获取)



## 四、表单操作

#### 1、获取表单元素

- 通过form.name属性，获取到对应的元素

```html
<form method="get">
    <input type="text" name="userName">
    <input type="password" name="pass">

    <input type="checkbox" name="aihao">
    <input type="checkbox" name="aihao">
    <input type="checkbox" name="aihao">
</form>

<script>
    // 通过 form.name属性 可以获取到相对应的表单元素

    var form = document.querySelector('form');

    var user = form.userName;
    var pass = form.pass;

    var aihao = form.aihao;

    console.log(user, pass);
    console.log(aihao); // []
</script>
```



#### 2、表单事件

- form.onsubmit = function(){}  // 提交事件
- form.onreset = function(){}  // 重置事件

```html
<form method="get">
    <input type="text" name="userName">
    <input type="password" name="pass">

    <input type="submit" value="提交">
    <input type="reset" value="重置">
</form>

<script>
    var form = document.querySelector('form');

    var user = form.userName;
    var pass = form.pass;

    // 当我们点击提交按钮时，会触发提交事件，如果函数返回false，会阻止提交
    // 可以在提交之前，对用户输入进行判断
    form.onsubmit = function() {
        // console.log('我提交了');
        if (!user.value || !pass.value) {
            alert('用户名和密码必须填写')
            return false;
        }
    }

    // 当我们点击重置按钮，会触发表单重置事件，如果函数返回false，会阻止重置
    // 可以在重置之前，提醒用户是否真的重置
    form.onreset = function() {
        // var v = confirm('是否真的重置'); // 弹出窗，会有确定和取消按钮，确定返回true，取消返回false
        // if (v) {
        //     return true;
        // } else {
        //     return false;
        // }


        return confirm('是否真的重置');
    }
</script>
```





#### 3、表单方法

- form.submit()  // 提交方法
- form.reset()  // 重置方法

```html
<form method="get">
    <input type="text" name="userName">
    <input type="password" name="pass">
</form>

<span>提交</span>
<span>重置</span>

<script>
    var form = document.querySelector('form');
    var span = document.querySelectorAll('span');

    // 提交方法  form.submit();
    span[0].onclick = function() {
        form.submit();
    }

    // 重置方法  form.reset();
    span[1].onclick = function() {
        form.reset();
    }
</script>

```



#### 4、得焦失焦

```html
<input type="text">

<script>
    var input = document.querySelector('input');

    // 得焦事件
    input.onfocus = function() {
        this.style.background = 'red';
    }

    // 失焦事件
    input.onblur = function() {
        this.style.background = '';
    }

    // 得焦方法和失焦方法
    setTimeout(function() {
        input.focus(); // 得焦方法

        setTimeout(function() {
            input.blur(); // 失焦方法
        }, 3000);
    }, 3000);
</script>

```





#### 5、input事件

```html
<input type="text">

<script>
    var a = document.querySelector('input');

    // 只要input内容发生变化就会触发，IE8及以下不支持
    a.oninput = function() {
        console.log(this.value);
    }

    // IE8及以下支持
    a.onpropertychange = function() {
        console.log(this.value);
    }
</script>

```



#### 6、change事件

```html
<input type="text">

<script>
    var a = document.querySelector('input');

    // 失去焦点时内容发生变化时触发的事件
    a.onchange = function() {
        console.log(this.value);
    }
</script>

```







