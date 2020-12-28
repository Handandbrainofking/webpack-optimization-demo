'use strict'
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');


module.exports = {
	mode: 'development',
	// watch: true, // 监听代码更改，动态打包
	entry: path.resolve(__dirname, './src/main.js'),
	output: {
		path: path.resolve('./dist'),
		filename: '[name].[hash:6].js',
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	module: {},
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.BannerPlugin({
		    banner: '// { "framework": "Vue"} \n',
		    raw: true,
		})],
	optimization: {
        // 优化导出的模块
        usedExports: true,
		// minimize: true,
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: false,
				// extractComments: {
				//   banner: '// { "framework": "Vue" } \n'
				// },
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
			}),
        ],
        
	},
};
