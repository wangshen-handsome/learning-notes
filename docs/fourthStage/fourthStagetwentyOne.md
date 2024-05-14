---

layout: fourthStagetwentyOne

title: 四阶段 | 第二十一天

---

## 一、HOC高阶组件

高阶组件（HOC）是 React 中用于**复用组件逻辑的一种高级技巧**。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的**设计模式**。

地址：https://react.docschina.org/docs/higher-order-components.html

```
HOC：higher Order Component
高阶组件：是一个特殊的函数
特点：接受组件作为参数
返回值：返回新的组件
```

高阶组件总结：高阶组件就是将模板组件和数据结合，产生一个新的组件，让具体的业务使用

高阶组件：Hoc.jsx

模板组件：With.jsx

数据：data.js

高阶组件就是函数，它接收模板组件和数据作为参数，返回一个新的组件，这个新的组件在具体业务中使用

![image-20220727221213846](/public/img/fourthStage/twentyOne/image-20220727221213846.png)





hoc / Index.jsx：入口组件

```jsx
import React, { Component } from 'react'

import withComponent from './Hoc'; // 高阶组件
import With from './With' // 具体使用数据的模板组件
import list from './data'; // 数据
let NewComponent = withComponent(With, list); // 高阶组件调用，传入两个参数，产生一个新的组件，新组件在下面具体视图中使用

export default class Index extends Component {
    render() {
        return (
            <div>
                <NewComponent></NewComponent>
            </div>
        )
    }
}
```

Hoc.jsx：高阶组件

```jsx
import React, { Component } from 'react'
/**
 * 封装高阶组件，它是一个函数并默认导出，该函数接收两个参数，函数调用返回一个新的类组件
 * 参数一：WrappedComponent （模板组件）
 * 参数二：data （数据，数据通过自定义属性传到模板组件中）
 * 返回值：NewComponent （新的类组件）
 * */
export default (WrappedComponent, data) => {
    return class extends Component {
        render() {
            return (
                <>
                    <WrappedComponent data={data}></WrappedComponent>
                </>
            )
        }
    }
}
```

With.jsx：具体业务组件，它是一个类组件

```jsx
import React, { Component } from 'react'

export default class With extends Component {
    render() {
        // console.log(this.props); // 传过来的数据
        let { data } = this.props;
        return (
            <div>
                <h2>遍历列表</h2>
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
```

data.js

```js
export default [
    { id: 1, name: 'admin' },
    { id: 2, name: 'root' },
    { id: 3, name: 'qwer' },
    { id: 4, name: 'zaqwsx' },
]
```







## 二、过渡动画(了解)

网址：http://reactcommunity.org/react-transition-group/

它是一个单独的库，使用需要下载，按需引入

它共有三个组件，分别是：

- CSSTransition实现单元素过渡动画
- TransitionGroup实现列表元素动画效果
- SwitchTransition实现切换效果

![image-20220810193851670](/public/img/fourthStage/twentyOne/image-20220810193851670.png)



### 2.1下载 react-transition-group

transition 过渡     group 组

```
npm i react-transition-group

版本：4.4.2
```



### 2.2CSSTransition实现单元素过渡动画

(1) unmountOnExit：退出时实现卸载该组件，该属性必须添加（加上该属性即可）
(2) in：控制元素显示状态的 state 状态数据
(3) timeout：过渡动画效果持续时间，单位为毫秒
(4) classNames：指定过渡动画类名前缀（需要自定义两组四个过渡动画需要的 css 类前缀）（自定义类名前缀）
(5) onEnter：元素进入前的回调函数，按需添加
(6) onEntering：元素进入中的回调函数，按需添加
(7) onEntered：元素进入后的回调函数，按需添加
(8) onExit：元素离开前的回调函数，按需添加
(9) onExiting：元素离开中的回调函数，按需添加
(10) onExited：元素离开后的回调函数，按需添加



