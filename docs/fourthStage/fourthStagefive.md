---

layout: fourthStagefive

title: 四阶段 | 第五天

---

## day05组件通信、ref、jquery、swiper

### 课程回顾

- 组件基础 （局部创建组件components    全局创建组件 Vue.component()，在实例的前面）
- 脚手架创建项目：vue create 项目名称  
- npm i
- npm run serve   （package.json里面的scripts）

------

### 一、组件通信（组件传值）

组件可以互相嵌套，每一个组件都有一个独立的属性对象data(){}。有一些产品需求就需要用到被嵌套组件的数据，这个时候我们可以不需要利用离线存储，而是通过组件之间传值实现数据的传递

组件通信主要分为三种情况：父子   子父   非父子

#### 1.1 父子组件通信

##### 1、父子组件传值基础

- 父组件中，在子组件的标签上添加自定义属性

```vue
<子组件 自定义属性名='字符串' :自定义属性名1='要传递的数据'></子组件>
```

- 子组件

```js
// 通过配置对象属性props去接收，props相当于data，也是挂载到实例上
{
	props:['自定义属性名', '自定义属性名1', ...]
}
```

![image-20220209201920449](/public/img/fourthStage/five/image-20220209201920449.png)



**案例：根据父组件传值不同，渲染不同的列表数据**

首页和搜索页都有列表，但是它们应该展示的数据是不同的，都使用了商品列表的组件，商品列表组件的数据由谁决定，就是由首页或者搜索传给它的。

![image-20220605173815721](/public/img/fourthStage/five/image-20220605173815721.png)





- props

```
一、props是单项数据流，它只能父传子，不能爷传孙（即不能隔代传值）。
二、props只能读取不可以修改！如果你非要修改，那么就在组件中创建一个data或者一个计算属性去接收props，然后在该组件中调用这个data或者一个计算属性，修改也是修改的data或者一个计算属性。但这种毫无意义
```

**props属性数据类型验证**

```js
export default {
    data() {
        return {};
    },
    // props属性的数据类型定义验证
    props:{
        // 1、单数据类型定义：可以选择String Number Boolean
        info: String,
        // 2、多数据类型验证，写成一个数组
        num:[Number, String],
        // 3、默认值，如果你没传，就渲染默认数据，如果你传值了，就渲染传递数据
        str:{
            default: '标题'
        },
        // 4、必须传递，此时默认值没有意义
        username:{
            required: true
        },
        // 5、自定义验证器。当vue提供的几种验证方式，都无法满足我们的验证需求时，你可以自定义验证器，它必须要返回一个状态，true或者false
        leInfo:{
            type: String,
            validator(val){
                // console.log(val, '要验证的内容');
                if(val.length > 3){
                    return false;
                }else{
                    return true;
                }
            }
        }
    }
};
```



#### 1.2 子父组件通信

##### 1、子父组件传值基础

子组件里面必须要触发一个事件（即子不会凭白无故的传给父，要有一个事件触发）

总结：父组件监听一个自定义事件，子组件通过$emit来触发父的自定义事件并传参



- 子组件

用$emit发送

```vue
视图
<div>
    <button @click='子组件的methods方法'></button>
</div>

逻辑代码
{
	methods:{
		子组件的methods方法(){
			this.$emit('自定义事件名称', 要传递的数据)
		}
	}
}
```

- 父组件

自定义事件接收

```vue
视图
<子组件 @自定义事件名称='父组件的methods方法'></子组件>

逻辑
{
	methods:{
		父组件的methods方法(参数){
			参数就是传递的子组件数据
		}
	}
}
```



![image-20220210113326258](/public/img/fourthStage/five/image-20220210113326258.png)





**案例：父传子、子传父弹窗案例**

- 父传子，控制子组件显示或隐藏
- 子传父，控制自己显示或隐藏

![image-20220615143028674](/public/img/fourthStage/five/image-20220615143028674.png)





#### 1.3 非父子组件通信

