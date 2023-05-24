

# 移动端web开发

### 移动端web开发现状

- 移动端浏览器大多基于webkit内核， 对H5+CSS3支持良好

- 手机的屏幕尺寸非常多，不同的移动设备有不同的屏幕尺寸、视口大小

  ```
  设备的屏幕尺寸查询: https://uiiiuiii.com/screen/	
  ```

我们开发的网页，在不同的手机上，若想展示效果一致，必然不是为每一种型号手机都开发一套页面，而是要尽可能的能适配所有

### 视口

了解视口相关概念及理想视口的设置 是移动Web开发非常重要环节。

#### 什么是视口？

视口简单来说就是浏览器显示页面内容的区域。

在PC端，正常的视口宽度就是整个浏览器的窗口可视区的宽度，会随着浏览器窗口大小的重置而缩放；

大多数为PC端设计的网站宽度至少为800px,为了不破坏没有针对移动设备优化的PC网页，移动端引入了视觉视口、布局视口、理想视口三个概念

#### 视觉视口

视觉视口是指用户当前看到区域，即设备宽度（用户正在看到的网站的区域，与设备屏幕一样宽。）

#### 布局视口

移动设备的浏览器都默认设置 了一个viewport元标签，定义了一个虚拟的布局视口，布局视口使视口与移动端浏览器屏幕宽度完全独立开。CSS 布局将会根据它来进行计算，并被它约束。 

大部分移动设备默认的 viewport 为 980px,不同设备上的浏览器的默认的宽度并不一样。 

所以PC上的网页基本能在手机上呈现，只不过看上去很小，一般默认允许用户通过手动缩放、平移来查看网页。

  

#### 理想视口

布局视口对用户不友好，基于理想视口设计的网站，不需要用户手动缩放，也不需要出现横向滚动条，网站的所有内容都可以正常的呈现给用户。

理想视口可以使用 HTML 中的 meta 标签显式设置布局视口等于设备宽度

```
<meta name="viewport"
    content="width=device-width,initial-scale=1.0,maximum-scale=1">
```

属性说明:

| width         | 正整数或device-width  | 定义视口的宽度，单位为像素                          |
| ------------- | --------------------- | --------------------------------------------------- |
| height        | 正整数或device-height | 定义视口的高度，单位为像素，一般不用                |
| initial-scale | [0.0-10.0]            | 定义初始缩放比率                                    |
| minimum-scale | [0.0-10.0]            | 定义最小缩放比例，它必须小于或等于maximum-scale设置 |
| maximum-scale | [0.0-10.0]            | 定义最大缩放比例，它必须大于或等于minimum-scale设置 |
| user-scalable | yes （1）/ no（0）    | 定义是否允许用户手动缩放页面，默认值 yes            |



## 移动端适配方案

由于手机屏幕尺寸、分辨率不同，还要要考虑横竖屏问题，为了使得web页面在不同移动设备上具有尽可能统一或合理的展示效果，需要在开发过程中使用合理的适配方案。

 常见的适配方案如下：

### rem适配

#### rem单位介绍

Rem( font size of the root element) 是指相对于根元素的字体大小的单位 , 即根据 html 元素的 font-size来计算大小。

大多数浏览器的默认字号是16px，因此默认1rem=16px。

#### rem布局原理

在布局过程中只要使用 rem 设置元素的尺寸，在改变 rem 的基准值 html 的字体大小的时候，页面上的元素将等比例缩放实现适配。

例：

```
.box{
	 width:1rem;
	 height:1rem;
}
@media screen and (min-width:320px){
	html{
		font-size:16px;
	}
}
@media screen and (min-width:640px){
	html{
		font-size:32px;
	}
}
```

由于设备尺寸繁多需要设置密集的断点因此通过js动态计算并设置html的fontsize值是最常用的方式

#### rem适配实现

##### 2. rem布局：

通过媒体查询查询移动端不同设备下的宽度，通过1rem的字体基础值与html字体进行关联，实现页面的自适应。默认1rem=16px;

rem:相对于html根标签的单位       预设750px设计稿下  1rem=100px;

==当前屏幕的字体基础值=屏幕的宽度*预设的字体基础值/设计稿宽度==

当前屏幕的字体基准值=屏幕的宽度*100px/750px

第一步：设置视口。

第二步：确立好基准值，使用rem单位代替px.

