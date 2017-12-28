const express = require('express');
const React = require('react');
const path = require('path');
const app = express();
const fs = require('fs'); 
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const webpackConfig = require('./webpack.config');
import { renderToString } from 'react-dom/server';
const StaticRouter = require('react-router-dom').StaticRouter;
const Routes = require('./public/components/routes');
const compiler = webpack(webpackConfig);

app.set('view engine','ejs');
app.use('/assets',express.static('public'));
app.set('views',path.join(__dirname,'public','views'));
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

app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
   res.render('index',{markup:""});
});

app.get('/static/img/:imgName',(req,res)=>{
  let imgPath = __dirname + req.path;
  fs.readFile(imgPath,(err,data)=>{
    if(!err){
      res.send(data);
    }
  });
});

app.post('/usrlogin',(req,res)=>{
  console.log(req.body);
  res.end();
});

app.get("*",(req,res)=>{
  let context={};
  const markup = renderToString(
    <StaticRouter location={req.url} context={context}>
      <Routes/>
    </StaticRouter>
  );
  res.render('index',{markup});
});
app.listen(process.env.PORT || 5009);