import React, { useContext } from "react";
import { Link } from "react-router-dom"
import Authcontext from "../context/Authcontext";


const Header = () =>{

    let {user, LogoutUser} = useContext(Authcontext);

    // let {username} = user

    return (
        <div className="header">
            <Link to="/">Home</Link>
            {user ? (<Link onClick={LogoutUser}>Log Out</Link>):(<Link to="/login/">Log In</Link>)}
        </div>
    )
}

export default Header;