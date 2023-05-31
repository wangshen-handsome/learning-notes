---

layout: secondStagetwo

title: 二阶段 | 第二天

---

## 一、运算符与表达式

**运算符**：也被称为操作符，用于执行程序代码运算，会针对一个以上操作数来进行运算

**表达式**：是由一个或多个操作数通过运算符连接起来的式子，每个表达式最终都会有一个结果，返回给开发者



**运算符的分类**

- 算术运算符
- 赋值运算符
- 比较运算符
- 逻辑运算符
- 三目运算符



#### 1、算术运算符

```
+
- * / 
% 
++ --
```



加+

**规则**：

1、如果两边都是数字，则就是普通的数学计算

2、如果有一边是字符串，则另一边也转成字符串，变成字符串的拼接

3、如果没有字符串，则调用 Number 方法，转成数字，再进行相加

4、如果有一边是对象，则对象调用 toString 得到字符串表示，再进行计算

```js
var a = 5;
var b = '20';
console.log(a + b); // '520'

var a = 5;
var b = 20;
// console.log('5+20的和是25'); // 
console.log(a + '+' + b + '的和是' + (a + b)); // 5+20的和是25

var c = 1;
var d = true;
console.log(c + d); // 2

var a = 1;
var b = [1, 2, 3];
console.log(a + b); // '11,2,3'

// -----------------------------
console.log('a' + true); // 'atrue'
console.log(null + false); // 0
console.log(undefined + 1); // NaN
console.log(NaN + 'A'); // 'NaNA'


console.log(true + false); // 1
console.log(true + 'false'); // 'truefalse'
console.log(true + ''); // 'true'
console.log(true + undefined); // NaN
console.log(true + [true]); // 'truetrue'
console.log(1 + {}); // '1[object Object]'
```



\- * /

操作符的两边都调用Number转成数字再计算

```js
console.log('10' - 5); // 5
console.log(true - false); // 1
console.log('小王' - 5); // NaN
```



% 取模 取余

```js
// 一个递增的变量取模n，返回的是0----n-1的数
console.log(10 % 3); // 1
console.log(11 % 3); // 2
console.log(12 % 3); // 0
console.log(13 % 3); // 1
console.log(14 % 3); // 2
console.log(15 % 3); // 0


// 两边的值转为数字
console.log('10' % 3); // 1
console.log(10 % 0); // NaN
console.log(10 % null); // NaN

```



递增++ 递减--

```js
var a = 10;
a++; // 加加在后
++a; // 加加在前
console.log(a); // 12


var c = 2;
var f = 2;
d = c++; // 加加在后，先参与表达式的运算，再加加
e = ++f; // 加加在前，先加加，再参与表达式的计算

console.log(d); // 2
console.log(e); // 3
console.log(c); // 3
console.log(f); // 3
```

加加在前，先自增，然后参与表达式的计算

加加在后，先参与表达式的计算，再自增

```js
var num1 = 2;
var num2 = 20;
var num3 = ++num1 + num2;
var num4 = num1 + num2;
console.log(num3, num4);

// --------------------
var a = 10;
var b = ++a + a++;
console.log(a, b); // 12 22
```





#### 2、赋值运算符

操作符的两边先操作，结果赋给左边

= += -= *= /= %=

```js
var a = 10; // 将10赋给a

a += 2; // 操作符的两边先操作，结果赋给左边   a=a+2;
a *= 2; // a = a * 2;

console.log(a); // 24
```



#### 3、比较运算符

\> >= < <=

规则：

1、如果两边都是字符串，则是字符串的比较，从左向右，一位一位的比较，比较的是字符的ASCII编码

2、如果有一边不是字符串，则调用Number()方法，转成数字，再进行比较

```js
console.log(10 > 9); // true
console.log(10 > 10); // false
console.log(10 >= 10); // true

console.log(2 > 10); // false
console.log('2' > 10); // false
console.log('2' > '10'); // true
console.log('2' > '20'); // false
console.log('2' >= '2'); // true

console.log(null >= false); // true
console.log(null >= undefined); // false
```

