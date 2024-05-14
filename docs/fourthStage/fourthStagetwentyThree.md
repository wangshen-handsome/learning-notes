---

layout: fourthStagetwentyThree

title: 四阶段 | 第二十三天

---

## 一、hook

https://react.docschina.org/docs/hooks-intro.html



### 1.1hook介绍

```
1.hook在不编写class类组件的情况下使用state状态机和react的其他特性
2.hook是在16.8新增的特性
```



### 1.2hook解决了哪些问题

```
1.解决了在组件中代码重复和重构的问题
2.在大型应用中重复逻辑会大量出现在组件的方法中,会导致代码冗余和重复逻辑
3.解决了在render  Props和高阶组件带来的代码重复和抽象问题
```



### 1.3特点

```js
1.hook中没有this
2.在不编写class类组件的情况下使用state及生命周期钩子函数
3.属于纯函数
4.提高代码的复用率
```



## 二、react中钩子作用及常用的钩子

- 创建：src/pages/state/Index.jsx
- 安装路由

```
npm i react-router-dom
```



- 在src/index.js中设置路由模式

```jsx
<HashRouter>
    <App />
</HashRouter>
```

- 在src/App.jsx中设置路由规则

```jsx
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

// 引入组件
let Index = React.lazy(() => import('./pages/State/Index'))

export default function App() {
  return (
    <React.Suspense fallback={<h1>loading...</h1>}>
      <>
		{/* 定义路由出口及路由规则 */}
        <Routes>
          <Route path="/index" element={<Index></Index>}></Route>
          <Route path="/" element={<Navigate to="/index"></Navigate>}></Route>
        </Routes>

      </>
    </React.Suspense>
  )
}
```





### 2.1useState

注意：**hook中的辅助函数，只能在函数组件中使用**



```
useState()
	参数：state状态机的初始值，如果不声明则为undefined
	返回值：数组，有两项
		[0]:state的初始值 
		[1]:函数，修改state的初始值方法，接收参数，会用参数覆盖state数据
```



在src/pages/state/Index.jsx中实现

```jsx
import React, { useState } from 'react'

export default function Index() {
    // hook中的辅助函数，只能在函数组件中使用

    // useState()   替代类组件中的state
    // 参数：声明state的初始值，如果不声明则为undefined
    // 返回值：返回arr，[0]:state的初始值  [1]:修改state的初始值方法
    // console.log(useState()); // [undefined, ƒ]

    let [str, setStr] = useState('hello');
    let [user, setUser] = useState({ id: 1, name: 'admin' });

    return (
        <div>
            <h1>useState的使用</h1>
            <p>state中的值为：{str}</p>
            <p><button onClick={() => setStr('你好')}>修改state中的str</button></p>

            <hr />

            <p>user中的值为：{user.name}</p>
            <p>
                <button onClick={() => setUser({ ...user, name: '小芳' })}>修改user的值</button>
            </p>
        </div>
    )
}
```



### 2.2useEffect

`Effect作用`



创建pages/effect/Effect.jsx，创建**类组件**，演示组件**挂载完成**及组件**更新完成**后的调用，与引入函数组件中如何实现进行对比



需求：在title上记录一下你点击页面的次数

```jsx
import React, { Component } from 'react'

export default class Effect extends Component {
    constructor() {
        super();
        this.state = {
            num: 0 // 记录点击页面的次数
        }
    }

    // 希望在页面加载完成之后，将点击页面的次数在title中显示
    componentDidMount() {
        let { num } = this.state;
        document.title = '你点击页面的次数是：' + num;
    }

    // 当点击更新的时候，再修改title中的次数
    componentDidUpdate() {
        let { num } = this.state;
        document.title = '你点击页面的次数是：' + num;
    }

    render() {
        let { num } = this.state;
        return (
            <div>
                <h1>你点击页面的次数是：{num}</h1>
                <button onClick={() => this.setState({ num: num + 1 })}>++</button>
            </div>
        )
    }
}

```





创建pages/effect/Effect1.jsx，创建函数组件，演示**第一、第二、第三**种使用方式

