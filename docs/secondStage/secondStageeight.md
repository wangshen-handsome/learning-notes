---

layout: secondStageeight

title: 二阶段 | 第八天

---

# 数组

数组：使用单独的变量名来存储一系列的值。数组可以存储任何数据类型。



## 一、创建

```js
// 字面量创建（推荐）
var arr = []; // 空数组
var arr = [1, 2, 3];
var arr = [3, 'ab', true, null, undefined, [], {}, function() {}]; // 数组可以存储任意数据类型
var arr = [3]; // [3]


// 构造函数创建(不推荐使用)
var arr = new Array(); // 空数组
var arr = new Array(1, 2, 3);
var arr = new Array(3); // [undefined, undefined, undefined]
var arr = new Array('3'); // ['3']

console.log(arr);
```



## 二、读写

```js
var arr = ['刘备', '关羽', '张飞'];

console.log(arr);

// 读：数组[下标]
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// ------------------

// 循环
for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i]); // 读
    arr[i] = '我所认识的' + arr[i];
}
console.log(arr);

// ------------------------
// 写：数组[下标] = 值;
// 如果有这个下标，就修改这个值，如果没有这个下标，则数组的长度增加以适应这个下标

arr[0] = '许怡'; // ['许怡', '关羽', '张飞']
arr[10] = '老王'; // ['刘备', '关羽', '张飞', 空属性 × 7, '老王']
console.log(arr);
```



## 三、数组长度

```js
var arr = ['刘备', '关羽', '张飞'];

// 数组的长度，可读可写
console.log(arr.length); // 3

// arr.length = 1;
arr.length = 100;
console.log(arr);

// -----------------------------
// 字符串长度，只读不写
var str = 'abc';
console.log(str.length); // 3
str.length = 1;
console.log(str); // 'abc'
```



## 四、数据存储

```js
// 基本数据类型：number string boolean null undefined
// 存储在栈中

// 引用数据类型：obect([], {}, function, new Date())
// 存储在堆中

// 基本类型：存储在栈里
var a = 5;
var b = a; // 将5复制一份，再赋给b
a++;
console.log(a, b); // 6 5

// ----------------------------------
// 引用类型：存储在堆里
var arr1 = [1, 2, 3];
var arr2 = arr1; // 将arr1指向的内存地址，赋给arr2一份，因此它们俩其实是指向同一个内存空间
arr1[3] = 4;

console.log(arr1); // [1,2,3,4]
console.log(arr2); // [1,2,3,4]
```



## 五、数组添加和删除(栈方法)

```js
var arr = ['刘备', '关羽', '张飞'];

// 数组.push(参数);
// 作用：将参数添加到数组的尾部，一次可以添加多个，返回修改后的数组的长度
var n = arr.push('老王', '小张');
console.log(arr);
console.log(n);

// 数组.unshift(参数);
// 作用：将参数添加到数组的头部，一次可以添加多个，返回修改后的数组的长度
var n = arr.unshift('老王', '小张');
console.log(arr);
console.log(n);

// 数组.pop();
// 作用：从数组的尾部删除，一次只能删除一个，返回被删除的项
var n = arr.pop();
console.log(arr);
console.log(n); // 张飞

// 数组.shift();
// 作用：从数组的头部删除，一次只能删除一个，返回被删除的项
var n = arr.shift();
console.log(arr);
console.log(n);
```

![image-20220414111004064](/public/img/secondStage/eight/image-20220414111004064.png)







## 六、强大的splice

数组.splice(起始下标, 要删除的个数, 要添加的项[多个]);

- 返回的是被删除的项组成的数组，没有删除项，返回空数组
- 可以实现任意位置的：删除 替换 添加

```js
// 数组.splice(起始位置, 要删除的个数, 要添加的项...);
// 返回的是被删除的项组成的数组，没有删除项，返回空数组
// 可以实现任意位置的：删除 替换 添加

var arr = ['刘备', '关羽', '张飞'];

// 删除
var n = arr.splice(1, 1);
console.log(arr);
console.log(n);

// 替换
var n = arr.splice(1, 1, '关平', '关兴');
console.log(arr);
console.log(n);

// 添加
var n = arr.splice(2, 0, '关平', '关兴');
console.log(arr);
console.log(n);
```





## 七、sort排序

- 数组.sort();
- 默认是以字符串的方式排序的，会修改原数组，并返回修改后的数组

