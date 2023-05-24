import{_ as s,o as a,c as n,O as l}from"./chunks/framework.ae21234a.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"fifthStage/fifthStageeight.md","filePath":"fifthStage/fifthStageeight.md","lastUpdated":1684831279000}'),p={name:"fifthStage/fifthStageeight.md"},o=l(`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*@ course  环境判断、平台判断、网络请求、uView组件库、项目初始化、首页数据、商品分类列表</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*@ author 杨亚月</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*@ time 2022/07/28</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">**/</span></span></code></pre></div><h2 id="一、知识点回顾" tabindex="-1">一、知识点回顾 <a class="header-anchor" href="#一、知识点回顾" aria-label="Permalink to &quot;一、知识点回顾&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">暂无</span></span></code></pre></div><h2 id="二、作业讲解" tabindex="-1">二、作业讲解 <a class="header-anchor" href="#二、作业讲解" aria-label="Permalink to &quot;二、作业讲解&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">暂无</span></span></code></pre></div><h2 id="三、运行环境判断" tabindex="-1">三、运行环境判断 <a class="header-anchor" href="#三、运行环境判断" aria-label="Permalink to &quot;三、运行环境判断&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">开发环境  开发过程中的环境   域名  http://localhost:3000</span></span>
<span class="line"><span style="color:#A6ACCD;">生产环境  线上的环境        域名  http://yangyayue.club</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">作用：可以动态的修改服务器地址</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">通过p<wbr>rocess.env.NODE_ENV   判断是啥环境</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">返回值：development（开发环境）   production （生产环境）</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">在utils目录里 新建了一个config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js 文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> baseurl </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;">(process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">NODE_ENV</span><span style="color:#89DDFF;">==</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">development</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// 开发环境</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">baseurl</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://localhost:3000</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// 生产环境</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">baseurl</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://yangyayue.club</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="四、平台判断" tabindex="-1">四、平台判断 <a class="header-anchor" href="#四、平台判断" aria-label="Permalink to &quot;四、平台判断&quot;">​</a></h2><h3 id="_4-1编译期判断-条件编译" tabindex="-1">4.1编译期判断 （条件编译） <a class="header-anchor" href="#_4-1编译期判断-条件编译" aria-label="Permalink to &quot;4.1编译期判断    （条件编译）&quot;">​</a></h3><p>两个使用场景</p><ul><li>不同端显示不同的内容</li><li>uni-app框架 多端项目 不能保证每一端都没有问题，如果微信小程序端有问题 单独针对去处理</li></ul><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">template  可以编译</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;">&lt;!-- #ifdef H5 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">只在h5中显示</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;">&lt;!-- #endif --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;">&lt;!-- #ifdef MP-WEIXIN --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">只在微信中显示</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;">&lt;!-- #endif --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;">&lt;!-- #ifdef MP-ALIPAY --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">				就在支付宝显示</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;">&lt;!-- #endif --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;">&lt;!-- #ifndef H5 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">除了h5端都显示</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;">&lt;!-- #endif --&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">css  编译</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* #ifdef H5 */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">117.19</span><span style="color:#A6ACCD;">rpx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">117.19</span><span style="color:#A6ACCD;">rpx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* #endif */</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* #ifdef MP-WEIXIN */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">317.19</span><span style="color:#A6ACCD;">rpx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">317.19</span><span style="color:#A6ACCD;">rpx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> yellow</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* #endif */</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">js编译</span></span>
<span class="line"><span style="color:#A6ACCD;">fn(){</span></span>
<span class="line"><span style="color:#A6ACCD;">				// #ifdef H5</span></span>
<span class="line"><span style="color:#A6ACCD;">					uni.showToast({</span></span>
<span class="line"><span style="color:#A6ACCD;">						title:&quot;在h5点击了&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">						icon:&quot;none&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">					})</span></span>
<span class="line"><span style="color:#A6ACCD;">				// #endif</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span></span>
<span class="line"><span style="color:#A6ACCD;">				// #ifdef MP-WEIXIN</span></span>
<span class="line"><span style="color:#A6ACCD;">					uni.showToast({</span></span>
<span class="line"><span style="color:#A6ACCD;">						title:&quot;在为微信点击了&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">						icon:&quot;none&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">					})</span></span>
<span class="line"><span style="color:#A6ACCD;">				// #endif</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span></span>
<span class="line"><span style="color:#A6ACCD;">			}</span></span></code></pre></div><h2 id="五、网络请求" tabindex="-1">五、网络请求 <a class="header-anchor" href="#五、网络请求" aria-label="Permalink to &quot;五、网络请求&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 封装网络请求</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> baseurl </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./config</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> http </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">options</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">request</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      url</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">baseurl</span><span style="color:#89DDFF;">+</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      method</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">method</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GET</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#F07178;">      header</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">header</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#F07178;">      success</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">){</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      fail</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">err</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">reject</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> http</span></span></code></pre></div><h2 id="六、uview-组件库" tabindex="-1">六、uView 组件库 <a class="header-anchor" href="#六、uview-组件库" aria-label="Permalink to &quot;六、uView 组件库&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">专门针对  uni-app框架设计的组件录</span></span>
<span class="line"><span style="color:#A6ACCD;">uni-app可以支持多端</span></span>
<span class="line"><span style="color:#A6ACCD;">uview也可以</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">https://www.uviewui.com/</span></span></code></pre></div><h3 id="_6-1安装" tabindex="-1">6.1安装 <a class="header-anchor" href="#_6-1安装" aria-label="Permalink to &quot;6.1安装&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">通过下载方式安装：https://ext.dcloud.net.cn/plugin?id=6682</span></span>
<span class="line"><span style="color:#A6ACCD;">选择  下载插件 ZIP</span></span>
<span class="line"><span style="color:#A6ACCD;">下载完之后  把文件夹放到项目的根目录下，修改文件夹名字是 uview-ui</span></span></code></pre></div><h3 id="_6-2配置" tabindex="-1">6.2配置 <a class="header-anchor" href="#_6-2配置" aria-label="Permalink to &quot;6.2配置&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">配置地址：https://v1.uviewui.com/components/downloadSetting.html</span></span></code></pre></div><h3 id="_6-3快速上手" tabindex="-1">6.3快速上手 <a class="header-anchor" href="#_6-3快速上手" aria-label="Permalink to &quot;6.3快速上手&quot;">​</a></h3><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">u-icon</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">chat</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">u-icon</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">u-count-down</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">timestamp</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3600</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">u-count-down</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="七、工程初始化" tabindex="-1">七、工程初始化 <a class="header-anchor" href="#七、工程初始化" aria-label="Permalink to &quot;七、工程初始化&quot;">​</a></h2><h3 id="_7-1项目介绍" tabindex="-1">7.1项目介绍 <a class="header-anchor" href="#_7-1项目介绍" aria-label="Permalink to &quot;7.1项目介绍&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">前端：uni-app框架和 uviewui框架 写的  多端商城项目</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">后端：express框架+mysql+node        后端接口</span></span></code></pre></div><h3 id="_7-2服务端初始化" tabindex="-1">7.2服务端初始化 <a class="header-anchor" href="#_7-2服务端初始化" aria-label="Permalink to &quot;7.2服务端初始化&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">1、运行管理后台 （vue项目 + elementui）</span></span>
<span class="line"><span style="color:#A6ACCD;">   npm i</span></span>
<span class="line"><span style="color:#A6ACCD;">   npm start</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;">   账号：admin</span></span>
<span class="line"><span style="color:#A6ACCD;">   密码：123123</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2、运行接口</span></span>
<span class="line"><span style="color:#A6ACCD;">   npm i</span></span>
<span class="line"><span style="color:#A6ACCD;">   npm start</span></span>
<span class="line"><span style="color:#A6ACCD;">	连接数据库（注意数据库的连接参数）</span></span></code></pre></div><h3 id="_7-3导入工程模板" tabindex="-1">7.3导入工程模板 <a class="header-anchor" href="#_7-3导入工程模板" aria-label="Permalink to &quot;7.3导入工程模板&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">复制静态文件   新建一个u-shop  项目的目录</span></span></code></pre></div><h3 id="_7-4工程运行" tabindex="-1">7.4工程运行 <a class="header-anchor" href="#_7-4工程运行" aria-label="Permalink to &quot;7.4工程运行&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">运行到h5</span></span>
<span class="line"><span style="color:#A6ACCD;">运行到微信</span></span></code></pre></div><h2 id="八、首页数据" tabindex="-1">八、首页数据 <a class="header-anchor" href="#八、首页数据" aria-label="Permalink to &quot;八、首页数据&quot;">​</a></h2><h3 id="_8-1骨架屏" tabindex="-1">8.1骨架屏 <a class="header-anchor" href="#_8-1骨架屏" aria-label="Permalink to &quot;8.1骨架屏&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">暂无</span></span></code></pre></div><h3 id="_8-2商品分类快速导航" tabindex="-1">8.2商品分类快速导航 <a class="header-anchor" href="#_8-2商品分类快速导航" aria-label="Permalink to &quot;8.2商品分类快速导航&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">暂无</span></span></code></pre></div><h3 id="_8-3商品活动banner" tabindex="-1">8.3商品活动banner <a class="header-anchor" href="#_8-3商品活动banner" aria-label="Permalink to &quot;8.3商品活动banner&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">暂无</span></span></code></pre></div><h3 id="_8-4商品秒杀活动" tabindex="-1">8.4商品秒杀活动 <a class="header-anchor" href="#_8-4商品秒杀活动" aria-label="Permalink to &quot;8.4商品秒杀活动&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">暂无</span></span></code></pre></div><h3 id="_8-5热门推荐商品" tabindex="-1">8.5热门推荐商品 <a class="header-anchor" href="#_8-5热门推荐商品" aria-label="Permalink to &quot;8.5热门推荐商品&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">暂无</span></span></code></pre></div><h2 id="九、商品分类列表" tabindex="-1">九、商品分类列表 <a class="header-anchor" href="#九、商品分类列表" aria-label="Permalink to &quot;九、商品分类列表&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">暂无</span></span></code></pre></div><h2 id="十、课后作业" tabindex="-1">十、课后作业 <a class="header-anchor" href="#十、课后作业" aria-label="Permalink to &quot;十、课后作业&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">完成当天项目内容</span></span></code></pre></div>`,47),t=[o];function e(c,r,i,y,D,C){return a(),n("div",null,t)}const d=s(p,[["render",e]]);export{A as __pageData,d as default};
