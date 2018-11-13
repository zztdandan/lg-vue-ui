'use strict';
// This is the webpack config used for unit tests.
const path = require('path');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin'); // webpack进度条插件

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

const webpackConfig = {
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: path.resolve(process.cwd(), './dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('examples'),
      'vue$': 'vue/dist/vue.esm.js',
      'packages': resolve('packages'),
      'lg-vue-ui': path.resolve(__dirname, '../'),
      '@mixins': resolve('src/mixins'),
      '@utils': resolve('src/utils')
    }
  },
  devtool: '#inline-source-map',
  // use inline sourcemap for karma-sourcemap-loader
  module: {
    rules: [
      {
        enforce: 'post', // 首先执行
        test: /\.jsx?$/,
        loader: 'isparta-loader', // Karma入口文件解析
        options: { esModules: true },
        exclude: /node_modules|utils\/popper\.js|utils\/date\.js/,
        include: /src|packages/
      },
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: /node_modules|utils\/popper\.js|utils\/date\.js/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'isparta-loader'
          },
          preserveWhitespace: false
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader?minisize=false'
      },
      {
        test: /\.otf|ttf|woff2?|eot(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.svg(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/test.env')
    }),
    new ProgressBarPlugin()
  ]
};

// no need for app entry during tests
delete webpackConfig.entry;

module.exports = webpackConfig;
