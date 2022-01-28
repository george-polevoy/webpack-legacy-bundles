const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const RemoveEmptyScriptsPlugin  = require('webpack-remove-empty-scripts');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: {
    "bundle/mainJS": ['../Scripts/a.js', '../Scripts/b.js'],
    "bundle/mainStyles": ['../Css/a.css', '../Css/b.css']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
    ],
  },
  plugins: [
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
        template: '../template.html'
    })
  ],
  devtool : "source-map"
};