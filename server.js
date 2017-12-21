var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var path = require('path');
var app = express();

app.use('/assets',express.static(__dirname + '/public'));

var compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*',(req,res)=>{
   res.sendFile(path.join(__dirname,'/public/index.html'));
});

app.listen(process.env.PORT || 5006);