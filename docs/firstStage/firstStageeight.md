---

layout: firstStageeight

title: 一阶段 | 第八天

---

- 能够说出圣杯布局、双飞翼布局解决的是什么问题？
- 认识常见的CSS Hack
- 掌握PS的基础应用
- 熟练使用cutterman切图
- 掌握CSS项目规范

# 圣杯布局&双飞翼

## 分析实现要点

- 三列（不一定等高）
- 改变加载顺序，优先加载中间列—（结构上:中左右，显示效果上：左中右）
- 中间列自适应，两侧列固定

## 圣杯

#### HTML

```
 <div class="wrap">
        <div class="center">中间</div>
        <div class="left">左侧</div>
        <div class="right">右侧</div>
    </div>
```

#### CSS

```
.wrap:after{
content:"";
display: block;
clear: both;
}
.wrap{
border:1px solid #000;
padding:0 200px;
min-width:200px;
}
.left,.center,.right{
float:left;
}

.left{
width:200px;
min-height:200px;
background-color: pink;
margin-left:-100%;
position: relative;
left:-200px;
}
.right{
width:200px;
min-height:200px;
background-color: skyblue;
margin-left:-200px;
position:relative;
left:200px;
}

.center{
width:100%;
min-height:200px;
background-color: yellowgreen;

}
```

#### 圣杯实现步骤

- 外框左右固定padding值，预留左侧列和右侧列的列宽
- .center宽度100%，.left,.right固定宽度
- 结构上.center,.left,.right依次浮动在一行排列
- 移动.left通过margin-left:-100%配合相对定位position:relative,left:-200px;移动至左侧列位置
- 移动.right通过margin-left:-200px;配合相对定位position:relative;left:200px移动至右侧列位置

## 双飞翼

#### HTML

```
<div class="wrap">
    <div class="centerbox">
       <div class="center">中间</div>
    </div>
    <div class="left">左侧</div>
    <div class="right">右侧</div>
</div>
```

#### CSS

```
   .wrap:after {
            content: "";
            display: block;
            clear: both;
        }

        .wrap {
            border: 1px solid #000;
            min-width:600px;
           
        }

        .left,
        .centerbox,
        .right {
            float: left;
        }
        .centerbox{
            width:100%;
        }

        .left {
            margin-left:-100%;
            width: 200px;
            min-height: 200px;
            background-color: pink;
            margin-left: -100%;
          
        }

        .right {
            margin-left:-200px;
            width: 200px;
            min-height: 200px;
            background-color: skyblue;
            margin-left: -200px;
         
        } 
        .center {
            margin:0 200px;
            min-height: 200px;
            background-color: yellowgreen; 
        }
```

#### 双飞翼实现步骤

- .centerbox与.left,.right浮动在一行排列
- .centerbox固定宽度100%，left,.right固定宽度
- .centerbox内部嵌套.center,不定宽度，通过定义左右margin留出左侧列的宽和右侧列宽
- 移动.left通过margin-left:-100%实现
- 移动.right通过margin-left:-200px;实现

# CSS Hack

使用 CSS Hack 【可以控制不同浏览器及版本之间的显示差异】，

某些情况下处理兼容问题可以事半功倍，但【滥用会影响页面性能】，也会导致后期维护困难，因此尽可能减少对CSS Hack 的使用。

### 属性级hack

```
*星号   针对ie6、7
.box{ *display:inline }

_下划线  针对ie6  

.box{ _display:inline; }

\0    针对ie8+
.box{ background:blue\0; }
```

### 选择符级hack

```
*html .box{
 width:200px;
 height:200px;
 background:black;
} 
.box{
 width:100px;
 height:100px;
 background:red
} 
<div class="box"></div>


星号 *html   针对ie6

*+html .box {}  星号加号html  针对ie7
```

### 条件注释语句

```
<!--[if IE]>
		注释内容
<![endif]-->

<!--[if IE 6]>
	这是ie6
<![endif]-->

<!--[if IE 7]>
	这是ie7
<![endif]-->
<!--[if IE 8]>
	这是ie8
<![endif]-->
<!--[if IE 9]>
这是ie9
<![endif]-->
<!--[if gt IE 6]>
    这是大于ie6
<![endif]-->

    <!--[if IE]>
        <div class="box"></div>
    <![endif]-->
```



```
gt（greater than） 大于
gte（greater than or equal）大于等于
lt（less than） 	小于
lte（less than or equal）  小于等于
! 	非
```

  IE 条件注释判断语句是 【IE 特有的功能】，通过 HTML 注释中的条件语句能让不同的 IE 版本识别注释中的内容

  自【IE10起，标准模式不再支持条件注释】

# PS基础

## PS简介

