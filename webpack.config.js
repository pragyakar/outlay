const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { getEnvConfig } = require('./env/dot-env');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(jsx?)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader','css-loader'] }
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin({
      envConfig: JSON.stringify(getEnvConfig())
    })
  ],
  devServer: {
    historyApiFallback: true,
  },
  node: {
    fs: 'empty'
  }
};