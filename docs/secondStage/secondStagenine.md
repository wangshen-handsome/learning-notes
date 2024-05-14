---

layout: secondStagenine

title: 二阶段 | 第九天

---

## 一、数组的迭代方法

迭代：循环、遍历

IE8及以下不支持，函数中的this都是window



#### 1、forEach

```js
// 数组.forEach(function(item, index, array) {});
// forEach接收一个函数做为参数，这个函数有三个参数，item数组项 index下标 array数组本身
// 作用：循环数组，仅仅代替for循环，没有返回值
var arr = ['刘备', '关羽', '张飞'];
arr.forEach(function(item, index, array) {
    console.log(this);
    console.log(item, index, array);
});
```



#### 2、map

```js
// 数组.map(function(item, index, array) {});
// map接收一个函数做为参数，这个函数有三个参数，item数组项 index下标 array数组本身
// 作用：循环数组，返回每个函数调用的结果组成的一个新数组
var arr = [1, 42, 5, 43];
var n = arr.map(function(item, index, array) {
    return item * 2;
});
console.log(n); // [2, 84, 10, 86]
```



#### 3、filter

```js
// 数组.filter(function(item, index, array) {});
// filter接收一个函数做为参数，这个函数有三个参数，item数组项 index下标 array数组本身
// 作用：循环数组，返回每个函数调用的结果为true的项组成的一个新数组
var arr = [1, 42, 5, 43, 100];
var n = arr.filter(function(item) {
    return item >= 40 && item < 100;
})
console.log(n); // [42, 43]

// 案例：数组去重
var arr = [3, 3, 4, 5, 3, 3, 4, 43, 3];
var n = arr.filter(function(item, index, array) {
    return array.indexOf(item) === index;
});
console.log(n); // [3, 4, 5, 43]
```



#### 4、every

```js
// 数组.every(function(item, index, array) {});
// every接收一个函数做为参数，这个函数有三个参数，item数组项 index下标 array数组本身
// 作用：循环数组，函数调用的结果每一次都返回true，结果为真
var arr = [1, 42, 5, 43, 100];
var n = arr.every(function(item) {
    return item > 0;
});
console.log(n);
```



#### 5、some

```js
// 数组.some(function(item, index, array) {});
// some接收一个函数做为参数，这个函数有三个参数，item数组项 index下标 array数组本身
// 作用：循环数组，只要函数调用的结果中有一次返回true，结果为true
var arr = [1, 42, 5, 43, 100];
var n = arr.some(function(item) {
    return item > 100;
})
console.log(n);
```





## 二、正则

正则表达式：是对字符串操作的一种逻辑公式，就是用事先定义好的一些特殊字符，及这些特定字符的组合，组成一个‘规则字符串’，这个规则字符串用来表达对字符串的一种过滤逻辑。

正则是操作**字符串**的



RegExp：正则(regular)    表达式(expression)



#### 1、写法

- 字面量创建: /检索字符/修饰符;
- 构造函数创建：new RegExp('检索字符', '修饰符');

```js
// 字面量创建: /检索字符/修饰符;
var re = /a/; // a即字符a
console.log(re);
console.log(typeof re); // 'object'


// 构造函数创建：new RegExp('检索字符', '修饰符');
var re2 = new RegExp('a'); // 'a'即字符a
console.log(re2);
console.log(typeof re2);


// ------------------
// 构造函数的优势：还可以使用变量，而字面量不能使用变量
var str = 'abc';
var re3 = new RegExp(str); // str即变量
console.log(re3);
console.log(typeof re3);
```



#### 2、修饰符

```js
// 修饰符g: 正则的默认规则找一个即停止，如果想全部查找，则加修饰符g

var str = '今天上课，明天上课，后天上课';

var re1 = /上课/;

var re2 = /上课/g; // g：global   全局替换
var re3 = new RegExp('上课', 'g'); // 构造函数写法，同第二种一样

console.log(str.replace(re1, '休息')); // 今天休息，明天上课，后天上课
console.log(str.replace(re2, '休息')); // 今天休息，明天休息，后天休息
console.log(str.replace(re3, '休息')); // 今天休息，明天休息，后天休息


// --------------------------------
// 修饰符i：正则区分大小写，为了不让它区分，可以加修饰符i
var str = 'abcd';
var re = /a/;
var re2 = /A/i;

console.log(re.test(str)); // true
console.log(re2.test(str)); // true
```



