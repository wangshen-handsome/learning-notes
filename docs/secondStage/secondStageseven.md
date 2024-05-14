---

layout: secondStageseven

title: 二阶段 | 第七天

---

## 一、对象的简介

#### 1、对象的分类

在 JavaScript 里，**一切皆为对象**或者**皆可以被用作对象**

- 宿主对象：window、document
- 内置对象：Number   String   Boolean   Array数组   Object   Function   Error错误对象   Date时间对象 RegExp正则
- 自定义对象：new XX();



#### 2、包装对象

```js
// 为什么对象可以直接加属性和读属性，因为它是对象，它是有属性和方法的
var obj = {
    a: 1,
    b: 2
};

obj.c = 3;
console.log(obj.c); // 3
```



```js
// 基本类型是没有属性和方法的，只有对象（引用类型）才有属性和方法
// js中一切皆对象

var str = 'abc';
console.log(str.length); // 属性   3
console.log(str.charAt(1)); // 方法  b
```



面试题

```js
// 面试题
str.a = '123'; // 给str添加属性a，这个时候，就会有一个包装对象过来，并给加上a属性，接着包装对象就走了
console.log(str.a); // undefined 就会又来一个包装对象，但是这个包装对象不是上次来的哪个包装对象，它上面没有a这个属性，因此是undefined
```





## 二、Math对象

```js
// 常用数学方法
console.log(Math.floor(3.999)); // 3 向下取整 去掉小数部分
console.log(Math.ceil(3.001)); // 4 向上取整 只要有小数就进位
console.log(Math.round(3.14159)); // 3 四舍五入
console.log(Math.abs(-100)); // 100 绝对值
console.log(Math.max(1, 2, 36, 9)); // 36
console.log(Math.min(1, 2, 36, 9)); // 1
console.log(Math.pow(2, 10)); // 2的10次方  1024
console.log(Math.pow(3, 2)); // 3的平方 9
console.log(Math.sqrt(60)); // 开根号 7.745966692414834
```



**随机数**

- 随机数：大于等于0小于1的一个数
- 使用场景：点名器、抽奖、验证码

```js
// 封装
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (var i = 0; i < 20; i++) {
    console.log(getRandom(10, 50));
}
```

案例：抽奖



## 三、时间对象

#### 1、创建时间

```js
// 没有参数，创建的是电脑此时此刻的时间
var d = new Date();
console.log(d);
console.log(typeof d); // 'object'  它返回的是一个对象，下面有很多的属性和方法


// ----------------------
// 有数字参数（年，月，日，时，分秒）   月份传入0--11，代表真实的1--12
var d = new Date(2030, 10, 12, 3, 12, 12);

// 有字符串参数
var d = new Date('2030-12-12 12:12:12');
var d = new Date('2033/12/12 12:12:12');
var d = new Date('2035,12,12 12:12:12');

// 有时间戳参数，时间戳就是从1970年1月1日到某某的一个毫秒数字
var d = new Date(32432443234322);


console.log(d.toLocaleString()); // 转换成本地的时间

```



#### 2、时间字符串表示

```js
var d = new Date();

// 中文表示
console.log(d.toLocaleString());
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());

// 英文表示
console.log(d.toString());
console.log(d.toDateString());
console.log(d.toTimeString());
```



#### 3、获取时间某一部分

```js
var d = new Date();
console.log(d); // {} 它是一个对象，它下面有很多的属性和方法

var year = d.getFullYear(); // 年
var month = d.getMonth() + 1; // 月 返回的是0--11，代表1--12
var day = d.getDate(); // 日

var week = d.getDay(); // 星期  返回0--6，代表周日--周六

var h = d.getHours(); // 时
var m = d.getMinutes(); // 分
var s = d.getSeconds(); // 秒

console.log(year, month, day, week, h, m, s);
```



#### 4、设置时间某一部分

```js
var d = new Date();

d.setFullYear(2030); // 设置年
d.setMonth(16); // 设置月  设置的0--11，代表1--12，具有容错的能力
d.setDate(43); // 设置日   具有容错的能力

console.log(d.toLocaleString());

```



#### 5、时间戳

时间戳：返回的是1970年1月1日零时到现在经过的毫秒数

```js
// 时间戳：从1970年1月1日到现在经过的毫秒数

var d = new Date();

console.log(d.getTime()); // 1649828957532  所有浏览器支持

console.log(Date.now()); // 1649828957532    IE8及以下不支持

```

案例：倒计时



#### 6、moment.js

官网：http://momentjs.cn/

