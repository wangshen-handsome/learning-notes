import{_ as s,c as a,o as n,V as l}from"./chunks/framework.9c1268ca.js";const p="/learning-notes/assets/image-20220510202045045.22f18fc5.png",e="/learning-notes/assets/6-1软件版本时间轴.8f6a6df2.png",t="/learning-notes/assets/6-2软件版本时间轴.16cce5a6.jpg",o="/learning-notes/assets/6-3传统管理文件方式.3c5aca84.png",i="/learning-notes/assets/6-4传统管理文件方式.ee5713b3.png",r="/learning-notes/assets/6-5版本控制管理文件方式.92fdc55f.png",c="/learning-notes/assets/6-6工作区.f21a2b50.jpg",C="/learning-notes/assets/4-1整理前.2315abcb.png",h="/learning-notes/assets/4-2整理后.68dcf4fa.png",g="/learning-notes/assets/image-20210506100948151.018a1018.png",d="/learning-notes/assets/image-20220304100816006.aa216a8d.png",y="/learning-notes/assets/image-20220304100739205.85517037.png",u="/learning-notes/assets/image-20220304102511119.cda8b28e.png",m="/learning-notes/assets/6-9分支介绍.8fd20245.jpg",A="/learning-notes/assets/630011-20160315120522896-1718649799.e239b62e.jpg",D="/learning-notes/assets/image-20220304153836976.87a17555.png",b="/learning-notes/assets/image-20220304154011166.1e49014c.png",q="/learning-notes/assets/6-11本地和远程使用原理图.cdd9b7c7.jpg",E="/learning-notes/assets/image-20220304165800115.856053a0.png",_="/learning-notes/assets/image-20220304170859794.e564e89f.png",k="/learning-notes/assets/image-20220304170957992.b3142971.png",f="/learning-notes/assets/image-20220304171018205.743eca9c.png",v="/learning-notes/assets/image-20220510210354331.afb4d21a.png",F="/learning-notes/assets/image-20220510210421271.57bc42c3.png",B="/learning-notes/assets/image-20220510210445936.b8209f8e.png",x="/learning-notes/assets/6-16svn集中式服务器.40caa3d2.jpg",P="/learning-notes/assets/6-17git分布式.1293ef12.jpg",M=JSON.parse('{"title":"三阶段 | 第一天","description":"","frontmatter":{"layout":"thirdStageone","title":"三阶段 | 第一天"},"headers":[],"relativePath":"thirdStage/thirdStageone.md","filePath":"thirdStage/thirdStageone.md"}'),w={name:"thirdStage/thirdStageone.md"},S=l('<h2 id="一、课堂开篇" tabindex="-1">一、课堂开篇 <a class="header-anchor" href="#一、课堂开篇" aria-label="Permalink to &quot;一、课堂开篇&quot;">​</a></h2><h3 id="_1-自我介绍" tabindex="-1">1. 自我介绍 <a class="header-anchor" href="#_1-自我介绍" aria-label="Permalink to &quot;1. 自我介绍&quot;">​</a></h3><h3 id="_2-第三阶段课程简介" tabindex="-1">2. 第三阶段课程简介 <a class="header-anchor" href="#_2-第三阶段课程简介" aria-label="Permalink to &quot;2. 第三阶段课程简介&quot;">​</a></h3><p>第1、2阶段为前端的基本功</p><h6 id="学习目标" tabindex="-1">学习目标 <a class="header-anchor" href="#学习目标" aria-label="Permalink to &quot;学习目标&quot;">​</a></h6><p>git、es6、Node、Express、Mysql、ajax、websocket、webpack</p><p><strong>前后端数据交互</strong></p><p>真正的实现从无到有的一个过程，最后再进行上线</p><h6 id="学习路线" tabindex="-1">学习路线 <a class="header-anchor" href="#学习路线" aria-label="Permalink to &quot;学习路线&quot;">​</a></h6><p>git、es6、Node、Express、Mysql、Ajax、项目、websocket、webpack</p><h2 id="二、git" tabindex="-1">二、Git <a class="header-anchor" href="#二、git" aria-label="Permalink to &quot;二、Git&quot;">​</a></h2><h3 id="学完能干什么" tabindex="-1">学完能干什么？ <a class="header-anchor" href="#学完能干什么" aria-label="Permalink to &quot;学完能干什么？&quot;">​</a></h3><p>工作中必用。不是写代码的，而是维护代码的一个工具。</p><p>在团队协作开发中，它的优势非常明显。</p><p>注：以后笔记统一用git管理 。</p><h3 id="版本的概念-了解" tabindex="-1">版本的概念（了解） <a class="header-anchor" href="#版本的概念-了解" aria-label="Permalink to &quot;版本的概念（了解）&quot;">​</a></h3><p>(1)初指一种书籍经过多次传抄、刻印或以其他方式而形成的各种不同本子。随着时代的发展，版本也开始应用于影视、软件等事物上，形容事物相同但介绍方法等不同的两个事物。</p><p>(2)软件版本编号制定是指为软件设置版本号码的方式。通常，版本号码会以数字订定。</p><p>(3)软件名称后面经常有一些英文和数字，如：CTS3.3.5、QQ 2021 Beta，这些都是软件的版本标志，通过它，我们可以对软件的类型有所了解。</p><p>各版本的时间轴演变，每一次版本的改变，都会有功能的改变。</p><p><img src="'+p+'" alt="image-20220510202045045"></p><p>支付宝更新历史：<a href="https://mobile.alipay.com/index.htm" target="_blank" rel="noreferrer">https://mobile.alipay.com/index.htm</a> 中的更新历史</p><p><img src="'+e+'" alt=""></p><p><img src="'+t+'" alt=""></p><h3 id="问题就出来了-如何维护文件代码" tabindex="-1">问题就出来了？如何维护文件代码？ <a class="header-anchor" href="#问题就出来了-如何维护文件代码" aria-label="Permalink to &quot;问题就出来了？如何维护文件代码？&quot;">​</a></h3><h3 id="管理版本" tabindex="-1">管理版本 <a class="header-anchor" href="#管理版本" aria-label="Permalink to &quot;管理版本&quot;">​</a></h3><h4 id="_1-传统管理方式" tabindex="-1">1.传统管理方式 <a class="header-anchor" href="#_1-传统管理方式" aria-label="Permalink to &quot;1.传统管理方式&quot;">​</a></h4><p>问题：传统管理方式造成了本地电脑上有很多相同的文件，不容易维护，造成了非常混乱的局面。</p><p><img src="'+o+'" alt=""></p><p><img src="'+i+'" alt=""></p><h4 id="_2-版本控制方式" tabindex="-1">2.版本控制方式 <a class="header-anchor" href="#_2-版本控制方式" aria-label="Permalink to &quot;2.版本控制方式&quot;">​</a></h4><p>好处：使用版本控制以后，只需在本地保存一份，各个版本由版本控制软件来进行管理，常见的版本控制软件有<strong>git和svn</strong>。</p><p><img src="'+r+'" alt=""></p><h3 id="git介绍" tabindex="-1">git介绍 <a class="header-anchor" href="#git介绍" aria-label="Permalink to &quot;git介绍&quot;">​</a></h3><h4 id="定义" tabindex="-1">定义： <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义：&quot;">​</a></h4><p>Git 是一个开源的<strong>分布式</strong>版本控制系统，是目前世界上最先进、最流行的版本控制系统。可以快速高效地处理从很小到非常大的项目版本管理。</p><p>项目越大，那么git的优势就越明显 。</p><h4 id="特点" tabindex="-1">特点： <a class="header-anchor" href="#特点" aria-label="Permalink to &quot;特点：&quot;">​</a></h4><p>项目越大越复杂，协同开发者越多，越能体现出Git 的高性能和高可用性</p><h4 id="git的三个区域" tabindex="-1">git的三个区域 <a class="header-anchor" href="#git的三个区域" aria-label="Permalink to &quot;git的三个区域&quot;">​</a></h4><p><strong>操作说明</strong>：如果文件在工作区，则可以提交到暂存区，如果文件在暂存区则可以提交到仓库区。</p><ul><li>工作区：相当于我们写代码的地方</li></ul><p><img src="'+c+'" alt=""></p><ul><li>暂存区：我们可以完成某一个功能（如登录、注册），临时的放在一个地方</li></ul><p><img src="'+C+'" alt=""></p><ul><li>仓库区：所有的功能完成了，放在仓库区。</li></ul><p><img src="'+h+'" alt=""></p><h3 id="安装步骤" tabindex="-1">安装步骤 <a class="header-anchor" href="#安装步骤" aria-label="Permalink to &quot;安装步骤&quot;">​</a></h3><h4 id="下载" tabindex="-1">下载 <a class="header-anchor" href="#下载" aria-label="Permalink to &quot;下载&quot;">​</a></h4><p>官网：<a href="https://git-scm.com/downloads" target="_blank" rel="noreferrer">https://git-scm.com/downloads</a></p><p>淘宝镜像：<a href="https://npm.taobao.org/mirrors/git-for-windows/v2.31.1.windows.1/" target="_blank" rel="noreferrer">https://npm.taobao.org/mirrors/git-for-windows/v2.31.1.windows.1/</a></p><p>​ 根据你的操作系统下载即可</p><h4 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h4><p>安装盘符随意（建议路径全英文），安装选项全部默认</p><h6 id="安装成功以后" tabindex="-1">安装成功以后 <a class="header-anchor" href="#安装成功以后" aria-label="Permalink to &quot;安装成功以后&quot;">​</a></h6><p>在任意目录下，点击鼠标右键，会出现以下两菜单</p><p><img src="'+g+`" alt="image-20210506100948151"></p><h4 id="配置用户信息" tabindex="-1">配置用户信息 <a class="header-anchor" href="#配置用户信息" aria-label="Permalink to &quot;配置用户信息&quot;">​</a></h4><p>描述：安装完Git 之后，需要设置自己的用户名和邮件地址。进行管理的时候，Git 需要使用这些基本信息，来记录是谁对项目进行了操作</p><p>既然是团队协作开发，那么git就需要记录哪个开发者修改了代码文件（删除文件、添加了文件）</p><p><strong>特殊说明</strong>：在你的电脑上只需要配置一次即可。</p><p><strong>配置命令</strong>：在任意目录下打开 <code>git bash here</code></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">用户名</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.email</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">邮箱</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="查看是否配置成功" tabindex="-1">查看是否配置成功 <a class="header-anchor" href="#查看是否配置成功" aria-label="Permalink to &quot;查看是否配置成功&quot;">​</a></h4><p>两种方式：</p><ol><li>git config --list</li></ol><p><img src="`+d+'" alt="image-20220304100816006"></p><ol start="2"><li>查看 .gitconfig文件 （查看文件：C:/Users/用户名文件夹/.gitconfig）</li></ol><p><img src="'+y+'" alt="image-20220304100739205"></p><h3 id="git操作步骤" tabindex="-1">Git操作步骤 <a class="header-anchor" href="#git操作步骤" aria-label="Permalink to &quot;Git操作步骤&quot;">​</a></h3><p>一、使用git初始化项目（一个项目初始化一次即可）</p><p>​ 以demo1文件夹为例，它是一个<strong>项目根目录</strong></p><p>​ 1、在你的demo1项目根目录下，打开<code>git bash here</code></p><p>​ 2、执行初始化命令（这时，在你的根目录下，就会看到一个<code>.git</code>的文件夹。这个文件夹千万不要动它，它由git管理）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git init           （initialization:初始化）</span></span></code></pre></div><p>二、编写代码</p><p>​ 以新建一个index.html为例 （工作区）</p><p>三、把工作区添加到暂存区</p><p>​ 把工作区的果实（文件）放到暂存区 （在有.git的目录下，右键打开<code>git bash here</code>）</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">文件名</span></span></code></pre></div><p>四、把暂存区添加到仓库区</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">提交说明</span></span></code></pre></div><p>commit: 提交的意思 。只要执行commit命令，就会生成一个<strong>版本号</strong>。</p><ul><li>在开发过程中，一直会围绕着 2、3、4步骤重复操作</li><li>如果工作区和暂存区是干净的，就不需要提交</li></ul><p><img src="'+u+`" alt="image-20220304102511119"></p><p><strong>特殊说明：</strong> .git 文件夹</p><p>默认是隐藏文件</p><p><strong>不要对.git里面做任何修改，我们在执行git的一些命令的时候，自动会修改的。</strong></p><h3 id="git命令" tabindex="-1">Git命令 <a class="header-anchor" href="#git命令" aria-label="Permalink to &quot;Git命令&quot;">​</a></h3><ul><li>init</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span></code></pre></div><p>作用：初始化，一个项目只要执行一次</p><ul><li>add</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">文件名</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">点代表仓库下所有的文件及文件夹</span></span></code></pre></div><p>把工作区添加到暂存区</p><ul><li>commit</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">提交的说明</span></span></code></pre></div><p>把暂存区提交到仓库区。同时生成 一个版本</p><ul><li>status</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span></span></code></pre></div><p>看仓库中工作区和暂存区文件的状态，不是非必须的命令。知道即可</p><ul><li>log</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">以完整形式输出</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--oneline</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">以简短形式输出</span></span></code></pre></div><p>指向当前的记录及以前的，后面的记录不显示。（如果有回退，回退后的版本看不到）</p><ul><li>reset</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--hard</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">版本号</span></span></code></pre></div><p>回退版本。在某些情况下（新版本有问题，那么开发者可能要马上回退到上一个版本）</p><p><code>reset重置</code></p><ul><li>reflog</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reflog</span></span></code></pre></div><p>可以查看所有的版本，简短形式输出。（包括回退后的版本）</p><ul><li>清屏</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">clear</span></span></code></pre></div><p>总结：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">项目初始化: git init</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">工作区添加暂存区: git add .</span></span>
<span class="line"><span style="color:#A6ACCD;">暂存区添加到仓库区: git commit -m 描述</span></span>
<span class="line"><span style="color:#A6ACCD;">查看工作区和暂时存区状态：git status</span></span>
<span class="line"><span style="color:#A6ACCD;">查看版本</span></span>
<span class="line"><span style="color:#A6ACCD;">	git log</span></span>
<span class="line"><span style="color:#A6ACCD;">	git log --oneline</span></span>
<span class="line"><span style="color:#A6ACCD;">回退: git reset --hard 版本号</span></span>
<span class="line"><span style="color:#A6ACCD;">查看全部版本：git reflog</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">清屏：clear</span></span></code></pre></div><h3 id="文件忽略" tabindex="-1">文件忽略 <a class="header-anchor" href="#文件忽略" aria-label="Permalink to &quot;文件忽略&quot;">​</a></h3><h4 id="介绍" tabindex="-1">介绍： <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍：&quot;">​</a></h4><p>对于无需使用git进行管理的文件或文件夹使用此文件进行配置</p><p>一些公共库代码是不需要往仓库放的。（现在只需要会配置即可，到后面讲项目才能深刻理解）</p><h4 id="使用步骤" tabindex="-1">使用步骤： <a class="header-anchor" href="#使用步骤" aria-label="Permalink to &quot;使用步骤：&quot;">​</a></h4><ol><li><p>创建配置文件 .gitignore （和.git目录同级）</p><p>注意：必须使用软件开发者（如vscode）去创建(win10可以创建没有名字的文件）</p></li><li><p>在配置文件中添加一些忽略配置</p></li></ol><h4 id="常用配置规则" tabindex="-1">常用配置规则： <a class="header-anchor" href="#常用配置规则" aria-label="Permalink to &quot;常用配置规则：&quot;">​</a></h4><p>(1) /js/ 忽略整个文件夹</p><p>(2) *.txt 忽略所有.txt文件</p><p>(3) /js/a.js 忽略 js下的a.js文件</p><h3 id="分支" tabindex="-1">分支 <a class="header-anchor" href="#分支" aria-label="Permalink to &quot;分支&quot;">​</a></h3><h4 id="介绍-1" tabindex="-1">介绍： <a class="header-anchor" href="#介绍-1" aria-label="Permalink to &quot;介绍：&quot;">​</a></h4><p>git版本控制系统支持分支操作。使用分支意味着可以从开发主线上分离开来，然后在不影响主线的同时继续工作。默认只有一个分支为master主分支。</p><h4 id="什么是主分支" tabindex="-1">什么是主分支？ <a class="header-anchor" href="#什么是主分支" aria-label="Permalink to &quot;什么是主分支？&quot;">​</a></h4><p>在初始化本地 Git 仓库的时候，Git 默认已经帮我们创建了一个名字叫做 master 的分支。通常我们把这个master 分支叫做主分支</p><h4 id="主分支的问题" tabindex="-1">主分支的问题： <a class="header-anchor" href="#主分支的问题" aria-label="Permalink to &quot;主分支的问题：&quot;">​</a></h4><p>在进行多人协作开发的时候，为了防止互相干扰，提高协同开发的体验和效率，建议每个开发者都基于分支进行项目功能的开发</p><h4 id="分支解决的问题" tabindex="-1">分支解决的问题： <a class="header-anchor" href="#分支解决的问题" aria-label="Permalink to &quot;分支解决的问题：&quot;">​</a></h4><p>用来保存和记录整个项目已完成的功能代码。但是不允许程序员直接在master 分支上修改代码，这样做的风险太高，容易导致整个项目崩溃</p><p><img src="`+m+'" alt=""></p><p>协议上规定：不应该在master主分支上维护代码 。应该在主分支的基础上，创建分支，然后在分支上维护代码</p><h6 id="补充说明" tabindex="-1">补充说明： <a class="header-anchor" href="#补充说明" aria-label="Permalink to &quot;补充说明：&quot;">​</a></h6><p>在分支上的提交操作和主分支的提交操作命令一样。</p><h4 id="分支相关命令" tabindex="-1">分支相关命令 <a class="header-anchor" href="#分支相关命令" aria-label="Permalink to &quot;分支相关命令&quot;">​</a></h4><p><code>新建一个demo2文件夹测试，并创建文件，提交一次</code></p><ul><li>branch</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span></span></code></pre></div><p>查看当前git管理的项目中有哪些分支，<strong>必须主分支上有一次提交</strong> <code>branch 分支</code></p><ul><li>branch 分支名</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">分支名</span></span></code></pre></div><p>创建分支 （注意：如果主分支上没有任何提交，则不允许创建分支）</p><ul><li>checkout</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">分支名</span></span></code></pre></div><p>切换分支， 在切换的分支上开发功能代码</p><p>特殊说明：当第一次切换到某一个分支上，则会完全的复制master上第一次提交记录到当前分支上</p><ul><li>merge</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">merge</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">分支名</span></span></code></pre></div><p>把merge后面的分支记录合并到当前分支上。一般情况下都是合并到主分支上。</p><p><strong>操作</strong>：分别创建ln zs xgk分支，操作之后，再合到主分支上</p><p>如果有报错：则按esc，再输入 <code>:wq</code>回车</p><p><a href="https://www.cnblogs.com/wei325/p/5278922.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/wei325/p/5278922.html</a></p><p><img src="'+A+`" alt=""></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">1、创建demo2并  初始化   git init </span></span>
<span class="line"><span style="color:#A6ACCD;">2、创建index.html，并提交</span></span>
<span class="line"><span style="color:#A6ACCD;">3、创建zs ls ww 分支</span></span>
<span class="line"><span style="color:#A6ACCD;">4、切换到zs，创建zs.html，并提交</span></span>
<span class="line"><span style="color:#A6ACCD;">5、切换到ls，创建ls.html， 并提交</span></span>
<span class="line"><span style="color:#A6ACCD;">6、切换到ww，创建ww.html。并提交</span></span>
<span class="line"><span style="color:#A6ACCD;">7、切换到主分支,将zs ls ww合并到主分支上</span></span>
<span class="line"><span style="color:#A6ACCD;">git merge zs/ls/ww</span></span></code></pre></div><h4 id="解决冲突" tabindex="-1">解决冲突 <a class="header-anchor" href="#解决冲突" aria-label="Permalink to &quot;解决冲突&quot;">​</a></h4><p>介绍：如果在两个不同的分支中，对同一个文件进行了不同的修改，Git 就没法合并它们。我们需要打开这些包含冲突的文件然后手动解决冲突。</p><p><strong>需求：</strong></p><p>1、在demo3项目中有主分支master , 有两个分支：deva和devb</p><p>2、有index.html文件，同时deva和devb同时修改并且提交了</p><p>3、切换到master主动上，合并deva和devb</p><p>4、解决冲突后，再在master上提交</p><h4 id="补充一-不是重点" tabindex="-1">补充一（不是重点） <a class="header-anchor" href="#补充一-不是重点" aria-label="Permalink to &quot;补充一（不是重点）&quot;">​</a></h4><p>master上合并了deva和devb。</p><p>即master上永远是完整的代码。</p><p>但我们再切换到分支的时候，需要再合并master的代码到分支上。</p><h4 id="补充二" tabindex="-1">补充二 <a class="header-anchor" href="#补充二" aria-label="Permalink to &quot;补充二&quot;">​</a></h4><p>如何避免冲突：不同的功能模块是不会发生冲突。只有修改了公共文件才有可能发生冲突 （ 谁修改了公共文件，在团队群告知一下，我修改了xxxx文件 ）</p><h3 id="远程仓库" tabindex="-1">远程仓库 <a class="header-anchor" href="#远程仓库" aria-label="Permalink to &quot;远程仓库&quot;">​</a></h3><h4 id="介绍-2" tabindex="-1">介绍： <a class="header-anchor" href="#介绍-2" aria-label="Permalink to &quot;介绍：&quot;">​</a></h4><p>Git 命令都是在本地执行，如果想通过 Git 分享你的代码或者与其他开发人员合作。就需要将文件放到一台其他开发人员能够连接的服务器上。这就是远程仓库的作用。</p><p>目的：把本地的仓库文件上传到远程仓库。</p><h4 id="远程仓库分类" tabindex="-1">远程仓库分类： <a class="header-anchor" href="#远程仓库分类" aria-label="Permalink to &quot;远程仓库分类：&quot;">​</a></h4><p>(1)、github：github是一个基于git的代码托管平台，在国外，速度比较慢，在大陆的使用很受影响</p><p>(2)、gitee：gitee是一个基于git的代码托管平台，国内使用频率较多（码云）</p><p>(3)、公司自己部署：了解即可，不是前端人员部署的，使用步骤和命令都一样</p><h4 id="操作流程" tabindex="-1">操作流程 <a class="header-anchor" href="#操作流程" aria-label="Permalink to &quot;操作流程&quot;">​</a></h4><p>1、注册</p><p><a href="https://gitee.com/" target="_blank" rel="noreferrer">https://gitee.com/</a></p><p>2、创建远程仓库。（仓库名称和路径保持一致，并开源）</p><p><img src="`+D+'" alt="image-20220304153836976"></p><p><img src="'+b+'" alt="image-20220304154011166"></p><p>3、本地文件推送（上传）到远程仓库</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">远程仓库地址</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">远程仓库分支名</span></span></code></pre></div><p>把本地的某个仓库的master分支，上传到远程仓库地址。</p><p>注意：在上传的时候，要验证你的用户名和密码</p><p>4、克隆和同步远程仓库</p><p>​ 团队协作开发，比如：deva上传了某个文件，devb要下载（同步）远程仓库</p><p><img src="'+q+'" alt=""></p><p>4.1 克隆clone（第一次用克隆）</p><p>说明：在某个文件夹下，右键调出git bach here，再用克隆，文件就下载到当前这个文件夹下</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">远程仓库</span></span></code></pre></div><p>4.2 同步pull（后续更新用拉取）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git pull 远程仓库</span></span></code></pre></div><p>push: 是把本地仓库推送到远程</p><p>clone: 克隆远程仓库到本地（完完全全地下载一份），一般只用一次（如果是第一次下载用克隆）</p><p>pull: 以后同步更新用pull。（比如：deva开发者，只修改了一个文件，其他的开发者只用pull即可。pull只下载更新的文件）</p><p><code>案例：本地a上传，b下载，修改后b再上传，a再下载</code></p><p><img src="'+E+`" alt="image-20220304165800115"></p><h4 id="相关命令" tabindex="-1">相关命令 <a class="header-anchor" href="#相关命令" aria-label="Permalink to &quot;相关命令&quot;">​</a></h4><ul><li>remote add</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">别名</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">远程仓库地址</span></span></code></pre></div><p>设置远程仓库别名</p><ul><li>remote -v</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span></code></pre></div><p>查看远程仓库的别名</p><ul><li>push</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">远程仓库</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">分支名称</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">远程仓库的别名</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">分支名称</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">远程仓库的别名</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">分支名称</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">如果你想只用git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push就实现上传，那么必须先执行一次</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">远程仓库的别名</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">分支名称</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">如:</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git@gitee.com:pzh10000/demo.git</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">将origin与远程仓库关联</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">master</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">								 </span><span style="color:#C3E88D;">执行一次-u，以后就只需要git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push即可推送，git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull即可实现拉取（当别人clone了这个仓库，他也可以这样使用，即所有克隆这个仓库的人，都可以git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">和</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull了）</span></span></code></pre></div><ul><li>clone</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">地址</span></span></code></pre></div><p>第一次下载用clone</p><ul><li>pull</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">地址</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">远程仓库别名</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;">          </span><span style="color:#C3E88D;">如果你这个仓库执行过-u，则可以直接git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull就可以拉取</span></span></code></pre></div><p>再次下载，就可以只用拉取新添加的</p><p>步骤：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git remote add 别名 远程仓库地址</span></span>
<span class="line"><span style="color:#A6ACCD;">git push -u 别名 分支名</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git remote add origin git@gitee.com:pzh10000/test3.git</span></span>
<span class="line"><span style="color:#A6ACCD;">git push -u origin &quot;master&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">以后，就只需要git push</span></span></code></pre></div><h3 id="刚入职的操作流程" tabindex="-1">刚入职的操作流程 <a class="header-anchor" href="#刚入职的操作流程" aria-label="Permalink to &quot;刚入职的操作流程&quot;">​</a></h3><p>1、先安装git</p><p>2、全局配置 git config</p><p>以上两步有时候不用。</p><p>3、再下载公司已有的项目（git clone）</p><p><strong>4、99%以上的时间在写代码和改代码</strong></p><p><strong>5、早上上班时候？</strong></p><p>​ git pull 更新最新的</p><p><strong>6、下班的时候要做什么 ？</strong></p><p>​ git add .</p><p>​ git commit -m</p><p>​ git push</p><h3 id="ssh访问" tabindex="-1">SSH访问 <a class="header-anchor" href="#ssh访问" aria-label="Permalink to &quot;SSH访问&quot;">​</a></h3><p>简介：传统方式本地和远程传输，需重复输入gitee的账号和密码，较为繁琐。</p><p>SSH好处：免登录身份认证、数据加密传输。而SSH实现本地仓库和gitee之间免登录的加密数据传输。更重要的原因是团队协同开发更加方便。</p><p>SSH组成： (1)id_rsa 私钥文件，存放于开发者的电脑中 (2)id_rsa.pub 公钥文件（放在远程仓库） 。</p><p>生成密钥步骤：1、打开Git Bash 2、执行相关命令 3、连续敲击回车</p><h4 id="步骤" tabindex="-1">步骤 <a class="header-anchor" href="#步骤" aria-label="Permalink to &quot;步骤&quot;">​</a></h4><p>1、在任何目录下，打开git，生成公钥私钥</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ssh-keygen</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rsa</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4096</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-C</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">开发者的邮箱</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><p>这样，在开发者的<strong>电脑用户名下面会有一个.ssh文件夹</strong>，里面就会生成公钥和私钥文件。</p><p><img src="`+_+'" alt="image-20220304170859794"></p><p>2、将公钥文件添加到自己的远程仓库</p><p><img src="'+k+'" alt="image-20220304170957992"></p><p><img src="'+f+`" alt="image-20220304171018205"></p><p>3、验证添加是否成功。本地同公钥私钥文件夹下，会生成一个known_hosts文件。</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ssh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-T</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git@gitee.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">按yes并回车</span></span></code></pre></div><p>4、把本地的仓库提交到远程（ssh）</p><p>注意：使用ssh提交不能用https打头。 应该使用 <a href="mailto:git@gitee.com" target="_blank" rel="noreferrer">git@gitee.com</a>: 此协议进行提交。提交时，就不用再输入远程仓库的帐号和密码了。</p><h3 id="邀请成员管理" tabindex="-1">邀请成员管理 <a class="header-anchor" href="#邀请成员管理" aria-label="Permalink to &quot;邀请成员管理&quot;">​</a></h3><p><img src="`+v+'" alt="image-20220510210354331"></p><p><img src="'+F+'" alt="image-20220510210421271"></p><p><img src="'+B+'" alt="image-20220510210445936"></p><h3 id="git与svn区别" tabindex="-1">Git与SVN区别 <a class="header-anchor" href="#git与svn区别" aria-label="Permalink to &quot;Git与SVN区别&quot;">​</a></h3><p>SVN：SVN是一个开放源代码的集中式版本控制系统，用于多个人共同开发同一个项目，实现共享资源。集中式版本控制系统：版本库是集中存放在中央服务器，开发者需要先从中央服务器获取最新的版本文件，然后开始干活，最后再把自己修改的文件推送到中央服务器。</p><p><img src="'+x+'" alt=""></p><p>Git:Git 是一个开源的分布式版本控制系统，是目前世界上最先进、最流行的版本控制系统。可以快速高效地处理从很小到非常大的项目版本管理。分布式版本控制系统：没有“中央服务器”，每个人的电脑上都是一个完整的版本库，联网开发不是必须的。但两两开发者之间肯定不会以qq或U盘形式传送，也有一台充当“中央服务器”的电脑（gitee和github）。此服务器的作用仅是用来方便“交换”各开发之间的修改。</p><p><img src="'+P+'" alt=""></p>',258),G=[S];function j(z,N,T,V,H,$){return n(),a("div",null,G)}const Q=s(w,[["render",j]]);export{M as __pageData,Q as default};
