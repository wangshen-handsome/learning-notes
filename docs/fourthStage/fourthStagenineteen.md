# react介绍和安装

## 一.介绍

网址：https://react.docschina.org/

```
1.用于构建web用户交互界面的javascript库
2.可以在一个类库或者一个框架之间自如伸缩
3.react中提供了一套语法糖：JSX（即在js当中写xml）
4.作者：Facebook公司中的前端开发团队
```

### 优点

- 一切皆组件

```
在react中几乎都是使用组件进行开发; 优势：提高代码的开发效率及维护性
```

- 速度快

```
react中提供了虚拟DOM (virtual DOM)
```

- 跨浏览器兼容

```
不直接对浏览器进行操作，直接在虚拟DOM中操作,甚至在IE8中都可以使用
```

- 同构，纯粹的javascript

```
在整个react开发中，几乎都是使用javascript进行开发
```

- 单向数据流

```
react中提供了：flux和redux两种架构
```

### 缺点

- 不是一个完整的框架
- react顶多在MVC中算V层，即view(视图层)，一般需要结合reactRouter和redux来构建完整的项目



## 二.react解决的问题

- 组件化：在项目发开中一切皆组件使用组件做很好的封装
- 在开发效率：使用组件的思想，在代码的可读性和可复用性变得易于读懂和调用
- 在运行方面：采用虚拟DON机制，不直接对DOM进行操作
- 在维护方面：使用组件和redux，使得代码变得易于维护和处理复杂的业务逻辑时变得容易操作
- 在用户体验：使得用户体验更优，主要采用SPA（单页面）的思想





## 三.下载安装(类库的引入)

这两种方式知道但不用（了解即可），我们使用**脚手架**

- cdn

development : 开发环境
production : 生产环境

```html
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
```

- npm

创建项目管家，并下载引入类库

```ssh
1.npm init -y
2.npm i react react-dom
```

react有两个核心：react + react-dom





## 四.脚手架安装及使用

### 1.全局安装脚手架

```ssh
前提条件:
	1.你的操作系统必须在window7以上
	2.你的node必须在v14版本以上
安装脚手架
	1.npm i create-react-app -g			# 全局安装react脚手架
  	2.create-react-app -V				# 查看版本5.0.1

```

### 2.初始化项目

```ssh
1. npm init react-app 项目名称			#初始化react项目
或者 create-react-app 项目名称	 	   #初始化react项目

2. cd 项目目录							#进入项目
3. npm start						   #启动项目，会用默认浏览器打开

```

### 3.启动项

```
npm start		
项目运行在：http://localhost:3000

```

如果要修改端口号。找到node_modules文件夹下

![image-20221013094149434](/public/img/fourthStage/nineteen/image-20221013094149434.png)



### 4.项目目录介绍

```
node_modules				项目依赖包文件夹

public						公共静态资源文件夹
----index.html					项目唯一的html页面

src							代码主战场
----App.css						项目根组件的样式(可以删除)
----App.js						项目根组件，组件后缀都改成.jsx（react中组件的文件名首字母大写）
----App.test.js					项目根组件的测试文件(可以删除)
----index.css					入口文件的样式（可以删除）
----index.js					入口文件
----reportWebVitals.js			项目的配置文件（可以保留）
----setupTests.js				测试文件，主要是针对当前项目编写测试代码的（可以保留）

.gitignore					上传到Git上忽略的文件
package-lock.json			项目的依赖包信息及锁定版本
package.json				项目管家
README.md					项目解读文件

```

index.js是入口文件，App.js为根组件，后缀可改为jsx



### 5.项目初始化

项目初始化，删除`App.css、App.test.js、logo.svg`，修改App.jsx中的内容，可以清空index.css

![image-20220618111709843](/public/img/fourthStage/nineteen/image-20220618111709843.png)

注意：组件名的文件后缀写成.jsx，在里面写html就会有提示和自动补全

`App.jsx初始化如下`

```jsx
import React from 'react'; // 引入react

// 组件名要和文件名一致，并导出
function App() {
  return (
    <div>
      <h1>App</h1>
    </div>
  )
}

export default App;

```

`index.js`

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.StrictMode严格模式
  // <React.StrictMode>
  <App></App>
  // </React.StrictMode>
);

