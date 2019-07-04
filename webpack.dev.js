const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './src',
        hot:true
    },
    plugins: [

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('develop')
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
});
