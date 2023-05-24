## 一、组件通信

### 1-1.父子组件数据通信

```
总结:
	1.找到父子组件的关联点
	2.父组件: 通过自定义属性传递数据
	3.子组件: 类组件: 通过this.props来接收数据
			 函数组件: 通过形参props来接收数据
```

### 2-2.子父组件数据通信

```
总结:
	1.父组件:通过自定义事件，给子组件传递箭头函数方法体
	2.子组件:通过触发事件，来调用父组件的方法体，将数据作为参数进行传递
	
五个地方可以都用同一个名字
```

![image-20220918100632656](/public/img/fourthStage/twenty/image-20221013171300563.png)





案例说明：父子组件通信，数据在父组件中，传到子组件中展示，子组件通过点击删除一项数据

![image-20220807174035198](/public/img/fourthStage/twenty/image-20220807174035198.png)



`创建Parent目录，里面有Parent.jsx和Child.jsx`

Parent.jsx

```jsx
import React, { Component } from 'react';

import Child from 'Child'; // 引入子组件

export default class Parents extends Component {
  constructor() {
    super();
    // 定义数据
    this.state = {
      goods: [
        {
          id: 1,
          name: '罗拉玫瑰手表',
          imageUrl:
            'https://img12.360buyimg.com/n7/jfs/t1/221495/20/17187/479673/628357bcE452858b5/092540796a65677c.jpg',
          price: 1299.0,
          num: 1,
        },
        {
          id: 2,
          name: 'SKII神仙水',
          imageUrl:
            'https://img11.360buyimg.com/n7/jfs/t1/4441/20/17316/90607/6283a6e2E6f2d4843/96828b4b7d47e170.jpg',
          price: 699,
          num: 1,
        },
        {
          id: 3,
          name: '德芙巧克力',
          imageUrl:
            'https://img11.360buyimg.com/n7/jfs/t1/207596/17/3697/194769/615ba7e0Ed230a167/63c62dc8e3e3badf.jpg',
          price: 99.0,
          num: 1,
        },
        {
          id: 4,
          name: '99朵玫瑰',
          imageUrl:
            'https://img10.360buyimg.com/n7/jfs/t1/169228/26/15467/218225/6062ff66E2a840ad4/5b8c988e740845d6.jpg',
          price: 299,
          num: 1,
        },
      ],
    };
  }

  render() {
    return (
      <div className="alert alert-success">
        <h1>父组件</h1>

        {/* 找到父子组件的关联点 */}
        {/* 通过自定义属性传递数据 */}
        <Child goods={this.state.goods} del={(i) => this.del(i)}></Child>
      </div>
    );
  }

  // 子传父，删除一项数据
  del(i) {
    // console.log(i);
    let { goods } = this.state; // 解构出数据
    goods.splice(i, 1); // 删除一条
    this.setState({ goods: goods }); // 再更新state，这里属性名和属性值同名，可以简写
  }
}
```

Child.jsx

```jsx
import React, { Component } from 'react';

export default class Child extends Component {
  render() {
    // 在子组件通过this.props接收数据
    let { goods, del } = this.props; // 获取父组件传过来的数据以及方法

    return (
      <div className="well">
        <h2>子组件</h2>

        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th>序号</th>
              <th>名称</th>
              <th>图片</th>
              <th>价格</th>
              <th>件数</th>
              <th>删除</th>
            </tr>
          </thead>
          <tbody>
            {goods.length ? (
              goods.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>
                    <img
                      style={{ width: '100px', height: '100px' }}
                      src={item.imageUrl}
                      alt={item.name}
                    />
                  </td>
                  <td>{item.price}</td>
                  <td>{item.num}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => del(index)}
                    >
                      删除
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6}>暂无数据</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
```



## 二、生命周期

共有八个钩子函数，重要的是`constructor render componentDidMount componentDidUpdate`这四个

- 生命周期：指**对象**从创建到销毁的过程
- 钩子函数：某一个特定时刻，自动被触发的函数称之为钩子函数



![生命周期](/public/img/fourthStage/twenty/生命周期.png)



