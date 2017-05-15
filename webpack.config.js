const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

  entry: './index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[hash].bundle.js',
    publicPath: '/',
    library: 'eq3',
    libraryTarget: 'var'
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-0', 'stage-1'],
          plugins: ['transform-decorators-legacy', 'transform-object-assign', 'transform-class-properties',]
        }
      },
      {
        test: /\.html?$/,
        loader: 'html-loader'
      }
    ]
  },

  resolve: {
    modules: [
      path.resolve( __dirname, 'node_modules'),
      path.resolve( __dirname, 'src')
    ],
    extensions: ['.js', '.json', '.jsx', '.css']
  },

  performance: {
    hints: 'warning', // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },

  devtool: 'source-map', // enum
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.

  context: path.resolve( __dirname ), // string (absolute path!)
  // the home directory for webpack
  // the entry and module.rules.loader option
  //   is resolved relative to this directory

  target: 'web', // enum
  // the environment in which the bundle should run
  // changes chunk loading behavior and available modules

  // externals: [ 'react', /^@angular\// ],
  // Don't follow/bundle these modules, but request them at runtime from the environment

  stats: {
    colors: true,
    reasons: true
  },
  // 'errors-only',
  // lets you precisely control what bundle information gets displayed

  devServer: {
    outputPath: path.join(__dirname, 'dist'), // old version of dev server
    contentBase: [path.join(__dirname, 'dist'),path.join(__dirname)], // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    port: 8080,
    colors: true,
    inline: true,
    progress: true,
    //   // contentBase:  [outPath,cssOutPath,jsOutPath],
    host: '0.0.0.0',
    //   historyApiFallback: true,
    clientLogLevel: 'info'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    // new webpack.ProvidePlugin({
    //   'Promise': 'promise'
    // }),
    new CopyWebpackPlugin(
      [{
        from: path.join(__dirname, 'css'),
        to: path.join(__dirname, 'dist', 'css')
      },
        {
          from: path.join(__dirname, 'fonts'),
          to: path.join(__dirname, 'dist', 'fonts')
        },
        {
          from: path.join(__dirname, 'scripts'),
          to: path.join(__dirname, 'dist', 'scripts ')
        },
        {
          from: path.join(__dirname, 'js'),
          to: path.join(__dirname, 'dist', 'js')
        }
      ],
      {
        copyUnmodified: true
      }),

    new BellOnBundlerErrorPlugin(),
    // new webpack.ProvidePlugin({
    //   // polyfill for Promise
    //   'Promise': 'exports?global.Promise!es6-promise',
    //   // polyfill for fetch
    //   'fetch': 'imports?this=>global!exports?global.fetch!isomorphic-fetch'
    // }),
    // new NpmInstallPlugin(),
    // new webpack.SourceMapDevToolPlugin({
    //   filename: '[file].map'
    // }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    })
  ]

};
