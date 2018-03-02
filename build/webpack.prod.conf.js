var path = require('path')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var merge = require('webpack-merge')

var entries = require('../script/find-entry')();
var env = process.env.NODE_ENV

delete baseWebpackConfig.entry;

/**
 * IMPORTNT: make sure .vue file do not have style section
 */

var webpackConfig = merge(baseWebpackConfig, {
  externals: [
    'vue',
    'autosize',
    'zscroller',
    'moment',
  ],
  entry: entries,
  output: {
    path: path.resolve(__dirname, '../release/lib'),
    filename: '[name].js',
    chunkFilename: '[id].[chunkhash].js',
    libraryTarget: 'commonjs2',
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    })
  ]
})

if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
