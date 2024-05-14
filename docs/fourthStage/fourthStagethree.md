---

layout: fourthStagethree

title: 四阶段 | 第三天

---

## day03 watch、计算属性、过滤器、脚手架

### 课程回顾

```
配置对象
	el
	data
	methods
	watch 监听
	computed 计算属性
	filter 过滤器
	
	钩子函数（方法）
```







### 一、watch监听（侦听器）

#### 1.1概念

```
监听data中的数据的变化，当数据发生变化，会触发监听器。分为浅监听和深度监听

浅监听可以监听字符串和简单数组的元素变化
但浅监听无法监听到对象的变化（是指对象发生变化时，不会触发监听函数）
所以我们需要利用深度监听去监听对象数据的变化
```

#### 1.2 监听的方法

你要监听哪一个属性，就调用那个属性的监听方法

- 浅监听

浅监听可以实现字符串的监听
浅监听方法有两个参数，一、新值      二、上一次的值（旧值）

```
watch:{
	要监听的data数据(新值，旧值){
	
	}
}
```

- 深度监听

```
watch:{
	要监听的data对象：{
		deep:true,
		handler(新值){
			
		}
	}
}
```

#### 1.3 使用场景

摸拟百度搜索（自动联想）

```
百度搜索接口
联想列表（jsonp使用）：http://suggestion.baidu.com/su?cb=callback&wd=关键词
搜索列表：http://www.baidu.com/s?wd=关键词
```

![image-20220208163129798](/public/img/fourthStage/three/image-20220208163129798.png)

```
分析产品需求：
一、搭建静态
二、实时获取用户输入的内容 （利用watch实现数据监控）
三、当数据发生变化就要调用接口
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="./node_modules/vue/dist/vue.js"></script>
    <style>
      .bg {
        background-color: green;
        color: white;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <input
        type="text"
        placeholder="请输入你要搜索的内容"
        v-model.trim="txt"
        @keydown.down="down"
        @keydown.up="up"
        @keydown.enter="enter"
      />
      <ul>
        <li
          v-for="(item, index) in list"
          :key="index"
          :class="{'bg': sel == index}"
        >
          {{item}}
        </li>
      </ul>
    </div>

    <script>
      let vm = new Vue({
        el: "#app",
        data: {
          txt: "", // 用户输入内容
          list: [], // 联想的数据列表
          sel: -1, // 选中的列表项下标
        },
        methods: {
          // 向下按钮
          down() {
            this.sel++;
            if (this.sel >= this.list.length) {
              this.sel = 0;
            }
          },
          // 向上按键
          up() {
            this.sel--;
            if (this.sel < 0) {
              this.sel = this.list.length - 1;
            }
          },
          // 绑定一个回车发起请求事件
          enter() {
            // console.log(this.list[this.sel]);
            location.href = "http://www.baidu.com/s?wd=" + this.list[this.sel];
          },
        },
        watch: {
          // 监听txt的变化，调用这个函数
          txt(newVal) {
            // console.log(newVal); // 用户搜索的关键词
            if (!newVal) {
              // 如果用户没有输入内容，则不发起请求
              this.list = [];
              return;
            }

            // 利用jsonp发起请求（解决跨域）
            // 1、创建script标签
            let script = document.createElement("script");
            // 2、设置src，回调函数ab写死了
            script.src = "http://suggestion.baidu.com/su?cb=ab&wd=" + newVal;
            // 3、将它加入到body中
            document.body.appendChild(script);
          },
        },
      });

      // 封装一个函数，准备给jsonp的回调函数使用
      // 当拿到数据之后，再赋给vm中的list
      function ab(res) {
        // console.log(res.s, "从后端取到了数据");
        vm.list = res.s;
      }
    </script>
  </body>
</html>
```



**深度监听**

```html
<div>
    字符串：
    <input type="text" v-model='msg'>
</div>
<div>
    简单数组：
    <input type="text" v-model='arr[1]'>
</div>
<div>
    对象：
    <input type="text" v-model='obj.name'>
</div>
```

