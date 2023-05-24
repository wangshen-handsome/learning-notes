## day08数据交互

### 回顾

vue全家桶
vue.js + vue-cli + vue-router + vuex + axios

```
之前的数据交互的方法
	原生的ajax
	jq的ajax
	jsonp

在框架阶段，我们会学习2种数据交互方法
	一、axios，常用在vue中，但它并不是vue本身的内容，而是一个独立http库
	二、fetch（原生的），主要应用与React
```





### 一、axios 概念

```
axios 是基于promise创建的http库，可以用于客户端（浏览器）和 node.js

官方概念：
Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中
```

### 二、官方文档

```
http://www.axios-js.com/

看云：https://www.kancloud.cn/yunye/axios/234845
```

### 三、下载命令

```
npm i axios@0

axios@0.27.2
```

### 四、特点

- 支持从浏览器中创建 XMLHttpRequests 和 node.js 创建 http 请求
- 支持 Promise API
  拦截请求和响应(**特有的方法**)
- 转换请求数据和响应数据
- 取消请求
- 自动转换 JSON 数据
- 客户端支持防御 XSRF  （跨站请求伪造）

```
跨站请求伪造（英语：Cross-site request forgery），也被称为 one-click attack 或者 session riding，通常缩写为 CSRF 或者 XSRF， 是一种挟制用户在当前已登录的Web应用程序上执行非本意的操作的攻击方法。跟跨网站脚本（XSS）相比，XSS 利用的是用户对指定网站的信任，CSRF 利用的是网站对用户网页浏览器的信任。
```



### 五、基本语法

引入axios库文件，它会暴露一个`axios()`方法，这个方法下面还有`axios.get()`和`axios.post()`两个方法



#### 5.1 axios({})

类似于$.ajax()，可以发起get或post请求，返回promise对象

```js
axios({
	url:'你要请求的接口地址',
    method:'get/post', // 默认get
    // get传参
    params:{
        // 你要传入的get方式请求的入参
    },
    // post传参
    data:{
        // 你要传入的post方式请求的入参
    }
})
.then((res)=>{
    // 成功时候的响应res，axios有一个特点，返回的数据包含很多的配置信息
    // http状态码是200或者304，执行成功的逻辑（我们关心的是后端返回的res.code）
})
.catch((err)=>{
    // 错误时候的响应err
    // http状态码非200或者304，执行错误的逻辑
});
```

#### 5.2 axios.get(url, {})

类似于$.get()，发起get请求，注意传参比较特别

```js
axios.get('你要请求的接口地址',{
	params:{
		// 你要传入的get方式请求的入参，如：
        a:1,
    	b:2
	}
})
.then((res)=>{
    // 成功时候的响应res，axios有一个特点，返回的数据包含很多的配置信息
    // http状态码是200或者304，执行成功的逻辑
})
.catch((err)=>{
    // 错误时候的响应err
    // http状态码非200或者304，执行错误的逻辑
})
```

#### 5.3 axios.post(url, {})

类似于$.post()，发起post请求

```js
axios.post('你要请求的接口地址',{
    // 你要传入的post方式请求的入参，如：
    a:1,
    b:2
})
.then((res)=>{
    // 成功时候的响应res，axios有一个特点，返回的数据包含很多的配置信息
    // http状态码是200或者304，执行成功的逻辑
})
.catch((err)=>{
    // 错误时候的响应err
    // http状态码非200或者304，执行错误的逻辑
})
```



除了data是真正的后端返回的，其它的都是axios配置的

![image-20220923093050722](/public/img/fourthStage/eight/image-20220923093050722.png)



### 六、基本案例

使用此网站的数据：http://jsonplaceholder.typicode.com	

单起一个项目，创建pages-->axiosDemo.vue来测试，配置`/axios`路由



方法：

1、创建组件

2、设置路由

3、设置路由出口





#### 1、局部调用axios

