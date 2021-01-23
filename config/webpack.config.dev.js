const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
  mode: 'development',
  entry: ['react-hot-loader/patch', './src/index.tsx'],
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    compress: true,
    port: 8000
  },
  plugins: [
    new LodashModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    })
  ]
};

module.exports = config;
