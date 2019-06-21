const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const utils = require('./utils');
const config = require('../config');
const version = require('../package.json').version;

const plugins = [
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: '[name].css',
  }),
  // Compress extracted CSS. We are using this plugin so that possible
  // duplicated CSS from different components can be deduped.
  new OptimizeCSSPlugin({
    cssProcessorOptions: config.build.productionSourceMap ? { safe: true, map: { inline: false } } : { safe: true },
  }),
  new webpack.BannerPlugin(`zarm-vue stylesheets v${version}\n(c) 2018-${new Date().getFullYear()} ZhonganTech Engineering\nReleased under the MIT License.`),
];

delete baseWebpackConfig.output;
delete baseWebpackConfig.entry;

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  entry: {
    'zarm-vue.default': path.join(__dirname, '../styles/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../release'),
    filename: '[name].js',
  },
  plugins,
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.dev.cssSourceMap,
      userPostCss: true,
      extract: true,
    }),
  },
});
