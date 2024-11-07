const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // sesuaikan dengan entry point aplikasi Anda
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'nusantara-fe',
      template: './index.html', // sesuaikan dengan template aplikasi Anda
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', to: 'js/bootstrap.bundle.min.js' },
      ],
    }),
  ],
  module: {
    rules: [
      // aturan loader lainnya jika diperlukan
    ],
  },
};