它有四个class类命名前缀

```css
进入前
.自定义类名-enter {
  opacity: 0;
}
进入中
.自定义类名-enter-active {
  opacity: 1;
  transition: opacity 200ms;
}
离开前
.自定义类名-exit {
  opacity: 1;
}
离开中
.自定义类名-exit-active {
  opacity: 0;
  transition: opacity 200ms;
}
```



Pages/Css/Box.jsx

```jsx
import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'; // 引入过渡动画
import './box.css';

export default class Box extends Component {
    constructor() {
        super();
        this.state = {
            isShow: true, // 盒子状态
            title: '隐藏' // 按钮提示文字
        }
    }
    render() {
        let { isShow, title } = this.state;
        return (
            <div>
                <h2>单元素过渡动画</h2>


                {/* 没使用动画 */}
                {/* <button onClick={() => this.setState({ isShow: !isShow })}>切换</button>
                {isShow ? <div className='box'></div> : null} */}


                {/* 使用过渡动画 */}
                <button onClick={() => this.setState({ isShow: !isShow })}>{title}</button>

                <CSSTransition
                    unmountOnExit
                    in={isShow}
                    timeout={500}
                    classNames='fade'
                    onEntered={() => this.setState({ title: '隐藏' })}
                    onExited={() => this.setState({ title: '显示' })}
                    >
                    <div className='box'></div>
                </CSSTransition>
            </div>
        )
    }
}
```

Pages/Css/box.css

```css
.box {
    width: 100px;
    height: 100px;
    background-color: red;
    position: absolute;
    left: 100px;
    top: 150px;
}

/* 进来前 */
.fade-enter {
    left: -100px;
    opacity: 0;
}

/* 进来中 */
.fade-enter-active {
    left: 100px;
    opacity: 1;
    transition: all 0.5s;
}

/* 离开前 */
.fade-exit {
    left: 100px;
    opacity: 1;
}

/* 离开中 */
.fade-exit-active {
    left: 1000px;
    opacity: 0;
    transition: all 0.5s;
}

```

注意：这里会报一个严格模式的错误，我们这里可以把严格模式去掉





### 2.3TransitionGroup实现列表元素动画效果

关键点：需要使用TransitionGroup和CSSTransition两个组件

- 使用TransitionGroup组件将列表的遍历进行包裹
- 使用CSSTransition组件将单元素进行包裹



Pages/Css/Box1.jsx

```jsx
import React, { Component } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './box.css'

export default class Box1 extends Component {
    constructor() {
        super();
        this.state = {
            // 数据
            brand: [
                { id: 1, name: '宝马' },
                { id: 2, name: '奔驰' },
                { id: 3, name: '玛莎拉蒂' },
                { id: 4, name: '皇冠' },
            ]
        }
    }
    render() {
        let { brand } = this.state;
        return (
            <div>
                <h1>列表元素动画效果</h1>

                <ul>
                    <TransitionGroup>
                        {brand.map((item, index) => (
                            <CSSTransition
                                key={item.id}
                                unmountOnExit
                                in={true}
                                timeout={500}
                                classNames='fade'
                            >
                                <li>
                                    {item.name}
                                    <button onClick={() => this.del(index)}>删除</button>
                                </li>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ul>
            </div>
        )
    }

    // 删除数组中的某一项
    del(i) {
        let { brand } = this.state;
        brand.splice(i, 1);
        this.setState({ brand })
    }
}

```



### 2.4SwitchTransition实现开关切换效果

关键：SwitchTransition里面套着CSSTransition，CSSTransition里面套着要切换的元素

SwitchTransition有两种模式，mode模式：out-in(默认值)  /  in-out



Pages/Css/Box2.jsx