`创建 Life / Life.jsx和Index.jsx 类组件，Index.jsx为父组件，在Life.jsx中展示生命周期`

### 2.1挂载期

挂载期，共有以下四个钩子函数

1. constructor（构造器）**（常用）**
2. getDerivedStateFromProps（将props数据映射到state上）   Derived 派生
3. render（渲染）**（常用）**
4. componentDidMount（组件挂载完成）**（常用）**



- 1、constructor（构造器）

```js
/**
 * 作用:在实例化时,做初始化赋值操作/方法的调用
*/
constructor(){
    console.log('constructor');
    super()
    this.state = {
        title:'钩子函数'
    }
}
```

- 2、getDerivedStateFromProps（它是静态方法，要用static修饰，用得不多）

  作用：将props数据映射到state上，我们之前是在render中直接使用props。这里的意思是，也可以将props映射到state中使用

  

  在Index.jsx中传给子Life.jsx一些数据，这样，就有props数据，可以挂载到子的state上

```js
 /**
     * 静态方法：要用关键字static修饰
     * 1.作用：将props数据映射到state上，即父组件传过来的数据添加到自己的state中
     * 2.不能访问this（因为它是静态方法，它没有this）
     * 3.系统自动注入参数:nextProps,nextState
     	因为没有this，所以不可以访问props和state，因此它有自己有两个参数，分别代表这两个数据
     * 4.必须要有返回值: 返回object(state) / null
    */

static getDerivedStateFromProps(nextProps, nextState){
    console.log('getDerivedStateFromProps');
    // console.log(nextProps); // 传过来的数据
    // console.log(nextState); // 自己的状态机
    
    // 如果传过来props有某一个数据，就把它加入到state中并返回state，否则返回null
    // 这里的操作是验证是否有某一个值，有值就添加过去
    // 也可以直接将props中的值循环赋过去
    if(nextProps.type === 'add'){
        nextState.type = nextProps.type; // 将props中的数据，加到state中
        return nextState;
    }
    return null; // 返回null，即不改state
}
```

- 3、render（渲染）

```jsx
// 渲染jsx模板内容
// 无法获取元素节点，包括以上两个钩子函数也都不能获取DOM节点
render() {
    console.log('render');
    console.log(document.querySelector('h2')); // null
    const {type} = this.state
    return (
        <div className='well'>
            <h2>生命周期</h2>
            <div>type类型的值为:{type}</div>
        </div>
    )
}
```

- 4、componentDidMount（组件挂载完成）

  可以发起轮播图、异步请求、计时器、延时器、订阅等等

```js
  /***
   * 组件挂载完成
   * 1.可以获取到元素节点
   * 2.可以发起轮播图,异步请求,计时器,延时器,订阅等等
  */
componentDidMount(){
    console.log('componentDidMount');
    console.log(document.querySelector('h2'));
}
```



### 2.2更新期

当更新组件的时候（当**props**、**state**和**视图**有更新时，都会触发更新），会走以下这五个钩子函数

注意：只有props更新时，会走以下五个完整的过程

1. getDerivedStateFromProps（将props数据映射到state上）   Derived 派生
2. shouldComponentUpdate（应该更新组件吗？）   should应该
3. render（渲染）
4. getSnapshotBeforeUpdate（组件更新之前）    Snapshot 快照
5. componentDidUpdate（组件更新完成）



- 1、getDerivedStateFromProps（将props数据映射到state上）

这里是在Index.jsx中更新数据，然后导致子组件的props更新

```js
    /**
     * 静态方法:关键字static
     * 1.将props数据映射到state上
     * 2.不能访问this
     * 3.系统自动注入参数:nextProps,nextState
     * 4.返回值:返回object/null
    */
   static getDerivedStateFromProps(nextProps,nextState){
        console.log('getDerivedStateFromProps');
        // console.log(nextProps); // 这里可以看到，当父组件改了state，则props的数据变了
        // console.log(document.querySelector('h2'));
        if(nextProps.type === 'add' || nextProps.type === 'edit'){
            nextState.type = nextProps.type
            return nextState
        }
        return null
   }

```

