const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry : {
       app:'./src/index.js',
    },
    devtool:'inline-source-map', // 如果打包文件出错，可定位错误位置
    devServer : {
      contentBase:"./dist", // 开发模式启动目录配合package.json
      hot:true, // 运行时更新各种模块，而无需进行完全刷新
    },
    plugins:[
        // 编译后清空重新编译dist文件目录
        new CleanWebpackPlugin(),
        // 编译时更新html文件
        new HtmlWebpackPlugin({
            title:'feel ok'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output : {
        // path:path.resolve(__dirname,'dist'),
        filename : '[name].bundle.js'
    },
    module:{
        rules : [
            {
                test:/\.css$/,  // 可使用@引入css
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}
