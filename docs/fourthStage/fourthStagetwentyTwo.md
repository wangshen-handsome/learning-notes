---

layout: fourthStagetwentyTwo

title: 四阶段 | 第二十二天

---

## 项目开发

- 使用create-react-app创建项目( 没用的文件删除，只留app.js和index.js )

- 下载必要路由 npm i react-router-dom

- 可以在App.js中引入公共文件，比如 rem.js  reset.css

  ```
  import './assets/css/reset.css'
  import './assets/utils/rem.js'
  ```

- 配置路由

  先开启index.js

  ```jsx
  import { HashRouter } from 'react-router-dom'
  
  const appRoot = ReactDOM.createRoot(document.getElementById('app'));
  
  appRoot.render(
      <HashRouter>
          <App />
      </HashRouter>
  );
  ```

  配置规则。先建立页面。使用**文件夹**来区分每一个页面

![image-20220817092300939](/public/img/fourthStage/twentyTwo/image-20220817092300939.png)





## 一、antd(UI库)

Ant Design，基于React设计体系的 React UI 组件库，主要用于研发企业级中后台产品。

`ant蚂蚁  Design设计`

研发团队：蚂蚁金服

antd框架样式使用less+css

移动端网址：http://ant-design-mobile.antgroup.com/zh

pc端网址：https://ant-design.antgroup.com/index-cn

### 1.1移动端下载

```
npm i antd-mobile

5.20.0
```



搭建路由，创建pages/ui/Index.jsx组件

1、确定路由模式

2、定义路由出口

3、定义路由规则

4、访问地址



### 1.2使用Button组件

https://mobile.ant.design/zh/components/button

在哪个组件中需要使用，就直接在这个组件中引入antd的组件标签

直接引入组件即可，**antd-mobile 会自动为你加载 css 样式文件**

Index.jsx组件中使用

```jsx
import React from 'react'
import { Button } from 'antd-mobile'
export default function Index() {
  return (
    <div>
      <Button color='primary'>Primary</Button>
      <Button color='success'>Success</Button>
      <Button color='danger'>Danger</Button>
      <Button color='warning'>Warning</Button>
    </div>
  )
}
```





### 1.3引入图标库

https://mobile.ant.design/zh/components/icon

图标是在一个单独的 npm 包中，如果你想使用图标，需要先安装它

```
npm i antd-mobile-icons

0.3.0
```



```jsx
import React from 'react'
import { Button } from 'antd-mobile' // 使用按钮
import { CalculatorOutline } from 'antd-mobile-icons' // 引入图标库
export default function Index() {
  return (
    <div>
      {/* 使用按钮 */}
      <Button color='primary'>Primary</Button>
      <Button color='success'>Success</Button>
      <Button color='danger'>Danger</Button>
      <Button color='warning'>Warning</Button>

      <hr />
      {/* 使用图标库，上面要引进来 */}
      <CalculatorOutline />
    </div>
  )
}
```



## 二、axios数据交互

### 2.1开启后端服务

1.创建数据库orange，导入数据表orange_data.sql

2.服务端做数据库的配置

- 打开orange-admin项目
- config/global.js

```js
// 数据库连接参数
exports.dbConfig = {
    host: 'localhost', //数据库地址
    user: 'root', //数据库用户名
    password: 'root',//数据库用户密码
    port: 3306,
    database: 'orange' // 数据库名字
}
```

3.开启服务端

```
1.npm i
2.npm start
3.服务端运行在:http://localhost:3000/api/getnew
```



### 2.2创建前端项目-修改端口

注意：此时服务端和前端都运行在3000端口上，我们可以改前端，也可以改服务端

如果要修改**服务端端口**：bin/www里面

如果要修改**前端端口**：node_modules/react-scripts/scripts/start.js里面



### 2.3配置代理一：package.json

前端配置代理：在package.json中，添加以下的代理设置，再**重启前端项目**

```json
{
  "proxy":"后端服务器地址",
}

如：
{
  "proxy":"http://localhost:3000",
}

```

重启项目: npm start

实际请求：

```js
axios.get('/api/getnew').then(res=>{
    console.log(res)
})

```



### 2.4数据请求案例

1.安装axios

```
npm i axios

0.27.2

```



2.新人专享的案例

创建src/views/Home.jsx，并在App.jsx中定义好路由出口。创建**类组件**请求数据

