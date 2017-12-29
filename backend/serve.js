module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/home/techth/Documents/voting/backend";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);
var Login = __webpack_require__(18);

var Welcome = function Welcome(_ref) {
    var route = _ref.route;

    var msg = "Welcome to Groupz <br/> LogIn Or SignUp <br/> To Continue";
    return React.createElement(
        'div',
        { id: 'fullback', className: 'd-flex flex-row align-items-center' },
        React.createElement(Banner, { message: msg }),
        React.createElement(Login, null)
    );
};

var Banner = function Banner(props) {
    return React.createElement('div', { id: 'fullback-banner', className: 'text-center', dangerouslySetInnerHTML: { __html: props.message } });
};
module.exports = { welcome: Welcome, banner: Banner };
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Welcome, 'Welcome', '/home/techth/Documents/voting/public/components/welcome.js');

    __REACT_HOT_LOADER__.register(Banner, 'Banner', '/home/techth/Documents/voting/public/components/welcome.js');
}();

;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(5);
var bcrypt = __webpack_require__(21);
var Schema = mongoose.Schema;
var userSchema = new Schema({
    local: {
        email: String,
        password: String
    },
    facebook: {
        id: String,
        token: String,
        name: String,
        email: String
    },
    twitter: {
        id: String,
        token: String,
        displayName: String,
        username: String
    },
    google: {
        id: String,
        token: String,
        email: String,
        name: String
    }
});

userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('Users', userSchema);
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Schema, 'Schema', '/home/techth/Documents/voting/backend/model.js');

    __REACT_HOT_LOADER__.register(userSchema, 'userSchema', '/home/techth/Documents/voting/backend/model.js');
}();

;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _server = __webpack_require__(8);

__webpack_require__(9).config();
var express = __webpack_require__(10);
var React = __webpack_require__(0);
var path = __webpack_require__(2);
var app = express();
var fs = __webpack_require__(11);
var webpackDevMiddleware = __webpack_require__(12);
var webpackHotMiddleware = __webpack_require__(13);
var webpack = __webpack_require__(3);
var webpackConfig = __webpack_require__(14)[0];
var compiler = webpack(webpackConfig);
var bodyParser = __webpack_require__(16);
var StaticRouter = __webpack_require__(1).StaticRouter;
var Routes = __webpack_require__(17);
var dbUrl = process.env.DB_URL;
var mongoose = __webpack_require__(5);
var userModel = __webpack_require__(6);
var moragn = __webpack_require__(22);
var cookieParser = __webpack_require__(23);
var session = __webpack_require__(24);
var passport = __webpack_require__(25);
var flash = __webpack_require__(26);
var template = __webpack_require__(27);
__webpack_require__(28)(passport);
mongoose.connect(dbUrl, { useMongoClient: true });

app.use('/assets', express.static('static'));
app.use(moragn('dev'));
app.use(cookieParser());
app.use(session({ secret: process.env.SESSION_KEY }));
app.use(passport.initialize());
app.use(flash());
app.use(passport.session());

app.use(webpackDevMiddleware(compiler, {
  filename: 'bundle.js',
  publicPath: '/static/'
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log
}));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.send(template(""));
});

app.get('/profile', function (req, res) {
  res.send("Logged in");
});

app.get('/success', function (req, res) {
  res.send("Failed");
});
app.get('/static/img/:imgName', function (req, res) {
  var imgPath = __dirname + req.path;
  fs.readFile(imgPath, function (err, data) {
    if (!err) {
      res.send(data);
    }
  });
});

app.post('/usrlogin', function (req, res) {
  console.log(req.body);
  res.end();
});

app.post('/newusr', passport.authenticate('local-signup', {
  successRedirect: '/profile',
  failureRedirect: '/success',
  failureFlash: true
}));

app.get("*", function (req, res) {
  var context = {};
  var markup = (0, _server.renderToString)(React.createElement(
    StaticRouter,
    { location: req.url, context: context },
    React.createElement(Routes, null)
  ));
  res.send(template(markup));
});

var isLoggedIn = function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/');
};
app.listen(process.env.PORT || 5009);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(app, 'app', '/home/techth/Documents/voting/backend/server.js');

  __REACT_HOT_LOADER__.register(webpackConfig, 'webpackConfig', '/home/techth/Documents/voting/backend/server.js');

  __REACT_HOT_LOADER__.register(compiler, 'compiler', '/home/techth/Documents/voting/backend/server.js');

  __REACT_HOT_LOADER__.register(StaticRouter, 'StaticRouter', '/home/techth/Documents/voting/backend/server.js');

  __REACT_HOT_LOADER__.register(dbUrl, 'dbUrl', '/home/techth/Documents/voting/backend/server.js');

  __REACT_HOT_LOADER__.register(isLoggedIn, 'isLoggedIn', '/home/techth/Documents/voting/backend/server.js');
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var path = __webpack_require__(2);
var webpack = __webpack_require__(3);
var nodeExternals = __webpack_require__(15);
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
var clientSide = {
  entry: ["react-hot-loader/patch", "webpack/hot/only-dev-server", 'webpack-hot-middleware/client', './public/client.js'],
  output: {
    path: path.join(__dirname, 'static'),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }, {
      test: /\.jpg/,
      loader: 'file'
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader?modules-loader!sass-loader'
    }]
  }
};
var serverSide = {
  target: 'node',
  externals: [nodeExternals()],
  entry: path.join(__dirname, 'backend', 'server.js'),
  output: {
    filename: 'serve.js',
    path: path.join(__dirname, 'backend'),
    publicPath: path.join(__dirname, 'backend'),
    libraryTarget: "commonjs2"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, {
      test: /\.jpg/,
      loader: 'file'
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader?modules-loader!sass-loader'
    }]
  }
};

