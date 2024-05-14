---

layout: fourthStagesixteen

title: 四阶段 | 第十六天

---

## 一、vue3

### 1.1简介



- - 2020年9月18日，Vue.js发布3.0版本，代号：One Piece（海贼王）
  - vue3提供了更好的性能、更小的捆绑包体积、更好的 TypeScript 集成、用于处理大规模用例的新 API
  - 3.0 版本的开发周期长达两年多，期间产生了 30+ RFCs、2600+ commits、628 pull requests，以及核心仓库之外的大量开发和文档工作

  <img src="https://user-images.githubusercontent.com/499550/93624428-53932780-f9ae-11ea-8d16-af949e16a09f.png" style="width:200px" />

### 1.2vue3优势

- **性能提升**

  - 打包大小减少41%
  - 初次渲染快55%, 更新渲染快133%
  - 内存减少55%

- **底层重构**

  - 使用Proxy代替defineProperty实现响应式，不再遍历所有属性，速度更快

  - 重写虚拟DOM的实现和Tree-Shaking

    Tree Shaking 指的就是当我引入一个模块的时候，我不引入这个模块的所有代码，我只引入我需要的代码，这就需要借助 webpack 里面自带的 Tree Shaking 这个功能来帮我们实现。

- **支持ts**

  - 3.0 新加入了TypeScript的支持和PWA

    其实pwa就是可以做成类似于app的小应用，可以自己设置名字和图标，只要在浏览器的地址栏后面点击安装就可以安装到桌面（轻量，或许有几百kb的缓存数据），即开即用，省去了去软件商店安装的过程，还不用上架软件商店就可以有原生app的体验。

- **新的特性**

  - Composition API（组合API）
    - setup配置
    - ref与reactive
    - watch与computed
    - ……
  - 新的内置组件
    - Fragment
    - Teleport
    - Suspense
  - 其他改变
    - 新的生命周期钩子
    - 组件可以有多个根标签
    - 标签名可以驼峰命名
    - ……



### 1.3创建vue3.0工程

创建vue3项目有两种方式：vue-cli(webpack) 和 vite(新的构建工具)

#### 1.vue-cli创建项目

**安装最新脚手架**

```
npm i -g @vue/cli        // 全局安装
npm i -g @vue/cli@4.5    // 全局安装具体版本脚手架

npm uninstall -g @vue/cli        // 全局卸载命令
```

**安装成功查看脚手架版本** 

```
vue -V
```

**开始构建项目**

```
vue create 项目名

如
vue create demo
```

**启动项目**

```
npm run serve

项目运行在8080
http://localhost:8080
```



#### 2.vite创建项目（推荐）

官方文档：https://v3.cn.vuejs.org/guide/installation.html#vite

vite官网：https://vitejs.cn

- 什么是vite
  - 尤雨溪团队开发的新一代前端构建工具，可以媲美webpack
- 优势如下：
  - 开发环境中，无需打包操作，可快速的冷启动。
  - 轻量快速的热重载（HMR）。
  - 真正的按需编译，不再等待整个应用编译完成。
- 传统构建 与 vite构建对比图