```jsx
import React, { Component } from 'react'
import axios from 'axios';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            news: [] // 新人专享数据
        }
    }
    // 挂载完成，发起请求
    componentDidMount() {
        axios.get('/api/getnew').then(res => {
            // console.log(res);
            if (res.data.code === 200) {
                // 获取成功
                this.setState({ news: res.data.list })
            }
        })
    }
    render() {
        let { news } = this.state;
        return (
            <div>
                <h1>axios请求新人专享数据</h1>

                <ul>
                    {news.map(item => (
                        <li key={item.id}>
                            <img src={item.img} style={{ width: "100px" }} alt="" />
                            --
                            {item.goodsname}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

```



### 2.5配置代理二：setupProxy

项目中更多用

1.安装依赖

```sh
npm i http-proxy-middleware

2.0.6

```

2.创建setupProxy.js文件，在**src**下创建文件【setupProxy.js】，内容如下

```js
const proxy = require('http-proxy-middleware');
module.exports = (app) => {
  app.use(
    '/api',
    proxy.createProxyMiddleware({
      target: 'http://localhost:3000', // 代理的地址
    })
  );
};

```

3.使用

```js
axios.get('/api/getnew').then(res=>{
    console.log(res)
})

```

4.配置图片路径

index.js中配置

```js
// 在Component的原型上，添加一个自定义的属性，这个属性值就是服务器地址
// 为什么要在Component的原型上加，因为每一个组件都继承自Component，在组件内部，通过this.$url就可以获取到这个属性
React.Component.prototype.$url = 'http://localhost:3000';

```

```js
// 使用时
src={'http://localhost:3000' + item.img}

// 从原型上获取
src={this.$url + item.img}

```





## 三、fetch

https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch



### 3.1fetch之get请求

语法，如果有参数，要跟在url的后面

```js
fetch(url [,config])
    .then(res=>{
      return res.json() // 取过来的数据，需要转一下，再传给下一个then
    })
    .then(res=>{
      // res才是客户端识别的数据
    })
    .catch(error => {
      console.error('Error:', error);
    });

```

案例：万人团

```jsx
import React, { Component } from 'react';

export default class User extends Component {
  constructor() {
    super();
    this.state = {
      wrt: [], // 万人团
    };
  }
  render() {
    let { wrt } = this.state;
    return (
      <div>
        <h1>万人团</h1>

        <ul>
          {wrt.map((item) => (
            <li key={item.id}>
              {item.goodsname}
              -
              <img style={{ width: '100px' }} src={item.img} alt="" />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    // 用fetch发起get请求，原生方法，不用依赖任何框架，请求万人团的数据

    fetch('/api/getgroupon')
      .then((res) => {
        // console.log(res);
        return res.json(); // 取过来的数据，需要转一下，再传给下一个then
      })
      .then((res) => {
        // console.log(res); // 拿到真正的数据
        if (res.code === 200) {
          this.setState({ wrt: res.list });
        }
      });
  }
}

```



### 3.2fetch之post请求

语法

```js
fetch(url,{
    method:'post',
    body:表单数据, // 数据，根据Content-Type的设置，将数据用qs序列化成URL的形式或者用JSON转
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded', // 'application/json'
    }
}).then(res=>{
    return res.json()
}).then(res=>{
    // 客户端识别的数据
}).catch((error) => {
    console.error('Error:', error);
});

```

发送上传文件

```jsx
const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

// 不需要设置Content-type，会以Content-type:'mutilpart/form-data'传输
fetch('https://example.com/profile/avatar', {
  method: 'post',
  body: formData,
})
  .then((response) => response.json())
  .then((result) => {
    console.log('Success:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

```







#### 实现注册功能

1、创建注册组件：src/pages/Register.jsx。函数组件

2、配置路由

3、分析接口，需要三个参数 phone、nickname、password

```jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';

export default function Register() {
  let navigate = useNavigate(); // 编程式导航
  // 数据
  let [user, setUser] = useState({
    phone: '',
    nickname: '',
    password: '',
  });
  // 修改数据的方式
  function changeUser(e, attr) {
    setUser({
      ...user,
      [attr]: e.target.value,
    });
  }

  function reg() {
    // console.log(user);
    fetch('/api/register', {
      method: 'post',
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json',
      },
      // body: qs.stringify(user),
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.code === 200) {
          alert('注册成功');
          navigate('/login');
        } else {
          alert(res.msg);
        }
      });
  }

  return (
    <div>
      <h1>注册</h1>
      <p>
        手机号：
        <input
          type="text"
          value={user.phone}
          onChange={(e) => changeUser(e, 'phone')}
        />
      </p>
      <p>
        昵称：
        <input
          type="text"
          value={user.nickname}
          onChange={(e) => changeUser(e, 'nickname')}
        />
      </p>
      <p>
        密码：
        <input
          type="text"
          value={user.password}
          onChange={(e) => changeUser(e, 'password')}
        />
      </p>
      <p>
        <button onClick={() => reg()}>注册</button>
      </p>
    </div>
  );
}

```





#### 实现登录功能

```jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  let navigate = useNavigate();
  let [user, setUser] = useState({
    phone: '',
    password: '',
  });

  function changeUser(e, attr) {
    setUser({
      ...user,
      [attr]: e.target.value,
    });
  }
    
  function login() {
    // console.log(user);
    fetch('/api/login', {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.code == 200) {
          alert(res.msg);
          navigate('/home');
        } else {
          alert(res.msg);
        }
      });
  }
  return (
    <div>
      <h1>登录</h1>
      <p>
        手机号：
        <input
          type="text"
          value={user.phone}
          onChange={(e) => changeUser(e, 'phone')}
        />
      </p>
      <p>
        密码：
        <input
          type="text"
          value={user.password}
          onChange={(e) => changeUser(e, 'password')}
        />
      </p>
      <p>
        <button onClick={() => login()}>登录</button>
      </p>
    </div>
  );
}

```



### 3.3fetch之简单封装

在src目录下创建request目录，下面创建http.js和api.js



http.js

```js
import qs from 'qs'; // 第三方框架，一定要安装

/***
 * get请求
 * 参数一：url 地址，注意要传的数据，跟在url的后面。这里判断了url中是否有?，如果有，数据直接在后面加，如果没有，数据在?号后面加
 * 参数二：params 数据
 */
export function get(url, params) {
  if (params) {
    if (url.search(/\?/) === -1) {
      url += '?' + qs.stringify(params);
    } else {
      url += '&' + qs.stringify(params);
    }
  }
  return fetch(url).then((res) => res.json());
}

/***
 * post请求
 * 参数一：url 地址
 * 参数二：params 数据
 * 参数三：isFile 是否有上传文件，默认不上传文件
 */
export function post(url, params = {}, isFile = false) {
  let options = null; // 配置项
  let data = null; // 数据

  if (isFile) {
    // 上传，循环将数据放入到FormData对象中
    data = new FormData();
    for (let attr in params) {
      data.append(attr, params[attr]);
    }
    options = {
      method: 'post',
      body: data,
    };
  } else {
    // 没有文件上传，则把数据拼成查询字符串
    options = {
      method: 'post',
      body: qs.stringify(params),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
  }

  return fetch(url, options).then((res) => res.json());
}

```

api.js

```js
import { get, post } from './http'

// 获取商品分类
export let getcate = () => get('/api/getcate');

// 登录
export let postLogin = (data) => post('/api/login', data);

```

在实际登录的页面引入api.js中的方法，调用即可





------





## 四、redux

网址：https://www.redux.org.cn/

阮一峰：https://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html

### 4.1什么是redux

```
Redux 是 JavaScript 状态容器，提供可预测化的状态管理。

```

### 4.2为什么使用redux

```
用户的使用方式复杂
不同身份的用户有不同的使用方式（比如普通用户和管理员）
多个用户之间可以协作
与服务器大量交互，或者使用了WebSocket
View要从多个来源获取数据

```

**总结：多交互，多数据需要使用redux**



### 4.3redux的三大原则

#### 4.3.1单一数据源

```js
整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。

```

如

```js
let initialState = {
    name:'刘畊宏',
    age:48,
    list:[],
    obj:{},
}

```

#### 4.3.2State 是只读的

```
唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。即action是一个对象，它有两个属性，第一个是type类型，第二个是一个对象，用于修改state数据

```

```js
let action = {type:'操作类型',{name:'刘畊宏男孩'}}
store.dispatch(action) // 它执行会触发reducers函数

```

#### 4.3.3使用纯函数来执行修改

reducer 还原剂

```js
为了描述 action 如何改变 state tree ，你需要编写 reducers 函数。
reducers接收初始值和action

```