module.exports = [clientSide, serverSide];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(clientSide, 'clientSide', '/home/techth/Documents/voting/webpack.config.js');

  __REACT_HOT_LOADER__.register(serverSide, 'serverSide', '/home/techth/Documents/voting/webpack.config.js');
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);
var Route = __webpack_require__(1).Route;
var Switch = __webpack_require__(1).Switch;
var WelcomePage = __webpack_require__(4).welcome;
var SignUp = __webpack_require__(19);
var routes = function routes() {
    return React.createElement(
        Switch,
        null,
        React.createElement(Route, { exact: true, path: '/', component: WelcomePage }),
        React.createElement(Route, { path: '/signup', component: SignUp })
    );
};

module.exports = routes;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Route, 'Route', '/home/techth/Documents/voting/public/components/routes.js');

    __REACT_HOT_LOADER__.register(Switch, 'Switch', '/home/techth/Documents/voting/public/components/routes.js');

    __REACT_HOT_LOADER__.register(WelcomePage, 'WelcomePage', '/home/techth/Documents/voting/public/components/routes.js');

    __REACT_HOT_LOADER__.register(routes, 'routes', '/home/techth/Documents/voting/public/components/routes.js');
}();

;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(0);
var Link = __webpack_require__(1).Link;

var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login(props) {
        _classCallCheck(this, Login);

        return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));
    }

    _createClass(Login, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { action: '/usrlogin', method: 'post' },
                React.createElement(
                    'div',
                    { style: { marginBottom: "8%" } },
                    React.createElement(
                        'i',
                        { className: 'material-icons' },
                        'lock'
                    ),
                    'LogIn'
                ),
                React.createElement(
                    'div',
                    { className: 'form-group' },
                    React.createElement(
                        'label',
                        { htmlFor: 'email' },
                        'Email Address'
                    ),
                    React.createElement('input', { name: 'email', className: 'form-control', type: 'email', id: 'email', placeholder: 'Enter Email', required: true })
                ),
                React.createElement(
                    'div',
                    { className: 'form-group' },
                    React.createElement(
                        'label',
                        { htmlFor: 'pass' },
                        'Password'
                    ),
                    React.createElement('input', { name: 'pass', className: 'form-control', type: 'password', id: 'pass', placeholder: 'Enter Password', required: true })
                ),
                React.createElement(
                    'button',
                    { className: 'btn btn-outline-primary', type: 'submit' },
                    'LogIn'
                ),
                React.createElement(
                    Link,
                    { to: '#' },
                    'Forgot Password'
                ),
                React.createElement(
                    Link,
                    { to: '/signup' },
                    'Don\'t have an Account SignUp'
                )
            );
        }
    }]);

    return Login;
}(React.Component);

module.exports = Login;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Link, 'Link', '/home/techth/Documents/voting/public/components/Login.js');

    __REACT_HOT_LOADER__.register(Login, 'Login', '/home/techth/Documents/voting/public/components/Login.js');
}();

;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(0);
var Banner = __webpack_require__(4).banner;
var Link = __webpack_require__(1).Link;
var Radium = __webpack_require__(20);

var SignUp = function SignUp(_ref) {
    var route = _ref.route;

    var msg = "Enter Details And <br/> Be A Member of <br/> Groupz";
    return React.createElement(
        'div',
        { id: 'fullback', className: 'd-flex flex-row align-items-center' },
        React.createElement(Banner, { message: msg }),
        React.createElement(SignUpForm, null)
    );
};

