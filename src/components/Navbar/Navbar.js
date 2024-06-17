import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
            <Link to='/' className="navbar-content">Home</Link>
            <Link to='/about'  className="navbar-content">About</Link>
            <Link to='/contact'  className="navbar-content">Contact</Link>
        </div>
    );
}

export default Navbar;