#### 3、正则的方法

##### 1、test

```js
// 语法：正则.test(字符串)
// 作用：检索字符串中是否包含正则要检索的内容，有则返回 true，没有则返回 false
// 常用

var str = 'hello world';

var re1 = /o/;
var re2 = /z/;

console.log(re1.test(str)); // true
console.log(re2.test(str)); // false
```



##### 2、exec

```js
// 语法：正则.exec(字符串);
// 作用：检索到正则表达式规定的内容会返回一个数组，检索不到则返回 null
// 使用少，一般用match替代

var str = 'hello world';

var re1 = /o/g;
var re2 = /z/;

console.log(re1.exec(str)); // [ "o" ]
console.log(re2.exec(str)); // null

```

##### 3、match

```js
// 语法：字符串.match(正则);
// 作用：正则去匹配字符串，如果匹配成功，就返回匹配成功的数组，如果匹配不成功，就返回null，跟exec方法一样

var str = 'hello world';

var re1 = /o/g;
var re2 = /z/;

console.log(str.match(re1)); // ['o', 'o']
console.log(str.match(re2)); // null

```

```js
// 案例：找数字
var str = 'haj123sdk54hask33dkhalsd879';
var re = /\d+/g;
console.log(str.match(re));

```



##### 4、split

```js
// 字符串.split(正则);
// 作用：按正则匹配的内容拆分成数组

// var str = 'hello web';
// var re = /\s/;
// console.log(str.split(re)); // [hello, web]

// -----------------------
var str = '2022-11-12 12:13:10'; // [2022,11,12,12,13,10]
var re = /\s|-|:/; // 以空格  或者以-  或者以:
console.log(str.split(re));

```

##### 5、replace

```js
// 字符串.replace(正则, 新的字符串)
// 作用：替换正则匹配的字符串，返回的结果是替换以后的字符串，不影响原字符串
// replace的第二个参数可以是一个字符串，也可以是一个函数，函数的第一个参数就是正则匹配成功的整体，第二个参数就是正则的第一个小括号，以此类推

var str = '今天上课，明天上课，后天上课';
var re = /上课/g;
console.log(str.replace(re, '休息'));

// ---------------------------------------------------------------
// 手机号中间四位变星
var str = '13344445555'; // 133****9999
var re = /(\d{3})(\d{4})(\d{4})/; // 小括号是分组

// 方式一
var s = str.replace(re, '$1****$3');
console.log(s); // 133****5555

// 方式二
var s = str.replace(re, function ($0, $1, $2, $3) {
    // console.log($0, $1, $2, $3);
    return $1 + '****' + $3;
})
console.log(s); // 133****5555

```

##### 6、search

```js
// 语法：字符串.search(正则);
// 作用：返回正则匹配到的第一个字符串的位置，没有返回-1，类似于indexOf

var str = 'hello world';

var re = /o/;
console.log(str.search(re)); // 4

```



#### 4、其它

##### 1、转义字符

```js
\d	匹配数字
\D	匹配非数字
\w	匹配字母和数字及_
\W	匹配非字母和数字及_
\s	匹配空白字符、空格、制表符和换行符
\S	匹配非空白字符

```

##### 2、量词

个数不确定

```js
{4,7}  : 最少出现4次，最多出现7次
{4,} : 最少出现4次，最多不限制
{4} : 正好出现4次
{1,} : 最少出现一次。简写为：+
{0,}  : 至少出现0次。简写为：*
{0,1}  : 出现0次或者1次。简写为：?
+和*的区别：+代表必须有，*代表可以没有。

```

##### 3、或者 : |

```js
var re = /\s|-|:/; // 以空格  或者以-  或者以:

```

##### 4、分组(小括号)

```
var re = /(\d{3})(\d{4})(\d{4})/; // 小括号是分组

```

##### 5、点

```js
// .  匹配除换行符外的任意字符
var str = 'hello world';
var re = /h.*o/;
console.log(str.match(re)); // ['hello wo']

// -----------------
// 真正的点，用 \.
var str1 = 'abc.html';
var str2 = 'abc4html';

var re = /abc\.html/;

console.log(re.test(str1)); // true
console.log(re.test(str2)); // false

```



##### 6、正则中的中括号及排除

字符类：即一对中括号代表一个字符