```





### 6.插件

插件：ES7+ React/Reduxj/React-Native snippets

```
快捷键：
imp→	import moduleName from 'module'   				引入默认导入
imn→	import 'module'	  								引入css文件类
imd→	import { destructuredModule } from 'module'   	引入解构

react中用的
快捷键：rfc		react function create
快捷键：rcc		react class create

```





## 五.jsx模板语法

```
jsx：javascript xml，即在js当中写xml语法结构

```

xml：可扩展标记语言，因此可以自行定义标签

```js
1.xml为可扩展标记语言，html属于xml的一个特例
2.xml中严格区分大小写
3.xml语法中标签必须有开始和结束
4.xml语法中既有双标签也有单标签
5.xml语法中有且只能有一个根节点

```

![image-20220806215050894](/public/img/fourthStage/nineteen/image-20220806215050894.png)



### 1.jsx注释语法

要写在根标签的里面，即根标签的里面才是xml的语法

```js
{/* 这里写注释 */}

```

```jsx
// 组件名要和文件名一致，并导出（因此文件名首字母都大写）
function App() {
  return (
    <div>
      {/* 注释 */}
      <p>项目初始化</p>
      <b>加粗</b>
    </div>
  )
}
export default App;

```



### 2.数据渲染

```
{}渲染数据，即大括号中写js
可以字符串拼接，可以计算，可以三目

```

`在src下，创建pages->Data->Data.jsx，然后再引入App.jsx中，和App.jsx形成父子关系，再使用`

```jsx
import React from 'react';
let name = 'zs';
let age = 20;

export default function Data() {
    return (
        <div>
            <h1>数据渲染</h1>
            <div>姓名是：{name}</div>
            <div>年龄是：{age}</div>
            
            {/* 字符串与变量拼接 */}
            <div>{name}的年龄是{age + '岁'}</div>
            
            {/* 计算 */}
            <div>年龄是：{age + 2}</div>
            
            {/* 判断，大括号里面还可以再套标签 */}
            {age >= 18 ? <h2>成年</h2> : '未成年'}
        </div>
    )
}

```

App.jsx中

```jsx
// 引入组件，并在下面使用组件
import Data from './page/Data/Data'

function App() {
  return (
    <div>
      {/* 使用Data组件，组件名首字母必须大写 */}
      <Data></Data>
    </div>
  )
}
export default App;

```





### 3.属性绑定

去掉引号，直接写{}，大括号中间放js即可。还可以绑定自定义属性，这样就可以做组件之间通信（父传子）。

`创建pages->Data->Attr.jsx`

```jsx
let url = 'https://www.jd.com'
let imageUrl = 'https://imgcps.jd.com/img-cubic/creative_server_cia/v2/2000366/100014121715/FocusFullshop/CkRqZnMvdDEvMTA3MDQzLzIzLzI5NTU4LzMyMDg0NS82Mjc0MjUwYUU4ZTRhMzk4Zi8xZGU2NzVjNDg1NjAzNGVlLnBuZxIJMi10eV8wXzUzMAI47ot6Qg0KCTNDReWPo-e6ohAAQg4KCjjmipjnp5LmnYAQAUIQCgznq4vljbPmiqLotK0QAkIKCgbkvJjotKgQB1jzxbnK9AI/cr/s/q.jpg';

export default function Attr() {
  return (
    <div>
        <h2>属性绑定</h2>
        <a href={url}>京东</a>
        <img src={imageUrl} num={100} alt="" />
    </div>
  )
}

```



### 4.数组、对象的输出(了解)

`创建pages->Data->Arr.jsx`

不是遍历，仅仅输出，用JSON.stringify()转成字符串再输出，没有太大的实际意义，实际使用时要遍历

```jsx
import React from 'react'

let girlFriends = ['小丽','翠翠','兰兰'];
let person = {
    name:'小刘',
    nickname:'木马牛',
    age:18,
}
let brand = [
    {id:1,name:'皇冠'},
    {id:2,name:'凯迪拉克'},
    {id:3,name:'特斯拉'},
]

export default function Arr() {
  return (
    <div>
        <h2>数组、对象的输出</h2>
        <div>{JSON.stringify(girlFriends)}</div>
        <div>{JSON.stringify(person)}</div>
        <div>{JSON.stringify(brand)}</div>
    </div>
  )
}

