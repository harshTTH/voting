import { renderToString } from 'react-dom/server';
require('dotenv').config();
const express = require('express');
const React = require('react');
const path = require('path');
const app = express();
const fs = require('fs'); 
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config')[0];
const compiler = webpack(webpackConfig);
const bodyParser = require('body-parser');
const StaticRouter = require('react-router-dom').StaticRouter;
const Routes = require('../public/components/routes');
const dbUrl = process.env.DB_URL;
const mongoose = require('mongoose');
const userModel = require('./model');
const moragn = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const template = require('./template');
require('./config/passport')(passport);
mongoose.connect(dbUrl,{useMongoClient:true});


app.use('/assets',express.static('static'));
app.use(moragn('dev'));
app.use(cookieParser());
app.use(session({secret:process.env.SESSION_KEY}));
app.use(passport.initialize());
app.use(flash());
app.use(passport.session());

app.use(webpackDevMiddleware(compiler, {
  filename: 'bundle.js',
  publicPath: '/static/'
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log,
}));

app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
   res.send(template(""));
});

app.get('/profile',(req,res)=>{
  res.send("Logged in");
})

app.get('/success',(req,res)=>{
  res.send("Failed");
})
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

app.post('/newusr',passport.authenticate('local-signup',{
  successRedirect:'/profile',
  failureRedirect:'/success',
  failureFlash:true
}));

app.get("*",(req,res)=>{
  let context={};
  const markup = renderToString(
    <StaticRouter location={req.url} context={context}>
      <Routes/>
    </StaticRouter>
  );
  res.send(template(markup));
});

const isLoggedIn = (req,res,next)=>{
  if(req.isAuthenticated())return next();
  res.redirect('/');
}
app.listen(process.env.PORT || 5009);