```js
// 正则中的中括号：字符类，即一个中括号代表一个字符

var str = 'abc';
var re = /a[abcd]c/; // aac abc acc adc，即中括号中可以是a b c d中的任何一个字符
console.log(re.test(str)); // true


var re = /[a-d]/; // [a-d] 即 a b c d中的任何一个
var re = /[a-zA-Z0-9]/; // 即 大小写字母及数字

// -----------------------
// 中括号中的取反
var str = 'abc';
var re = /a[^abcd]c/; // 排除 a b c d，其它的任何字符均可以
console.log(re.test(str)); // false

```



##### 7、起始和结束

```html
<input type="text">
<button>判断</button>
<script>
    var input = document.querySelector('input');
    var btn = document.querySelector('button');

    // ^ 正则的起始位置
    // $ 正则的结束位置

    btn.onclick = function() {
        var val = input.value; // 相当于字符串

        // 判断qq号
        var re = /^[1-9]\d{4,10}$/;
        if (re.test(val)) {
            alert('是QQ号')
        } else {
            alert('不是QQ号')
        }


        // 判断手机号
        var re = /^1[3-9]\d{9}$/;
        if (re.test(val)) {
            alert('是手机号')
        } else {
            alert('不是手机号')
        }

    }
</script>

```

##### 8、去除字符串左右空格

```js
var str = '   小 王   ';

// IE8及以下不支持
console.log('(' + str + ')');
console.log('(' + str.trim() + ')');

// ----------------------------
// 封装一个方法，实现去除字符串左右空格
// 原理
var re = /^\s+|\s+$/g;
console.log(str.replace(re, ''));

// 封装实现
function trim(str) {
    var re = /^\s+|\s+$/g;
    return str.replace(re, '');
}
console.log('(' + trim(str) + ')');



// ----------------------------------------
// 去除字符串中所有的空格
var str = 'sa fds sf dsaf fds fds f';
var re = /\s/g;
var s = str.replace(re, '');
console.log(s);

```

##### 9、正则相关实例

```js
// 邮编
var re = /^\d{6}$/;

// 中文
var re = /[\u4e00-\u9fa5]/g; // 有事一00，有酒罚我
var str = 'safdsaf小  sadfsd芳fsdssadafsdf，约443fdf不sfsfsf';
console.log(str.match(re).join('')); // 小芳约不

// 电子邮箱
// 4324232@qq.com
// sdfs@163.com.cn
var re = /^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/;

// 网址
// https://cn.bing.com/
// https://baidu.com/
var re = /^[a-zA-Z]+:\/\/[^\s]+$/;

// 身份证号
var re = /[1-9]\d{14}|[1-9]\d{17}|[1-9]\d{16}x/;

// 电话座机
var re = /^0\d{2,3}-[1-9]\d{6,7}$/;

```

#### 5、前瞻后顾

- 前瞻： exp1(?=exp2)  查找 exp2 前面的 exp1
- 负前瞻: exp1(?!exp2)   查找后面不是 exp2 的 exp1
- 后顾: (?<=exp2)exp1   查找 exp2 后面的 exp1
- 负后顾: (?<!exp2)exp1  查找前面不是 exp2 的 exp1



```js
var str = '我就是我，来优就业学习，高薪就业，高效就业';
var re = /就(?=业)/g;
console.log(str.replace(re, 'jiu'));

var re = /就(?!业)/g;
console.log(str.replace(re, 'jiu'));

```

```js
// 需求：找到hello nodata index
var path1 = 'path/hello.html';
var path2 = 'path/nodata.html';
var path3 = 'path/index.html';

// 前瞻
var re = /\w+(?=\.html)/;
console.log(path1.match(re)[0]);
console.log(path2.match(re)[0]);
console.log(path3.match(re)[0]);

// 后顾
var re = /(?<=path\/)\w+/;
console.log(path1.match(re)[0]);
console.log(path2.match(re)[0]);
console.log(path3.match(re)[0]);

```

```js
var str = 'a,1,b,2,c,3'; // 把字符串改成 a=1,b=2,c=3

var re = /,(?=\d)/g; // 前瞻
var re = /,(?![a-z])/g; // 负前瞻
var re = /(?<=[a-z]),/g; // 后顾
var re = /(?<!\d),/g; // 负后顾

console.log(str.replace(re, '=')); // a=1,b=2,c=3

```

