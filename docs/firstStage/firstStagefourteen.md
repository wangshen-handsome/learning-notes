## CSS3 媒体查询

### 概述

- media type(媒体类型)是css 2中的一个非常有用的属性，通过media type我们可以对不同的设备指定特定的样式，从而实现更丰富的界面。
  media query(媒体查询)是对media type的一种增强，是CSS 3的重要内容之一
- 使用媒体查询，可以针对设备特性在不改变页面内容的情况下，为特定的输出设备输出特定的效果。

### 语法

#### 样式表内引入媒体查询

```
- 语法示例： @media  媒体类型 and|not|only  (媒体特性表达式) {   CSS-Code; }

- 媒体类型(media type)

  - all所有设备；
    screen 用于电脑屏幕，平板电脑，智能手机等；
    print 用于打印机和打印预览； 

- 设备特性(media feature)

  - width视口宽度；height视口高度；
    device-width设备宽度、device-height高度；

  - 横屏：  orientation:landscape  竖屏：orientation:portrait

  - 
        代码示例： 
        /* @media screen and (device-height:500px){
                body{
                    background:red;
                }
                div{
                    column-count:3;
                }
            } */
            /* 横屏 orientation:landscape   竖屏 orientation:portrait */
        @media screen and (orientation:portrait){
                body{
                    background:red;
                }
                div{
                    column-count:3;
                }
            }

- 操作符

  - and(与、和)
    not: not是用来排除掉某些特定的设备的，比如 @media not print（非打印设备)
    only: 用来定某种特别的媒体类型。
  - （以上逐个）
```

#### 在不同的媒体上使用不同的样式文件

- 语法：

  ```
  <link rel="stylesheet" media="mediatype and|not|only (media feature)" href="mystylesheet.css">
  ```

- 代码示例

  ```
      <link rel="stylesheet" href="lt600.css" media="screen and (max-width:600px)">
      <link rel="stylesheet" href="gt600.css" media="screen and (min-width:601px) and (max-width:1000px)">
      <link rel="stylesheet" href="gt1000.css" media="screen and (min-width:1001px)">
  ```

  

## CSS3 弹性盒

### 概述

Flex布局主要思想是提供一个更加有效的方式制定、调整和分布一个容器里的项目布局。
使容器有能力改变项目的大小、排列方向、对齐等，以最佳方式填充可用空间（因此可以适应设备屏幕大小的变化）

### 相关概念

- Flex容器：设置值为 flex 或 inline-flex ，该容器会成为 Flex容器
  Flex项目：该容器下的子元素，包括 文本节点，伪元素。
  主轴
  侧轴
  主（侧）轴起点
  主（侧）轴终点
- 注
  - 弹性容器外及弹性子元素内是正常渲染的。弹性盒子只定义了弹性子元素如何在弹性容器内布局
  - 设为Flex布局以后，容器的 column-*将失效，项目的float、clear和vertical-align属性将失效。

### 容器属性

#### flex-direction

- 作用：描述弹性盒项目的排列方向
- 取值 
  - row：横向从左到右排列（左对齐），默认的排列方式。
    row-reverse：反转横向排列（右对齐，从后往前排，最后一项排在最前面。
    column：纵向排列。
    column-reverse：反转纵向排列，从后往前排，最后一项排在最上面。

#### justify-content 

- 作用：弹性项沿着弹性容器的主轴线对齐
- 取值 
  - flex-start：弹性项目向行头紧挨着填充。这个是默认值。
    flex-end：弹性项目向行尾紧挨着填充。
    center：弹性项目居中紧挨着填充。
    space-between：弹性项目平均分布在该行上,相邻项目的间隔相等
    space-around：弹性项目平均分布在该行上，两边留有一半的间隔空间
    space-evenly: 弹性项目平均分布在该行上,相邻项目的间隔，项目与容器之间空间相等, 

#### align-items

