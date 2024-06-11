import{_ as s,c as a,o as n,V as l}from"./chunks/framework.9c1268ca.js";const A=JSON.parse('{"title":"二阶段 | 第三天","description":"","frontmatter":{"layout":"secondStagethree","title":"二阶段 | 第三天"},"headers":[],"relativePath":"secondStage/secondStagethree.md","filePath":"secondStage/secondStagethree.md"}'),p={name:"secondStage/secondStagethree.md"},o=l(`<p>所谓流程控制就是指<strong>程序怎么执行</strong>或者说<strong>程序执行的顺序</strong>。</p><ul><li>顺序结构：即按顺序执行代码 ;</li><li>条件选择结构 ( 分支语句 )：包括 if-else 以及 switch;</li><li>循环结构：包括 for 循环，while，do-while，for-in 等;</li><li>其他语句： break 和 continue。</li></ul><h2 id="一、顺序结构" tabindex="-1">一、顺序结构 <a class="header-anchor" href="#一、顺序结构" aria-label="Permalink to &quot;一、顺序结构&quot;">​</a></h2><p>顺序结构的程序设计是最简单的，只要按照解决问题的顺序写出相应的语句就行，它的执行顺序是自上而下，依次执行。</p><h2 id="二、分支语句" tabindex="-1">二、分支语句 <a class="header-anchor" href="#二、分支语句" aria-label="Permalink to &quot;二、分支语句&quot;">​</a></h2><h4 id="_1、if" tabindex="-1">1、if <a class="header-anchor" href="#_1、if" aria-label="Permalink to &quot;1、if&quot;">​</a></h4><p>if()后面的大括号{}可以省略，如果省略 if 只能控制紧跟在后面的一行语句，其他的和 if 条件无关。</p><p>建议在写 if 的时候都不要省略大括号。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">if (条件) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    如果条件为真，执行代码</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">if (条件) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    如果条件为真，执行</span></span>
<span class="line"><span style="color:#A6ACCD;">} else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    如果条件为假，执行</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">if (条件1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    条件1为真执行</span></span>
<span class="line"><span style="color:#A6ACCD;">} else if (条件2) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    条件2为真执行</span></span>
<span class="line"><span style="color:#A6ACCD;">} else if (条件3) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    条件3为真执行</span></span>
<span class="line"><span style="color:#A6ACCD;">} else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    以上条件都不为真执行</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h4 id="_2、switch" tabindex="-1">2、switch <a class="header-anchor" href="#_2、switch" aria-label="Permalink to &quot;2、switch&quot;">​</a></h4><p>switch 一般用于假设的个数有限，并且是同等级的关系，相对于 if 来说，结构更清晰。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">switch (变量) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    case 表达式1:</span></span>
<span class="line"><span style="color:#A6ACCD;">        变量 全等于 表达式1 执行这里;</span></span>
<span class="line"><span style="color:#A6ACCD;">        break;</span></span>
<span class="line"><span style="color:#A6ACCD;">    case 表达式2:</span></span>
<span class="line"><span style="color:#A6ACCD;">        变量 全等于 表达式2 执行这里;</span></span>
<span class="line"><span style="color:#A6ACCD;">        break;</span></span>
<span class="line"><span style="color:#A6ACCD;">    case 表达式3:</span></span>
<span class="line"><span style="color:#A6ACCD;">        变量 全等于 表达式3 执行这里;</span></span>
<span class="line"><span style="color:#A6ACCD;">        break;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ......</span></span>
<span class="line"><span style="color:#A6ACCD;">    default:</span></span>
<span class="line"><span style="color:#A6ACCD;">        以上都不成立，执行这里;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h4 id="_3、if和switch的区别" tabindex="-1">3、if和switch的区别 <a class="header-anchor" href="#_3、if和switch的区别" aria-label="Permalink to &quot;3、if和switch的区别&quot;">​</a></h4><ul><li>1、一般情况下，这两个语句是可以相互替换的。</li><li>2、switch语句通常处理 case 为比较确定值的情况，而 if…else…if 语句更加灵活，常用于范围判断(大于、等于某个范围)</li><li>3、switch 语句进行条件判断后直接执行到程序的条件语句，效率更高。而 if…else 语句有几种条件，就得判断多少次。因此当分支比较多时，switch 语句的执行效率比较高，而且结构更清晰。</li></ul><h2 id="三、循环" tabindex="-1">三、循环 <a class="header-anchor" href="#三、循环" aria-label="Permalink to &quot;三、循环&quot;">​</a></h2><p>作用：让一段特定的代码执行指定的次数</p><h4 id="_1、for" tabindex="-1">1、for <a class="header-anchor" href="#_1、for" aria-label="Permalink to &quot;1、for&quot;">​</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (1初始循环变量</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> 2</span><span style="color:#82AAFF;">判断条件</span><span style="color:#A6ACCD;">(如果条件为真循环，否则停止循环)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> 4更新循环变量) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    3</span><span style="color:#A6ACCD;">执行代码</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>循环三要素：初始化循环变量，跳出循环的条件，更新循环变量，在循环中必须有结束循环的条件，要更新循环变量，否则会成为死循环。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 第一轮  1234：  1、var i = 1;   2、1&lt;=3;  3、console.log(1);  4、i++</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 第二轮  234：   2、2&lt;=3;   3、console.log(2);   4、i++</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 第三轮  234：   2、3&lt;=3;   3、console.log(3);   4、i++</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 第四轮  2：     2、4&lt;=3;</span></span></code></pre></div><h4 id="_2、while" tabindex="-1">2、while <a class="header-anchor" href="#_2、while" aria-label="Permalink to &quot;2、while&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">1初始循环变量</span></span>
<span class="line"><span style="color:#A6ACCD;">while (2条件) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    3执行代码</span></span>
<span class="line"><span style="color:#A6ACCD;">    4更新循环变量</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 打印1--10</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> (i </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p><strong>for和while的区别：</strong></p><p>两者在功能上是可以互换的。for适合能明确循环次数的循环，while适合只有条件判断的循环。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 小王有100块钱，每天用一半，当用到1块钱时停止，可以用几天</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> money </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 多少钱</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 天数</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> (money </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">money</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">money</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">今天第</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">天，还有</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">money</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">钱</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h4 id="_3、do-while" tabindex="-1">3、do-while <a class="header-anchor" href="#_3、do-while" aria-label="Permalink to &quot;3、do-while&quot;">​</a></h4><p>特点：不论条件是否满足，至少都能执行一次</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">1初始循环变量</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">do</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    2</span><span style="color:#A6ACCD;">执行代码</span></span>
<span class="line"><span style="color:#F07178;">    3</span><span style="color:#A6ACCD;">更新循环变量</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> (4条件)</span></span></code></pre></div><h4 id="_4、break-与-continue" tabindex="-1">4、break 与 continue <a class="header-anchor" href="#_4、break-与-continue" aria-label="Permalink to &quot;4、break 与 continue&quot;">​</a></h4><ul><li>break 与 continue 都是在循环中，中止循环的操作。</li><li>break 是结束循环，后面的循环都不再执行(本次break后面的代码也不再执行)。</li><li>continue 是结束本次循环，即本次循环中 continue 以后代码都不再执行，直接执行下一次循环。</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">5</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// break; // 结束循环，后面的循环都不再执行。</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">continue</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 是结束本次循环，即本次循环中 continue 以后代码都不再执行，直接执行下一次循环。</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,34),e=[o];function t(c,r,i,y,C,D){return n(),a("div",null,e)}const h=s(p,[["render",t]]);export{A as __pageData,h as default};
