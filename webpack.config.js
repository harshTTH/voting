const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
const clientSide = {
    entry:[
      "react-hot-loader/patch",
      "webpack/hot/only-dev-server",
      'webpack-hot-middleware/client',
      './public/client.js'
    ],
    output: {
      path:path.join(__dirname,'static'),
      filename:"bundle.js",
      publicPath:"/static/"
    },
    plugins:[
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      /*new ExtractTextPlugin('../public/styles.css', {
        allChunks: true
      })*/
    ],
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
};
const serverSide = {
  target:'node',
  externals:[nodeExternals()],
  entry:path.join(__dirname,'backend','server.js'),
  output:{
    filename:'serve.js',
    path:path.join(__dirname,'backend'),
    publicPath:path.join(__dirname,'backend'),
    libraryTarget: "commonjs2"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude:'/node_modules/'
    }, {
      test: /\.jpg/,
      loader: 'file'
    },{
        test: /\.scss$/,
        loader: 'style-loader!css-loader?modules-loader!sass-loader'
    }]
  }
}

module.exports = [clientSide,serverSide];