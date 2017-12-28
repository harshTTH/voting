const React = require('react');
const Banner = require('./welcome').banner;
const Link = require('react-router-dom').Link;
const Radium = require('radium');

const SignUp = ({route}) =>{
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
              inputName:"",
            }
        this.handleChange = this.handleChange.bind(this);
    } 
    render(){
        let color = validatePass(this.state.inputPass)?"green":"red";
        let indicator = {
            borderWidth:"3px",
            ':focus':{
                borderColor:color
            }
        };
        return(
            <form action="/newusr/pic">
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
                    <input type="password" id="newusr-pass" placeholder="Create Password"
                    className="form-control"  onChange={this.handleChange} value={this.state.inputPass} style={indicator}/>
                    <small className="form-text text-muted h6">Password must contain digits and characters</small>
                </div>
                <div className="form-check h5">
                    <label htmlFor="newusr-terms" className="form-check-label">
                        <input type="checkbox" id="newusr-terms"
                        className="form-check-input" value=""/>
                        I Accept Terms & Conditions
                    </label>
                </div>
                <button className="btn btn-outline-primary" type="submit">Next</button>
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
const validatePass = (pass)=>{
    if(pass.length >= 8){
        let ch = 0,num = 0;
        for(var i = 0;i<pass.length;i++){
            let ascii = pass.charCodeAt(i);
            if((ascii >= 65 && ascii <=90) || (ascii >=97 && ascii <=122))ch++;
            if(ascii >=48 && ascii <=57)num++;
        }
        if(ch>0 && num>0)return true;
        else return false;
    }else return false;
}
SignUpForm = Radium(SignUpForm);
module.exports = SignUp;