第三步：换算不同屏幕尺寸下1rem的值                  预设750px设计稿下  1rem=100px;

​     rem+媒体查询 

​     1.确定设备屏幕的宽度

​		  @media  设备  and  (min-width:px){

​					html{ 

​							font-size:设置字体基准值。

​						}

​			}

设备：screen

```
@media screen and (min-width:320px){
	html{
		font-size:42.67px;
	}
}
@media screen and (min-width:360px){
	html{
		font-size:48px;
	}
}
@media screen and (min-width:375px){
	html{
	  font-size:50px;
	}
}
@media screen and (min-width:414px){
	html{
		font-size:55.2px
	}
}
@media screen and (min-width:560px){
	html{
		font-size:74.67px
	}
}
@media screen and (min-width:640px){
	html{
		font-size:85.3px
	}
}
@media screen and (min-width:750px){
	html{
		font-size:100px
	}
} 
第二种：
<script>
	//获取html宽度（设备宽度）
    var deviceWidth = document.documentElement.clientWidth;    

	// 750可以根据实际设计稿的宽度进行修改
    if(deviceWidth>750){ //假设设计稿为750
       deviceWidth = 750;
    }
    var fs = (deviceWidth*100)/750;
    document.documentElement.style.fontSize = fs + 'px';
    
</script>
320px 1rem=20px   640px 40px     20px/320px=当前屏幕字体基准值/640px
```

 以上代码假设基准值为设计稿，设计稿宽度为750px,如果页面宽度低于750px,那么页面中html的font-size也会按照（当前页面宽度/750）的比例变化。这样，页面中所有应用了rem的作尺寸单位的元素都会随着页面变化而等比例缩放，从而达到适配。

### vw适配

#### vw单位介绍

vw 即Viewport's width的简写，是css3规范中的视口单位，

相对于视口的宽度，视口被均分为100单位的vw。

```
相关阅读：
除此之外还有vh单位 即Viewport's height，相对于视口的高度，视口高度被均分为100单位的vh。
vmax相对于视口的宽度或高度中较大的那个。其中最大的那个被均分为100单位的vmax。
vmin相对于视口的宽度或高度中较小的那个The 。其中最小的那个被均分为100单位的vmin。
```

#### 使用vw单位实现适配

1vw 等于视窗宽度的1%，在页面布局中将px值换算成vw,

当视口宽度发生变化，则元素大小随即发生变化。

提示：可以借助插件自动计算

缺点：转换后的长度单位不够直观修改维护困难

#### 使用rem+vw单位实现适配

沿用rem布局方案，所有的布局元素及属性都用rem做单位,用vw单位设置html的font-size,这样就不再需要JS来动态计算根元素字体大小。

```
换算过程:

假设在750px的设计稿下，可以理解为100vw,对应750px
沿用rem布局方案中的html{font-size:100px}换算为vw那么 1vw = 7.5px
100px就是13.333333vw了
```

然后我们就可以在布局写rem单位了, 由于倍率是100,除以100,直接小数点向左移动2位,1rem是100px,那么10px就是0.1rem，不需要借助插件转换计算也可以直观的进行布局了。

##### rem+vw;

vw是相对于视口宽度的单位，当视口宽度发生变化，则元素大小随即发生变化。

vh是相对于视口高度的单位

此处注意：rem+vw布局不需要设置媒体查询和js代码，就可以进行一个自适应

将视口分为100份。一份相当于1vw。

以750px 的设计稿为例   视口平分100份

750px=100vw  ==》 1px=0.13333333vw   ==》  100px=13.33333vw   100px = 1rem

px-》vw->rem的转换  

注意字体基准值的设置：

```
       html{
            font-size:13.3333333vw;
       }
```



```
        .div_con{
            width:2rem;   //此处可以直接使用rem单位。
            height:2rem;
            background:red;
        }
```

插件 px-to-rem

将px单位转换为rem-->快捷键alt+z

在设置--》setting.json中，将字体基准值改为100

## 15.4移动端项目

### 项目介绍

#### 项目名称：

小U商城

#### 项目描述

小U商城是面向移动端的专业综合网上购物商城，我们要完成 首页、列表页、详情页等静态页面的制作

#### 技术选型

布局采取rem适配布局

#### 设计图尺寸

本设计图采用 750px 设计尺寸

#### 开发工具

- VScode
- Ps 