```js
let vm = new Vue({
    el: "#box",
    data: {
        msg: "",
        arr: ['苹果', '榴莲', '车厘子', '桃子'],
        obj: {name: '曹操'}
    },
    watch: {
        msg(newVal) {
            console.log(newVal, '新值');
        },
        // 简单数组的某一项发生变化，新值可以返回整个数组
        arr(newVal) {
            console.log(newVal, '新值数组元素');
        },
        // 浅监听不能监听对象的数据变化
        // obj(newVal) {
        //     console.log(newVal, '新值对象');
        // }
        obj: {
            deep: true, // deep 深度，开启深度模式
            handler(newVal) {
                console.log(newVal, '新值对象');
            }
        }
    }
});

```





------

### 二、computed 计算属性

#### 2.1概念

```
vue不希望模板（指的是{{}} 插值表达式里面）过于复杂，所以创建了计算属性（其实就是函数），在计算属性中，我们可以书写大量的逻辑计算，以及其他逻辑

```

计算属性也是属性（因此不需要调用，虽然它是函数，但是它需要return返回），它其实是对data中的属性进行一次再加工，它依赖data中的属性，然后返回一个值，直接在插值表达式中使用。当data中的属性发生变化时，它也会重新执行并得到一个值。

watch监听是监听data中的数据变化，只要data中的数据发生变化，就会调用相应的函数做事。即data中的数据变化，引起别的事情发生



```html
<h1>不使用计算属性：{{msg.split('').reverse().join('')}}</h1>
<h1>使用计算属性：{{msgRe}}</h1>

```

```js
data: {
    msg: "小王快跑",
},
computed: {
    // 写多个计算属性
    // 什么时候会想到用计算属性，当你有大量的逻辑计算最终只想要渲染一个结果的时候
    // 什么时候会想到用watch监听，当你的数据发生变化需要做一件事情的时候
    msgRe() {
        return this.msg.split("").reverse().join("");
    },
},

```



#### 2.2计算属性和watch的区别

什么时候会想到用计算属性，当你有大量的逻辑计算最终只想要渲染一个结果的时候（多对一）

什么时候会想到用watch监听，当你的数据发生变化需要做**一些**事情的时候（一对多）



计算属性是多对一，即可以计算多个属性，结果归为一个

监听是监听一个属性的变化，去执行多个事





#### 2.3计算属性和methods的区别

- 相同点：它们的结果都是通过依赖所决定
- 不同点：**计算属性具有缓存的效果**，无论调用多少次，只要依赖没有发生变化，都会应用第一次执行结果。但是方法是调用几次执行几次
- 当依赖发生变化时，计算属性和方法都会会重新调用



#### 2.4使用场景

- 如果你有大量的逻辑计算，而最终只需要一个结果的时候，就用计算属性
- 而你有大量交互，事件，这个时候必须要封装methods



#### 2.5get 和 set

`用得较少`

计算属性一般只是用于取值，并不会去修改它内容

但是有一些特殊的需求，一定要修改计算属性结果，如何解决？

它本身还有get(取值)和set(赋值)

**如果给它赋值，则会先执行set然后执行get**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="./node_modules/vue/dist/vue.js"></script>
  </head>
  <body>
    <div id="app">
      <h1>计算属性直接使用：{{fn1}}</h1>

      <hr />

      <h1>使用get/set：{{fn2}}</h1>
      <button @click="changeX">更改x的值</button>
    </div>

    <script>
      new Vue({
        el: "#app",
        data: {
          x: 10,
          y: 20,
        },
        methods: {
          changeX() {
            // 计算属性一般只用于取值，但是如果要是用于赋值，赋给它的值会触发set，并把值传给set的参数。当调用set了以后，会再调用get返回一个值
            this.fn2 = 20; // 给计算属性赋值（因为计算属性本质也是属性，因此可以赋值），则计算属性fn2中的set执行，只要set一调用，则get重新执行
          },
        },
        computed: {
          fn1() {
            return this.x * this.y;
          },
          fn2: {
            // 取值
            get() {
              return this.x + this.y;
            },
            set(val) {
              // console.log("我执行了");
              // console.log(val);
              this.x = val;
            },
          },
        },
      });
    </script>
  </body>