![](/public/img/secondStage/two/ASCII.png)





== !=

值是否相等，为了能够进行比较，操作符的两边都调Number()转数字比较（会发生隐式类型转换）

但是null和undefined不能转换为数字

```js
console.log('10' == 10); // true
console.log(true == 1); // true
console.log(null == false); // false

console.log(null == null); // true
console.log(undefined == undefined); // true
console.log(null == undefined); // true js规定的
console.log(NaN == NaN); // false

```



=== !== (工作中推荐)

三个等号的比较（全等），必须类型和值都相等，不会进行转换

```js
console.log('10' === 10); // false
console.log(null === undefined); // false

console.log(null !== undefined); // true

```



#### 4、逻辑运算符

##### 1、&& 与 并且

```js
// &&  与
// 操作符的两边都为真，结果为真(短路操作)
console.log(10 >= 9 && 10 <= 20); // true
console.log(10 <= 9 && 10 <= 20); // false

// 如果左边为假，则不用跑到右边；直接看左边，如果左边是表达式，则表达式求值，如果左边是值，则返回这个值
// 如果左边为真，则跑到右边；直接看右边，如果右边是表达式，则表达式求值，如果右边是值，则返回这个值
console.log(0 && 5); // 0
console.log(2 && 5); // 5
console.log(10 > 2 && 5 > 3); // true
console.log(10 > 2 && null); // null
console.log(NaN && null); // NaN

```



##### 2、|| 或 或者

```js
// ||  或者
// 操作符的两边只要有一边为真，结果为真(短路操作)
console.log(10 > 9 || 10 < 9); // true
console.log(10 > 19 || 10 < 9); // false

// 如果左边为真，则不用跑到右边；直接看左边，如果左边是表达式，则表达式求值，如果左边是值，则返回这个值
// 如果左边为假，则跑到右边；直接看右边，如果右边是表达式，则表达式求值，如果右边是值，则返回这个值

console.log(0 || 5); // 5
console.log(true || 5); // true
console.log(null || undefined); // undefined

```



##### 3、| 非 取反

```js
var a = 10;
console.log(!a); // false
console.log(!!!!!!!a); // false

```



#### 5、三目运算符

三目（三元）

**格式**：表达式 ? 表达式为真执行代码 : 表达式为假执行的代码;

```js
var age = 7;
// age >= 7 ? alert('上小学') : alert('上幼儿园');

// 推荐使用
var msg = age >= 7 ? '上小学' : '上幼儿园';
alert(msg);

```



#### 6、运算符的优先级

https://github.com/xhlwill/blog/issues/16



#### 7、隐式类型转换

```js
// 加 +
console.log(10 + 100); // 110
console.log(10 + 'string'); // 10string
console.log(19 + 10 + 'age' + 18 + 10) // 29age1810
console.log(10 + '100'); // '10100'
console.log(10 + true); // 11
console.log(true + false); // 1 
console.log('10' + true); // 10true
console.log('' + 100); // '100'
console.log(10 + null); // 10
console.log(10 + undefined); // NaN
// 减 -
console.log(100 - 10); // 90
console.log(100 - 't'); // NaN
console.log(100 - ''); // 100
console.log(100 - true); // 99
console.log(100 - '80'); // 20
console.log(100 - null); // 100
console.log(100 - undefined); // NaN
// 乘 *
console.log(100 * 'a'); // NaN
console.log(100 * ''); // 0
console.log(100 * '100'); // 10000
console.log(100 * null); // 0
console.log(100 * undefined); // NaN
// 除 /
console.log(100 / 'a'); // NaN
console.log(100 / ''); // 无穷大
console.log(100 / '70'); // 1.几
console.log(100 / null); // 无穷大
console.log(100 / undefined); // NaN
// 取余 %
console.log(100 % 'a'); // NaN
console.log(100 % ''); // NaN
console.log(100 % '70'); // 30
console.log(100 % null); // NaN
console.log(100 % undefined); // NaN
// ++
var n = '10';
n++;
console.log(n); // 11
// 取反
console.log(!true); // false
console.log(!10); // false
console.log(!'web'); // false

```