```

### 5.条件渲染

`创建pages->Data->Term.jsx`

```jsx
在react组件xml中不能使用if结构，只能使用三目运算，组件外的js还是可以使用if

```

```jsx
import React from 'react'
let score = 55;

export default function Term() {
  return (
    <div>
        <h2>条件渲染</h2>
        <div>{score >= 60 ? '及格' : '不及格'}</div>
    </div>
  )
}

```

### 6.列表渲染(数组遍历)

`创建pages->Data->List.jsx`

注意点：

- 使用数组的map作为数据遍历，因为它有返回值，而且和原数组一一对应的返回值
- 在遍历的直接子元素上必须绑定key，且key的值只能是Number / String
- 绑定的key必须是唯一的

```jsx
import React from 'react'

let arr = ['红烧肉','油焖大虾','红烧排骨'];
let list = [
    {id:1,name:'冰墩墩',price:58},
    {id:2,name:'雪容融',price:38},
    {id:3,name:'防晒霜',price:90},
    {id:4,name:'风扇',price:300},
]

export default function List() {
  return (
    <div>
        <h2>列表遍历</h2>

        <ul>
            {arr.map(item=>(
                <li key={item}>{item}</li>
            ))}
        </ul>
          
        <hr />
          
        <ul>
            {list.map(item=>(
                <li key={item.id}>
                    <div>商品名称:{item.name}</div>
                    <div>商品单价:{item.price}</div>
                </li>
            ))}
        </ul>
    </div>
  )
}

```



### 7.style动态样式

`创建pages->Data->Style.jsx`

```
style中必须包含双大括号
外层{}: 表示jsx模板语法
内层{}: 表示一个对象

```



```jsx
import React from 'react'
let objStyle = {width:'100px',height:'200px',background:'red'}

export default function Style() {
  return (
    <div>
        <h2>Style/className</h2>
        {/* 
            style中必须包含双大括号
            外层{}: 表示jsx模板语法
            内层{}: 表示一个对象
        */}
        <div style={objStyle}></div>
        <div style={{ width: '100px', height: '100px', backgroundColor: 'red' }}></div>
    </div>
  )
}

```



### 8.className动态类名

引入css文件，在标签上直接用className代替class使用样式

```jsx
import React from 'react'
import './Style.css'
let objStyle = {width:'100px',height:'200px',background:'red'}

export default function Style() {
  return (
    <div>
        <h2>Style/className</h2>
        {/* 
            style中必须包含双大括号
            外层{}: 表示jsx模板语法
            内层{}: 表示一个对象
        */}
        <div style={objStyle}></div>
        <hr />
        <div className="box"></div>
    </div>
  )
}

```



### 9.富文本渲染

```js
dangerouslySetInnerHTML={{__html: 变量名}}
```

```jsx
import React from 'react'
import './Style.css'
let objStyle = {width:'100px',height:'200px',background:'red'}
let str = `
    <ul>
        <li>北京</li>
        <li>郑州</li>
        <li>长沙</li>
        <li>成都</li>
    </ul>
`

export default function Style() {
  return (
    <div>
        <h2>Style/className</h2>
        {/* 
            style中必须包含双大括号
            外层{}: 表示jsx模板语法
            内层{}: 表示一个对象
        */}
        <div style={objStyle}></div>
        <hr />
        <div className="box"></div>
        <hr />
        <div dangerouslySetInnerHTML={{__html:str}}></div>
    </div>
  )
}

```

### 10.总结

```js
jsx模板语法
	1.注释必须写在{}中
    2.在jsx模板语法中,必须有根节点
	3.在jsx模板语法中,标签必须有开始和结束符
	4.在jsx模板语法中,当遇到<>时,当做html来解析,当遇到{}时,当做jsx模板来解析

```



## 六.组件

react里面的组件分两种，函数组件和类组件



### 1.函数组件

创建函数组件的规则

```
1.以function开头，并且函数名首字母必须大写
2.必须要有return
3.return值中有且只能有一个根节点
4.通常情况下，函数组件需export导出（但如果只是在当前页面使用，就可以不用导出）

```



`创建components/Fun/Fun.jsx和Child.jsx，Child引和到Fun中。形成父子关系`

**父传子**

```
1.找到父子组件之间的关联点（子组件的标签上）
2.父组件：通过自定义属性传递数据
3.子组件：通过形参props接收数据

