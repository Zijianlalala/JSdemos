/*
功能实现
1. 按button，将相应的文字显示到p和strong标签上
（strong是覆盖掉，p是append上去）
2. 按等于号键，计算P中的字符串的值,并将结果显示到Strong标签上
3. 按C键清空p和s上的值
*/
// 计算
function calculate(num1, op, num2) {
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '×':
            return num1 * num2;
        case '÷':
            return num1 / num2;
        case '%':
            return num1 % num2;
        default:
            console.log('bad operator: ' + op);
    }
}
// 比较操作符优先级大小
function compare(a, b) {
    // 优先级表
    var degree = {
        '×': 2,
        '÷': 2,
        '%': 2,
        '+': 1,
        '-': 1
    };
    // 相等和小于一样操作
    if (degree[a] > degree[b]) {
        return true;
    } else {
        return false;
    }
}
function getResult(string) {
    // 设置两个栈，nums装操作数，ops装操作符
    var nums = new Array();
    var ops = new Array();
    var n1, n2, op, n3;
    var i = 0, j;
    var pattern = /\d+\.{0,1}\d*/;
    while (i < string.length) {
        console.log('------------ i: ' + i);
        var s = string[i];
        if (s.match(/\d/)) {
            // 是数字
            s = pattern.exec(string.slice(i));
            console.log('数字是: ' + s[0] +'长度是: ' + s[0].length);
            nums.push(Number(s[0]));
            i += s[0].length;
        } else {
            // 是操作符
            if (ops.length == 0) {
                ops.push(s);
            } else {
                if (!compare(s, ops[ops.length - 1])) {
                    // 栈顶操作符优先级高
                    n1 = nums.pop();// 操作数2
                    n2 = nums.pop();// 操作数1
                    op = ops.pop();
                    n3 = calculate(n2, op, n1);
                    console.log(n2 + op + n1);
                    nums.push(n3);
                    ops.push(s);
                } else {
                    // 外部操作符优先级高
                    n1 = nums.pop();
                    var num = pattern.exec(string.slice(i+1));
                    console.log('数字是: ' + num[0] +'长度是: ' + num[0].length);
                    n2 = Number(num);
                    n3 = calculate(n1, s, n2);
                    console.log(n1 + s + n2);
                    nums.push(n3);
                    i+=num[0].length;// 跳过下个数字
                }
            }
            i++;
        }
        console.log(nums);
        console.log(ops);
    }
    while (ops.length > 0) {
        op = ops.pop();
        n1 = nums.pop();
        n2 = nums.pop();
        n3 = calculate(n2, op, n1);
        console.log(n2 + op + n1);
        nums.push(n3);
    }
    return nums[0];
}
window.onload = function () {
    var num = this.document.getElementsByTagName('strong')[0];
    var string = this.document.getElementsByTagName('p')[0];
    var btns = this.document.getElementsByTagName('button');
    // 设置按钮选中反馈
    for (var i = 0; i < btns.length; i++) {
        btns[i].oldClass = btns[i].className;
        btns[i].onmouseover = function () {
            this.className != '' ?
                this.className += ' current' :
                this.className = 'current';
        }
        btns[i].onmouseout = function () {
            this.className = this.oldClass;
        }
    }
    // 设置数字键
    var numbers = this.document.getElementsByClassName('number');
    for (var i = 0; i < numbers.length; i++) {
        // 特殊处理小数点
        if (i == numbers.length - 1) {
            numbers[i].onclick = function () {
                if (num.textContent.length == 10) return false;
                if (num.textContent.indexOf('.') == -1) {
                    num.textContent += this.textContent;
                }
            }
            continue;
        }
        // 其他数字键
        numbers[i].onclick = function () {
            if (num.textContent.length == 10) return false;
            if (num.textContent.match(/^0$|[^(\d)|(\.)]/)) {
                num.textContent = '';
            }
            if (num.isOutcome) {
                num.isOutcome = false;
                num.textContent = '';
                string.textContent = '';
            }
            num.textContent += this.textContent;
        }
    }
    // 设置操作符键
    var operators = this.document.getElementsByClassName('operator');
    // 设置清除键
    operators[0].onclick = function () {
        num.textContent = '0';
        string.textContent = '';
    }
    //设置其他操作符键
    for (var i = 1; i < operators.length; i++) {
        operators[i].onclick = function () {
            if (num.textContent.match(/[^(\d)|(.)]/)) {
                string.textContent = string.textContent.replace(/\S$/, this.textContent);
                num.textContent = this.textContent;
                return;
            }
            if (num.isOutcome) { 
                string.textContent = num.textContent + this.textContent;
                num.textContent = this.textContent
                num.isOutcome = false;
                return;
            }
            string.textContent += num.textContent + this.textContent;
            num.textContent = this.textContent;
        }
    }
    // 设置等号键
    // 得出结果后，按操作符则需要重学p和s，按数组则清空p和重写s
    var enter = this.document.getElementsByClassName('enter')[0];
    enter.onclick = function () {
        // 计算stirng里面的表达式，妈耶这怎么算，最后还是自己写出来了！
        string.textContent += num.textContent;
        num.textContent = getResult(string.textContent);
        num.isOutcome = true;
    }
}