#### 7、强制类型转换和隐式类型转换(掌握)

1、强制类型转换：

```
Number(参数)   
parseInt(参数)   
parseFloat(参数)   
String(参数)   
参数.toString()   
Boolean(参数)

```

2、隐式类型转换

```
+ - * / % ++ -- 都具有隐式类型转换的作用

```





## 二、javaScript交互基础

#### 1、交互三要素

- 1、找到谁
- 2、事件
- 3、做什么

元素.事件 = function () { 要做的事 }





#### 2、找元素

##### 1、通过ID

```
document.getElementById('ID名');      返回这个元素的引用，返回的是一个元素

```

```js
var list1 = document.getElementById('list1');
console.log(list1);

```





##### 2、通过标签名

```
document.getElementsByTagName('标签名');  返回文档下所有的元素
父级.getElementsByTagName('标签名');  返回这个父级下所有的元素

返回的是多个元素(类数组、伪数组)，它有长度，有下标，可以通过下标获取某一个元素

```

```js
var li = document.getElementsByTagName('li');
// var li = list1.getElementsByTagName('li');
console.log(li);
console.log(li.length);
console.log(li[2]);

// li是一个虚拟的，不能被操作，只有其中的某一个具体的元素才能被操作
li[0].onclick = function() {
    console.log('点我了');
}
li[1].onclick = function() {
    console.log('点我了');
}

```



##### 3、通过class名

IE8及以下不支持

```
document.getElementsByClassName('class名');
父级.getElementsByClassName('class名');

返回的是多个元素(类数组、伪数组)，它有长度，有下标，可以通过下标获取某一个元素

```

```js
// var abc = document.getElementsByClassName('abc');
var abc = list1.getElementsByClassName('abc');
console.log(abc);
console.log(abc.length);
console.log(abc[0]);

```





#### 3、window.onload

当页面加载完成之后（页面包含的html\css\js\图片等等都加载完成），执行这个函数

`window.onload = 函数`

```js
// window.onload = 函数
// 当页面加载完成之后（页面包含的html\css\js\图片等等都加载完成），执行这个函数
window.onload = function() {
    // 1、找元素
    var box = document.getElementById('box');

    // 2、检测找得对不对
    // console.log(box);

    // 3、点击弹出
    box.onclick = function() {
        alert('哥们，点我了');
    }
}

```



#### 4、鼠标事件

- onclick ：点击事件
- ondblclick：双击事件
- onmouseover ： 鼠标移入元素
- onmouseout : 鼠标离开元素
- onmouseenter ：鼠标移入元素
- onmouseleave ：鼠标离开元素
- onmousemove: 鼠标在元素中移动
- onmousedown： 鼠标按下
- onmouseup： 鼠标抬起
- oncontextmenu ：鼠标右键菜单事件

```js
var box = document.getElementById('box');

// 点击
box.onclick = function() {
    console.log('哥们，点我了');
}

// 双击（不常用）
box.ondblclick = function() {
    console.log('哥们，双点我了');
}

// 滑上  onmouseover和onmouseout是一对
box.onmouseover = function() {
    console.log('滑上了');
}

// 滑离
box.onmouseout = function() {
    console.log('滑离了');
}

// 滑上    onmouseenter和onmouseleave是一对
box.onmouseenter = function() {
    console.log('我也滑上了');
}

// 滑离
box.onmouseleave = function() {
    console.log('我也滑离了');
}

// 在元素上滑动（在滑动的过程中，会不断的触发）
box.onmousemove = function() {
    console.log('滑动了');
}

// 鼠标按下
box.onmousedown = function() {
    console.log('按下');
}

// 鼠标抬起
box.onmouseup = function() {
    console.log('抬起');
}

// 鼠标右键  context上下文   menu菜单
box.oncontextmenu = function() {
    console.log('右键');
}

```





