import React, { useContext, useState } from "react";
import Authcontext from "../context/Authcontext";


const Login = () =>{

    const [usname, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    let {user, LoginUser} = useContext(Authcontext);
    
    return (
        <div className="Login">
            <form action="" onSubmit={LoginUser}>
            <h1 style={{textAlign:'center'}}>Log In</h1>
                <input type="text" name="username" id="" onChange={(e) =>{setUsername(e.target.value)}} value={usname} placeholder="Enter Username" />
                <br />
                <input type="password" name="password" id="" onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder="Enter Password" />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login;