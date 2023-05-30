import{_ as a,c as n,o as l,V as s}from"./chunks/framework.9c1268ca.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"firstStage/firstStagefourteen.md","filePath":"firstStage/firstStagefourteen.md"}'),e={name:"firstStage/firstStagefourteen.md"},i=s(`<h2 id="css3-媒体查询" tabindex="-1">CSS3 媒体查询 <a class="header-anchor" href="#css3-媒体查询" aria-label="Permalink to &quot;CSS3 媒体查询&quot;">​</a></h2><h3 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h3><ul><li>media type(媒体类型)是css 2中的一个非常有用的属性，通过media type我们可以对不同的设备指定特定的样式，从而实现更丰富的界面。 media query(媒体查询)是对media type的一种增强，是CSS 3的重要内容之一</li><li>使用媒体查询，可以针对设备特性在不改变页面内容的情况下，为特定的输出设备输出特定的效果。</li></ul><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h3><h4 id="样式表内引入媒体查询" tabindex="-1">样式表内引入媒体查询 <a class="header-anchor" href="#样式表内引入媒体查询" aria-label="Permalink to &quot;样式表内引入媒体查询&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">- 语法示例： @media  媒体类型 and|not|only  (媒体特性表达式) {   CSS-Code; }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- 媒体类型(media type)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  - all所有设备；</span></span>
<span class="line"><span style="color:#A6ACCD;">    screen 用于电脑屏幕，平板电脑，智能手机等；</span></span>
<span class="line"><span style="color:#A6ACCD;">    print 用于打印机和打印预览； </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- 设备特性(media feature)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  - width视口宽度；height视口高度；</span></span>
<span class="line"><span style="color:#A6ACCD;">    device-width设备宽度、device-height高度；</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  - 横屏：  orientation:landscape  竖屏：orientation:portrait</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  - </span></span>
<span class="line"><span style="color:#A6ACCD;">        代码示例： </span></span>
<span class="line"><span style="color:#A6ACCD;">        /* @media screen and (device-height:500px){</span></span>
<span class="line"><span style="color:#A6ACCD;">                body{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    background:red;</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">                div{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    column-count:3;</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            } */</span></span>
<span class="line"><span style="color:#A6ACCD;">            /* 横屏 orientation:landscape   竖屏 orientation:portrait */</span></span>
<span class="line"><span style="color:#A6ACCD;">        @media screen and (orientation:portrait){</span></span>
<span class="line"><span style="color:#A6ACCD;">                body{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    background:red;</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">                div{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    column-count:3;</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- 操作符</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  - and(与、和)</span></span>
<span class="line"><span style="color:#A6ACCD;">    not: not是用来排除掉某些特定的设备的，比如 @media not print（非打印设备)</span></span>
<span class="line"><span style="color:#A6ACCD;">    only: 用来定某种特别的媒体类型。</span></span>
<span class="line"><span style="color:#A6ACCD;">  - （以上逐个）</span></span></code></pre></div><h4 id="在不同的媒体上使用不同的样式文件" tabindex="-1">在不同的媒体上使用不同的样式文件 <a class="header-anchor" href="#在不同的媒体上使用不同的样式文件" aria-label="Permalink to &quot;在不同的媒体上使用不同的样式文件&quot;">​</a></h4><ul><li><p>语法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;link rel=&quot;stylesheet&quot; media=&quot;mediatype and|not|only (media feature)&quot; href=&quot;mystylesheet.css&quot;&gt;</span></span></code></pre></div></li><li><p>代码示例</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;link rel=&quot;stylesheet&quot; href=&quot;lt600.css&quot; media=&quot;screen and (max-width:600px)&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;link rel=&quot;stylesheet&quot; href=&quot;gt600.css&quot; media=&quot;screen and (min-width:601px) and (max-width:1000px)&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;link rel=&quot;stylesheet&quot; href=&quot;gt1000.css&quot; media=&quot;screen and (min-width:1001px)&quot;&gt;</span></span></code></pre></div></li></ul><h2 id="css3-弹性盒" tabindex="-1">CSS3 弹性盒 <a class="header-anchor" href="#css3-弹性盒" aria-label="Permalink to &quot;CSS3 弹性盒&quot;">​</a></h2><h3 id="概述-1" tabindex="-1">概述 <a class="header-anchor" href="#概述-1" aria-label="Permalink to &quot;概述&quot;">​</a></h3><p>Flex布局主要思想是提供一个更加有效的方式制定、调整和分布一个容器里的项目布局。 使容器有能力改变项目的大小、排列方向、对齐等，以最佳方式填充可用空间（因此可以适应设备屏幕大小的变化）</p><h3 id="相关概念" tabindex="-1">相关概念 <a class="header-anchor" href="#相关概念" aria-label="Permalink to &quot;相关概念&quot;">​</a></h3><ul><li>Flex容器：设置值为 flex 或 inline-flex ，该容器会成为 Flex容器 Flex项目：该容器下的子元素，包括 文本节点，伪元素。 主轴 侧轴 主（侧）轴起点 主（侧）轴终点</li><li>注 <ul><li>弹性容器外及弹性子元素内是正常渲染的。弹性盒子只定义了弹性子元素如何在弹性容器内布局</li><li>设为Flex布局以后，容器的 column-*将失效，项目的float、clear和vertical-align属性将失效。</li></ul></li></ul><h3 id="容器属性" tabindex="-1">容器属性 <a class="header-anchor" href="#容器属性" aria-label="Permalink to &quot;容器属性&quot;">​</a></h3><h4 id="flex-direction" tabindex="-1">flex-direction <a class="header-anchor" href="#flex-direction" aria-label="Permalink to &quot;flex-direction&quot;">​</a></h4><ul><li>作用：描述弹性盒项目的排列方向</li><li>取值 <ul><li>row：横向从左到右排列（左对齐），默认的排列方式。 row-reverse：反转横向排列（右对齐，从后往前排，最后一项排在最前面。 column：纵向排列。 column-reverse：反转纵向排列，从后往前排，最后一项排在最上面。</li></ul></li></ul><h4 id="justify-content" tabindex="-1">justify-content <a class="header-anchor" href="#justify-content" aria-label="Permalink to &quot;justify-content&quot;">​</a></h4><ul><li>作用：弹性项沿着弹性容器的主轴线对齐</li><li>取值 <ul><li>flex-start：弹性项目向行头紧挨着填充。这个是默认值。 flex-end：弹性项目向行尾紧挨着填充。 center：弹性项目居中紧挨着填充。 space-between：弹性项目平均分布在该行上,相邻项目的间隔相等 space-around：弹性项目平均分布在该行上，两边留有一半的间隔空间 space-evenly: 弹性项目平均分布在该行上,相邻项目的间隔，项目与容器之间空间相等,</li></ul></li></ul><h4 id="align-items" tabindex="-1">align-items <a class="header-anchor" href="#align-items" aria-label="Permalink to &quot;align-items&quot;">​</a></h4><ul><li>作用：设置弹性盒子元素在侧轴（纵轴）方向上的对齐方式</li><li>取值 <ul><li>flex-start：侧轴起始位置对齐</li><li>flex-end：侧轴末端位置对齐</li><li>center：项目沿侧轴居中紧挨着填充。</li><li>baseline：基线对齐。</li><li>stretch：如果指定侧轴大小的属性值为&#39;auto&#39;，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸</li></ul></li></ul><h4 id="flex-wrap" tabindex="-1">flex-wrap <a class="header-anchor" href="#flex-wrap" aria-label="Permalink to &quot;flex-wrap&quot;">​</a></h4><ul><li>作用：指定弹性盒子的子元素换行方式</li><li>取值 <ul><li>nowrap - 默认， 弹性容器为单行。该情况下弹性子项可能会溢出容器。 wrap - 弹性容器为多行。 wrap-reverse -反转 wrap 排列。</li></ul></li></ul><h4 id="align-content" tabindex="-1">align-content <a class="header-anchor" href="#align-content" aria-label="Permalink to &quot;align-content&quot;">​</a></h4><ul><li>作用：多根轴线的对齐方式</li><li>取值 <ul><li>stretch - 默认。各行将会伸展以占用剩余的空间。 flex-start - 各行向弹性盒容器的起始位置堆叠。 flex-end - 各行向弹性盒容器的结束位置堆叠。 center -各行向弹性盒容器的中间位置堆叠。 space-between -各行在弹性盒容器中平均分布。 space-around - 各行在弹性盒容器中平均分布，两端保留子元素与子元素之间间距大小的一半。</li></ul></li><li>注意：如果项目只有一根轴线，该属性不起作用，所以添加此属性需要设置盒子换行</li></ul><h3 id="弹性盒项目属性" tabindex="-1">弹性盒项目属性 <a class="header-anchor" href="#弹性盒项目属性" aria-label="Permalink to &quot;弹性盒项目属性&quot;">​</a></h3><h4 id="order" tabindex="-1">order: <a class="header-anchor" href="#order" aria-label="Permalink to &quot;order:&quot;">​</a></h4><ul><li>作用：用整数值来定义排列顺序，</li><li>数值小的排在前面。可以为负值。</li></ul><h4 id="align-self-属性" tabindex="-1">align-self 属性 <a class="header-anchor" href="#align-self-属性" aria-label="Permalink to &quot;align-self 属性&quot;">​</a></h4><ul><li>用于设置弹性元素自身在侧轴（纵轴）方向上的对齐方式</li><li>auto：为元素的父元素的&#39;align-items&#39;值， flex-start：弹性盒子元素侧轴起始边对齐。 flex-end：弹性盒子元素侧轴结束对齐 center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。 baseline：该值将参与基线对齐。 stretch：如果指定侧轴大小的属性值为&#39;auto&#39;，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸</li></ul><h4 id="flex" tabindex="-1">flex <a class="header-anchor" href="#flex" aria-label="Permalink to &quot;flex&quot;">​</a></h4><ul><li>作用：用于指定弹性子元素如何分配空间。 flex是 flex-grow、flex-shrink 和 flex-basis 属性的简写属性</li></ul><h5 id="flex-grow" tabindex="-1">flex-grow <a class="header-anchor" href="#flex-grow" aria-label="Permalink to &quot;flex-grow&quot;">​</a></h5><ul><li>作用：设置或检索弹性盒子的扩展比率。</li><li>取值 <ul><li>默认值是 0，表示即使用剩余空间也不扩展</li><li>不带单位的数值</li></ul></li><li>注意：当容器有剩余空间时有效</li></ul><h5 id="flex-basis" tabindex="-1">flex-basis <a class="header-anchor" href="#flex-basis" aria-label="Permalink to &quot;flex-basis&quot;">​</a></h5><ul><li>定义弹性盒子元素的默认基准值</li><li>取值 <ul><li>auto 默认值</li><li>number一个长度单位或者一个百分比</li></ul></li><li>注意：与width同时存在时覆盖width值参与剩余空间计算</li><li>代码演示</li></ul><h5 id="flex-shrink" tabindex="-1">flex-shrink <a class="header-anchor" href="#flex-shrink" aria-label="Permalink to &quot;flex-shrink&quot;">​</a></h5><ul><li>定义弹性盒子元素的收缩比率</li><li>flex 元素仅在默认宽度之和大于容器的时候才会发生收缩</li><li>默认值为1</li><li>注：如果元素不是弹性盒对象的元素，则以上属性不起作用。</li></ul><h3 id="calc概述" tabindex="-1">Calc概述： <a class="header-anchor" href="#calc概述" aria-label="Permalink to &quot;Calc概述：&quot;">​</a></h3><p>calc 是英文单词 calculate( 计算 ) 的缩写，是 CSS3 的一个新增的功能</p><p>calc() 用于动态计算长度值。</p><h4 id="语法-1" tabindex="-1">语法： <a class="header-anchor" href="#语法-1" aria-label="Permalink to &quot;语法：&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.box{ width: calc(100% - 100px);</span></span></code></pre></div><h4 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h4><p>任何长度值都可以使用calc()函数进行计算； calc()函数支持 &quot;+&quot;, &quot;-&quot;, &quot;*&quot;, &quot;/&quot; 运算； calc()函数使用标准的数学运算优先级规则；</p><p>运算符前后都需要保留一个空格，例如：width: calc(100% - 10px)；</p><h4 id="css3过渡" tabindex="-1">css3过渡： <a class="header-anchor" href="#css3过渡" aria-label="Permalink to &quot;css3过渡：&quot;">​</a></h4><h6 id="transition-transition-property-transition-duration-transition-timing-function-transition-delay" tabindex="-1">transition:transition-property transition-duration transition-timing-function transition-delay <a class="header-anchor" href="#transition-transition-property-transition-duration-transition-timing-function-transition-delay" aria-label="Permalink to &quot;transition:transition-property   transition-duration  transition-timing-function  transition-delay&quot;">​</a></h6><ul><li><h6 id="transition-property-all-none-property" tabindex="-1">transition-property:all/none/property <a class="header-anchor" href="#transition-property-all-none-property" aria-label="Permalink to &quot;transition-property:all/none/property&quot;">​</a></h6><h6 id="width-height-background-color-opacity-有具体值-可以设置" tabindex="-1">width height background-color opacity (有具体值，可以设置) <a class="header-anchor" href="#width-height-background-color-opacity-有具体值-可以设置" aria-label="Permalink to &quot;width  height   background-color  opacity  (有具体值，可以设置)&quot;">​</a></h6><p>​ display:none/block(不可以设置，浏览器无法解析到具体值，没法实现过渡效果)</p></li><li><h6 id="transition-duration-过渡时间-time-以秒或者ms为单位" tabindex="-1">transition-duration:过渡时间 time 以秒或者ms为单位 <a class="header-anchor" href="#transition-duration-过渡时间-time-以秒或者ms为单位" aria-label="Permalink to &quot;transition-duration:过渡时间   time           以秒或者ms为单位&quot;">​</a></h6></li><li><h6 id="transition-timing-function" tabindex="-1">transition-timing-function: <a class="header-anchor" href="#transition-timing-function" aria-label="Permalink to &quot;transition-timing-function:&quot;">​</a></h6><p>linear(默认)：规定过渡从开始到结束以匀速的方式进行过渡。</p><p>ease:规定过渡效果以慢速开始，中间变快，以慢速结束。</p><p>ease-in: 规定以慢速开始。</p><p>ease-out:规定以慢速结束。</p><p>ease-in-out: 规定过渡效果以慢速开始，慢速结束。</p></li><li><h6 id="transition-delay-延迟时间-time-单位s或者ms" tabindex="-1">transition-delay:延迟时间 time 单位s或者ms <a class="header-anchor" href="#transition-delay-延迟时间-time-单位s或者ms" aria-label="Permalink to &quot;transition-delay:延迟时间   time    单位s或者ms&quot;">​</a></h6></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">transition:width 1s linear 0.5s,height 1s linear 0.5s;</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">注意：过渡效果最好不要写在滑动事件里。</span></span>
<span class="line"><span style="color:#A6ACCD;">transition:all 1s linear 0.5s</span></span></code></pre></div><h5 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h5>`,51),t=[i];function o(r,p,c,h,d,u){return l(),n("div",null,t)}const m=a(e,[["render",o]]);export{f as __pageData,m as default};