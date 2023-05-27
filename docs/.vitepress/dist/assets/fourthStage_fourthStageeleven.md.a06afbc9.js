import{_ as s,o as a,c as n,N as l}from"./chunks/framework.e454f055.js";const e="/learning-notes/assets/image-20220910141547662.35046613.png",p="/learning-notes/assets/image-20220910141653990.ad39e1e0.png",o="/learning-notes/assets/image-20220910141739212.01c8bc73.png",u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"fourthStage/fourthStageeleven.md"}'),t={name:"fourthStage/fourthStageeleven.md"},c=l(`<h2 id="小u商城后台管理项目" tabindex="-1">小U商城后台管理项目 <a class="header-anchor" href="#小u商城后台管理项目" aria-label="Permalink to &quot;小U商城后台管理项目&quot;">​</a></h2><h3 id="二十一、实现封装全局组件之面包屑" tabindex="-1">二十一、实现封装全局组件之面包屑 <a class="header-anchor" href="#二十一、实现封装全局组件之面包屑" aria-label="Permalink to &quot;二十一、实现封装全局组件之面包屑&quot;">​</a></h3><p>定义角色管理模块role及定义路由</p><p>封装全局组件之<strong>面包屑</strong>(在common文件夹下)</p><p>common/index.js</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Vue </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> vBreadcrumb </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./vBreadcrumb</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 面包屑</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  vBreadcrumb</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> attr </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> obj) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">component</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">attr</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">attr</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="二十二、实现角色管理的基本静态骨架" tabindex="-1">二十二、实现角色管理的基本静态骨架 <a class="header-anchor" href="#二十二、实现角色管理的基本静态骨架" aria-label="Permalink to &quot;二十二、实现角色管理的基本静态骨架&quot;">​</a></h3><h3 id="二十三、通过添加以及编辑按钮控制弹框的显示并渲染不同的视图" tabindex="-1">二十三、通过添加以及编辑按钮控制弹框的显示并渲染不同的视图 <a class="header-anchor" href="#二十三、通过添加以及编辑按钮控制弹框的显示并渲染不同的视图" aria-label="Permalink to &quot;二十三、通过添加以及编辑按钮控制弹框的显示并渲染不同的视图&quot;">​</a></h3><h3 id="二十四、实现角色管理之添加-没带角色权限" tabindex="-1">二十四、实现角色管理之添加（没带角色权限） <a class="header-anchor" href="#二十四、实现角色管理之添加-没带角色权限" aria-label="Permalink to &quot;二十四、实现角色管理之添加（没带角色权限）&quot;">​</a></h3><h3 id="二十五、实现角色管理之列表渲染以及编辑和删除-没带角色权限" tabindex="-1">二十五、实现角色管理之列表渲染以及编辑和删除（没带角色权限） <a class="header-anchor" href="#二十五、实现角色管理之列表渲染以及编辑和删除-没带角色权限" aria-label="Permalink to &quot;二十五、实现角色管理之列表渲染以及编辑和删除（没带角色权限）&quot;">​</a></h3><h3 id="二十六、角色权限" tabindex="-1">二十六、角色权限 <a class="header-anchor" href="#二十六、角色权限" aria-label="Permalink to &quot;二十六、角色权限&quot;">​</a></h3><p>树状展示的是<strong>菜单管理</strong>的内容，即这个角色有哪些菜单权限，后端需要的是&#39;3,4,5&#39;这样的字符串，前端要的是[3,4,5]这样的数组，因此数据要转换。</p><p>注意点：</p><p>1、一进入role/dialog.vue组件，就要去后端读取一下menu数据，但是如果有了，就不用读取数据了（比如，从菜单项过来的，就是已经有数据了的）</p><p>2、this.$refs.tree.setCheckedKeys([]) 设置节点是否选中，接收一个数组，数组中是ID</p><p>3、this.$refs.tree.getCheckedKeys() 获取节点哪些被选中，返回的是一个数组</p><p>Tree树形控件--默认展开和默认选中</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    el-tree</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    data 展示数据	array</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    show-checkbox	节点是否可被选择	boolean</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    node-key	每个树节点用来作为唯一标识的属性，整棵树应该是唯一的	String</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    default-expanded-keys	默认展开的节点的 key 的数组	array（这里不用）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    default-checked-keys	默认勾选的节点的 key 的数组	array（这里用下面的两个方法去获取或设置）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    default-expand-all	是否默认展开所有节点	boolean</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">	check-strictly	在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    props	配置选项，具体看下表	object</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     	label	指定节点标签为节点对象的某个属性值	string, function(data, node)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     	children	指定子树为节点对象的某个属性值	string</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">	</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">	方法</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    getCheckedKeys	若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点的 key 所组成的数组</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    setCheckedKeys	通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">--&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">el-tree</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tree</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">menulist</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">show-checkbox</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">node-key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">default-expand-all</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">props</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">children</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">children</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">label</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">title</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">check-strictly</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">el-tree</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// 设置数据</span></span>
<span class="line"><span style="color:#A6ACCD;">this.$refs.树节点.setCheckedKeys([数组集合])</span></span>
<span class="line"><span style="color:#A6ACCD;">// 获取数据</span></span>
<span class="line"><span style="color:#A6ACCD;">this.$refs.树节点.getCheckedKeys()</span></span>
<span class="line"></span></code></pre></div><p>关键点：关于权限，前端要的是数组，后端要的是字符串，所以前后端要相互转换</p><ul><li>数据回显时，将后端传过来的字符串用逗号拆分成数组，然后设置进tree</li><li>点击确定时，获取tree选中的项，再转换成字符串，设置进数据对象中</li><li>取消时，要清空选中的项，即重新设置一个空数组进去即可</li></ul><h3 id="二十七、实现管理员的增删改查-没带分页视图" tabindex="-1">二十七、实现管理员的增删改查（没带分页视图） <a class="header-anchor" href="#二十七、实现管理员的增删改查-没带分页视图" aria-label="Permalink to &quot;二十七、实现管理员的增删改查（没带分页视图）&quot;">​</a></h3><h3 id="二十八、实现分页逻辑" tabindex="-1">二十八、实现分页逻辑 <a class="header-anchor" href="#二十八、实现分页逻辑" aria-label="Permalink to &quot;二十八、实现分页逻辑&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">el-pagination</span></span>
<span class="line"><span style="color:#A6ACCD;">    background	是否为分页按钮添加背景色	boolean</span></span>
<span class="line"><span style="color:#A6ACCD;">    page-size	每页显示条目个数，支持 .sync 修饰符 默认是10条</span></span>
<span class="line"><span style="color:#A6ACCD;">    total	总条目数	number</span></span>
<span class="line"><span style="color:#A6ACCD;">    current-page	当前页码，支持 .sync 修饰符	number	默认为1</span></span>
<span class="line"><span style="color:#A6ACCD;">    layout	组件布局，子组件名用逗号分隔</span></span>
<span class="line"><span style="color:#A6ACCD;">    current-change 事件	currentPage 改变时会触发	当前页</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>问题：</p><p>逻辑判断，当删除最后一条数据的时候重新调用接口出现了问题（非第一页），原因是页码没有减1 如果它不是第一页而且它属于其他页面的最后一条数据作为删除，这个时候要重新调取接口，并且要修改page 把page减去1</p><h3 id="二十九、实现登录逻辑" tabindex="-1">二十九、实现登录逻辑 <a class="header-anchor" href="#二十九、实现登录逻辑" aria-label="Permalink to &quot;二十九、实现登录逻辑&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">注意：</span></span>
<span class="line"><span style="color:#A6ACCD;">要清空数据表，防止脏数据的干扰</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>先分别创建<strong>菜单</strong>、<strong>角色</strong>、<strong>管理员</strong>，这样就有了登录帐号，就可以做登录了</p><ul><li>菜单管理中创建左侧菜单（菜单中就分为目录和菜单，目录有图标无地址，菜单有地址无图标）</li></ul><p><img src="`+e+'" alt="image-20220910141547662"></p><ul><li>角色管理里面创建<strong>超级管理员</strong>和<strong>客服</strong>两个角色（超级管理员有所有的权限，客服只有商城管理的权限）</li></ul><p><img src="'+p+'" alt="image-20220910141653990"></p><ul><li>管理员管理创建几个管理帐号（admin和小二），密码均为111111</li></ul><p><img src="'+o+'" alt="image-20220910141739212"></p><p>这样就有了admin和小二两个帐号，可以做登录了</p><p>登录成功以后，将数据存在本地，左边的菜单，全部是靠本地存储中的<strong>menus</strong>来创建的</p><p>跳转到首页之后，根据本地存储中的menus来创建菜单</p>',37),r=[c];function i(y,D,F,C,d,h){return a(),n("div",null,r)}const g=s(t,[["render",i]]);export{u as __pageData,g as default};