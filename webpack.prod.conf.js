const {merge} = require('webpack-merge')
const UglifyJsPlugin = require('terser-webpack-plugin');

const baseConfig = require('./webpack.base.conf.js')

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