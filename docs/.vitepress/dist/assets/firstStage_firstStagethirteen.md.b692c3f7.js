import{_ as s,c as i,o as e,V as a,z as l,a as n}from"./chunks/framework.9c1268ca.js";const D=JSON.parse('{"title":"css3","description":"","frontmatter":{},"headers":[],"relativePath":"firstStage/firstStagethirteen.md","filePath":"firstStage/firstStagethirteen.md"}'),o={name:"firstStage/firstStagethirteen.md"},t=a('<h1 id="css3" tabindex="-1">css3 <a class="header-anchor" href="#css3" aria-label="Permalink to &quot;css3&quot;">​</a></h1><h2 id="学习目标" tabindex="-1">学习目标 <a class="header-anchor" href="#学习目标" aria-label="Permalink to &quot;学习目标&quot;">​</a></h2><ul><li>能够说出CSS3有哪些新特性</li><li>能够利用新增的选择器解决实际布局问题</li><li>熟练使用CSS圆角、投影、box-sizing、background-size属性</li><li>掌握iconfont的原理及应用</li></ul><h2 id="css3概述" tabindex="-1">CSS3概述 <a class="header-anchor" href="#css3概述" aria-label="Permalink to &quot;CSS3概述&quot;">​</a></h2><p>CSS3是CSS（层叠样式表）技术的升级版本，最新的 CSS 标准。 在CSS2.1的基础上增加了很多强大的新功能，以帮助开发人员解决一些问题，例如圆角、多背景、透明度、阴影等。 CSS2.1是单一的规范，而CSS3被划分成几个模块组，每个模块组都有自己的规范。这样的好处是整个CSS3的规范发布不会因为某部分而影响其他模块的推进。</p><p>CSS3按模块化进行了全新设计，主要的 CSS3 模块：包括:选择器、框模型、背景和边框、文本效果、2D/3D 转换、动画、多列布局、用户界面</p><h3 id="现状" tabindex="-1">现状 <a class="header-anchor" href="#现状" aria-label="Permalink to &quot;现状&quot;">​</a></h3><p>现代浏览器已经实现了相当多的 CSS3 属性,CSS3将完全向后兼容</p><h4 id="浏览器的私有前缀" tabindex="-1">浏览器的私有前缀 <a class="header-anchor" href="#浏览器的私有前缀" aria-label="Permalink to &quot;浏览器的私有前缀&quot;">​</a></h4><p>概述：CSS3的浏览器私有属性前缀是一些浏览器生产商经常使用的一种方式，用于对新属性的提前支持，暗示该CSS属性或规则尚未成为W3C标准的一部分。当一个属性成为标准，并且被Firefox、Chrome等浏览器的最新版普遍兼容的时候我们可以去掉前缀。</p><p>各个主流浏览器的私有前缀</p><ul><li>WebKit内核 -webkit- Chrome、Safari <ul><li>Gecko内核-moz- 火狐浏览器 <ul><li>Presto内核 -o- Opera(欧朋)</li><li>Trident内核 -ms- IE <ul><li>内核 私有前缀 浏览器</li></ul></li></ul></li></ul></li></ul><h3 id="css3新增选择器" tabindex="-1">CSS3新增选择器 <a class="header-anchor" href="#css3新增选择器" aria-label="Permalink to &quot;CSS3新增选择器&quot;">​</a></h3><p>学习目标</p><ul><li>能够说出CSS3新增了哪些选择器</li><li>能够使用新增的选择器解决实际布局问题</li></ul><h3 id="属性选择器" tabindex="-1">属性选择器 <a class="header-anchor" href="#属性选择器" aria-label="Permalink to &quot;属性选择器&quot;">​</a></h3><p>通过元素属性和属性值选择元素</p><h4 id="css3新增的属性选择器" tabindex="-1">CSS3新增的属性选择器 <a class="header-anchor" href="#css3新增的属性选择器" aria-label="Permalink to &quot;CSS3新增的属性选择器&quot;">​</a></h4><ul><li>[attr^=value] 选择指定属性名且属性值【以value开头】的每个元素</li><li>[attr$=value] 选择带有指定属性名且属性值【以value结束】所有元素</li><li>[attr*=value] 选择指定属性名且属性值【包含value】的每个元素</li><li>典型应用场景</li></ul><h3 id="结构性伪类选择器" tabindex="-1">结构性伪类选择器 <a class="header-anchor" href="#结构性伪类选择器" aria-label="Permalink to &quot;结构性伪类选择器&quot;">​</a></h3><p>通过结构关系选择元素</p><h4 id="css3-新增的结构性伪类" tabindex="-1">css3 新增的结构性伪类 <a class="header-anchor" href="#css3-新增的结构性伪类" aria-label="Permalink to &quot;css3 新增的结构性伪类&quot;">​</a></h4><p>:last-child 选择器：匹配属于其父元素的最后一个子元素的每个元素 :nth-child( n ) 选择器：匹配属于其父元素的第 n 个子元素 :nth-last-child( n ) 选择器：匹配属于其元素的倒数第 n 个子元素的每个元素 吧</p><p>:first-of-type(n) 选择其父元素的特定类型的首个子元素的每个元素 :last-of-type(n) 选择其父元素的特定类型的最后一个子元素的每个元素。 :nth-of-type(n)：选择器匹配属于父元素的特定类型的第n 个子元素。 :nth-last-of-type(n)：选择器匹配属于父元素的特定类型的倒数第 n 个子元素的每个元素</p><ul><li>说明 <ul><li>n 可以是数字、关键词或公式</li><li>关键词 <ul><li>odd(偶数，even奇数)</li></ul></li><li>公式 <ul><li>(an + b)，(an - b)</li><li>表示周期的长度，n 是计数器（从 0 开始），b 是偏移值</li></ul></li></ul></li></ul><h4 id="总结child一组与of-type一组的区别" tabindex="-1">总结child一组与of-type一组的区别 <a class="header-anchor" href="#总结child一组与of-type一组的区别" aria-label="Permalink to &quot;总结child一组与of-type一组的区别&quot;">​</a></h4><ul><li>nth-child强调结构 关系，优先确定是否是父元素的子元素，在其中找第几个</li><li>nth-of-type强调类型，选择父元素中指定类型中的第几个</li></ul><p>———————————— 以上部分讲过了————————————————————</p><h3 id="状态伪类选择器" tabindex="-1">状态伪类选择器 <a class="header-anchor" href="#状态伪类选择器" aria-label="Permalink to &quot;状态伪类选择器&quot;">​</a></h3><h3 id="css3新增" tabindex="-1">css3新增 <a class="header-anchor" href="#css3新增" aria-label="Permalink to &quot;css3新增&quot;">​</a></h3><ul><li>:enabled <ul><li>作用：选择器匹配每个已启用的元素</li><li>主要适用于：表单元素</li></ul></li><li>:disabled <ul><li>作用：选择器匹配每个被禁用的元素</li><li>主要适用于：表单元素</li></ul></li><li>:checked <ul><li>作用：选择器匹配每个已被选中的 input 元素</li><li>适用于：只用于单选按钮和复选框</li></ul></li></ul><h3 id="伪元素选择器" tabindex="-1">伪元素选择器 <a class="header-anchor" href="#伪元素选择器" aria-label="Permalink to &quot;伪元素选择器&quot;">​</a></h3><p>css2.1 单冒号</p><p>Css3 修改为双冒号</p><h4 id="before" tabindex="-1">:before <a class="header-anchor" href="#before" aria-label="Permalink to &quot;:before&quot;">​</a></h4>',35),r=l("ul",null,[l("li",null,"作用：在元素内部最开始位置生成内容"),l("li",{"content:内容":""},"语法：元素:before")],-1),p=l("h4",{id:"after",tabindex:"-1"},[n(":after "),l("a",{class:"header-anchor",href:"#after","aria-label":'Permalink to ":after"'},"​")],-1),c=l("ul",null,[l("li",null,"作用：在元素内部最后位置生成内容"),l("li",{"content:内容":""},"语法：元素:before")],-1),u=a(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">注：必须定义content属性</span></span></code></pre></div><h4 id="placeholder" tabindex="-1">::placeholder <a class="header-anchor" href="#placeholder" aria-label="Permalink to &quot;::placeholder&quot;">​</a></h4><ul><li>设置对象文字占位符的样式</li><li>::placeholder 伪元素用于控制表单输入框占位符的外观，它允许开发者/设计师改变文字占位符的样式，默认的文字占位符为浅灰色。</li></ul><p>注：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">除了Firefox是 ::[prefix]placeholder，其他浏览器都是使用 ::[prefix]input-placeholder</span></span></code></pre></div><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">input</span><span style="color:#A6ACCD;"> type=&quot;text&quot; placeholder=&quot;占位符&quot; /</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">input</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">-webkit-input-placeholder</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">999</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">input</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">-ms-input-placeholder</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> // IE10+</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">999</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">input</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">-moz-placeholder</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> // Firefox4-18</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">999</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">input</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">-moz-placeholder</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> // Firefox19+</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">999</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ul><li>IE10-11、firefox低版本支持前缀写法</li></ul><h2 id="css3-字体" tabindex="-1">CSS3 字体 <a class="header-anchor" href="#css3-字体" aria-label="Permalink to &quot;CSS3 字体&quot;">​</a></h2><h4 id="字体阴影" tabindex="-1">字体阴影 <a class="header-anchor" href="#字体阴影" aria-label="Permalink to &quot;字体阴影&quot;">​</a></h4><ul><li><p>作用：为文字添加阴影。每个阴影值由元素在X和Y方向的偏移量、模糊半径和颜色值组成</p></li><li><p>语法</p><ul><li><p>“空格”隔开</p></li><li><p>添加多个阴影，阴影值之间用逗号隔开</p></li><li></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.box:nth-child(1){</span></span>
<span class="line"><span style="color:#A6ACCD;">          text-shadow: 100px 100px 10px red;</span></span>
<span class="line"><span style="color:#A6ACCD;">     }  </span></span>
<span class="line"><span style="color:#A6ACCD;">  .box:nth-child(2){</span></span>
<span class="line"><span style="color:#A6ACCD;">      text-shadow:10px 10px red,20px 30px green;</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><h4 id="自定义字体" tabindex="-1">自定义字体 <a class="header-anchor" href="#自定义字体" aria-label="Permalink to &quot;自定义字体&quot;">​</a></h4><p>使用以前 CSS 的版本，网页设计师不得不使用用户计算机上已经安装的字体。</p><p>使用 <strong>CSS3</strong>，网页设计师可以使用的任何字体，只需简单的将字体文件包含在网站中，它会自动下载给需要的用户。</p><h5 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//定义字体</span></span>
<span class="line"><span style="color:#A6ACCD;">@font-face{</span></span>
<span class="line"><span style="color:#A6ACCD;">	font-family：“myfont”;</span></span>
<span class="line"><span style="color:#A6ACCD;">	src:url(&quot;字体格式1.woff&quot;) format(&quot;woff&quot;)..</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">应用字体：</span></span>
<span class="line"><span style="color:#A6ACCD;">.box{</span></span>
<span class="line"><span style="color:#A6ACCD;">	font-family:&quot;myfont&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>说明：format表示字体格式</p><h5 id="应用" tabindex="-1">应用： <a class="header-anchor" href="#应用" aria-label="Permalink to &quot;应用：&quot;">​</a></h5><p>iconfont 添加至项目的使用</p><ul><li><p>登录iconfont</p></li><li><p>挑选图标加入购物车</p></li><li><p>将图标添加至项目</p><ul><li>还未创建项目需要在此创建项目</li></ul></li><li><p>进入我的项目——选择fontclass方式，查看在线链接</p></li><li><p>将文件引入项目</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;link href=&quot;http://at.alicdn.com/t/font_2474231_62smug0rv6r.css&quot;&gt;</span></span></code></pre></div></li><li><p>挑选类名并应用于页面</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;i class=&quot;iconfont icon-caidan&quot;&gt;</span></span></code></pre></div></li></ul><h2 id="css3-边框" tabindex="-1">CSS3 边框 <a class="header-anchor" href="#css3-边框" aria-label="Permalink to &quot;CSS3 边框&quot;">​</a></h2><p>通过 CSS3，能够创建圆角边框，向矩形添加阴影替代之前的切背景图处理</p><h4 id="圆角" tabindex="-1">圆角 <a class="header-anchor" href="#圆角" aria-label="Permalink to &quot;圆角&quot;">​</a></h4><ul><li><p>作用：为元素添加圆角边框</p></li><li><p>单个边定义</p><ul><li>语法： border-radius <ul><li>border-top-left-radius定义了左上角的弧度 border-top-right-radius定义了右上角的弧度 border-bottom-right-radius定义了右下角的弧度 border-bottom-left-radius定义了左下角的弧度</li></ul></li></ul></li><li><p>常用取值</p><ul><li>px</li><li>百分比 <ul><li>分别相对于宽高计算（非内容）</li></ul></li><li>不允许负值</li></ul></li><li><p>简写border-radius</p><ul><li>语法 <ul><li>空格 隔开 <ul><li>四个值：左上角、右上角、右下角、左下角 水平和垂直半径 三个值：左上角、右上角和左下角，右下角 两个值：左上角与右下角、右上角与左下角 一个值： 四个圆角值相同</li><li>&quot;&quot;隔开</li><li>水平半径（1-4）/垂直半径（1-4）</li><li>规则同上</li></ul></li></ul></li></ul></li></ul><h4 id="阴影" tabindex="-1">阴影 <a class="header-anchor" href="#阴影" aria-label="Permalink to &quot;阴影&quot;">​</a></h4><ul><li>作用：为设置一个或多个阴影</li><li>语法 <ul><li>box-shadow: 阴影水平偏移值 垂直偏移 模糊值 外延值 阴影颜色 内阴影;</li><li>空格隔开</li></ul></li><li>取值说明 <ul><li>none 无阴影</li><li>必填 第1个长度值用来设置对象的阴影水平偏移值。可以为负值</li><li>必填 第2个长度值用来设置对象的阴影垂直偏移值。可以为负值</li><li>第3个长度值用来设置对象的阴影模糊值。不允许负值</li><li>第4个长度值用来设置对象的阴影外延值。可以为负值</li><li>color 可选。阴影的颜色</li><li>inset：设置对象的阴影类型为内阴影 默认outset 外阴影</li></ul></li></ul><p>​ box-shadow:10px 10px 10px 0px orange</p><ul><li><p>多个阴影</p><ul><li>用逗号分隔</li><li>第一个阴影在最上面,书写顺序越靠前，越靠上</li></ul></li></ul><h2 id="css3-背景" tabindex="-1">CSS3 背景 <a class="header-anchor" href="#css3-背景" aria-label="Permalink to &quot;CSS3 背景&quot;">​</a></h2><p>概述：CSS3更新增了新的背景属性，提供对元素背景更灵活的控制</p><h4 id="多个背景图像" tabindex="-1">多个背景图像 <a class="header-anchor" href="#多个背景图像" aria-label="Permalink to &quot;多个背景图像&quot;">​</a></h4><p>CSS3中可以通过background-image给元素上添加多个背景图像</p><p>语法</p><ul><li><p>不同的背景图像和图像用【逗号】隔开，也可以给不同的图片设置多个不同的属性</p><ul><li>单独定义</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#example1 { </span></span>
<span class="line"><span style="color:#A6ACCD;">background-image: url(img_flwr.gif), url(paper.gif); </span></span>
<span class="line"><span style="color:#A6ACCD;">background-position: right bottom, left top; </span></span>
<span class="line"><span style="color:#A6ACCD;">background-repeat: no-repeat, repeat; </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><ul><li><p>简写</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#example1 {</span></span>
<span class="line"><span style="color:#A6ACCD;">background: url(img_flwr.gif) right bottom no-repeat, url(paper.gif) left top repeat;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></li></ul></li><li><p>注意强调:如果设置的多重背景图之间存在着交集（即存在着重叠关系）， 前面的背景图会覆盖在后面的背景图之上</p></li><li><p>多背景图片复合写法不可以设置颜色，语法错误</p></li></ul><h4 id="background-origin背景图像的起始点" tabindex="-1">background-origin背景图像的起始点 <a class="header-anchor" href="#background-origin背景图像的起始点" aria-label="Permalink to &quot;background-origin背景图像的起始点&quot;">​</a></h4><ul><li>作用：指定背景图像的起始点</li><li>取值 <ul><li>padding-box：从padding区域（含padding）开始显示背景图像。</li><li>border-box：从border区域（含border）开始显示背景图像。默认值</li><li>content-box：从content区域开始显示背景图像。</li></ul></li></ul><h4 id="background-clip背景绘制区域" tabindex="-1">background-clip背景绘制区域 <a class="header-anchor" href="#background-clip背景绘制区域" aria-label="Permalink to &quot;background-clip背景绘制区域&quot;">​</a></h4><ul><li>作用：指定背景绘制区域</li><li>取值 <ul><li>border-box 默认值。背景绘制在边框方框内（剪切成边框方框）。</li><li>padding-box背景绘制在衬距方框内（剪切成衬距方框）。</li><li>content-box背景绘制在内容方框内（剪切成内容方框）</li></ul></li></ul><h4 id="background-size背景图像的大小" tabindex="-1">background-size背景图像的大小 <a class="header-anchor" href="#background-size背景图像的大小" aria-label="Permalink to &quot;background-size背景图像的大小&quot;">​</a></h4><ul><li>概述：CSS3以前，背景图像大小由图像的实际大小决定，CSS3中可以指定背景图片，让我们重新在不同的环境中指定背景图片的大小</li><li>取值 <ul><li>px：用长度值指定背景图像大小。不允许负值。</li><li>百分比：用百分比指定背景图像大小。不允许负值。</li><li>auto：背景图像的真实大小。</li><li>cover：将背景图像等比缩放到完全覆盖容器，背景图像有可能超出容器。</li><li>contain：将背景图像等比缩放到宽度或高度与容器的宽度或高度相等，背景图像始终被包含在容器内。</li></ul></li><li>注意:当属性值为百分比时，参照背景图像的background-origin区域大小进行换算（而不是包含块大小）</li><li>合并简写 <ul><li>语法： <ul><li>background： image position / size repeat origin clip color</li><li>​ background:url(&quot;../资料/3.jpg&quot;) 50px 50px/300px 300px no-repeat content-box content-box red;</li></ul></li><li>空格，斜杠</li><li>注意强调：背景颜色只能有一个</li></ul></li></ul><h3 id="兼容" tabindex="-1">兼容 <a class="header-anchor" href="#兼容" aria-label="Permalink to &quot;兼容&quot;">​</a></h3><p>表格中的数字表示支持该属性的第一个浏览器版本号。</p><p>紧跟在 -webkit-, -ms- 或 -moz- 前的数字为支持该前缀属性的第一个浏览器版本号。</p><h2 id="css3-渐变" tabindex="-1">CSS3 渐变 <a class="header-anchor" href="#css3-渐变" aria-label="Permalink to &quot;CSS3 渐变&quot;">​</a></h2><p>CSS3 渐变（gradients）可以让你在两个或多个指定的颜色之间显示平稳的过渡。 CSS3 定义了两种类型的渐变（gradients）通过background-image指定： 线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向。 径向渐变（Radial Gradients）- 由它们的中心定义。</p><h4 id="线性渐变" tabindex="-1">线性渐变 <a class="header-anchor" href="#线性渐变" aria-label="Permalink to &quot;线性渐变&quot;">​</a></h4><p>linear-gradient() 函数用于创建一个表示两种或多种颜色线性渐变的图片。</p><p>创建一个线性渐变，需要指定两种颜色，还可以实现不同方向（指定为一个角度）的渐变效果，如果不指定方向，默认从上到下渐变。</p><ul><li><p>语法</p><ul><li>background-image: linear-gradient(direction, color-stop1, color-stop2, ...);</li><li>to left 从右向左 to top 从下到上</li></ul></li><li><p>代码演示</p><ul><li>均匀分布的渐变</li><li>定义颜色节点的渐变</li><li>渐变重复 <ul><li>语法：repeating-linear-gradient( )</li></ul></li><li>渐变方向 <ul><li>使用起始位置关键字</li><li>使用角度</li></ul></li></ul></li><li></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">background-image:repeating-linear-gradient(to bottom,red 10%,yellow 20%)</span></span></code></pre></div><h4 id="径向渐变" tabindex="-1">径向渐变 <a class="header-anchor" href="#径向渐变" aria-label="Permalink to &quot;径向渐变&quot;">​</a></h4><p>radial-gradient() 函数用径向渐变创建 &quot;图像&quot;。</p><p>径向渐变由中心点定义。</p><ul><li><p>语法</p><ul><li>background: radial-gradient(o-x o-y, r-x r-y, start-color n%, ..., last-color n%);</li></ul></li><li><p>代码演示</p><ul><li>颜色节点均匀分布 <ul><li>radial-gradient(red, green, blue);</li></ul></li><li>颜色结点不均匀分布 <ul><li>radial-gradient(red 0,red 50%,blue 60%)</li><li>background-image:-webkit-radial-gradient(100px水平方向圆心位置 100px垂直方向圆心位置,100px水平方向半径 100px垂直方向半径,red 20%,yellow 30%);</li><li>节点取值 <ul><li>px,百分比</li></ul></li></ul></li><li>渐变重复 <ul><li>语法：repeating-radial-gradient()</li><li>代码示例 <ul><li>repeating-radial-gradient(red 0,red 10px,blue 10px,blue 20px);}</li></ul></li></ul></li><li>渐变的圆心</li></ul></li></ul><h2 id="css3-用户界面" tabindex="-1">CSS3 用户界面 <a class="header-anchor" href="#css3-用户界面" aria-label="Permalink to &quot;CSS3 用户界面&quot;">​</a></h2><h4 id="resize" tabindex="-1">resize <a class="header-anchor" href="#resize" aria-label="Permalink to &quot;resize&quot;">​</a></h4><ul><li>作用：规定是否可由用户调整元素的尺寸。</li><li>取值 <ul><li>none 用户无法调整元素的尺寸。 <ul><li>both用户可调整元素的高度和宽度。</li></ul></li><li>horizontal用户可调整元素的宽度。</li><li>vertical用户可调整元素的高度。</li></ul></li><li>注意 <ul><li>如果希望此属性生效，需要设置元素的 overflow 属性，值可以是 auto、hidden 或 scroll。</li></ul></li></ul><h4 id="box-sizing" tabindex="-1">box-sizing <a class="header-anchor" href="#box-sizing" aria-label="Permalink to &quot;box-sizing&quot;">​</a></h4><ul><li><p>作用：规定盒子组成模式，改变盒子渲染规则。</p></li><li><p>取值</p><p>content-box：定义宽高不包括宽度和高度 设置为标准盒 border-box：定义宽高包括宽度和高度 设置为怪异盒子 （举例type类型为button的盒子）</p></li></ul><h2 id="多列布局" tabindex="-1">多列布局 <a class="header-anchor" href="#多列布局" aria-label="Permalink to &quot;多列布局&quot;">​</a></h2><p>CSS3 支持在布局中建立列（column）的数量，以及内容如何在列之间流动（flow）、列之间的间距（gap）大小，以及列的分隔线（column rules）。</p><h3 id="column-width属性" tabindex="-1">column-width属性 <a class="header-anchor" href="#column-width属性" aria-label="Permalink to &quot;column-width属性&quot;">​</a></h3><ul><li>作用：规定栏目的宽度。</li><li>取值 <ul><li>number 指定栏目宽度。 <ul><li>auto自动，由其他属性决定列数，如 &quot;column-count&quot;。</li></ul></li></ul></li></ul><h3 id="column-count属性" tabindex="-1">column-count属性 <a class="header-anchor" href="#column-count属性" aria-label="Permalink to &quot;column-count属性&quot;">​</a></h3><ul><li>作用：规定元素应该被划分的列数</li><li>取值 <ul><li>auto 由其他属性决定列数，比如 &quot;column-width&quot;。</li><li>number元素内容将被划分的最佳列数。</li></ul></li></ul><h3 id="column-gap-属性" tabindex="-1">column-gap 属性 <a class="header-anchor" href="#column-gap-属性" aria-label="Permalink to &quot;column-gap 属性&quot;">​</a></h3><ul><li>作用：规定列之间的间隔。</li><li>取值 <ul><li>normal 规定列间间隔为一个常规的间隔。W3C 建议的值是 1em。</li><li>length把列间的间隔设置为指定的长度。</li></ul></li></ul><h3 id="column-rule-属性" tabindex="-1">column-rule 属性 <a class="header-anchor" href="#column-rule-属性" aria-label="Permalink to &quot;column-rule 属性&quot;">​</a></h3><ul><li>作用：设置列与列间的边框宽度、样式和颜色规则。</li><li>column-rule-width边框宽度</li><li>column-rule-style 边框样式</li><li>column-rule-color边框颜色</li><li>注：column-rule为column-rule-width ，column-rule-style ，column-rule-color;的简写属性</li></ul><p>注意：column-width&lt; 列数的width，以列数为准 column-width&gt;列数的宽度，以宽度为准</p>`,70),d=[t,r,p,c,u];function h(b,C,g,m,y,f){return e(),i("div",null,d)}const q=s(o,[["render",h]]);export{D as __pageData,q as default};
