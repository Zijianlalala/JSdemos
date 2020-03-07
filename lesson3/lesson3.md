
# lesson 3
## case 6
判断数字的位数，默认的想法是创建函数计算这个数字有几位

作者是直接用正则表达式进行判断字符串的位数`/^\d{2}$/`代表从头到尾就两个数字
## case 7
哇要吐了，做了一晚上，主要是写计算字符串算式的值花的时间多。
还没来得及看源码，今晚先这样吧，明天再看

看了源码，想看看人家怎么写的计算字符串表达式，结果有API，我佛了，`eval('1+1')`，直接返回结果

```
// 可计算某个字符串，并执行其中的JavaScript代码
eval()
// 我用到传统算法 两个栈， 一个存放数字，一个存放运算符，再建一个map存放运算符的优先级
```
## case 8
知识点
```
var date = new Date();
date.getHours();
date.getMinutes();
date.getSeconds();
setInterval(functionName, 1000);
```
