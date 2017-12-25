var React = require('react');
const Link = require('react-router-dom').Link

const Header = ()=>{
    return(
        <div id="navHead" className="d-flex flex-row">
             <Link to="/" className="mr-auto p-2 align-self-center"
             style={{fontSize:"3vmax"}}>
                Groupz
             </Link>
        </div>
    );
}

module.exports = Header;