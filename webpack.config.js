const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    mode: 'development',
	entry: path.resolve(__dirname, './src/main.js'),
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].[hash:6].js',
	},
	devtool: 'cheap-module-eval-source-map',
	resolve: {
		extensions: ['.js', 'vue', '.json'],
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	externals: [],
	module: {},
	plugins: [
		new CleanWebpackPlugin(),
		new webpack.BannerPlugin({
		    banner: '// { "framework": "Vue"} \n',
		    raw: true,
		})
	],
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				parallel: 4,
				// minify: (file, sourceMap) => {
				// 	// https://github.com/mishoo/UglifyJS2#minify-options
				// 	const uglifyJsOptions = {
				// 		/* your `uglify-js` package options */
				// 	};

				// 	if (sourceMap) {
				// 		uglifyJsOptions.sourceMap = {
				// 			content: sourceMap,
				// 		};
				// 	}
				// 	return require('uglify-js').minify(file, uglifyJsOptions);
				// },
				extractComments: {
				    banner: ()=> {
				        return '// { "framework": "Vue" } \r\n'
				    }
				}
			}),
		],
	},
};