```



Fun.jsx

```jsx
import Child from './Child'

let title = '小王真好';
let con = '你是小王吗？是的，我是的，我是隔壁老王';

export default function Fun() {
    return (
        <div>
            <h1>函数组件-父组件</h1>
            <div>
                父组件使用自己的数据
                <p>标题：{title}</p>
                <p>内容：{con}</p>
            </div>

            {/* 使用子组件，并传数据 */}
            <Child title={title} con={con}></Child>
        </div>
    )
}

```

Child.jsx

```jsx
export default function Child(props) {
    console.log(props); // {} 父组件传过来的数据
    return (
        <div>
            <h2>函数组件-子组件</h2>
            <div>
                <div>子组件使用父组件的数据</div>
                <p>标题：{props.title}</p>
                <p>内容：{props.con}</p>
            </div>
        </div>
    )
}

```



### 2.类组件

`创建components/Class/Index.jsx和Child.jsx`

创建类组件的规则

```
1.采用关键字class进行声明，继承自React.Component
2.类名首字母必须大写
3.必须有render方法（render方法会自动调用）
4.在render方法中必须有return
5.return的结果有且只有一个根节点

```

类组件父传子规则

```
1.找到父子组件的关联点
2.父组件：通过自定义属性传递数据
3.子组件：通过this.props来接收数据

```



Index.jsx

```jsx
import React from 'react';
import Child from './Child';

class Index extends React.Component {
    // 数据（即类的属性），不要用let声明，这里暂时没用constructor，后面要用constructor
    title = "小李说";
    con = '这就是小李，一个漂亮的小李';

    render() {
        return (
            <div>
                <h1>类组件-父组件</h1>
                {/* 数据从this中找 */}
                <p>标题：{this.title}</p>
                <p>标题：{this.con}</p>

                {/* 调用子组件，父传子，数据从this中找 */}
                <Child title={this.title} con={this.con}></Child>
            </div>
        )
    }
}
export default Index;

```



Child.jsx

```jsx
import React, { Component } from 'react'

export default class Child extends Component {

    render() {
        // console.log(this.props); // 数据
        return (
            <div>
                <h2>类组件-子组件</h2>
                <p>标题：{this.props.title}</p>
                <p>内容：{this.props.con}</p>
            </div>
        )
    }
}

```



### 3.函数组件和类组件的区别

```js
函数组件:
    1.运行效率比类组件快
    2.函数组件中没有state状态机以及生命周期钩子函数
类组件:
    1.有state状态机
    2.有生命周期钩子函数

```

state状态机相当于vue中的data数据



## 七.事件绑定

```
语法:
	on+首字母大写的事件名={事件函数}
	如   	onClick={事件函数}
  	如		onChange={事件函数}

```



### 1.事件绑定（不能传参，不常用）

`创建Event/Event.jsx，展示基本事件绑定`

```jsx
import React, { Component } from 'react'

export default class Event extends Component {
    render() {
        return (
            <div>
                <h1>事件绑定</h1>

                {/* 事件函数调用时，不能加()，因此无法传参 */}
                {/* 事件名，要通过this去找到 */}
                <button onClick={this.handler}>点击我有惊喜</button>
            </div>
        )
    }

    // 定义事件
    handler() {
        console.log(this); // undefined
        console.log('点我了');
    }
}

```



### 2.事件传参

调用函数并传参，有两种方式，分别是**bind方式**和**箭头函数方式**



#### 1、bind绑定事件函数并传参（稍麻烦，一般不用）

```jsx
import React, { Component } from 'react'

export default class Event extends Component {
    name = '小二';

    render() {
        return (
            <div>
                <h1>事件绑定</h1>

                {/* bind绑定事件函数，bind会返回函数的引用，当点击时，其实是调用这个函数的引用 */}
                <button onClick={this.bindEvent.bind(this, 20, 30)}>bind绑定事件函数</button>
            </div>
        )
    }

    // bind绑定并传参
    bindEvent(a, b) {
        console.log('bind绑定函数执行了');
        console.log(this); // 类Event组件的实例
        console.log(this.name); // 小二
        console.log(a, b); // 参数
    }
}

```

#### 2、箭头函数绑定事件函数并传参（简单，常用）

```jsx
import React, { Component } from 'react'

