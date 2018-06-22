const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const utils = require('./utils');
const config = require('../config');
const baseWebpackConfig = require('./webpack.base.conf');

delete baseWebpackConfig.output;
delete baseWebpackConfig.entry;

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
    }),
  },
  entry: {
    app: path.join(__dirname, '../example/deploy.js'),
  },
  // cheap-module-eval-source-map is faster for development
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    minimize: true,
    noEmitOnErrors: true,
    splitChunks: {
      chunks: 'async', // 必须三选一： "initial" | "all" | "async"
      minSize: 30000, // 最小尺寸
      minChunks: 2, // must be greater than or equal 2. The minimum number of chunks which need to contain a module before it's moved into the commons chunk.
      maxAsyncRequests: 5, // 最大异步请求数
      maxInitialRequests: 3, // 最大初始化请求书
      name: true, // 名称，此选项可接收 function
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
        },
        vendor: {
          name: 'vendor',
          test: /node_modules/,
          chunks: 'initial',
          priority: 10,
          enforce: true,
        },
        styles: {
          name: 'main',
          test: /\.scss|css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.build.env,
    }),
    new VueLoaderPlugin(),
    // extract css into its own file
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: utils.assetsPath('css/[name].[contenthash].css'),
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true,
        map: false,
      },
    }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: path.join(__dirname, '../example/index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency',
    }),
  ],
});
