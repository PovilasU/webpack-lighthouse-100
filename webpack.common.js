const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// root path for this project
const ROOT = __dirname;

module.exports = {
  entry: {
    main: './src/index.js',
    another: './src/another-module.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(ROOT, 'public/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: 'file-loader',
      },
    ],
  },
  optimization: {
    splitChunks: { chunks: 'all' },
  },
};
