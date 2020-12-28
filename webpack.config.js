const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const VueLoader = require('vue-loader');
module.exports = {
    mode: 'development',
	entry: path.resolve(__dirname, './src/main.js'),
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].[hash:6].js',
	},
	devtool: 'cheap-module-eval-source-map',
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'@': path.resolve(__dirname, './src'),
		}
	},
	externals: [],
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
			new TerserPlugin({
				parallel: 4,
			}),
		],
	},
};
