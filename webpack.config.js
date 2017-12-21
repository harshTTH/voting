const path = require('path');
const webpack = require('webpack');
module.exports = {
    devtool: 'eval',
    entry: ['webpack-hot-middleware/client',
            './public/client'],
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath:'/static/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
      loaders: [{
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'public')
      }, {
        test: /\.jpg/,
        loader: 'file'
      }, {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader']
      }]
    }
};