```jsx
import React, { useState, useEffect } from 'react'

export default function Effect1() {
    let [num, setNum] = useState(0); // 点击屏幕的次数
    let [name, setName] = useState('小丽')

    // 方式一：如果useEffect只接收一个函数，则这个函数代表“组件挂载完成”和“组件更新完成”
    // useEffect(() => {
    //     document.title = "你点击了屏幕" + num + "次";
    // });


    // ----------------------
    // 方式二：如果useEffect还接收第二个参数，第二个参数为一个空数组，则第一个函数参数代表“组件挂载完成”
    // useEffect(() => {
    //     document.title = "你点击了屏幕" + num + "次";
    // }, []);

    // ----------------------
    // 方式三：如果useEffect还接收第二个参数，第二个参数为数组，数组中有state中的初始变量名，则第一个函数代表“组件挂载完成”和“组件更新完成”。但是，此时只是针对于num的更新而言(即谁要更新，就将谁放在数组中)
    useEffect(() => {
        document.title = "你点击了屏幕" + num + "次，" + name;
    }, [num]);


    return (
        <div>
            <h1>useEfect的使用</h1>
            <p>你点击了屏幕：{num}次</p>
            <button onClick={() => setNum(++num)}>++</button>

            <hr />
            <p>姓名：{name}</p>
            <button onClick={() => setName('小芳')}>更新姓名</button>
        </div>
    )
}

```

创建pages/Effect/Effect2.jsx，创建函数组件，演示**第四**种使用方式

```jsx
import React, { useState, useEffect } from 'react'

export default function Effect2() {
    let [time, setTime] = useState(new Date());

    // 方式四：useEffect第一个函数还有返回值，返回一个函数，这个函数代表“组件将要销毁”
    useEffect(() => {
        // 挂载完成和更新完成，都调用这个函数，更新时间
        let timer = setInterval(() => {
            setTime(new Date())
        }, 1000);

        // 当切换组件时，当前这个组件会被销毁，我们调用这个清除定时器
        return () => {
            clearInterval(timer);
        }
    });

    return (
        <div>
            <h1>Effect第四种用法</h1>
            <p>当前时间是：{time.toLocaleString()}</p>
        </div>
    )
}

```





### 2.3useReducer

```js
useReducer
    参数一:reducer函数
    参数二:state初始值
    返回值:返回state的初始值和dispatch

```



#### 一、基础使用

改变state仓库中的某一个数字

创建pages/reducer/Reducer.jsx

步骤：

1、要使用reducer，必须有state状态机

2、引入useReducer，在函数组件中调用

```jsx
import React, { useReducer } from 'react'

// 1、声明state
let initailState = {
    num: 888
};

// 3、封装actionType
let TYPES = {
    ADD: 'ADD', // 添加
    MINUS: 'MINUS' // 减少
}

// 2、声明reducer，它有两个参数
// 参数一:state  必须有默认值
// 参数二:action 是一个普通对象 {type:'操作类型'[, 修改的最新数据]}
// 这个时候，需要定义TYPES
let reducer = (state = initailState, action) => {
    switch (action.type) {
        case TYPES.ADD:
            return {
                ...state,
                num: action.num + 1
            }
        case TYPES.MINUS:
            return {
                ...state,
                num: action.num - 1
            }
        default:
            return state;
    }
}


export default function Reducer() {
    // useReducer函数调用
    // 参数一: reducer函数
    // 参数二: state初始值
    // 返回一个数组，数组第一项为state，第二项为dispatch函数
    // dispatch调用时，传入一个action，action永远是一个对象 {type:'操作类型', key:value}
    // console.log(useReducer(reducer, initailState)); 

    let [state, dispatch] = useReducer(reducer, initailState);

    return (
        <div>
            <h1>useReducer的使用</h1>
            <p>数据是：{state.num}</p>
            <p>
                <button onClick={() => dispatch({ type: TYPES.ADD, num: state.num })}>++</button>
                <button onClick={() => dispatch({ type: TYPES.MINUS, num: state.num })}>--</button>
            </p>
        </div>
    )
}

```



#### 二、useReducer结合axios实现异步请求

创建pages/reducer/Reducer1.jsx

步骤：

1、开启服务端

2、下载axios和修改客户端代理

```json
{
	"proxy": "http://localhost:3000",
}

```

3、要使用reducer，必须有state状态机

4、引入useReducer，在函数组件中调用

5、引入useEffect





