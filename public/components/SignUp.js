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
    render(){
        return(
            <form action="/newusr/pic">
                <div className="form-group">
                    <label htmlFor="newusr-name">Name</label>
                    <input type="text" id="newusr-name" placeholder="Enter Name"
                    className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="newusr-email">Email</label>
                    <input type="email" id="newusr-email" placeholder="Enter Email"
                    className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="newusr-pass">Password</label>
                    <input type="password" id="newusr-pass" placeholder="Enter Password"
                    className="form-control"/>
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
}
module.exports = SignUp;