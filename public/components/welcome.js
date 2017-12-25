const React = require('react');
const Login = require('./Login');

const Welcome = ()=>{
    let msg = "Welcome to Groupz <br/> LogIn Or SignUp <br/> To Continue";
    return(
        <div id="fullback" className="d-flex flex-row align-items-center">
            <Banner message = {msg}/>
            <Login/>
        </div> 
    );
}

const Banner = (props)=>{
    return(
        <div id="fullback-banner" className="text-center" dangerouslySetInnerHTML={{__html:props.message}}>
        </div>
    );
}
module.exports = {welcome:Welcome,banner:Banner}