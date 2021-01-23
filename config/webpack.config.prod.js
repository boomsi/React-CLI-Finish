const path = require('path')

const config = {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/index.tsx'),
  devtool: 'cheap-module-source-map',
  plugins: []
};

module.exports = config;