![img](https://img-blog.csdnimg.cn/20210415110141517.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxMTg5OTk2,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20210415110207763.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxMTg5OTk2,size_16,color_FFFFFF,t_70)

webpack会先打包，然后启动开发服务器，请求服务器时直接给予打包结果。
而vite是直接启动开发服务器，请求哪个模块再对该模块进行实时编译。

```bash
### 创建工程
npm init vite-app 项目名称
### 进入工程目录
cd 项目名称
### 安装依赖
npm i
### 运行
npm run dev

项目运行在3000端口
http://localhost:3000
```



**第一次安装时**，会出现以下界面，选择y

![image-20220924160325608](/public/img/fourthStage/sixteen/image-20220924160325608.png)

创建项目完成后，要进入到项目，先安装依赖，再启动项目

![image-20220924160417171](/public/img/fourthStage/sixteen/image-20220924160417171.png)



如果需要修改端口，启动命令：npm run serve，这样就运行在8080端口

![image-20221010143918130](/public/img/fourthStage/sixteen/image-20221010143918130.png)





#### 3.重置

1、删除index.css

2、清空assets和components

3、重置App.vue

![image-20221010150748930](/public/img/fourthStage/sixteen/image-20221010150748930.png)





## 二、常用 Composition API

Composition API：即组合式 API

官方文档: https://v3.cn.vuejs.org/guide/composition-api-introduction.html



#### 2.1setup函数

**vue2开发缺点和vue3开发优点**

```
vue2代码冗余，相对杂乱
vue3则可以把相关的功能代码抽离分割在一起，方便开发者快速阅读，这个就是组合式api优势
```

**setup使用**

setup的意思是准备，它是在props、data、computed、methods 、生命周期等函数之前运行的。



注意：在setup方法中，无法访问this，因为在它们之前就执行了

1. setup是Vue3.0中新增的一个配置项，值为一个**函数**。

2. setup是所有**Composition API（组合API）表演的舞台** ”。

3. 组件中所用到的：数据、方法、生命周期等等，都可以配置在setup中。

4. setup的参数（两个：props，context）

   1. props 包含了父组件传递的数据（但是：子组件中要添加props:[]接受属性，在setup函数中才能看到）
   2. context 替代了`this`的作用，而`setup`内部的`this`直接指向了`undefined`。这么设计是为了避免一些常见的`this`的错误用法，需要通过context来访问以前通过`this`访问的内容，比如$attr、$slots、$emit，弱化了this，防止因为this指向带来的问题。

5. setup函数的两种返回值：

   1. 若返回一个对象，则对象中的属性、方法，在模板中均可以直接使用。
   2. 若返回一个渲染函数：则可以自定义渲染内容。（了解）

6. 注意点：

   尽量不要与Vue2.x配置混用

   - Vue2.x配置（data、methos、computed...）中**可以访问到**setup中的属性、方法。
   - 但在setup中**不能访问到**Vue2.x配置（data、methos、computed...）因为没有this。
   - 避免重名



在components下面创建setup文件夹，再创建index.vue和setup.vue。让它们形成父子关系，然后app.vue中引入index.vue。在setup.vue中实现逻辑

**代码实例**

```vue
<template>
  <div class="alert alert-info">
    <h1>setup的使用</h1>
    <p>名字是：{{ name }}</p>
    <p><button @click="changeName">修改名字</button></p>

    <p><button @click="changeAbc">调用父组件中的一个自定义事件</button></p>
  </div>
</template>

<script>
import { h } from "vue"; // 用于返回渲染函数
export default {
  setup(props, context) {
    // 1、没有this
    console.log(this); // undefined
    
    // ----------------
    // 2、setup的参数
    // 参数1：父传子数据，注意一定要在子组件中通过props属性接收，这里才有值
    // 参数2：context代替当前组件中的this
    console.log(props, context);

    // ---------------
    // 3、执行顺序
    console.log("setup"); // 在所有的生命周期函数前面执行

    // ---------------
    // 4、定义当前组件页面上需要的数据data、方法methods，切记一定要返回（return）

    // 以下方法定义的数据，数据都是非响应式数据，即后面修改数据，视图不会发生变化
    // 定义数据
    let name = "张三";

    // 定义方法
    function changeName() {
      name = "李四";
      console.log("改name，我执行了");
      console.log(name);
    }

    function changeAbc() {
      // 因为没有this，所以用context调用emit，执行子传父
      context.emit("changeAbc", "子传父");
    }

    // ---------------
    // 5、返回前面定义好的数据和方法，格式是：{}
    return {
      name,
      changeName,
      changeAbc
    };

    // ---------------
    // 6、返回一个用于渲染的函数
    // return () => h("h3", "这是用h函数渲染的视图");
  },

  props: ["msg"],

  beforeCreate() {
    console.log("beforeCreate");
  },
};
</script>

<style scoped>
</style>
```



#### 2.2ref函数

- 作用: 定义一个响应式的数据
- 语法: `const xxx = ref(数据)`
  - 创建一个包含响应式数据的引用对象（reference对象，简称ref对象）
  - JS中操作数据： `xxx.value`
  - 模板中读取数据：不需要.value，直接：```<div>{{xxx}}</div>```
- 备注：
  - 接收的数据可以是：基本类型、也可以是引用类型。
  - 基本类型的数据：响应式依然是靠`Object.defineProperty()`的`get`与`set`完成的。
  - 引用类型的数据：内部使用了Vue3.0中的一个新函数—— `reactive`函数。
  - reactive函数内部实现了对proxy代理的操作，所以引用类型是通过proxy实现响应的



在components中创建ref.vue，引入到App.vue中

```vue
<template>
  <div>
    <h1>ref</h1>
      
    <!-- 普通定义的数据，数据没有响应式 -->
    <p>{{ str }}</p>

    <!-- ref定义的数据，模板中直接渲染数据，不用在value中取，但它是响应式的 -->
    <p>姓名：{{ uname }}</p>

    <p>{{ obj }}</p>

    <hr />
    <button @click="changeData">修改数据</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup(props, context) {
    
    let str = "王二小"; // 没有响应式

    // 有响应式，基本数据类型还是采用Object.defineProperty()来实现响应式
    let uname = ref("小王");

    // 有响应式，引用数据类型采用proxy代理来实现
    let obj = ref({
      name: "zs",
      age: 3,
    });

    // 可以看到数据不一样
    // console.log(str);
    // console.log(uname);
    // console.log(obj);

    function changeData() {
      str = "小芳";
      // 数据要在value中取得
      uname.value = "小李" + Math.random();
      obj.value.name = "ls" + Math.random();
    }

    return {
      str,
      uname,
      obj,
      changeData,
    };
  },
};
</script>
```



#### 2.3reactive函数

reactive返回一个响应式的proxy对象

- 作用: 定义一个对象类型的响应式数据（基本类型不要用它，要用`ref`函数）
- 语法：`const 对象 = reactive(源对象)`接收一个对象（或数组），返回一个代理对象（Proxy的实例对象，简称proxy对象）
- reactive定义的响应式数据是“深层次的”。
- 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作。



在components中创建reactive.vue，引入到App.vue中

```vue
<template>
  <div>
    <h1>reactive定义响应式数据</h1>
    <p>name: {{ name }}</p>
    <p>obj: {{ obj }}</p>
    <hr />
    <p><button @click="changeData">改数据</button></p>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup(props, context) {
    // 1、定义数据
    let name = reactive("小王"); // reactive定义基本类型会警告
    let obj = reactive({
      id: 1,
      goodsname: "手机",
    });

    // 修改数据
    // 可以看到，定义的基本类型数据改了，但是没有响应式，引用类型有响应式
    // 修改数据直接改，不需要value
    function changeData() {
      name = "小李";
      obj.goodsname = "家具";
      console.log(name);
    }

    // 导出数据
    return {
      name,
      obj,
      changeData,
    };
  },
};
</script>

```



#### 2.4reactive对比ref

- 从定义数据角度对比：
  - ref用来定义：基本类型数据。
  - reactive用来定义：对象（或数组）类型数据。
  - 备注：ref也可以用来定义对象（或数组）类型数据，它内部会自动通过`reactive`转为代理对象。
- 从原理角度对比：
  - ref通过`Object.defineProperty()`的`get`与`set`来实现响应式（数据代理）。
  - reactive 通过使用Proxy来实现响应式（数据代理）, 并通过Reflect（反射）操作源对象内部的数据。
- 从使用角度对比：
  - ref定义的数据：操作数据需要`.value`，读取数据时模板中直接读取不需要`.value`。
  - reactive定义的数据：操作数据与读取数据：均不需要`.value`。





#### 2.5响应式数据判断

- isRef: 检查一个值是否为一个 ref 对象
- isReactive: 检查一个对象是否是由 reactive 创建的响应式代理

代码实例：

在components中创建isRefAndisReactive.vue，引入到App.vue中

```vue
<template>
  <div>
    <h1>isRef和isReactive</h1>
  </div>
</template>

<script>
import { ref, reactive, isRef, isReactive } from "vue";
export default {
  setup() {
    let str = ref("小王");
    let obj = reactive({ id: 1, name: "李四" });

    console.log(isRef(str)); // true
    console.log(isRef(obj)); // false

    console.log(isReactive(str)); // true
    console.log(isReactive(obj)); // false
  },
};
</script>

```



#### 2.6vue2 VS vue3

###### 2.6.1vue2.x的响应式

- 实现原理：

  - 对象类型：通过`Object.defineProperty()`对属性的读取、修改进行拦截（数据劫持）。

  - 数组类型：通过重写更新数组的一系列方法来实现拦截。（对数组的变更方法进行了重写）。

    ```js
    Object.defineProperty(data, 'count', {
        get () {}, 
        set () {}
    })
    
    ```

- 存在问题：

  - 新增属性、删除属性，界面不会更新。
  - 直接通过下标修改数组，界面不会自动更新。

  解决方法：vue.set  vue.delete



- 模拟代理代码(创建一个html文件测试)

  ```js
  // 1、定义一个被代理的数据，模拟组件中data数据选项
  let user = { name: '李四', age: 20 };
  
  // 2、定义代理对象  Object.defineProperty() 模拟组件实例本身vuecomponent
  // 语法：Object.defineProperty(对象, 属性, 描述)
  // 被代理的数据层级如果比较深，需要循环递归实现数据代理
  // 从被代理user对象中依次取出需要代理的数据，挂载到代理对象vm上
  let vm = {};
  for (let attr in user) {
      Object.defineProperty(vm, attr, {
          configurable: true, // 设置可以删除此属性
          get() {
              console.log(attr, '====get====');
              return user[attr];
          },
          set(val) {
              console.log(attr, '====set====');
              user[attr] = val;
          },
      });
  }
  
  // 3、输出代理后结果
  console.log(vm); // 可以看到它下面有name和age，且有get name/set name 和 get age/set age
  
  // 修改和获取
  // vm.name = '张三'; // 设置，会调用set方法
  // console.log(vm.name); // 获取，会调用get方法
  
  // 直接设置，不会触发set方法，因此不会有响应式
  // vm.ab = 12;
  // console.log(vm);
  
  // 删除某个属性，该属性必须要加上configurable，否则不可以删除
  // delete vm.name;
  // console.log(vm);
  
  ```



------





###### 2.6.2Vue3.0的响应式

- 实现原理

  - 通过Proxy（代理）:  拦截对象中任意属性的变化，包括：属性值的读写、属性的添加、属性的删除等。

  - Proxy代理的是整个对象，而不是对象的某个特定属性，不需要我们通过遍历来逐个进行数据绑定。

  - 通过Reflect（反射）: 

    - 反射机制指的是程序在运行时能够获取自身的信息。Reflect是ES6新增的反射语法。
    - `Reflect` 是一个内建的对象，用来提供方法去拦截 JavaScript 的操作。
    - `Reflect` 提供了一套用于操作对象的 `API`。我们之前操作对象可以用 `Object` 上面的一些方法，也可以用 `in、delete` 这种操作符，使用 `Reflect` 就统一了操作方式，更加简单化，优雅化。
    - 在vue3中主要是在数据代理的时候配合proxy对源对象的属性进行操作。

  - MDN文档中描述的Proxy与Reflect：

    - Proxy：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
    - Reflect：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect

    

    Reflect语法

    ```js
    // 反射机制指的是程序在运行时能够获取自身的信息
    
    let sym1 = Symbol();
    let obj = {
        id: 1,
        goodsname: '苹果',
        [sym1]: '我是唯一值',
    };
    
    // -----------------------
    // 1、获取key值
    // 之前Object的方法
    // 获取所有的key，但是不能获取symbol的类型的
    console.log(Object.keys(obj)); // ['id', 'goodsname']
    
    // 只能获取symbol
    console.log(Object.getOwnPropertySymbols(obj)); // [Symbol()]
    
    // ------------------------
    // 使用Reflect反射获取对象中的key，都能获取到
    console.log(Reflect.ownKeys(obj)); // ['id', 'goodsname', Symbol()]
    
    // -------------------
    
    // 2、添加属性
    Reflect.set(obj, 'price', 999);
    console.log(obj); // {id: 1, goodsname: '苹果', price: 999, Symbol(): '我是唯一值'}
    
    // 3、获取属性
    console.log(Reflect.get(obj, 'price')); // 999
    
    // 4、删除属性
    Reflect.deleteProperty(obj, 'id');
    console.log(obj); // {goodsname: '苹果', price: 999, Symbol(): '我是唯一值'}
    
    ```

  

Proxy语法

```js
new Proxy(data, {
    // 拦截读取属性值
    get (target, key) {
        return Reflect.get(target, key)
    },
    // 拦截设置属性值或添加新属性
    set (target, key, value) {
        return Reflect.set(target, key, value)
    },
    // 拦截删除属性
    deleteProperty (target, key) {
        return Reflect.deleteProperty(target, key)
    }
    // 共有13种代理劫持操作
})

```

- 模拟vue3响应式 代码实例(创建html测试)

  ```js
  let user = { name: '李四', age: 20 };
  
  let vm = new Proxy(user, {
      // 获取
      get(target, key) {
          // target：被代理的对象==>user
          // key：对象中的某个属性==>name|age
          console.log('====获取值====');
          return Reflect.get(target, key);
      },
      // 新增或更改
      set(target, key, newVal) {
          console.log('====新增或更改值====');
          return Reflect.set(target, key, newVal);
      },
      // 删除
      deleteProperty(target, key) {
          console.log('====删除值====');
          return Reflect.deleteProperty(target, key);
      },
      // 13种代理劫持操作...
  });
  
  // 获取值
  // console.log(vm.name);
  
  // 新增或更改值
  // vm.age = 18;
  // vm.sex = '男';
  
  // 删除值
  // delete vm.name;
  
  // 输出代理对象
  console.log(vm);
  
  ```



###### 2.6.3对比代理

- Proxy轻松解决 Object.defineProperty() 中遇到的问题
  - 一次只能对一个属性进行监听，需要遍历来对所有属性监听。
  - 在遇到一个对象的属性还是一个对象的情况下，需要递归监听。
  - 对于对象的新增属性，需要手动监听。
  - 对应删除属性，监听不到。
- Proxy支持13种拦截操作



#### 2.7toRef和toRefs

- 作用：创建一个 ref 对象，其value值指向另一个对象中的某个属性。
- 语法：`const name = toRef(person,'name')`
- 应用:   要将响应式对象中的某个属性单独提供给外部使用时。
- 扩展：`toRefs` 与`toRef`功能一致，但可以批量创建多个 ref 对象，语法：`toRefs(person)`



创建toRef.vue测试

```vue
<template>
  <div>
    <h1>主组件</h1>
    <p>
      <button @click="changeUser">修改数据</button>
    </p>
    <hr />

    <!-- 没有简写，得从user中取数据 -->
    <p>编号：{{ user.id }}</p>
    <p>姓名：{{ user.name }}</p>
    <p>年龄：{{ user.age }}</p>

    <hr />
    <!-- 想简写，直接用数据 -->
    <p>编号：{{ id }}</p>
    <p>姓名：{{ name }}</p>
    <p>年龄：{{ age }}</p>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    // 创建响应式数据
    let user = reactive({
      id: 1,
      name: "张三",
      age: 20,
    });

    // 修改数据
    function changeUser() {
      user.id += 2;
      user.name = "李四" + Math.random();
      user.age += 1;
    }

    return {
      user,
      // ...user, // 把数据解构导出，但是没有响应式（解构后不再是响应式，不再指向源对象中的属性，而是在内存中存储了一份数据）
      ...toRefs(user), // 用toRefs导出数据，即达到简写的目的，又还有响应式的数据
      changeUser,
    };
  },
};
</script>

```



#### 2.8计算属性与监听器

###### 2.8.1computed函数

- 与Vue2.x中computed配置功能一致
- 写法

```
computed接收一个回调函数做为参数，回调函数返回值做为最终的结果
let 变量 = computed(()=>{
	return 结果
}) 

可以获取，也可以设置
let 变量 = computed({
	get(){},
	set(){}
}) 

```



```vue
<template>
  <div>
    <h3>vue3--computed(组合api函数)</h3>
    <!-- 实现一个计算用户姓名的方法 -->
    <p>姓:<input type="text" v-model="user.x" /></p>
    <p>名:<input type="text" v-model="user.m" /></p>
      
    <!-- 使用计算属性 -->
    <p>姓名:<input type="text" v-model="user.xm" /></p>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  setup() {
    let user = reactive({
      x: "李",
      m: "四",
    });

    // 使用计算属性方法获取用户的姓名(简写，常用)
    // computed接收一个回调函数做为参数，回调函数返回值做为最终的结果
    // user.xm是给这个对象添加属性，这个属性也是具有响应式的
    // user.xm = computed(() => {
    //   return user.x + "-" + user.m;
    // });

    // ------------------------------
    // 全写：即可以获取，也可以设置
    // computed()接收一个对象做为参数，对象中有set和get方法
    user.xm = computed({
      // 设置（使用较少）
      set(val) {
        let [x, m] = val.split("-");
        user.x = x;
        user.m = m;
      },
      // 获取(就是上面没有全写的方法)
      get() {
        return user.x + "-" + user.m;
      },
    });

    return {
      user,
    };
  },
};
</script>

```



###### 2.8.2watch函数

- 与Vue2.x中watch配置功能一致

- 语法：watch(被监听对象, 回调函数)             回调函数有新值和旧值

- 注意事项

  - 监视reactive定义的整个响应式数据时不需要深度监听
  - 监视reactive定义的响应式数据中某个对象属性时需要使用深度监听（比如是引用类型user.info）
  - 监听ref基本类型不需要.value，引用类型需要.value或者{deep:true}

  ```vue
  <template>
    <div>
      <h3>vue3--watch(组合api)</h3>
      <!-- 1.ref -->
      <p>用户姓名是：<input type="text" v-model="name" /></p>
      <p>用户年龄是：<input type="text" v-model="age" /></p>
      <p>用户工作是：<input type="text" v-model="work.name" /></p>
      <hr />
        
      <!-- 2.reactive -->
      <p>用户爱好是：<input type="text" v-model="user.hopy" /></p>
      <p>用户爱好是：<input type="text" v-model="user.info.sex" /></p>
    </div>
  </template>
  
  <script>
  // 引入watch
  import { watch, ref, reactive } from "vue";
  export default {
    setup() {
      // 1.ref
      let name = ref("李四");
      let age = ref(20);
      let work = ref({ name: "it" });
  
      // 1.1监听单个数据的变化
      // watch(name, (newV, oldV) => {
      //   console.log("name:", newV, oldV);
      // });
      // watch(age, (newV, oldV) => {
      //   console.log("age:", newV, oldV);
      // });
  
      // 1.2监听多个数据的变化，用一个数组包着数据，[]
      // watch([name, age], (newV, oldV) => {
      //   console.log("name-age:", newV, oldV);
      // });
  
      // 1.3监听引用类型数据的变化 .value 或者 {deep:true}都行    新旧值一样
      // .value的方式
      // watch(work.value, (newV, oldV) => {
      //   console.log("work:", newV, oldV);
      // });
  
      // {deep:true}的方式
      // watch(
      //   work,
      //   (newV, oldV) => {
      //     console.log("work:", newV, oldV);
      //   },
      //   { deep: true },
      // );
  
        
      // --------------------------------
      // 2.reactive
      let user = reactive({
        hopy: "篮球",
        info: {
          sex: "男",
        },
      });
  
      // 2.1监听整个reactive定义的对象数据，新旧值一样，不需要深度监听（常用）
      watch(user, (newV, oldV) => {
        console.log("user:", newV, oldV);
      });
  
      // 2.2监听reactive数据中的属性 （属性是基本类型），不需要深度监听，新旧值不一样
      // 注意：值要用箭头函数返回出来才可以监听
      // watch(
      //   () => user.hopy,
      //   (newV, oldV) => {
      //     console.log("user.hopy:", newV, oldV);
      //   }
      // );
  
      // 2.3监听reactive数据中的属性 （属性是引用类型）需要深度，新旧值一样
      // watch(
      //   () => user.info,
      //   (newV, oldV) => {
      //     console.log("user.info:", newV, oldV);
      //   },
      //   { deep: true },
      // );
  
      // 2.4监听reactive数据中的多个属性 （属性可以是引用 或者 基本类型）需要深度，新旧值一样
      // watch(
      //   [() => user.info, () => user.hopy],
      //   (newV, oldV) => {
      //     console.log("user.info-user.hopy:", newV, oldV);
      //   },
      //   { deep: true },
      // );
  
      // 3.导出数据
      return {
        name,
        age,
        work,
        user,
      };
    },
    
    // vue2中的监听写法
    // watch: {
    //   name(newV, oldV) {},
    //   user: {
    //     handler() {},
    //     deep: true,
    //   },
    // },
  };
  </script>
  
  ```



#### 2.9生命周期

###### 2.9.1vue2.0的生命周期

参考文档：https://v2.cn.vuejs.org/v2/guide/instance.html#生命周期图示

![](/public/img/fourthStage/sixteen/vue2.lifecycle.png)

###### 2.9.2vue3.0的生命周期

参考文档:https://cn.vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram

![](/public/img/fourthStage/sixteen/vue3-lifecycle.png)



- Vue3.0中可以继续使用Vue2.x中的生命周期钩子，但有两个被更名：
  - `beforeDestroy`改名为 `beforeUnmount`
  - `destroyed`改名为 `unmounted`
- Vue3.0也提供了 Composition API（组合api） 形式的生命周期钩子，与Vue2.x中钩子对应关系如下：
  - `beforeCreate`===>`setup()`
  - `created`=======>`setup()`
  - `beforeMount` ===>`onBeforeMount`
  - `mounted`=======>`onMounted`
  - `beforeUpdate`===>`onBeforeUpdate`
  - `updated` =======>`onUpdated`
  - `beforeUnmount` ==>`onBeforeUnmount`
  - `unmounted` =====>`onUnmounted`

```vue
<template>
  <div>
    <h3>vue3--生命周期函数（api）</h3>
    <p>用户的姓名是：{{ name }}</p>
    <p><input type="text" v-model="name" /></p>
  </div>
</template>

<script>
// 引入生命周期api函数
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

export default {
  setup() {
    let name = ref("李四");

    // 1.注意没有提供创建实例前和创建实例完毕的api函数 用setup函数代替
    // beforeCreate()==>setup()
    // created()==>setup()

    // 2.使用生命周期api函数
    onBeforeMount(() => {
      console.log("触发了onBeforeMount：", this);
    });
    onMounted(() => {
      console.log("触发了onMounted：", this);
    });
    onBeforeUpdate(() => {
      console.log("触发了onBeforeUpdate：", this);
    });
    onUpdated(() => {
      console.log("触发了onUpdated：", this);
    });
    onBeforeUnmount(() => {
      console.log("触发了onBeforeUnmount：", this);
    });
    onUnmounted(() => {
      console.log("触发了onUnmounted：", this);
    });

    return {
      name,
    };
  },

  // beforeCreate() {
  //   console.log("触发了beforeCreate", this);
  // },
  // created() {
  //   console.log("触发了created", this);
  // },
  // beforeMount() {
  //   console.log("触发了beforeMount", this);
  // },
  // mounted() {
  //   console.log("触发了mounted", this);
  // },
  // beforeUpdate() {
  //   console.log("触发了beforeUpdate", this);
  // },
  // updated() {
  //   console.log("触发了updated", this);
  // },
  // beforeUnmount() {
  //   console.log("触发了beforeUnmount", this);
  // },
  // unmounted() {
  //   console.log("触发了unmounted", this);
  // },
};
</script>

```



#### 2.10provide 与 inject

provide（提供）

inject（注入）

![](/public/img/fourthStage/sixteen/provide-inject.png)

- 作用：实现**祖与后代**组件间通信（即将祖先的数据，注入到后代某个组件中，**免去了层层传递**）

- 套路：父组件有一个 `provide` 选项来提供数据，后代组件有一个 `inject` 选项来使用这些数据

- 具体写法：

  1. 祖组件中：

     ```js
     import {provide, reactive} from "vue"
     setup(){
     	......
         let car = reactive({name:'奔驰',price:'40万'})
         provide('car',car); // 提供数据供后代孙组件使用，第一个参数相当于key，后代靠这个来获取
         ......
     }
     
     ```

  2. 后代组件中：

     ```js
     import { inject } from 'vue';
     setup(){
     	......
         const car = inject('car'); // 接收数据，在当前组件中使用，相当于通过key来获取
         return {car}
     	......
     }
     
     ```

创建一个文件夹，里面创建one\two\three三个组件，形成三级嵌套关系，由one传给孙子组件three







#### 2.11自定义hook函数

- 什么是hook？—— 本质是一个函数，把setup函数中使用的Composition API(组合api)进行了封装。使setup中的代码精简
- 类似于vue2.x中的mixin
- 自定义hook的优势：复用代码, 让setup中的逻辑更清楚易懂



案例：绘制跟随鼠标移动的图片

![image-20220925202209410](/public/img/fourthStage/sixteen/image-20220925202209410.png)

**refs**

```
我们需要在组件渲染初期通过ref() 暴露一个ref值（null），在虚拟dom算法中，如果虚拟dom节点中的ref键对应渲染上下文中的ref()暴露的ref值，则虚拟dom的相应元素或者组件实例将被分配给该ref的值。

```





**没有使用hook时，逻辑全写在setup中**

```vue
<template>
  <div>
    <div class="box" ref="box">
      <p>鼠标位置：{{ pos }}</p>

      <img
        src="../../../public/favicon.ico"
        :style="{ position: 'absolute', left: pos.x + 'px', top: pos.y + 'px' }"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import { reactive, ref, onMounted, onBeforeUnmount } from "vue";
export default {
  setup() {
    // 1、使用ref定义绑定dom节点
    // ref在setup中的使用：1定义 2导出 3上面DOM节点中使用 4setup中就可以获取到元素了
    // 这里主要的作用是，获取到上面的dom节点，给它添加事件
    let box = ref(null);

    // 2、使用reactive初始化图片定位位置
    let pos = reactive({ x: 0, y: 0 });

    // 3、定义修改图片定位位置方法，接收事件对象为参数
    function change({ clientX, clientY }) {
      pos.x = clientX - box.value.offsetLeft + 10;
      pos.y = clientY - box.value.offsetTop + 10;
    }

    // 4、组件挂载完毕监听鼠标移动，实时修改图片定位位置
    onMounted(() => {
      box.value.addEventListener("mousemove", change);
    });

    // 5、组件销毁移除监听鼠标移动
    onBeforeUnmount(() => {
      box.value.removeEventListener("mousemove", change);
    });

    // 6.暴露数据和方法
    return {
      box,
      pos,
    };
  },
};
</script>

<style scoped>
.box {
  width: 80vw;
  height: 200px;
  background: #ccc;
  margin: 20px auto;
  position: relative;
}
</style>

```





**使用hook时，逻辑写在points.js中，精简setup中的代码**

新建hooks/points.js文件

```js
import { reactive, ref, onMounted, onBeforeUnmount } from 'vue';

// 导出了一个函数，这个函数调用之后，会返回box和位置对象，在别的vue文件中引入时，解构这两个
// 注意，这里要导出一个函数
export default () => {
  // 1、使用ref定义绑定dom节点
  // ref在setup中的使用：1定义 2导出 3上面使用 4setup中就可以获取到元素了
  let box = ref(null);

  // 2、使用reactive初始化图片定位位置
  let pos = reactive({ x: 0, y: 0 });

  // 3、定义修改图片定位位置方法，接收事件对象为参数
  function change({ clientX, clientY }) {
    pos.x = clientX - box.value.offsetLeft + 10;
    pos.y = clientY - box.value.offsetTop + 10;
  }

  // 4、组件挂载完毕监听鼠标移动，实时修改图片定位位置
  onMounted(() => {
    box.value.addEventListener('mousemove', change);
  });

  // 5、组件销毁移除监听鼠标移动
  onBeforeUnmount(() => {
    box.value.removeEventListener('mousemove', change);
  });

  // 6.暴露数据和方法
  return {
    pos,
    box,
  };
};

```

2.components/points.vue页面使用

```vue
<template>
  <div>
    <div class="box" ref="box">
      <p>鼠标位置：{{ pos }}</p>

      <img
        src="../../../public/favicon.ico"
        :style="{ position: 'absolute', left: pos.x + 'px', top: pos.y + 'px' }"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import usePoints from "./points"; // 引入hook，它是一个函数，要调用
export default {
  setup() {
    // 1.获取钩子函数中的数据，并解构
    let { box, pos } = usePoints();

    // 2.导出数据
    return {
      box,
      pos,
    };
  },
};
</script>

<style scoped>
.box {
  width: 80vw;
  height: 200px;
  background: #ccc;
  margin: 20px auto;
  position: relative;
}
</style>

```

## 三、Composition API(组合api) 的优势

### 3.1Options API 存在的问题

使用传统OptionsAPI中，新增或者修改一个需求，就需要分别在data，methods，computed里修改 。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f84e4e2c02424d9a99862ade0a2e4114~tplv-k3u1fbpfcp-watermark.image)



