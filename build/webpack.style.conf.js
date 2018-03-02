var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path')
var baseWebpackConfig = require('./webpack.base.conf')
var merge = require('webpack-merge')
var utils = require('./utils')
var config = require('../config')

var entries = require('../script/css-entry')();

var plugins = [
  new ExtractTextPlugin('[name].css'),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
]

delete baseWebpackConfig.output
delete baseWebpackConfig.entry

// 按需加载组件，通用reset样式
entries['base'] = path.resolve(__dirname, '../styles/base')

module.exports = merge(baseWebpackConfig, {
  entry:entries,
  output: {
    path: path.resolve(__dirname, '../release/lib/theme'),
    filename: '[name].css'
  },
  plugins: plugins,
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.dev.cssSourceMap,
      extract: true
    })
  }
})
