# lesson 4

## case 1
哇，第一个例子就这么难，要做导航栏以及二级导航。

二级导航是在以及导航的`li`底下放着的多个`a`标签，然后将这些`a`标签绝对定位以及`display`切换成行内元素

以及`js`中实现二级导航位置的代码

## case 2
实现轮播图

发现大佬很少用`if`语句，习惯用`&&`替代`if`语句
```
if (flag == true) {
    show()
}
// 改成

flag == true && show();

alpha > 100 && (alpha = 100)
```

图片淡入淡出的效果是用`setInterval()`来改变图片透明度实现的


## case 5
设置和获取css属性

函数重载可以用`switch`和`arguments`的参数来实现

直接获取`obj.style.width`是获取不到的，设置之后可以获得的到
> 只有把CSS `style`属性插入到标记里，才可以用 DOM `style`属性去查询那些信息。
> 
> 在外部样式表里声明的样式不会进入`style`对象，在文档的`<head>`部分里声明的样式也是如此。 

`window.getComputedStyle(elem, [pseudoElt]);`返回一个对象，该对象在应用活动样式表并解析这些值可能包含的任何基本计算后报告元素的所有CSS属性的值。

## case 7
注意`splice()`和`slice()`的区别

`word-wrap: break-word`允许长单词换到下一行

默认内容是放在HTML中的，而不是靠DOM生成的。

## case 9
`<span>`用来组合行内元素

`text-indent`规定文本块中首行文本的缩进

图片的显示与否用背景图的位置来决定