```vue
<template>
  <div>
    <h1>axios</h1>
    <ul>
      <li v-for="item in newList" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"; // 引入axios
export default {
  data() {
    return {
      newList: [],
    };
  },

  // 挂载完成时调用axios
  mounted() {
    // 类似于$.ajax();
    // axios({
    //   url: "http://jsonplaceholder.typicode.com/posts",
    // })
    //   .then((res) => {
    //     console.log(res.data); // 真实的数据在data中
    //     this.newList = res.data;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // 类似于$.get()
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        // console.log(res.data); // 真实的数据在data中
        this.newList = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

```

#### 2、全局调用axios

main.js

```js
// 引入axios，并挂载到vue的原型上
import axios from 'axios';
Vue.prototype.$axios = axios;

```

组件中

```vue
<template>
  <div>
    <h1>axios</h1>
    <ul>
      <li v-for="item in newList" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newList: [],
    };
  },

  // 挂载完成时调用vue实例上的 axios
  mounted() {
    // 类似于$.ajax();
    this.$axios({
      url: "http://jsonplaceholder.typicode.com/posts",
    })
      .then((res) => {
        console.log(res.data);
        this.newList = res.data;
      })
      .catch((err) => {
        console.log(err);
      });

    // 类似于$.get()
    // this.$axios
    //   .get("http://jsonplaceholder.typicode.com/posts")
    //   .then((res) => {
    //     // console.log(res.data);
    //     this.newList = res.data;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
};
</script>

```



### 七、启动后端服务器

**小U商城后端服务器**

- 解压shop-api

![image-20220922210548322](/public/img/fourthStage/eight/image-20220922210548322.png)



- 创建数据库并导入有数据的表

```
Navicat => 链接 => 右键新建数据库（umall_shop） => 导入数据表(umall_shop-有数据.sql)

```

- 在后端服务器上配置数据库链接信息

shop-api => config => global.js

```js
/** -------------数据库变更需要修改的地方----------- **/
// 数据库连接参数
exports.dbConfig = {
    host: 'localhost', // 你自己的数据库主机名
    user: 'root', // 安装 mysql 用户名
    password: 'root', // 数据库密码
    port: 3306, // 默认端口号（数据库）
    database: 'umall_shop', // 数据库名字
	timezone: "SYSTEM"
}

```

- 如果想要修改后端服务端口号

shop-api => bin => www

```
var port = normalizePort(process.env.PORT || '3000');
默认是3000

```

- 启动服务

```
启动命令：
npm start

```

- 访问接口

能正常访问，服务端就启动成功了

```
http://localhost:3000/api/getbanner

```







`npm i`安装时报错的解决

![](/public/img/fourthStage/eight/cf083022284d451b9284fdec956db5d9.png)

https://blog.csdn.net/yyzx_yyzx/article/details/125716768





### 八、如何解决跨域问题

`开发阶段的跨域前端自己解决，生产环境的跨域后端解决`



- vue的配置文档

```
https://cli.vuejs.org/zh/config/

```



创建一个vue的全局配置vue.config.js文件（这里面写node的语法），一定要和package.json同级才生效

vue.config.js

```js
// 把你封装的所有配置文件全部导出去
module.exports = {
    // publicPath 可以根据你不同的环境去配置它的初始地址，一般不会修改我们就'/'
    // outputDir  输出目录，用于打包。执行npm run build 默认生成dist文件夹，如果你想要修改成其他文件夹名就直接设置type类型
    
    // devServer 本地开发服务配置
    devServer:{
        // 设置你的代理地址（这里写后端服务器的地址）
        // 以后前端访问服务器地址时，前面直接写 /
        // 后端地址本来是：http://localhost:3000/api/getbanner
        // 会换成：http://localhost:8080/api/getbanner
        // 这样就没有跨域问题了
        // proxy即代理
        proxy:'http://localhost:3000'
    }
}

```

注意：配置文件一旦修改必须要**重启（前端）**





### 九、post的入参（请求）格式

主要有以下三种 ：依据Content-Type来区分

成熟的后端，第一种接收和第二种接收都应该设置好，第三种接收是接收上传文件



**1、普通的方式（传对象）**（request payload）

