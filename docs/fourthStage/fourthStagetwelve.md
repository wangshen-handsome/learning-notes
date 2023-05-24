## 小U商城后台管理项目

### 三十、优化细节点

- 左侧点击导航会都展示，因为index重复的问题，可以用item.id，但是它是数字，可以转成字符串

- 优化了登录的input框

- 登录成功之后，在index页面实现用户名展示以及实现退出登录的逻辑

  给父级加弹性盒，justify-content: space-between;

  - 退出逻辑：清空本地存储，跳转到登录页

- 通过全局路由导航守卫进行登录拦截（如果不拦截，在不登录的情况下，能过地址也能访问没有登录的页面）

  这个拦截的是，如果不登录，则不可以访问任何页面（除了登录页）

  拦截的原理是：检查本地存储中是否有数据

```js
router.beforeEach((to, from, next) => {
  // 1、如果去的是登录页，就让它去
  if (to.path == '/login') {
    next();
    return;
  }
  // 如果本地有存储
  if (sessionStorage.getItem('userInfo')) {
    next();
    return;
  }
  // 否则强制去登录
  next('/login');
});
```



- 局部权限拦截（利用路由独享守卫，对不同权限的模块进行独立拦截）

  出现的问题：比如是客服，通过地址栏输入，可以看到管理员的模块（但是他根本没有这个权限）。因此要局部权限拦截

```js
// 检查path这个路径是否在本地存储的menus_url中存在，如果存在，则next()，否则到/home
// menus_url是一个数组，它里面存放着路径
function hasUrl(path, next) {
  let userinfo = sessionStorage.getItem('userinfo');
  let menus_url = userinfo ? JSON.parse(userinfo).menus_url : [];

  if (menus_url.includes(path)) {
    next();
  } else {
    next('/home');
  }
}
```

```js
	{
        path: '/menu', // 菜单管理
        component: () => import('../views/menu/menu'),
        meta: {
          title: '菜单管理',
        },
        beforeEnter(to, from, next) {
          hasUrl(to.path, next);
        },
      },
```

关于拦截的总结：

- 对于是否登录了，用全局路由导航守卫，判断本地存储中是否有用户信息，进行拦截
- 对于登录了之后，通过地址栏输入地址跳转，利用路由独享守卫，判断当前的路径是否在这个用户的权限中（用户的权限是存储在本地中的）





### 三十一、把登录结果封装到vuex中

`这里只需要用到state和mutations，不必使用getters和actions`

自己总结关键点：在登录的路由中，触发mutations，将登录结果同时存在vuex中和本地存储中

然后，使用的时候，都是用vuex的，但是在刷新的时候，还是去本地仓库里面取了，赋给vuex

- 修改登录页，将登录成功以后的数据存入vuex中
- 修改头部组件vNav.vue，让它循环渲染时，取vuex中的数据，并把全局路由导航守卫注释，因为它要访问本地的存储，但是本地的存储已经没了。会阻止我们进到下一个组件。
- 此时会出现一个问题，当我们刷新的时候，会没有左边的导航了，因为左边导航是根据vuex中的数据来的，但是vuex中的数据没有强存储，我们只是在登录成功了以后才有这个数据，刷新地时候，并没有这个数据，因此，我们要将数据存入本地存储中。当刷新的时候，从本地存储中取。

```js
  mutations: {
    mutation_userInfo(state, payload) {
      

      // 除了把数据给到vuex，还将数据存入本地存储中
      // 如果数据存在，就添加本地，如果不存在，就删除本地
      if (payload) {
        sessionStorage.setItem('userInfo', JSON.stringify(payload));
        state.userInfo = payload; // 登录成功的数据给到vuex
      }else{
        sessionStorage.removeItem('userInfo');
        state.userInfo = {}; // 没有也给它一个空对象，防止在某些地方报错
      }
    },
  },
```

- 并在vuex中，给state赋值时，先从本地找，如果本地有，就用它，没有再赋为{}

```js
  state: {
    userInfo: userInfo ? JSON.parse(userInfo) : {},
  },
```



- 再回到路由中，路由中有两处用到了本地存储，都要让它们从vuex中取，但是路由中没有vuex，需要将它引进来

```js
import store from '../store'; // 引入vuex仓库

function hasUrl(path, next) {
  let userInfo = store.state.userInfo.menus_url; // 从vuex仓库中取
  if (userInfo.includes(path)) {
    next();
  } else {
    next('/home');
  }
}
```

- 再到点击退出时，它也用了本地存储，退出时，也调一下dispatch，传参为null，让它没有数据时，清空本地存储

最后，可以检查每个页面，只有在仓库的页面中用到了sessionStorage，其它的页面均没有用到，都是从仓库中取



### 三十二、实现菜单弹框中菜单目录以及菜单选择的联动

