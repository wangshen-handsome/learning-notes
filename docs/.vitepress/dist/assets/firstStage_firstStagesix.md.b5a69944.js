import{_ as a,o as l,c as s,O as n}from"./chunks/framework.ae21234a.js";const b=JSON.parse('{"title":"day06","description":"","frontmatter":{},"headers":[],"relativePath":"firstStage/firstStagesix.md","filePath":"firstStage/firstStagesix.md","lastUpdated":1684891561000}'),i={name:"firstStage/firstStagesix.md"},e=n(`<h1 id="day06" tabindex="-1">day06 <a class="header-anchor" href="#day06" aria-label="Permalink to &quot;day06&quot;">​</a></h1><p>回顾微信滑动门技术：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">核心技术就是利用CSS精灵（主要是背景位置）和盒子padding撑开宽度, 以便能适应不同字数的导航栏。</span></span>
<span class="line"><span style="color:#A6ACCD;">结构：</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;li&gt;&lt;a href=&quot;&quot;&gt;&lt;span&gt;首页&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">a 设置 背景的右侧，padding撑开合适宽度。</span></span>
<span class="line"><span style="color:#A6ACCD;">span 设置背景左侧， padding撑开合适宽度 剩下由文字继续撑开宽度。</span></span>
<span class="line"><span style="color:#A6ACCD;">之所以a包含span就是因为 整个导航都是可以点击的。</span></span></code></pre></div><h2 id="css-定位" tabindex="-1">CSS 定位 <a class="header-anchor" href="#css-定位" aria-label="Permalink to &quot;CSS 定位&quot;">​</a></h2><h2 id="学习目标" tabindex="-1">学习目标 <a class="header-anchor" href="#学习目标" aria-label="Permalink to &quot;学习目标&quot;">​</a></h2><ul><li>能够说出为什么需要定位</li><li>能够说出常用3种定位各自的特点</li><li>能够利用定位属性实现轮播图案例</li></ul><h2 id="定位的作用" tabindex="-1">定位的作用 <a class="header-anchor" href="#定位的作用" aria-label="Permalink to &quot;定位的作用&quot;">​</a></h2><p>普通文档流中块元素垂直排列，行内元素水平排列。 浮动可以实现多个块级盒子在一行无缝排列显示 定位能够让我们把一个元素从它原本在正常布局流中应该在的位置移动到另一个位置（<strong>一个盒子在它包含块的任意位置移动或者固定在屏幕中的某个位置）</strong></p><h2 id="定位的实现" tabindex="-1">定位的实现 <a class="header-anchor" href="#定位的实现" aria-label="Permalink to &quot;定位的实现&quot;">​</a></h2><p><strong>使用定位需要指定一个元素在文档中的定位模式，配合设置【边偏移量】决定元素最终的显示及位置</strong></p><p>定位模式通过position属性来设置，以下为常用四种定位模式静态定位，相对定位，绝对定位，固定定位</p><p>边偏移量定位元素的位置，使用“top”、“right”、“bottom”和“left”来描述。通常水平位置通过left或right控制，垂直位置通过top或bottom控制</p><ul><li><p>位置属性</p><p>left：设置距离包含块左侧的距离 right：设置距离包含块右侧的距离 top：设置距离包含块顶部的距离 bottom：设置距离包含块底部的距离</p></li><li><p>取值</p><ul><li>长度值：px/em等</li><li>百分比：相对于包含块计算</li><li>auto 默认值</li><li>允许使用负值</li></ul></li></ul><h2 id="定位模式详解" tabindex="-1">定位模式详解 <a class="header-anchor" href="#定位模式详解" aria-label="Permalink to &quot;定位模式详解&quot;">​</a></h2><h3 id="position-relative相对定位" tabindex="-1">position:relative相对定位 <a class="header-anchor" href="#position-relative相对定位" aria-label="Permalink to &quot;position:relative相对定位&quot;">​</a></h3><p>相对于元素在正常的文档流中的位置移动它，把一个正常布局流中的元素从它的默认位置按坐标进行相对移动。 它原本所占的空间不会改变。</p><h4 id="基础特性" tabindex="-1">基础特性 <a class="header-anchor" href="#基础特性" aria-label="Permalink to &quot;基础特性&quot;">​</a></h4><ul><li>不脱离文档流</li><li>提升元素层级</li><li>不定义偏移量时对元素基本没有影响</li></ul><h4 id="应用场景" tabindex="-1">应用场景 <a class="header-anchor" href="#应用场景" aria-label="Permalink to &quot;应用场景&quot;">​</a></h4><p>通常作为定位父级配合绝对定位使用</p><h3 id="position-absolute绝对定位" tabindex="-1">position:absolute绝对定位 <a class="header-anchor" href="#position-absolute绝对定位" aria-label="Permalink to &quot;position:absolute绝对定位&quot;">​</a></h3><p>没有定位父级时相对于html进行定位，有定位父级时相对于最近的定位父级进行定位</p><h4 id="基础特性-1" tabindex="-1">基础特性 <a class="header-anchor" href="#基础特性-1" aria-label="Permalink to &quot;基础特性&quot;">​</a></h4><ul><li>脱离文档流</li><li>提升元素层级</li></ul><h4 id="应用场景-1" tabindex="-1">应用场景： <a class="header-anchor" href="#应用场景-1" aria-label="Permalink to &quot;应用场景：&quot;">​</a></h4><p>通常配合相对定位使用（父相子绝）结合实际案例，如焦点图中的分页，翻页，视频网站中的 vip标签等</p><h3 id="position-fixed-固定定位" tabindex="-1">position:fixed 固定定位 <a class="header-anchor" href="#position-fixed-固定定位" aria-label="Permalink to &quot;position:fixed 固定定位&quot;">​</a></h3><p>元素的位置相对于浏览器窗口是固定位置。即使窗口是滚动的它也不会移动：</p><h4 id="基础特性总结" tabindex="-1">基础特性总结 <a class="header-anchor" href="#基础特性总结" aria-label="Permalink to &quot;基础特性总结&quot;">​</a></h4><ul><li>脱离文档流</li><li>提升元素层级</li></ul><h4 id="应用场景-2" tabindex="-1">应用场景： <a class="header-anchor" href="#应用场景-2" aria-label="Permalink to &quot;应用场景：&quot;">​</a></h4><p>相对于窗口定位的元素如弹窗、跟随滚动的导航、侧边栏</p><h3 id="postion-static静态定位" tabindex="-1">postion:static静态定位 <a class="header-anchor" href="#postion-static静态定位" aria-label="Permalink to &quot;postion:static静态定位&quot;">​</a></h3><p>表示“将元素放在文档布局流的默认位置，HTML 元素的默认值，即没有定位，遵循正常的文档流对象。</p><ul><li>常用于重置 定位属性</li><li>静态定位的元素不会受到 top, bottom, left, right影响。</li></ul><h2 id="定位元素的层级顺序" tabindex="-1">定位元素的层级顺序 <a class="header-anchor" href="#定位元素的层级顺序" aria-label="Permalink to &quot;定位元素的层级顺序&quot;">​</a></h2><p>元素的定位与文档流无关，所以它们可以覆盖页面上的其它元素 z-index属性指定了一个元素的堆叠顺序（哪个元素应该放在前面，或后面）</p><p><code>&lt;img src=&quot;定位的层级图例.jpg&quot; style=&quot;zoom:50%;&quot; /&gt;</code></p><ul><li>取值 <ul><li>auto(默认值) 堆叠顺序与父元素相等</li><li>数值：拥有更高堆叠顺序（数值越大）的元素总是会处于堆叠顺序较低的元素的前面。</li></ul></li><li>总结 <ul><li>提示：从父原则</li></ul></li></ul><h2 id="实现盒子居中的方法" tabindex="-1">实现盒子居中的方法 <a class="header-anchor" href="#实现盒子居中的方法" aria-label="Permalink to &quot;实现盒子居中的方法&quot;">​</a></h2><h3 id="方法一" tabindex="-1">方法一： <a class="header-anchor" href="#方法一" aria-label="Permalink to &quot;方法一：&quot;">​</a></h3><ul><li>实现思路：margin负值配合百分比</li></ul><h3 id="方法二" tabindex="-1">方法二： <a class="header-anchor" href="#方法二" aria-label="Permalink to &quot;方法二：&quot;">​</a></h3><ul><li><p>实现思路：left,right,top,bottom并用，配合margin：auto;</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">优点：不用去计算父盒子和子盒子的宽度和高度</span></span></code></pre></div></li><li><p>注意：ie低版本不兼容</p></li></ul><h2 id="定位对元素的影响" tabindex="-1">定位对元素的影响 <a class="header-anchor" href="#定位对元素的影响" aria-label="Permalink to &quot;定位对元素的影响&quot;">​</a></h2><ul><li>相对定位基本不改变元素本身的特性</li><li>绝对、固定定位 <ul><li>脱离文档流</li><li>提升元素层级</li><li>未定宽度的块元素适应内容</li><li>使行内元素生成块级框</li></ul></li><li>注意：定位并不是一种用来做主要页面布局的方式，主要用于管理和微调页面中的一个特殊项的位置。</li></ul><h2 id="定位与浮动的区别对比" tabindex="-1">定位与浮动的区别对比 <a class="header-anchor" href="#定位与浮动的区别对比" aria-label="Permalink to &quot;定位与浮动的区别对比&quot;">​</a></h2><ul><li>使元素脱离文档流的属性 <ul><li>Float:left; float:right；</li><li>position:absolute;</li><li>Position:fixed;</li></ul></li><li>表现上的区别 <ul><li>浮动元素： 使用float脱离文档流时，其他盒子会无视这个元素，但其他盒子内的文本、图片、表单标签依然会为这个元素让出位置，环绕在周围。</li><li>定位元素： 使用position脱离文档流的元素，其他盒子完全无视它，包括元素内部的文本、图片、表单标签</li><li>总结 <ul><li>不同点：浮动脱离文档流，不脱离文本流，定位元素既脱离文档流，又脱离文本流</li><li>相同点：宽高默认由内容撑开，生成块级框（可以设置width和height及所有盒模型属性等）</li></ul></li></ul></li></ul><h1 id="css-透明" tabindex="-1">CSS 透明 <a class="header-anchor" href="#css-透明" aria-label="Permalink to &quot;CSS 透明&quot;">​</a></h1><h2 id="学习目标-1" tabindex="-1">学习目标 <a class="header-anchor" href="#学习目标-1" aria-label="Permalink to &quot;学习目标&quot;">​</a></h2><ul><li>掌握透明常用属性</li><li>了解透明属性的兼容</li><li>能够实现背景透明内容不透明页面效果</li></ul><h3 id="rgba" tabindex="-1">rgba() <a class="header-anchor" href="#rgba" aria-label="Permalink to &quot;rgba()&quot;">​</a></h3><ul><li><p>语法： rgba(r,g,b,a)，</p></li><li></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">background:rgba(0,0,0,0.5)</span></span></code></pre></div><p>说明：r表示red,g表示green,b表示blue,a表示alpha透明度</p><ul><li><p>取值: r,g,b取值范围 0-255 a透明度，取值0-1 0完全透明 1完全不透明</p></li><li><p>使用说明：设置颜色的不透明度， 一般用于调整background-color、color、box-shadow等的不透明度。</p></li><li><p>兼容性：IE6、7、8【不支持】，IE9及以上版本和标准浏览器都支持</p></li></ul><h3 id="opacity" tabindex="-1">opacity <a class="header-anchor" href="#opacity" aria-label="Permalink to &quot;opacity&quot;">​</a></h3><ul><li>语法： opacity:0.5:</li><li>取值：0-1， 0表示全透明，1表示全不透明，0-1之间表示半透明</li><li>使用说明：设置opacity元素的所有后代元素会随着一起具有透明性， 一般用于调整图片或者模块的整体不透明度</li><li>兼容性：IE6、7、8【不支持】，IE9及以上版本和标准浏览器都支持</li></ul><h3 id="ie专属滤镜" tabindex="-1">IE专属滤镜 <a class="header-anchor" href="#ie专属滤镜" aria-label="Permalink to &quot;IE专属滤镜&quot;">​</a></h3><ul><li>语法：  filter:Alpha(opacity=x)</li><li>取值：x取值0-100</li><li>代码演示</li><li>兼容性：仅支持IE6、7、8、9，在IE10版本被废除</li><li>注意：在IE6、7、8中，设置了filter:Alpha的元素，其子元素为【相对定位】，可让子元素不透明</li></ul><h1 id="css块级格式化" tabindex="-1">CSS块级格式化 <a class="header-anchor" href="#css块级格式化" aria-label="Permalink to &quot;CSS块级格式化&quot;">​</a></h1><h2 id="学习目标-2" tabindex="-1">学习目标 <a class="header-anchor" href="#学习目标-2" aria-label="Permalink to &quot;学习目标&quot;">​</a></h2><ul><li>能够说出什么是BFC</li><li>什么条件下生成BFC</li><li>BFC解决的问题有哪些</li></ul><h2 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h2><p>BFC(Block Formatting Context)是Web页面中盒模型布局的CSS渲染模式——直译为&quot;块级格式化上下文&quot;。它是一个独立的渲染区域，只有Block-level box参与</p><p>它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。</p><h2 id="生成bfc的条件" tabindex="-1">生成BFC的条件 <a class="header-anchor" href="#生成bfc的条件" aria-label="Permalink to &quot;生成BFC的条件&quot;">​</a></h2><ul><li>w3c规范中的BFC定义：浮动元素和绝对定位元素，非块级盒子的块级容器（例如 inline-blocks, table-cells, 和 table-captions），以及overflow值不为“visible”的块级盒子，都会为他们的内容创建新的BFC（块级格式上下文）</li><li>根标签（html） float属性不为none position为absolute或fixed display为inline-block等 overflow不为visible</li></ul><h2 id="bfc渲染规则-特性" tabindex="-1">BFC渲染规则（特性） <a class="header-anchor" href="#bfc渲染规则-特性" aria-label="Permalink to &quot;BFC渲染规则（特性）&quot;">​</a></h2><ul><li>内部的Box会在垂直方向，一个接一个地放置</li><li>Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠</li><li>每个标签的左外边距与包含块（父级的内容区）的左边界相接触(从左向右), 即使浮动标签也如此。</li><li>BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此 <ul><li>BFC的区域不会与float box重叠。举例overflow:hidden display:inline-block;</li><li>计算BFC的高度时，浮动元素也参与计算，浮动标签可以撑开bfc盒子(设置了浮动或者行内块)的高度，用于清除浮动</li></ul></li></ul><h2 id="bfc解决的问题" tabindex="-1">BFC解决的问题 <a class="header-anchor" href="#bfc解决的问题" aria-label="Permalink to &quot;BFC解决的问题&quot;">​</a></h2><ul><li>清除浮动</li><li>防止margin重叠</li><li>避免文字环绕</li><li>自适应两栏布局或者三栏布局 <ul><li>两栏：左边栏浮动设置固定宽，右边栏不设宽设置overflow:hidden,自动占满父盒子剩余大小</li><li>三栏：左边栏设置左浮动，右边栏设置右浮动，中间栏不设置宽度设置overflow:hidden</li></ul></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;style type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    html,body{</span></span>
<span class="line"><span style="color:#A6ACCD;">            width: 100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">            height: 100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">        .out{</span></span>
<span class="line"><span style="color:#A6ACCD;">            background: blue;</span></span>
<span class="line"><span style="color:#A6ACCD;">            width: 100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">            height: 100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        .f{</span></span>
<span class="line"><span style="color:#A6ACCD;">            float: left;</span></span>
<span class="line"><span style="color:#A6ACCD;">            margin-right: 20px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            height: 100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">            background: red;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        .r{</span></span>
<span class="line"><span style="color:#A6ACCD;">            overflow: auto;</span></span>
<span class="line"><span style="color:#A6ACCD;">            height: 100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">            background: yellow;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;out&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;f&quot;&gt;浮动元素&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;r&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span></code></pre></div><p>避免文字环绕</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;style type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        .out{</span></span>
<span class="line"><span style="color:#A6ACCD;">            width: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            height: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            border: 1px solid blue;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        .f{</span></span>
<span class="line"><span style="color:#A6ACCD;">            width: 50px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            height: 50px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            background: red;</span></span>
<span class="line"><span style="color:#A6ACCD;">            float: left;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        .inner{</span></span>
<span class="line"><span style="color:#A6ACCD;">            overflow: auto;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/style&gt;</span></span></code></pre></div>`,75),t=[e];function o(p,r,c,h,d,u){return l(),s("div",null,t)}const A=a(i,[["render",o]]);export{b as __pageData,A as default};