export default class Event extends Component {
    name = '小二';

    render() {
        return (
            <div>
                <h1>事件绑定</h1>

                {/* 箭头函数绑定事件函数，相当于用箭头函数中转了一下，这样，里面的函数就可以传参了，因为外面是箭头函数，且不会改变this指向 */}
                <button onClick={() => this.arrowEvent(10, 20)}>箭头函数绑定事件函数</button>
            </div>
        )
    }

    // 箭头函数绑定并传参
    arrowEvent(a, b) {
        console.log('箭头函数绑定并传参');
        console.log(this); // 类Event组件的实例
        console.log(this.name); // 小二
        console.log(a, b); // 参数
    }
}

```



### 3.获取事件对象

分为**bind绑定的获取**和**箭头函数绑定的获取**

`创建Event/GetEvent.jsx，展示事件对象的获取`



#### 1、bind绑定的方式获取事件对象

```
只在形参的最末尾，获取event事件对象

```

```jsx
import React, { Component } from 'react'

export default class GetEvent extends Component {
    render() {
        return (
            <div>
                <h2>获取事件对象</h2>
                
                {/* bind绑定获取事件对象 */}
                <button onClick={this.getEvent.bind(this,30)}>bind绑定获取事件对象</button>
            </div>
        )
    }

    getEvent(num, event){
        console.log(num); // 30
        console.log(event); // 事件对象
    }
}

```

#### 2、箭头函数绑定获取事件对象

```
在箭头函数中，根据实际参数的位置，映射到形参中即可

这里关键是找到事件对象，事件对象只在事件函数中才有，而这里的事件函数是箭头函数，所以要从箭头函数中找事件对象，找到之后，传参到里面的函数即可。

```

```jsx
import React, { Component } from 'react'

export default class GetEvent extends Component {
    render() {
        return (
            <div>
                <h2>获取事件对象</h2>
                
                {/* 箭头函数绑定获取事件对象 */}
                <button onClick={(e)=>this.getEvent(e,33,55)}>箭头函数绑定获取事件对象</button>
            </div>
        )
    }

    getEvent(event,num,num1){
        // 参数按顺序接收即可
        console.log(event); // 事件对象
        console.log(num); // 33
        console.log(num1); // 55
    }
}

```



### 4.阻止默认事件 / 阻止事件传播 / 事件捕获

```js
onClickCapture：用来实现事件捕获，即事件名的后面加上Capture即可
其它方法都是原生的，就这个Capture是react封装出来的

```

```jsx
import React, { Component } from 'react'
import './getEvent.css'
export default class GetEvent extends Component {
    render() {
        return (
            <div>
                {/* 阻止默认事件，只要调一个函数，在这个函数中阻止事件默认行为即可 */}
                <a href="https://www.jd.com" onClick={(e)=>this.stop(e)}>京东</a>
                
                <hr />
                {/* 阻止事件冒泡，在里面的函数中阻止冒泡即可 */}
                <div className="outer" onClick={()=>this.outer()}>
                    <div className="inner" onClick={(e)=>this.inner(e)}></div>
                </div>
                
                <hr />
                {/* 事件捕获，即事件名的后面加上Capture即可 */}
                <div className="outer" onClickCapture={()=>this.outer()}>
                    <div className="inner" onClickCapture={()=>this.inner()}></div>
                </div>
            </div>
        )
    }

    stop(e){
        // 阻止事件默认行为
        e.preventDefault()
        console.log('点击了');
    }

    outer(){
        console.log('outer');
    }

    inner(e){
        // 阻止事件冒泡
        // e.stopPropagation();
        console.log('inner');
    }
}

```



## 八.state状态机

之前，数据直接放在类组件中，但是修改这些数据时，不会触发视图的更新。因此我们需要将数据放在state状态机中，利用setState来更新数据。（setState是类组件实例原型上的方法）



何为状态机，即声明类组件的时候，数据放在state这个对象中，这样，我们就可以在其它的方法中，调用setState方法修改这些数据（类似于vue的data）



`创建State / Index.jsx`

```js
专门修改state状态机的方法是: setState，它是类实例原型上的方法
它有两个参数，第一个为对象，{被修改State数据中的key: 新的value}，第二个为回调函数

     它是一个异步方法
     参数一：object {被修改State数据中的key: 新的value}
     参数二：callback

