'use strict'
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const VueLoader = require('vue-loader');


module.exports = {
	mode: 'production',
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
	module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {}
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new webpack.BannerPlugin({
		    banner: '// { "framework": "Vue"} \n',
		    raw: true,
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './web/index.html'
        })
    ],
	optimization: {
		minimize: true,
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
			}),
        ], 
    },
    node: {
        setImmediate: false,
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
};
