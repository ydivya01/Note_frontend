import React from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { useContext} from "react";
import { userContext } from "../../App";

export default function Header({ handleToggleDarkMode }) {
  const user = useContext(userContext)

  return (
    
    <header>
    
      <h4>NoteKeeper</h4>
      
<nav>
 <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <button
          className="toggle-button"
          onClick={() =>
            handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
          }
        >
          Toggle Mode
        </button>
      </nav>
    </header>
  );
}