```

声明状态机有两种方式：**属性中声明**和**构造函数中声明**



#### 1、直接在属性中声明state(不常用)

```jsx
import React, { Component } from 'react'

export default class Index extends Component {
    // 即在这里直接写state属性
    state = {
        name:'李福东'
    }

    render() {
        return (
            <div>
                <h2>State状态的使用</h2>
                
                <div>name的值为:{this.state.name}</div>
                <button onClick={()=>this.changeName('富冬')}>修改name</button>
            </div>
        )
    }

    changeName(newName){
        /**
         * 要修改state状态机中的数据，必须通过setState，它是实例原型上的方法，它有两个参数
         * 第一个为对象，{state状态机中的属性名: 新值}
         * 第二个为回调函数，因为它是一个异步
        */

        this.setState({name: newName}, ()=>{
            console.log(this.state.name);
        })
    }
}

```



#### 2、构造函数中声明state（常用），即在constructor函数中声明

注意：在构造函数中声明了state，就不能在属性中声明了，它们是相互冲突的

```jsx
import React, { Component } from 'react'

export default class Index extends Component {
    // constructor构造函数，作用：在实例化时，做初始化赋值操作
    constructor(){
        super(); // 因为类有继承，所以必须先调super()，只要写了constructor，就必须要super
        // 声明state状态机，因为是在函数中，所以state前面要加this
        this.state = {
            name:'木马牛'
        }
    }
    render() {
        return (
            <div>
                <h2>State状态的使用</h2>
                <div>name的值为:{this.state.name}</div>
                <button onClick={()=>this.changeName('裂开')}>修改name</button>
            </div>
        )
    }

    changeName(newName){
        // 修改方式一样
        this.setState({name: newName},()=>{
            console.log(this.state.name);
        })
    }
}

```



## 九.Props选项

Props的作用：组件之间通信，在子组件中接收父组件的数据

`创建Props目录，下面有Index.jsx和User.jsx两个文件，User.jsx引入到Index.jsx中`



### 1.在子组件中，通过解构赋值获取props数据

Index.jsx

```jsx
import React, { Component } from 'react'
import User from './User'

export default class Index extends Component {
    // 以后我们创建数据，一般都放在constructor中的state里面，相当于vue中的data属性
    constructor() {
        super();
        this.state = {
            name: 'zs',
            age: 3
        }
    }
    render() {
        return (
            <div>
                <h2>Index</h2>

                {/* 父组件向子组件传数据，一个一个传 */}
                <User name={this.state.name} age={this.state.age}></User>
            </div>
        )
    }
}

```



User.jsx

```jsx
import React, { Component } from 'react'

export default class User extends Component {
    render() {

        console.log(this); // User组件的实例，它下面有props属性
        // 解构赋值，获取父组件传过来的数据
        let { name, age } = this.props;

        return (
            <div>
                <h2>User</h2>
                <p>姓名是：{name}</p>
                <p>年龄是：{age}</p>
            </div>
        )
    }
}

```



### 2.将state / props上所有的数据一次传递给子组件

Index.jsx

```jsx
import React, { Component } from 'react'
import User from './User'

export default class Index extends Component {
    // 以后我们创建数据，一般都放在constructor中的state里面，相当于vue中的data属性
    constructor() {
        super();
        this.state = {
            name: 'zs',
            age: 3
        }
    }
    render() {
        return (
            <div>
                <h2>Index</h2>

                {/* 父组件向子组件传数据 */}
                {/* <User name={this.state.name} age={this.state.age}></User> */}

                {/* 将state中的数据，全部传给子组件，关键点，通过...解构 */}
                <User {...this.state}></User>
            </div>
        )
    }
}

```

User.jsx

```jsx
import React, { Component } from 'react'

export default class User extends Component {
    render() {

        console.log(this); // User组件的实例，它下面有props属性
        // 解构赋值，获取父组件传过来的数据
        let { name, age } = this.props;

        return (
            <div>
                <h2>User</h2>
                <p>姓名是：{name}</p>
                <p>年龄是：{age}</p>
            </div>
        )
    }
}

```

以此类推，props中的数据，也可以一次传给下一个子组件



### 3.在子的构造函数constructor中获取this.props

我们在render函数中可以拿到this.props，哪么能不能在constructor中也拿到，事实证明，不行，得通过以下操作。



即如何在子的 constructor 中获取props

User.jsx

```jsx
import React, { Component } from 'react'