```js
var arr = [5, 8, 7, 4, 2, 11, 3, 9, 6];

// -----------------------------
// 默认是按字符串排序，即便你写的是数字，它也是按字符串排序
arr.sort();
console.log(arr); // [11, 2, 3, 4, 5, 6, 7, 8, 9]
```

```js
// 如果要按数字排序，需要接收一个比较函数，比较函数根据返回的是正数、负数、0来确定排序规则
arr.sort(function(a, b) {
    return a - b; // 从小到大
    // return b - a; // 从大到小
    // return Math.random() - 0.5; // 无序
});

console.log(arr);
```



以对象的某个key排序

```js
// 按 date 进行降序排序，如果 date 一样，按 DIU 进行降序排序
var arr = [
    { "date": "2018-08-01", "DIU": 1209, "country": "US" },
    { "date": "2018-08-02", "DIU": 680, "country": "GB" },
    { "date": "2018-08-01", "DIU": 2311, "country": "CN" },
    { "date": "2018-08-02", "DIU": 879, "country": "US" },
    { "date": "2018-08-03", "DIU": 1525, "country": "CN" },
    { "date": "2018-08-02", "DIU": 1525, "country": "CN" }
];


// console.log(Date.parse("2018-08-01")); // 时间戳
arr.sort(function(a, b) {
    var v1 = Date.parse(a.date)
    var v2 = Date.parse(b.date)

    if (v1 === v2) {
        return b.DIU - a.DIU;
    } else {
        return v2 - v1;
    }
})
console.log(arr);

```



以中文排序

```js
var arr = [
    { name: '李文涛', num: 86 },
    { name: '张新昊', num: 76 },
    { name: '黄锦标', num: 99 },
    { name: '刘传超', num: 34 },
    { name: '孙传恒', num: 56 },
    { name: '杜旭超', num: 78 }
];

// 按num排序
arr.sort(function(a, b) {
    return a.num - b.num;
})
console.log(arr);

// ---------------------
// 按中文拼音首字母
arr.sort(function(a, b) {
    return a.name.localeCompare(b.name, 'zh');
})
console.log(arr);

```

## 八、排序算法

- 选择排序

```js
var arr = [5, 32, 2, 7, 45];

// 选择排序
// 从第一项起，每一项都和后面所有项依次比较，如果被比较项比当前项小，则两项交换位置。
// 每一轮，都找到一个最小的数，放到前面。
function fn(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) { // 如果比它大，则交换位置
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(fn(arr));

```





- 冒泡排序

```js
var arr = [5, 32, 2, 7, 45];

// 冒泡排序
// 从第一项起，比较相邻的两个元素，如果前一个比后一个大，则交换位置。
// 第一轮的时候最后一个元素应该是最大的一个。每一轮最后一个元素已经是最大的了，所以最后一个元素下一轮不用比较。
function fn(arr) {
    for (var i = 1; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) { // 相邻的两个元素比较
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(fn(arr));

```



## 九、数组其它方法

##### concat

```js
// 数组.concat(参数);  参数可以是数组，也可以是某个变量
// 将数组和参数拼接起来，返回一个新数组，不改变原数组

var arr1 = [1, 2, 3];
var arr2 = ['a', 'b', 'c'];

var arr = arr1.concat(arr2, '小王');
console.log(arr); // [1, 2, 3, 'a', 'b', 'c', '小王']
console.log(arr1);
console.log(arr2);

// 建议使用方法
var arr = [].concat(arr1, arr2, '小王');
console.log(arr); // [1, 2, 3, 'a', 'b', 'c', '小王']

```

数组克隆

```js
// 克隆arr1到arr2
var arr1 = [1, 2, 3];

// 不可以
// var arr2 = arr1; // 地址的引用


// -----------------
// 方式一：循环
var arr2 = []; // 给arr2分配一个地址空间
for (var i = 0; i < arr1.length; i++) {
    // arr2.push(arr1[i]);
    arr2[i] = arr1[i];
}

// ---------------------
// 方式二：concat拼接
var arr2 = [].concat(arr1);

// ------------------------
// 方式三：slice截取
var arr2 = arr1.slice();

// -----------------------
// 检查克隆结果
arr2.push(4);
console.log(arr1);
console.log(arr2);

```





##### reverse

```js
// 数组.reverse();
// 作用：反转数组

var arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]

```

字符串反转

```js
// 字符串反转
var str = 'abc'; // 'cba'

// 方式一
console.log(str.split('').reverse().join(''));


// 方式二
var s = '';
for (var i = str.length - 1; i >= 0; i--) {
    s += str[i]
}
console.log(s);

```





