---

layout: firstStagetwo

title: 一阶段 | 第二天

---

# Day02

能够说出表格的作用

- 了解表格常用标签、属性的使用
- 能够使用表格完成网页中数据表格的布局

### 表格简介

表格由 table 标签来定义。每个表格均有若干行（由tr 标签定义），每行被分割为若干单元格（由 td 标签定义）。
类比：excel表格&网页中的表格

### 表格的作用

- 之前：web开发人员过去也常常使用表格来完成整个网页布局，结构嵌套复杂修改维护困难被DIV+CSS取代


- 现在：用于显示、展示数据,(能够简捷迅速地查找或呈现不同类型的数据及它们之间的关系)

- 注意：现在HTML 表格应该用于表格数据，而不是来实现网页布局

### 表格基本标签

- table 

  - 语法: <table></table>
  - 作用:定义表格

- tr

  - 语法: <tr></tr>
  - 作用:定义表格中的行

- td

  - 语法: <td></td>
  - 作用：定义表格数据（table data）
    单元格可以包含文本、图片、列表、段落、表单、水平线、表格等等。
  - 默认样式:内容水平居左，垂直居中

- th

  - 语法:<th></th>
  - 作用:表示表头单元格，通常在行或列的开始处，定义行或列包含的数据类型 
  - 默认样式：字体加粗，内容水平居中，垂直居中

  ```html
  <table>
    <tr>
        <td>姓名</td>
        <td>年龄</td>
    </tr>
    <tr>
        <td>张三</td>
        <td>18岁</td>
    </tr>
    <tr>
        <td>王五</td>
        <td>12岁</td>
    </tr>
    </table>
  ```

  

### 表格常用属性

#### table属性

- width\height

  - 语法

    ```
    <table width="1000" height="500" border="1" cellpadding="0" cellspacing="0">
    ```

  - 作用：定义表格的宽或高

  - 注：省略单位 默认px

- border

  - 作用 ：使用表格的边框属性可以显示一个带有边框的表格。
  - 注意：如果不定义边框属性，表格将不显示边框。

- cellpadding

  - 作用：定义单元格中内容和边框之间的间距

- cellspacing

  - 作用：单元格和单元格之间的间距

#### td,th属性

语法：

```
<td width="100" height="100" align="center" valign="middle">
```

- width\height
  - 作用：定义单元格宽度、高度
  - 注意：省略单位 默认px
- align
  - 作用：单元格水平方向的对齐方式
  - 取值
    - left左对齐
    - center 居中对齐
    - right 右对齐
- valign
  - 作用：单元格垂直方向的对齐方式
  - 取值
    - top顶对齐
    - middle居中对齐
    - bottom底部对齐

### 表格结构标签

```
- caption
  - 语法：<caption></caption>
  - 作用：定义表格的标题
  - 默认样式：居中于表格之上
  - 注意：
    caption 标签必须紧随 table 标签之后
- thead 
  - 语法:<thead></thead>
  - 作用:用于组合 HTML 表格的表头内容
- tbody
  - 语法:<tbody></tbody>
  - 作用:用于组合 HTML 表格的主体内容
  - 提示：一个表格允许包含多个<tbody>
- tfoot
  - 语法：<tfoot></tfoot>
  - 作用：用于组合 HTML 表格的页脚内容
- 总结
  - 每个表格只能定义一个标题<caption>
  - thead,tbody，tfoot通常配合适用,用于划分表格语义，实现长表格分步加载，或通过改变结构顺序，优先加载tbody
```

### 合并单元格

- rowspan
  - 作用：跨行合并
    语法：<td rowspan="2"> 电话 </td>
- colspan
  - 作用：跨列合并
    语法：<td colspan="2"> 电话 </td>
- 操作步骤
  - 1.确定是合并行还是合并列
  - 2.找到目标单元格，添加合并属性如：<td rowspan="2"> 电话 </td>
  - 3.删除多余单元格

### 表格总结

- 未定宽度的表格、单元格适应内容
- 同一行只识别一个高，取最大值
- 同一列只识别一个宽，取最大值
- 表格可以包含其他HTML标签以及表格

