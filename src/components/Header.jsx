import React from "react";
import { Link } from "react-router-dom";
import './css/Header.css'
import logo from "./images/logo.jpg";

function Header({user, logout}) {

  return(
      <div className='Header'>
        <div className='IconAndSearchBar'>
          <Link to="/"><img className='LogoImage' src={logo} alt="Home"/></Link>
          <input className='SearchBar' type="text" name="film" id="film" placeholder='Szukaj Filmów'/>
        </div>
        <div className='Login'>
          {(user !== "") ? (
            <div className='LoginDiv'>
              <Link to="/add" >add film</Link>
              <span> {user} </span>
              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            <div className='LoginDiv'>
              <Link to="/signin" className="LoginLink">LOGIN</Link>
             </div>
          )}
        </div>
      </div>
  );
}

export default Header;