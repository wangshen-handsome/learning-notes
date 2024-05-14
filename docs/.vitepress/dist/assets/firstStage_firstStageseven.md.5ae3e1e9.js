import{_ as s,c as a,o as n,V as l}from"./chunks/framework.76e34d43.js";const F=JSON.parse('{"title":"一阶段 | 第七天","description":"","frontmatter":{"layout":"firstStageseven","title":"一阶段 | 第七天"},"headers":[],"relativePath":"firstStage/firstStageseven.md","filePath":"firstStage/firstStageseven.md"}'),p={name:"firstStage/firstStageseven.md"},o=l(`<h2 id="html表单" tabindex="-1">HTML表单 <a class="header-anchor" href="#html表单" aria-label="Permalink to &quot;HTML表单&quot;">​</a></h2><h3 id="学习目标" tabindex="-1">学习目标 <a class="header-anchor" href="#学习目标" aria-label="Permalink to &quot;学习目标&quot;">​</a></h3><ul><li>能够说出表单组成部分</li><li>掌握HTML常用表单元素</li><li>掌握HTML常用表单属性</li></ul><h3 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h3><p>表单的作用：用于搜集不同类型的用户输入</p><p>表单的组成：表单元素（控件）、表单区域</p><h3 id="表单元素" tabindex="-1">表单元素 <a class="header-anchor" href="#表单元素" aria-label="Permalink to &quot;表单元素&quot;">​</a></h3><p>表单元素是允许用户在表单中输入内容的标签， 比如：文本域、下拉列表、单选框、复选框等。</p><h4 id="表单元素标签" tabindex="-1">表单元素标签 <a class="header-anchor" href="#表单元素标签" aria-label="Permalink to &quot;表单元素标签&quot;">​</a></h4><h6 id="input标签" tabindex="-1">input标签 <a class="header-anchor" href="#input标签" aria-label="Permalink to &quot;input标签&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">- 概述：&lt;input&gt; 标签是最重要的表单元素。</span></span>
<span class="line"><span style="color:#A6ACCD;">  type属性取值不同，可以展示出不同的表单形式</span></span>
<span class="line"><span style="color:#A6ACCD;">- 作用：用来定义不同种类的输入控件</span></span>
<span class="line"><span style="color:#A6ACCD;">- 语法：&lt;input type=&quot;类型&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">- 常用类型9种</span></span>
<span class="line"><span style="color:#A6ACCD;">  - type=&quot;text&quot; </span></span>
<span class="line"><span style="color:#A6ACCD;">    - 作用：用于文本输入的单行输入字段</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 代码演示</span></span>
<span class="line"><span style="color:#A6ACCD;">  - type=”password”</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 作用：定义密码字段。</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 代码演示</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 注意：该字段中的字符被掩码（显示为星号或实心圆）</span></span>
<span class="line"><span style="color:#A6ACCD;">  - type=”radio” </span></span>
<span class="line"><span style="color:#A6ACCD;">    - 作用：定义单选按钮，允许用户在有限数量的选项中选择其中之一（需要指定单选按钮组）</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 代码演示</span></span>
<span class="line"><span style="color:#A6ACCD;">  - type=”checkbox”</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 作用：定义复选框，允许用户在有限数量的选项中选择零个或多个选项</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 代码演示</span></span>
<span class="line"><span style="color:#A6ACCD;">  - type=”button“</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 作用：定义普通按钮</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 代码演示</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 注意：Value属性定义按钮显示的文本</span></span>
<span class="line"><span style="color:#A6ACCD;">  - type=”submit”</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 作用：定义用于向表单处理程序提交表单的按钮</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 注意：省略了提交按钮的 value 属性，该按钮将显示默认文本”提交”（不同浏览器表现不同）</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 代码演示</span></span>
<span class="line"><span style="color:#A6ACCD;">  - type=&quot;reset&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 作用：定义重置按钮，将表单元素的value属性值重置为它最初的默认状态</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 注意：省略了提交按钮的 value 属性，该按钮将显示默认文本”重置”（不同浏览器表现不同）</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 代码演示</span></span>
<span class="line"><span style="color:#A6ACCD;">  - type=&quot;image&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 作用：定义图像形式的提交按钮。</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 属性</span></span>
<span class="line"><span style="color:#A6ACCD;">      - src=&quot;&quot;：指定图片地址</span></span>
<span class="line"><span style="color:#A6ACCD;">      - alt=&quot;&quot;：指定替换文本</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 注意：src 属性和alt 属性必须与 &lt;input type=&quot;image&quot;&gt; 结合使用</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 代码演示</span></span>
<span class="line"><span style="color:#A6ACCD;">  - type=&quot;file&quot; </span></span>
<span class="line"><span style="color:#A6ACCD;">    - 作用：用于文件上传</span></span>
<span class="line"><span style="color:#A6ACCD;">    - 代码演示</span></span></code></pre></div><h6 id="textarea标签" tabindex="-1">textarea标签 <a class="header-anchor" href="#textarea标签" aria-label="Permalink to &quot;textarea标签&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">- 作用：定义多行输入字段（文本域）</span></span>
<span class="line"><span style="color:#A6ACCD;">- 语法：&lt;textarea&gt;初始值&lt;/texarea&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">- 注意：不能够使用value属性规定它的初始值，初始值在开始和结束标签之间设置</span></span>
<span class="line"><span style="color:#A6ACCD;">- 代码演示</span></span></code></pre></div><h6 id="select标签" tabindex="-1">select标签 <a class="header-anchor" href="#select标签" aria-label="Permalink to &quot;select标签&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">- 概述：select标签用于定义下拉列表，下拉列表通过option标签定义选项</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- 语法</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  - </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;select name=&quot;&quot; id=&quot;&quot;&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;option value=&quot;&quot;&gt;北京&lt;/option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;option value=&quot;&quot;&gt;上海&lt;/option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;option value=&quot;&quot;&gt;天津&lt;/option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/select&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- 代码演示</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- 学员练习+讲师巡班：以上课堂代码</span></span></code></pre></div><h4 id="表单元素属性" tabindex="-1">表单元素属性 <a class="header-anchor" href="#表单元素属性" aria-label="Permalink to &quot;表单元素属性&quot;">​</a></h4><h4 id="form标签" tabindex="-1">form标签 <a class="header-anchor" href="#form标签" aria-label="Permalink to &quot;form标签&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">- 语法：&lt;form&gt;&lt;/form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">- 作用：定义 HTML 表单域，是一个包含表单元素的区域。实现用户信息的收集和传递。举例说明：比如最为常见的交互操作，注册会员、跟帖留言或者文章发布等</span></span>
<span class="line"><span style="color:#A6ACCD;">- 注意：form表单实现上述操作是最为常见方式之一，也可以使用其他方式，比如ajax等</span></span></code></pre></div><h4 id="form的属性" tabindex="-1">form的属性 <a class="header-anchor" href="#form的属性" aria-label="Permalink to &quot;form的属性&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">- action属性</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 作用：表单的动作属性，定义了目的文件的文件名</span></span>
<span class="line"><span style="color:#A6ACCD;">    由动作属性定义的这个文件通常会对接收到的输入数据进行相关的处理。</span></span>
<span class="line"><span style="color:#A6ACCD;">    可以是绝对路径或相对路径也可以是接收数数据的email邮箱地址</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 注意：如果省略 action 属性，则 action 会被设置为当前页面。</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 代码演示</span></span>
<span class="line"><span style="color:#A6ACCD;">- method属性</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 作用：规定发送表单数据的 HTTP 方法</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 取值：get(默认)/post</span></span>
<span class="line"><span style="color:#A6ACCD;">  - get 方法：将表单中数据的按照 variable=value 的形式，添加到 action 所指向的【 URL 后面，并且两者使用“?”连接】，而各个变量之间使用“&amp;”连接        ?uname=张三&amp;pass=111&amp;sex=0</span></span>
<span class="line"><span style="color:#A6ACCD;">  - post方法：将表单中的【数据放在 form 的数据体】中，按照变量和值相对应的方式，传递到 action 所指向 URL。</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 代码演示</span></span>
<span class="line"><span style="color:#A6ACCD;">  - get 和 post 区别（了解）</span></span>
<span class="line"><span style="color:#A6ACCD;">    简单阐述，当前阶段不作为重点</span></span>
<span class="line"><span style="color:#A6ACCD;">- 用途：get 从指定的资源请求数据,是用来从服务器上【获得数据】，而 POST - 向指定的资源提交要被处理的数据,是用来向服务器【上传递数据】</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 安全性：get 是不安全的用户也可以在[浏览器](http://www.soidc.net/search_article.shtml?wo=%E4%AF%C0%C0%C6%F7)上直接看到提交的数据，一些系统内部消息将会一同显示在用户面前【post 的所有操作对用户来说都是不可见的】</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 数据量：【get 传输的数据量小】，这主要是因为受 URL 长度限制；而 post 可以传输大量的数据，所以上传文件只能使用 post（当然还有一个原因，将在后面的提到）。</span></span>
<span class="line"><span style="color:#A6ACCD;">- target属性</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 作用：设置目标地址的打开方式</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 取值：_self当前窗口(默认值)</span></span>
<span class="line"><span style="color:#A6ACCD;">    _blank新窗口</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 代码演示</span></span>
<span class="line"><span style="color:#A6ACCD;">- 注意：当前阶段不需要提交表单,只是熟悉表单常用元素与其属性，能够控制表单的外观形态即可</span></span></code></pre></div><h3 id="表单元素标注" tabindex="-1">表单元素标注 <a class="header-anchor" href="#表单元素标注" aria-label="Permalink to &quot;表单元素标注&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">- 作用：为 input 元素定义标注（标记）</span></span>
<span class="line"><span style="color:#A6ACCD;">  通过&lt;label&gt; 标签的 for 属性值与相关元素的 id 值相同，绑定表单元素</span></span>
<span class="line"><span style="color:#A6ACCD;">- 语法：&lt;label for=&quot;&quot;&gt;&lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">- 效果描述：当用户选择该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上</span></span></code></pre></div><h3 id="表单区域" tabindex="-1">表单区域 <a class="header-anchor" href="#表单区域" aria-label="Permalink to &quot;表单区域&quot;">​</a></h3><h4 id="form标签-1" tabindex="-1">form标签 <a class="header-anchor" href="#form标签-1" aria-label="Permalink to &quot;form标签&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">- 语法：&lt;form&gt;&lt;/form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">- 作用：定义 HTML 表单域，是一个包含表单元素的区域。实现用户信息的收集和传递。举例说明：比如最为常见的交互操作，注册会员、跟帖留言或者文章发布等</span></span>
<span class="line"><span style="color:#A6ACCD;">- 注意：form表单实现上述操作是最为常见方式之一，也可以使用其他方式，比如ajax等</span></span></code></pre></div><h4 id="form的属性-1" tabindex="-1">form的属性 <a class="header-anchor" href="#form的属性-1" aria-label="Permalink to &quot;form的属性&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">- action属性</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 作用：表单的动作属性，定义了目的文件的文件名</span></span>
<span class="line"><span style="color:#A6ACCD;">    由动作属性定义的这个文件通常会对接收到的输入数据进行相关的处理。</span></span>
<span class="line"><span style="color:#A6ACCD;">    可以是绝对路径或相对路径也可以是接收数数据的email邮箱地址</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 注意：如果省略 action 属性，则 action 会被设置为当前页面。</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 代码演示</span></span>
<span class="line"><span style="color:#A6ACCD;">- method属性</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 作用：规定发送表单数据的 HTTP 方法</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 取值：get(默认)/post</span></span>
<span class="line"><span style="color:#A6ACCD;">  - get 方法：将表单中数据的按照 variable=value 的形式，添加到 action 所指向的【 URL 后面，并且两者使用“?”连接】，而各个变量之间使用“&amp;”连接        ?uname=张三&amp;pass=111&amp;sex=0</span></span>
<span class="line"><span style="color:#A6ACCD;">  - post方法：将表单中的【数据放在 form 的数据体】中，按照变量和值相对应的方式，传递到 action 所指向 URL。</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 代码演示</span></span>
<span class="line"><span style="color:#A6ACCD;">  - get 和 post 区别（了解）</span></span>
<span class="line"><span style="color:#A6ACCD;">    简单阐述，当前阶段不作为重点</span></span>
<span class="line"><span style="color:#A6ACCD;">- 用途：get 从指定的资源请求数据,是用来从服务器上【获得数据】，而 POST - 向指定的资源提交要被处理的数据,是用来向服务器【上传递数据】</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 安全性：get 是不安全的用户也可以在[浏览器](http://www.soidc.net/search_article.shtml?wo=%E4%AF%C0%C0%C6%F7)上直接看到提交的数据，一些系统内部消息将会一同显示在用户面前【post 的所有操作对用户来说都是不可见的】</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 数据量：【get 传输的数据量小】，这主要是因为受 URL 长度限制；而 post 可以传输大量的数据，所以上传文件只能使用 post（当然还有一个原因，将在后面的提到）。</span></span>
<span class="line"><span style="color:#A6ACCD;">- target属性</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 作用：设置目标地址的打开方式</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 取值：_self当前窗口(默认值)</span></span>
<span class="line"><span style="color:#A6ACCD;">    _blank新窗口</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 代码演示</span></span>
<span class="line"><span style="color:#A6ACCD;">- 注意：当前阶段不需要提交表单,只是熟悉表单常用元素与其属性，能够控制表单的外观形态即可</span></span></code></pre></div><h2 id="html参考手册" tabindex="-1">HTML参考手册 <a class="header-anchor" href="#html参考手册" aria-label="Permalink to &quot;HTML参考手册&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">- 作用</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 帮助我们快速查阅完整的html元素并给出目标元素的相应释义</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 方便我们学习和使用</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 经常查阅文档是一个好的学习习惯    </span></span>
<span class="line"><span style="color:#A6ACCD;">- 推荐的网址</span></span>
<span class="line"><span style="color:#A6ACCD;">  - W3C :  http://www.w3school.com.cn/</span></span>
<span class="line"><span style="color:#A6ACCD;">  - MDN: https://developer.mozilla.org/zh-CN/</span></span></code></pre></div><h2 id="css-用户界面" tabindex="-1">CSS 用户界面 <a class="header-anchor" href="#css-用户界面" aria-label="Permalink to &quot;CSS 用户界面&quot;">​</a></h2><p>学习目标</p><ul><li>掌握如何清除表单输入框的轮廓线、禁止多行文本输入框重置大小</li><li>掌握如何定义鼠标样式</li></ul><h3 id="轮廓线" tabindex="-1">轮廓线 <a class="header-anchor" href="#轮廓线" aria-label="Permalink to &quot;轮廓线&quot;">​</a></h3><p>概述：轮廓（outline）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。 轮廓（outline）属性指定元素轮廓的样式、颜色和宽度。</p><p>outline简写</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">- 在一个声明中设置所有的轮廓属性。</span></span>
<span class="line"><span style="color:#A6ACCD;">- 可以设置的属性分别是（按顺序）：</span></span>
<span class="line"><span style="color:#A6ACCD;">  outline-color, outline-style, outline-width</span></span>
<span class="line"><span style="color:#A6ACCD;">- 说明：轮廓样式 outline-style</span></span>
<span class="line"><span style="color:#A6ACCD;">  轮廓颜色 outline-color，轮廓宽度 outline-width</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 语法：空格隔开</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 取值：参考边框</span></span>
<span class="line"><span style="color:#A6ACCD;">- 注意：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">如果不设置其中的某个值，也不会出问题，比如 outline:#ff0000 solid; 也是允许的。</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">- 代码演示：清除与设置 input的轮廓线</span></span></code></pre></div><h3 id="重置元素大小" tabindex="-1">重置元素大小 <a class="header-anchor" href="#重置元素大小" aria-label="Permalink to &quot;重置元素大小&quot;">​</a></h3><p>默认：文本域中用户可以通过鼠标拖拽改变大小resize: none指定一个元素不允许用户调整大小</p><h3 id="css-鼠标样式" tabindex="-1">CSS 鼠标样式 <a class="header-anchor" href="#css-鼠标样式" aria-label="Permalink to &quot;CSS 鼠标样式&quot;">​</a></h3><p>通过在CSS中，cursor属性指定鼠标指针放在一个元素边界范围内时所用的光标形状</p><ul><li><p>常用值</p><ul><li>默认值： auto default 默认光标（通常是一个箭头） crosshair 光标呈现为十字线。 pointer 光标呈现为指示链接的指针（一只手） move 此光标指示某对象可被移动。</li><li>代码演示</li></ul></li><li><p>其他值</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">e-resize	此光标指示矩形框的边缘可被向右（东）移动。</span></span>
<span class="line"><span style="color:#A6ACCD;">ne-resize	此光标指示矩形框的边缘可被向上及向右移动（北/东）。</span></span>
<span class="line"><span style="color:#A6ACCD;">nw-resize	此光标指示矩形框的边缘可被向上及向左移动（北/西）。</span></span>
<span class="line"><span style="color:#A6ACCD;">n-resize	此光标指示矩形框的边缘可被向上（北）移动。</span></span>
<span class="line"><span style="color:#A6ACCD;">se-resize	此光标指示矩形框的边缘可被向下及向右移动（南/东）。</span></span>
<span class="line"><span style="color:#A6ACCD;">sw-resize	此光标指示矩形框的边缘可被向下及向左移动（南/西）。</span></span>
<span class="line"><span style="color:#A6ACCD;">s-resize	此光标指示矩形框的边缘可被向下移动（南）。</span></span>
<span class="line"><span style="color:#A6ACCD;">w-resize	此光标指示矩形框的边缘可被向左移动（西）。</span></span>
<span class="line"><span style="color:#A6ACCD;">text	此光标指示文本。</span></span>
<span class="line"><span style="color:#A6ACCD;">wait	此光标指示程序正忙（通常是一只表或沙漏）。</span></span>
<span class="line"><span style="color:#A6ACCD;">help	此光标指示可用的帮助（通常是一个问号或一个气球）。</span></span></code></pre></div></li></ul><h2 id="布局技巧" tabindex="-1">布局技巧 <a class="header-anchor" href="#布局技巧" aria-label="Permalink to &quot;布局技巧&quot;">​</a></h2><h3 id="等高布局" tabindex="-1">等高布局 <a class="header-anchor" href="#等高布局" aria-label="Permalink to &quot;等高布局&quot;">​</a></h3><p>等高布局是指多列子元素在父元素中实现等高视觉效果的布局技巧。</p><h4 id="实现要点-需求" tabindex="-1">实现要点（需求） <a class="header-anchor" href="#实现要点-需求" aria-label="Permalink to &quot;实现要点（需求）&quot;">​</a></h4><ul><li>多列</li><li>每一列背景不同</li><li>其中任意一列变高，其它列同步变高</li></ul><h4 id="方法一" tabindex="-1">方法一 <a class="header-anchor" href="#方法一" aria-label="Permalink to &quot;方法一&quot;">​</a></h4><p>原理：利用padding和margin负值 相抵销</p><ul><li>利用padding提前延伸背景</li><li>利用margin负值抵销padding的占位</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;wrap&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div class=&quot;left&quot;&gt;当前，新冠疫情的防疫已进入新常态新阶段，如何防患于未然，把基层常态化防控的藩篱扎得更牢，显得愈加重要。今天，雨绸缪为未来应对重大呼吸疾病做好更充分的准备，同时开展一对一的心理关爱计划，为奋战在一线的白衣&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div class=&quot;center&quot;&gt;当前，新冠疫情的防疫已进入新常态&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div class=&quot;right&quot;&gt;当前，新冠疫情的防疫已进入新常态新阶段，如何防患于未然，把基层常态化防控的藩篱扎得更牢，显得愈加重要。今天，星巴&lt;/div&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.wrap{</span></span>
<span class="line"><span style="color:#A6ACCD;">            width:600px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            border:10px solid #000;</span></span>
<span class="line"><span style="color:#A6ACCD;">            overflow: hidden;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        .wrap::after{</span></span>
<span class="line"><span style="color:#A6ACCD;">            content:&quot;&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">            display: block;</span></span>
<span class="line"><span style="color:#A6ACCD;">            clear: both;</span></span>
<span class="line"><span style="color:#A6ACCD;">        } </span></span>
<span class="line"><span style="color:#A6ACCD;">        .left,.center,.right{</span></span>
<span class="line"><span style="color:#A6ACCD;">            float:left; </span></span>
<span class="line"><span style="color:#A6ACCD;">            padding-bottom:1000px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            margin-bottom:-1000px;</span></span>
<span class="line"><span style="color:#A6ACCD;">        } </span></span>
<span class="line"><span style="color:#A6ACCD;">        .left{</span></span>
<span class="line"><span style="color:#A6ACCD;">            width:200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            /* 最小高度 ----指定盒子可以大于等于100px */</span></span>
<span class="line"><span style="color:#A6ACCD;">            min-height:100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            background-color:pink;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        .center{</span></span>
<span class="line"><span style="color:#A6ACCD;">            width:200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            /* 最小高度 ----指定盒子可以大于等于100px */</span></span>
<span class="line"><span style="color:#A6ACCD;">            min-height:100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            background-color:yellowgreen;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        .right{</span></span>
<span class="line"><span style="color:#A6ACCD;">            width:200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            /* 最小高度 ----指定盒子可以大于等于100px */</span></span>
<span class="line"><span style="color:#A6ACCD;">            min-height:100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            background-color:skyblue;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span></code></pre></div><h4 id="实现步骤" tabindex="-1">实现步骤 <a class="header-anchor" href="#实现步骤" aria-label="Permalink to &quot;实现步骤&quot;">​</a></h4><ul><li>通过浮动创建一个正常的三列布局（不同列背景不同）</li><li>父容器清浮动</li><li>每一列固定padding-bottom，同时指定一个margin负值，抵销padding的占位</li><li>父容器overflow:hidden;</li></ul><h4 id="优缺点" tabindex="-1">优缺点 <a class="header-anchor" href="#优缺点" aria-label="Permalink to &quot;优缺点&quot;">​</a></h4><ul><li>合理的控制padding和margin值</li><li>可以实现任意列等高布局</li></ul><h3 id="方法二" tabindex="-1">方法二 <a class="header-anchor" href="#方法二" aria-label="Permalink to &quot;方法二&quot;">​</a></h3><p>原理：盒子层层嵌套，利用内层盒子高度变化，外层盒子的高度也会同步变化</p><p>（有几列就添加几层共同的父级，给父级设置不同的背景颜色，用left值将不同背景错开，用margin负值将子元素移动到不同背景颜色的父盒子上）</p><h4 id="实现步骤-1" tabindex="-1">实现步骤 <a class="header-anchor" href="#实现步骤-1" aria-label="Permalink to &quot;实现步骤&quot;">​</a></h4><ul><li>准备三个负责背景的盒子.bg1,.bg2,.bg3，HTML结构上层层嵌套</li><li>将.left,.center,.right盒子放入最内层的背景盒子.bg3里</li><li>最内层的盒子.bg3清浮动</li><li>将.bg2,.bg3相对于当前位置进行移动，形成三列背景效果</li><li>将.left,.center通过margin负值移动到对应的背景处即可</li></ul><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wrap</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bg1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bg2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bg3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">left</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">1当前，新冠疫情的防疫已进入新常态新阶段，如何防患于未然，把基层常态化防控的藩篱扎得更牢，显得愈加重要。今天，雨绸缪为未来应对重大呼吸疾病做好更充分的准备，同时开展一对一的心理关爱计划，为奋战在一线的白衣</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">center</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">2当前，新冠疫情的防疫已进入新常态</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">right</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">3当前，新冠疫情的防疫已进入新常态新阶段，如何防患于未然，把基层常态化防控的藩篱扎得更牢，显得愈加重要。今天，星巴</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">wrap</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> solid </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">600px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">bg1</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> pink</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">bg2</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> skyblue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">bg3</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> orange</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">left</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">center</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">right</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#B2CCD6;">float</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#B2CCD6;">min-height</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">left</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#B2CCD6;">margin-left</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">-400px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">center</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#B2CCD6;">margin-left</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">-200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">bg3</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">after</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#B2CCD6;">clear</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> both</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span></code></pre></div><h4 id="优缺点-1" tabindex="-1">优缺点 <a class="header-anchor" href="#优缺点-1" aria-label="Permalink to &quot;优缺点&quot;">​</a></h4><ul><li>结构复杂</li><li>可以创建任意列数</li><li>方便通过百分比实现自适应</li></ul><h4 id="单行文本溢出显示省略号" tabindex="-1">单行文本溢出显示省略号 <a class="header-anchor" href="#单行文本溢出显示省略号" aria-label="Permalink to &quot;单行文本溢出显示省略号&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.box{</span></span>
<span class="line"><span style="color:#A6ACCD;">    width:200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    background-color:red; </span></span>
<span class="line"><span style="color:#A6ACCD;">    height:40px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    line-height:40px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    /* 关键代码 */ </span></span>
<span class="line"><span style="color:#A6ACCD;">    white-space: nowrap;  /* 强制不换行 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    overflow: hidden; /* 溢出隐藏 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    text-overflow: ellipsis; /* 溢出显示省略号 */</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h4 id="多行文本溢出显示省略号" tabindex="-1">多行文本溢出显示省略号 <a class="header-anchor" href="#多行文本溢出显示省略号" aria-label="Permalink to &quot;多行文本溢出显示省略号&quot;">​</a></h4><ul><li><p>方法一：after实现</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">30px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">90px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">text-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">justify</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">after</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">right</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">bottom</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>该方法适用范围广，但文字未超出行的情况下也会出现省略号,可结合js优化该方法。</p></li></ul><p>说明：</p><ol><li>将height设置为line-height的整数倍，防止超出的文字露出。</li><li>给p::after添加背景和父盒子相同背景色的小盒子。</li></ol><ul><li><p>方法二：旧版弹性盒</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.box {</span></span>
<span class="line"><span style="color:#A6ACCD;">    width: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    line-height:30px; </span></span>
<span class="line"><span style="color:#A6ACCD;">    background-color: red; </span></span>
<span class="line"><span style="color:#A6ACCD;">    /* 旧版弹性盒 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    display:-webkit-box;</span></span>
<span class="line"><span style="color:#A6ACCD;">    /* 弹性盒子元素垂直排列 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    -webkit-box-orient: vertical;</span></span>
<span class="line"><span style="color:#A6ACCD;">    /* 控制要显示的行数 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    -webkit-line-clamp: 4; </span></span>
<span class="line"><span style="color:#A6ACCD;">    overflow: hidden;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>注意：因使用了WebKit的CSS扩展属性，该方法适用于WebKit浏览器及移动端</p></li></ul><p>说明：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">-webkit-line-clamp 用来限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他的WebKit属性。常见结合属性：</span></span>
<span class="line"><span style="color:#A6ACCD;">  display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。</span></span>
<span class="line"><span style="color:#A6ACCD;">  -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。</span></span></code></pre></div>`,74),e=[o];function t(c,r,i,C,D,y){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
