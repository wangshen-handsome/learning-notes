## animation动画

### 概述

通过 CSS3，我们能够创建动画,可通过设置多个节点来精确控制一个或一组动画，常用来实现复杂的动画效果。

相比较于过渡，动画更加强大

如果要在 CSS3 中创建动画，需要使用 @keyframes 规则

### @keyframes

关键帧 @keyframes 规则通过.     在动画序列中定义关键帧的样式来控制CSS动画序列中的中间步骤

语法：

```
@keyframes 动画名{
	动画关键步骤{
		样式描述
	}
}
```

每个 `@keyframes` 规则包含多个关键帧，也就是一段样式块语句，每个关键帧有一个百分比值作为名称，代表在动画进行中，在哪个阶段触发这个帧所包含的样式。

例：

```
@keyframes slidein {
  from {
   left:0;
  } 
  to {
    left:50px;
  }
}
```

from,to表示开始、结束状态，也可以使用0%,100%定义

```
@keyframes slidein {
  0% {
    left:0; 
  }
  50%{
	left:50px;
}
  100% {
    left:100px;
  }
}
```

注：

- 如果一个关键帧规则没有指定动画的开始或结束状态，浏览器将使用元素的现有样式作为起始/结束状态
- 如果某一个关键帧出现了重复的定义，且重复的关键帧中的 CSS 属性值不同，则以最后一次定义的属性为准



### animation-name

- 作用：指定元素应用动画系列，每个名称代表一个由@keyframes定义的动画序列
- 取值
  - 默认 none	规定无动画效果
  - @keyframes定义动画名称

### animation-duration 属性

- 作用：定义动画持续的时间需要多少秒或毫秒完成
- 取值
  - 单位：以秒或毫秒计
  - 默认值为0，需要设置该属性，否则不会播放动画

### animation-timing-function

- 作用：定义动画的时间函数
- 取值
  - ● linear	动画从头到尾的速度是相同的。
    ● ease 	默认值。动画以低速开始，然后加快，在结束前变慢。
    ● ease-in	动画以低速开始。
    ● ease-out	动画以低速结束。
    ● ease-in-out	动画以低速开始和结束。

### animation-delay

- 作用：定义置动画在启动前的延迟间隔

- 取值

  - 以秒或毫秒计。
    - 以秒或毫秒计。默认值是 0
  - 默认值是 0
  - 允许负值，（-2s 使动画马上开始，但跳过 2 秒进入动画)

- 代码演示

- 学员练习+讲师巡班：课上代码

  ### animation-iteration-count

- 作用：定义动画播放次数

- 取值

  - ● n	定义动画播放次数的数值。
    ● infinite	规定动画应该无限次播放。

### animation-direction

- 作用：定义动画运动的方向
- 取值
  - normal：正常方向 
  - reverse：反方向运行  
  - alternate：动画先正常运行再反方向运行，并持续交替运行
  - alternate-reverse：动画先反运行再正方向运行，并持续交替运行

### animation-play-state 

- 作用：检索或设置对象动画的状态
- 取值：
  running:运动 
  paused: 暂停

## animation-fill-mode 

规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式

- 取值

- ​        forwards向前  动画结束之后停在结束帧状态

  ​        backwards向后 动画开始之前停在开始帧状态

  ​        both以上两者

### animation简写

`animation` 属性用来指定一组或多组动画，每组之间用逗号相隔。

- 值与值空格隔开

  ```
  animation: name duration timing-function delay iteration-count direction fill-mode play-state;
  ```

- 默认值：none 0 ease 0 1 normal

- 多组值语法：每组之间用逗号相隔

- 注意：两个时间，前面时间持续时间，后面的时间延迟时间

## transform 转换

### 概述

transform 属性向元素应用 2D 或 3D 转换。
该属性允许我们对元素进行平移、旋转、缩放或倾斜。
初始值是none。

### 2D转换

#### 概述