```
Content-Type: application/json

即数据以对象的形式传输。或者JSON.stringify()转的json对象字符串

```

**2、一般表单传参(模拟表单)（传查询字符串）** （form-data） **比较多用**

注意点：它属于表单格式传参中没有上传文件的传输方式

```
Content-Type: application/x-www-form-urlencoded

即数据以 'a=1&b=2' 上传

```



```
思考：我们的数据一般都是对象，如何将对象数据转成查询字符串这种格式
方式一：
利用原生node.js方法中querystring去转化

querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
// 返回 'foo=bar&baz=qux&baz=quux&corge='

方式二：
qs第三方包

```

**3、带有上传文件的表单传参（传文件）**（利用form-data包装数据）

https://developer.mozilla.org/zh-CN/docs/Web/API/FormData

```
Content-Type: multipart/form-data

```



需要用到原生的FormData函数，将数据转成这种格式

```js
// 语法
let file = new FormData(); // file 就是数据对象
// 添加数据
file.append('key','value')
// 取值数据
file.get('key')


==============================
// 如何将对象中的数据添加到FormData中呢，需要循环遍历
let file = new FormData()
for(let attr in 入参对象){
   file.append(attr, 入参对象[attr])
}

```



```
总结：前端不用手动设置Content-Type，但是传参的方式不一样，默认Content-Type也是不一样的

1、普通的方式，即传入一个对象		Content-Type: application/json

2、一般表单传参，即传入查询字符串		Content-Type: application/x-www-form-urlencoded

3、带有上传文件的表单传参，即传FormData对象		Content-Type: multipart/form-data

```



### 十、接口的封装

概述：所谓的接口封装，就是单独定义出一个模块，专门用于管理整个网站的http请求，而不是每个组件中写请求，这样方便统一管理

- 在src下创建request文件夹
- request 文件夹下会有`axios.js`和`api.js`两个文件
- axios.js引入axios库并创建http实例，api.js引入axios.js中的 http 实例，然后其它的组件引入api.js中定义的方法



#### 1、request => axios.js

作用：这个模块用于管理 axios，并设置基础的配置（比如说拦截器等）

注意：vue的原型上就不需要再挂载axios了

```js
import axios from 'axios'; // 引入axios，因此vue的原型上就不需要axios了

// 调用创建新实例
let http = axios.create({
    // 在这里，定义当前实例的自定义配置
    baseURL: '/api' // 基础地址，它可以统一管理你的接口地址
});

// 导出新实例
export default http;

```



更完美的写法：加上请求拦截和响应拦截

```js
import axios from 'axios';

let http = axios.create({
  // 在这里，定义当前实例的自定义配置
  baseURL: '/api', // 基础地址，它可以统一管理你的接口地址
});

// 请求拦载   interceptors拦截器
http.interceptors.request.use((req) => {
  return req;
});

// 响应拦载
http.interceptors.response.use((res) => {
  return res;
});

// 导出新实例
export default http;

```





#### 2、request =>api.js

作用：所有的请求都在这个模块，方便管理，而不用写在每个组件中

```js
import http from './axios'; // 引入你封装好的axios实例
import qs from 'querystring'; // 引入原生node的querystring，用它下面的stringify方法，将{ foo: 'bar', corge: '123' }转换成'foo=bar&corge=123'

// 下面封装一系列接口

// 获取banner接口，get方式，没有要传的参数
export function getBanner() {
    return http.get('/getbanner');
}

// 获取首页的商品列表接口，get方式，没有要传的参数
export function getHomeGoods() {
    return http.get('/gethortgoods');
}

// 注册接口，post方式，有参数
export function register(data) {
    return http.post('/register', qs.stringify(data));
}

// 登录接口，post方式，有参数
// 上传的数据格式可以用json，也可以改成查询字符串。这里就是改成了查询字符串，这个要看后端接口的需求
export function login(data) {
    return http.post('/login', qs.stringify(data));
}

// 获取商品信息，get方式，有参数。注意get的传参方式
export function getgoodsinfo(data) {
    return http.get('/getgoodsinfo', {
        params: data
    })
}

```