![img](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5ac7e20d1784887a826f6360768a368~tplv-k3u1fbpfcp-watermark.image)





### 3.2Composition API 的优势

我们可以更加优雅的组织我们的代码，函数。让相关功能的代码更加有序的组织在一起。
```html
<div style="width:500px;height:340px;overflow:hidden;float:left">
    <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bc0be8211fc54b6c941c036791ba4efe~tplv-k3u1fbpfcp-watermark.image"style="height:360px"/>
</div>
<div style="width:430px;height:340px;overflow:hidden;float:left">
    <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6cc55165c0e34069a75fe36f8712eb80~tplv-k3u1fbpfcp-watermark.image"style="height:360px"/>
</div>
```

## 四、新的组件

### 4.1Fragment

Fragment(片段)

- 在Vue2中: 组件必须有一个根标签
- 在Vue3中: 组件可以没有根标签, 内部会将多个标签包含在一个Fragment虚拟元素中(需要最新devtools工具才能看到)
- 好处: 减少标签层级, 减小内存占用

![](/public/img/fourthStage/sixteen/fragment.tool.png)

```vue
<template>
    <!-- 
        1.vue3中可以有多个平行的根容器，页面不会报错，可以在vuedevtools工具中查看到在App外层有个fragment标签包裹
    -->
    <div>
        <h3>vue3-fragment</h3>
    </div>
    <div>
        <h3>vue3-我是另一个根容器</h3>
    </div>
</template>

<script>
    export default {};
</script>

```



