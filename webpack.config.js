/**
 * Created by fengyang on 2017/4/7.
 */
var path = require("path");
module.exports ={
    devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
    context:path.resolve(__dirname,""),
   // entry:'./app/index.js',//单个入口文件
    entry:{
        //入口文件（数组或者字符串或者对象）
        index:'./src/js/index.js'
    },
    output:{
        publicPath: "/assets/",
        //chunkFilename: "[id].chunk.js",
        filename:'[name].bundle.js',//生成的文件名
        path:path.resolve(__dirname,"dist"),  //生成一个绝对路径   join（）拼接路径
        sourceMapFilename:'[file].map'
    },
    module:{
        //webpack2.0采用新版的配置
        noParse: /jquery|lodash/,//不解析一些特殊的引入
        rules:[
            {
                test:'/\.css$/',
                use:'css-loader'
            }

        ]

    }
};