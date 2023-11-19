import React from 'react'
import Notes from '../Notes/Notes'
import axios from 'axios'
import { NavLink } from 'react-router-dom';
//import { useLocation } from 'react-router-dom'
// import './Home.css'


export default function Home() {

  axios.defaults.withCredentials = true;
  const handleLogout = () => {
    axios.get('http://localhost:8000/logout')
                .then(res => {
                    //navigate(0)
                    if(res.data === "Success")
                   
                    window.location.href='/'
                }).catch(err => console.log(err))
        }


  return (
    <div className='home'>
        <h1>Hello
           and Welcome to Notekeeper</h1>
        <Notes/>
        <NavLink onClick={handleLogout}><button>Logout</button></NavLink>
        {/* <button />Logout<button onClick={handleLogout}>Logout</button> */}
    </div>
  )
}
