---

layout: secondStagenineteen

title: 二阶段 | 第十九天

---

## 一、本地存储

本地存储分为Cookie、 LocalStorage 与 SessionStorage

 local：本地

Session：会话

Storage：仓库

https://www.cnblogs.com/minigrasshopper/p/8064367.html



#### localStorage

- 设置：localStorage.setItem(key, value)
- 读取：localStorage.getItem(key)
- 删除：localStorage.removeItem(key)

注意：设置或读取的值都是字符串，即便你存的值不是字符串，它也会帮你转成字符串(调toString())



```js
// 设置
localStorage.setItem('name', 'zs');
localStorage.setItem('age', 3);

// 读取
console.log(localStorage.getItem('name'));

// 删除
localStorage.removeItem('name');

// 清空所有(一般不用)
localStorage.clear();
```

```js
var obj = {
    name: 'zs',
    age: 3,
};

// console.log(obj.toString()); // '[object Object]'
// localStorage.setItem('object', obj); // 存储的时候，对象调用toString()方法，转成字符串

// ---------------------
localStorage.setItem('object', JSON.stringify(obj)); // 设置对象

var str = localStorage.getItem('object');
console.log(JSON.parse(str)); // 读取对象
```





![image-20210702134446211](/public/img/secondStage/nineteen/image-20210702134446211.png)





## 二、JSON

- JSON.stringify(对象) 将对象转成：长得像对象的字符串
- JSON.parse(字符串) 将字符串转成对象



```js
var obj = {
    name: 'zs',
    age: 3,
};

// 将对象转成字符串
var str = JSON.stringify(obj);
console.log(str); // '{"name":"zs","age":3}'
console.log(typeof str); // string

// 将字符串转成对象
var o = JSON.parse(str);
console.log(o); // {name: 'zs', age: 3}
console.log(typeof o); // object
```

