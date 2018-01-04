const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');
const CompressionPWebpacklugin = require("compression-webpack-plugin")
const I18nWebpackPlugin = require("i18n-webpack-plugin")
const NpmInstallPlugin = require('npm-install-webpack-plugin')
const webpack = require('webpack')
// const ZopfliWebpackPlugin = require("zopfli-webpack-plugin");
const WebpackManifestPlugin = require("webpack-manifest-plugin");
// const OfflinePlugin = require('offline-plugin');
const WebpackSplitByPath = require("webpack-split-by-path");
const CoreJsPlugin = require("core-js-webpack-plugin");
const GeneratePackageJsonPlugin = require("generate-package-json-webpack-plugin");
const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const ModuleMappingPlugin = require('module-mapping-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { UnusedFilesWebpackPlugin } = require("unused-files-webpack-plugin")
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const BundleDuplicatesPlugin = require("bundle-duplicates-plugin");
const StatsPlugin = require('stats-webpack-plugin');
const ShakePlugin = require('webpack-common-shake').Plugin;
const WebpackMessages = require('webpack-messages');
const Dotenv = require('dotenv-webpack');
let FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')
const RawBundlerPlugin = require('webpack-raw-bundler');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');

module.exports = function () {
  return {
    context: path.resolve(__dirname, "src"),
    entry: {
      app: path.resolve(__dirname, "src/entry-01.js"),
      // vendor: ['jquery', 'lodash'],
      // vendor: './path/to/vendor.js', // 所有需要单独打包的依赖放在这里
      // common: './path/to/common', // 大的工具包，且更新少的，打包在一起
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      // filename: '[name].[chunkhash].js',
      filename: '[name].js',
      chunkFilename: '[chunkhash].js',
      chunkLoadTimeout: 120 * 1000, // chunk 请求到期之前的毫秒数
      pathinfo: true,
      publicPath: "./dist/",
      // libraryTarget: 'umd',
      // library: 'good',
      // libraryExport: '',
      auxiliaryComment: 'module comment',
      umdNamedDefine: true,
      sourcePrefix: '\t',
      sourceMapFilename: '[file].map',
      strictModuleExceptionHandling: false,
      devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]?[all-loaders]',
      devtoolFallbackModuleFilenameTemplate: 'webpack:///[absolute-resource-path].[id]?[all-loaders]',
      hotUpdateChunkFilename: '[id].[hash].hot-update.js',
      hotUpdateMainFilename: '[hash].hot-update.json',
      // hotUpdateFunction:()=>{},
    },
    // devtool: 'cheap-module-eval-source-map', // 开发环境
    // devtool: 'nosources-source-map', // 生产环境
    // devtool: 'source-map', // 生产环境
    // stats: 'verbose',
    target: 'web',
    externals: {
      $: 'jquery',
    },
    // performance: {
    //   hints: 'error',
    //   maxEntrypointSize: 25 * 1024,
    //   maxAssetSize: 25 * 1024,
    //   // assetFilter: () => {
    //   // }
    // },
    resolve: {
      extensions: [".js", ".json"],
      alias: {
        // lodash: path.resolve(__dirname, 'node_modules/lodash'),
      },
      enforceExtension: false,
      symlinks: true,
      mainFields: ["browser", "module", "main"],
      aliasFields: ['browser'],
      unsafeCache: true,
      cacheWithContext: true,
      descriptionFiles: ["package.json"],
      enforceModuleExtension: false,
      modules: [path.resolve(__dirname, 'node_modules')], // 限制查找范围，不向上查找
      plugins: [],
      // cachePredicate:()=>{}
    },
    resolveLoader: {
      // moduleExtensions: ['-loader']
    },
    module: {
      // noParse: /jquery|lodash/,
      rules: [
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [{
            loader: 'url-loader',
          }]
        },
        // {
        //   test: /\.(png|svg|jpg|gif)$/,
        //   use: [{
        //     loader: 'file-loader',
        //   }]
        // },
        // {
        //   test: path.join(__dirname, './src/answer.js'),
        //   use: [
        //     {
        //       loader: 'val-loader'
        //     }
        //   ]
        // },
        // {
        //   test: /\.env/,
        //   use: [
        //     {
        //       loader: 'raw-loader'
        //     }
        //   ]
        // },
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader/useable",
              options: {
                hmr: true, // 是否启用热加载 - {boolean}
                base: true, // 设置模块ID，用于DllPlugin的使用 - {number|boolean}
                attrs: {}, // 增加属性到style标签 - {object}
                transform: false, // 转换条件 - {function|boolean}
                insertAt: 'bottom', // 插入style标签的位置
                insertInto: 'head', // 插入style标签的到某标签里
                singleton: undefined, // 重用标签
                sourceMap: false, // 启用sourcemap
                convertToAbsoluteUrls: false, // 当sourcemap启用时，转换相对地址为为绝对地址
              }
            },
            "css-loader"
          ]
        }
        //       loaders: [{
        //   test: /\.js$/,
        //   loader: 'babel-loader?cacheDirectory',
        // }]
      ]
    },
    plugins: [

      // new WebpackMessages({
      //   name: 'client',
      //   logger: str => console.log(`>> ${str}`)
      // }),
      new WebpackCleanupPlugin(),
      new SimpleProgressWebpackPlugin({
        format: 'compact'
      }),
      // 将所有的node_module依赖打包在一起
      // 提供配置项，可以将指定的node_module打包
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: (module, count) => {
          const nodeModulePath = path.resolve(__dirname, "node_modules")
          return module.resource && module.resource.indexOf(nodeModulePath) >= 0 && count >= 1
        }
      }),
      // 将项目中很少用，但不怎么更新的工具模块打包在一起
      // 项目中通过common.js引入，并在配置的entry入口中指向该文件
      new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        minChunks: 2
      }),
      // 将runtime提取出来，并通过`webpack-raw-bundler`插件与app.js进行合并
      new webpack.optimize.CommonsChunkPlugin({
        name: 'runtime',
      }),

      // new webpack.optimize.AggressiveSplittingPlugin(),
      // new webpack.BannerPlugin({
      //   banner: "publish@" + new Date().toLocaleString(),
      //   entryOnly: true,
      // }),
      // new ShakePlugin(),
      // new UglifyJSWebpackPlugin({
      //   uglifyOptions: {
      //     output: {
      //       beautify: true
      //     }
      //   }, // uglify配置项 - {Object}
      // }),
      new RawBundlerPlugin({
        excludedFilenames: [/angulartics/], // 排除目录或文件 - {string[]}
        readEncoding: "utf-8", // nodejs读取编码格式 - {string : 'utf-8'}
        includeFilePathComments: true, // 合并文件时，包含合并的文件路径 - {boolean : false}
        allowDuplicatesInBundle: false, // 允许重复模块打包  - {boolean : false}
        printProgress: true, // 打印合并的日志  - {boolean : false}
        fileEnding: "\n\n", // 合并文件时，文件末尾附加字符  - {string : '\n\n'}
        commentTags: { // 路径注释格式 - {object}
          Start: "/* ",
          End: " */"
        },
        // bundles: [ // 合并的文件列表 - {string[]}
        //   "vendor.js",
        //   "styles.css",
        //   "vendor.lib.js"
        // ],
        // "vendor.js": [ // 被合并的文件的组合方式
        //   'js/*.js'
        // ],
        // "vendor.lib.js": [{ // 支持匹配
        //   path: "../build/*.js",
        //   match: /vendor/
        // }],
        // "styles.css": [
        //   'css/bootstrap.css',
        //   'css/edits.css'
        // ],
        bundles: ["xxx.js"],
        "xxx.js": [path.join(__dirname, './dist/app.js'), path.join(__dirname, './dist/runtime.js')],
      }),
      new webpack.DefinePlugin({
        VERSION: JSON.stringify(true),
        PRODUCTION: JSON.stringify(true),
        TEST: JSON.stringify(true),
        DEVELOPMENT: JSON.stringify(true),
      }),
      // new webpack.ProvidePlugin({
      //   _: 'lodash',
      //   lodash: 'lodash',
      //   isNumber: ['lodash', 'isNumber'],
      //   // ...
      // }),
      // new webpack.NamedModulesPlugin(),
      // new webpack.HashedModuleIdsPlugin(),
      new NpmInstallPlugin(),

      // new CompressionWebpackPlugin({
      //   threshold: 20 * 1024, // 只处理比这个值大的资源 - {number : 0}
      //   minRatio: 0.8, // 只有压缩率比这个值小的资源才会被处理，只处理比这个值大的资源 - {number : 0.8}
      //   deleteOriginalAssets: true, // 是否删除源资源 - {boolean : false}
      // }),
      // new BundleAnalyzerPlugin()
      // new DuplicatePackageCheckerPlugin(),
      new CircularDependencyPlugin({
        failOnError: true, // 使用抛出错误来代替警告 - {boolean : false}
      }),
      new CaseSensitivePathsPlugin(),
      // new FriendlyErrorsWebpackPlugin()
      // new UnusedFilesWebpackPlugin(),
      new WebpackBuildNotifierPlugin({
        title: "Webpack Build", // 通知标题 - {string : 'Webpack Build'}
        logo: path.resolve("./src/assest/image/logo.png"), // 通知logo
        sound: 'Submarine', // 通知音效，可选值有：Basso, Blow, Bottle, Frog, Funk, Glass, Hero,
        // Morse, Ping, Pop, Purr, Sosumi, Submarine -
        // {boolean|string : 'Submarine'}
        successSound: true, // 是否启用成功音效通知
        warningSound: true, // 是否启用警告音效通知
        failureSound: true, // 是否启用失败音效通知
        suppressSuccess: false, // 是否阻止成功通知
        suppressWarning: false, // 是否阻止警告通知
        suppressCompileStart: false,
        activateTerminalOnError: true,
        // successIcon: './icons/success.png', // 编译中图标 - {string : './icons/success.png'}
        // warningIcon: './icons/warning.png', // 编译中图标 - {string : './icons/warning.png'}
        // failureIcon: './icons/failure.png', // 编译中图标 - {string : './icons/failure.png'}
        // compileIcon: './icons/compile.png', // 编译中图标 - {string : './icons/compile.png'}
        // messageFormatter: '', // 通知信息格式化
        // onClick: '', // 通知框点击事件，默认打开终端
      }),
      // new StatsPlugin('stats.json', {
      //   chunkModules: true,
      //   exclude: [/node_modules/]
      // }),
      // new BundleDuplicatesPlugin({}),
      new Dotenv({
        safe: true,
        systemvars: true, // 载入所有系统预定义的变量 - {boolean : false}
        silent: false // 静默模式，忽略错误 - {boolean : false}
      }),
      new HtmlWebpackPlugin(),
      // new FaviconsWebpackPlugin('./logo.png')

    ],
    // node: {},
    // amd:{},
    // bail:false,
    // cache:false,
    // parallelism:1,
    // profile: true,
    // recordsPath: path.join(__dirname, './reports/webpack-bundle.json'),
    // recordsOutputPath: path.join(__dirname, 'records.json'),
    // recordsInputPath: path.join(__dirname, 'records.json'),
    watch: false,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      ignore: '',
    },
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
  }
}