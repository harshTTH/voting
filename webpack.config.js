const path = require('path');
const webpack = require('webpack');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
const clientSide = {
    entry:[
      "react-hot-loader/patch",
      "webpack/hot/only-dev-server",
      'webpack-hot-middleware/client',
      path.join(__dirname,'public','client.js')
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


module.exports = clientSide;