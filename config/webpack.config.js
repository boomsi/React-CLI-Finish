const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

const devConfig = require('./webpack.config.dev');
const prodConfig = require('./webpack.config.prod');

const commonConfig = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
    // publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|svg)$/i,
        loader: 'file-loader',
        options: {
          name: 'assets/[hash].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '@': path.resolve(__dirname, '../src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      appMountId: 'app',
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/template.ejs')
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new webpack.ProgressPlugin()
  ],
  // FIXME
  optimization: {
    minimize: false
  }
};

module.exports = (env) => {
  switch (env.NODE_ENV) {
    case 'development':
      return merge(commonConfig, devConfig);
    case 'production':
      return merge(commonConfig, prodConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
};