var SignUpForm = function (_React$Component) {
    _inherits(SignUpForm, _React$Component);

    function SignUpForm(props) {
        _classCallCheck(this, SignUpForm);

        var _this = _possibleConstructorReturn(this, (SignUpForm.__proto__ || Object.getPrototypeOf(SignUpForm)).call(this, props));

        _this.state = {
            inputEmail: "",
            inputPass: "",
            inputName: ""
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(SignUpForm, [{
        key: 'render',
        value: function render() {
            var accept = validatePass(this.state.inputPass);
            var color = accept ? "green" : "red";
            var indicator = {
                borderWidth: "3px",
                ':focus': {
                    borderColor: color
                }
            };
            return React.createElement(
                'form',
                { action: '/newusr', method: 'post' },
                React.createElement(
                    'div',
                    { style: { marginBottom: "8%" } },
                    React.createElement(
                        'i',
                        { className: 'material-icons' },
                        'assignment'
                    ),
                    'SignUp'
                ),
                React.createElement(
                    'div',
                    { className: 'form-group' },
                    React.createElement(
                        'label',
                        { htmlFor: 'newusr-name' },
                        'Name'
                    ),
                    React.createElement('input', { name: 'name', type: 'text', id: 'newusr-name', placeholder: 'Enter Name',
                        className: 'form-control', onChange: this.handleChange, value: this.state.inputName, required: true })
                ),
                React.createElement(
                    'div',
                    { className: 'form-group' },
                    React.createElement(
                        'label',
                        { htmlFor: 'newusr-email' },
                        'Email'
                    ),
                    React.createElement('input', { name: 'email', type: 'email', id: 'newusr-email', placeholder: 'Enter Email',
                        className: 'form-control', onChange: this.handleChange, value: this.state.inputEmail, required: true })
                ),
                React.createElement(
                    'div',
                    { className: 'form-group' },
                    React.createElement(
                        'label',
                        { htmlFor: 'newusr-pass' },
                        'Password'
                    ),
                    React.createElement('input', { name: 'pass', type: 'password', id: 'newusr-pass', placeholder: 'Create Password',
                        className: 'form-control', onChange: this.handleChange, value: this.state.inputPass, style: indicator, required: true }),
                    React.createElement(
                        'small',
                        { className: 'form-text text-muted h6' },
                        'Password must contain digits and characters'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'form-check h5' },
                    React.createElement(
                        'label',
                        { htmlFor: 'newusr-terms', className: 'form-check-label' },
                        React.createElement('input', { name: 'tndc', type: 'checkbox', id: 'newusr-terms',
                            className: 'form-check-input', value: '', required: true }),
                        'I Accept Terms & Conditions'
                    )
                ),
                React.createElement(
                    'button',
                    { className: 'btn btn-outline-primary', type: 'submit', disabled: !accept },
                    'Next'
                ),
                React.createElement('br', null),
                React.createElement(
                    Link,
                    { to: '/' },
                    'Already Have An Account LogIn'
                )
            );
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            if (event.target.id.match("newusr-email")) {
                this.setState({
                    inputEmail: event.target.value
                });
            } else if (event.target.id.match("newusr-pass")) {
                this.setState({
                    inputPass: event.target.value
                });
            } else if (event.target.id.match("newusr-name")) {
                this.setState({
                    inputName: event.target.value
                });
            }
        }
    }]);

    return SignUpForm;
}(React.Component);

var validatePass = function validatePass(pass) {
    if (pass.length >= 8) {
        var ch = 0,
            num = 0;
        for (var i = 0; i < pass.length; i++) {
            var ascii = pass.charCodeAt(i);
            if (ascii >= 65 && ascii <= 90 || ascii >= 97 && ascii <= 122) ch++;
            if (ascii >= 48 && ascii <= 57) num++;
        }
        if (ch > 0 && num > 0) return true;else return false;
    } else return false;
};
SignUpForm = Radium(SignUpForm);
module.exports = SignUp;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Banner, 'Banner', '/home/techth/Documents/voting/public/components/SignUp.js');

    __REACT_HOT_LOADER__.register(Link, 'Link', '/home/techth/Documents/voting/public/components/SignUp.js');

    __REACT_HOT_LOADER__.register(SignUp, 'SignUp', '/home/techth/Documents/voting/public/components/SignUp.js');

    __REACT_HOT_LOADER__.register(SignUpForm, 'SignUpForm', '/home/techth/Documents/voting/public/components/SignUp.js');

    __REACT_HOT_LOADER__.register(validatePass, 'validatePass', '/home/techth/Documents/voting/public/components/SignUp.js');
}();

;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("radium");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("connect-flash");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (markup) {
    return "\n    <html>\n    <head>\n        <title>Groupz</title>\n        <link href=\"https://fonts.googleapis.com/css?family=Open+Sans\" rel=\"stylesheet\">\n        <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css\">\n        <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\n        rel=\"stylesheet\">\n    </head>\n    <body>\n        <div id=\"root\"><" + markup + "></div>\n        <script src=\"/assets/bundle.js\"></script>\n    </body>\n    </html>";
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LocalStrategy = __webpack_require__(29).Strategy;
var User = __webpack_require__(6);

module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req, email, password, done) {
        process.nextTick(function () {
            User.findOne({ 'local.email': email }, function (err, user) {
                if (err) return done(err);else if (user) return done(null, false, req.flash({ 'signupMessage': 'This Email is Already Registered With Us!' }));else {
                    var newUser = new User();
                    newUser.local.email = email;
                    newUser.local.password = newUser.generateHash(password);
                    newUser.save(function (err) {
                        if (err) throw errr;
                        return done(null, newUser);
                    });
                }
            });
        });
    }));
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(LocalStrategy, 'LocalStrategy', '/home/techth/Documents/voting/backend/config/passport.js');
}();

;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ })
/******/ ]);