```js
function reducer(state = initialState, action){
    switch(action.type){
        case 'changeName':
            return {
                ...state,
                name:action.name
            }
        case 'changeAge':
            return {
                ...state,
                age:action.age
            }
        default:
            return state
    }
}

```



## 五、使用redux

### 5.1安装

要注意版本

```
npm i redux@3.7.2

```



### 5.2store仓库创建、使用



#### 5.2.1创建仓库

在src下面创建store/index.js。共分为三步

```js
import { createStore } from 'redux'; // 引入createStore函数，它接收reducer函数做为参数，返回store容器

// 1、声明state，里面就是放各种数据，它是唯一的数据来源
let initialState = {
    name: '刘畊宏',
    age: 48,
};

// 2、声明reducer函数
// 作用：专门修改state状态的
// 参数1：state   获取上一次的最新数据，必须有默认值
// 参数2：action  是一个普通对象  {type: '操作的类型' [, 对应操作类型要修改的数据]}
// 返回值：返回最新的state状态
// 你有多少个数据，就得写多少个switch的分支，action中修改数据的type类型，一定要和这里保持一致
function reducer(state = initialState, action) {
    // console.log(action);
    switch (action.type) {
        // 假如提交的action = {type: 'changeName', 'name':'新数据'}，用于修改state中的name
        case 'changeName':
            return {
                ...state,
                name: action.name
            }
        // 假如提交的action = {type: 'changeAge', 'age':'新数据'}，用于修改state中的age
        case 'changeAge':
            return {
                ...state,
                age: action.age
            }
        default:
            return state;
    }
}

// 3、得到store容器
let store = createStore(reducer); // createStore是一个函数，接受reducer函数做为参数，返回store容器

export default store;

```

#### 5.2.2使用仓库

创建pages/User.jsx类组件，引入store仓库，在这个组件里面就可以使用数据了。共分为四步

```jsx
import React, { Component } from 'react'
import store from '../store'; // 引入仓库，store下面就有dispatch、getState、subscribe等方法。subscribe即订阅（监听）

export default class User extends Component {
    render() {
        // 第一步：获取数据并使用
        // console.log(store); // 取得仓库，它下面就有dispatch、getState、subscribe等方法
        // console.log(store.getState()); // 取得数据
        let { name, age } = store.getState(); // 获取到仓库中的数据，在页面中使用

        return (
            <div>
                <h1>使用store中的数据</h1>
                <p>姓名是：{name}</p>
                <p>年龄是：{age}</p>

                <hr />
                <h1>修改store中的数据</h1>
                <p>
                    <button onClick={() => this.changeName('小芳')}>修改名字</button>
                </p>
                <p>
                    <button onClick={() => this.changeAge(18)}>修改年龄</button>
                </p>
            </div>
        )
    }

    // 第二步：修改数据，此方法只是store仓库中的更改了，但是视图还不会改，要改视图，还要调用subscribe监听
    // dispatch提交一个action，action是一个普通的对象，它的type一定要和仓库中要修改的数据一致
    // 改name
    changeName(name) {
        let action = { type: 'changeName', name: name };
        store.dispatch(action); // 这里修改了之后，数据仓库实际是改了，但是页面还不会更新，因为没有setState方法，我们还要在挂载完成之后添加监听
    }
    // 改age
    changeAge(age) {
        store.dispatch({ type: 'changeAge', age });
    }

    // 第三步：监听，当stroe中的数据改变，就会调用此方法，触发setState改数据
    componentDidMount() {
        // subscribe函数接收一个回调函数为参数，这个参数什么时间会触发，当store仓库中的数据发生变化，它就会触发
        // 作用：监听state状态的改变
       	// 参数：callback
       	// 返回值：取消监听的方法
        this.un = store.subscribe(() => {
            // console.log(123);
            this.setState(store.getState()); // 这里是去改仓库中的state对象，这里将仓库中的数据当做state状态机一样改变
        });
    }
    
    // 第四步：组件销毁的时候，取消监听
    // 在新版本中做了优化，在旧版本中，如果不取消监听，会报错
    componentWillUnmount(){
        // 取消监听
        this.un()
    }
}

```





## 六、store常用的方法

### 6.1getState

作用：获取数据

```js
let {name,age} = store.getState()

```

### 6.2dispatch

作用：提交action。任何地方，只要调dispatch这个方法，就可以修改state中的数据