------





### 4.2Teleport

Teleport（传送）

什么是Teleport？

- 远程传送，teleport 是一种能够将我们的组件html结构移动到指定位置的技术。
- 如果我们嵌套在 Vue app 内的某个组件内部，那么处理嵌套组件的定位、z-index 和样式就会变得很困难。使用 Teleport 就可以方便的解决组件间 css 层级问题

案例：实现弹窗案例，定位在body上

```vue
<template>
  <button @click="isShow = !isShow">显示隐藏消息</button>

  <!-- 让弹窗定位在body上 -->
  <teleport to="body">
    <div class="box" v-if="isShow">
      <p>你有新短消息，请查收！</p>
    </div>
  </teleport>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let isShow = ref(false);

    return {
      isShow,
    };
  },
};
</script>

<style scoped>
.box {
  width: 40vw;
  height: 100px;
  border-radius: 10px;
  background-color: aqua;
  text-align: center;
  line-height: 100px;
  font-size: 20px;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>

```



### 4.3Suspense

Suspense（悬念）

注意：**暂时还是一个实验性的特性，它的API可能会改变**

- 在等待异步组件加载时，渲染一些额外占位内容，让应用有更好的用户体验，类似react路由赖加载（react.suspence）

- 使用步骤

  创建两个组件，让它们形成父子关系

  - 异步引入组件，注意测试可以使用3G高速模式（不然太快，看不到效果）

    ![image-20220926213552823](/public/img/fourthStage/sixteen/image-20220926213552823.png)

  

  父组件中，让子组件懒加载

  ```js
  import {defineAsyncComponent} from 'vue'
  const Child = defineAsyncComponent(()=>import('./components/Child.vue'))
  
  ```

  - 在父组件中，使用`Suspense`包裹组件，并配置好`default` 与 `fallback`

    ```vue
    <template>
      <div>
        <h3>vue3--suspense</h3>
        <Suspense>
          <!-- 加载完毕正常展示 -->
          <template v-slot:default>
            <son-comp></son-comp>
          </template>
          
          <!--加载前展示提示文字  -->
          <template v-slot:fallback>
            <p>页面加载中...</p>
          </template>
        </Suspense>
      </div>
    </template>
    
    <script>
    import { defineAsyncComponent } from "vue";
    let sonComp = defineAsyncComponent(() => import("./son.vue"));
    export default {
      components: {
        sonComp,
      },
    };
    </script>
    
    ```

