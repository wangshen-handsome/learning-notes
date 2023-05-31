---

layout: secondStagetwentyFour

title: 二阶段 | 第二十四天

---

## 一、bootstrap简介

#### 1、什么是Bootstrap？

- 来自于Twitter，是目前很受欢迎的前端框架之一
- 2011年8月在GitHub上发布的开源产品
- 是一个用于快速开发web应用程序和网站的前端框架
- 支持响应式布局。(响应式布局指的是一个网站能够兼容多种终端设备访问)



#### 2、部署Bootstrap

##### 1、官网下载

以v3的版本为例

官网: https://www.bootcss.com/

下载地址: https://v3.bootcss.com/getting-started/



##### 2、css、js、fonts三个文件夹

- css中要的是bootstrap.css和bootstrap.min.css，只需要这两个其中一个即可。
- js中有bootstrap.js和bootstrap.min.js，只需要一个即可 (下载jQuery，因为bootstrap都依赖于jQuery)。
- fonts为字体图标文件



##### 3、引入到项目中

注意：文档必须使用html5的文档类型

```html
<link rel="stylesheet" href="css/bootstrap.css">
<script src="js/jquery.js"></script>
<script src="js/bootstrap.js"></script>
```







## 二、全局的css样式

- 设置全局css样式
- 基本的html元素均可通过class设置样式并得到增强效果
- 先进的栅格系统

Bootstrap给用户写了很多的css样式，我们可以通过类名来使用。学习Bootstrap主要就是学习类名的使用。



#### 1、布局容器

Bootstrap认为每一个网页都应该拥有**固定的宽度**或者**占满容器的100%的宽度**。固定宽它应该在页面水平居中。

**加上边框可以看到**



##### 1、固定的宽度

使用类名：container（容器）

根据屏幕分辩率，宽有1170、970、750、auto四种情况。且两边会有15像素的padding（即加上padding是这个宽度）

- 大于等于1200：1170
- 大于等于992：970
- 大于等于768：750
- 小于768：auto

注意：

1、因为容器都有左右padding值，所以建议容器不要嵌套容器。

2、也可以给容器一个固定宽：`width:1000px !important;`，这样不论怎么样调整，都不会发生变化。



##### 2、百分百宽度

使用类名：container-fluid

宽100%，但是左右两边会有15像素的padding

```html
<div class="container">
    固定布局
</div>

<div class="container-fluid">
    流体布局
</div>
```





#### 2、栅格系统

**什么是栅格系统？**

Bootstrap 提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多12列。

栅格系统用于通过一系列的行（row）与列（column）的组合来创建页面布局，你的内容就可以放入这些创建好的布局中。

注意：

- 行（row）必须包含在container（固定容器）或container-fluid（流体容器）中
- 一行最多只能有12列，多了就会换行。



##### 1、栅格参数

![](/public/img/secondStage/twentyFour/栅格参数.jpg)

```
col-*-*
第一个*，可以是lg(大屏幕)  md(中等屏幕)  sm(小屏幕)  xs(超小屏幕)
第二个*，是1--12的数，代表占12分之几
```

```html
<div class="container">
    <div class="row" style="margin-top: 50px;">
        <div class="col-lg-1">1</div>
        <div class="col-lg-1">2</div>
        <div class="col-lg-1">3</div>
        <div class="col-lg-1">4</div>
        <div class="col-lg-1">5</div>
        <div class="col-lg-1">6</div>
        <div class="col-lg-1">7</div>
        <div class="col-lg-1">8</div>
        <div class="col-lg-1">9</div>
        <div class="col-lg-1">10</div>
        <div class="col-lg-1">11</div>
        <div class="col-lg-1">12</div>
    </div>
</div>
```



**案例：**

- 大屏幕：一行显示6列
- 中等屏幕：一行显示4列
- 小屏幕：一行显示3列
- 超小屏幕：一行显示2列

```html
<div class="container">
    <div class="row">
		<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
            <img src="img/rh.jpg" class="img-responsive" alt="">
        </div>
    </div>
</div>
```



##### 2、列偏移

使用 `.col-*-offset-*` 类可以将列向右侧偏移。这些类实际是通过使用 `*` 选择器为当前元素增加了左侧的边距（margin）。例如，`.col-md-offset-4` 类将 `.col-md-4` 元素向右侧偏移了4个列（column）的宽度。

偏移修改的是元素的margin值

**offset偏移**

`.col-*-offset-*`  第一个星，设备尺寸，如lg、md、sm、xs。第二个星代表偏移几个

```
col-*-offset-*
第一个*，可以是lg(大屏幕)  md(中等屏幕)  sm(小屏幕)  xs(超小屏幕)
第二个*，是1--12的数，代表在对应的屏幕下偏移12分之几

注意：修改的是元素的margin值
```