[Adobe Photoshop，简称“PS”]，是由Adobe 开发和发行的[图像处理软件]。

Photoshop主要处理以像素所构成的数字图像。使用其众多的编修与绘图工具，可以有效地进行图片编
辑工作。

 

## 常用快捷方式

### 文件

- 新建  ctrl+n
- 打开 ctrl + o
- 关闭 ctrl+w
- 保存 ctrl+s
- 另存  ctrl+shift+s
- 存储为web所用格式 ctrl+alt+shift+s 

### 编缉

- 变换 ctrl+T
- 首选项——单位与标尺

### 图像

- 图像大小 crlt+alt+i
- 画布大小 crtl+ alt+c
- 裁剪
- 裁切 
- 选择
- 反选 ctrl+shift+I
- 取消选择 ctrl+D

### 视图

- ctrl+R  标尺
- 清除参考线
- 清除切片

### 窗口

- 图层F7
- 信息面板 F8
- 扩展或功能

## 常用工具

### 移动工具

- 自动选择——图层【分组】

- 对齐

  - 选中图层——选择对齐方式

### 放大镜

- 放大、缩小画布（默认放大，配合alt缩小）

- ctrl+加号 ctrl+减号  缩放

- alt+鼠标滚轮滚动（ 向前放大，向后缩小）

### 抓手工具

- 移动画布
  - 任何工具下配合空格键（转换为抓手工具）

### 文字工具

- 查看文字大小、字体、颜色
- 复制、粘贴文字

### 切片工具

#### 右键

##### 编缉切片选

- 修改位置 x,y，修改大小 w,h

##### 划分切片

- 右键划分切片（水平、垂直）

#### 存储

- ctrl+alt+shift+s存储为web所用格式
- 选中的切片
- 图片命名
- images文件夹

# 图片格式

在保证视觉效果的情况下，选择最小的图片格式与图片质量（通常选择 70-80 之间），以减少加载时间。

## PSD：

Photoshop默认保存的文件格式，可以保留所有有图层、色版、通道、蒙版、路径、未栅格化文字以及图层样式等。

## JPG：

- 色彩丰富 【不支持透明】            
- 压缩比高，生成文件体积小，
- 支持多种压缩级别可以控制文件大小
- 色彩丰富的图片（摄影图像（产品图，照片，渐变，banner图））

## GIF：

- 支持动画
- 支持透明（全透明）
- 颜色不够丰富，只支持256种颜色、文件小
- 适用于：色彩简单的logo/icon/动图

## PNG

- 颜色丰富
- 支持alpha透明（全透明和全不透明，半透明）  
- 早期的浏览器不支持PNG图像
- 适用于：透明背景图片【投影，发外光, 线条复杂（文字）】

## WebP

谷歌（google）10年推出一种新型图片格式

- 文件小，支持有损和无损压缩，支持动画、透明

- 但并不是所有浏览器都支持 webp

- 兼容

# Cutterman插件

## 介绍

Cutterman是一款运行在photoshop中的插件，能够自动将你需要的图层进行输出， 以替代传统的手工 "导出web所用格式" 以及使用切片工具进行挨个切图的繁琐流程。

 它支持各种各样的图片尺寸、格式、形态输出，方便你在pc、ios、Android等端上使用。 它不需要你记住一堆的语法、规则，纯点击操作，方便、快捷，易于上手。

## 下载

官网：http://www.cutterman.cn/zh/cutterman

## 安装

1. 下载对应工具的一键安装程序；
2. 解压下载的安装包, 里面是一个可执行文件, 双击打开；
3. 点击安装即可；

## 启用

- 安装完成后重启PS, 从菜单栏 -> 窗口 -> 扩展里头打开
- 注：需要登录

安装完成后重启PS, 从菜单栏 -> 窗口 -> 【扩展功能】-> 【cutterman】打开。

 



# 项目规范

- 根据项目名称创建项目文件夹。如：ucourse
- html、css、img、js 文件均归档至项目名称目录中 
- HTML 文件、根据页面内容以英文命名，首页或只有一个页面通常命名为index.html
- css 文件以英文命名，
  - 公用样式通常命名为reset.css（常用的浏览器样式）
  - public.css（多个页面时的公共模块的样式，或多次重复使用字体、字号、间距等样式）
  - 首页通常命名为index.css, 其他页面依实际模块或功能需求命名
- 图片文件命名尽量与其模块样式名称保持关联，尽量使用小写命名
  - （如登录框的背景与图片：login_bg.jpg、login_user_ico.gif 等）
  - 常用图片格式 gif 、png 、jpg

## 目录结构参考

