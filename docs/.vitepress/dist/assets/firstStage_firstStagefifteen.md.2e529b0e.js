import{_ as a,c as s,o as n,V as e}from"./chunks/framework.9c1268ca.js";const A=JSON.parse('{"title":"移动端web开发","description":"","frontmatter":{},"headers":[],"relativePath":"firstStage/firstStagefifteen.md","filePath":"firstStage/firstStagefifteen.md"}'),p={name:"firstStage/firstStagefifteen.md"},l=e(`<h1 id="移动端web开发" tabindex="-1">移动端web开发 <a class="header-anchor" href="#移动端web开发" aria-label="Permalink to &quot;移动端web开发&quot;">​</a></h1><h3 id="移动端web开发现状" tabindex="-1">移动端web开发现状 <a class="header-anchor" href="#移动端web开发现状" aria-label="Permalink to &quot;移动端web开发现状&quot;">​</a></h3><ul><li><p>移动端浏览器大多基于webkit内核， 对H5+CSS3支持良好</p></li><li><p>手机的屏幕尺寸非常多，不同的移动设备有不同的屏幕尺寸、视口大小</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">设备的屏幕尺寸查询: https://uiiiuiii.com/screen/</span></span></code></pre></div></li></ul><p>我们开发的网页，在不同的手机上，若想展示效果一致，必然不是为每一种型号手机都开发一套页面，而是要尽可能的能适配所有</p><h3 id="视口" tabindex="-1">视口 <a class="header-anchor" href="#视口" aria-label="Permalink to &quot;视口&quot;">​</a></h3><p>了解视口相关概念及理想视口的设置 是移动Web开发非常重要环节。</p><h4 id="什么是视口" tabindex="-1">什么是视口？ <a class="header-anchor" href="#什么是视口" aria-label="Permalink to &quot;什么是视口？&quot;">​</a></h4><p>视口简单来说就是浏览器显示页面内容的区域。</p><p>在PC端，正常的视口宽度就是整个浏览器的窗口可视区的宽度，会随着浏览器窗口大小的重置而缩放；</p><p>大多数为PC端设计的网站宽度至少为800px,为了不破坏没有针对移动设备优化的PC网页，移动端引入了视觉视口、布局视口、理想视口三个概念</p><h4 id="视觉视口" tabindex="-1">视觉视口 <a class="header-anchor" href="#视觉视口" aria-label="Permalink to &quot;视觉视口&quot;">​</a></h4><p>视觉视口是指用户当前看到区域，即设备宽度（用户正在看到的网站的区域，与设备屏幕一样宽。）</p><h4 id="布局视口" tabindex="-1">布局视口 <a class="header-anchor" href="#布局视口" aria-label="Permalink to &quot;布局视口&quot;">​</a></h4><p>移动设备的浏览器都默认设置 了一个viewport元标签，定义了一个虚拟的布局视口，布局视口使视口与移动端浏览器屏幕宽度完全独立开。CSS 布局将会根据它来进行计算，并被它约束。</p><p>大部分移动设备默认的 viewport 为 980px,不同设备上的浏览器的默认的宽度并不一样。</p><p>所以PC上的网页基本能在手机上呈现，只不过看上去很小，一般默认允许用户通过手动缩放、平移来查看网页。</p><h4 id="理想视口" tabindex="-1">理想视口 <a class="header-anchor" href="#理想视口" aria-label="Permalink to &quot;理想视口&quot;">​</a></h4><p>布局视口对用户不友好，基于理想视口设计的网站，不需要用户手动缩放，也不需要出现横向滚动条，网站的所有内容都可以正常的呈现给用户。</p><p>理想视口可以使用 HTML 中的 meta 标签显式设置布局视口等于设备宽度</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;meta name=&quot;viewport&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    content=&quot;width=device-width,initial-scale=1.0,maximum-scale=1&quot;&gt;</span></span></code></pre></div><p>属性说明:</p><table><thead><tr><th>width</th><th>正整数或device-width</th><th>定义视口的宽度，单位为像素</th></tr></thead><tbody><tr><td>height</td><td>正整数或device-height</td><td>定义视口的高度，单位为像素，一般不用</td></tr><tr><td>initial-scale</td><td>[0.0-10.0]</td><td>定义初始缩放比率</td></tr><tr><td>minimum-scale</td><td>[0.0-10.0]</td><td>定义最小缩放比例，它必须小于或等于maximum-scale设置</td></tr><tr><td>maximum-scale</td><td>[0.0-10.0]</td><td>定义最大缩放比例，它必须大于或等于minimum-scale设置</td></tr><tr><td>user-scalable</td><td>yes （1）/ no（0）</td><td>定义是否允许用户手动缩放页面，默认值 yes</td></tr></tbody></table><h2 id="移动端适配方案" tabindex="-1">移动端适配方案 <a class="header-anchor" href="#移动端适配方案" aria-label="Permalink to &quot;移动端适配方案&quot;">​</a></h2><p>由于手机屏幕尺寸、分辨率不同，还要要考虑横竖屏问题，为了使得web页面在不同移动设备上具有尽可能统一或合理的展示效果，需要在开发过程中使用合理的适配方案。</p><p>常见的适配方案如下：</p><h3 id="rem适配" tabindex="-1">rem适配 <a class="header-anchor" href="#rem适配" aria-label="Permalink to &quot;rem适配&quot;">​</a></h3><h4 id="rem单位介绍" tabindex="-1">rem单位介绍 <a class="header-anchor" href="#rem单位介绍" aria-label="Permalink to &quot;rem单位介绍&quot;">​</a></h4><p>Rem( font size of the root element) 是指相对于根元素的字体大小的单位 , 即根据 html 元素的 font-size来计算大小。</p><p>大多数浏览器的默认字号是16px，因此默认1rem=16px。</p><h4 id="rem布局原理" tabindex="-1">rem布局原理 <a class="header-anchor" href="#rem布局原理" aria-label="Permalink to &quot;rem布局原理&quot;">​</a></h4><p>在布局过程中只要使用 rem 设置元素的尺寸，在改变 rem 的基准值 html 的字体大小的时候，页面上的元素将等比例缩放实现适配。</p><p>例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.box{</span></span>
<span class="line"><span style="color:#A6ACCD;">	 width:1rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">	 height:1rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">@media screen and (min-width:320px){</span></span>
<span class="line"><span style="color:#A6ACCD;">	html{</span></span>
<span class="line"><span style="color:#A6ACCD;">		font-size:16px;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">@media screen and (min-width:640px){</span></span>
<span class="line"><span style="color:#A6ACCD;">	html{</span></span>
<span class="line"><span style="color:#A6ACCD;">		font-size:32px;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>由于设备尺寸繁多需要设置密集的断点因此通过js动态计算并设置html的fontsize值是最常用的方式</p><h4 id="rem适配实现" tabindex="-1">rem适配实现 <a class="header-anchor" href="#rem适配实现" aria-label="Permalink to &quot;rem适配实现&quot;">​</a></h4><h5 id="_2-rem布局" tabindex="-1">2. rem布局： <a class="header-anchor" href="#_2-rem布局" aria-label="Permalink to &quot;2. rem布局：&quot;">​</a></h5><p>通过媒体查询查询移动端不同设备下的宽度，通过1rem的字体基础值与html字体进行关联，实现页面的自适应。默认1rem=16px;</p><p>rem:相对于html根标签的单位 预设750px设计稿下 1rem=100px;</p><p>==当前屏幕的字体基础值=屏幕的宽度*预设的字体基础值/设计稿宽度==</p><p>当前屏幕的字体基准值=屏幕的宽度*100px/750px</p><p>第一步：设置视口。</p><p>第二步：确立好基准值，使用rem单位代替px.</p><p>第三步：换算不同屏幕尺寸下1rem的值 预设750px设计稿下 1rem=100px;</p><p>​ rem+媒体查询</p><p>​ 1.确定设备屏幕的宽度</p><p>​ @media 设备 and (min-width:px){</p><p>​ html{</p><p>​ font-size:设置字体基准值。</p><p>​ }</p><p>​ }</p><p>设备：screen</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">@media screen and (min-width:320px){</span></span>
<span class="line"><span style="color:#A6ACCD;">	html{</span></span>
<span class="line"><span style="color:#A6ACCD;">		font-size:42.67px;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">@media screen and (min-width:360px){</span></span>
<span class="line"><span style="color:#A6ACCD;">	html{</span></span>
<span class="line"><span style="color:#A6ACCD;">		font-size:48px;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">@media screen and (min-width:375px){</span></span>
<span class="line"><span style="color:#A6ACCD;">	html{</span></span>
<span class="line"><span style="color:#A6ACCD;">	  font-size:50px;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">@media screen and (min-width:414px){</span></span>
<span class="line"><span style="color:#A6ACCD;">	html{</span></span>
<span class="line"><span style="color:#A6ACCD;">		font-size:55.2px</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">@media screen and (min-width:560px){</span></span>
<span class="line"><span style="color:#A6ACCD;">	html{</span></span>
<span class="line"><span style="color:#A6ACCD;">		font-size:74.67px</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">@media screen and (min-width:640px){</span></span>
<span class="line"><span style="color:#A6ACCD;">	html{</span></span>
<span class="line"><span style="color:#A6ACCD;">		font-size:85.3px</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">@media screen and (min-width:750px){</span></span>
<span class="line"><span style="color:#A6ACCD;">	html{</span></span>
<span class="line"><span style="color:#A6ACCD;">		font-size:100px</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">} </span></span>
<span class="line"><span style="color:#A6ACCD;">第二种：</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	//获取html宽度（设备宽度）</span></span>
<span class="line"><span style="color:#A6ACCD;">    var deviceWidth = document.documentElement.clientWidth;    </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	// 750可以根据实际设计稿的宽度进行修改</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(deviceWidth&gt;750){ //假设设计稿为750</span></span>
<span class="line"><span style="color:#A6ACCD;">       deviceWidth = 750;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    var fs = (deviceWidth*100)/750;</span></span>
<span class="line"><span style="color:#A6ACCD;">    document.documentElement.style.fontSize = fs + &#39;px&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">320px 1rem=20px   640px 40px     20px/320px=当前屏幕字体基准值/640px</span></span></code></pre></div><p>以上代码假设基准值为设计稿，设计稿宽度为750px,如果页面宽度低于750px,那么页面中html的font-size也会按照（当前页面宽度/750）的比例变化。这样，页面中所有应用了rem的作尺寸单位的元素都会随着页面变化而等比例缩放，从而达到适配。</p><h3 id="vw适配" tabindex="-1">vw适配 <a class="header-anchor" href="#vw适配" aria-label="Permalink to &quot;vw适配&quot;">​</a></h3><h4 id="vw单位介绍" tabindex="-1">vw单位介绍 <a class="header-anchor" href="#vw单位介绍" aria-label="Permalink to &quot;vw单位介绍&quot;">​</a></h4><p>vw 即Viewport&#39;s width的简写，是css3规范中的视口单位，</p><p>相对于视口的宽度，视口被均分为100单位的vw。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">相关阅读：</span></span>
<span class="line"><span style="color:#A6ACCD;">除此之外还有vh单位 即Viewport&#39;s height，相对于视口的高度，视口高度被均分为100单位的vh。</span></span>
<span class="line"><span style="color:#A6ACCD;">vmax相对于视口的宽度或高度中较大的那个。其中最大的那个被均分为100单位的vmax。</span></span>
<span class="line"><span style="color:#A6ACCD;">vmin相对于视口的宽度或高度中较小的那个The 。其中最小的那个被均分为100单位的vmin。</span></span></code></pre></div><h4 id="使用vw单位实现适配" tabindex="-1">使用vw单位实现适配 <a class="header-anchor" href="#使用vw单位实现适配" aria-label="Permalink to &quot;使用vw单位实现适配&quot;">​</a></h4><p>1vw 等于视窗宽度的1%，在页面布局中将px值换算成vw,</p><p>当视口宽度发生变化，则元素大小随即发生变化。</p><p>提示：可以借助插件自动计算</p><p>缺点：转换后的长度单位不够直观修改维护困难</p><h4 id="使用rem-vw单位实现适配" tabindex="-1">使用rem+vw单位实现适配 <a class="header-anchor" href="#使用rem-vw单位实现适配" aria-label="Permalink to &quot;使用rem+vw单位实现适配&quot;">​</a></h4><p>沿用rem布局方案，所有的布局元素及属性都用rem做单位,用vw单位设置html的font-size,这样就不再需要JS来动态计算根元素字体大小。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">换算过程:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">假设在750px的设计稿下，可以理解为100vw,对应750px</span></span>
<span class="line"><span style="color:#A6ACCD;">沿用rem布局方案中的html{font-size:100px}换算为vw那么 1vw = 7.5px</span></span>
<span class="line"><span style="color:#A6ACCD;">100px就是13.333333vw了</span></span></code></pre></div><p>然后我们就可以在布局写rem单位了, 由于倍率是100,除以100,直接小数点向左移动2位,1rem是100px,那么10px就是0.1rem，不需要借助插件转换计算也可以直观的进行布局了。</p><h5 id="rem-vw" tabindex="-1">rem+vw; <a class="header-anchor" href="#rem-vw" aria-label="Permalink to &quot;rem+vw;&quot;">​</a></h5><p>vw是相对于视口宽度的单位，当视口宽度发生变化，则元素大小随即发生变化。</p><p>vh是相对于视口高度的单位</p><p>此处注意：rem+vw布局不需要设置媒体查询和js代码，就可以进行一个自适应</p><p>将视口分为100份。一份相当于1vw。</p><p>以750px 的设计稿为例 视口平分100份</p><p>750px=100vw ==》 1px=0.13333333vw ==》 100px=13.33333vw 100px = 1rem</p><p>px-》vw-&gt;rem的转换</p><p>注意字体基准值的设置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">html{</span></span>
<span class="line"><span style="color:#A6ACCD;">            font-size:13.3333333vw;</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.div_con{</span></span>
<span class="line"><span style="color:#A6ACCD;">            width:2rem;   //此处可以直接使用rem单位。</span></span>
<span class="line"><span style="color:#A6ACCD;">            height:2rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">            background:red;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span></code></pre></div><p>插件 px-to-rem</p><p>将px单位转换为rem--&gt;快捷键alt+z</p><p>在设置--》setting.json中，将字体基准值改为100</p><h2 id="_15-4移动端项目" tabindex="-1">15.4移动端项目 <a class="header-anchor" href="#_15-4移动端项目" aria-label="Permalink to &quot;15.4移动端项目&quot;">​</a></h2><h3 id="项目介绍" tabindex="-1">项目介绍 <a class="header-anchor" href="#项目介绍" aria-label="Permalink to &quot;项目介绍&quot;">​</a></h3><h4 id="项目名称" tabindex="-1">项目名称： <a class="header-anchor" href="#项目名称" aria-label="Permalink to &quot;项目名称：&quot;">​</a></h4><p>小U商城</p><h4 id="项目描述" tabindex="-1">项目描述 <a class="header-anchor" href="#项目描述" aria-label="Permalink to &quot;项目描述&quot;">​</a></h4><p>小U商城是面向移动端的专业综合网上购物商城，我们要完成 首页、列表页、详情页等静态页面的制作</p><h4 id="技术选型" tabindex="-1">技术选型 <a class="header-anchor" href="#技术选型" aria-label="Permalink to &quot;技术选型&quot;">​</a></h4><p>布局采取rem适配布局</p><h4 id="设计图尺寸" tabindex="-1">设计图尺寸 <a class="header-anchor" href="#设计图尺寸" aria-label="Permalink to &quot;设计图尺寸&quot;">​</a></h4><p>本设计图采用 750px 设计尺寸</p><h4 id="开发工具" tabindex="-1">开发工具 <a class="header-anchor" href="#开发工具" aria-label="Permalink to &quot;开发工具&quot;">​</a></h4><ul><li>VScode</li><li>Ps</li></ul>`,93),t=[l];function o(i,r,c,h,d,C){return n(),s("div",null,t)}const y=a(p,[["render",o]]);export{A as __pageData,y as default};