#### 3、使用

从request的api.js中引入需要的方法，在某个组件中去使用

```js
import { register as Reg } from "../request/api"; // 接入要调用的接口

```



```vue
<template>
  <div>
    <h1>注册</h1>
    <p>
      手机号
      <input type="text" v-model="user.phone" />
    </p>
    <p>
      昵称
      <input type="text" v-model="user.nickname" />
    </p>
    <p>
      密码：
      <input type="text" v-model="user.password" />
    </p>
    <p>
      <button @click="register">注册</button>
    </p>
  </div>
</template>

<script>
import { register as Reg } from "../request/api"; // 接入要调用的接口
export default {
  data() {
    return {
      user: {
        phone: "", // 手机号
        nickname: "", // 用户名
        password: "", // 密码
      },
    };
  },
  methods: {
    register() {
      // 必填验证
      if (!this.user.phone || !this.user.nickname || !this.user.password) {
        alert("请输入必填项");
        return;
      }

      // 都填写了，就发起注册请求，传入参数对象
      Reg(this.user)
        .then((res) => {
          // console.log(res);
          if (res.data.code == 200) {
            // 注册成功，并跳转到登录页面
            alert(res.data.msg);
            this.$router.push("/login");
          } else {
            // 注册失败
            alert(res.data.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

```







### 十一、axios的并发处理（axios.all()）

所谓并发，即同时可以调用N个接口



1、一般情况下，并发是在某个组件中使用，因此要单独引入axios库，因为封装的http上面没有all方法

```js
// 单独引入axios库
import axios from "axios";

```

2、引入封装好的接口

```js
// 引入封装好的接口，这里引了两个接口
import { getHomeGoods, getHomeCate } from "../request/api";

```

3、axios.all()方法发起并发，all的参数为一个数组，数组中为每一个的请求

用axios.spread()展开并发结果。spread的参数为一个回调函数，回调函数的参数即并发调用返回的一一对应的结果

并发请求在这里用处不大，但是在两个接口之间有关系时，即第一个接口要为第二个接口提供数据时有用

```js
axios
    .all([getHomeCate(), getHomeGoods()])
    .then(
    	// spread展开，它接收一个函数，该函数的参数即返回的结果
    	// cate即第一个请求的结果，goods即第二个请求的结果
        axios.spread((cate, goods) => {
            // 对第一个处理
            if (cate.data.code == 200) {
                this.catelist = cate.data.list;
            } else {
                alert(cate.data.msg);
            }
            // 对第二个处理
            if (goods.data.code == 200) {
                this.hotslist = goods.data.list[0].content;
                this.newlist = goods.data.list[1].content;
                this.goodslist = goods.data.list[2].content;
            } else {
                alert(goods.data.msg);
            }
        })
    )
	// 错误统一处理
    .catch(err => {
        console.log(err, "错误");
    });

```









### 十二、拦截器

**都写在request=>axios.js中**

```js
import axios from 'axios'; // 引入axios，因此vue的原型上就不需要axios了

// 调用创建新实例的方法
let http = axios.create({
    // 在这里，定义当前实例的自定义配置
    baseURL: '/api' // 基础地址，它可以统一管理你的接口地址
});

// 请求拦截器：在req.headers中添加属性，一般用于添加token
http.interceptors.request.use((req) => {
    // req.headers.pzh = 123; // req请求头，在请求头中，添加一个请求属性，因此在请求的网络中，就可以看到此请求属性(一般用于添加token)
    return req;
});

// 响应拦截器：1、过滤数据   2、判断token是否过期等
http.interceptors.response.use((res) => {
    // console.log(res.data); // 即后端返回来的数据
    // 用法一、你可以全局操作返回的数据。比如后端返回来的数据经过包装，总包含一些不需要的东西，所以我们可以只把需要的返回出去
    // return res.data;

    // 二、全局错误判断(重点)  比如：token过期，如果过期，我们可以让它再到登录去
    return res;
});

// 导出
export default http;

```





