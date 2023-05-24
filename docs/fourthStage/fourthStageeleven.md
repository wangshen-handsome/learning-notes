## 小U商城后台管理项目



### 二十一、实现封装全局组件之面包屑

定义角色管理模块role及定义路由

封装全局组件之**面包屑**(在common文件夹下)

common/index.js

```js
import Vue from 'vue';
import vBreadcrumb from './vBreadcrumb'; // 面包屑

let obj = {
  vBreadcrumb,
};

for (let attr in obj) {
  Vue.component(attr, obj[attr]);
}
```





### 二十二、实现角色管理的基本静态骨架

### 二十三、通过添加以及编辑按钮控制弹框的显示并渲染不同的视图





### 二十四、实现角色管理之添加（没带角色权限）





### 二十五、实现角色管理之列表渲染以及编辑和删除（没带角色权限）





### 二十六、角色权限

树状展示的是**菜单管理**的内容，即这个角色有哪些菜单权限，后端需要的是'3,4,5'这样的字符串，前端要的是[3,4,5]这样的数组，因此数据要转换。



注意点：

1、一进入role/dialog.vue组件，就要去后端读取一下menu数据，但是如果有了，就不用读取数据了（比如，从菜单项过来的，就是已经有数据了的）

2、this.$refs.tree.setCheckedKeys([])   设置节点是否选中，接收一个数组，数组中是ID

3、this.$refs.tree.getCheckedKeys()     获取节点哪些被选中，返回的是一个数组



Tree树形控件--默认展开和默认选中

```vue
<!-- 
    el-tree

    data 展示数据	array
    show-checkbox	节点是否可被选择	boolean
    node-key	每个树节点用来作为唯一标识的属性，整棵树应该是唯一的	String
    default-expanded-keys	默认展开的节点的 key 的数组	array（这里不用）
    default-checked-keys	默认勾选的节点的 key 的数组	array（这里用下面的两个方法去获取或设置）
    default-expand-all	是否默认展开所有节点	boolean
	check-strictly	在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false

    props	配置选项，具体看下表	object
     	label	指定节点标签为节点对象的某个属性值	string, function(data, node)
     	children	指定子树为节点对象的某个属性值	string
	
	方法
    getCheckedKeys	若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点的 key 所组成的数组
    setCheckedKeys	通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性
-->
<el-tree
	ref="tree"
    :data="menulist"
    show-checkbox
    node-key="id"
    default-expand-all
    :props="{
        children: 'children',
        label: 'title',
    }"
    check-strictly
>
</el-tree>


// 设置数据
this.$refs.树节点.setCheckedKeys([数组集合])
// 获取数据
this.$refs.树节点.getCheckedKeys()
```

关键点：关于权限，前端要的是数组，后端要的是字符串，所以前后端要相互转换

- 数据回显时，将后端传过来的字符串用逗号拆分成数组，然后设置进tree
- 点击确定时，获取tree选中的项，再转换成字符串，设置进数据对象中
- 取消时，要清空选中的项，即重新设置一个空数组进去即可







### 二十七、实现管理员的增删改查（没带分页视图）

### 二十八、实现分页逻辑

```
el-pagination
    background	是否为分页按钮添加背景色	boolean
    page-size	每页显示条目个数，支持 .sync 修饰符 默认是10条
    total	总条目数	number
    current-page	当前页码，支持 .sync 修饰符	number	默认为1
    layout	组件布局，子组件名用逗号分隔
    current-change 事件	currentPage 改变时会触发	当前页
```



问题：

逻辑判断，当删除最后一条数据的时候重新调用接口出现了问题（非第一页），原因是页码没有减1
如果它不是第一页而且它属于其他页面的最后一条数据作为删除，这个时候要重新调取接口，并且要修改page 把page减去1





### 二十九、实现登录逻辑

```
注意：
要清空数据表，防止脏数据的干扰
```

先分别创建**菜单**、**角色**、**管理员**，这样就有了登录帐号，就可以做登录了

- 菜单管理中创建左侧菜单（菜单中就分为目录和菜单，目录有图标无地址，菜单有地址无图标）

![image-20220910141547662](/public/img/fourthStage/eleven/image-20220910141547662.png)

- 角色管理里面创建**超级管理员**和**客服**两个角色（超级管理员有所有的权限，客服只有商城管理的权限）

![image-20220910141653990](/public/img/fourthStage/eleven/image-20220910141653990.png)

- 管理员管理创建几个管理帐号（admin和小二），密码均为111111

![image-20220910141739212](/public/img/fourthStage/eleven/image-20220910141739212.png)



这样就有了admin和小二两个帐号，可以做登录了

登录成功以后，将数据存在本地，左边的菜单，全部是靠本地存储中的**menus**来创建的

跳转到首页之后，根据本地存储中的menus来创建菜单