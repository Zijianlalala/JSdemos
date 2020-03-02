# JSDemos
主要是模仿这个[实例](http://fgm.cc/learn/)实现的功能，在对照阅读人家的源码，看有哪些补充的。

## lesson 1
## lesson 2
### case 1
主要是用条件表达式替代复杂的if语句，不需要标志位进行判别
```
var flag = false;
function change() {
    if (flag) {
        content.className = 'hidden';
    } else {
        content.className = '';
    }
    flag = !flag;
}
// 修改后
function change() {
    content.className = content.className == 'hidden'?'':'hidden';
}
```
### case 2
实现居中
```
// style.css
#outer {
    width: 300px;
    margin: 10px auto;
}
// index.html

<div id="outer">
XXX
</div>
```
### case 3
检测键盘按下后的输入框内容以及正则表达式
```
// [^(\d)|(,)] 不包含数字和','的字符集合
var input = document.getElementByTagName('input');
input.onkeyup = function() {
    this.value = this.value.replace(/[^(\d)|(,)]/,'');
} 
```
