var path = require("path");
var webpack = require("webpack");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = [
  "eval",
  "eval-source-map",
  "cheap-eval-source-map",
  "cheap-module-eval-source-map",

  "inline-source-map",
  "cheap-source-map",
  "cheap-module-source-map",
  "inline-cheap-source-map",
  "inline-cheap-module-source-map",

  "source-map",
  "hidden-source-map",
  "nosources-source-map",
].map(function (devtool) {
  return {
    entry: {
      bundle: "./src/index.js",
    },
    output: {
      path: path.join(__dirname, "js"),
      filename: `./[name]-${devtool}.js`,
    },
    devtool,
    plugins: [
      new webpack.optimize.CommonsChunkPlugin(["manifest"]),
      // new UglifyJSPlugin({
      //   sourceMap: true
      // })
    ],
  }
})