- 2、shouldComponentUpdate（应该更新组件吗？返回true和false）

```js
/**
   * 应该更新组件吗？
   * 作用:在处理一些特殊业务逻辑时,有时需要做逻辑判断,再实现更新操作
   * 如果return true,则执行:render getSnapsHotBeforeUpdate componentDidUpdate
   * 如果return false,则不执行:render getSnapsHotBeforeUpdate componentDidUpdate
  */
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
    // return false // 即不更新
    return true // 即更新
  }

```

- 3、render（渲染）
- 4、getSnapshotBeforeUpdate（组件更新之前），它必须和componentDidUpdate同时使用

```js
/**
   * 组件更新之前，此时，数据是最新的，视图还没有更新
   * 系统自动注入参数：nextProps,nextState，即之前的props和新的state
   * 返回值: value / null，一般返回nextState，免得报错
  */
  getSnapshotBeforeUpdate(nextProps,nextState){
    console.log('getSnapshotBeforeUpdate');
    // console.log(nextProps, nextState);
    return nextState
  }

```

- 5、componentDidUpdate（组件更新完成）

```js
 /**
   * 组件更新完成，此时数据是最新的，视图也是最新的
   * 系统自动注入参数:prevProps,prevState，即之前的props和新的state
  */
  componentDidUpdate(prevProps,prevState){
    console.log('componentDidUpdate');
    console.log(prevProps);
    console.log(prevState);
  }

```



### 2.3销毁期

销毁期，只有一个钩子函数

在Index.jsx中，用一个变量，控制Life.jsx的显示和销毁

- componentWillUnmount（组件将要销毁）    Will 将要

```jsx
  /**
   * 组件将要销毁
   * 作用:取消轮播图,定时器,延时器,订阅等等
  */
  componentWillUnmount(){
      console.log('componentWillUnmount');
  } 

```



------





## 三、表单元素处理

```
在react中，处理表单元素需要结合state状态机

```



### 3-1.受控组件

```
即状态受state的控制

```

`创建Form/Form.jsx`

- 文本框 / 文本域
- radio单选框
- 复选框checkbox多选
- select下拉框单选

```jsx
import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '', // 用户名
            con: '', // 文本内容
            sex: 1, // 性别单选  1男  2女
            eat: ['xigua', 'liulian'], // 吃  多选
            course: '', // 课程 单选  web java ui test
        }
    }

    render() {
        let { name, con, sex, eat, course } = this.state;

        return (
            <div>
                <h2>受控组件处理表单元素</h2>

                {/* 单行文本框 */}
                <p>
                    用户名：
                    <input value={name} onChange={(e) => this.setState({ name: e.target.value })} type="text" />
                </p>

                {/* 文本域，同单行文本框 */}
                <p>
                    留言：
                    <textarea value={con} onChange={(e) => this.setState({ con: e.target.value })}></textarea>
                </p>

                {/* 单选框，从value中获取的值都是字符串，要转成数字 */}
                <p>
                    性别：
                    <input type="radio" value={1} checked={sex === 1} onChange={(e) => this.setState({ sex: e.target.value / 1 })} />男
                    <input type="radio" value={2} checked={sex === 2} onChange={(e) => this.setState({ sex: e.target.value / 1 })} />女
                </p>

                {/* 复选框多选，这个逻辑稍多，看下面的函数 */}
                <p>
                    吃：
                    <input type="checkbox" value='xigua' checked={eat.includes('xigua')} onChange={(e) => this.changeEat(e)} />西瓜
                    <input type="checkbox" value='liulian' checked={eat.includes('liulian')} onChange={(e) => this.changeEat(e)} />榴链
                    <input type="checkbox" value='putao' checked={eat.includes('putao')} onChange={(e) => this.changeEat(e)} />葡萄
                    <input type="checkbox" value='chengzi' checked={eat.includes('chengzi')} onChange={(e) => this.changeEat(e)} />橙子
                    <input type="checkbox" value='mihoutao' checked={eat.includes('mihoutao')} onChange={(e) => this.changeEat(e)} />猕猴桃
                </p>

                {/* 下拉框单选 */}
                <p>
                    课程：
                    <select value={course} onChange={(e) => this.setState({ course: e.target.value })}>
                        <option value='' disabled>请选择</option>
                        <option>web</option>
                        <option>java</option>
                        <option>ui</option>
                        <option>test</option>
                    </select>
                </p>

                <p>
                    <button onClick={() => this.submit()}>获取数据</button>
                </p>
            </div>
        )
    }

    // 复选框多选
    changeEat(e) {
        let { eat } = this.state; // 获取数组
        let val = e.target.value; // 获取被选择的这个元素的value值

        let index = eat.indexOf(val); // 检查是否在数组中，会返回下标
        if (index > -1) {
            // 存在，要删除它
            eat.splice(index, 1);
        } else {
            // 不存在，要添加它
            eat.push(val)
        }
        this.setState({ eat })
    }

    submit() {
        console.log(this.state);
    }
}

```