- 作用：设置弹性盒子元素在侧轴（纵轴）方向上的对齐方式
- 取值
  - flex-start：侧轴起始位置对齐
  - flex-end：侧轴末端位置对齐
  - center：项目沿侧轴居中紧挨着填充。
  - baseline：基线对齐。
  - stretch：如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸

#### flex-wrap 

- 作用：指定弹性盒子的子元素换行方式
- 取值 
  - nowrap - 默认， 弹性容器为单行。该情况下弹性子项可能会溢出容器。
    wrap - 弹性容器为多行。
    wrap-reverse -反转 wrap 排列。

#### align-content 

- 作用：多根轴线的对齐方式 
- 取值 
  - stretch - 默认。各行将会伸展以占用剩余的空间。
    flex-start - 各行向弹性盒容器的起始位置堆叠。
    flex-end - 各行向弹性盒容器的结束位置堆叠。
    center -各行向弹性盒容器的中间位置堆叠。
    space-between -各行在弹性盒容器中平均分布。
    space-around - 各行在弹性盒容器中平均分布，两端保留子元素与子元素之间间距大小的一半。
- 注意：如果项目只有一根轴线，该属性不起作用，所以添加此属性需要设置盒子换行

### 弹性盒项目属性

#### order:

- 作用：用整数值来定义排列顺序，
- 数值小的排在前面。可以为负值。

#### align-self 属性

- 用于设置弹性元素自身在侧轴（纵轴）方向上的对齐方式
- auto：为元素的父元素的'align-items'值，
  flex-start：弹性盒子元素侧轴起始边对齐。
  flex-end：弹性盒子元素侧轴结束对齐
  center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。
  baseline：该值将参与基线对齐。
  stretch：如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸

#### flex

- 作用：用于指定弹性子元素如何分配空间。
  flex是 flex-grow、flex-shrink 和 flex-basis 属性的简写属性

##### flex-grow

- 作用：设置或检索弹性盒子的扩展比率。
- 取值 
  - 默认值是 0，表示即使用剩余空间也不扩展
  - 不带单位的数值
- 注意：当容器有剩余空间时有效

##### flex-basis

- 定义弹性盒子元素的默认基准值
- 取值
  - auto	默认值
  - number一个长度单位或者一个百分比
- 注意：与width同时存在时覆盖width值参与剩余空间计算
- 代码演示

##### flex-shrink 

- 定义弹性盒子元素的收缩比率
- flex 元素仅在默认宽度之和大于容器的时候才会发生收缩
- 默认值为1
- 注：如果元素不是弹性盒对象的元素，则以上属性不起作用。

### Calc概述：

calc 是英文单词 calculate( 计算 ) 的缩写，是 CSS3 的一个新增的功能

calc() 用于动态计算长度值。

#### 语法：

```
.box{ width: calc(100% - 100px);
```

#### 说明

任何长度值都可以使用calc()函数进行计算；
calc()函数支持 "+", "-", "*", "/" 运算；
calc()函数使用标准的数学运算优先级规则；

运算符前后都需要保留一个空格，例如：width: calc(100% - 10px)；

#### css3过渡：

###### transition:transition-property   transition-duration  transition-timing-function  transition-delay

- ###### transition-property:all/none/property   

  ###### width  height   background-color  opacity  (有具体值，可以设置)

  ​           display:none/block(不可以设置，浏览器无法解析到具体值，没法实现过渡效果)

- ###### transition-duration:过渡时间   time           以秒或者ms为单位

- ###### transition-timing-function:

  linear(默认)：规定过渡从开始到结束以匀速的方式进行过渡。

  ease:规定过渡效果以慢速开始，中间变快，以慢速结束。

  ease-in: 规定以慢速开始。

  ease-out:规定以慢速结束。

  ease-in-out:  规定过渡效果以慢速开始，慢速结束。

- ###### transition-delay:延迟时间   time    单位s或者ms

```
transition:width 1s linear 0.5s,height 1s linear 0.5s;
```



```
注意：过渡效果最好不要写在滑动事件里。
transition:all 1s linear 0.5s 
```

##### 

