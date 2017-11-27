const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const webpack = require('webpack')

module.exports = function () {
  return {
    context: path.resolve(__dirname, "src"),
    entry: {
      index: path.resolve(__dirname, "src/index.js"),
    },
    output: {
      filename: '[name].js',
      chunkFilename: '[chunkhash].js',
      chunkLoadTimeout: 120000, // chunk 请求到期之前的毫秒数
      hotUpdateChunkFilename: '[id].[hash].hot-update.js',
      hotUpdateMainFilename: '[hash].hot-update.json',
      // hotUpdateFunction:()=>{},
      pathinfo: true,
      // publicPath: "/assets/",
      path: path.resolve(__dirname, 'dist'),
      devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]?[all-loaders]',
      devtoolFallbackModuleFilenameTemplate: 'webpack:///[absolute-resource-path].[id]?[all-loaders]',
      sourcePrefix: '\t',
      sourceMapFilename: '[file].map',
      strictModuleExceptionHandling: false,
      libraryTarget: 'umd',
      library: 'good',
      libraryExport: '',
      auxiliaryComment: 'module comment',
      umdNamedDefine: true,
    },
    module: {
      noParse: /jquery|lodash/,
      rules: [
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        }
      ]
    },
    resolve: {
      alias: {},
      aliasFields: ['browser'],
      unsafeCache: true,
      cacheWithContext: true,
      descriptionFiles: ["package.json"],
      enforceExtension: false,
      enforceModuleExtension: false,
      extensions: [".js", ".json"],
      mainFields: ["browser", "module", "main"],
      modules: ["node_modules"],
      plugins: [],
      symlinks: true,
      // cachePredicate:()=>{}
    },
    resolveLoader: {
      // moduleExtensions: ['-loader']
    },
    // devtool: 'cheap-module-eval-source-map', // 开发环境
    // devtool: 'nosources-source-map', // 生产环境
    // target: 'web',
    // watch:false,
    // watchOptions: {
    //   aggregateTimeout: 300,
    //   poll: 1000,
    //   ignore:'',
    // },
    // externals:{},
    // performance: {
    // hints: 'error',
    // maxEntrypointSize: 250000,
    // maxAssetSize: 250000,
    // assetFilter:()=>{}
    // },
    // stats: 'verbose',
    // node: {},
    // amd:{},
    // bail:false,
    // cache:false,
    // parallelism:1,
    // profile: true,
    // recordsPath: path.join(__dirname, './reports/webpack-bundle.json'),
    // recordsOutputPath: path.join(__dirname, 'records.json'),
    // recordsInputPath: path.join(__dirname, 'records.json'),
    devServer: {
      // host: 'localhost',
      useLocalIp: true,
      port: 8080,
      index: 'index.html',
      // open: true,
      // openPage: '',
      // allowedHosts: [],
      // before() {},
      // after() {},
      // hot:true,
      // hotOnly:true,
      // https: true,
      contentBase: path.join(__dirname, "dist"),
      publicPath: path.join(__dirname, "dist"),
      // watchContentBase: true,
      // watchOptions:{},
      // noInfo: false,
      // quiet: false,
      // lazy: false,
      // inline: true,
      staticOptions: {},
      compress: true,
      // disableHostCheck:false,
      // historyApiFallback:{},
      overlay: true,
      // filename: '',
      // headers: {},
      // public: '',
    },
    plugins: [
      new CleanWebpackPlugin([
        'dist', // 清空的目录，基于当前工作目录解析
      ], {
        // root: __dirname, // 当前解析的根目录，默认基于当前根目录
        // verbose: true, // 是否输出冗长的日志信息
        // dry: false, // 启用模拟模式
        // watch: false, // 重新编译时先移除
        // exclude: ['files', 'to', 'ignore'], // 排除这些文件的过滤
        // allowExternal: false // 允许清空webpack root外的内容
      }),
      new webpack.optimize.AggressiveSplittingPlugin(),
      new UglifyJSPlugin({
        // test: /.js($|\?)/i, // 只处理匹配的文件格式 - {RegExp | Array<RegExp>}
        // include: undefined, // 包括的文件 {RegExp | Array<RegExp>}
        // exclude: undefined, // 要过滤的文件 {RegExp | Array<RegExp>}
        cache: true, // 启用缓存，或者并设置缓存目录，默认缓存目录为`node_modules/.cache/uglifyjs-webpack-plugin` - {Boolean | String}
        parallel: true, // 使用多进程并行运行和文件缓存来提高构建速度。(建议启用)启用并行优化，也可以指定值并行数量，默认值为`os.cpus().length - 1` - {Boolean | //
                        // number}
        sourceMap: true, // 启用sourceMap - {Boolean}
        // extractComments: false, // 所有的代码注释都会输出到单独的文件，可以进行深度配置 - {Boolean|RegExp|Function<(node, comment) -> //
        // {Boolean|Object}>}
        // warningsFilter() {
        // }, // 过滤uglify的警告，{Function(source) -> {Boolean}}
        uglifyOptions: {}, // uglify配置项 - {Object}
      })
    ]
  }
}