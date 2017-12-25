const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs'); 
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
var webpackConfig = require('./webpack.config');

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/static/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
}));

app.get('/',(req,res)=>{
   res.sendFile(path.join(__dirname,'/public/index.html'));
});

app.get('/static/img/:imgName',(req,res)=>{
  let imgPath = __dirname + req.path;
  fs.readFile(imgPath,(err,data)=>{
    if(!err){
      res.send(data);
    }
  });
});

app.listen(process.env.PORT || 5006);