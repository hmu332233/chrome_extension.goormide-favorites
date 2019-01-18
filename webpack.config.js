const webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: {
    pageScript: './src/pageScript/index.js',
    contentScript: './src/contentScript/index.js'
  },
  output: {
    path: `${ __dirname}/dist`,
    filename: '[name].js',
    publicPath: './'
  },
  module: {},
  plugins: [],
  optimization: {},
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.css']
  }
};