## 五、其他

### 5.1全局API的转移

- Vue 2.x 有许多全局 API 和配置

  - 例如：注册全局组件等。

    ```js
    // 注册全局组件
    Vue.component('myButton', {
        data() {
            return {
                count: 0,
            };
        },
        template: '<button @click="count++">点击了 {{ count }} 次</button>',
    });
    
    ```

- Vue3.0中对这些API做出了调整

  - 将全局的API，即：`Vue.xxx`调整到应用实例（`app`）上

    | 2.x 全局 API（`Vue`）    | 3.x 实例 API (`app`)        |                |
    | ------------------------ | --------------------------- | -------------- |
    | Vue.config.xxxx          | app.config.xxxx             |                |
    | Vue.config.productionTip | 移除                        |                |
    | Vue.component            | app.component               | 创建全局组件   |
    | Vue.directive            | app.directive               |                |
    | Vue.mixin                | app.mixin                   |                |
    | Vue.use                  | app.use                     | 使用模块       |
    | Vue.prototype            | app.config.globalProperties | 原型上添加属性 |

比如

​	原来创建全局组件，是挂载在Vue.component()，现在要挂载到app.component()

​	原来在原型上添加属性，直接添加到Vue.prototype上即可，现在要添加到app.config.globalProperties上



案例：