```js
let action = { type: 'changeName', name: '小芳' };
store.dispatch(action)

```

### 6.3subscribe

监听数据的变化，在挂载完成之后监听，就是当数据发生变化的时候，调用this.setState()方法，修改数据，只有修改了数据，视图才会更新

```js
// 组件挂载完成
componentDidMount(){
    /**
       * 监听state状态的改变
       * 参数:callback
       * 返回值:取消监听的方法
      */
    this.un = store.subscribe(()=>{
        this.setState(store.getState())
    })
}

```

### 6.4取消监听

当从一个组件切换到另一个组件时，我们需要销毁监听，否则在低版本里面会报内存泄漏

```js
// 组件销毁的时候
componentWillUnmount(){
    // 取消监听
    this.un()
}

```



## 七、actionCreator

所谓的actionCreator，就是将原来写在每个组件中dispatch调用时要传的对象，移到store/index.js中，写成一个对象并导出，做一个封装，方便使用

```js
changeAge(age) {
    // actions是一个对象，对象里面是多个方法，每个方法调用，最终返回一个对象
    const actions = {
        change_age(age){
            return {type: 'changeAge', age}
        }
    }
    store.dispatch(actions.change_age(age))
	
    // 封装成上面的，就可以代替下面这一句话，最终每一个都要有，我们把它们提出来放在一起
    store.dispatch({ type: 'changeAge', age });
}

```



封装的目的是为了方便代码的移植和调试，在store/index.js中，声明此对象，对象的每一项是一个箭头函数，箭头函数返回一个对象

```js
// 封装actionCreator。这里要改的数据同initialState和reducer对比着来
// 因为要在别的页面使用，因此要导出
export let actions = {
    change_name: (name) => ({ type: 'changeName', name }),
    change_age: (age) => ({ type: 'changeAge', age })
}

```

在使用store的组件中，修改的方式应该如下

```js
import store, { actions } from '../store'; // 引入仓库

```

```js
changeName(name) {
    // 手动改，没有调用actions下面的方法，这样稍麻烦
    // store.dispatch({ type: 'changeName', name: name }); // 这里修改了之后，数据仓库实际是改了，但是页面还不会更新，因为没有setState方法，我们还要在挂载完成之后添加监听

    store.dispatch(actions.change_name(name)); // 使用封装好的actions来改数据，这样更方便
}

```





## 八、actionType的封装

为什么要封装type，因为actions中用的type和reducer函数中用的要保持一致

把type类型都提出来，声明在store/index.js中，使用到type的地方，都直接从这个里面取

```js
// 封装actionType
const TYPES = {
    CHANGE_NAME:'CHANGE_NAME',
    CHANGE_AGE:'CHANGE_AGE'
}

```

使用案例：store/index.js中

```js
import { createStore } from 'redux'; // 引入

// 1、声明state，里面就是放各种数据
let initialState = {
    name: '刘畊宏',
    age: 48,
};

// 封装actionType，这样，所有的type类型统一在这里定，下面reducer和actions中都在这里取，你有几个数据，就要写几个type
const TYPES = {
    CHANGE_NAME: 'CHANGE_NAME',
    CHANGE_AGE: 'CHANGE_AGE'
}

// 封装actionCreator。这里要改的同initialState和reducer对比着来
export let actions = {
    change_name: (name) => ({ type: TYPES.CHANGE_NAME, name }),
    change_age: (age) => ({ type: TYPES.CHANGE_AGE, age })
}

// 2、声明reducer函数
// 作用：专门修改state状态
// 参数1：state   获取上一次的最新数据，必须有默认值
// 参数2：action  是一个普通对象  {type: '操作的类型' [, 对应操作类型要修改的数据]}
// 返回值：返回最新的state状态
function reducer(state = initialState, action) {
    // console.log(action);
    switch (action.type) {
        // 假如提交的action = {type: 'changeName', 'name':'新数据'}，用于修改state中的name
        case TYPES.CHANGE_NAME:
            return {
                ...state,
                name: action.name
            }
        // 假如提交的action = {type: 'changeAge', 'age':'新数据'}，用于修改state中的age
        case TYPES.CHANGE_AGE:
            return {
                ...state,
                age: action.age
            }
        default:
            return state;
    }
}


// 3、得到store容器
let store = createStore(reducer) // 接受reducer函数做为参数，返回store容器

export default store;

```

