const React = require('react');
const Banner = require('./welcome').banner;
const Link = require('react-router-dom').Link;

const SignUp = () =>{
    let msg = "Enter Details And <br/> Be A Member of <br/> Groupz";
    return(
        <div id="fullback" className="d-flex flex-row align-items-center">
            <Banner message = {msg}/>
            <SignUpForm/>
        </div>
    );
}

class SignUpForm extends React.Component{
    constructor(props){
          super(props);
            this.state = {
                inputEmail:"",
                inputPass:"",
                inputName:""
              }
            this.handleChange = this.handleChange.bind(this);
    }    
    render(){
        return(
            <form action="/newusr/pic" >
                <div className="form-group">
                    <label htmlFor="newusr-name">Name</label>
                    <input type="text" id="newusr-name" placeholder="Enter Name"
                    className="form-control" onChange={this.handleChange} value={this.state.inputName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="newusr-email">Email</label>
                    <input type="email" id="newusr-email" placeholder="Enter Email"
                    className="form-control" onChange={this.handleChange} value={this.state.inputEmail}/>
                </div>
                <div className="form-group">
                    <label htmlFor="newusr-pass">Password</label>
                    <input type="password" id="newusr-pass" placeholder="Enter Password"
                    className="form-control" onChange={this.handleChange} value={this.state.inputPass}/>
                </div>
                <div className="form-check h5">
                    <label htmlFor="newusr-terms" className="form-check-label">
                        <input type="checkbox" id="newusr-terms"
                        className="form-check-input" value=""/>
                        I Accept Terms & Conditions
                    </label>
                </div>
                <button className="btn" type="submit">Next</button>
                <br/>
                <Link to="/">Already Have An Account LogIn</Link>      
            </form>
        );
    }

    handleChange(event){
        if(event.target.id.match("newusr-email")){
            this.setState({
                inputEmail:event.target.value
            });
        }else if(event.target.id.match("newusr-pass")){
            this.setState({
                inputPass:event.target.value
            });
        }else if(event.target.id.match("newusr-name")){
            this.setState({
                inputName:event.target.value
            });
        }
    }
}
module.exports = SignUp;