1、创建tools/index.js，创建一些方法，挂载到  app.config.globalProperties上，其它的组件都可以使用这些方法

2、创建全局组件

```js
export function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function add(x, y) {
  return x + y;
}

```

main.js中挂载到实例上

```js
import { createApp } from 'vue';
import App from './App.vue';

let app = createApp(App);

// 引入这些方法，挂载到app上，其它的任何一个组件，都可以使用这些方法
import * as api from './tools';
// console.log(api); // {getRandom, add}
app.config.globalProperties.$api = api;

app.mount('#app');

```

在某些组件中使用

```vue
<template>
  <div>
    <h1>one</h1>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      // 在setup中的onMounted中使用方法
      const { proxy } = getCurrentInstance(); // 获取上下文实例，proxy相当于vue2的this
      console.log(proxy.$api.getRandom(10, 20));
      console.log(proxy.$api.add(3, 5));
    });
  },

  mounted() {
    // 在mounted中使用方法
    console.log(this.$api.getRandom(10, 20));
    console.log(this.$api.add(3, 5));
  },
};
</script>

```





### 5.2其他改变

#### 5.2.1过度类名的更改

- Vue2.x写法

  ```css
  进来
  v-enter 进来之前
  v-enter-active 进来的过程中
  v-enter-to  进来之后
  
  离开
  v-leave 离开之前
  v-leave-active 离开的过程中
  v-leave-to	离开之后
  
  ```