```
首先：菜单地址和菜单图标不可以同时存在，再者它们都做成下拉，菜单图标做假数据，菜单地址从路由中取
根据上级菜单确定应该选什么
```



目录展示菜单图标



![image-20220531224208236](/public/img/fourthStage/twelve/image-20220531224208236.png)

菜单展示菜单地址

![image-20220531224222131](/public/img/fourthStage/twelve/image-20220531224222131.png)



菜单图标，创建假数据，实现下拉

```js
iconList: [
    "el-icon-s-tools",
    "el-icon-setting",
    "el-icon-s-goods",
    "el-icon-goods",
],
```



菜单地址，将路由中的二级路由地址引出来，实现下拉

```vue
        <el-form-item v-else label="菜单地址" :label-width="formLabelWidth">
          <el-select v-model="menuInfo.url">
            <el-option
              v-for="item in routerIndex"
              :key="item.path"
              :label="item.meta.title"
              :value="item.path"
            >
            </el-option>
          </el-select>
        </el-form-item>

```







联动：当改变上级菜单时，上级菜单pid如果是0，则菜单类型type为1，展示目录和菜单图标

上级菜单pid不是0时，则菜单类型type为2，展示菜单和菜单地址

不让用户手动选择目录和菜单（禁用选择菜单类型）



注意：菜单类型是不可以被选择的，它的类型是根据上级菜单来定的。因此只要确定了上级菜单，就确定了菜单类型，也就确定了是展示菜单图标，还是展示菜单地址。





![image-20220219123353149](/public/img/fourthStage/twelve/image-20220219123353149.png)

![image-20220219123420272](/public/img/fourthStage/twelve/image-20220219123420272.png)

关键注意点：以后创建新的模块，只需要以下几步

1、在views下面创建模块

2、在路由中设置好路由地址

3、在菜单管理中，添加进这个菜单

4、在角色管理中，设置好权限

5、退出，重新登进来，在左侧就能看到刚加的这个模块





### 三十三、设置token请求头

目的：是检查你是否登录了（这个是发起请求时触发的）



- 先释放后端服务器注释

```
释放掉后端服务app.js中的token验证
大概64行

重启后端服务

```

- request =>index.js

```js
// 创建请求拦截器
axios.interceptors.request.use((req) => {
  if (req.url != '/api/userlogin') {
    // 这里设置请求头
    req.headers.authorization = store.state.userinfo.token;
  }
  return req;
});

//响应拦截
http.interceptors.response.use((res) => {
  // 全局拦截错误
  // 注意点：正常工作还是要以code为区分。因为正常的后端会以不同的code值代表不同的全局错误
  if (res.data.msg == "请设置请求头,并携带验证字符串") {
    ElementUI.Message(res.data.msg);
    // 跳转到登录页
    router.push("/login");
  } else if (res.data.msg == "登录已过期或访问权限受限") {
    ElementUI.Message(res.data.msg);
    // 跳转到登录页
    router.push("/login");
  } else {
    return res.data;
  }
});

```



总结：axios请求拦截和路由导航守卫的区别

axios是发起请求时触发，一般用于添加token，全局错误处理，返回的数据过滤

导航守卫是访问某个路由时触发，一般用于判断是否登录，某个用户是否有访问某个路由的权限等等







### 三十四、实现商品分类的增删改查（除去上传图片）

### 三十五、图片上传

```vue
<!-- 
el-upload  上传文件
文件上传有两种
一、通过接口上传（我们就是用接口上传）
二、后端提供地址，你直接上传到服务器

    action	必选参数，上传的地址	string，这里用 #
    list-type	文件列表的类型	string	text/picture/picture-card
    on-preview	点击文件列表中已上传的文件时的钩子(预览用)	function(file)
    on-remove	文件列表移除文件时的钩子	function(file, fileList)   这里没有使用
    on-change	文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用	function(file, fileList)
    auto-upload	是否在选取文件后立即进行上传	boolean	(我们选择false)
    file-list	上传的文件列表(用于做文件回显，以及清空图片脏数据，它的值为一个数组，数组中有值就展示数据，没有值就清空图片), 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]	array
           -->
          <el-upload
            action="#"
            list-type="picture-card"
            :on-preview='onPreview'
            :on-change='onChange'
            :auto-upload ='false'
            :file-list='filelist'
          >
            <i class="el-icon-plus"></i>
          </el-upload>

          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>

```

- 逻辑部分

```js
    //封装一个文件改变时触发的事件
    onChange(file,filelist){
        console.log(file,'333333');
        console.log(filelist,'44444');
        this.cateInfo.img = file.raw // 文件改变的时候，将文件的数据存入要上传的数据对象中，注意数据在raw中
    },
    //封装一个图片预览方法
    onPreview(file){
        console.log(file,'文件');
        this.dialogImageUrl = file.url // 让预览弹窗的内容为图片
        this.dialogVisible = true //让弹框显示
    },

```

