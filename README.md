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

### case 4
主要是样式，怎么用HTML+CSS实现对话框和阴影

阴影：使用div标签,绝对定位,覆盖整个页面
```
    /* 阴影部分 */
    #overlay {
        position: absolute;
        top: 0;
        left: 0;
        <!-- 覆盖整个页面 -->
        width: 100%;
        height: 100%;
        background: #000;
        <!-- 半透明 -->
        opacity: 0.5;
        filter: alpha(opacity=50);
        display: none;
    }
```

对话框：div实现网边框，顶部状态栏用h2，关闭按钮用span
```
html
<div id="win">
    <h2>
        <span id="close">×</span>
    </h2>
</div>

```

DOM编程艺术说如果用JS实现的功能，尽量让JS创建元素

### case 5
访问对象的元素除了点运算符还可以用属性名称来访问。

尽量保持抽象，可扩展性大大提高。

清空元素属性`removeAttribute('style')`

### case 6
ul li的排版

### case 7
思路是先把格式调好，移动鼠标到具体导航栏上时，先全部置否，再讲选中的置真，并先将具体内容删除，再生成对应的li添加到内容上

### case 10
主要是显示叠加元素，将上层元素设置为绝对定位，然后隐藏，时机成熟再让他显示出来

### case 11
主要是加载图片的过程有反馈动画
