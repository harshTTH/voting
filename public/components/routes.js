const React = require('react');
const Route = require('react-router-dom').Route;
const Switch = require('react-router-dom').Switch;
const WelcomePage = require('./welcome').welcome;
const SignUp = require('./SignUp');
const routes = () =>{
    return(
    <Switch>
        <Route exact path="/" component={WelcomePage}/>
        <Route path="/signup" component={SignUp}/>
    </Switch>
    );
}

module.exports = routes;