- 什么是2d转换

  使用CSS3 2D变换功能，可以对二维空间中的元素执行基本的变换操作，例如移动，旋转，缩放和倾斜。

  注：变换后的元素不会影响周围的元素，但可以像绝对定位的元素一样将它们重叠。但是，变换后的元素在其默认位置（未变换）仍会在布局中占用空间。

### 2d转换的方法

#### translate(x,y)

- 作用：沿X,Y轴位移，重新定位元素的坐标
- 取值:
  - px
  - 百分比（强调相对于元素本身计算）
  - 说明：允许负值，正值默认向右向下，负值向左向上

```
<div class="wrap">
	<div class="box"></div>
</div>
```



```css
.wrap{
    width:1000px;
    margin:0 auto;
    height:300px;
    border:5px solid #000;
}

.box {
    width: 100px;
    height: 100px;
    background-color: red; 
    transition:0.5s; 
} 
.wrap:nth-child(1):hover .box{
	transform:translate(100px,50px);
}   
.wrap:nth-child(2):hover .box{
	transform:translate(-100px,-50px);
}   

.wrap:nth-child(3):hover .box{
	transform:translate(50%,50%);
}   

.wrap:nth-child(4):hover .box{
	transform:translateY(100px) translateX(100px);
}   
```

#### scale(x,y) 

- 作用:沿x,y轴缩放元素大小
- 取值
  - 默认值为1；
  - 使用0~1之间的值缩小元素，
    使用超过1的值放大元素。

```
.wrap{
    width:1000px;
    margin:0 auto;
    height:300px;
    border:5px solid #000; 
}
.box { 
    width: 100px;
    height: 100px;
    background-color: red; 
    transition:0.5s; 
}
/* 选择第一个wrap鼠标滑过时，它内部的.box */
.wrap:nth-child(1):hover .box{
	transform:scale(2,0.5);
}   
.wrap:nth-child(2):hover .box{
	transform:scale(2);
}    
.wrap:nth-child(3):hover .box{
	transform:scaleY(2);
}  
.wrap:nth-child(4):hover .box{
	transform:scaleX(-2);
} 
```

#### skew(x,y)

- 作用：沿x，y轴倾斜元素
- 语法：
  skew(x,y)	水平方向和垂直方向同时倾斜
  skewX(x)	仅水平方向（X轴）倾斜
  skewY(Y)	仅垂直方向（Y轴）倾斜
- 取值：角度单位deg

```css3
.wrap{
    width:1000px;
    margin:0 auto;
    height:300px;
    border:5px solid #000; 
} 
.box {
    width: 100px;
    height: 100px;
    background-color: red; 
    transition:0.5s;
} 
.wrap:nth-child(1):hover .box{
    /* transform:skew(30deg); */
    transform:skew(-30deg);
}   
.wrap:nth-child(2):hover .box{
	transform:skew(30deg,10deg);
} 
.wrap:nth-child(3):hover .box{
	transform:skewX(30deg);
}   
.wrap:nth-child(4):hover .box{
	transform:skewY(30deg);
}      
```

#### rotate( angle )

- 作用： 定义2d旋转 
- 取值
  - 角度，单位deg
  - 正数表示顺时针旋转，负数表示逆时针旋转

```css
.box {
    width: 100px;
    height: 100px;
    background-color: red;
    transition:0.5s;
}
.wrap:nth-child(1):hover .box{
	transform:rotate(30deg);
}   
.wrap:nth-child(2):hover .box{
	transform:rotate(-30deg);
} 

```



### 转换基点

概述：transform-origin属性 定义变形原点（基点）

语法：

transform-origin：水平 垂直

取值

- 百分比
- px
- 关键字
  - 水平：left center right
    垂直：top  center bottom
- 说明：
  两个空格隔开的值，分别表示x,y轴的原点
  一个值时，另一个值默认center

### 3d变换

#### 什么是3d转换

定义元素在三维空间移动、缩放、旋转

### 3d转换的方法

#### rotateX(angle)

