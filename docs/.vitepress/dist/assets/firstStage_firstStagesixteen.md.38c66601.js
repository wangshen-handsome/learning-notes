import{_ as a,c as s,o as n,V as l}from"./chunks/framework.76e34d43.js";const h=JSON.parse('{"title":"一阶段 | 第十六天","description":"","frontmatter":{"layout":"firstStagesixteen","title":"一阶段 | 第十六天"},"headers":[],"relativePath":"firstStage/firstStagesixteen.md","filePath":"firstStage/firstStagesixteen.md"}'),e={name:"firstStage/firstStagesixteen.md"},p=l(`<h2 id="animation动画" tabindex="-1">animation动画 <a class="header-anchor" href="#animation动画" aria-label="Permalink to &quot;animation动画&quot;">​</a></h2><h3 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h3><p>通过 CSS3，我们能够创建动画,可通过设置多个节点来精确控制一个或一组动画，常用来实现复杂的动画效果。</p><p>相比较于过渡，动画更加强大</p><p>如果要在 CSS3 中创建动画，需要使用 @keyframes 规则</p><h3 id="keyframes" tabindex="-1">@keyframes <a class="header-anchor" href="#keyframes" aria-label="Permalink to &quot;@keyframes&quot;">​</a></h3><p>关键帧 @keyframes 规则通过. 在动画序列中定义关键帧的样式来控制CSS动画序列中的中间步骤</p><p>语法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">@keyframes 动画名{</span></span>
<span class="line"><span style="color:#A6ACCD;">	动画关键步骤{</span></span>
<span class="line"><span style="color:#A6ACCD;">		样式描述</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>每个 <code>@keyframes</code> 规则包含多个关键帧，也就是一段样式块语句，每个关键帧有一个百分比值作为名称，代表在动画进行中，在哪个阶段触发这个帧所包含的样式。</p><p>例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">@keyframes slidein {</span></span>
<span class="line"><span style="color:#A6ACCD;">  from {</span></span>
<span class="line"><span style="color:#A6ACCD;">   left:0;</span></span>
<span class="line"><span style="color:#A6ACCD;">  } </span></span>
<span class="line"><span style="color:#A6ACCD;">  to {</span></span>
<span class="line"><span style="color:#A6ACCD;">    left:50px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>from,to表示开始、结束状态，也可以使用0%,100%定义</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">@keyframes slidein {</span></span>
<span class="line"><span style="color:#A6ACCD;">  0% {</span></span>
<span class="line"><span style="color:#A6ACCD;">    left:0; </span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  50%{</span></span>
<span class="line"><span style="color:#A6ACCD;">	left:50px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  100% {</span></span>
<span class="line"><span style="color:#A6ACCD;">    left:100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>注：</p><ul><li>如果一个关键帧规则没有指定动画的开始或结束状态，浏览器将使用元素的现有样式作为起始/结束状态</li><li>如果某一个关键帧出现了重复的定义，且重复的关键帧中的 CSS 属性值不同，则以最后一次定义的属性为准</li></ul><h3 id="animation-name" tabindex="-1">animation-name <a class="header-anchor" href="#animation-name" aria-label="Permalink to &quot;animation-name&quot;">​</a></h3><ul><li>作用：指定元素应用动画系列，每个名称代表一个由@keyframes定义的动画序列</li><li>取值 <ul><li>默认 none 规定无动画效果</li><li>@keyframes定义动画名称</li></ul></li></ul><h3 id="animation-duration-属性" tabindex="-1">animation-duration 属性 <a class="header-anchor" href="#animation-duration-属性" aria-label="Permalink to &quot;animation-duration 属性&quot;">​</a></h3><ul><li>作用：定义动画持续的时间需要多少秒或毫秒完成</li><li>取值 <ul><li>单位：以秒或毫秒计</li><li>默认值为0，需要设置该属性，否则不会播放动画</li></ul></li></ul><h3 id="animation-timing-function" tabindex="-1">animation-timing-function <a class="header-anchor" href="#animation-timing-function" aria-label="Permalink to &quot;animation-timing-function&quot;">​</a></h3><ul><li>作用：定义动画的时间函数</li><li>取值 <ul><li>● linear 动画从头到尾的速度是相同的。 ● ease 默认值。动画以低速开始，然后加快，在结束前变慢。 ● ease-in 动画以低速开始。 ● ease-out 动画以低速结束。 ● ease-in-out 动画以低速开始和结束。</li></ul></li></ul><h3 id="animation-delay" tabindex="-1">animation-delay <a class="header-anchor" href="#animation-delay" aria-label="Permalink to &quot;animation-delay&quot;">​</a></h3><ul><li><p>作用：定义置动画在启动前的延迟间隔</p></li><li><p>取值</p><ul><li>以秒或毫秒计。 <ul><li>以秒或毫秒计。默认值是 0</li></ul></li><li>默认值是 0</li><li>允许负值，（-2s 使动画马上开始，但跳过 2 秒进入动画)</li></ul></li><li><p>代码演示</p></li><li><p>学员练习+讲师巡班：课上代码</p><h3 id="animation-iteration-count" tabindex="-1">animation-iteration-count <a class="header-anchor" href="#animation-iteration-count" aria-label="Permalink to &quot;animation-iteration-count&quot;">​</a></h3></li><li><p>作用：定义动画播放次数</p></li><li><p>取值</p><ul><li>● n 定义动画播放次数的数值。 ● infinite 规定动画应该无限次播放。</li></ul></li></ul><h3 id="animation-direction" tabindex="-1">animation-direction <a class="header-anchor" href="#animation-direction" aria-label="Permalink to &quot;animation-direction&quot;">​</a></h3><ul><li>作用：定义动画运动的方向</li><li>取值 <ul><li>normal：正常方向</li><li>reverse：反方向运行</li><li>alternate：动画先正常运行再反方向运行，并持续交替运行</li><li>alternate-reverse：动画先反运行再正方向运行，并持续交替运行</li></ul></li></ul><h3 id="animation-play-state" tabindex="-1">animation-play-state <a class="header-anchor" href="#animation-play-state" aria-label="Permalink to &quot;animation-play-state&quot;">​</a></h3><ul><li>作用：检索或设置对象动画的状态</li><li>取值： running:运动 paused: 暂停</li></ul><h2 id="animation-fill-mode" tabindex="-1">animation-fill-mode <a class="header-anchor" href="#animation-fill-mode" aria-label="Permalink to &quot;animation-fill-mode&quot;">​</a></h2><p>规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式</p><ul><li><p>取值</p></li><li><p>​ forwards向前 动画结束之后停在结束帧状态</p><p>​ backwards向后 动画开始之前停在开始帧状态</p><p>​ both以上两者</p></li></ul><h3 id="animation简写" tabindex="-1">animation简写 <a class="header-anchor" href="#animation简写" aria-label="Permalink to &quot;animation简写&quot;">​</a></h3><p><code>animation</code> 属性用来指定一组或多组动画，每组之间用逗号相隔。</p><ul><li><p>值与值空格隔开</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">animation: name duration timing-function delay iteration-count direction fill-mode play-state;</span></span></code></pre></div></li><li><p>默认值：none 0 ease 0 1 normal</p></li><li><p>多组值语法：每组之间用逗号相隔</p></li><li><p>注意：两个时间，前面时间持续时间，后面的时间延迟时间</p></li></ul><h2 id="transform-转换" tabindex="-1">transform 转换 <a class="header-anchor" href="#transform-转换" aria-label="Permalink to &quot;transform 转换&quot;">​</a></h2><h3 id="概述-1" tabindex="-1">概述 <a class="header-anchor" href="#概述-1" aria-label="Permalink to &quot;概述&quot;">​</a></h3><p>transform 属性向元素应用 2D 或 3D 转换。 该属性允许我们对元素进行平移、旋转、缩放或倾斜。 初始值是none。</p><h3 id="_2d转换" tabindex="-1">2D转换 <a class="header-anchor" href="#_2d转换" aria-label="Permalink to &quot;2D转换&quot;">​</a></h3><h4 id="概述-2" tabindex="-1">概述 <a class="header-anchor" href="#概述-2" aria-label="Permalink to &quot;概述&quot;">​</a></h4><ul><li><p>什么是2d转换</p><p>使用CSS3 2D变换功能，可以对二维空间中的元素执行基本的变换操作，例如移动，旋转，缩放和倾斜。</p><p>注：变换后的元素不会影响周围的元素，但可以像绝对定位的元素一样将它们重叠。但是，变换后的元素在其默认位置（未变换）仍会在布局中占用空间。</p></li></ul><h3 id="_2d转换的方法" tabindex="-1">2d转换的方法 <a class="header-anchor" href="#_2d转换的方法" aria-label="Permalink to &quot;2d转换的方法&quot;">​</a></h3><h4 id="translate-x-y" tabindex="-1">translate(x,y) <a class="header-anchor" href="#translate-x-y" aria-label="Permalink to &quot;translate(x,y)&quot;">​</a></h4><ul><li>作用：沿X,Y轴位移，重新定位元素的坐标</li><li>取值: <ul><li>px</li><li>百分比（强调相对于元素本身计算）</li><li>说明：允许负值，正值默认向右向下，负值向左向上</li></ul></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;wrap&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;div class=&quot;box&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span></code></pre></div><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">wrap</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1000px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">300px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">5px</span><span style="color:#A6ACCD;"> solid </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transition</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0.5s</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">wrap</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">nth-child</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">):</span><span style="color:#C792EA;">hover</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;">translate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">50px</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">wrap</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">nth-child</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">):</span><span style="color:#C792EA;">hover</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;">translate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">-100px</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">-50px</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">   </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">wrap</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">nth-child</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">):</span><span style="color:#C792EA;">hover</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;">translate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">   </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">wrap</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">nth-child</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">):</span><span style="color:#C792EA;">hover</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;">translateY</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translateX</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h4 id="scale-x-y" tabindex="-1">scale(x,y) <a class="header-anchor" href="#scale-x-y" aria-label="Permalink to &quot;scale(x,y)&quot;">​</a></h4><ul><li>作用:沿x,y轴缩放元素大小</li><li>取值 <ul><li>默认值为1；</li><li>使用0~1之间的值缩小元素， 使用超过1的值放大元素。</li></ul></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.wrap{</span></span>
<span class="line"><span style="color:#A6ACCD;">    width:1000px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    margin:0 auto;</span></span>
<span class="line"><span style="color:#A6ACCD;">    height:300px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    border:5px solid #000; </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">.box { </span></span>
<span class="line"><span style="color:#A6ACCD;">    width: 100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    height: 100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    background-color: red; </span></span>
<span class="line"><span style="color:#A6ACCD;">    transition:0.5s; </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">/* 选择第一个wrap鼠标滑过时，它内部的.box */</span></span>
<span class="line"><span style="color:#A6ACCD;">.wrap:nth-child(1):hover .box{</span></span>
<span class="line"><span style="color:#A6ACCD;">	transform:scale(2,0.5);</span></span>
<span class="line"><span style="color:#A6ACCD;">}   </span></span>
<span class="line"><span style="color:#A6ACCD;">.wrap:nth-child(2):hover .box{</span></span>
<span class="line"><span style="color:#A6ACCD;">	transform:scale(2);</span></span>
<span class="line"><span style="color:#A6ACCD;">}    </span></span>
<span class="line"><span style="color:#A6ACCD;">.wrap:nth-child(3):hover .box{</span></span>
<span class="line"><span style="color:#A6ACCD;">	transform:scaleY(2);</span></span>
<span class="line"><span style="color:#A6ACCD;">}  </span></span>
<span class="line"><span style="color:#A6ACCD;">.wrap:nth-child(4):hover .box{</span></span>
<span class="line"><span style="color:#A6ACCD;">	transform:scaleX(-2);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h4 id="skew-x-y" tabindex="-1">skew(x,y) <a class="header-anchor" href="#skew-x-y" aria-label="Permalink to &quot;skew(x,y)&quot;">​</a></h4><ul><li>作用：沿x，y轴倾斜元素</li><li>语法： skew(x,y) 水平方向和垂直方向同时倾斜 skewX(x) 仅水平方向（X轴）倾斜 skewY(Y) 仅垂直方向（Y轴）倾斜</li><li>取值：角度单位deg</li></ul><div class="language-css3"><button title="Copy Code" class="copy"></button><span class="lang">css3</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.wrap{</span></span>
<span class="line"><span style="color:#A6ACCD;">    width:1000px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    margin:0 auto;</span></span>
<span class="line"><span style="color:#A6ACCD;">    height:300px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    border:5px solid #000; </span></span>
<span class="line"><span style="color:#A6ACCD;">} </span></span>
<span class="line"><span style="color:#A6ACCD;">.box {</span></span>
<span class="line"><span style="color:#A6ACCD;">    width: 100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    height: 100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    background-color: red; </span></span>
<span class="line"><span style="color:#A6ACCD;">    transition:0.5s;</span></span>
<span class="line"><span style="color:#A6ACCD;">} </span></span>
<span class="line"><span style="color:#A6ACCD;">.wrap:nth-child(1):hover .box{</span></span>
<span class="line"><span style="color:#A6ACCD;">    /* transform:skew(30deg); */</span></span>
<span class="line"><span style="color:#A6ACCD;">    transform:skew(-30deg);</span></span>
<span class="line"><span style="color:#A6ACCD;">}   </span></span>
<span class="line"><span style="color:#A6ACCD;">.wrap:nth-child(2):hover .box{</span></span>
<span class="line"><span style="color:#A6ACCD;">	transform:skew(30deg,10deg);</span></span>
<span class="line"><span style="color:#A6ACCD;">} </span></span>
<span class="line"><span style="color:#A6ACCD;">.wrap:nth-child(3):hover .box{</span></span>
<span class="line"><span style="color:#A6ACCD;">	transform:skewX(30deg);</span></span>
<span class="line"><span style="color:#A6ACCD;">}   </span></span>
<span class="line"><span style="color:#A6ACCD;">.wrap:nth-child(4):hover .box{</span></span>
<span class="line"><span style="color:#A6ACCD;">	transform:skewY(30deg);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h4 id="rotate-angle" tabindex="-1">rotate( angle ) <a class="header-anchor" href="#rotate-angle" aria-label="Permalink to &quot;rotate( angle )&quot;">​</a></h4><ul><li>作用： 定义2d旋转</li><li>取值 <ul><li>角度，单位deg</li><li>正数表示顺时针旋转，负数表示逆时针旋转</li></ul></li></ul><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transition</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0.5s</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">wrap</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">nth-child</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">):</span><span style="color:#C792EA;">hover</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;">rotate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">30deg</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">wrap</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">nth-child</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">):</span><span style="color:#C792EA;">hover</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;">rotate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">-30deg</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="转换基点" tabindex="-1">转换基点 <a class="header-anchor" href="#转换基点" aria-label="Permalink to &quot;转换基点&quot;">​</a></h3><p>概述：transform-origin属性 定义变形原点（基点）</p><p>语法：</p><p>transform-origin：水平 垂直</p><p>取值</p><ul><li>百分比</li><li>px</li><li>关键字 <ul><li>水平：left center right 垂直：top center bottom</li></ul></li><li>说明： 两个空格隔开的值，分别表示x,y轴的原点 一个值时，另一个值默认center</li></ul><h3 id="_3d变换" tabindex="-1">3d变换 <a class="header-anchor" href="#_3d变换" aria-label="Permalink to &quot;3d变换&quot;">​</a></h3><h4 id="什么是3d转换" tabindex="-1">什么是3d转换 <a class="header-anchor" href="#什么是3d转换" aria-label="Permalink to &quot;什么是3d转换&quot;">​</a></h4><p>定义元素在三维空间移动、缩放、旋转</p><h3 id="_3d转换的方法" tabindex="-1">3d转换的方法 <a class="header-anchor" href="#_3d转换的方法" aria-label="Permalink to &quot;3d转换的方法&quot;">​</a></h3><h4 id="rotatex-angle" tabindex="-1">rotateX(angle) <a class="header-anchor" href="#rotatex-angle" aria-label="Permalink to &quot;rotateX(angle)&quot;">​</a></h4><ul><li>作用：沿着 X 轴旋转。</li><li>取值 <ul><li>角度：单位deg</li><li>正值顺时针，负值逆时针</li></ul></li></ul><h4 id="perspective属性-视距-600px-2000px" tabindex="-1">perspective属性(视距) (600px-2000px) <a class="header-anchor" href="#perspective属性-视距-600px-2000px" aria-label="Permalink to &quot;perspective属性(视距)   (600px-2000px)&quot;">​</a></h4><ul><li>作用：定义 3D 元素距视图的距离, 用来设置用户和元素3D空间Z平面之间的距离</li><li>取值 <ul><li>number 元素距离视图的距离，以像素计。 none 默认值。与 0 相同。不设置透视。</li></ul></li><li>注意：当为元素定义 perspective 属性时，其子元素会获得透视效果，而不是元素本身</li></ul><h4 id="rotatey-angle" tabindex="-1">rotateY(angle) <a class="header-anchor" href="#rotatey-angle" aria-label="Permalink to &quot;rotateY(angle)&quot;">​</a></h4><ul><li>作用：沿着 y 轴旋转。</li><li>取值 <ul><li>角度：单位deg</li><li>正值顺时针，负值逆时针</li></ul></li><li>代码演示</li></ul><h4 id="rotatez-angle" tabindex="-1">rotateZ(angle) <a class="header-anchor" href="#rotatez-angle" aria-label="Permalink to &quot;rotateZ(angle)&quot;">​</a></h4><ul><li>作用： 沿着 Z 轴旋转。</li><li>取值 <ul><li>角度：单位deg</li><li>正值顺时针，负值逆时针</li></ul></li><li>代码演示</li></ul><h4 id="translatez-z" tabindex="-1">translateZ( z ) <a class="header-anchor" href="#translatez-z" aria-label="Permalink to &quot;translateZ( z )&quot;">​</a></h4><ul><li>作用：沿Z轴位移</li><li>取值 <ul><li>px</li><li>不允许百分比值</li></ul></li><li>代码演示</li></ul><h4 id="scalez-z" tabindex="-1">scaleZ( z ) <a class="header-anchor" href="#scalez-z" aria-label="Permalink to &quot;scaleZ( z )&quot;">​</a></h4><ul><li>作用：沿Z轴缩放</li><li>取值 <ul><li>默认值为1</li><li>使用0~1之间的值缩小元素， 使用超过1的值放大元素。</li></ul></li></ul><h3 id="transform-style" tabindex="-1">transform-style <a class="header-anchor" href="#transform-style" aria-label="Permalink to &quot;transform-style&quot;">​</a></h3><p>指定嵌套元素是怎样在三维空间中呈现</p><p>取值：</p><ul><li>flat子元素将不保留其 3D 位置。</li><li>preserve-3d子元素将保留其 3D 位置。</li><li>注 <ul><li>具有两个作用，首先使子元素具有透视效果，其次使子元素保留父元素的3D位置</li><li>如果不需要嵌套3D元素，就不需要这个属性</li></ul></li></ul><h3 id="animate动画库" tabindex="-1">animate动画库 <a class="header-anchor" href="#animate动画库" aria-label="Permalink to &quot;animate动画库&quot;">​</a></h3><h4 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h4><p>animate.css 是一个来自国外的 CSS3 动画库，它预设了抖动（shake）、闪烁（flash）、弹跳（bounce）、翻转（flip）、旋转（rotateIn/rotateOut）、淡入淡出（fadeIn/fadeOut）等多达 60 多种动画效果，几乎包含了所有常见的动画效果。借助 animate.css 能够很方便、快速的制作 CSS3 动画效果</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">使用动画库不仅可以提升效率，也可以成为我们学习定义各种类型动画的一种方式</span></span></code></pre></div><h4 id="地址" tabindex="-1">地址： <a class="header-anchor" href="#地址" aria-label="Permalink to &quot;地址：&quot;">​</a></h4><p><a href="https://animate.style/" target="_blank" rel="noreferrer">https://animate.style/</a></p><p><a href="https://daneden.github.io/animate.css/" target="_blank" rel="noreferrer">https://daneden.github.io/animate.css/</a></p><h4 id="兼容" tabindex="-1">兼容 <a class="header-anchor" href="#兼容" aria-label="Permalink to &quot;兼容&quot;">​</a></h4><p>只兼容支持 CSS3 animate 属性的浏览器，他们分别是：IE10+、Firefox、Chrome、Opera、Safari。</p><h4 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h4><p>操作步骤</p><p>1）引入文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;link rel=&quot;stylesheet&quot; href=&quot;animate.min.css&quot;&gt;</span></span></code></pre></div><p>2）添加类名</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;box animate__animated animate__wobble animate__delay-2s animate__faster animate__repeat-3&quot;&gt;&lt;/div&gt;</span></span></code></pre></div><p>给元素加上 class 后，刷新页面，就能看到动画效果了。</p><h4 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">animate__animated 定义动画持续的时间</span></span>
<span class="line"><span style="color:#A6ACCD;">animate__delay-2s 定义动画延迟的时间</span></span>
<span class="line"><span style="color:#A6ACCD;">animate__repeat 定义动画重复的次数</span></span>
<span class="line"><span style="color:#A6ACCD;">动画是无限播放的，可以添加类名 infinite</span></span>
<span class="line"><span style="color:#A6ACCD;">animate__faster  定义动画的速度</span></span></code></pre></div><h2 id="_3d函数" tabindex="-1">3d函数 <a class="header-anchor" href="#_3d函数" aria-label="Permalink to &quot;3d函数&quot;">​</a></h2><ul><li>translate3d(X,Y,Z) ---- translate3d(100px,200px,300px) <ul><li>translateX(100px)</li><li>translateY(200px)</li><li>translateZ(300px)</li></ul></li><li>Scale3d(x,y,z) ---- Scale3d (1.5,2,0.5) <ul><li>scaleX(1.5)</li><li>scaleY(2)</li><li>scaleZ(0.5)</li></ul></li><li>rotate3d(tx,ty,tz,角度) <ul><li>tx,ty,tz 矢量值</li></ul></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">rotate3d(0,0,1,30deg)  沿Z轴旋转30deg   rotateZ(30deg)</span></span>
<span class="line"><span style="color:#A6ACCD;">  rotate3d(1,0,0,30deg)  沿X轴旋转30deg   rotateX(30deg)</span></span>
<span class="line"><span style="color:#A6ACCD;">  rotate3d(0,1,0,30deg)  沿y轴旋转30deg   rotateY(30deg)</span></span></code></pre></div><p>其中两个不为0，tx,ty,tz相当于倍率</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">rotate3d(1,1,1,30deg)   沿X轴旋转30deg  沿y轴旋转30deg  沿z轴旋转30deg </span></span>
<span class="line"><span style="color:#A6ACCD;">  rotate3d(0.5,1,0,30deg)  沿X轴旋转15deg  沿y轴旋转30deg</span></span></code></pre></div>`,103),o=[p];function t(i,r,c,C,y,D){return n(),s("div",null,o)}const A=a(e,[["render",t]]);export{h as __pageData,A as default};
