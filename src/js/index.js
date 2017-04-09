/**
 * Created by fengyang on 2017/4/7.
 */
require('../css/style.css');
//var moment = require("moment");
//console.log(moment().format());
console.log("缓存机制");
require("jquery");
$("#main").html("hello webpack");
if (process.env.NODE_ENV === 'production') {
    console.log('Welcome to production');
}
if (process.env.DEBUG) {
    console.log('Debugging output');
}