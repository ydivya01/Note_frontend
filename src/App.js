import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import { useState, createContext, useEffect } from "react";
import Home from './Components/Home/Home';
import About from "./Components/About/About";
import Header from "./Components/HeaderFooter/Header";
import Footer from "./Components/HeaderFooter/Footer";
import AddNotes from "./Components/Notes/AddNotes";
import UpdateNotes from "./Components/Notes/UpdateNotes";
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import axios from 'axios'

export const userContext = createContext()

function App() {


const [darkMode, setDarkMode]= useState(false)
const[user, setUser] = useState({})
useEffect(()=>{
  axios.get('http://localhost:8000/')
  .then(user=> {
    setUser(user.data)
    console.log(user)
  })
  .catch(err => console.log(err))
    },[])

  return (
    <userContext.Provider value={user}>

    <div className={`${darkMode && 'dark-mode'}`}>
    <BrowserRouter>
    
   
     <Header handleToggleDarkMode={setDarkMode}/>
      <Routes>
      <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/add-note" element={<AddNotes/>}/>
        <Route path="/notes/:id" element={<UpdateNotes/>}/>
        <Route path="/about" element={<About/>}/>
       
      </Routes>
      
   <Footer/>
   
    </BrowserRouter>
    </div>
    </userContext.Provider>
  );
}

export default App;