```js
// 创建时间
var d = moment(); // 创建当前时间
var d = moment('2030-12-12 12:12:12'); // 创建其它指定时间
var d = moment(1649832870252); // 接收时间戳

// --------------------------
// 时间格式化(用得较多)
console.log(d.format('YYYY年MM月DD日 HH:mm:ss'));
console.log(d.format('YYYY年MM月DD日'));
console.log(d.format('HH:mm:ss'));
console.log(d.format('YYYY'));
console.log(d.format('MM/DD'));
console.log(d.format('HH:mm'));

// --------------------------
// 时间增和减
var d = moment().add(1, 'month').add(7, 'day'); // 增加一个月 再增加7天
var d = moment().subtract(2, 'month').subtract(7, 'day'); // 减一个月，并减7天

console.log(d.format('YYYY年MM月DD日 HH:mm:ss'));

```





## 四、字符串对象

#### 1、创建

```js
var str1 = '平头哥'; // 推荐   字面量
console.log(str1, typeof str1);

var str2 = String('平头妹');
console.log(str2, typeof str2);

var str3 = new String('平头弟'); // 不建议用，认识
console.log(str3, typeof str3); // "object"

```



#### 2、长度、下标、charAt

```js
var str = '我来优就业学习 web 前端';

// 字符串.length   长度
console.log(str.length); // 14

// 字符串.charAt(下标)   返回下标对应的字符
// 字符串[下标]    IE7及以下不支持
console.log(str[1]); // 来
console.log(str.charAt(2)); // 优

// 字符串.charCodeAt(下标);  返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535之间的整数。
// 将文字转成编码
console.log(str.charCodeAt(1)); // 26469
console.log(str.charCodeAt(2)); // 20248

// 将编码转成文字
console.log(String.fromCharCode(26469, 20248)); // 来优

```

#### 3、indexOf和lastIndexOf

- 字符串.indexOf(要查找的字符[, 查找的起始位置]);		从前向后查找
- 字符串.lastIndexOf(要查找的字符[, 查找的起始位置]);   从后向前查找

返回要查找的字符在字符串中首次出现的位置，如果没有，返回-1

如果没有第二个参数，从0开始查找

```js
var str = 'abcdeabfabg';
console.log(str.indexOf('a')); // 0
console.log(str.indexOf('a', 1)); // 5
console.log(str.indexOf('A')); // -1
console.log(str.indexOf('ab', 1)); // 5

console.log(str.lastIndexOf('a')); // 8
console.log(str.lastIndexOf('ab')); // 8

```

案例：封装一个函数，用于字符串去重



#### 4、截取

- 字符串.slice(起始下标, 结束下标)

```js
var str = 'abcdefg';
console.log(str.slice()); // abcdefg  没有参数，返回全部
console.log(str.slice(2)); // cdefg  从第一个参数处起，截到最后
console.log(str.slice(2, 5)); // cde  从第一个参数处起，到第二个参数止，不包括第二个参数
console.log(str.slice(2, -2)); // cde  负数和长度相加

```

- 字符串.substring(起始下标, 结束下标)

```js
var str = 'abcdefg';
console.log(str.substring()); // abcdefg   没有参数，返回全部
console.log(str.substring(2)); // cdefg   从第一个参数处起，截到最后
console.log(str.substring(2, 5)); // cde  从第一个参数处起，到第二个参数止，不包括第二个参数
console.log(str.substring(2, -2)); // ab  负数当作0，第二个参数比第一个小，则交换位置

```

- 字符串.substr(起始下标, 截取的个数);

```js
var str = 'abcdefg';
console.log(str.substr()); // abcdefg   没有参数，返回全部
console.log(str.substr(2)); // cdefg   从第一个参数处起，截到最后
console.log(str.substr(2, 2)); // cd   从第一个参数处开始，截两个

```



#### 5、转大小写

- 字符串.toUpperCase(); // 转大写
- 字符串.toLowerCase(); // 转小写

```js
var str = 'abcABC';

console.log(str.toUpperCase()); // ABCABC
console.log(str.toLowerCase()); // abcabc

```



#### 6、split

```js
// 字符串.split(参数); 
// 字符串以参数分隔拆分成数组

// var str = '2022-12-12'; // [2022, 12, 12]

console.log(str.split('-')); // ['2022', '12', '12']
console.log(str.split()); // ['2022-12-12']
console.log(str.split('')); // ['2', '0', '2', '2', '-', '1', '2', '-', '1', '2']

// ------------------
// 数组.join(参数)
// 数组以参数拼接成字符串
var arr = ['2022', '12', '12'];
console.log(arr.join('-')); // 2022-12-12
console.log(arr.join()); // 2022,12,12
console.log(arr.join('')); // 20221212

```

#### 7、replace

```js
// 字符串.replace(被替换的字符, 新的字符串)
// 返回替换以后的结果，不影响原字符串

var str = '小王不是老王';

var v = str.replace('小王', '王珅');
console.log(v);

```

#### 8、trim

```js
// 字符串.trim()
// IE9及以上支持
var str = '    小王    ';

console.log('(' + str + ')');
console.log('(' + str.trim() + ')');

```