# 初识CSS

### 学习目标

- 能够说出什么是CSS
- 熟悉CSS的语法规范
- 掌握CSS的三种引入方式，能够使用3种引入方式写一个红色的小方块

### 什么是CSS?

#### 全称

Cascading Style Sheets
通常称为CSS样式表或层叠样式表（级联样式表）

#### 作用

- 为HTML标记语言提供了一种样式描述
- 即【设置HTML页面中的元素的位置、排版、样式外观等】
  如文本内容（字体、大小、对齐方式等）、图片的外形（宽、高、边框等）

### CSS语法规范

CSS 规则由两个主要的部分构成：选择器、一条或多条声明

选择器:通常是需要改变样式的 HTML 标签。 

声明组：以大括号{}括起来

每条声明由一个属性和一个值组成,
属性与属性值之间以【冒号】分隔
多个声明，用【分号】将每个声明分开

### CSS引入方法

当读到一个样式表时，浏览器会根据它来格式化 HTML 文档，插入样式表的方法有三种:行间样式表，内部样式表，外部样式

#### 行间样式

概述：	

- 通过HTML元素的style属性设置样式称为行间样式

- 代码示例

  ```
  <div style="width:100px;height:100px;background-color:red;">div</div>
  ```

- 注：任何HTML元素都可以设置行间样式

- 缺点:1.结构样式没有分离 不利于后期维护 2.样式不能重复使用(推荐不使用)

#### 内部样式

- 概述：	

  在HTMLhead标签的内部，由style标签包含的样式称为内部样式

- 代码示例

  ```
  <head>
  	<style>css样式
  </style>
  ```

- 优点:1.结构样式分离 好维护 2.样式重用

- 缺点:只能在一个页面中使用css样式

#### 外部样式

- 概述

  - 外部样式表是指将CSS编写在扩展名为.css 的单独文件中,使用link标签引用

    - 新建外部样式表

    - 头部标签内部使用link标签引用

    ```
    <head>
    	<link rel="stylesheet" href="style.css">
    </head>
    ```

    - ###### 说明

      - href="" 资源链接的地址
      - rel表示引入文 件与当前文 档的关系
      - stylesheet为样式表

- 优点:1.结构化样式分离,好维护 2.样式重用 多个页面使用

###### 总结：

- 行间样式适用于某个元素拥有特殊样式时使用，结构 表现【不分离】
- 内部样式适用于单个页面拥有特殊样式时使用，结构表现【半分离】
- 外部样式适用于多个页面拥有相同样式时使用，结构表现【相分离】

#### css注释 

###### 什么是注释 ：

注释即对代码的解释和说明
不会被浏览器解析执行

```
<img src="image-20210428154410517(1).png" alt="image-20210427205152426" style="zoom: 67%;" />
```

###### 注释的语法：

```
CSS中的注释以"注释以/*开头，以*/结尾,开始和结束中间为注释内容
```

###### 注释的作用：

解释说明,标记不同代码节的开始
代码调试,用于在测试中临时禁用一段代码

###### 生成快捷方式：

 ctrl + /

# CSS选择器

### 学习目标

- 掌握常用选择器的使用
- 熟悉选择器的优先级关系
- 掌握调试工具的基本使用

### 什么是选择器

- CSS选择器是CSS规则的第一部分，每个CSS规则都以一个选择器或一组选择器为开始，
- CSS 选择器即用于“查找”（或选取）要设置样式的 HTML 元素的模式
- 选择器可以分为基础选择器、复合选择器

### 基本选择器

#### 通配（通用）选择器

- 语法 *{ 样式声明 }
- 作用：匹配任意类型的HTML元素

```html
<style>        
    /* 页面上所有元素都被选择 */
    *{
        background-color:green;
    }
        
</style>
<body>
    <p>p</p>
    <div>div1</div>
    <div>div2
        <div>div3</div>
    </div>
    
</body>
```

#### 元素名称选择器

- 语法： 元素名称{ 样式声明 }
- 作用：选择同一元素名称的所有元素

