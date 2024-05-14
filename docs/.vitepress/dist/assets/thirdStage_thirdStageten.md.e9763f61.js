import{_ as s,c as a,o as n,V as l}from"./chunks/framework.76e34d43.js";const p="/assets/4-1整理前.2315abcb.png",o="/assets/4-2整理后.68dcf4fa.png",e="/assets/4-3excel学生表.cbca1ebe.png",t="/assets/4-4excel老师表.9f9e6c3e.png",c="/assets/image-20211008210246005.6a9c03a3.png",r="/assets/image-20210517114438741.06bb4e92.png",C="/assets/image-20211008222719981.392f159c.png",i="/assets/image-20211008211008180.7903ed00.png",y="/assets/image-20210517141431058.c552da99.png",A="/assets/image-20211008213115200.5ad0d832.png",d="/assets/image-20210517142013616.ab4079dd.png",D="/assets/image-20210517144058272.3a36e2dd.png",h="/assets/image-20210517144155374.6afcd19b.png",F="/assets/image-20211008220657596.f8ef7138.png",g="/assets/image-20210517151053431.c75ad0a3.png",u="/assets/image-20211008221414422.70f65037.png",E="/assets/image-20210517151341627.1ab02aa2.png",m="/assets/image-20210517155956055.0559f55d.png",q="/assets/image-20210517160750527.72249766.png",b="/assets/image-20220317154155835.7301c971.png",N=JSON.parse('{"title":"三阶段 | 第十天","description":"","frontmatter":{"layout":"thirdStageten","title":"三阶段 | 第十天"},"headers":[],"relativePath":"thirdStage/thirdStageten.md","filePath":"thirdStage/thirdStageten.md"}'),_={name:"thirdStage/thirdStageten.md"},f=l('<h2 id="一、数据库介绍" tabindex="-1">一、数据库介绍 <a class="header-anchor" href="#一、数据库介绍" aria-label="Permalink to &quot;一、数据库介绍&quot;">​</a></h2><h3 id="_1-什么是数据库" tabindex="-1">1. 什么是数据库？ <a class="header-anchor" href="#_1-什么是数据库" aria-label="Permalink to &quot;1. 什么是数据库？&quot;">​</a></h3><p>数据库（database）是用来<strong>组织</strong>、<strong>存储</strong>和<strong>管理数据</strong>的仓库。当今世界是一个充满着数据的互联网世界，充斥着大量的数据。数据的来源有很多，比如出行记录、消费记录、浏览的网页、发送的消息等等。为了方便管理互联网世界中的数据，就有了数据库管理系统的概念（简称：数据库）。</p><h3 id="_2-常见数据库" tabindex="-1">2. 常见数据库 <a class="header-anchor" href="#_2-常见数据库" aria-label="Permalink to &quot;2. 常见数据库&quot;">​</a></h3><p>(1)<strong>MySQL</strong> 数据库，目前使用最广泛、流行度最高的开源免费数据库 (甲骨文)</p><p>(2)Oracle 数据库，收费 (甲骨文)</p><p>(3)SQL Server 数据库，收费 (微软)</p><p>以上三种属于传统型数据库，又叫做：<strong>关系型数据库</strong> ，这三者的设计理念相同，用法比较类似。</p><p>形式上数据表示方式也相似（以表的形式存在）</p><h3 id="_3-存储数据的方式" tabindex="-1">3. 存储数据的方式 <a class="header-anchor" href="#_3-存储数据的方式" aria-label="Permalink to &quot;3. 存储数据的方式&quot;">​</a></h3><p>存储数据的方式指的就是数据以什么样的结构进行存储。</p><h4 id="_3-1-传统物质分类" tabindex="-1">3.1 传统物质分类 <a class="header-anchor" href="#_3-1-传统物质分类" aria-label="Permalink to &quot;3.1 传统物质分类&quot;">​</a></h4><p>整理前： <img src="'+p+'" alt=""></p><p>整理后： <img src="'+o+'" alt=""></p><h4 id="_3-2-excel分类" tabindex="-1">3.2 excel分类 <a class="header-anchor" href="#_3-2-excel分类" aria-label="Permalink to &quot;3.2 excel分类&quot;">​</a></h4><p>​ 计算机中的数据，经常使用类似Excel 表的结构进行管理。每个 Excel 中，数据的组织结构分别为工作簿、工作表、数据行、列这 4 大部分组成。如图：</p><p><img src="'+e+'" alt=""></p><p><img src="'+t+'" alt=""></p><h2 id="二、mysql安装" tabindex="-1">二、mysql安装 <a class="header-anchor" href="#二、mysql安装" aria-label="Permalink to &quot;二、mysql安装&quot;">​</a></h2><p>安装phpStudy，它内部集成有mysql，只需要每次开机启动一下即可</p><p>MySQL数据库默认用户名：root，密码root</p><h2 id="三、数据可视化工具" tabindex="-1">三、数据可视化工具 <a class="header-anchor" href="#三、数据可视化工具" aria-label="Permalink to &quot;三、数据可视化工具&quot;">​</a></h2><h3 id="_1-简介" tabindex="-1">1. 简介 <a class="header-anchor" href="#_1-简介" aria-label="Permalink to &quot;1. 简介&quot;">​</a></h3><p>简介：操作数据库最古老的方式为cmd。这种方式不友好、也不美观，同时无法保存最近的操作命令，数据库可视化工具帮初学者解决了这一系列问题，对初学者非常友好，<strong>数据库可视化工具</strong>有很多，Navicat就是其中的一种，它界面直观、功能强大、操作简单，是市面上比较流行的一种数据库可视化工具。可视化工具让我们以更好友好的方式管理myql数据库</p><h3 id="_2-使用navicat工具" tabindex="-1">2. 使用navicat工具 <a class="header-anchor" href="#_2-使用navicat工具" aria-label="Permalink to &quot;2. 使用navicat工具&quot;">​</a></h3><h4 id="_1、连接数据库" tabindex="-1">1、连接数据库 <a class="header-anchor" href="#_1、连接数据库" aria-label="Permalink to &quot;1、连接数据库&quot;">​</a></h4><p>是让navicat与mysql建立联系，这样我们就可以使用navicat可视化的方式操作mysql。</p><p><img src="'+c+'" alt="image-20211008210246005"></p><p>连接名任意写，输入数据库密码、端口，都走默认</p><p><img src="'+r+'" alt="image-20210517114438741"></p><h4 id="_2、界面介绍" tabindex="-1">2、界面介绍 <a class="header-anchor" href="#_2、界面介绍" aria-label="Permalink to &quot;2、界面介绍&quot;">​</a></h4><p><img src="'+C+'" alt="image-20211008222719981"></p><p><strong>除了test测试数据库可以删除，其它都不能删</strong></p><p><img src="'+i+'" alt="image-20211008211008180"></p><h4 id="_3、创建数据库" tabindex="-1">3、创建数据库 <a class="header-anchor" href="#_3、创建数据库" aria-label="Permalink to &quot;3、创建数据库&quot;">​</a></h4><p>在连接名上右键，或左边空白处右键，有一个新建数据库</p><p><img src="'+y+'" alt="image-20210517141431058"></p><p><strong>我们创建了数据库，就相当于在电脑上创建了一个xlsx文件（xlsx文件是存放数据表的），每一个项目要对应一个数据库。而数据库中是一张一张的数据表</strong></p><h4 id="_4、mysql的数据库的数据类型" tabindex="-1">4、mysql的数据库的数据类型 <a class="header-anchor" href="#_4、mysql的数据库的数据类型" aria-label="Permalink to &quot;4、mysql的数据库的数据类型&quot;">​</a></h4><p><a href="https://www.runoob.com/mysql/mysql-data-types.html" target="_blank" rel="noreferrer">https://www.runoob.com/mysql/mysql-data-types.html</a></p><p>MySQL 支持多种类型，大致可以分为三类：字符串、日期/时间、数值</p><h6 id="_1、字符串" tabindex="-1">1、字符串 <a class="header-anchor" href="#_1、字符串" aria-label="Permalink to &quot;1、字符串&quot;">​</a></h6><ul><li><p><strong>varchar</strong> 不定长的字符串，如果在设计这张表的时候，设置了30，但实际存储数据的长度超过了30它会自动增长的</p></li><li><p><strong>char</strong> 固定长度的字符串，如：电话号，手机号，身份证号</p><p>比如：手机号：13344445555 身份证号：422823200008310045</p></li><li><p>text 大文本 如存储文章 、小说</p></li></ul><h6 id="_2、时间" tabindex="-1">2、时间 <a class="header-anchor" href="#_2、时间" aria-label="Permalink to &quot;2、时间&quot;">​</a></h6><ul><li>date 少用，而是用存储一个时间戳的字符串</li></ul><h6 id="_3、数值" tabindex="-1">3、数值 <a class="header-anchor" href="#_3、数值" aria-label="Permalink to &quot;3、数值&quot;">​</a></h6><ul><li><strong>int</strong> 整型</li><li><strong>tinyint</strong> 小整数值 0: 女 1：男 2：保密</li></ul><p>注意：数字类型少用，经常用字符串代替</p><h4 id="_5、设计表的规则" tabindex="-1">5、设计表的规则 <a class="header-anchor" href="#_5、设计表的规则" aria-label="Permalink to &quot;5、设计表的规则&quot;">​</a></h4><p><strong>每张表需要设计一个id（数据的唯一性），要设计成整型，并且自增，不能为空，主键(即当前列没有重复的值)</strong></p><p>每一个列都要设计数据类型</p><h4 id="_6、创建数据表" tabindex="-1">6、创建数据表 <a class="header-anchor" href="#_6、创建数据表" aria-label="Permalink to &quot;6、创建数据表&quot;">​</a></h4><p>想在哪个数据库下面创建数据表，就选中这个库下的表，右键，有一个新建表</p><p><img src="'+A+'" alt="image-20211008213115200"></p><p>以学生表为例：</p><p>它是一列一列的，有数字，字符串等等</p><p><img src="'+d+'" alt="image-20210517142013616"></p><p><strong>学生表的结构</strong></p><p><img src="'+D+'" alt="image-20210517144058272"></p><p><strong>创建好表之后，一定要保存</strong></p><p><img src="'+h+'" alt="image-20210517144155374"></p><h3 id="_3、管理数据" tabindex="-1">3、管理数据 <a class="header-anchor" href="#_3、管理数据" aria-label="Permalink to &quot;3、管理数据&quot;">​</a></h3><p><img src="'+F+'" alt="image-20211008220657596"></p><p>使用navicat通过点击鼠标的方式快速的进行：增、删、改、查</p><p><strong>注意：删除和更新是不可逆的，如果没有备份，是还原不了的</strong></p><h3 id="_4、备份" tabindex="-1">4、备份 <a class="header-anchor" href="#_4、备份" aria-label="Permalink to &quot;4、备份&quot;">​</a></h3><p>在数据库上右键 -&gt; 转储sql文件 -&gt; 结构和数据</p><p><img src="'+g+'" alt="image-20210517151053431"></p><p>当备份好了以后，我们就可以在数据库上右键删除数据库</p><p><img src="'+u+'" alt="image-20211008221414422"></p><h3 id="_5、还原" tabindex="-1">5、还原 <a class="header-anchor" href="#_5、还原" aria-label="Permalink to &quot;5、还原&quot;">​</a></h3><p>先新建数据库，库上右键-&gt;运行sql文件-&gt;找到相关文件-&gt;开始即可</p><p>比如我们创建test3数据库</p><p><img src="'+E+'" alt="image-20210517151341627"></p><h3 id="_6、数据库、表、行、字段的总结说明" tabindex="-1">6、数据库、表、行、字段的总结说明 <a class="header-anchor" href="#_6、数据库、表、行、字段的总结说明" aria-label="Permalink to &quot;6、数据库、表、行、字段的总结说明&quot;">​</a></h3><p>先安装数据库管理系统（mysql）</p><p>创建数据库（test1）：相当于xlsx文件</p><p>数据库文件要包含了各种各样的表：学生表、老师表、课程表、班级表</p><p>表：字段（数据类型）列</p><p>行：就是一条一条的数据记录</p><p>99%的时间在干什么 ？数据的增、删、改、查</p><h3 id="_7、表与表之间的关系" tabindex="-1">7、表与表之间的关系 <a class="header-anchor" href="#_7、表与表之间的关系" aria-label="Permalink to &quot;7、表与表之间的关系&quot;">​</a></h3><p>就是表与表之间通过某个字段产生关系，所以称为关系型数据库</p><p><img src="'+m+`" alt="image-20210517155956055"></p><h2 id="四、sql查询语言" tabindex="-1">四、SQL查询语言 <a class="header-anchor" href="#四、sql查询语言" aria-label="Permalink to &quot;四、SQL查询语言&quot;">​</a></h2><h3 id="_1-简介-1" tabindex="-1">1. 简介 <a class="header-anchor" href="#_1-简介-1" aria-label="Permalink to &quot;1. 简介&quot;">​</a></h3><p>SQL（英文全称：Structured Query Language）是结构化查询语言，专门用来访问和处理数据库的编程语言。能够让我们以编程的形式，操作数据库中表里面的数据。</p><h3 id="_2-sql语句特点" tabindex="-1">2. SQL语句特点 <a class="header-anchor" href="#_2-sql语句特点" aria-label="Permalink to &quot;2. SQL语句特点&quot;">​</a></h3><p>注意：mysql、Oracle、Sql Server它们特点基本相似，而且它们的编程语言都是sql。都可以用sql语句管理数据库。</p><p>sql语言不区分大小写。比如：SELECT和select是等价的。但是：有具体含义的单词命令官方建议用大写，自己起的名字用小写。 如username, age</p><h3 id="_3-sql能做什么" tabindex="-1">3. SQL能做什么 <a class="header-anchor" href="#_3-sql能做什么" aria-label="Permalink to &quot;3. SQL能做什么&quot;">​</a></h3><p>创建数据库、数据表。</p><p>更多的是对表中数据进行 <strong>增、删、改、查</strong>。</p><h3 id="_4-sql的主要内容" tabindex="-1">4. SQL的主要内容 <a class="header-anchor" href="#_4-sql的主要内容" aria-label="Permalink to &quot;4. SQL的主要内容&quot;">​</a></h3><p>分为主句和子句</p><p>主句：insert into增、update改 、delete删、select查</p><p>子句：where（and 和 or） 、order by 、group by 、limit、join...on</p><h3 id="_5-增删改查" tabindex="-1">5. 增删改查 <a class="header-anchor" href="#_5-增删改查" aria-label="Permalink to &quot;5. 增删改查&quot;">​</a></h3><p>在数据库下面的查询上点右键，点击新建查询并命名保存，即可以在查询编缉器里面写语句</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">-- sql环境下，两横线即注释</span></span></code></pre></div><h4 id="_5-1-添加数据" tabindex="-1">5.1 添加数据 <a class="header-anchor" href="#_5-1-添加数据" aria-label="Permalink to &quot;5.1 添加数据&quot;">​</a></h4><p>语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">INSERT INTO</span><span style="color:#A6ACCD;"> 表名 ( column1,column2,... ) </span><span style="color:#F78C6C;">VALUES</span><span style="color:#A6ACCD;"> ( value1,value2,value2,.... )</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 如果value的值是字符串则必须加引号</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 添加 尼古拉斯到student表中</span></span>
<span class="line"><span style="color:#F78C6C;">INSERT INTO</span><span style="color:#A6ACCD;"> student ( idcard,uname,</span><span style="color:#F78C6C;">password</span><span style="color:#A6ACCD;">,age,sex,pro,grade,tidcard ) </span><span style="color:#F78C6C;">VALUES</span><span style="color:#A6ACCD;"> ( </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">202111</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">尼古拉斯</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123456</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">33</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">河北</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">本科</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">10004</span><span style="color:#A6ACCD;"> )</span></span></code></pre></div><p><img src="`+q+`" alt="image-20210517160750527"></p><h4 id="_5-2-删除数据" tabindex="-1">5.2 删除数据 <a class="header-anchor" href="#_5-2-删除数据" aria-label="Permalink to &quot;5.2 删除数据&quot;">​</a></h4><p>语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">DELETE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> 表名 [WHERE 条件]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 注意：不加条件全删除，很危险</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 删除id为6的数据</span></span>
<span class="line"><span style="color:#F78C6C;">DELETE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> id</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">6</span></span></code></pre></div><h4 id="_5-3-更新数据" tabindex="-1">5.3 更新数据 <a class="header-anchor" href="#_5-3-更新数据" aria-label="Permalink to &quot;5.3 更新数据&quot;">​</a></h4><p>语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">UPDATE</span><span style="color:#A6ACCD;"> 表名 </span><span style="color:#F78C6C;">SET</span><span style="color:#A6ACCD;"> column1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> value1, column2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> value2, ... [WHERE 条件]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 把大明的年龄改成30 省份改成辽宁</span></span>
<span class="line"><span style="color:#F78C6C;">UPDATE</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">SET</span><span style="color:#A6ACCD;"> age</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">30</span><span style="color:#A6ACCD;">,pro</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">辽宁</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> uname</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">大明</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><h4 id="_5-4-查询数据" tabindex="-1">5.4 查询数据 <a class="header-anchor" href="#_5-4-查询数据" aria-label="Permalink to &quot;5.4 查询数据&quot;">​</a></h4><p>语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> 表名   						</span><span style="color:#676E95;font-style:italic;">-- *代表所有的列信息都展示</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> column1,column2,... </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> 表名  	</span><span style="color:#676E95;font-style:italic;">-- 只展示某些列信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 把所有的数据和所有的列都读出来</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- SELECT * FROM student</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 只读取学号，姓名，年龄</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- SELECT uname,idcard,age FROM student</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 只读取学号为 202100  的学生</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> idcard </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">202100</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 给某一个字段设置别名，将uname改为username</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> uname </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> username,age,sex </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> student</span></span></code></pre></div><h3 id="_6-其它子句" tabindex="-1">6. 其它子句 <a class="header-anchor" href="#_6-其它子句" aria-label="Permalink to &quot;6. 其它子句&quot;">​</a></h3><h4 id="_6-1-where-条件" tabindex="-1">6.1 where 条件 <a class="header-anchor" href="#_6-1-where-条件" aria-label="Permalink to &quot;6.1 where 条件&quot;">​</a></h4><table><thead><tr><th>运算符</th><th>描述</th></tr></thead><tbody><tr><td>=</td><td>等于</td></tr><tr><td>!= 或者 &lt;&gt;</td><td>不等于</td></tr><tr><td>&gt;</td><td>大于</td></tr><tr><td>&lt;</td><td>小于</td></tr><tr><td>&gt;=</td><td>大于等于</td></tr><tr><td>&lt;=</td><td>小于等于</td></tr><tr><td>BETWEEN value1 AND value2</td><td>在value1和value2之间的，包括它俩</td></tr><tr><td>NOT BETWEEN value1 AND value2</td><td>不在value1和value2之间的，不包括它俩</td></tr><tr><td>AND、OR</td><td>AND并且、OR或者</td></tr><tr><td>LIKE</td><td>搜索某种模式</td></tr></tbody></table><p>注意：where 可以应用在 SELECT、UPDATE、DELETE 等主句当中。只是不用在INSERT INTO中</p><p><strong>1、= != &gt; &gt;= &lt; &lt;=</strong></p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">-- 主句 WHERE column = VALUE</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 查询年龄大于25</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> age </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">25</span></span></code></pre></div><p><strong>2、BETWEEN ... AND</strong></p><p>注意：两边的区间是包含的</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">-- 主句 WHERE column BETWEEN VALUE1 AND VALUE2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 年龄为20-25之间的学生</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> age </span><span style="color:#F78C6C;">BETWEEN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AND</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">25</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 年龄不为20-25之间的学生</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> age </span><span style="color:#F78C6C;">NOT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">BETWEEN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AND</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">25</span></span></code></pre></div><p><strong>3、AND、OR</strong></p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">-- 主句 WHERE 条件1 AND 条件2    	并且</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 主句 WHERE 条件1 OR 条件2		或者</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 年龄大于20 且 性别为1(男)</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> age </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AND</span><span style="color:#A6ACCD;"> sex </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 年龄大于20 或者 性别为1(男)</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> age </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">OR</span><span style="color:#A6ACCD;"> sex </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span></code></pre></div><p><strong>4、LIKE</strong></p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">-- % 占位（即可有可无的任意字符串）</span></span>
<span class="line"><span style="color:#A6ACCD;">主句 </span><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> column </span><span style="color:#F78C6C;">LIKE</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">-- 在某个列中查询以a为开头的数据</span></span>
<span class="line"><span style="color:#A6ACCD;">主句 </span><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> column </span><span style="color:#F78C6C;">LIKE</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">--  在某个列中查询以a为结尾的数据</span></span>
<span class="line"><span style="color:#A6ACCD;">主句 </span><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> column </span><span style="color:#F78C6C;">LIKE</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%a%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">-- 在某个列中查询含有a的数据</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 查询以姓名为  a开头的数据</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- SELECT * FROM student WHERE uname LIKE &#39;a%&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 查询以姓名为  a结尾的数据</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- SELECT * FROM student WHERE uname LIKE &#39;%a&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 查询以姓名中包含a的数据</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- SELECT * FROM student WHERE uname LIKE &#39;%a%&#39;</span></span></code></pre></div><h4 id="_6-2-order-by排序" tabindex="-1">6.2 order by排序 <a class="header-anchor" href="#_6-2-order-by排序" aria-label="Permalink to &quot;6.2 order by排序&quot;">​</a></h4><p>语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">-- 以column进行排序，ASC升序（默认），DESC倒序</span></span>
<span class="line"><span style="color:#A6ACCD;">主句 </span><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> column [ ASC | DESC ]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> student  					</span><span style="color:#676E95;font-style:italic;">-- 默认不排序</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> age </span><span style="color:#F78C6C;">ASC</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">-- 按照年龄进行升序，不写ASC也是升序</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> age </span><span style="color:#F78C6C;">DESC</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">-- 按照年龄进行倒序</span></span></code></pre></div><h4 id="_6-3-limit" tabindex="-1">6.3 limit <a class="header-anchor" href="#_6-3-limit" aria-label="Permalink to &quot;6.3 limit&quot;">​</a></h4><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> 表名 [ LIMIT [start,]size ]  </span><span style="color:#676E95;font-style:italic;">-- start起始下标, size条数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 读取2条数据</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- LIMIT 2  取2条</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- LIMIT 2,3 从索引为2的位置取3条</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">LIMIT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">-- 取2条</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">LIMIT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">-- 从索引为1的位置取2条</span></span></code></pre></div><p><strong>灵魂子句</strong>。以后在使用SELECT的时候，如果是获取一组数组，一定要用上LIMIT</p><h6 id="分页原理公式" tabindex="-1">分页原理公式 <a class="header-anchor" href="#分页原理公式" aria-label="Permalink to &quot;分页原理公式&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">如果每页3条，共10条</span></span>
<span class="line"><span style="color:#A6ACCD;">	let pageSize = 3	每页条数</span></span>
<span class="line"><span style="color:#A6ACCD;">	let totalRow = 10	总条数</span></span>
<span class="line"><span style="color:#A6ACCD;">	let totalPage = Math.ceil(totalRow/pageSize)  =&gt; 4 总页数</span></span>
<span class="line"><span style="color:#A6ACCD;">	let page = 1 		当前的页码</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">第1页： LIMIT 0,pageSize    0=(page-1)*pageSize</span></span>
<span class="line"><span style="color:#A6ACCD;">第2页： LIMIT 3,pageSize    3=(page-1)*pageSize</span></span>
<span class="line"><span style="color:#A6ACCD;">第3页： LIMIT 6,pageSize    6=(page-1)*pageSize</span></span>
<span class="line"><span style="color:#A6ACCD;">第4页： LIMIT 9,pageSize    9=(page-1)*pageSize</span></span></code></pre></div><p><img src="`+b+`" alt="image-20220317154155835"></p><p>利用（页码-1）* 每页条数，即可得到截取的下标，也就是LIMIT的第一个参数start，而第二个参数条数是固定的，因此就可以得到当前页的数据</p><h4 id="_6-4-join连表查询" tabindex="-1">6.4 join连表查询 <a class="header-anchor" href="#_6-4-join连表查询" aria-label="Permalink to &quot;6.4 join连表查询&quot;">​</a></h4><p>正是因为我们的表与表是有关系的。同时为了表当中没有冗余数据，那么表当中就存储和表相关的数据。</p><p>表A中使用表B中的唯一性的一个列存储在表A中，就产生了关系 。</p><p>语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> 表1 </span><span style="color:#F78C6C;">JOIN</span><span style="color:#A6ACCD;"> 表2 </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> 连接条件   </span><span style="color:#676E95;font-style:italic;">-- 全连接。 只有on后面的条件成立时数据才会显示</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> 表1 </span><span style="color:#F78C6C;">LEFT JOIN</span><span style="color:#A6ACCD;"> 表2 </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> 连接条件 </span><span style="color:#676E95;font-style:italic;">-- 左连接  以左表为基准，左表的数据都会显示</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> 表1 </span><span style="color:#F78C6C;">RIGHT JOIN</span><span style="color:#A6ACCD;"> 表2 </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> 连接条件 </span><span style="color:#676E95;font-style:italic;">-- 右连接  以右表为基准，右表的数据都会显示</span></span></code></pre></div><p>学生的老师是谁</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">-- 字段名的前缀（防止出现出现两张表中有重复的字段，相当于找哪张表中的这个字段）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">JOIN</span><span style="color:#A6ACCD;"> teacher </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> student.tidcard </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> teacher.idcard</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">LEFT JOIN</span><span style="color:#A6ACCD;"> teacher </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> student.tidcard </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> teacher.idcard</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">RIGHT JOIN</span><span style="color:#A6ACCD;"> teacher </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> student.tidcard </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> teacher.idcard</span></span></code></pre></div><h6 id="表别名" tabindex="-1">表别名 <a class="header-anchor" href="#表别名" aria-label="Permalink to &quot;表别名&quot;">​</a></h6><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> teacher </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> t </span><span style="color:#F78C6C;">JOIN</span><span style="color:#A6ACCD;"> student </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> s </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> t.idcard </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> s.tidcard</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 如果起了别名，则后面只能用别名</span></span></code></pre></div><h6 id="字段别名" tabindex="-1">字段别名 <a class="header-anchor" href="#字段别名" aria-label="Permalink to &quot;字段别名&quot;">​</a></h6><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">-- 别名的概念 AS 别名，字段uname改为username</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> uname </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> username,age,sex </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> student</span></span></code></pre></div><h3 id="_7-补充" tabindex="-1">7. 补充 <a class="header-anchor" href="#_7-补充" aria-label="Permalink to &quot;7. 补充&quot;">​</a></h3><h4 id="_1、解决-id-不连续" tabindex="-1">1、解决 ID 不连续 <a class="header-anchor" href="#_1、解决-id-不连续" aria-label="Permalink to &quot;1、解决 ID 不连续&quot;">​</a></h4><p>运行下面三句话，注意替换表名即可</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> 表名 </span><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> id;</span></span>
<span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> 表名 </span><span style="color:#F78C6C;">ADD</span><span style="color:#A6ACCD;"> id </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FIRST</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> 表名 </span><span style="color:#F78C6C;">MODIFY</span><span style="color:#A6ACCD;"> COLUMN id </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> AUTO_INCREMENT,</span><span style="color:#F78C6C;">ADD</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">PRIMARY KEY</span><span style="color:#A6ACCD;">(id);</span></span></code></pre></div><h4 id="_2、select完整语法-jwgol" tabindex="-1">2、select完整语法：JWGOL <a class="header-anchor" href="#_2、select完整语法-jwgol" aria-label="Permalink to &quot;2、select完整语法：JWGOL&quot;">​</a></h4><p>子句是可以同时多个存在的，当多个存在时，则以 <code>JWGOL</code> 为顺序</p><p>即：J（join连表） W（where条件） G（group by分组） O（order by 排序） L（limit分页）</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> 字段名[ 表名.字段名 | 表别名.字段名 | 字段名 AS 字段别名 ], [...]</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> table_name[as table_别名]</span></span>
<span class="line"><span style="color:#A6ACCD;">[JOIN table_name2 ON 条件]  </span></span>
<span class="line"><span style="color:#A6ACCD;">[JOIN table_name3 ON 条件]  </span></span>
<span class="line"><span style="color:#A6ACCD;">[JOIN table_name4 ON 条件]  </span></span>
<span class="line"><span style="color:#A6ACCD;">[WHERE....]</span></span>
<span class="line"><span style="color:#A6ACCD;">[GROUP BY....]</span></span>
<span class="line"><span style="color:#A6ACCD;">[ORDER BY....]</span></span>
<span class="line"><span style="color:#A6ACCD;">[LIMIT 0,3]</span></span></code></pre></div>`,155),S=[f];function L(T,R,O,x,k,v){return n(),a("div",null,S)}const P=s(_,[["render",L]]);export{N as __pageData,P as default};
