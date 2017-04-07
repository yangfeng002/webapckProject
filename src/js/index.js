/**
 * Created by fengyang on 2017/4/7.
 */

//引入lodash
//require('lodash');
function component () {
    var element = document.createElement('div');
    /* lodash is required for the next line to work
     Lodash 就是这样的一套工具库，它内部封装了诸多对字符串、数组、对象等常见数据类型的处理函数，
     其中部分是目前 ECMAScript 尚未制定的规范*/
    element.innerHTML ="hello webpack";
    return element;
}
document.write("hello webpack");