### 3-2.非受控组件

```
状态不受state的控制

```



`创建Form/Form1.jsx`

如上传文件即不受state控制，这里本质是**ref**获取元素

```jsx
import React, { Component } from 'react'

export default class Form1 extends Component {
    constructor() {
        super()
        
        // React.createRef(): 创建空的ref对象
        // 即代码到这里时，this.input还只是一个空的ref对象：{current: null}
        // 在DOM里面，将这个ref对象赋给某一个DOM元素，我们就可以通过this.input.current获取到这个DOM元素
        this.input = React.createRef()
    }
    
    render() {
        // 一开始是没有值的
        console.log(this.input); // {current: null}
        return (
            <div>
                <h2>非受控组件</h2>
                <div>
                    {/* 在这里给ref对象赋值 */}
                    <input ref={this.input} type="file" />
                </div>
                <div>
                    <button onClick={() => this.submit()}>提交</button>
                </div>
            </div>
        )
    }

    submit() {
        // 因为上面有赋值，因此这里就可以取得这个值，并找到内容
        console.log(this.input.current.files[0]);
    }
}

```



### 3-3.受控组件和非受控组件的区别

| 特征                 | 受控组件 | 非受控组件 |
| -------------------- | -------- | ---------- |
| 一次检索(即表单提交) | 是       | 是         |
| 及时验证             | 是       | 否         |
| 有条件的禁用提交按钮 | 是       | 否         |
| 执行输入格式         | 是       | 否         |
| 一个数据的几个输入   | 是       | 否         |
| 动态输入             | 是       | 否         |



## 四、ref属性

### 4-1.ref操作子组件(对象)

即父组件操作子组件的方法和数据

需求：父组件挂载完成，调用子组件的方法。子组件中的方法是：让子组件中的某个input得焦

`创建Ref/Ref.jsx和Child.jsx，Ref.jsx为父组件`

Ref/Ref.jsx

```jsx
import React, { Component } from 'react'
import Child from 'Child'

export default class Ref extends Component {
    constructor() {
        super();

        // 第一步：创建ref对象，此时，它是一个空的 {current: null}
        this.dom = React.createRef();
    }

    render() {
        return (
            <div className='alert alert-info'>
                <h1>ref操作子组件</h1>

                {/* 第二步：需要找到谁，就给谁加ref属性，值为上面定义的ref对象 */}
                <Child ref={this.dom}></Child>
            </div>
        )
    }

    // 组件挂载完成，就调用子组件下面的方法
    componentDidMount() {
        // 第三步：需要用到子组件时，在this.dom.current中找到子组件，即可以调用它的方法和数据了
        // console.log(this.dom);
        this.dom.current.getFocus();
    }
}

```

Ref/Child.jsx

```jsx
import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        return (
            <div className='well'>
                <h2>子组件</h2>

                <input type="text" />
            </div>
        )
    }

    // 方法的作用是，给input设置焦点
    getFocus() {
        // 这里用DOM方法找到的元素，没有用ref的方式找到（可以改成用ref的方式找到）
        let input = document.querySelector('input');
        input.focus();
    }
}

```





