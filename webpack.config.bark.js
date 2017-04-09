/**
 * Created by fengyang on 2017/4/7.
 */

var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var DashboardPlugin = require('webpack-dashboard/plugin');
var webpack = require("webpack");
module.exports ={
    //devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
    devtool: "cheap-eval-source-map",
    context:path.resolve(__dirname,""),
   // entry:'./app/index.js',//单个入口文件
    entry:{
        //入口文件（数组或者字符串或者对象）
        index:'./src/js/index.js'
    },
    output:{
        filename:'[name].bundle.js',//生成的文件名
        path:path.resolve(__dirname,"dist/assets"),  //生成一个绝对路径   join（）拼接路径
        sourceMapFilename:'[file].map'
    },
    module:{
       rules:[
           {
               test: /\.css$/,
               use: [
                   { loader: 'style-loader'},
                   {
                       loader: 'css-loader',


                       options: {
                           modules: true
                       }
                   }
               ]
           },
           /*{
               //新打包一个css文件
               test:/\.css$/,
               use:ExtractTextPlugin.extract({
                   fallback: "style-loader",
                   use: "css-loader",
                   publicPath: "/dist"
               }),
               option:{}//指的是请求的参数，或者说是条件
           },*/
           {
               test:/\.ts$/,
               loader:'ts-loader',
               options:{
                   transpileOnly: false,
                   ident: "by-ident"
               }
           }

       ],
        // 在配置中添加插件
        plugins: [
            // 构建优化插件
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: 'vendor-[hash].min.js',
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    drop_console: false,
                }
            }),
            new ExtractTextPlugin({
                filename: 'build.min.css',
                allChunks: true,
            }),
            new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
            // 编译时(compile time)插件
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"production"',
            }),
            // webpack-dev-server 强化插件
            new DashboardPlugin(),
            new webpack.HotModuleReplacementPlugin(),
        ]

    }
};