#### axios请求拦截和路由导航守卫的区别

axios是发起ajax请求时触发，一般用于添加token，全局错误处理，返回的数据过滤

导航守卫是访问某个路由时触发，一般用于判断是否登录，某个用户是否有访问某个路由的权限等等



**token的概念**

- token就是令牌的意思。token从哪里产生？后端！！
- 实际上每一个必须要登录才能看见界面中的接口，都要验证一次用户名和密码。但是每一次验证都会给服务器造成压力，因此产生了token概念。
- token是前端登录后，后端产生，传给前端，前端将token存在本地存储中。当前端要访问某些需要登录才能访问的接口时，将它带着，这样后端就只需要验证token，而不用去数据库验证用户名和密码，这样减轻了后端的压力。
- token会失效它时效。一般重要的页面3、5分钟，我们这个系统大概是半个小时。





### 十三、拦截器在小U商城中的使用

根据小U商城后端要求，前端 `购物车、订单接口、支付、地址管理、会员信息编辑` 都要验证token。因此，这里我们选用购物车来实现token验证。

1、在登录页面，将登录成功返回的信息，存入本地。

(比如：在获取购物车数据时，就需要用户的uid，还需要token，而这两都是在登录成功以后，存储在本地中的)

```js
login() {
    // 登录时的验证工作
    if (!this.user.phone || !this.user.password) {
        alert("用户名和密码必须填写");
    } else {
        // 发起登录请求
        Login(this.user)
            .then((res) => {
                // console.log(res);
                if (res.data.code == 200) {
                    // 登录成功后，将数据存入本地，并跳转到首页
                    sessionStorage.setItem("userInfo", JSON.stringify(res.data.list));
                    alert(res.data.msg);
                    this.$router.push("/home");
                } else {
                    alert(res.data.msg);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
},

```





2、在request的api.js中，设置购物车请求

```js
// 获取购物车列表，需要传uid和token
export function cartlist(data) {
    return http.get('/cartlist', {
        params: data
    })
}

```



3、在购物车页面，获取本地存储的uid（即登录时存在本地的用户ID，通过它可以获取用户的购物车数据），并发起请求。注意这个时候，要在后端服务器，**关闭token验证**，否则不会成功



后端app.js 第 63行

```js
// 如果想被登录拦截器拦截判断的, 接口放到下面(此拦截器以下所有的路由都需要验证本次请求是否携带token以及token有效期)
app.use(async (req, res, next) => {
    if (!req.headers.authorization) {
        res.send(MError(["请设置请求头，并携带验证字符串"]));
    } else {
        if (!await checkToken(req)) { // 过期  
            res.send(Guest([], "登录已过期或访问权限受限"));
        } else {
            next();
        }
    }
});

```



**注意：**如果是一个新的用户，购物车应该是空的，这个时候，可以在商品详情页，调用接口，将商品添加到购物车中

```js
mounted() {
    let userInfo = sessionStorage.getItem("userInfo"); // 获取本地存储
    let uid = userInfo ? JSON.parse(userInfo).uid : null;
    // 购物车需要用户uid
    cartlist({ uid })
        .then((res) => {
            // console.log(res);
            if (res.data.code == 200) {
                // 购物车获取成功
                alert(res.data.msg);
            } else {
                // 失败
                alert(res.data.msg);
            }
        })
        .catch((err) => {
            console.log(err);
        });
},

```



4、在后端的app.js中，**开启后端的token验证**，这个时候会报错。

需要在request=>axios.js中的响应拦截器中，统一处理token没传和token过期的错误，让它们统一跳转到登录页（这里需要把路由引入进来，需要用到路由的编程式导航）

```js
import router from '../router'; // 引入路由，方便没有找到token时，跳转到登录页

```

