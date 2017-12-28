const React = require('react');
const Router = require('react-router-dom').BrowserRouter;
const Root = require('./Root');
const Routes = require('./routes');
const styles = require('../styles.scss');

const App = ()=>{
    return(
        <Router>
            <Root>
                <Routes/> 
            </Root>
        </Router>  
    );
}

module.exports = App;