import{_ as a,o as s,c as l,N as n}from"./chunks/framework.e454f055.js";const u=JSON.parse('{"title":"圣杯布局&双飞翼","description":"","frontmatter":{},"headers":[],"relativePath":"firstStage/firstStageeight.md","lastUpdated":1684940858000}'),e={name:"firstStage/firstStageeight.md"},p=n(`<ul><li>能够说出圣杯布局、双飞翼布局解决的是什么问题？</li><li>认识常见的CSS Hack</li><li>掌握PS的基础应用</li><li>熟练使用cutterman切图</li><li>掌握CSS项目规范</li></ul><h1 id="圣杯布局-双飞翼" tabindex="-1">圣杯布局&amp;双飞翼 <a class="header-anchor" href="#圣杯布局-双飞翼" aria-label="Permalink to &quot;圣杯布局&amp;双飞翼&quot;">​</a></h1><h2 id="分析实现要点" tabindex="-1">分析实现要点 <a class="header-anchor" href="#分析实现要点" aria-label="Permalink to &quot;分析实现要点&quot;">​</a></h2><ul><li>三列（不一定等高）</li><li>改变加载顺序，优先加载中间列—（结构上:中左右，显示效果上：左中右）</li><li>中间列自适应，两侧列固定</li></ul><h2 id="圣杯" tabindex="-1">圣杯 <a class="header-anchor" href="#圣杯" aria-label="Permalink to &quot;圣杯&quot;">​</a></h2><h4 id="html" tabindex="-1">HTML <a class="header-anchor" href="#html" aria-label="Permalink to &quot;HTML&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> &lt;div class=&quot;wrap&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div class=&quot;center&quot;&gt;中间&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div class=&quot;left&quot;&gt;左侧&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div class=&quot;right&quot;&gt;右侧&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-label="Permalink to &quot;CSS&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.wrap:after{</span></span>
<span class="line"><span style="color:#A6ACCD;">content:&quot;&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">display: block;</span></span>
<span class="line"><span style="color:#A6ACCD;">clear: both;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">.wrap{</span></span>
<span class="line"><span style="color:#A6ACCD;">border:1px solid #000;</span></span>
<span class="line"><span style="color:#A6ACCD;">padding:0 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">min-width:200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">.left,.center,.right{</span></span>
<span class="line"><span style="color:#A6ACCD;">float:left;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.left{</span></span>
<span class="line"><span style="color:#A6ACCD;">width:200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">min-height:200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">background-color: pink;</span></span>
<span class="line"><span style="color:#A6ACCD;">margin-left:-100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">position: relative;</span></span>
<span class="line"><span style="color:#A6ACCD;">left:-200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">.right{</span></span>
<span class="line"><span style="color:#A6ACCD;">width:200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">min-height:200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">background-color: skyblue;</span></span>
<span class="line"><span style="color:#A6ACCD;">margin-left:-200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">position:relative;</span></span>
<span class="line"><span style="color:#A6ACCD;">left:200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.center{</span></span>
<span class="line"><span style="color:#A6ACCD;">width:100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">min-height:200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">background-color: yellowgreen;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="圣杯实现步骤" tabindex="-1">圣杯实现步骤 <a class="header-anchor" href="#圣杯实现步骤" aria-label="Permalink to &quot;圣杯实现步骤&quot;">​</a></h4><ul><li>外框左右固定padding值，预留左侧列和右侧列的列宽</li><li>.center宽度100%，.left,.right固定宽度</li><li>结构上.center,.left,.right依次浮动在一行排列</li><li>移动.left通过margin-left:-100%配合相对定位position:relative,left:-200px;移动至左侧列位置</li><li>移动.right通过margin-left:-200px;配合相对定位position:relative;left:200px移动至右侧列位置</li></ul><h2 id="双飞翼" tabindex="-1">双飞翼 <a class="header-anchor" href="#双飞翼" aria-label="Permalink to &quot;双飞翼&quot;">​</a></h2><h4 id="html-1" tabindex="-1">HTML <a class="header-anchor" href="#html-1" aria-label="Permalink to &quot;HTML&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;wrap&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;centerbox&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;div class=&quot;center&quot;&gt;中间&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;left&quot;&gt;左侧&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;right&quot;&gt;右侧&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="css-1" tabindex="-1">CSS <a class="header-anchor" href="#css-1" aria-label="Permalink to &quot;CSS&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">   .wrap:after {</span></span>
<span class="line"><span style="color:#A6ACCD;">            content: &quot;&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">            display: block;</span></span>
<span class="line"><span style="color:#A6ACCD;">            clear: both;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        .wrap {</span></span>
<span class="line"><span style="color:#A6ACCD;">            border: 1px solid #000;</span></span>
<span class="line"><span style="color:#A6ACCD;">            min-width:600px;</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        .left,</span></span>
<span class="line"><span style="color:#A6ACCD;">        .centerbox,</span></span>
<span class="line"><span style="color:#A6ACCD;">        .right {</span></span>
<span class="line"><span style="color:#A6ACCD;">            float: left;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        .centerbox{</span></span>
<span class="line"><span style="color:#A6ACCD;">            width:100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        .left {</span></span>
<span class="line"><span style="color:#A6ACCD;">            margin-left:-100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">            width: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            min-height: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            background-color: pink;</span></span>
<span class="line"><span style="color:#A6ACCD;">            margin-left: -100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        .right {</span></span>
<span class="line"><span style="color:#A6ACCD;">            margin-left:-200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            width: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            min-height: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            background-color: skyblue;</span></span>
<span class="line"><span style="color:#A6ACCD;">            margin-left: -200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span></span>
<span class="line"><span style="color:#A6ACCD;">        } </span></span>
<span class="line"><span style="color:#A6ACCD;">        .center {</span></span>
<span class="line"><span style="color:#A6ACCD;">            margin:0 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            min-height: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            background-color: yellowgreen; </span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="双飞翼实现步骤" tabindex="-1">双飞翼实现步骤 <a class="header-anchor" href="#双飞翼实现步骤" aria-label="Permalink to &quot;双飞翼实现步骤&quot;">​</a></h4><ul><li>.centerbox与.left,.right浮动在一行排列</li><li>.centerbox固定宽度100%，left,.right固定宽度</li><li>.centerbox内部嵌套.center,不定宽度，通过定义左右margin留出左侧列的宽和右侧列宽</li><li>移动.left通过margin-left:-100%实现</li><li>移动.right通过margin-left:-200px;实现</li></ul><h1 id="css-hack" tabindex="-1">CSS Hack <a class="header-anchor" href="#css-hack" aria-label="Permalink to &quot;CSS Hack&quot;">​</a></h1><p>使用 CSS Hack 【可以控制不同浏览器及版本之间的显示差异】，</p><p>某些情况下处理兼容问题可以事半功倍，但【滥用会影响页面性能】，也会导致后期维护困难，因此尽可能减少对CSS Hack 的使用。</p><h3 id="属性级hack" tabindex="-1">属性级hack <a class="header-anchor" href="#属性级hack" aria-label="Permalink to &quot;属性级hack&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">*星号   针对ie6、7</span></span>
<span class="line"><span style="color:#A6ACCD;">.box{ *display:inline }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">_下划线  针对ie6  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.box{ _display:inline; }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\\0    针对ie8+</span></span>
<span class="line"><span style="color:#A6ACCD;">.box{ background:blue\\0; }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="选择符级hack" tabindex="-1">选择符级hack <a class="header-anchor" href="#选择符级hack" aria-label="Permalink to &quot;选择符级hack&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">*html .box{</span></span>
<span class="line"><span style="color:#A6ACCD;"> width:200px;</span></span>
<span class="line"><span style="color:#A6ACCD;"> height:200px;</span></span>
<span class="line"><span style="color:#A6ACCD;"> background:black;</span></span>
<span class="line"><span style="color:#A6ACCD;">} </span></span>
<span class="line"><span style="color:#A6ACCD;">.box{</span></span>
<span class="line"><span style="color:#A6ACCD;"> width:100px;</span></span>
<span class="line"><span style="color:#A6ACCD;"> height:100px;</span></span>
<span class="line"><span style="color:#A6ACCD;"> background:red</span></span>
<span class="line"><span style="color:#A6ACCD;">} </span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;box&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">星号 *html   针对ie6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">*+html .box {}  星号加号html  针对ie7</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="条件注释语句" tabindex="-1">条件注释语句 <a class="header-anchor" href="#条件注释语句" aria-label="Permalink to &quot;条件注释语句&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!--[if IE]&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		注释内容</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;![endif]--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!--[if IE 6]&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	这是ie6</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;![endif]--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!--[if IE 7]&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	这是ie7</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;![endif]--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!--[if IE 8]&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	这是ie8</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;![endif]--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!--[if IE 9]&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">这是ie9</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;![endif]--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!--[if gt IE 6]&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    这是大于ie6</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;![endif]--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!--[if IE]&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div class=&quot;box&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;![endif]--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">gt（greater than） 大于</span></span>
<span class="line"><span style="color:#A6ACCD;">gte（greater than or equal）大于等于</span></span>
<span class="line"><span style="color:#A6ACCD;">lt（less than） 	小于</span></span>
<span class="line"><span style="color:#A6ACCD;">lte（less than or equal）  小于等于</span></span>
<span class="line"><span style="color:#A6ACCD;">! 	非</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>IE 条件注释判断语句是 【IE 特有的功能】，通过 HTML 注释中的条件语句能让不同的 IE 版本识别注释中的内容</p><p>自【IE10起，标准模式不再支持条件注释】</p><h1 id="ps基础" tabindex="-1">PS基础 <a class="header-anchor" href="#ps基础" aria-label="Permalink to &quot;PS基础&quot;">​</a></h1><h2 id="ps简介" tabindex="-1">PS简介 <a class="header-anchor" href="#ps简介" aria-label="Permalink to &quot;PS简介&quot;">​</a></h2><p>[Adobe Photoshop，简称“PS”]，是由Adobe 开发和发行的[图像处理软件]。</p><p>Photoshop主要处理以像素所构成的数字图像。使用其众多的编修与绘图工具，可以有效地进行图片编 辑工作。</p><h2 id="常用快捷方式" tabindex="-1">常用快捷方式 <a class="header-anchor" href="#常用快捷方式" aria-label="Permalink to &quot;常用快捷方式&quot;">​</a></h2><h3 id="文件" tabindex="-1">文件 <a class="header-anchor" href="#文件" aria-label="Permalink to &quot;文件&quot;">​</a></h3><ul><li>新建 ctrl+n</li><li>打开 ctrl + o</li><li>关闭 ctrl+w</li><li>保存 ctrl+s</li><li>另存 ctrl+shift+s</li><li>存储为web所用格式 ctrl+alt+shift+s</li></ul><h3 id="编缉" tabindex="-1">编缉 <a class="header-anchor" href="#编缉" aria-label="Permalink to &quot;编缉&quot;">​</a></h3><ul><li>变换 ctrl+T</li><li>首选项——单位与标尺</li></ul><h3 id="图像" tabindex="-1">图像 <a class="header-anchor" href="#图像" aria-label="Permalink to &quot;图像&quot;">​</a></h3><ul><li>图像大小 crlt+alt+i</li><li>画布大小 crtl+ alt+c</li><li>裁剪</li><li>裁切</li><li>选择</li><li>反选 ctrl+shift+I</li><li>取消选择 ctrl+D</li></ul><h3 id="视图" tabindex="-1">视图 <a class="header-anchor" href="#视图" aria-label="Permalink to &quot;视图&quot;">​</a></h3><ul><li>ctrl+R 标尺</li><li>清除参考线</li><li>清除切片</li></ul><h3 id="窗口" tabindex="-1">窗口 <a class="header-anchor" href="#窗口" aria-label="Permalink to &quot;窗口&quot;">​</a></h3><ul><li>图层F7</li><li>信息面板 F8</li><li>扩展或功能</li></ul><h2 id="常用工具" tabindex="-1">常用工具 <a class="header-anchor" href="#常用工具" aria-label="Permalink to &quot;常用工具&quot;">​</a></h2><h3 id="移动工具" tabindex="-1">移动工具 <a class="header-anchor" href="#移动工具" aria-label="Permalink to &quot;移动工具&quot;">​</a></h3><ul><li><p>自动选择——图层【分组】</p></li><li><p>对齐</p><ul><li>选中图层——选择对齐方式</li></ul></li></ul><h3 id="放大镜" tabindex="-1">放大镜 <a class="header-anchor" href="#放大镜" aria-label="Permalink to &quot;放大镜&quot;">​</a></h3><ul><li><p>放大、缩小画布（默认放大，配合alt缩小）</p></li><li><p>ctrl+加号 ctrl+减号 缩放</p></li><li><p>alt+鼠标滚轮滚动（ 向前放大，向后缩小）</p></li></ul><h3 id="抓手工具" tabindex="-1">抓手工具 <a class="header-anchor" href="#抓手工具" aria-label="Permalink to &quot;抓手工具&quot;">​</a></h3><ul><li>移动画布 <ul><li>任何工具下配合空格键（转换为抓手工具）</li></ul></li></ul><h3 id="文字工具" tabindex="-1">文字工具 <a class="header-anchor" href="#文字工具" aria-label="Permalink to &quot;文字工具&quot;">​</a></h3><ul><li>查看文字大小、字体、颜色</li><li>复制、粘贴文字</li></ul><h3 id="切片工具" tabindex="-1">切片工具 <a class="header-anchor" href="#切片工具" aria-label="Permalink to &quot;切片工具&quot;">​</a></h3><h4 id="右键" tabindex="-1">右键 <a class="header-anchor" href="#右键" aria-label="Permalink to &quot;右键&quot;">​</a></h4><h5 id="编缉切片选" tabindex="-1">编缉切片选 <a class="header-anchor" href="#编缉切片选" aria-label="Permalink to &quot;编缉切片选&quot;">​</a></h5><ul><li>修改位置 x,y，修改大小 w,h</li></ul><h5 id="划分切片" tabindex="-1">划分切片 <a class="header-anchor" href="#划分切片" aria-label="Permalink to &quot;划分切片&quot;">​</a></h5><ul><li>右键划分切片（水平、垂直）</li></ul><h4 id="存储" tabindex="-1">存储 <a class="header-anchor" href="#存储" aria-label="Permalink to &quot;存储&quot;">​</a></h4><ul><li>ctrl+alt+shift+s存储为web所用格式</li><li>选中的切片</li><li>图片命名</li><li>images文件夹</li></ul><h1 id="图片格式" tabindex="-1">图片格式 <a class="header-anchor" href="#图片格式" aria-label="Permalink to &quot;图片格式&quot;">​</a></h1><p>在保证视觉效果的情况下，选择最小的图片格式与图片质量（通常选择 70-80 之间），以减少加载时间。</p><h2 id="psd" tabindex="-1">PSD： <a class="header-anchor" href="#psd" aria-label="Permalink to &quot;PSD：&quot;">​</a></h2><p>Photoshop默认保存的文件格式，可以保留所有有图层、色版、通道、蒙版、路径、未栅格化文字以及图层样式等。</p><h2 id="jpg" tabindex="-1">JPG： <a class="header-anchor" href="#jpg" aria-label="Permalink to &quot;JPG：&quot;">​</a></h2><ul><li>色彩丰富 【不支持透明】</li><li>压缩比高，生成文件体积小，</li><li>支持多种压缩级别可以控制文件大小</li><li>色彩丰富的图片（摄影图像（产品图，照片，渐变，banner图））</li></ul><h2 id="gif" tabindex="-1">GIF： <a class="header-anchor" href="#gif" aria-label="Permalink to &quot;GIF：&quot;">​</a></h2><ul><li>支持动画</li><li>支持透明（全透明）</li><li>颜色不够丰富，只支持256种颜色、文件小</li><li>适用于：色彩简单的logo/icon/动图</li></ul><h2 id="png" tabindex="-1">PNG <a class="header-anchor" href="#png" aria-label="Permalink to &quot;PNG&quot;">​</a></h2><ul><li>颜色丰富</li><li>支持alpha透明（全透明和全不透明，半透明）</li><li>早期的浏览器不支持PNG图像</li><li>适用于：透明背景图片【投影，发外光, 线条复杂（文字）】</li></ul><h2 id="webp" tabindex="-1">WebP <a class="header-anchor" href="#webp" aria-label="Permalink to &quot;WebP&quot;">​</a></h2><p>谷歌（google）10年推出一种新型图片格式</p><ul><li><p>文件小，支持有损和无损压缩，支持动画、透明</p></li><li><p>但并不是所有浏览器都支持 webp</p></li><li><p>兼容</p></li></ul><h1 id="cutterman插件" tabindex="-1">Cutterman插件 <a class="header-anchor" href="#cutterman插件" aria-label="Permalink to &quot;Cutterman插件&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>Cutterman是一款运行在photoshop中的插件，能够自动将你需要的图层进行输出， 以替代传统的手工 &quot;导出web所用格式&quot; 以及使用切片工具进行挨个切图的繁琐流程。</p><p>它支持各种各样的图片尺寸、格式、形态输出，方便你在pc、ios、Android等端上使用。 它不需要你记住一堆的语法、规则，纯点击操作，方便、快捷，易于上手。</p><h2 id="下载" tabindex="-1">下载 <a class="header-anchor" href="#下载" aria-label="Permalink to &quot;下载&quot;">​</a></h2><p>官网：<a href="http://www.cutterman.cn/zh/cutterman" target="_blank" rel="noreferrer">http://www.cutterman.cn/zh/cutterman</a></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><ol><li>下载对应工具的一键安装程序；</li><li>解压下载的安装包, 里面是一个可执行文件, 双击打开；</li><li>点击安装即可；</li></ol><h2 id="启用" tabindex="-1">启用 <a class="header-anchor" href="#启用" aria-label="Permalink to &quot;启用&quot;">​</a></h2><ul><li>安装完成后重启PS, 从菜单栏 -&gt; 窗口 -&gt; 扩展里头打开</li><li>注：需要登录</li></ul><p>安装完成后重启PS, 从菜单栏 -&gt; 窗口 -&gt; 【扩展功能】-&gt; 【cutterman】打开。</p><h1 id="项目规范" tabindex="-1">项目规范 <a class="header-anchor" href="#项目规范" aria-label="Permalink to &quot;项目规范&quot;">​</a></h1><ul><li>根据项目名称创建项目文件夹。如：ucourse</li><li>html、css、img、js 文件均归档至项目名称目录中</li><li>HTML 文件、根据页面内容以英文命名，首页或只有一个页面通常命名为index.html</li><li>css 文件以英文命名， <ul><li>公用样式通常命名为reset.css（常用的浏览器样式）</li><li>public.css（多个页面时的公共模块的样式，或多次重复使用字体、字号、间距等样式）</li><li>首页通常命名为index.css, 其他页面依实际模块或功能需求命名</li></ul></li><li>图片文件命名尽量与其模块样式名称保持关联，尽量使用小写命名 <ul><li>（如登录框的背景与图片：login_bg.jpg、login_user_ico.gif 等）</li><li>常用图片格式 gif 、png 、jpg</li></ul></li></ul><h2 id="目录结构参考" tabindex="-1">目录结构参考 <a class="header-anchor" href="#目录结构参考" aria-label="Permalink to &quot;目录结构参考&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---/html/</span></span>
<span class="line"><span style="color:#A6ACCD;">|---- /user/                    与用户相关的页面  </span></span>
<span class="line"><span style="color:#A6ACCD;">|---- /user/login.html          登录页</span></span>
<span class="line"><span style="color:#A6ACCD;">---/css/</span></span>
<span class="line"><span style="color:#A6ACCD;">|---- /reset.css                 重置浏览器样式    </span></span>
<span class="line"><span style="color:#A6ACCD;">|---- /page                        其他页面的css</span></span>
<span class="line"><span style="color:#A6ACCD;">|---- /page/pagename.css         单独某个页面的css</span></span>
<span class="line"><span style="color:#A6ACCD;">|---- /common.css                  css通用样式库</span></span>
<span class="line"><span style="color:#A6ACCD;">---/js/</span></span>
<span class="line"><span style="color:#A6ACCD;">|---- /lib                      公用组件</span></span>
<span class="line"><span style="color:#A6ACCD;">|---- /lib/jquery.2.2.3.min.js  调用jq库文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">|---- /page                          其他页面的js</span></span>
<span class="line"><span style="color:#A6ACCD;">|---- /page/pagename.js         单独书写的js</span></span>
<span class="line"><span style="color:#A6ACCD;">|---- /common.js                公用方法</span></span>
<span class="line"><span style="color:#A6ACCD;">---/img/</span></span>
<span class="line"><span style="color:#A6ACCD;">|---- /page                     其他页面对应的图片</span></span>
<span class="line"><span style="color:#A6ACCD;">|---- /page/wap                 手机端图片夹</span></span>
<span class="line"><span style="color:#A6ACCD;">|---- /page/wap/wap_icon.png    手机端图标</span></span>
<span class="line"><span style="color:#A6ACCD;">|---- /logo.png                 公用图片</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="html-书写规范" tabindex="-1">HTML 书写规范 <a class="header-anchor" href="#html-书写规范" aria-label="Permalink to &quot;HTML 书写规范&quot;">​</a></h2><h3 id="文档类型声明及编码" tabindex="-1">文档类型声明及编码： <a class="header-anchor" href="#文档类型声明及编码" aria-label="Permalink to &quot;文档类型声明及编码：&quot;">​</a></h3><ul><li>统一为 html5 声明类型；</li><li>编码统一为 utf-8</li></ul><h3 id="书写规范" tabindex="-1">书写规范： <a class="header-anchor" href="#书写规范" aria-label="Permalink to &quot;书写规范：&quot;">​</a></h3><ul><li>书写时根据页面结构实现层次分明的缩进；</li><li>标签必合</li><li>属性值必须用双引号包括</li><li>通常小写字母</li></ul><h3 id="语义化-html" tabindex="-1">语义化 HTML： <a class="header-anchor" href="#语义化-html" aria-label="Permalink to &quot;语义化 HTML：&quot;">​</a></h3><ul><li>根据页面结构选择合适的标签， <ul><li>如标题根据重要性用 h1-h6不同等级的标签标记 、段落标记用 p、结构简章重复的部分用 ul、li标签</li><li>页面中重要的图片内容要添加 alt=””替换文本，以便图片丢失时，用户可以根据替换文本了解页面内容</li></ul></li><li>根据模块内容定义class和id名称， <ul><li>如包含logo和搜索框等在内的头部标签用.header,包含联系信息，版权等的模块用footer或copyright.</li></ul></li></ul><h3 id="合理嵌套html标签" tabindex="-1">合理嵌套HTML标签： <a class="header-anchor" href="#合理嵌套html标签" aria-label="Permalink to &quot;合理嵌套HTML标签：&quot;">​</a></h3><ul><li>合理嵌套HTML标签， <ul><li>ul和li是固定嵌套，ul直接子元素必须是li;</li><li>dl和dt,dd是固定嵌套，dl的直接子元素必须是dt和dd;</li><li>p标签不允许嵌套p标签</li><li>a标签可以嵌套块级标签，尽量不要嵌套交互性标签（button）</li></ul></li><li>尽可能的控制元素嵌套层级，不合理的嵌套会影响页面性能</li></ul><h3 id="保证结构与表现相分离" tabindex="-1">保证结构与表现相分离： <a class="header-anchor" href="#保证结构与表现相分离" aria-label="Permalink to &quot;保证结构与表现相分离：&quot;">​</a></h3><ul><li>CSS表现层和JavaScript表现层分别归属于独立的.css和.js文件。</li><li>在页面中尽量避免使用行内样式即 style=”…”或行间属性，尽量使用 class 或者 id</li></ul><h2 id="css-书写规范" tabindex="-1">css 书写规范 <a class="header-anchor" href="#css-书写规范" aria-label="Permalink to &quot;css 书写规范&quot;">​</a></h2><h3 id="编码" tabindex="-1">编码： <a class="header-anchor" href="#编码" aria-label="Permalink to &quot;编码：&quot;">​</a></h3><p>编码统一为 utf-8</p><h3 id="书写代码前" tabindex="-1">书写代码前 <a class="header-anchor" href="#书写代码前" aria-label="Permalink to &quot;书写代码前&quot;">​</a></h3><p>（1）确定版心（页面有效区）</p><p>（2）考虑样式表规划，提高样式重复使用率；</p><p>（3）提前沟通页面中模棱两可的需求和交互效果，方便后续合理布局；</p><p>（4）布局时考虑后续交互效果处理的便利性，必要时预留出交互效果中涉及到的样式类。</p><p>（如鼠标点击后的样式等）</p><h3 id="书写代码时" tabindex="-1">书写代码时 <a class="header-anchor" href="#书写代码时" aria-label="Permalink to &quot;书写代码时&quot;">​</a></h3><p>（1）添加注释：应该为大区块样式添加注释 , 小区块适量注释；</p><p>（2） class 与 id 的命名</p><p>命名要语义化、简明化</p><ul><li>CSS命名时要加前缀****zg*<em><strong>如：.zg_top{</strong></em>*} <ul><li>常用命名方法一：样式名称由小写英文、数字和 _ 来组合命名： <ul><li>如 top_left、top_nav;</li><li>避免使用中文拼音 , 尽量使用简易的单词组合</li></ul></li></ul></li><li>常用命名方法二：首字母大写，驼峰式命名 <ul><li>如：topNav</li></ul></li></ul><p>（3）代码格式</p><ul><li>保持代码缩进与格式</li><li>建议单行书写</li></ul><p>( 4 ) 选择器</p><ul><li>尽可能不使用通配符选择器 *</li><li>合理使用id选择器（页面中唯 一的元素，如头部，底部）</li><li>避免使用标签限定id或者类选择器 <ul><li>如：div#test { } p.box {}</li></ul></li><li>避免层集嵌套</li></ul><h2 id="css-属性书写顺序" tabindex="-1">css 属性书写顺序： <a class="header-anchor" href="#css-属性书写顺序" aria-label="Permalink to &quot;css 属性书写顺序：&quot;">​</a></h2><ul><li>建议遵循 : <ul><li>特殊(文档流相关)属性 –&gt; 盒模型 –&gt; 装饰属性 –&gt;内容排版相关</li></ul></li><li>（1）文档流相关属性（display, position, float, clear, visibility,） （2）盒模型相关属性（width, height, margin, padding, border） （4）装饰性相关属性（background, opacity, cursor） （3）内容排版相关属性（color, font, line-height, text-align, text-indent, vertical-align）</li><li>书写代码过程中要兼容问题，对熟知的兼容问题在书写代码过程中一并处理。</li></ul><h2 id="类名命名参考" tabindex="-1">类名命名参考 <a class="header-anchor" href="#类名命名参考" aria-label="Permalink to &quot;类名命名参考&quot;">​</a></h2><p>main 页面主体 tag 标签 msg message 提示信息 tips 小技巧 vote 投票 friendlink友情链接 title 标题 summary 摘要 login_bar 登录条 search_input 搜索输入框 hot 热门热点 search 搜索 search_output 搜索输出和搜索结果相似 search_bar 搜索条 search_results 搜索结果 copyright 版权信息 branding 商标 logo 网站LOGO标志 site_info 网站信息 site_info_legal 法律声明 site_info_credits 信誉 join_us 加入我们 partner 合作伙伴 service 服务 regsiter 注册 arr arrow 箭头 guild 指南 site_map 网站地图 list 列表 home_page 首页 sub_page 二级页面子页面 tool, toolbar 工具条 drop 下拉 dorp_menu 下拉菜单 status 状态 scroll 滚动 tab 标签页 left right center 居左、中、右 news 新闻 download 下载</p>`,123),i=[p];function t(o,c,r,h,C,A){return s(),l("div",null,i)}const y=a(e,[["render",t]]);export{u as __pageData,y as default};