```jsx
import React, { Component } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './box.css'

export default class Box2 extends Component {
    constructor() {
        super();
        this.state = {
            isShow: true // 控制文案显示什么内容
        }
    }
    render() {
        let { isShow } = this.state;
        return (
            <div>
                <h1>切换效果</h1>

                {/* SwitchTransition：mode模式: out-in(默认值)  in-out */}

                <SwitchTransition mode='in-out'>
                    <CSSTransition
                        key={isShow ? 'on' : 'off'}
                        classNames="vv"
                        timeout={500}
                    >
                        <button onClick={() => this.setState({ isShow: !isShow })}>{isShow ? 'on' : 'off'}</button>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        )
    }
}

```

box.css

```css
/* 开关的实现 */
.vv-enter {
    opacity: 0;
}

.vv-enter-active {
    opacity: 1;
    transition: all 0.5s;
}

.vv-exit {
    opacity: 1;
}

.vv-exit-active {
    opacity: 0;
    transition: all 0.5s;
}

```





## 三、react-router-dom路由模块(重点)

```
使用路由，结合组件来构建单页面应用

```

### 3.1下载

```
npm i react-router-dom

版本：6.3.0（注意版本）

```



### 3.2路由实现流程

#### 3.2.1路由模式[HashRouter | BrowserRouter]

共分为两种模式：HashRouter 和 BrowserRouter

- HashRouter：访问 http://localhost:3000/#/
- BrowserRouter：访问: http://localhost:3000/

一般在入口文件index.js中引入路由模块，确定路由模式，用路由模块将`<App />`包着



入口文件index.js中

```jsx
// 引入路由模块
import { HashRouter,BrowserRouter } from 'react-router-dom'

// HashRouter: 访问 http://localhost:3000/#/
// BrowserRouter:访问: http://localhost:3000/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 路由模式 */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

```



#### 3.2.2路由出口[Routes]

即组件视图展示的位置

App.jsx中（一级路由出口一般放在App.jsx中）

```jsx
import React from 'react'
import { Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>
      {/* 路由出口：Routes，即组件视图展示在这里 */}
      <Routes>

      </Routes>
    </div>
  )
}

```



#### 3.3.3路由规则[Route]

即定义**url地址** 和 **对应的组件**

注意：**Route只能放在Routes的里面**    (即路由规则只能放在路由出口里面)

Route即路由规则，Routes即路由出口

路由规则必须要有path和element属性，path代表url地址，element代表组件

`App.jsx中`

共分为四步

```jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom' // 引入路由模块

// 第一步、定义组件（组件都定义成函数组件）

// 第二步、引入组件
import Home from './pages/Router/Home';
import About from './pages/Router/About';
import Login from './pages/Router/Login';

export default function App() {
  return (
    <div>
      {/* 第三步、路由出口：Routes */}
      <Routes>
        {/* 第四步、定义路由规则：Route */}
        {/* path:路径     element:元素，它对应的是组件调用 */}
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  )
}

```

注意：路由出口和路由规则在一起，路由出口包裹着路由规则

（而vue里面路由规则是放在一个.js的文件里面，一级路由出口是放在App.vue里面）





#### 3.3.4404路由

访问一个不存在的url地址要展示的组件，放在所有组件的后面

`地址用*匹配（路由从上向下匹配，到最后一个时，就可以匹配到这个*）`

```jsx
{/* 404 */}
<Route path='*' element={<NotFound></NotFound>}></Route>

```



#### 3.4.5路由导航[Link | NavLink]

作用：定义导航链接跳转，最后都解析成a标签

注意：导航就不能放在路由出口中了

`App.jsx中`

- Link  导航跳转（不可以加选中样式）
- 必须加to属性
- 解析为a标签

```jsx
{/* 路由导航 Link */}
{/* Link方式，不可以加选中样式 */}
<Link to="/home">首页</Link> |
<Link to="/about">关于我们</Link> |
<Link to="/login">登录</Link>

```



- NavLink  导航跳转（可以实现选中样式）