- 作用：沿着 X 轴旋转。
- 取值
  - 角度：单位deg 
  - 正值顺时针，负值逆时针

#### perspective属性(视距)   (600px-2000px)

- 作用：定义 3D 元素距视图的距离,       用来设置用户和元素3D空间Z平面之间的距离
- 取值
  - number 元素距离视图的距离，以像素计。
    none	   默认值。与 0 相同。不设置透视。
- 注意：当为元素定义 perspective 属性时，其子元素会获得透视效果，而不是元素本身

#### rotateY(angle)

- 作用：沿着 y 轴旋转。
- 取值
  - 角度：单位deg 
  - 正值顺时针，负值逆时针
- 代码演示

#### rotateZ(angle)

- 作用：	沿着 Z 轴旋转。
- 取值
  - 角度：单位deg 
  - 正值顺时针，负值逆时针
- 代码演示

#### translateZ( z )

- 作用：沿Z轴位移
- 取值
  - px
  - 不允许百分比值
- 代码演示

#### scaleZ( z ) 

- 作用：沿Z轴缩放
- 取值
  - 默认值为1
  - 使用0~1之间的值缩小元素，
    使用超过1的值放大元素。

### transform-style

指定嵌套元素是怎样在三维空间中呈现

取值：

- flat子元素将不保留其 3D 位置。
- preserve-3d子元素将保留其 3D 位置。
- 注
  - 具有两个作用，首先使子元素具有透视效果，其次使子元素保留父元素的3D位置
  - 如果不需要嵌套3D元素，就不需要这个属性



### animate动画库

#### 简介

animate.css 是一个来自国外的 CSS3 动画库，它预设了抖动（shake）、闪烁（flash）、弹跳（bounce）、翻转（flip）、旋转（rotateIn/rotateOut）、淡入淡出（fadeIn/fadeOut）等多达 60 多种动画效果，几乎包含了所有常见的动画效果。借助 animate.css 能够很方便、快速的制作 CSS3 动画效果

```
使用动画库不仅可以提升效率，也可以成为我们学习定义各种类型动画的一种方式

```

#### 地址：

https://animate.style/

https://daneden.github.io/animate.css/ 

#### 兼容

只兼容支持 CSS3 animate 属性的浏览器，他们分别是：IE10+、Firefox、Chrome、Opera、Safari。

#### 使用方法

操作步骤

1）引入文件

```
<link rel="stylesheet" href="animate.min.css">

```

2）添加类名

```
<div class="box animate__animated animate__wobble animate__delay-2s animate__faster animate__repeat-3"></div>

```

给元素加上 class 后，刷新页面，就能看到动画效果了。

#### 说明

```
animate__animated 定义动画持续的时间
animate__delay-2s 定义动画延迟的时间
animate__repeat 定义动画重复的次数
动画是无限播放的，可以添加类名 infinite
animate__faster  定义动画的速度

```

 



## 3d函数

- translate3d(X,Y,Z)   ---- translate3d(100px,200px,300px)
  - translateX(100px)  
  - translateY(200px)
  - translateZ(300px)
- Scale3d(x,y,z)   ---- Scale3d (1.5,2,0.5)
  - scaleX(1.5)
  - scaleY(2)
  - scaleZ(0.5)
- rotate3d(tx,ty,tz,角度)    
  - tx,ty,tz  矢量值 

```
  rotate3d(0,0,1,30deg)  沿Z轴旋转30deg   rotateZ(30deg)
  rotate3d(1,0,0,30deg)  沿X轴旋转30deg   rotateX(30deg)
  rotate3d(0,1,0,30deg)  沿y轴旋转30deg   rotateY(30deg)

```

其中两个不为0，tx,ty,tz相当于倍率  

```
  rotate3d(1,1,1,30deg)   沿X轴旋转30deg  沿y轴旋转30deg  沿z轴旋转30deg 
  rotate3d(0.5,1,0,30deg)  沿X轴旋转15deg  沿y轴旋转30deg   

```

