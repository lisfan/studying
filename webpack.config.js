const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const webpack = require('webpack')
console.log('NODE_ENV: ', process.env.NODE_ENV) // 'local'
console.log('Production: ', process.env.production) // true
console.log('xxxx: ', process.env.xxxx) // true

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name]-numbers.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js',
    library: 'webpackNumbers',
    libraryTarget: 'umd'
  },
  // externals: ['lodash', 'jquery'],
  // devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: './dist',
  //   // hot: true
  // },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Code Splitting'
    }),
    // new ManifestPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    // new UglifyJSPlugin(),
  ],
};