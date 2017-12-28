const React = require('react');
const Link = require('react-router-dom').Link;
class Login extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <form action="/usrlogin" method="post">
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input name="email" className="form-control" type="email" id="email" placeholder="Enter Email" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="pass">Password</label>
                    <input name="pass" className="form-control" type="password" id="pass" placeholder="Enter Password" required/>
                </div>
                <button className="btn btn-outline-primary" type="submit">LogIn</button>
                <Link to="#">Forgot Password</Link>
                <Link to="/signup">Don't have an Account SignUp</Link>
            </form>
        );
    }
}

module.exports = Login;