有可能是兄弟组件或者没啥关系。一般有以下三种方式实现，今天学习第三种方式，但不推荐使用第三种方式。

- 1、离线存储（相对来说比较麻烦，且没有响应式）

- 2、vuex 状态管理 （后面重点要讲的核心插件）

- 3、中央事件管理（EventBus）（性能不好，因为会不断的嵌套，基本不用，了解即可）

  中央事件管理实现的原理就是：全局产生一个vue实例，这个实例的原型下面有$emit和$on，用它们俩来实现观察者模式。

  而不用每个vue组件上的$emit和$on，因为每个vue组件又是一个新的实例，实例跟实例之间$emit和$on不是同一个。因此，**关键就是要在main.js中的vue原型上挂载一个vue实例**

  

  - main.js

  ```js
  // vue的原型上挂载一个vue实例
  Vue.prototype.自定义原型属性名 = new Vue();
  
  // 如
  Vue.prototype.$event = new Vue();
  ```

  - 发送方，在事件中用$emit触发

  ```vue
  视图
  <div>
      <button @click='发送的methods方法'></button>
  </div>
  
  逻辑代码
  {
      methods:{
          发送的methods方法(){
              this.$event.$emit('自定义事件名称', 要传递的数据)
          }
      }
  }
  ```

  - 接收方，**在挂载完成之后**用$on接收

  ```js
  {
      // 视图挂载完成后
      mounted:{
          this.$event.$on('自定义事件名称', (res)=>{
              // res 代表传递过来的数据
          })
      }
  }
  
  ```





### 二、组件嵌套的生命周函数流程

如果你发生一些意想不到的bug，就要考虑生命周期的问题

- 组件一加载触发的生命周期

```
父组件创建之前
父组件创建完成
父组件挂载之前
    子组件创建之前
    子组件创建完成
    子组件挂载之前
    子组件挂载完成
父组件挂载完成

```

- 当父组件数据发生变化

```
父组件更新之前
父组件更新

```

- 当子组件的数据发生变化

```
子组件更新之前
子组件更新

```

- 当父销毁的时候

```
父的销毁之前
子的销毁之前
子的销毁完成
父的销毁完成

```



### 三、ref属性

#### 3.1 概念

```
快速获取DOM节点。

正常来说，vue是不需要操作DOM。不像jquery疯狂的操作DOM。
但是一些需求必须要操作DOM，这个时候，你可以调用ref属性来获取dom。而不是之前的获取元素的方法

```

```
ref有两种使用方式
1、添加到dom元素上，获取dom元素
2、添加到组件标签上，获取组件实例，可以实现子父通信

```



#### 3.2 使用方法

```
<标签元素 ref='自定义属性值'></标签元素>

取值：
this.$refs.自定义属性值

```

#### 3.3 使用场景

```
1、音频、视频节点获取（DOM节点的获取）
2、快速获取子组件的属性和方法（组件标签的获取）

```



**ref音视频案例**

![image-20220614211528963](/public/img/fourthStage/five/image-20220614211528963.png)

```vue
<template>
  <div>
    <h1>ref应用，视频播放</h1>
    <video ref="video" :src="audioUrl"></video>
    <br />
    <img v-show="isShow" @click="playFn" :src="play" alt="" />
    <img v-show="!isShow" @click="pauseFn" :src="pause" alt="" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      play: require("../../assets//public/img/fourthStage/five/play.jpg"),
      pause: require("../../assets//public/img/fourthStage/five/pause.jpg"),
      audioUrl: require("../../assets/video/mov_bbb.mp4"),
      isShow: true, // 播放和暂停切换状态
    };
  },
  methods: {
    // 播放
    playFn() {
      this.$refs.video.play();
      this.isShow = false;
    },
    // 暂停
    pauseFn() {
      this.$refs.video.pause();
      this.isShow = true;
    },
  },
};
</script>
<style scoped>
</style>

```





#### 3.4 组件嵌套的ref

也就是说，通过ref也可以实现父子间的通信