```
---/html/
|---- /user/                    与用户相关的页面  
|---- /user/login.html          登录页
---/css/
|---- /reset.css                 重置浏览器样式    
|---- /page                        其他页面的css
|---- /page/pagename.css         单独某个页面的css
|---- /common.css                  css通用样式库
---/js/
|---- /lib                      公用组件
|---- /lib/jquery.2.2.3.min.js  调用jq库文件 
|---- /page                          其他页面的js
|---- /page/pagename.js         单独书写的js
|---- /common.js                公用方法
---/img/
|---- /page                     其他页面对应的图片
|---- /page/wap                 手机端图片夹
|---- /page/wap/wap_icon.png    手机端图标
|---- /logo.png                 公用图片

```

## HTML 书写规范

### 文档类型声明及编码：

- 统一为 html5 声明类型；
- 编码统一为 utf-8

### 书写规范：

- 书写时根据页面结构实现层次分明的缩进；
- 标签必合
- 属性值必须用双引号包括
- 通常小写字母

### 语义化 HTML：

- 根据页面结构选择合适的标签，
  - 如标题根据重要性用 h1-h6不同等级的标签标记 、段落标记用 p、结构简章重复的部分用 ul、li标签
  - 页面中重要的图片内容要添加 alt=””替换文本，以便图片丢失时，用户可以根据替换文本了解页面内容
- 根据模块内容定义class和id名称，
  - 如包含logo和搜索框等在内的头部标签用.header,包含联系信息，版权等的模块用footer或copyright.

### 合理嵌套HTML标签：

- 合理嵌套HTML标签，
  - ul和li是固定嵌套，ul直接子元素必须是li;
  - dl和dt,dd是固定嵌套，dl的直接子元素必须是dt和dd;
  - p标签不允许嵌套p标签
  - a标签可以嵌套块级标签，尽量不要嵌套交互性标签（button）
- 尽可能的控制元素嵌套层级，不合理的嵌套会影响页面性能

### 保证结构与表现相分离：

- CSS表现层和JavaScript表现层分别归属于独立的.css和.js文件。
- 在页面中尽量避免使用行内样式即 style=”…”或行间属性，尽量使用 class 或者 id 

## css 书写规范

### 编码：

编码统一为 utf-8

### 书写代码前

（1）确定版心（页面有效区）

（2）考虑样式表规划，提高样式重复使用率；

（3）提前沟通页面中模棱两可的需求和交互效果，方便后续合理布局；

（4）布局时考虑后续交互效果处理的便利性，必要时预留出交互效果中涉及到的样式类。

（如鼠标点击后的样式等）

### 书写代码时

（1）添加注释：应该为大区块样式添加注释 , 小区块适量注释；

（2） class 与 id 的命名

命名要语义化、简明化

- CSS命名时要加前缀***\*zg\****如：.zg_top{****}
  - 常用命名方法一：样式名称由小写英文、数字和 _ 来组合命名：
    - 如 top_left、top_nav; 
    - 避免使用中文拼音 , 尽量使用简易的单词组合
- 常用命名方法二：首字母大写，驼峰式命名
  - 如：topNav

（3）代码格式

- 保持代码缩进与格式
- 建议单行书写

(  4 ) 选择器

- 尽可能不使用通配符选择器 * 
- 合理使用id选择器（页面中唯 一的元素，如头部，底部）
- 避免使用标签限定id或者类选择器
  - 如：div#test { }   p.box {}
- 避免层集嵌套

## css 属性书写顺序：

- 建议遵循 : 
  - 特殊(文档流相关)属性 –> 盒模型 –> 装饰属性 –>内容排版相关
- （1）文档流相关属性（display, position, float, clear, visibility,）
  （2）盒模型相关属性（width, height, margin, padding, border）
  （4）装饰性相关属性（background, opacity, cursor）
  （3）内容排版相关属性（color, font, line-height, text-align, text-indent, vertical-align）
- 书写代码过程中要兼容问题，对熟知的兼容问题在书写代码过程中一并处理。



## 类名命名参考

main	页面主体
tag	标签
msg message	提示信息
tips	小技巧
vote	投票
friendlink友情链接
title	标题
summary	摘要
login_bar	登录条
search_input	搜索输入框
hot	热门热点
search	搜索
search_output	搜索输出和搜索结果相似
search_bar	搜索条
search_results	搜索结果
copyright	版权信息
branding	商标
logo	网站LOGO标志
site_info	网站信息
site_info_legal	法律声明
site_info_credits	信誉
join_us	加入我们
partner	合作伙伴
service	服务
regsiter	注册
arr arrow	箭头
guild	指南
site_map	网站地图
list	列表
home_page	首页
sub_page	二级页面子页面
tool, toolbar	工具条
drop	下拉
dorp_menu	下拉菜单
status	状态
scroll	滚动
tab	标签页
left right center	居左、中、右
news	新闻
download	下载