##### indexOf和lastIndexOf

- 数组.indexOf(要查找的项[, 查找的起始位置])
- 数组.lastIndexOf(要查找的项[, 查找的起始位置])

```js
// 数组.indexOf(要查找的项[, 查找的起始位置]); 从左向右找
// 数组.lastIndexOf(要查找的项[, 查找的起始位置]); 从右向左找
// IE8及以下不支持

var arr = [4, 4, 4, 3, 3, 3, 6, 3, 2, 5, 3];

console.log(arr.indexOf(3)); // 3
console.log(arr.indexOf('3')); // -1
console.log(arr.lastIndexOf(3)); // 10


// console.log(3 == '3'); // true
// console.log(3 === '3'); // false

```

数组去重

```js
var arr = [4, 4, 4, 3, 3, 3, 6, 3, 2, 5, 3];
console.log(fn(arr)); // [4,3,6,2,5]

console.log(arr);

// 方式一
function fn(arr) {
    var newArr = []; // 最终的结果仓库

    for (var i = 0; i < arr.length; i++) {
        var v = arr[i]; // 即原数组中的每一项

        // 检查v是否在newArr中存在，如果不存在，则添加进来
        if (newArr.indexOf(v) === -1) {
            newArr.push(v);
        }
    }
    return newArr;
}


// ---------------------
// 方式二
function fn(arr) {
    arr = [].concat(arr); // 赋值，即在内存中开辟一个新的空间
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}

```



##### slice

```js
// 数组.slice(起始位置, 结束位置)
var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e', 'f', 'g']
console.log(arr.slice(2)); // ['c', 'd', 'e', 'f', 'g']
console.log(arr.slice(2, 5)); // ['c', 'd', 'e']
console.log(arr.slice(2, -2)); // ['c', 'd', 'e']

```



##### Array.isArray

```js
// Array.isArray(参数)
// 判断参数是否是一个数组，如果是返回true
// IE8及以上支持

var arr = [];

console.log(typeof arr); // 'object'
console.log(typeof null); // 'object'
console.log(typeof {}); // 'object'

console.log(Array.isArray(arr)); // true
console.log(Array.isArray(null)); // false
console.log(Array.isArray({})); // false

```



| 方法                                                   | 作用                                                                                 | 说明       |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------ | ---------- |
| 数组.push(参数)                                        | 向数组的尾部添加，一次可以添加多个，返回修改后的数组的长度                           | 修改原数组 |
| 数组.unshift(参数)                                     | 向数组的前面添加，一次可以添加多个，返回修改后的数组的长度                           | 修改原数组 |
| 数组.pop()                                             | 删除数组的最后一项，一次只能删除一个，返回被删除的项                                 | 修改原数组 |
| 数组.shift()                                           | 删除数组的第一项，一次只能删除一个，返回被删除的项                                   | 修改原数组 |
| 数组.splice(起始下标, 要删除的个数, 要添加的项[多个]); | 可以实现任何位置的 删除 、添加、替换。返回由删除的项组成的数组                       | 修改原数组 |
| 数组.sort()                                            | 默认是以字符串的方式排序的，会修改原数组，并返回修改后的数组                         | 修改原数组 |
| 数组.reverse()                                         | 翻转数组，会修改原数组，并且返回修改后的数组                                         | 修改原数组 |
| 数组.concat(参数)                                      | 将数组和参数拼接起来，返回一个新数组，不改变原数组。参数可以是数组，也可以是某个变量 |            |
| 数组.join(参数)                                        | 将数组组以参数拼接成字符串                                                           |            |
| 数组.indexOf(要查找的项, 查找的起始位置)               | 查找当前项在数组中首次出现的位置，如果没有返回-1                                     |            |
| 数组.slice(起始位置, 结束位置)                         | 截取数组                                                                             |            |
| Array.isArray(参数)                                    | 判断数组类型                                                                         |            |
| 数组.forEach(function(item, index, array) {});         | 循环数组，仅仅代替for循环，没有返回值                                                |            |
| 数组.map(function(item, index, array) {});             | 循环数组，返回每个函数调用的结果组成的一个新数组                                     |            |
| 数组.filter(function(item, index, array) {});          | 循环数组，返回每个函数调用的结果为true的项组成的一个新数组                           |            |
| 数组.some(function(item, index, array) {});            | 循环数组，只要函数调用的结果中有一次返回true，结果为true                             |            |
| 数组.every(function(item, index, array) {});           | 循环数组，函数调用的结果每一次都返回true，结果为真                                   |            |





