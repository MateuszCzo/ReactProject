import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { isExpired, decodeToken  } from "react-jwt";

import './css/Header.css';
import logo from './images/logo.jpg';

function Header({setSearch}) {

  const isNotLogged = isExpired(localStorage.getItem('token'))
  const name = isNotLogged ? "" : decodeToken(localStorage.getItem('token')).name;
  const userId = isNotLogged ? "" : decodeToken(localStorage.getItem('token')).userId;

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    axios.delete(`https://at.usermd.net/api/user/logout/${userId}`, {
      userId: userId
    })
      .then((response) => {
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        console.log("Błąd");
    });
  }

  const searchInput = (value) => {
    setSearch(value);
    navigate("/");
  }

  return(
      <div className='Header'>
          <Link to="/">
            <img className='LogoImage' src={logo} alt="Home"/>
          </Link>
          <input className='SearchBar' type="text" placeholder='Szukaj Filmów' onChange={e=>searchInput(e.target.value)}/>
          {(name !== "") ? (
            <>
              <Link className="nav-link AddVideo" to="/add" >add film</Link>
              <span className="UserName">{name}</span>
              <button className="LogoutLink" onClick={logout}>LOGOUT</button>
            </>
          ) : (
              <Link to="/signin" className="nav-link LoginLink">LOGIN</Link>
          )}
      </div>
  );
}

export default Header;