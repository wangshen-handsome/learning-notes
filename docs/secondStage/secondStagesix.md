---

layout: secondStagesix

title: 二阶段 | 第六天

---

## 一、定时器

超时调用：

- 超时定时器，延迟执行，延迟某个特定的时间开始执行，只执行一次。
- 一般用于咨询弹框、网站广告弹窗等相关操作。

```
设置：var 定时器标识 = setTimeout(函数, 时间(毫秒));
清除：clearTimeout(定时器标识);
```



间歇调用：

- 间歇调用：隔某段时间执行一次，会一直执行
- 一般用于轮播图、倒计时、抽奖等相关操作。

```
设置：var 定时器标识 = setInterval(函数, 时间(毫秒));
清除：clearInterval(定时器标识);
```



## 二、运动框架封装

问题

1、不智能，点一下动一下（解决：添加定时器）

2、停不来（如果到了500，清除定时器）

3、多次点击会加速

4、对外界依赖过多

5、只能从左向右，还不能从右向左

6、没有封装

7、dir不应该由用户传入，而应该由程序确定

8、添加回调函数（以函数做为参数传入到某个函数内部，这个函数就是回调函数）



```js
// ele元素 attr要运动的属性 target目标
// callback回调函数：当运动到终点了，执行的函数，目的是告诉用户，我运动到了
function move(ele, attr, target, callback) {
    clearInterval(ele.timer); // 先清再开
    ele.timer = setInterval(function() {
        var now = parseInt(getStyle(ele, attr)); // 当前位置
        // 当前比目标小，则加过去，否则减过去
        var dir = now < target ? 10 : -10;
        now += dir;

        if ((now >= target && dir > 0) || (now <= target && dir < 0)) {
            now = target;
        }

        ele.style[attr] = now + 'px';

        if (now === target) {
            // 能够执行这里，就证明已经到终点了，可以执行回调函数了
            clearInterval(ele.timer);
            if (callback) {
                callback();
            }
        }
    }, 30);
}

function getStyle(ele, attr) {
    if (window.getComputedStyle) {
        // IE9及以上
        return window.getComputedStyle(ele)[attr];
    } else {
        // IE8及以下
        return ele.currentStyle[attr];
    }
}
```



## 三、轮播图