```js
// 响应拦截器
http.interceptors.response.use((res) => {
    // console.log(res.data); // 即后端返回来的数据
    // 用法一、你可以全局操作返回的数据：后端返回来的数据经过包装，总包含一些不需要的东西，所以我们可以只把需要的返回出去
    // return res.data;

    // 二、全局错误判断(重点)  比如：token过期，token没添加
    if (res.data.msg == '登录已过期或访问权限受限' || res.data.msg == '登录已过期或访问权限受限') {
        router.push('/login');
        return;
    }
    return res;
});

```



5、此时还是不成功，因为token根本没有传，需要在request=>axios.js请求拦截器中带上token

```js
// 请求拦截器
http.interceptors.request.use((req) => {
    // req.headers.pzh = 123; // req请求头，在请求头中，添加一个属性，因此在请求的网络中，就可以看到此属性(一般用于添加token)

    // 添加token
    let userInfo = sessionStorage.getItem('userInfo');
    let token = userInfo ? JSON.parse(userInfo).token : null;
    req.headers.authorization = token;
    return req;
});

```

至此，token的处理完毕。





总结：只要涉及到用户权限的，都要验证token，而token从哪里来的呢？

当我们登录成功以后，后端给我们返回的用户信息中，就有token，我们将它存在本地

我们请求拦截中，带上token，这样，就验证了token

## 小U商城移动端



### 十七、实现轮播图数据的动态渲染

在vSwiper.vue中，使用全局引入axios，发起get请求，获取banner数据

```
http://localhost:3000/api/getbanner
```

但是此时会报跨域错误

解决方法：项目根目录下，创建vue.config.js配置，前端解决跨域问题





注意，把数据取回来了之后，要在 $nextTick() 方法中或者 updated() 生命周期钩子函数中实例化swiper

理解：nextTick()，是将回调函数延迟在下一次dom更新数据后调用**，简单的理解是：**当数据更新了，在dom中渲染后，自动执行该函数

```vue
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in bannerList" :key="item.id">
        <img :src="item.img" :alt="item.title" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper"; // 注意引入的是Swiper
import "swiper/css/swiper.min.css"; // 注意这里的引入
export default {
  data() {
    return {
      bannerList: [], // 轮播图数据，当我们后面请求了数据之后，再动态展示
    };
  },
  mounted() {
    // 加载完成，请求数据
    this.$axios
      .get("/api/getbanner") // 这里用了代理，所以/代表着代理地址
      .then((res) => {
        if (res.data.code === 200) {
          this.bannerList = res.data.list; // 将请求到的数据，赋给data中的属性
          // 但是这个时候会产生swiper的问题，banner不能滚动了，因为swiper创建实例的时候，banner还没有数据呢
          // 有两种方法解决：
          // 1、swiper的实例创建在this.$nextTick()中，nextTick即下一次dom创建完成之后调用回调函数
          // 2、swiper的实例创建在updated钩子函数中

          // 方式一：swiper的实例创建在this.$nextTick()中
          // this.$nextTick(() => {
          //   // 实例化轮播
          //   new Swiper(".swiper-container", {
          //     loop: true, // 无缝
          //     autoplay: true, // 自动
          //     // 小圆点
          //     pagination: {
          //       el: ".swiper-pagination",
          //     },
          //   });
          // });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // 方式二：swiper的实例创建在updated的钩子函数中
  updated() {
    // 实例化轮播
    new Swiper(".swiper-container", {
      loop: true, // 无缝
      autoplay: true, // 自动
      // 小圆点
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 3rem;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
```











### 十八、实现首页商品列表动态展示

![image-20220522142248282](/public/img/fourthStage/eight/image-20220522142248282.png)

请求数据：http://localhost:3000/api/gethortgoods

