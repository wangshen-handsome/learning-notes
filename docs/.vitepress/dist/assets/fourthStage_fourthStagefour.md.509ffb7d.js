import{_ as s,o as a,c as n,N as l}from"./chunks/framework.e454f055.js";const p="/learning-notes/assets/image-20220209144637360.ef41de2e.png",o="/learning-notes/assets/image-20220919114438112.903d5252.png",e="/learning-notes/assets/image-20220919155223585.ec3bd426.png",t="/learning-notes/assets/image-20220605153943881.28ce66c4.png",g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"fourthStage/fourthStagefour.md"}'),c={name:"fourthStage/fourthStagefour.md"},r=l(`<h2 id="day04过渡动画、基本组件、脚手架、静态资源引入" tabindex="-1">day04过渡动画、基本组件、脚手架、静态资源引入 <a class="header-anchor" href="#day04过渡动画、基本组件、脚手架、静态资源引入" aria-label="Permalink to &quot;day04过渡动画、基本组件、脚手架、静态资源引入&quot;">​</a></h2><h3 id="课程回顾" tabindex="-1">课程回顾 <a class="header-anchor" href="#课程回顾" aria-label="Permalink to &quot;课程回顾&quot;">​</a></h3><ul><li>配置对象的属性: el data methods computed watch filters render template</li><li>指令：8个</li><li>生命周期：8个</li><li>修饰符：事件、键盘、表单</li><li>表单设置、获取，$set</li><li>脚手架</li></ul><hr><h3 id="一、过渡动画-了解" tabindex="-1">一、过渡动画（了解） <a class="header-anchor" href="#一、过渡动画-了解" aria-label="Permalink to &quot;一、过渡动画（了解）&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">官方提供了过渡动画的方法</span></span>
<span class="line"><span style="color:#A6ACCD;">但是如果你的产品需求过于复杂，那你还是利用CSS3去完成</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="_1、内置过渡动画" tabindex="-1">1、内置过渡动画 <a class="header-anchor" href="#_1、内置过渡动画" aria-label="Permalink to &quot;1、内置过渡动画&quot;">​</a></h4><p><strong>注意：</strong></p><p>给谁添加过渡动画，就在谁的外层加一个<code>&lt;transition&gt;&lt;/transition&gt;</code>标签</p><p>一个页面，它可能会有N个过渡动画，每一个transition标签如何区分呢？</p><p>我们通过给transition设置name属性去区分，当做class去使用，进来之前就写<code>name-enter</code>，离开之前就写<code>name-leave</code>，以此类推</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">transition</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">aa</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-show</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">isShow</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">box</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">transition</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>动画分两类，进来和出去，每类又分三个阶段</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">进来</span></span>
<span class="line"><span style="color:#A6ACCD;">enter 进来之前</span></span>
<span class="line"><span style="color:#A6ACCD;">enter-active 进来的过程中</span></span>
<span class="line"><span style="color:#A6ACCD;">enter-to  进来之后</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">离开</span></span>
<span class="line"><span style="color:#A6ACCD;">leave 离开之前</span></span>
<span class="line"><span style="color:#A6ACCD;">leave-active 离开的过程中</span></span>
<span class="line"><span style="color:#A6ACCD;">leave-to	离开之后</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/* 注意：如果没有使用name属性，则动画前缀都以v-开头，如果使用了name属性，则以name属性开头 */</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">/* 进来 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">aa-enter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-300px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">aa-enter-active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">transition</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> all </span><span style="color:#F78C6C;">1s</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">aa-enter-to</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/* 离开 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">aa-leave</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">aa-leave-active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">transition</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> all </span><span style="color:#F78C6C;">1s</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">aa-leave-to</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">800px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    给谁添加过渡动画，就在谁的外层加一个transition标签</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    一个页面，它会有N个过渡动画，每一个transition标签如何区分？</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    我们通过name属性去区分，当做class去使用</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">--&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">transition</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">aa</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-show</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">isShow</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">box</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">transition</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h4 id="_2、调用动画库" tabindex="-1">2、调用动画库 <a class="header-anchor" href="#_2、调用动画库" aria-label="Permalink to &quot;2、调用动画库&quot;">​</a></h4><p>官网地址</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">https://animate.style</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>下载方式</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm i animate.css</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">版本号：animate.css@4.1.1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>使用方式：引入到本地，再给transition添加类名</p><ul><li>enter-active-class 进来要用的class</li><li>leave-active-class 离开要用的class</li></ul><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">transition</span><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">enter-active-class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">animate__animated animate__rotateIn</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">leave-active-class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">animate__animated animate__rotateOut</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-show</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">isShow</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">box</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">transition</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>注意点：我们一般不会<strong>同时使用进来和离开</strong>，一般调一个就可以了。</p><p>适用场景</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">v-if 和 v-show的切换</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">路由的切换</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">组件的切换</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="二、基本组件的概念-component" tabindex="-1">二、基本组件的概念（component） <a class="header-anchor" href="#二、基本组件的概念-component" aria-label="Permalink to &quot;二、基本组件的概念（component）&quot;">​</a></h3><p>组件为配置对象上的属性</p><h4 id="_2-1-概念" tabindex="-1">2.1 概念 <a class="header-anchor" href="#_2-1-概念" aria-label="Permalink to &quot;2.1 概念&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">我们会把共通的代码（有可能是一个标签也有可能是一大段代码或者代码片段），提取出来封装成为一个组件。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">一个组件就是一个vue组件实例。每一个组件拥有vue实例的所有属性和方法（但没有el元素）。另外，data属性是一个函数，函数返回的是一个对象。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">el元素，只有实例才有，组件没有el元素，哪么组件如何渲染呢？我们会把组件名称当做标签去进行渲染</span></span>
<span class="line"><span style="color:#A6ACCD;">组件要用到template属性，它就是模板</span></span>
<span class="line"><span style="color:#A6ACCD;">组件在哪里渲染，就在哪里注册</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">大前端的概念中，分为两大部分：模块和组件</span></span>
<span class="line"><span style="color:#A6ACCD;">一、模块</span></span>
<span class="line"><span style="color:#A6ACCD;">共通的js代码我们会封装成为模块，哪里需要哪里导入</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ES6的模块化：导出方式决定了导入方式</span></span>
<span class="line"><span style="color:#A6ACCD;">	导出默认值</span></span>
<span class="line"><span style="color:#A6ACCD;">	导出：export default 变量/对象/函数</span></span>
<span class="line"><span style="color:#A6ACCD;">	导入：import 变量名 from 地址</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	单个导出</span></span>
<span class="line"><span style="color:#A6ACCD;">	导出：export 变量/对象/函数</span></span>
<span class="line"><span style="color:#A6ACCD;">	导入：import {变量} from 地址</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">二、组件</span></span>
<span class="line"><span style="color:#A6ACCD;">共通的视图封装成为组件</span></span>
<span class="line"><span style="color:#A6ACCD;">哪里需要哪里引入</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="_2-2-创建方式" tabindex="-1">2.2 创建方式 <a class="header-anchor" href="#_2-2-创建方式" aria-label="Permalink to &quot;2.2 创建方式&quot;">​</a></h4><ul><li>局部创建组件</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">components:{ // 复数，可以创建多个</span></span>
<span class="line"><span style="color:#A6ACCD;">	组件名称: {</span></span>
<span class="line"><span style="color:#A6ACCD;">		template: &#39;&#39;, // 模板。可以是代码片段（只能有一个根标签），也可以是template标签的id</span></span>
<span class="line"><span style="color:#A6ACCD;">		// 组件其它的配置对象</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>局部创建实例</strong></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">box</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- 使用组件 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- 组件最大的特点：可复用 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">one</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">one</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">one</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">one</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">el</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#box</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">components</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// 一个组件，就是一个vue实例，它拥有vue所有的属性和方法。但是没有el元素，数据要是一个函数</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// 组件的视图来自于template模板，组件通过标签名在父组件视图中渲染</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">one</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;h1&gt;李白就是好&lt;/h1&gt;</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><ul><li>全局创建组件（组件嵌套前再来看）</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 一次只能创建一个，要放在实例化的前面</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue.component(&#39;组件名称&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">	template: &#39;&#39;, // 可以是代码片段（只能有一个根标签），也可以是template标签的id</span></span>
<span class="line"><span style="color:#A6ACCD;">	// 组件配置对象</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="_2-3-组件最大的特点" tabindex="-1">2.3 组件最大的特点 <a class="header-anchor" href="#_2-3-组件最大的特点" aria-label="Permalink to &quot;2.3 组件最大的特点&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">可复用</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="_2-4-组件的命名规则" tabindex="-1">2.4 组件的命名规则 <a class="header-anchor" href="#_2-4-组件的命名规则" aria-label="Permalink to &quot;2.4 组件的命名规则&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">1、不要用html元素作为组件名称，即使是大写也不行，因为浏览器不区分标签名大小写</span></span>
<span class="line"><span style="color:#A6ACCD;">2、如果组件名称是驼峰命名，那么我们将组件名当标签名使用的时候，遇见大写前面要加 &#39;-&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="_2-5-template属性" tabindex="-1">2.5 template属性 <a class="header-anchor" href="#_2-5-template属性" aria-label="Permalink to &quot;2.5 template属性&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">一、template有且只能有一个根元素</span></span>
<span class="line"><span style="color:#A6ACCD;">二、如果视图过于复杂，全部定义在template属性中不太方便，我们可以单提出template标签。（template标签定义在vue容器的外面，它是不占位的）</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">在容器的外面，创建tempalte标签</span></span>
<span class="line"><span style="color:#A6ACCD;">它是不占位的，你创建N个tempalte，需要用id去区分</span></span>
<span class="line"><span style="color:#A6ACCD;">template属性指向的就是template标签的id</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">X-UA-Compatible</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">IE=edge</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width=device-width, initial-scale=1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Document</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./node_modules/vue/dist/vue.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{msg}}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">one</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">one</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">hr</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">two</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">two</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">hr</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">two</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">two</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- 在vue容器的外面，创建template标签，用ID区分 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">aa</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{msg}}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">msg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">add</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">点击</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">el</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">msg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">小王快跑</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">components</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">one</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;div&gt;&lt;h1&gt;有狗咬&lt;/h1&gt;&lt;h2&gt;今天吃席&lt;/h2&gt;&lt;/div&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;font-style:italic;">// 一、template有且只能有一个根元素</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;font-style:italic;">// 二、如果视图过于复杂，全部定义在template属性中不太方便，我们可以单提出template标签。（template标签定义在vue容器的外面，它是不占位的）</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">two</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                msg</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">李白说：睡不着真累</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F07178;">add</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">哥们，点我了</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#aa</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h4 id="_2-6-组件中的data为什么是一个函数" tabindex="-1">2.6 组件中的data为什么是一个函数? <a class="header-anchor" href="#_2-6-组件中的data为什么是一个函数" aria-label="Permalink to &quot;2.6 组件中的data为什么是一个函数?&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">因为组件是可复用且是独立的。如果data是一个对象，那么它就是引用数据类型，也就是共用一个地址空间，一个组件数据发生变化就会影响其他数据。所以组件中的data用函数去封装，因为函数是独立作用域不会互相干扰。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>接着看看如何创建全局组件</p><h4 id="_2-7-组件的嵌套" tabindex="-1">2.7 组件的嵌套 <a class="header-anchor" href="#_2-7-组件的嵌套" aria-label="Permalink to &quot;2.7 组件的嵌套&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">在vue中，我们整个项目可以看成是一颗组件树</span></span>
<span class="line"><span style="color:#A6ACCD;">所有的组件拼接成了一个完整的项目</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">注意点：</span></span>
<span class="line"><span style="color:#A6ACCD;">在哪里渲染组件，就要在哪个实例中注册组件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="`+p+'" alt="image-20220209144637360"></p><ul><li>实例化时，希望写成脚手架那样，则需要创建一个新的对象，对象中有template和components，实例化时用render调用这个对象</li><li>页面中的组件调用，就要写到这个template中了</li></ul><p><img src="'+o+`" alt="image-20220919114438112"></p><h3 id="三、脚手架" tabindex="-1">三、脚手架 <a class="header-anchor" href="#三、脚手架" aria-label="Permalink to &quot;三、脚手架&quot;">​</a></h3><p>注意点：在框架中<code>.js .vue .json</code>的文件后缀可以省略</p><h4 id="_3-1-概念" tabindex="-1">3.1 概念 <a class="header-anchor" href="#_3-1-概念" aria-label="Permalink to &quot;3.1 概念&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">vue-cli 是vue的的核心工具之一</span></span>
<span class="line"><span style="color:#A6ACCD;">通过命令，可以快速搭建出项目的基本骨架</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="_3-2-官网地址" tabindex="-1">3.2 官网地址 <a class="header-anchor" href="#_3-2-官网地址" aria-label="Permalink to &quot;3.2 官网地址&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">https://cli.vuejs.org/zh/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="_3-3-全局搭建环境-每一台电脑只需要安装一次" tabindex="-1">3.3 全局搭建环境（每一台电脑只需要安装一次） <a class="header-anchor" href="#_3-3-全局搭建环境-每一台电脑只需要安装一次" aria-label="Permalink to &quot;3.3 全局搭建环境（每一台电脑只需要安装一次）&quot;">​</a></h4><p>注意点： 公司中，可以通过查询版本，确定是否需要安装</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">一、全局安装webpack和webpack-cli</span></span>
<span class="line"><span style="color:#A6ACCD;">npm i webpack@4 webpack-cli@3 -g</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">查询版本</span></span>
<span class="line"><span style="color:#A6ACCD;">webpack -v</span></span>
<span class="line"><span style="color:#A6ACCD;">webpack 4.46.0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">=======================================</span></span>
<span class="line"><span style="color:#A6ACCD;">二、全局安装vue/cli脚手架</span></span>
<span class="line"><span style="color:#A6ACCD;">npm i -g @vue/cli@4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">查询版本</span></span>
<span class="line"><span style="color:#A6ACCD;">vue -V  或者是  vue --version</span></span>
<span class="line"><span style="color:#A6ACCD;">@vue/cli 4.5.17</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="_3-4-如何创建一个vue项目" tabindex="-1">3.4 如何创建一个vue项目 <a class="header-anchor" href="#_3-4-如何创建一个vue项目" aria-label="Permalink to &quot;3.4 如何创建一个vue项目&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">vue create 项目名称（不要使用驼峰，不要用关键字）</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">开发环境运行</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run serve</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">生产环境运行（打包）</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run build</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">安装依赖(当没有node_modules时运行。如当别人给你一个项目，或者从git上下载一个项目，它就是没有node_modules的，这个时候就要手动安装一下node_modules依赖)</span></span>
<span class="line"><span style="color:#A6ACCD;">npm i</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="_3-5-项目目录" tabindex="-1">3.5 项目目录 <a class="header-anchor" href="#_3-5-项目目录" aria-label="Permalink to &quot;3.5 项目目录&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">README.md			阅读指南</span></span>
<span class="line"><span style="color:#A6ACCD;">package.json		依赖管理</span></span>
<span class="line"><span style="color:#A6ACCD;">package-lock.json	锁死文件，当node_modules发生变化时，就会出现，删除也没有关系</span></span>
<span class="line"><span style="color:#A6ACCD;">babel.config.js		用于解析es6以上语法</span></span>
<span class="line"><span style="color:#A6ACCD;">.gitignore			利用git上传要忽略的文件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">src					代码主战场</span></span>
<span class="line"><span style="color:#A6ACCD;">----assets				静态资源文件夹，放置js、css、images、fonts等</span></span>
<span class="line"><span style="color:#A6ACCD;">----components			组件文件夹，一个 .vue 结尾的文件就是一个组件，一个组件中包含三部分</span></span>
<span class="line"><span style="color:#A6ACCD;">							1、视图 &lt;template&gt;   	html部分</span></span>
<span class="line"><span style="color:#A6ACCD;">							2、逻辑代码 &lt;script&gt;   js部分</span></span>
<span class="line"><span style="color:#A6ACCD;">							3、样式 &lt;style&gt;  		css部分</span></span>
<span class="line"><span style="color:#A6ACCD;">----App.vue				主组件，它和主的html挂钩，别的组件和它挂钩</span></span>
<span class="line"><span style="color:#A6ACCD;">----main.js				主的js文件，实例化vue就在这里</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">public				公有文件</span></span>
<span class="line"><span style="color:#A6ACCD;">----favicon.ico			收藏夹图标</span></span>
<span class="line"><span style="color:#A6ACCD;">----index.html			主的html文件（不要动）</span></span>
<span class="line"><span style="color:#A6ACCD;">node_modules		依赖包</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="_3-6-初始化项目" tabindex="-1">3.6 初始化项目 <a class="header-anchor" href="#_3-6-初始化项目" aria-label="Permalink to &quot;3.6 初始化项目&quot;">​</a></h4><p>通过项目初始化，会得到一个空白的项目</p><p>通过以下两步</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">一、删除components下面的helloword.vue 和 assets下面的图片文件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">二、初始化主组件（App.vue）</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;h1&gt;主组件&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  data() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {};</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style scoped&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="_3-7-组件的嵌套" tabindex="-1">3.7 组件的嵌套 <a class="header-anchor" href="#_3-7-组件的嵌套" aria-label="Permalink to &quot;3.7 组件的嵌套&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">第一、引入封装好的组件</span></span>
<span class="line"><span style="color:#A6ACCD;">import 自定义变量名 from &#39;组件的地址&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">第二、注册组件</span></span>
<span class="line"><span style="color:#A6ACCD;">components{</span></span>
<span class="line"><span style="color:#A6ACCD;">	自定义变量名</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">第三、视图的调用</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;自定义变量名&gt;&lt;/自定义变量名&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>案例1：演示最基本的嵌套三步</p><p>案例2：演示上中下拆分，中间左右拆分</p><p>案例3：作业案例1</p><p><img src="`+e+'" alt="image-20220919155223585"></p><h3 id="四、单页应用-spa" tabindex="-1">四、单页应用（SPA） <a class="header-anchor" href="#四、单页应用-spa" aria-label="Permalink to &quot;四、单页应用（SPA）&quot;">​</a></h3><p>完整的URL组成：</p><p><a href="http://nodejs.cn/api/url.html" target="_blank" rel="noreferrer">http://nodejs.cn/api/url.html</a></p><p><img src="'+t+`" alt="image-20220605153943881"></p><p>SPA=&gt; single-page-application</p><p><code>single：单一的 page：页面 application：应用</code></p><p>目前市场上所有的前端框架都是单页应用（vue、react、angular）</p><ul><li>什么是单页应用</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">整个项目只有一个html</span></span>
<span class="line"><span style="color:#A6ACCD;">首次加载的时候，就加载了所有html、css、js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">优点：切换速度很快，不需要全刷新，它采用的是局部刷新，大部分页面不需要重新加载，减少了服务器压力，用户体验感好。</span></span>
<span class="line"><span style="color:#A6ACCD;">缺点：首次加载过慢，会造成空白页面。不利于SEO优化</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">案例：阮一峰es6入门教程网站</span></span>
<span class="line"><span style="color:#A6ACCD;">https://es6.ruanyifeng.com</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>单页应用和多页应用的区别</li></ul><h3 id="五、scoped属性" tabindex="-1">五、scoped属性 <a class="header-anchor" href="#五、scoped属性" aria-label="Permalink to &quot;五、scoped属性&quot;">​</a></h3><p><code>scoped：域内的</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">当前样式在当前组件有效（除了根标签）。（建议：根标签一般可以用这个vue文件名作为它的class名）</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style scoped&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="六、如何引入js和css" tabindex="-1">六、如何引入js和css <a class="header-anchor" href="#六、如何引入js和css" aria-label="Permalink to &quot;六、如何引入js和css&quot;">​</a></h3><ul><li>组件内部引入</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 引入普通的js，即这个js没有导出数据，如rem.js。则在script标签下用import引入，可以省略后缀</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">地址</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 引入普通的css，在当前style标签下引入，注意： .css后缀 不能省略</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">地址.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><ul><li>全局引入，在main.js中</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 全局引入js和css</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./assets/js/rem</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./assets/css/home.css</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="七、如何引入本地图片" tabindex="-1">七、如何引入本地图片 <a class="header-anchor" href="#七、如何引入本地图片" aria-label="Permalink to &quot;七、如何引入本地图片&quot;">​</a></h3><p>使用图片</p><p>如果是线上的地址，可以放在data数据中直接使用</p><p>如果是本地的图片，可以直接在html标签中直接使用，如果放到data数据中，则必须先导入，再使用（导入方式分两种 ）</p><p>如果本地图片直接在html模板中使用，可以直接引，但是要放到js的data数据中，则需要如下引</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">方式一、通过node的require引入</span></span>
<span class="line"><span style="color:#A6ACCD;">data() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">         img: require(&#39;静态资源地址&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">方式二、通过es6的 import 引入，再赋给data中的数据</span></span>
<span class="line"><span style="color:#A6ACCD;">import 变量 from &#39;静态资源地址&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">data(){</span></span>
<span class="line"><span style="color:#A6ACCD;">	return {</span></span>
<span class="line"><span style="color:#A6ACCD;">		img: 变量</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>线上图片直接使用</li><li>线上图片放在data数据中使用</li><li>直接引入本地文件夹中的图片</li><li>node导入图片到data中</li><li>es6导入图片到data中</li></ul>`,102),D=[r];function y(i,C,F,A,d,h){return a(),n("div",null,D)}const m=s(c,[["render",y]]);export{g as __pageData,m as default};