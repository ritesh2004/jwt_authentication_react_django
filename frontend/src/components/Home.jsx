import React, { useContext } from "react";
import Authcontext from "../context/Authcontext";

const Home = () =>{
    let {user} = useContext(Authcontext)

    // let {username} = user;
    return (
        <div className="Home">
            <h1 style={{textAlign:'center', marginTop:'100px'}}>This is home page</h1>
            <br />
            {user && (<h2 style={{textAlign:'center', marginTop:'50px'}}>Hello {user["username"]}</h2>)}
        </div>
    )
}

export default Home;