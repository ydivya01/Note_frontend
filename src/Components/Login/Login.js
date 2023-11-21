import React from "react";
import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import {Link, NavLink}  from 'react-router-dom'

import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  axios.defaults.withCredentials = false;

//   const handleLogin = async (e) => {
//     e.preventDefault();
   
// await axios.post("http://localhost:8000/login", { email, password})
//       .then(result => {
//         console.log(result)
//         if(result.data === 'Success'){
//           navigate('/')
//         }
//       })
//        .catch(err=> console.log(err))
    
//   };

const handleLogin = async (e) => {
  console.log(e)
  e.preventDefault()
  console.log(e)
await axios.post('http://localhost:8000/login', { email, password})
      .then(res => {
          console.log(res.data)
          if(res.data === 'Success'){
            navigate('/home')
              }
            })
      .catch(err => console.log(err))
}

  return (
    <div>
     
      <h1 className="login">Login</h1>
      <form action="POST" className="login">
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e)=> setEmail(e.target.value)}
        ></input>

        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e)=> setPassword(e.target.value)}
        ></input>

        <div className="button" onClick={handleLogin}>
          Login
        </div>
       <hr/>
        <NavLink to='/register' className="button">Register</NavLink>
        
      </form>
    </div>
  );
}