```
父组件可以通过ref属性，获取子组件的数据，调用子组件的方法。
即定义在子组件的数据，父组件中可以使用，定义在子组件中的方法，父组件也可以调用它。

```

```html
父组件中，调用子组件，给子组件一个ref属性
<子组件 ref='属性'></子组件>

```

```js
父组件中，使用子组件的属性以及调用子组件的方法
this.$refs.属性.子的属性名
this.$refs.属性.子的方法名()

但是注意：在父组件中，调用子组件的数据或方法，需要注意生命周期的问题。

```





### 四、如何在脚手架中引入jquery

#### 4.1 下载

```
npm i jquery

版本号： + jquery@3.6.1

```



**免费测试接口地址**

这里使用一个线上的数据接口：https://jsonplaceholder.typicode.com/

或者自己启一个后端服务



#### 4.2 局部引入jq

即每一个vue实例中单独引入

```vue
<template>
  <div>
    <h1>这是jq的案例</h1>
    <ul>
      <li v-for="item in newslist" :key="item.id">
        新闻标题：{{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
// 引入jq插件
import $ from "jquery";
export default {
  data() {
    return {
      newslist: [],
    };
  },
  mounted() {
    // 这是组件加载执行的最后一个生命周期函数
    $.ajax({
      url: "http://jsonplaceholder.typicode.com/posts",
      success: (res) => {
        this.newslist = res;
      },
    });
  },
};
</script>

```

#### 4.3 全局引入jq

原理，将jq引入挂载到vue的原型上，这样，每个vue实例都有这个jq属性了

- main.js

```js
// 引入jq核心库，并挂载到vue实例上
import $ from 'jquery';
Vue.prototype.$ = $;

```

- 某一个组件中使用

```vue
<template>
  <div>
    <h1>这是jq的案例</h1>
    <ul>
      <li v-for="item in newslist" :key="item.id">
        新闻标题：{{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newslist: [],
    };
  },
  mounted() {
    // 这是组件加载执行的最后一个生命周期函数
    this.$.ajax({
      url: "http://jsonplaceholder.typicode.com/posts",
      success: (res) => {
        this.newslist = res;
      },
    });
  },
};
</script>

```





### 五、swiper

#### 5.1 官网地址

```
https://www.swiper.com.cn/

```

swiper使用方法：https://www.swiper.com.cn/usage/index.html

vue中的使用参考：https://juejin.cn/post/7068200036949032968



#### 5.2 下载

```
npm i swiper@5.4.5

```

`注意：node版本是16.16.0，16.17.0不能装上swiper@5`



#### 5.3 局部引入js和css

```js
import Swiper from "swiper"; // 注意引入的是Swiper
import "swiper/css/swiper.min.css"; // 注意这里的引入方式

```



基本的html结构



```js
// 实例化swiper
mounted() {
    new Swiper(".swiper-container", {
        autoplay: true, // 自动播放
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
            el: ".swiper-pagination",
        },
        // 如果需要前进后退按钮
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
},

```





#### 5.4 基本操作

```vue
<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="https://img10.360buyimg.com/babel/s590x470_jfs/t1/136259/34/27831/98600/629cc5beEb69cf894/017b48049a9dda34.jpg.webp"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://img12.360buyimg.com/pop/s590x470_jfs/t1/191533/28/24820/93603/6292e351E76ff8d3d/e3267d6c96967bd1.jpg.webp"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://img14.360buyimg.com/pop/s590x470_jfs/t1/163283/29/24346/30150/62832cb1E4ce6ba10/fae833857d0ad590.jpg.webp"
            alt=""
          />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper"; // 注意引入的是Swiper
import "swiper/css/swiper.min.css"; // 注意这里的引入
export default {
  data() {
    return {};
  },
  mounted() {
    new Swiper(".swiper-container", {
      autoplay: true,
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
      
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};
</script>
<style scoped>
.swiper-container {
  width: 600px;
  height: 300px;
}
.swiper-slide img {
  /* display: block; */
  /* width: 100%;
  height: 100%; */
  object-fit: cover;
}
</style>

```

