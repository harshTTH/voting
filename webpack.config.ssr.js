const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const serverSide = {
    target:'node',
    externals:[nodeExternals()],
    entry:path.join(__dirname,'server.js'),
    output:{
      filename:'serve.js',
      path:__dirname,
      publicPath:__dirname,
      libraryTarget: "commonjs2"
    },
    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
      }, {
        test: /\.jpg/,
        loader: 'file'
      },{
          test: /\.scss$/,
          loader: 'style-loader!css-loader?modules-loader!sass-loader'
      }]
    }
}

module.exports = serverSide;