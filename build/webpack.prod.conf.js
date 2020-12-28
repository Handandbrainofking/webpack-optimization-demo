const {merge} = require('webpack-merge')
const baseConfig = require('./webpack.base.conf.js')
const UglifyJsPlugin = require('terser-webpack-plugin');


module.exports = merge(baseConfig,{
    mode: 'production',
    optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: false,
				terserOptions: {
					mangle: true,
					compress: {
						unused: true,
						warnings: false,
						drop_debugger: true,
					},
					output: {
						comments: /^\**!|\"framework\"/i,
					},
                },
                extractComments: false //关闭输出license.txt文件
			}),
        ], 
    }
})