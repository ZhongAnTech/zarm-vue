const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path')
const buildPath = path.resolve(__dirname, '../lib');

var plugins = [
  new ExtractTextPlugin('[name].css'),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
]

module.exports = {
  entry:{
    ['zarm-vue.default']:path.join(__dirname, '../styles/index.js')
  },
  output: {
    path: buildPath,
    filename: 'zarm-vue.default.css'
  },
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract([{
            loader: "css-loader",
            options:{minimize:true}
        }])
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
         'file-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract([{
            loader: "css-loader",
            options:{minimize:true}
        }, {
            loader: "sass-loader"
        }])
    }]
  }
}
