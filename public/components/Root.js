const React = require('react');
const Header = require('./Header');
const Footer = require('./Footer');

const Root = (props) =>{
    return(
        <div className="d-flex flex-column"
                style={{height:"100%"}}>
                <Header/>
                    {props.children}
                <Footer/>
        </div>    
    );
}

module.exports = Root;