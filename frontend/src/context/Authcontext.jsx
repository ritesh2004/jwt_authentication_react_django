import React, { createContext, useState } from 'react'
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom';
// import axios from "axios";

const Authcontext = createContext();

export default Authcontext;


export const Authprovider = ({children}) =>{


    const [authToken, setAuthToken] = useState((localStorage.getItem('authenticationToken') ? JSON.parse(localStorage.getItem('authenticationToken')) : null));
    const [user, setUser] = useState((localStorage.getItem('authenticationToken') ? jwt_decode(localStorage.getItem('authenticationToken')) : null));

    const navigate = useNavigate();

    let LoginUser = async (e) =>{
    console.log("Form submitted")
    e.preventDefault()
    let res = await fetch("http://127.0.0.1:8000/api/token/",{
        method: "POST",
        headers : {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
    })
    let data = await res.json()
    console.log(res.status)
    console.log(data)
    console.log(jwt_decode(data.access))
    if (res.status === 200){
        setAuthToken(data)
        setUser(jwt_decode(data.access))
        // console.log(user["username"])
        navigate('/');
        localStorage.setItem('authenticationToken', JSON.stringify(data))
    }else{
        alert("Something went wrong!")
    }
    }

    let LogoutUser = () =>{
        setAuthToken(null)
        setUser(null)
        console.log("Logged Out")
        localStorage.removeItem('authenticationToken')
    }

    let Context = {
        user: user,
        LoginUser:LoginUser,
        LogoutUser: LogoutUser
    }

    return (
        <Authcontext.Provider value={Context}>
            {children}
        </Authcontext.Provider>
    )
}
