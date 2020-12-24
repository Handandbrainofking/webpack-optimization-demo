const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname,'./src/main.js'),
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: '[name]:[hash:6].js'
    },
    devtool: 'cheap-module-eval-source-map',
    resolve: {},
    externals: [],
    module:{},
    plugins: [
        new CleanWebpackPlugin()
    ],
    optimization: {
        // minimize: true,
        // minimizer: [
        //     new TerserPlugin()
        // ]
    }
}