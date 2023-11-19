import React from 'react'
import { useState } from 'react'
import './Register.css'
import { useNavigate , NavLink} from 'react-router-dom';
import axios from 'axios'

export default function Register() {

  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    
       axios.post("http://localhost:8000/register", {
        email,password,name})
      .then(result => {
        console.log(result)
        alert('User Registered')
      navigate('/')})
      .catch(err=> console.log(err))
    
    
  };






  return (
<div className='register'>
        <h1>Register Page</h1>
       
        <input type='text'  placeholder='Your name' onChange={(e)=> setName(e.target.value)}></input>
        <input type='email'  placeholder='Your email' onChange={(e)=> setEmail(e.target.value)}></input>
        <input type='password'  placeholder='Your password' onChange={(e)=> setPassword(e.target.value)}></input>
        
        <div className='button' onClick={handleRegister}>Register</div>
        {/* <div>or</div>
        <div className='button'>Login</div> */}

        <hr/>
        <NavLink to='/login' className="button">Login</NavLink>


    </div>
  )
}
