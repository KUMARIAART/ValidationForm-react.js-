import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <nav>
            <Link to='/'>Signup</Link>
            <Link to='/dashbord'>Dashbord</Link>
        </nav>
    )
}
export default Navbar;