##### 3、列排序

通过使用 `.col-*-push-*` 和 `.col-*-pull-*` 类就可以很容易的改变列（column）的顺序

**push推    pull拉**

```
col-*-push-*
col-*-pull-*
第一个*，可以是lg(大屏幕)  md(中等屏幕)  sm(小屏幕)  xs(超小屏幕)
第二个*，是1--12的数，代表在对应的屏幕下推拉12分之几

修改的元素的position
```



##### 4、列嵌套

为了使用内置的栅格系统将内容再次嵌套，可以通过添加一个新的 `.row` 元素和一系列 `.col-sm-*` 元素到已经存在的 `.col-sm-*` 元素内。被嵌套的行（row）所包含的列（column）的个数不能超过12（其实，没有要求你必须占满12列）。



#### 3、排版样式

外面都加上容器

- `<h1>~<h6>`或者`.h1~.h6`
- `<strong></strong>`或者`<b></b>`   加粗
- `<em></em>`或者`<i></i>`   倾斜
- `<del></del>`或者`<s></s>`   删除线
- `<ins></ins>`或者`<u></u>`   下划线
- `.text-left`用于实现文本的水平居左对齐
- `.text-center`用于实现文本的水平居中对齐
- `.text-right`用于实现文本的水平居右对齐
- `.text-uppercase`用于将小写字母转为大写字母
- `.text-lowercase`用于将大写字母转为小写字母
- `.text-capitalize`用于实现单词首字母大写



#### 4、列表样式

分为有序列表、无序列表、定义列表三种

- class类：list-unstyled：用于将列表前面的项目符号去除掉，同时去除了列表默认的padding值
- class类：list-inline：将列表中的内容排列成同一行，并且增加了少量的padding值
- class类：dl-horizontal：给定义列表来使用，将定义标题与定义描述信息排列在同一行



#### 5、表格样式

- .table：为任意`<table>`标签添加`.table`类可以为其赋予基本的样式（少量的padding和水平方向的分隔线，且margin-bottom为20px）
- .table-bordered：添加边框
- .table-striped：隔行变色
- .table-hover：鼠标滑上效果
- .table-condensed：紧凑型的表格，将padding值减半
- 状态类：通过状态类可以为行和单元格设置颜色(只能给tr td th，不能给table设置)
  - .active：鼠标悬停在行或单元格上时所设置的颜色
  - .success：标识成功或积极的动作
  - .info：标识普通的提示信息或动作
  - .warning：标识警告或需要用户注意
  - .danger：标识危险或潜在的带来负面影响的动作



#### 6、按钮样式

给button或a、span均可

- .btn	表示按钮，它是所有按钮的父类名
- .btn-default	默认样式的按钮
- .btn-primary	重要的按钮
- .btn-success	成功的按钮
- .btn-danger	危险的按钮
- .btn-warning	警告的按钮
- .btn-info	一般信息的按钮
- .btn-link	链接状态的按钮
- .btn-lg	超大状态
- .btn-sm	小按钮
- .btn-xs	超小按钮



#### 7、图片样式

注意：只能给img标签设置

##### 1、响应式的图片

.img-responsive	响应式的图片

响应式的图片：其实质是为图片设置了 `max-width: 100%;`、 `height: auto;` 和 `display: block;` 属性，从而让图片在其父元素中更好的缩放（需要一个比较宽的图测试）



##### 2、图片的形状

- .img-rounded	圆角矩形图片
- .img-circle	圆形图片
- .img-thumbnail	圆角边框的图片



#### 8、表单样式

- .form-group	表单组，用于将label和表单input包起来
- .form-control	给input、textarea、select。元素都将被默认设置宽度属性为100%的圆角边框
- .checkbox    美化checkbox元素
- .form-inline	内联表单，这个类名一定是给form这个标签设置
- .form-horizontal	水平排列的表单，通过为表单form添加这个类，并联合使用栅格类，可以将label标签和控件组水平并排布局，这样做将改变form-group的行为，使其表现为栅格系统中的行（row），因此就无需再额外添加行（row）了。
- .control-label	给label标签，让它固定宽度，文字居右
- .sr-only	它是主要给label来设置的，将label隐藏起来



## 三、组件

组件包括字体图标、下拉菜单、导航等等。

#### 1、字体图标

https://v3.bootcss.com/components/#glyphicons

```html
<span class="glyphicon glyphicon-search" style="font-size: 50px;"></span>
<span class="glyphicon glyphicon-th-list" style="font-size: 50px;"></span>
```

#### 2、三角图标

- .caret	给span标签加一个class属性为caret即可

```html
<span class="caret"></span>

```

















