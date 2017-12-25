const React = require('react');
const Router = require('react-router-dom').BrowserRouter;
const Route = require('react-router-dom').Route;
const browserHistory = require('react-router-dom').browserHistory;
const WelcomePage = require('./welcome').welcome;
const SignUp = require('./SignUp');
const Header = require('./Header');
const Footer = require('./Footer');
var styles = require('../styles.scss');

const App = (props)=>{
    return(
        <Router history={browserHistory}>
            <div className="d-flex flex-column"
                style={{height:"100%"}}>
                <Header/>
                <Route exact path="/" component={WelcomePage}/>
                <Route path="/signup" component={SignUp}/>
                <Footer/>
            </div>    
        </Router>    
    );
}

module.exports = App;