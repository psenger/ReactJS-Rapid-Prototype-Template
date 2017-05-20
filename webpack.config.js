const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin');

module.exports = {

  entry: './index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[hash].bundle.js',
    publicPath: '/',
    library: 'rrpt',
    libraryTarget: 'var'
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: [ 'react', 'es2015', 'stage-0', 'stage-1' ],
          plugins: [ 'transform-decorators-legacy', 'transform-object-assign', 'transform-class-properties' ]
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
    publicPath: '/',
    setup: function(app){
      app.get('/api/*', function(req, res) {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end( fs.readFileSync( path.join( __dirname, req.url ), 'utf8') );
      });
      app.get('/', function(req, res) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end( fs.readFileSync( path.join( __dirname, 'dist', 'index.html' ), 'utf8')  );
      });
      app.get(['/css/**','/js/**','/fonts/**'], function(req, res) {
        res.end( fs.readFileSync( path.join( __dirname, 'dist', req.url), 'utf8')  );
      });
    },
    compress: false, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    hotOnky: true, // hot module replacement without reload
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    port: 8080,
    colors: true,
    inline: true,
    progress: true,
    host: '0.0.0.0',
    clientLogLevel: 'info',
    stats: 'errors-only'
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
    // new ClosureCompilerPlugin({
    //   compiler: {
    //     language_in: 'ECMASCRIPT6',
    //     language_out: 'ECMASCRIPT5',
    //     compilation_level: 'ADVANCED'
    //   },
    //   concurrency: 3,
    // }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    })
  ]

};