```jsx
// 方式一：style对应一个回调函数，回调函数的参数可以解构出一个isActive，如果选中，它就是真，否则就是假
<NavLink to='/路径' style={({ isActive }) => isActive ? { 样式 } : null}>首页</NavLink>

// 方式二：class类，默认选中有active类，如果要换类名，可以采用上面{ isActive }这种样式
<NavLink to="/路径" className={({ isActive }) => (isActive ? 'sel' : null)}>首页</NavLink>

// 方式三：直接用默认的active类，即什么都不用写，定义好active类即可

```



```
路由导航  NavLink
    to：跳转的连接地址
    activeclassname：类名，不加这个属性，则选中时默认的类名为active，加这个属性可以改类名
    style：行内样式

```

```jsx
<div className="title">
    <NavLink to="/index" className={({ isActive }) => (isActive ? 'sel' : null)}>
        首页
    </NavLink>
</div>



<div className="title">
	<NavLink to="/index" style={({isActive})=> isActive ? {background: 'green'}:null}>
        首页
    </NavLink>
</div>

```



#### 3.4.6编程式导航 (useNavigate)

即在组件页面中，点击普通按钮，用js实现跳转



注意：要先引入useNavigate，且useNavigate只能在**函数组件**中使用，它调用之后，返回一个函数，这个函数的第一个参数是要跳转的地址，第二个参数是一个对象

`注意它同重定向的<Navigate to="/home"></Navigate>的区别，这是方法，重定向是组件`



需求：新增Detail.jsx详情组件，在Home.jsx中有几个按钮，点击跳转到Detail.jsx中

首先，Detail.jsx组件，需要在App.js中，设置路由出口，并定义好url地址



在Home.jsx中定义跳转方式

```jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'; // 编程式导航，要引入useNavigate，useNavigate只能在函数组件中使用

export default function Home() {
    let navigate = useNavigate();
    // 注意，useNavigate只能在函数组件中使用，它调用之后，返回一个函数，这个函数的第一个参数是要跳转的地址，第二个参数是一个对象
    // 我们可以在需要跳转的地方，传入地址参数，使用这个方法进行跳转

  return (
    <div>
      <h1>首页</h1>

      {/* 编程式导航 */}
      <div>
        <h3>这种方式，是增加一条新的历史记录</h3>
        <button onClick={() => navigate('/detail')}>查看商品详情</button>
      </div>

          
      <div>
        <h3>这种方式，是使用新的历史记录替换当前的历史记录</h3>
        <button onClick={() => navigate('/detail', { replace: true })}>查看商品详情</button>
      </div>

          
      <div>
        <h3>直接返回上一页</h3>
        {/* 正1为前进一页，负1为后退一页 */}
        <button onClick={() => navigate(-1)}>返回</button>
      </div>
    </div>
  )
}

```



#### 3.4.7重定向

即访问某一个地址时，我想让它跳转到另一个地址去

使用**Navigate**这个组件

在App.jsx中，在404的后面配置

```jsx
import { Routes, Route, Link, NavLink, Navigate } from 'react-router-dom' // 引入路由模块

{/* 重定向：如果访问 / ，就让它重定向到home哪个地址去 */}
<Route path='/' element={<Navigate to="/home"></Navigate>}></Route>

{/* 重定向，也可以像vue中的重定向一样，这样就不要上面的404页面 */}
{/* 访问不存在的路由地址，都让它到/home去 */}
<Route path="*" element={<Navigate to="/home"></Navigate>}></Route>

```





默认路由

```jsx
<Route index element={<组件/>}></Route>  默认路由

```



------



#### 3.4.8search传参

传参这件事，有两方，**传参方**和**接参方**，传参方在url地址中传入参数，接参方在某个地方接收参数



###### 方式一：查询字符串方式

**1、传参方**：App.jsx中，增加详情的导航链接，在地址的url?后面传入参数

```jsx
<NavLink to='/detail?id=3&name=zs'>详情</NavLink>

```

**2、接收方**：Detail.js中

