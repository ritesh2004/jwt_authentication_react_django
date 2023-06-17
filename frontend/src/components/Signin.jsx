import React, { useContext, useState } from 'react'
import Authcontext from '../context/Authcontext';

function Signin() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let {signinUser} = useContext(Authcontext);

  return (
    <div className='Signin'>
        <br />
        <form action="" onSubmit={signinUser}>
        <h1 style={{textAlign:'center'}}>Sign in</h1>
            <input type="text" name="username" id="" onChange={(e)=>{setUsername(e.target.value)}} value={username}  placeholder='Enter Username: ' />
            <br />
            <input type="email" name="email" id="" onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder='Enter Email Address: '/>
            <br />
            <input type="password" name="password" id="" onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder='Enter password: ' />
            <br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}




export default Signin;
