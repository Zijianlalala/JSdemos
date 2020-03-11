# lesson 5
第五课看起来主要练习事件，以及事件对象的各个属性
## case 1
为啥要取消冒泡？

点击页面其他地方隐藏ul

```
document.onclick = function() {
    oUl.style.display = 'none';
}
```

## case 2
鼠标当前的坐标`event.clientX,event.clientY`

## case 3
键盘按键对应的keyCode

## case 7
位置有关的属性
1. `document.documentElement.clientWidth,document.documentElement.clientHight` html文档的宽和高
2. `element.style.left,element.style.top` 元素绝对定位距离顶部和左边的距离
3. `element.offsetHeight/Width/Left/Top` 描述了元素相对于`offserParent`的边界值