```vue
<template>
  <div>
    <!-- 使用轮播图组件 -->
    <v-swiper></v-swiper>

    <!-- 首页商品切换 -->
    <div class="goods">
      <span @click="index = 1" :class="{ active: index == 1 }">热门推荐</span>
      <span @click="index = 2" :class="{ active: index == 2 }">上新推荐</span>
      <span @click="index = 3" :class="{ active: index == 3 }">所有商品</span>
    </div>

    <!-- 商品列表展示，应该有三块 -->
    <ul class="goodsUl" v-show="index == 1">
      <li v-for="item in goodsList" :key="item.id" @click="goDetail(item.id)">
        <img :src="item.img" :alt="item.goodsname" />
        <div>
          <h3>{{ item.goodsname }}</h3>
          <span>现价格：￥{{ item.price | toPrice(2) }}</span>
          <del>原价格：￥{{ item.market_price | toPrice(2) }}</del>
          <button>立即抢购</button>
        </div>
      </li>
    </ul>
    <ul class="goodsUl" v-show="index == 2">
      <li v-for="item in hotList" :key="item.id" @click="goDetail(item.id)">
        <img :src="item.img" :alt="item.goodsname" />
        <div>
          <h3>{{ item.goodsname }}</h3>
          <span>现价格：￥{{ item.price | toPrice(2) }}</span>
          <del>原价格：￥{{ item.market_price | toPrice(2) }}</del>
          <button>立即抢购</button>
        </div>
      </li>
    </ul>
    <ul class="goodsUl" v-show="index == 3">
      <li v-for="item in newList" :key="item.id" @click="goDetail(item.id)">
        <img :src="item.img" :alt="item.goodsname" />
        <div>
          <h3>{{ item.goodsname }}</h3>
          <span>现价格：￥{{ item.price | toPrice(2) }}</span>
          <del>原价格：￥{{ item.market_price | toPrice(2) }}</del>
          <button>立即抢购</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import vSwiper from "../components/vSwiper.vue";
export default {
  data() {
    return {
      index: 1, // 默认展示的第几项
      hotList: [], // 热门推荐
      newList: [], // 上新推荐
      goodsList: [], // 所有商品
    };
  },
  components: {
    vSwiper,
  },
  methods: {
    // 点击跳转到商品详情
    goDetail(id) {
      this.$router.push("/detail/" + id);
    },
  },
  mounted() {
    // 请求首页商品列表数据
    this.$axios
      .get("/api/gethortgoods")
      .then((res) => {
        // console.log(res);
        if (res.data.code === 200) {
          this.hotList = res.data.list[0].content;
          this.newList = res.data.list[0].content;
          this.goodsList = res.data.list[0].content;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style scoped>
.goods {
  height: 0.8rem;
  display: flex;
}
.goods span {
  flex: 1;
  text-align: center;
  line-height: 0.8rem;
  font-size: 0.25rem;
}
.active {
  background: yellow;
}

.goodsUl {
  width: 96%;
  margin: 0 auto;
  margin-bottom: 1rem;
}
.goodsUl li {
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  margin-bottom: 0.16rem;
}
.goodsUl li img {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 2.2rem;
  height: 2.2rem;
}
.goodsUl li div {
  flex: 1;
  margin-left: 0.2rem;
}
.goodsUl li div h3 {
  font-size: 0.34rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
}
.goodsUl li div span,
.goodsUl li div del {
  font-size: 0.24rem;
  display: block;
  margin-bottom: 0.16rem;
}
.goodsUl li div span {
  color: red;
}
.goodsUl li div del {
  color: #ccc;
}
</style>
```







### 十九、实现注册

- 创建注册组件（视图）

register.vue

进行非空的判断，发起请求，成功之后跳转到登录页

```vue
<template>
  <div>
    <div class="f20">
      <h1 class="m20">注册</h1>
      <p class="m20">
        手机号：
        <input type="text" v-model="user.phone" />
      </p>
      <p class="m20">
        昵称：
        <input type="text" v-model="user.nickname" />
      </p>
      <p class="m20">
        密码：
        <input type="text" v-model="user.password" />
      </p>
      <p class="m20">
        <button @click="register">注册</button>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        phone: "",
        nickname: "",
        password: "",
      },
    };
  },
  methods: {
    register() {
      // 非空的判断
      if (!this.user.phone || !this.user.nickname || !this.user.password) {
        alert("请输入必填项");
        return;
      }

      // 可以注册，调用接口
      this.$axios
        .post("/api/register", this.user)
        .then((res) => {
          // console.log(res);
          if (res.data.code === 200) {
            // 注册成功，提示并跳转到登录页。登录页有要实现登录的接口
            // 但是这个时候，一定要取消之前写的全局路由导航
            // 全局路由导航是控制所有页面都必须要登录才可以看
            // 但是这个电商项目只需要控制某些页面需要登录才能看
            alert(res.data.msg);
            this.$router.push("/login");
          } else {
            alert(res.data.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
</style>
```