需要利用`react-router-dom`中的**useSearchParams**方法。它是一个方法，调用之后，返回一个数组，数组第一项为接收到的查询字符串数据对象，第二个参数为一个函数，可以用来修改这个查询字符串参数对象

第一项它有get方法，可以用来获取对应的参数数据

```jsx
import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Detail() {
  let [user, setUser] = useSearchParams();
  console.log(user.get('id')); // 3
  console.log(user.get('name')); // zs
    
  return (
    <div>
      <h1>详情</h1>
    </div>
  );
}

```





###### 方式二：state方式（推荐）

传参方App.js，数据不加在url中了，而是写在state的属性中，为一个对象

```jsx
<NavLink to='/detail' state={{ id: 3, name: '李四' }}>详情</NavLink>

```

接收方Detail.js，只需要调用**useLocation**这个方法，这个方法返回一个对象，相当于vue中的$route

它返回的对象中有state这个属性

```jsx
import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Detail() {
  let { state } = useLocation();
  console.log(state); // {id: 3, name: '李四'}

  return (
    <div>
      <h2>详情</h2>
      <p>传过来的参数id: {state.id}</p>
      <p>传过来的参数name: {state.name}</p>
    </div>
  )
}

```



注意：这里演示的传参方都是NavLink，编程式导航也是如此，接参不变

```jsx
// 查询字符串方式
<button onClick={() => navigate('/detail?id=1&name=zs')}>到详情</button>

// state方式
<button onClick={() => navigate('/detail', { state: { id: 1, name: 'zs' } })}>
	到详情
</button>

```





#### 3.4.9动态路由传参

共分为三步：

1.配置路由规则

```jsx
{/* 配置路由改规则  :占位符 */}
<Route path='/detail/:id/:name' element={<Detail></Detail>}></Route>

```

2.传参方App.js

```jsx
{/* 动态路由 */}
<NavLink to='/detail/3/李四'>详情</NavLink>

```

3.接收方Detail.jsx

用**useParams**接收参数

```jsx
import React from 'react'
import { useParams } from 'react-router-dom';

export default function Detail() {
  // 动态路由获取参数
  let params = useParams();
  console.log(params); // {id: '3', name: '李四'}

  return (
    <div>
      <h2>详情</h2>
      <p>传过来的参数id: {params.id}</p>
      <p>传过来的参数name: {params.name}</p>
    </div>
  )
}

```

编程式导航以此类推

```jsx
<button onClick={() => navigate('/test/1/zs')}>到详情</button>

```







#### 3.4.10路由懒加载

为什么使用路由懒加载，因为第一次加载时，就加载了所有的组件，这样导致第一次加载过慢



两个步骤，缺一不可

步骤一：引入组件时，用React.lazy()引入，它里面接收一个箭头函数，箭头函数中返回组件

```js
// 引入组件,懒加载模式  React.lazy
let Home = React.lazy(() => import('./pages/Router/Home'));
let About = React.lazy(() => import('./pages/Router/About'));
let Login = React.lazy(() => import('./pages/Router/Login'));
let Detail = React.lazy(() => import('./pages/Router/Detail'));
let NotFound = React.lazy(() => import('./pages/Router/NotFound'));

```

步骤二：App.js中，用<React.Suspense></React.Suspense>将最大的根标签包裹起来，fallback还可以设置加载中的loading组件

```jsx
export default function App() {
  return (
    <React.Suspense fallback={<h1>loading...</h1>}>
      <div>
		
      </div>
    </React.Suspense>
  )
}

```



#### 3.4.11路由嵌套

```jsx
// 父组件配置嵌套路由
<Route path='/home' element={<Home />}>
    {/* 访问地址是：/home/cart */}
	<Route path="cart" element={<Cart />} />
	<Route path="cates" element={<Cates />} />
</Route>


// 子组件中配置出口
import { Outlet } from "react-router-dom";
// 子组件展示位置，相当于二级路由出口
<Outlet />

```