</html>

```





#### 2.6购物车（计算属性的应用）

1、搭建静态页骨架（除去全选和单选）

2、实现购物车列表的逻辑部分（合计金额（计算属性实现）、数量的加减，删除）

3、实现单选和全选（利用事件实现，不用监听实现）

​	1、利用全选去控制单选

​	如果全选选中，每一个单选也选中，如果全选不选，每一个单选也不选

​	2、利用单选去控制全选

​	所有的单选都选中的情况下，全选选中，只要有一个单选没有选，则全选不选

![image-20220209093530282](/public/img/fourthStage/three/image-20220209093530282.png)

```js
goodsList: [
    {
        id: 1,
        name: '简醇 0添加蔗糖',
        img: 'https://img20.360buyimg.com/n0/s80x80_jfs/t1/180771/24/20439/205431/61211b33Ef0d37692/a92184c102ac91a9.jpg',
        price: 39.8,
        num: 1,
        checked: false
    },
    {
        id: 2,
        name: '空气炸锅家用智能',
        img: 'https://img20.360buyimg.com/n0/s80x80_jfs/t1/205965/17/6944/216520/61455318E1d4e7c49/3133d14c124041af.jpg',
        price: 299,
        num: 1,
        checked: false
    },
    {
        id: 3,
        name: '联想乐檬K12Pro',
        img: 'https://img20.360buyimg.com/n0/s80x80_jfs/t1/180771/24/20439/205431/61211b33Ef0d37692/a92184c102ac91a9.jpg',
        price: 999,
        num: 1,
        checked: false
    }
]

```









### 三、filter 过滤器

#### 3.1 概念

```
用于解析文本格式 {{}}    （即对{{}}中的文本进行再次加工）

大部分情况，后端返回给我们的数据，我们都可以直接渲染。但是有一些时候，返回来的内容我们还要做二次加工（二次封装）。那么这个时候你可以把这种类似格式的转化封装一个过滤器器方法，哪里需要哪里调用

比如： 
后端返回了timer: 1632469978954 一般都是时间戳
用户想要看到的格式：'2021/09/24' 或者 '2021-09-24 15:53:48'

封装好的过滤器通过“|”过滤符去调用(管道符)

其实过滤器就是函数方法，但是它可以作用于{{ timer | 过滤器(参数) }}

```





#### 3.2 创建过滤器的方式

- 局部创建过滤器

```
filters:{
	过滤器名称(要过滤的内容，调用过滤器传入的参数){
		return 要转化的最终结果
	}
}

```

- 全局创建过滤器(一般用的比较多，要放在vue实例的前面)

```
Vue.filter('过滤器名称',(要过滤的内容，调用过滤器传入的参数)=>{
	return 要转化的最终结果
})

```

- 使用过滤器

```
{{ 需要过滤的数据 | 过滤器名称[(过滤器参数)] }}

```



#### 3.3局部过滤器案例

保留n位小数位

```html
<div id="box">
    <h1>原有价格：{{price}}</h1>
    <h1>转化后的价格：{{price | toPrice(2)}}</h1>
    <h1>转化后的价格：{{price | toPrice(4)}}</h1>
</div>

```

```js
let vm = new Vue({
    el: "#box",
    data: {
        price: 99
    },
    filters: {
        // 你在这里可以创建N个过滤器
        // 第一个参数为需要操作的数据，第二个参数为方法传进来的参数
        // 保留几位小数
        toPrice(n, m) {
            // console.log(n); // 前面要操作的数据
            // console.log(m); // 传入的参数
            return n.toFixed(m);
        }
    }
});

