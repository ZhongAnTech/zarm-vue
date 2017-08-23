var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var baseWebpackConfig = require('./webpack.base.conf')
var merge = require('webpack-merge')

var plugins = [
  new CleanWebpackPlugin(path.join(__dirname, '../lib'), {
    root: path.join(__dirname, '../'),
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }),
];

delete baseWebpackConfig.entry;
delete baseWebpackConfig.output;

module.exports = merge(baseWebpackConfig, {
  entry: {
    ['zarm-vue.umd.js']: path.join(__dirname, '../src/index.js'),
  },
  externals: [
    'vue',
  ],
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name]',
    library: 'zarm-vue',
    libraryTarget: 'umd',
  },
  plugins: plugins,
  stats: {
    color: true,
    reason: true,
  },
});
