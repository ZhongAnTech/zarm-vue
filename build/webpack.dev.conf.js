const path = require('path');
const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  entry: {
    demo: resolve('./example/main.js'),
    site: resolve('./site/main.js'),
  },
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap }),
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env,
    }),
    new VueLoaderPlugin(),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'demo.html',
      template: 'example/index.html',
      favicon: 'site/styles/images/favicon.ico',
      chunks: ['demo'],
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'site/index.html',
      favicon: 'site/styles/images/favicon.ico',
      pathname: '/',
      chunks: ['site'],
      inject: true,
    }),
    new FriendlyErrorsPlugin(),
  ],
});
