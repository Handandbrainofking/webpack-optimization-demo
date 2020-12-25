const path = require('path')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname,'./src/main.js'),
    output: {
        path: path.resolve('./dist'),
        filename: '[name].[hash:6].js'
    },
    module: {},
    plugins: []
}