- Vue3.x写法

  ```css
  进来
  v-enter-from 进来之前
  v-enter-active 进来的过程中
  v-enter-to  进来之后
  
  离开
  v-leave-from 离开之前
  v-leave-active 离开的过程中
  v-leave-to	离开之后
  
  ```



#### 5.2.2移除过滤器（filter）

过滤器虽然看起来很方便，但它需要一个自定义语法，打破大括号内表达式是 `只是JavaScript` 的假设，这不仅有学习成本，而且有实现成本！建议用**方法调用**或**计算属性**去替换过滤器。

## 六、router

- 安装命令

  - npm i vue-router

  - ```
    4.1.5
    
    ```

- 路由两种模式：

  - hash：createWebHashHistory()
  - history：createWebHistory()

- 创建路由实例

- Vue2.x 创建路由是通过 `new VueRouter()`来创建，Vue3 是由 `createRouter()`创建

- 路由配置文件：router/index.js

```js
// 1.按需引入路由模块、路由模式
import {
  createRouter,
  createWebHashHistory, // hash
  createWebHistory, // history
} from 'vue-router';

// 2.创建路由规则
const routes = [
  {
    path: '/login',
    component: () => import('../pages/login.vue'),
  },
  {
    path: '/index',
    component: () => import('../pages/index.vue'),
    children: [
      {
        path: '/home',
        component: () => import('../views/home.vue'),
      },
      {
        path: '/cate',
        component: () => import('../views/cate.vue'),
      },
      {
        path: '/cart',
        component: () => import('../views/cart.vue'),
      },
      {
        path: '/user',
        component: () => import('../views/user.vue'),
      },
      {
        path: '',
        redirect: '/home',
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/index',
  },
];

// 3.根据路由规则创建路由实例
const router = createRouter({
  history: createWebHistory(), // 路由模式
  routes,
});

// 4.导出路由实例
export default router;

```