```



#### 3.4全局过滤器案例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="./node_modules/vue/dist/vue.js"></script>
    <style>
      .item {
        padding: 10px;
        margin: 10px;
        border: 1px solid #ccc;
      }
    </style>
  </head>
  <body>

    <div id="app">
      <ul>
        <li class="item" v-for="item in list" :key="item.id">
          <p>标题：{{item.title}}</p>
          <p>时间：{{item.time | timeParse('YYYY-MM-DD HH:mm:ss')}}</p>
          <p>时间：{{item.time | timeParse('YYYY年MM月DD日 HH:mm')}}</p>
          <p>时间：{{item.time | timeParse('YYYY/MM/DD')}}</p>
        </li>
      </ul>
    </div>

    <script>
      // 2022-06-13 07:00:00
      // 2022年06月12日 20:17
      // 2022/06/12

      Vue.filter("timeParse", (n, type) => {
        // console.log(n); // 时间戳
        // console.log(type); // 需要的时间格式类型

        n = n / 1;

        let d = new Date(n); // 创建一个时间对象，n必须是一个数字的时间戳
        let year = d.getFullYear(); // 年
        let month = (d.getMonth() + 1).toString().padStart(2, "0"); // 月
        let day = d.getDate().toString().padStart(2, "0"); // 日
        let h = d.getHours().toString().padStart(2, "0"); // 时
        let m = d.getMinutes().toString().padStart(2, "0"); // 分
        let s = d.getSeconds().toString().padStart(2, "0"); // 秒

        // console.log(year, month, day, h, m, s);
        switch (type) {
          case "YYYY-MM-DD HH:mm:ss":
            return `${year}-${month}-${day} ${h}:${m}:${s}`;
            break;
          case "YYYY年MM月DD日 HH:mm":
            return `${year}年${month}月${day}日 ${h}:${m}`;
            break;
          default:
            return `${year}/${month}/${day}`;
        }
      });

      new Vue({
        el: "#app",
        data: {
          list: [
            {
              id: 1,
              title: "小王快跑",
              time: "1655100000000",
            },
            {
              id: 2,
              title: "今天吃席",
              time: 1655107820654,
            },
            {
              id: 3,
              title: "明天吃羊",
              time: 1655107820654,
            },
          ],
        },
      });
    </script>
  </body>
</html>

```





### 总结

- watch分为浅监听和深监听
- filter分为局部过滤器和全局过滤器
- computed没有全局和局部，也没有深浅





### 四、搭建脚手架

#### 4.1 搭建环境

一台电脑只需要装一次

```
一、全局安装webpack和webpack-cli
npm i webpack@4 webpack-cli@3 -g

查询版本
webpack -v
webpack 4.46.0

=======================================
二、全局安装vue/cli脚手架
npm i -g @vue/cli@4

查询版本
vue -V  或者是  vue --version
@vue/cli 4.5.19

```



#### 4.2 创建项目的命令

```
最好在一个空文件夹下创建。注意项目名称不能用驼峰，不要用关键字
vue create 项目名称

启动项目，一定要进入项目，看到node-modules文件夹
再运行：npm run serve

```

![image-20211206203558300](/public/img/fourthStage/three/image-20211206203558300.png)

![image-20211206204004320](/public/img/fourthStage/three/image-20211206204004320.gif)

空格选择

![image-20211206204135433](/public/img/fourthStage/three/image-20211206204135433.png)

![image-20211206204229621](/public/img/fourthStage/three/image-20211206204229621.png)

选择package.json管理包

![image-20211206204339109](/public/img/fourthStage/three/image-20211206204339109.png)

![image-20211206204421998](/public/img/fourthStage/three/image-20211206204421998.png)

![image-20220916171311649](/public/img/fourthStage/three/image-20220916171311649.png)

启动项目，一定要进入项目，看到node-modules
再运行：npm run serve