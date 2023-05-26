import{_ as a,o as s,c as n,N as l}from"./chunks/framework.e454f055.js";const u=JSON.parse('{"title":"响应式web开发","description":"","frontmatter":{},"headers":[],"relativePath":"firstStage/firstStageeighteen.md"}'),e={name:"firstStage/firstStageeighteen.md"},p=l(`<h1 id="响应式web开发" tabindex="-1">响应式web开发 <a class="header-anchor" href="#响应式web开发" aria-label="Permalink to &quot;响应式web开发&quot;">​</a></h1><h2 id="学习目标" tabindex="-1">学习目标 <a class="header-anchor" href="#学习目标" aria-label="Permalink to &quot;学习目标&quot;">​</a></h2><ul><li>能够说出响应式布局，以及它的实现原理</li><li>能够熟练使用媒体查询</li><li>能够独立完成响应式项目</li></ul><h2 id="概述-什么是响应式" tabindex="-1">概述（什么是响应式） <a class="header-anchor" href="#概述-什么是响应式" aria-label="Permalink to &quot;概述（什么是响应式）&quot;">​</a></h2><p>响应式设计的页面会根据用户的行为以及设备的环境(系统平台、屏幕尺寸、屏幕定向等)进行相应的响应和调整。</p><p>此概念于2010年5月由国外著名网页设计师Ethan Marcotte(伊森·马科特)所提出意在实现不同屏幕分辨率的终端上浏览网页的不同展示方式。具体的实践方式由多方面组成，包括弹性盒、弹性网格布局、响应式图片、CSS media query的使用等。</p><p>背景：移动互联网的发展，为了满足移动互联网多终端显示的需求 催生了响应式式布局的诞生，</p><p><strong>目的：响应式网页设计就是一个网站能够兼容多个终端——而不是为每个终端做一个特定的版本。这样就可以不必为不断到来的新设备做专门的版本设计和开发了。</strong></p><p>初步认识响应式：响应式站点演示：<a href="https://segmentfault.com/" target="_blank" rel="noreferrer">https://segmentfault.com/</a></p><h2 id="响应式开发原理-实现步骤" tabindex="-1">响应式开发原理（实现步骤） <a class="header-anchor" href="#响应式开发原理-实现步骤" aria-label="Permalink to &quot;响应式开发原理（实现步骤）&quot;">​</a></h2><h3 id="_1、设置-viewport" tabindex="-1">1、设置 viewport <a class="header-anchor" href="#_1、设置-viewport" aria-label="Permalink to &quot;1、设置 viewport&quot;">​</a></h3><h3 id="_2-、创建流式布局" tabindex="-1">2 、创建流式布局 <a class="header-anchor" href="#_2-、创建流式布局" aria-label="Permalink to &quot;2 、创建流式布局&quot;">​</a></h3><p>响应式在设计和布局初期就要考虑页面如何在多终端展示，因此需要根据页面效果分析创建方便后续处理版式变化的流式布局</p><h4 id="_2-1-模块布局响应" tabindex="-1">2.1 模块布局响应 <a class="header-anchor" href="#_2-1-模块布局响应" aria-label="Permalink to &quot;2.1 模块布局响应&quot;">​</a></h4><p>对页面进行响应式的设计实现，需要对相同内容进行不同宽度的布局设计，有两种方式：桌面优先（从桌面端开始向下设计）；移动优先（从移动端向上设计）；</p><p>无论基于那种模式的设计，要兼容所有设备，布局响应时不可避免地需要对模块布局做一些变化，主要的布局方式主要有以下几种</p><p>· 模块中内容：换行－平铺；</p><p>l 模块中内容：删减－增加；</p><p>n 模块位置的变化</p><p>其中涉及到的布局技巧的应用</p><p>如：尽量少使用绝对宽度、使用百分比布局、弹性盒、弹性网格\\浮动技巧、定位技巧的应用、box-sizing,显示隐藏的应用</p><h4 id="_2-2响应式图片" tabindex="-1">2.2响应式图片 <a class="header-anchor" href="#_2-2响应式图片" aria-label="Permalink to &quot;2.2响应式图片&quot;">​</a></h4><h5 id="_1-内容图片响应" tabindex="-1">1.内容图片响应 <a class="header-anchor" href="#_1-内容图片响应" aria-label="Permalink to &quot;1.内容图片响应&quot;">​</a></h5><p>在html页面中的图片，比如文章里插入的图片我们都可以通过css样式使用百分比，来进行控制图片缩放：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#wrap  img{</span></span>
<span class="line"><span style="color:#A6ACCD;">  width:100%;</span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>以上代码将强制图像占据其父元素空间的100%，当父元素宽度改变时图像元素也会相应改变，而高度默认为auto,图像自身宽高比例不会发生变化</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#wrap  img{</span></span>
<span class="line"><span style="color:#A6ACCD;">  max-width:100%;  </span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>以上代码将实现父元素宽度小于图像本身宽度时，图像跟随父元素改变，当父元素宽度大于图片时，图片宽度以自身本身宽度显示</p><h5 id="_2-背景图片处理" tabindex="-1">2.背景图片处理 <a class="header-anchor" href="#_2-背景图片处理" aria-label="Permalink to &quot;2.背景图片处理&quot;">​</a></h5><p>除了img标签的图片外我们经常会遇到背景图片</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> 高度固定：</span></span>
<span class="line"><span style="color:#A6ACCD;">       .box{</span></span>
<span class="line"><span style="color:#A6ACCD;">            width: 10%;</span></span>
<span class="line"><span style="color:#A6ACCD;">            background:pink; </span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        .con{</span></span>
<span class="line"><span style="color:#A6ACCD;">            /* 宽度自适应 高度固定 背景尺寸高度100% 宽度auto  否则相反设置*/</span></span>
<span class="line"><span style="color:#A6ACCD;">            width:50%;</span></span>
<span class="line"><span style="color:#A6ACCD;">            height:50px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            border:10px solid yellow;</span></span>
<span class="line"><span style="color:#A6ACCD;">            background-image:url(&#39;../资料/37c65625d94cae75.png!q70.png&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">            background-size:auto 100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;box&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div class=&quot;con&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> 高度不固定：</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> .test{</span></span>
<span class="line"><span style="color:#A6ACCD;">            width:25%;</span></span>
<span class="line"><span style="color:#A6ACCD;">            background:red;</span></span>
<span class="line"><span style="color:#A6ACCD;">            text-align: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">        .icon{</span></span>
<span class="line"><span style="color:#A6ACCD;">            width:20%;</span></span>
<span class="line"><span style="color:#A6ACCD;">            padding-top:20%;</span></span>
<span class="line"><span style="color:#A6ACCD;">            background:pink;</span></span>
<span class="line"><span style="color:#A6ACCD;">            margin:0 auto;</span></span>
<span class="line"><span style="color:#A6ACCD;">            background-image:url(&#39;../资料/37c65625d94cae75.png!q70.png&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">            background-size:100% auto;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;test&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div class=&quot;icon&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        首页</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>background-size属性值设置为百分比值或cover,contain等，将实现背景图片的大小跟随元素大小响应变化。</p><h2 id="_3、屏幕区间设定" tabindex="-1">3、屏幕区间设定 <a class="header-anchor" href="#_3、屏幕区间设定" aria-label="Permalink to &quot;3、屏幕区间设定&quot;">​</a></h2><p>使用<a href="https://www.runoob.com/cssref/css3-pr-mediaquery.html" target="_blank" rel="noreferrer">@Media查询</a>来设置不同屏幕区间的样式，这是响应式布局的核心</p><p>对于@Media查询的分界点，这个可以根据自己的项目来调整，设置合适自己项目的布局分界点。</p><p>在设置分界点时，要注意先后顺序，当使用max-width数值大的在前面，数值小的在后面；</p><p>当使用min-width时，数值小的放前面，数值大的放后面。</p><p>下面列出了在项目开发时设置的布局分界点参考：</p><p>移动端优先：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/*超小型设备（手机，768px以下）*/ </span></span>
<span class="line"><span style="color:#A6ACCD;">@media screen and (min-width:768px) { ... } /* 小型设备（平板电脑，768px 以上） */ </span></span>
<span class="line"><span style="color:#A6ACCD;">@media screen and (min-width:992px){ ... }/* 中型设备（台式电脑，992px 以上） */</span></span>
<span class="line"><span style="color:#A6ACCD;">@media screen and (min-width:1200px){ ... }/* 大型设备（大台式电脑，1200px 以上） */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>pc优先：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/* 大型设备（大台式电脑，1200px 以上） */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@media screen and (max-width:1200px) { ... } /* 中型设备（台式电脑，1200px 以下） */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@media screen and (max-width:992px){ ... }/* 小型设备（平板电脑，992px 以下） */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@media screen and (max-width:768px){ ... }/* 超小型设备（手机，768px 以下） */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="响应式项目" tabindex="-1">响应式项目 <a class="header-anchor" href="#响应式项目" aria-label="Permalink to &quot;响应式项目&quot;">​</a></h2><h3 id="项目介绍" tabindex="-1">项目介绍 <a class="header-anchor" href="#项目介绍" aria-label="Permalink to &quot;项目介绍&quot;">​</a></h3><ul><li>项目名称：小U后台管理系统</li><li>项目描述：小U是一套响应式跨平台电商后台管理系统包含了商品管理、订单管理、包含商品管理、订单管理、会员管理、促销管理、等模块。 我们主要完成商品管理，商品添加页面、商品信息页</li><li>效果预览</li><li>开发工具以及技术栈 <ul><li>开发工具 <ul><li>VScode Photoshop 主流浏览器</li></ul></li><li>技术栈 <ul><li>利用媒体查询与综合布局的形式，实现响应式</li></ul></li></ul></li><li>采取结构与样式相分离，模块化开发</li></ul><h3 id="项目搭建" tabindex="-1">项目搭建 <a class="header-anchor" href="#项目搭建" aria-label="Permalink to &quot;项目搭建&quot;">​</a></h3><ul><li>文件目录 <ul><li>概述：根据项目名称创建项目文件夹,推荐用对应的英文单词命名。 html、css、img、js 文件均归档至项目名称目录中</li><li>目录示例 <ul><li>项目文件夹 <ul><li>样式类图片文件夹（images）</li><li>样式文件夹（css）</li><li>字体类文件夹（fonts）</li><li>脚本文件夹（js）</li><li>产品类图片文件夹（upload）</li></ul></li></ul></li></ul></li><li>样式文件 <ul><li>初始化样式（reset.css）</li><li>公共样式(common.css)</li></ul></li></ul><h3 id="项目模块化开发" tabindex="-1">项目模块化开发 <a class="header-anchor" href="#项目模块化开发" aria-label="Permalink to &quot;项目模块化开发&quot;">​</a></h3><ul><li>讲解—【首页框架】</li><li>讲解—【左侧边栏响应式实现】</li><li>讲解—【右侧列表】</li><li>讲解—【顶部菜单小屏幕下拉效果】</li></ul><h2 id="响应式布局优缺点" tabindex="-1">响应式布局优缺点 <a class="header-anchor" href="#响应式布局优缺点" aria-label="Permalink to &quot;响应式布局优缺点&quot;">​</a></h2><p>优点</p><ul><li>面对不同分辨率设备灵活性强,能够快捷解决多设备显示适应问题</li><li>节省设计、开发、维护成本【不再特定的维护PC页面，移动页面】</li></ul><p>缺点</p><ul><li>流式布局对版面设计有一定要求存在局限性</li><li>兼容各种设备工作量大，效率低下</li><li>代码累赘，会出现隐藏无用的元素，加载时间加长</li><li>影响用户体验(一定程度上改变了网站原有的布局结构，会出现用户混淆的情况,)</li><li>兼容问题（IE8以下不支持）</li></ul>`,54),i=[p];function o(t,c,r,d,C,h){return s(),n("div",null,i)}const y=a(e,[["render",o]]);export{u as __pageData,y as default};