```js
// 5.在项目入口文件引入并使用（use()）
main.js文件
	import router from "./router"
	app.use(router)
	app.mount('#app')

// 6.设置路由出口

```





- 路由语法
  - 路由出口(和router3保持一致)
    - router-view
  - 路由跳转(和router3保持一致)
    - router-link
    - 编程式 
      - push 
      - replace
      - go
      - back
  - 路由传参(和router3保持一致)
    - search
    - 动态路由
    - 命名路由
  - 注意事项
    - setup函数中使用路由语法
      - import {useRoute,useRouter} from "vue-router"
        - useRoute()    ===>  this.$route
        - useRouter()  ===>  this.$router
    - 非setup函数中使用路由语法
      - this.$router
      - this.$route

## 七、store

- 安装命令

  ```
  npm i vuex
  
  4.0.2
  
  ```

  

- 仓库配置文件

  注意：这里和前面版本的区别是

  1、按需引入仓库模块
  2、state原来是一个对象，这里要写成一个函数，返回对象（模块中的state也写成一个函数返回对象）

  ```js
  // 1.按需引入仓库基础模块
  import { createStore } from 'vuex';
  
  // 2.实例化仓库
  let store = createStore({
    state() {
      return {};
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {},
  });
  
  // 3.导出仓库实例
  export default store;
  
  // 4.main.js中引入并use使用
  
  ```

  

- 使用语法

  - 正常使用(和vuex3保持一致)

  ```vue
  <template>
  <div>
      <h4>one组件</h4>
      <p>用户姓名是:{{ name }}</p>
      <p>用户姓名是:{{ userName }}</p>
      <button @click="changeByM('甄姬')">mutations-name</button>
      <button @click="changeByA('小乔')">actions-name</button>
      </div>
  </template>
  
  <script>
      import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
      export default {
          computed: {
              ...mapState(["name"]),
              ...mapGetters({
                  userName: "getName",
              }),
          },
          methods: {
              ...mapMutations({ changeByM: "editName" }),
              ...mapActions({ changeByA: "changeName" }),
          },
      };
  </script>
  
  ```

  

​    

- setup函数中使用

  ```vue
  <template>
  <div>
      <h4>two组件</h4>
      <p>用户姓名是:{{ name }}</p>
      <p>用户姓名是:{{ userName }}</p>
      <button @click="changeByM('鲁班')">mutations-name</button>
      <button @click="changeByA('李白')">actions-name</button>
      </div>
  </template>
  
  <script>
      import { useStore } from "vuex";
      import { computed } from "vue";
      export default {
          setup(props, context) {
              // console.log(useStore()); // {}  获取仓库实例
              let store = useStore();
  
              // 1.直接获取仓库数据（此处数据不是响应式的）
              // let name = store.state.name
              
              
              // 使用计算属性获取
              let name = computed(() => store.state.name);
  
              // 2.getter获取仓库数据
              let userName = computed(() => store.getters.getName);
  
              // 3.mutations修改仓库数据
              function changeByM(name) {
                  store.commit("editName", name);
              }
  
              // 4.actions修改仓库数据
              function changeByA(name) {
                  store.dispatch("changeName", name);
              }
  
              return {
                  name,
                  userName,
                  changeByM,
                  changeByA,
              };
          },
      };
  </script>
  
  ```

  在Vue3的setup()方法中使用vuex参考地址

  https://blog.csdn.net/qq_16139383/article/details/119935755










