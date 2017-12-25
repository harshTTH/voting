const React = require('react');
const Link = require('react-router-dom').Link;
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputEmail:"",
            inputPass:""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    render(){
        return(
            <form action="/usrlogin" method="post">
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input className="form-control" type="email" id="email" placeholder="Enter Email" onChange={this.handleChange} value={this.state.inputEmail}/>
                </div>
                <div className="form-group">
                    <label htmlFor="pass">Password</label>
                    <input className="form-control" type="password" id="pass" placeholder="Enter Password" onChange={this.handleChange} value={this.state.inputPass}/>
                </div>
                <button className="btn" type="submit">LogIn</button>
                <Link to="#">Forgot Password</Link>
                <Link to="/signup">Don't have an Account SignUp</Link>
            </form>
        );
    }

    handleChange(event){
        if(event.target.id.match("email")){
            this.setState({
                inputEmail:event.target.value
            });
        }else if(event.target.id.match("pass")){
            this.setState({
                inputPass:event.target.value
            })
        }
    }
}

module.exports = Login;