```
/* 选择body */
body{
	background-color:green;
}
/* 选择页面上所有的div */
div{
	width:100px;
	height:100px;
	background-color:red;
}
/* 选择页面上所有的p */
p{
	background-color: pink;
}

```

#### 类选择器

- 语法 
  - HTML中通过class属性定义
    如：<div class="box"></div>
  - css中以点进行标识:.
    .类名{ 样式声明 }
- 作用:选择所有带有指定类名的元素
- 多类名的使用
  - 语法：空格隔开

```html
<style>

.box{
	background-color:red;
}

.size{
    width:100px;
    height:100px;

}

</style>
<body>
    <p class="box size">p</p>

    <div class="box">div1</div>
    <div>div2
    <div class="box">div3</div>
    </div>
</body>

```

#### id选择器

- 语法 

  - HTML中通过id属性定义
    如：<div id="box"></div>

  - css中以点进行标识:#

    > #id名称{ 样式声明 }

- 作用:选择所有带有指定id名称的元素

```
#box{
	background-color:red;
}
<div id="box">div1</div>

```

注意：具有唯一性，一般用于页面唯一性的元素如头部、底部等，经常和 JavaScript 搭配使用

#### 类与id的命名规则

- 见词知义，尽量用英文；
- 始终建议以字母开头，可以包含数字、字母、下划线等
- 不要以数字开头
- 多个单词可以以驼峰式（newsCont）、中划线连接（news-cont）、下划线连接（news_cont）等

#### 总结

- 总结使用频率

  - 基础选择器中最常用是类选择器
  - id用于页面中唯一模块
  - 元素名称选择器定义的全局样式，单独使用要慎重
  - *号通常用于重置样式【最不常用】

- 结论

  - ```
    行间样式 1000> id选择器 100>类选择器 10> 标签选择器 1> 全局选择器0   优先级
    
    ```

    ```



# CSS 表格

### 学习目标

- 掌握表格常用css属性
- 能够实现1像素表格细线边框
- 概述：使用 CSS 可以大大提高 效率，更灵活的控制HTML 表格的外观表现

### 表格边框

指定 CSS 表格边框，使用 border 属性，通常定义td,th的边框属性

表格会呈现双边框，是因为表和 th / td 元素有独立的边界。

table存在默认属性border-collapse：separate

### 表格的折叠边框

border-collapse表示折叠边框

- 取值
  - separate：边框独立（默认值）
  - collapse：相邻边被合并

### 单元格内容的垂直对齐 

- vertical-align 作用：垂直对齐属性设置垂直对齐，比如顶部，底部或中间
- 常用值
  - top顶部对齐
  - middle居中对齐
  - bottom底部对齐

#### 小节：如何使用css实现表格的1像素边框

```
table{
	border-collapse:collapse;
}
th{
	/*简单代过*/
	border:1px solid red;
}
td{
	border:1px solid red;
}

