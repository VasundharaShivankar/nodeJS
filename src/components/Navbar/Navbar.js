import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
            <link to='/' className="navbar-content">Home</link>
            <link to='/about'  className="navbar-content">About</link>
            <link to='/contact'  className="navbar-content">Contact</link>
        </div>
    );
}

export default Navbar;