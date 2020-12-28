const path = require('path')
const ROOT = path.resolve(__dirname, '..')
const ip = require('ip').address()

console.log(ip)

const config = {
    root: ROOT,
    //webpack-dev-server
    pluginConfigPath: 'plugins/plugins.json',
    pluginFilePath: 'plugins//plugin.js'
}