#### 3.4.12路由导航守卫

方式一：直接在路由上写（如果守卫的组件较多，比较麻烦）

```jsx
// 检查isLogin这个变量（可能是检查的本地存储），如果为真就正常展示组件，如果为假就让你到登录页面去
<Route path='/welcome' element={
	isLogin ? <Welcome></Welcome> : <Navigate to={'/login'} replace></Navigate>
}>
</Route>

```



方式二：自定义路由守卫组件，然后用它将要验证的组件包裹起来

封装一个组件PrivateRoute，如果要拦截，就使用PrivateRoute嵌套对应的组件

```jsx
import {Navigate} from 'react-router-dom'

export default function Private(props) {
  // props.children 是被<PrivateRoute></PrivateRoute>嵌套的组件
  let isLogin = true; // 这里应该去检查本地存储中是否有值
  return (
      isLogin ? props.children : <Navigate to={'/cate'} replace></Navigate>
  )
}

```

```jsx
// 引入PrivateRoute组件
<Route path='/welcome' element={<PrivateRoute><Welcome></Welcome></PrivateRoute>}>
</Route>

```







## 四、面试题

```
⚫ React-router和React-router-dom的区别?
⚫ Link和NavLink的区别?
⚫ 在react中hash模式和history模式的区别
⚫ 在react中路由传参是如何进行传递参数，什么是动态路由? 
⚫ 在react中有哪些基本的路由组件?

```



## 五、课后作业

使用 react 实现美团项目，具体事宜如下

用户信息包含：用户名(name)、密码(pass)、角色(0:外卖小哥，1:普通用户)

要求

- 1、角色、用户名及密码不能为空，当用户名或者密码为空时，弹框提示“用户名或者密码不能为空”;
- 2、登录成功后跳转致首页(index);
- 3、实现二级路由，首页(Home),订单(Order),我的(User)
- 4、首页实现
  - 广告页面
  - 实现四种不同的路由跳转方式
- 5、电影列表，数据如下

```json
movies:[ 
    {
        id:1,
        name:'唐人街探案 3',
        director:' 陈思诚',
        grade:8.8, image:'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2940973367,2508319274&f
        m=58&app=83&f=JPEG?w=400&h=533&s=08E46084CC947CDE3E3C94D003008099', 
    },
    {
        id:2,
        name:'心灵奇旅',
        director:' 彼特道格特',
        grade:8.9, image:'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=131147363,4086758047&f
        m=58&app=83&f=JPEG?w=400&h=533&s=BB32208A060112FB642FD49C030060AB' 
    },
    {
        id:3,
        name:'拆弹专家 2',
        director:' 邱礼涛',
        grade:7.8, image:'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=700794841,3270068296&f
        m=58&app=83&f=JPEG?w=400&h=533' 
    }
]

```

要求
(1) 点击每一个电影信息进入电影详情，使用动态路由传参
(2) 在电影详情页获取传递的参数

- 6、酒店列表，数据如下

```json
hotels:[
    {
        id:1, 
        name:'香格里拉', 
        price:1059,
        image:'https://dimg04.c-ctrip.com/images/200k190000017gq595721_R_300_225_R5_Q70_D.jpg'
    }, {
        id:2,
        name:'索菲特',
        price:1522, 
        image:'https://dimg04.c-ctrip.com/images/02001120008ds0m5a8111_R_300_225_R5_Q70_D.jpg'
    }, {
        id:3, 
        name:'速 8',
        price:99,
        image:'https://dimg04.c-ctrip.com/images/02026120009ar1sty2BA1_R_600_400_R5_D.jpg'
    }
]

```

要求
(1)点击每一个酒店信息进入酒店详情，使用 search 传参
(2)在酒店详情页获取传递的参数

- 7、在电影列表、电影详情、酒店列表、酒店详情中增加公共返回组件

