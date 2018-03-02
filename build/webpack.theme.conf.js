var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path')
var baseWebpackConfig = require('./webpack.base.conf')
var merge = require('webpack-merge')
var utils = require('./utils')
var config = require('../config')

var plugins = [
  new ExtractTextPlugin('[name].css'),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
]

delete baseWebpackConfig.output
delete baseWebpackConfig.entry

module.exports = merge(baseWebpackConfig, {
  entry:{
    ['zarm-vue.default']: path.join(__dirname, '../styles/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../release'),
    filename: 'zarm-vue.default.css'
  },
  plugins: plugins,
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.dev.cssSourceMap,
      extract: true
    })
  }
})