```

# CSS字体 ,文本属性

#### 学习目标

- 熟练掌握css常用文本属性
- 熟练掌握css常用字体属性
- 能够说出颜色的常用表示方法

#### font-family：

- 作用：设置文本的字体系列

- 语法：font-family:字体名称

- 常用值：

  - 一个字体名称或系列名称（介绍常用字体名称、字体系列）

    - 微软雅黑   Microsoft YaHei

    - 宋体       simsun

    - 黑体     HeiTi

    - 楷体     KaiTi

    - Mac OS的一些：

      华文细黑：STHeiti Light [STXihei]

      华文黑体：STHeiti

      华文楷体：STKaiti

      华文宋体：STSong

      华文仿宋：STFangsong

  - 多个字体名称

    - 逗号分开
      如果浏览器不支持第一个字体，则会尝试下一个（回退机制）

      ```
      .box{
         /*font-family:"微软雅黑","宋体";*/
          /*font-family:"宋体","微软雅黑"; *//*与上一个相比产生的效果不同，谁在前使用哪一个*/
          font-family:"微软雅黑","宋体";  /*第一个任意改写一个系统不存在的字体，会按照第二个字体显示*/
      }
      
      ```

- 注意如果字体名称包含空格、汉字、特殊字符，必须加引号。

  ```
  .box{font-family: "Microsoft YaHei";}
  
  ```

#### font-size

- 作用：设置字体的大小
- 语法：font-size:值
- 常用值：
  - 长度值（通常是像素px）
  - 百分比（相对于父元素计算）
- em
  - 相对单位
  - 如果用于字号，相当于父元素字号计算，如果用于其它属性，相对于当前元素的字号
- 大多数浏览器的默认值字号：16px



#### font-style

- 作用：设置字体的形态
- 语法：font-style:值
- 常用值：
  - normal默认值
  - italic斜体显示



#### font-weight

- 作用：设置字体粗细
- 语法：font-weight:值
- 常用值：
  - normal默认值
  - bold加粗
  - 100-900九级字重，  400相当于normal,700相当于bold
  - 注：不是所有字体都内置了九级字重

#### line-height

- 作用：设置行高（效果是产生文本行间距）

- 语法：line-height:值

- 特性:实现单行文本的垂直居中

- 测量：文字高+行间距

- 常用值

  - normal默认。设置合理的行间距。

  - px 设置固定的行间距。

  - number设置数字，此数值会与当前的字号相乘来设置行间距。

  - 百分比:相对于font-size计算

  ```
  .box{
  	/*line-height:2;*/
  	line-height:200%; /*产生的效果一致都是字号的两倍*/
  }
  
  ```

#### font简写

- 作用：设置所有字体属性

- 语法：font: 字体风格 字体加粗 字号/行高  字体;

  - 依次【空格】隔开

- 总结：只有当【字号和字体】同时存在简写才是有效的，简写属性可以精简简代码

  ```
  .box2{
  	/* font:italic bold 20px "宋体"; */
  	font:20px "宋体";
  }
  
  ```

#### text-align：

- 作用：设置文本的水平对齐方式
- 语法：text-align:值
- 常用值
  - left居左对齐 [默认值]。
  - right居右对齐。
  - center居中对齐。
  - justify两端对齐
- 注：适用于块状元素

#### text-decoration

- 作用：设置文本装饰
- 语法：text-decoration:值
- 常用值
  - none 默认。定义标准的文本。 【常用】
  - underline 定义文本下的一条线 【常用】
  - line-through 定义穿过文本的一条线。【比较常用】
  - overline 定义文本上的一条线。 【不常用】

#### text-indent

- 作用：设置文本块首行的缩进
- 语法：text-indext:值
- 常用值
  - 默认值：0
  - 长度值，px,em(更方便)
  - 百分比: 相对于元素内容宽进行计算
  - 允许负值

#### color

- 作用：设置文字的颜色

- 语法：color:颜色值

- 常用值

  - 颜色的常用表式方法

    - 颜色名称：如red、blue等

    - 十六进制颜色表示方法. 0123456789ABCDEF

      - 语法：如#ff0000   0-f
      - 说明：#rrggbb
        r,g,b取值范围为00-ff 
        - r red  红色
        - g green 绿色
      - b  blue 蓝色
      - 认识常见颜色的写法
      - 白色（#ffffff）、黑色（#000000）
        红色（#ff0000）、绿色(#00ff00)、蓝色(#0000ff)
      - 颜色简写

    - rgb颜色表示方法

      - 语法：rgb(255,0,0)     

        ```
        15*16的0次 +15*16的1次=  255
        
        ```

      - 说明：rgb(r,g,b)
        r,g,b取值范围为0-255 

    - 认识常见颜色的写法

      - 白色： rgb(255,255,255) 、黑色 : rgb(0,0,0) 
        红色：  rgb(255,0,0) 、绿色： rgb(0,255,0) 、蓝色： rgb(0,0,255)   

  - transparent透明色

```
简单渗透:字体文本属性大多具有继承性

可继承的属性
    font-size
    font-family
    font-style
    font-weight
    font
    line-height
    text-align
    text-indent
    color


```
