---

layout: firstStagefive

title: 一阶段 | 第五天

---

# CSS 浮动

## 学习目标

- 掌握浮动属性的应用
- 熟悉浮动元素的基础特性
- 能够说出浮动产生的的问题
- 掌握清浮动的方法

## 概述

网页中有很多布局效果，标准流没有办法完成，使用可以利用浮动改变元素默认的排列方式，举例说明（如网页中横向排列的模块或者一左一右排列的模块）

## 浮动的概念

浮动可以使元素【脱离文档流】，【按照指定方向排列】，直到遇到父元素的边界或另一个浮动元素【停止】

## 浮动属性

- float
  - left 左浮动
  - right 右浮动
  - float:none 不浮动(默认值)

## 浮动的基本特性

- 可以使块元素在一行排列
- 脱离文档流
- 提升层级

## 浮动的问题（为什么要清浮动）

- 子元素浮动导致父元素高度塌陷
- 影响之后元素的布局

## 清浮动的方法

解决问题即清除动的方法

- 父元素固定高度法

  - 描述：给浮动元素的父元素固定高度 
  - 缺点：不够灵活
  - 代码演示

- 父元素overflow方法

  - 描述：给父元素加 overflow 属性，overflow 为 visible 以外的其它值时可以帮助实现 
  - 缺点：可能会隐藏内容或触发不需要的滚动条 

- 额外标签法

  - 描述：在浮动元素的最后加一个空块元素，此元素本身不浮动，且添加样式clear:both;
  - clear属性说明
    - 作用：清除浮动
    - 取值
      - left
        both
        right
      - 提示通常使用both,
  - 缺点：代码冗余，影响代码可读性

- 伪元素:：after            ***

  - 描述：给浮动标签的父标签添加

    .clearfix:：after{
      content:"";display:block;clear:both;}

  - 优点：内容适应性强，不会在结构上产生冗余代码，可多次重复使用

  - 作为通用代码总结

## 浮动特性总结

- 脱离文档流
- 提升层级
- 对块元素的影响
  - 使块元素在一行排列
  - 未定宽度的块元素适应内容 
- 对行内元素的影响
  - 生成了一个块级框即
    （1）支持宽高
    （2）支持垂直方向的margin,padding
    （3）支持行高、text-align等文本属性
- 脱离文档流不脱离文本流

## 浮动特性应用实例

### 应用实例图文绕排

- 总结：浮动脱离文档流不脱离文本流 
- 扩展了解：
  最初只用于在成块的文本内浮动图像，
  现在它已成为在网页上创建多列布局的最常用工具之一
- 学员练习：以上课堂 代码

### 两列自适应

- 实现要点：单列定宽，单列自适应
- 浮动实现
  - 说明：
    左侧列固定，左侧浮动，右侧列使用margin-left预留位置。
    右侧列固定同理
  - 代码演示

## 滑动门

### 概述：

为了 使各种特殊形状的背景能够自由拉伸滑动，以适应元素内部的文本内容，出现了CSS滑动门技术。 最常见于各种导航栏的滑动门

### 实例预览

https://weixin.qq.com/


### 实现要点

- 特殊背景拼合
- 内容自适应
  - 浮动
  - 行内块

```
核心技术就是利用CSS精灵（主要是背景位置）和盒子padding撑开宽度, 以便能适应不同字数的导航栏。
结构：
<li><a href=""><span>首页</span></a></li>

a 设置 背景的右侧，padding-right撑开合适宽度。
span 设置背景左侧， padleft-left撑开合适宽度 剩下由文字继续撑开宽度。
之所以a包含span就是因为 整个导航都是可以点击的。 
```



## CSS 精灵

学习目标

- 能够说出什么是CSS精灵
- 掌握CSS精灵在实际示案例中的应用

### 概述

css精灵英文叫法 css sprites，通常被解释为“CSS 图像拼合”或“CSS 贴图定位”；其实就

<mark>是把网页中一些背景图片整合到一张图片文件中</mark>再

<mark>利用 CSS “background-image”，
“background- repeat”，“background-position”的组合进行背景定位</mark>，background-position 精确的定位出背景图片的位置

### 精灵图的原理

### 实现步骤：

(1)通常要限定容器大小

(2)图片拼合

(3)背景定位

### 优缺点

#### 优点

（1）减少网页的 http 请求，从而大大的提高页面的性能；
（2）图片命名上的困扰；
（3）更换风格方便。

#### 缺点

（１）必须要限定容器大小符合背景图元素位置
（２）需要计算位置。

```
- 应用场景：适用于一般小图片（如小图标，小背景），不适合大背景大布局背景。
```
