const CopyWebpackPlugin = require('copy-webpack-plugin');
const PostCompile = require('post-compile-webpack-plugin');
const axios = require('axios');

module.exports = {
  entry: {
    bundle: './src/extension/src/inject/inject.js',
    background: './src/extension/src/bg/background.js'
  },
  node: {
    global: false
  },
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    publicPath: '/'
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/extension/manifest.json', to: '' },
        { from: './src/extension/icons', to: 'icons' }
      ]
    })
  ]
};