export default class User extends Component {
    // 需求：在constructor中也要拿到props
    // 则：constructor中必须传props参数，super也必须传入props参数
    constructor(props){
        super(props) 
        console.log(this.props); // 这样，才可以拿到父传过来的数据
    }
    render() {
        return (
            <div className='alert alert-info'>
                <h2>user组件</h2>
            </div>
        )
    }
}

```

```
面试题：在构造函数中为什么写成如下形式: super(props)
	答案：为了在构造函数constructor中获取this.props的属性值

```





### 4.将方法通过props传递给子组件(即子父通信)

即子组件中如何触发父组件的方法，这里本质上是传过去父组件一个**自定义的函数**，子组件触发这个自定义的函数。

```
步骤：
1、在父组件中定义一个函数
2、在父组件中，子组件的标签上，定义自定义方法（方法名通常是on+函数名）。它对应一个箭头函数，箭头函数中是父组件中的函数调用
3、在子组件中，从props中接收传过来的自定义方法
4、在子组件中，适当的地方触发父组件传过来的自定义方法，并可传参（这也可以做子父通信）

```



User.jsx  父组件

```jsx
import React, { Component } from 'react'
import Child from './Child'

export default class User extends Component {
    render() {

        console.log(this); // User组件的实例
        // 解构赋值，获取父组件传过来的数据
        let { name, age } = this.props;

        return (
            <div>
                <h2>User</h2>
                <p>姓名是：{name}</p>
                <p>年龄是：{age}</p>

                {/* 自定义一个方法，传给子组件。这个方法是一个箭头函数，这个箭头函数被调用时，会触发当前父组件函数的调用 */}
                {/* 自定义事件名，通常在函数的前面加是on，并改成驼峰 */}
                <Child onHandler={(n) => this.handler(n)}></Child>
            </div>
        )
    }

    handler(n) {
        console.log(n); // 子传过来的数据 123
        console.log('我是user中的方法，我触发了');
    }
}

```

Child.jsx

```jsx
import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        // console.log(this.props); // 所有父组件传过来的数据，包括方法名
        let { onHandler } = this.props;

        return (
            <div>
                <h3>Child</h3>

                {/* 触发父组件传过来的方法，并可以传递参数 */}
                <button onClick={() => onHandler(123)}>触发父组件的事件</button>
            </div>
        )
    }
}

```

![image-20221013171300563](/public/img/fourthStage/nineteen/image-20221013171300563.png)



### 5.state和props的区别

```
state:
    1.作为类的状态机，用于声明初始数据
    2.必须在类内声明
    3.修改state状态机的方法，必须通过setState进行操作

props:
    1.作为组件之间通信时使用
    2.不能直接修改props数据，如果要修改，则必须找props数据源，再通过setState进行修改

```





## 十.面试题

```
⚫ React有哪些优缺点?
⚫ React解决了什么问题?
⚫ React、vue、angular有什么区别? 
⚫ JSX是什么?浏览器怎么解析JSX? 
⚫ react组件有几种方式，区别是什么? 
⚫ state如何设置初始值并进行改变? 
⚫ React中如何进行事件绑定?

```

## 十一.作业

1.使用 react 实现品牌管理案例，并实现以下功能要求

![品牌管理案例](/public/img/fourthStage/nineteen/品牌管理案例.jpg)

```json
[
    {
        id:2,
        name:'宝马',
        time:Date.now() 
    },
    {
        id:1,
        name:'大众',
        time:Date.now()
    }
]

```

1. 将以上数据展示在表格中;
2. 在输入框中输入品牌名称，“回车”将品牌名称添加在表格顶部。注意:对品牌名称需要做空验证

3. 对品牌名称进行修改，修改完成后显示在表格中为修改后的名称
4. 对品牌进行删除操作;
5. 对创建时间进行本地格式化操作。





2.通过 react 实现留言板案例，具体功能要求如下:

![留言板](/public/img/fourthStage/nineteen/留言板.jpg)

1. 实现留言列表展示功能，并且要求通过动态绑定 className 实现隔行变色
2. 实现发布留言功能(先使用操作 DOM 的方式获取表单元素)
3. 实现删除留言功能

