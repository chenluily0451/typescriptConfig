const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry : {
       ts:'./src/ts/index.ts',
    },
    devtool:'inline-source-map', // 如果打包文件出错，可定位错误位置
    devServer : {
      contentBase:"./src/", // 开发模式启动目录配合package.json
      hot:true, // 运行时更新各种模块，而无需进行完全刷新
      port:2000
    },
    plugins:[
        // 编译后清空重新编译dist文件目录
        new CleanWebpackPlugin(),
        // 编译时更新html文件
        // new HtmlWebpackPlugin({
        //     title:'ts page'
        // }),
    ],
    output : {
        filename : '[name].bundle.js'
    },
    module:{
        rules : [
            {
                test:/\.tsx?$/,
                use:[
                    'ts-loader',
                ]
            }
        ]
    },
    resolve : {
        extensions : ['.tsx','.ts', '.js']
    }
}