#### 5、javaScript操作标签

##### 1、元素内容操作

###### 1、表单元素

- 获取：元素.value;
- 设置：元素.value = 值;

注意：设置会覆盖原来的内容

```html
<input type="text" id="txt1">
<br>
<button>获取</button>
<button>设置</button>

```

```js
// 1、获取元素
var txt = document.getElementById('txt1');
var btn = document.getElementsByTagName('button');

// 2、检查获取是否正确
// console.log(txt);
// console.log(btn);

// 3、操作
// 获取
btn[0].onclick = function() {
    console.log(txt.value);
}

// 设置
btn[1].onclick = function() {
    txt.value = '许怡请';
}

```



###### 2、双标签元素

识别标签

- 获取：元素.innerHTML
- 设置：元素.innerHTML = 值



不识别标签

- 获取：元素.innerText
- 设置：元素.innerText = 值

```html
<div>你是<b>隔壁老王</b></div>

<button>获取</button>
<button>设置</button>

```

```js
var div = document.getElementsByTagName('div')[0];
var btn = document.getElementsByTagName('button');

// 检查获取是否正确（不是必须）
// console.log(div);
// console.log(btn);

// 获取
btn[0].onclick = function() {
    console.log(div.innerHTML); // 你是<b>隔壁老王</b>
    console.log(div.innerText); // 你是隔壁老王
}

// 设置
btn[1].onclick = function() {
    // div.innerHTML = '原来是<i>小王</i>';
    div.innerText = '原来是<i>小王</i>';
}

```



##### 2、操作元素属性

写在起始标签中，以key=value形式出现的就是属性

- 获取：元素.属性名
- 设置：元素.属性名 = 值



**class要改成className**

- 获取：元素.className
- 设置：元素.className = 值

```html
<div id="box" class="abc" title="不服就干">平头哥</div>

<img src="/public/img/secondStage/two/1.jpg" alt="">

```

```js
var box = document.getElementById('box');
var img = document.getElementsByTagName('img')[0];

// title操作
// console.log(box.title); // 获取
// box.title = '你是猴子搬来的救兵吗？' // 设置
// ------------------

// class的操作
console.log(box.className); // 获取
// box.className = box.className + ' def'; // 保留原来的，和新的拼接
box.className += ' def';

// -------------------------
// 图片的src操作

// 获取图片地址，返回的是一个绝对地址（一般没有用，通常只是用来设置图片地址）
console.log(img.src); // file:///D:/0402/day02/1%E4%BB%A3%E7%A0%81//public/img/secondStage/two/1.jpg

img.onmouseover = function() {
    img.src = '/public/img/secondStage/two/2.jpg';
}
img.onmouseout = function() {
    img.src = '/public/img/secondStage/two/1.jpg';
}

```



##### 3、操作元素样式

- 获取：元素.style.样式名				只能获取行间的样式
- 设置：元素.style.样式名 = 值        修改的是行间样式

```html
<div id="box" style="border: 10px solid #000;">平头哥</div>

```

```js
var box = document.getElementById('box');

box.onclick = function() {
    // 设置样式
    box.style.width = '200px';
    box.style.height = '200px';
    box.style.backgroundColor = 'red';
    box.style.fontSize = '30px';
    box.style.color = 'yellow';

    // 获取样式
    console.log(box.style.width); // 200px

    // 清空所有的样式（清除行间的样式）
    // box.style = '';

    // 一句话可以写多个样式，但是这种写法，会覆盖原来行间的样式（因此不常用）
    // box.style.cssText = 'width:200px;height:200px;background-color: red;'
}

```