### 4-2.ref作用普通dom元素

功能：获取普通dom节点，给它设置背景色（也可以做vue中的案例，播放视频）

`在Ref.jsx中`

```jsx
import React, { Component } from 'react'
import Child from 'Child'

export default class Ref extends Component {
    constructor() {
        super();

        // 第一步：创建ref对象，此时，它是一个空的 {current: null}
        this.input = React.createRef();
        this.box = React.createRef();
    }

    render() {
        return (
            <div className='alert alert-info'>
                <h1>ref操作子组件</h1>

                {/* 第二步：需要找到谁，就给谁加ref属性，值为上面定义的ref对象 */}
                <Child ref={this.input}></Child>

                <h3 ref={this.box}>ref操作普通DOM节点</h3>
                <button onClick={() => this.setDom()}>操作DOM节点</button>
            </div>
        )
    }

    // 组件挂载完成，就调用子组件下面的方法
    componentDidMount() {
        // 第三步：需要用到子组件时，在this.input.current中找到子组件，即可以调用它的方法和数据了
        // console.log(this.input);
        this.input.current.getFocus();
    }

    // ref操作dom元素
    setDom() {
        console.log('执行了');
        console.log(this.box);
        this.box.current.style.background = 'pink';
    }
}

```



### 4-3.父组件如何获取子组件的dom节点(了解)

父组件获取子组件的dom节点，子组件必须声明成**函数组件**，子组件中，必须用forwardRef调用

forwardRef有两个参数，第一个是props，第二个是ref

![image-20220808205811660](/public/img/fourthStage/twenty/image-20220808205811660.png)

Ref.jsx

```jsx
import React, { Component } from 'react';
import Child from 'Child';

export default class Ref extends Component {
  constructor() {
    super();
    // 第一步：创建一个ref属性
    this.dom = React.createRef();
  }
  render() {
    return (
      <div>
        <h1>ref操作子组件的DOM</h1>
        <button onClick={() => this.getDom()}>获取子组件的DOM元素</button>

        {/* 第二步：将属性赋给子组件 */}
        <Child ref={this.dom}></Child>
      </div>
    );
  }

  // 第五步：在执行方法的时候，可以获取到ref属性，它里面就有子组件的dom节点
  getDom() {
    console.log(this.dom);
    this.dom.current.style.background = 'pink';
  }
}

```

Child.jsx

```jsx
import React, { forwardRef } from 'react';

// ref操作子组件的DOM，子组件必须用forwardRef调用
// forwardRef接收一个函数做为参数，将调用的结果返回

export default forwardRef((props, ref) => {
  // 第三步：子组件有两个参数，第一个是props，第二个是ref，在第二个参数里面取得父组件传过来的ref，再将ref赋给自己的dom节点
  console.log(props);
  console.log(ref);
  return (
    <div>
      <h2>子组件</h2>

      {/* 第四步：将ref赋给自己的dom节点 */}
      <p ref={ref}>我是子组件的p标签</p>
    </div>
  );
});

```





## 五、面试题

```
⚫ 在Reat中，refs的作用是什么?
⚫ 为什么虚拟DOM能提高性能?
⚫ 什么是受控组件?
⚫ 受控组件和非受控组件的区别是什么? 
⚫ 什么是高阶组件?
⚫ 在构造函数中调用super(props)的目的是什么? 
⚫ 在React中，组件是如何通信的?
⚫ React的声明周期钩子函数有哪些?
⚫ 应该React组件中何处发起ajax请求?为什么?

```



## 六、作业

1. 作业要求
   1. 按照要求进行组件拆分，留言数据列表在父组件中获取，将发布留言和留言列表展示拆分成单独的子组件
   2. 通过受控组件方式实现表单元素的处理
   3. 通过父子组件数据通信实现留言列表功能
   4. 通过子父组件数据通信实现发布留言功能
   5. 通过子父组件数据通信实现删除留言功能



![留言板](/public/img/fourthStage/twenty/留言板.jpg)