```jsx
import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

// 1、声明state
let initailState = {
    groupon: [], // 万人团
}

// 3、声明actionType
let TYPES = {
    CHANGE_GROUPON: 'CHANGE_GROUPON'
};

// 2、定义reducer函数
let reducer = (state = initailState, action) => {
    switch (action.type) {
        case TYPES.CHANGE_GROUPON:
            return {
                ...state,
                groupon: action.groupon
            }

        default:
            return state;
    }
}

export default function Reducer1() {
    // 使用useReducer，返回state和dispatch
    let [state, dispatch] = useReducer(reducer, initailState);

    useEffect(() => {
        // 挂载完成之后，发起请求
        axios.get('/api/getgroupon').then(res => {
            // console.log(res);
            if (res.data.code === 200) {
                // 请求成功之后，调用dispatch，传入数据
                dispatch({ type: 'CHANGE_GROUPON', groupon: res.data.list })
            }
        })
    }, []);

    return (
        <div>
            <h1>useReducer结合axios实现异步操作</h1>
            <ul>
                {state.groupon.map((item) => (
                    <li key={item.id}>
                        <img src={item.img} style={{ width: '100px' }} alt="" />
                        {item.goodsname}
                    </li>
                ))}
            </ul>
        </div>
    )
}

```



### 2.4useContext

**作用：useContext接收context对象做为参数，返回Provider组件传过来的数据**



三个组件形成嵌套关系，即数据如何从One直接传入到Three中

![image-20220804220224415](/public/img/fourthStage/twentyThree/image-20220804220224415.png)



1、在context下面，分别创建三个组件，形成嵌套关系

2、引入bootstrap

3、在One.jsx中，得到context对象

```jsx
// 第一步：在one组件中，获取context对象，并导出Provider
export const MyContext = React.createContext(); // 得到context对象
const { Provider } = MyContext; // 导出Provider，Provider为数据的提供者

```

```jsx
// 第二步：创建数据
const [user] = useState({ id: 1, name: '小芳' }); // 取得数据，这里不修改数据，可以不取第二个参数

```

```jsx
{/* 第三步：提供数据，用Provider组件将子组件包裹起来，属性value中传入数据 */}
<Provider value={user}>
    <Two></Two>
</Provider>

```

4、在Three.jsx中，使用数据

```jsx
// 第四步：导出useContext。 useContext接收context作为参数，所以下面要导入MyContext
import React, { useContext } from 'react'

// 第五步：导入在one.jsx中定义的MyContext
import { MyContext } from './One';

// console.log(useContext(MyContext)); // 接收context为参数，返回传过来的数据，就可以使用数据了
let user = useContext(MyContext);

```





- One.js

```jsx
import React, { useState } from 'react'
import Two from './Two'

// 第一步：获取context对象，并导出Provider
export const MyContext = React.createContext(); // 得到context对象
const { Provider } = MyContext; // 导出Provider，它是数据的提供者

export default function One() {
    // 第二步：创建数据
    const [user] = useState({ id: 1, name: '小芳' }); // 定义数据
    
    return (
        <div className='alert alert-info'>
            <h1>one</h1>
            {/* 第三步：提供数据 */}
            <Provider value={user}>
                <Two></Two>
            </Provider>
        </div>
    )
}

```

- Two.jsx

```jsx
import React from 'react'
import Three from './Three'

export default function Two() {
    return (
        <div className='alert alert-success'>
            <h2>two</h2>
            <Three></Three>
        </div>
    )
}

```

- Three.jsx

```jsx
// 第四步：导出useContext。 useContext接收context作为参数，所以下面要导入MyContext
import React, { useContext } from 'react'

// 第五步：导入在one.jsx中定义的MyContext
import { MyContext } from './One';

export default function Three() {
    // console.log(useContext(MyContext)); // 接收context为参数，返回传过来的数据
    let user = useContext(MyContext);
    return (
        <div className='well'>
            <h3>three</h3>
            <p>id是：{user.id}</p>
            <p>name是：{user.name}</p>
        </div>
    )
}

```

![image-20220804220614188](/public/img/fourthStage/twentyThree/image-20220804220614188.png)





## 三、hook规则

1.只在顶层使用hook

2.只在react函数中调用hook，不要在普通javascript函数中调用hook

hooks常见bug，以及原因

- 不要在循环，条件或嵌套函数中调用hook，必须始终在React函数的顶层使用 hook

```
原因:这是因为React需要利用调用顺序来正确更新相应的状态，以及调用相应的钩子函数。一旦在循环或条件分支语句中调用Hook，就容易导致调用顺序的不一致性，从而产生难以预料到的后果。

```

- 使用useState时候，不能使用push，pop，splice等直接更改数组对象（用新值替换数组）

```
原因:push，pop，splice是直接修改原数组，react会认为state并没有发生变化，无法更新

```

- useState设置状态的时候，只有第一次生效，后期需要更新状态，必须通过 useEffect的生命周期钩子