- 设置注册相关路由

```js
{
    path: '/register',
    component: () => import('../pages/register.vue')
},
```

- 实现注册逻辑（接口的调用）





### 二十、实现登录

```vue
<template>
  <div>
    <h1>登录</h1>
    <div class="m20 p20">
      <p class="mb20">
        <input
          type="text"
          class="p10"
          placeholder="请输入手机号"
          v-model="user.phone"
        />
      </p>
      <p class="mb20">
        <input
          type="text"
          class="p10"
          placeholder="请输入密码"
          v-model="user.password"
        />
      </p>
      <p>
        <button class="p10" @click="login">登录</button>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      // 非空的判断
      if (!this.user.phone || !this.user.password) {
        alert("用户名和密码必须填写");
        return;
      }

      // 调用登录接口
      this.$axios
        .post("/api/login", this.user)
        .then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            // 登录成功，跳转到首页，并将返回的数据存入本地存储中，以将来发送token请求
            alert(res.data.msg);
            this.$router.push("/home");
          } else {
            alert(res.data.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
</style>
```





### 二十一、实现商品详情页

request --> api.js中

```js
// 获取商品信息，get方式，有参数。注意get的传参方式
export function getgoodsinfo(data) {
  return http.get('/getgoodsinfo', {
    params: data,
  });
}
```

detail.vue中

```vue
<template>
  <div>
    <h1>商品详情</h1>

    <p class="m20">
      当前商品的id是：
      {{ $route.params.id }}
    </p>

    <!-- 详情内容展示 -->
    <div class="m20">
      <img class="goodsImg" :src="goodsinfo.img" alt="goodsinfo.goodsname" />
      <h3>商品名称：{{ goodsinfo.goodsname }}</h3>
      <p>商品价格：{{ goodsinfo.market_price | toPrice(2) }}</p>
      <div v-if="goodsinfo.description" v-html="goodsinfo.description"></div>
      <div v-else>暂无详情</div>
    </div>
  </div>
</template>
<script>
import { getgoodsinfo } from "../request/api";
export default {
  data() {
    return {
      goodsinfo: {}, // 商品详情对象
    };
  },
  mounted() {
    // 进入组件之后，发起ajax请求数据
    getgoodsinfo({ id: this.$route.params.id })
      .then((res) => {
        // console.log(res);
        if (res.data.code == 200) {
          this.goodsinfo = res.data.list[0];
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style scoped>
.goodsImg {
  width: 100%;
}
</style>
```





### 二十二、实现购物车列表

购物车访问都是需要权限的，这个时候需要验证token，我们在axios中传入token，并可以进行统一错误处理

```vue
<template>
  <div>
    <h1>购物车</h1>
  </div>
</template>

<script>
import { cartlist } from "../request/api";
export default {
  data() {
    return {};
  },
  mounted() {
    // 获取本地存储的token数据，因为请求购物车需要uid
    let userInfo = sessionStorage.getItem("userInfo");
    let uid = userInfo ? JSON.parse(userInfo).uid : null;
    // console.log(uid);
    cartlist({ uid })
      .then((res) => {
        // console.log(res);
        if (res.data.code == 200) {
          console.log(res.data.list);
          console.log(res.data.msg, "---购物车获取成功");
        } else {
          console.log(res.data.msg, "---购物车获取失败");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style scoped>
</style>

```





### 二十三、实现请求头设置

在axios中做拦截，传入token



### 二十四、做全局的token错误验证

在axios中做拦截，做统一的token错误验证，如果token过期或没有传，让它到登录页面去