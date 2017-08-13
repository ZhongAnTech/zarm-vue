const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const plugins = [
  new CleanWebpackPlugin(path.join(__dirname, '../lib'), {
    root: path.join(__dirname, '../'),
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }),
  // new ExtractTextPlugin('zui-theme-default.css'),
];

const entries = {
  ['zarm-vue.umd.js']: path.join(__dirname, '../src/index.js'),
  // ['zui-theme-default.css']: path.join(__dirname, '../src/style.js'),
};
module.exports = {
  entry: entries,
  externals: [
    'vue',
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
  },
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
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
    ],
  },
};
