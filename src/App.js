import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import logo from "./components/images/logo.jpg";

function App() {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if (/*server verification*/ true) {
      setUser(details.name)
    } else {
      setError("Details do not match");
    }
  }

  const Logout = () => {
    setUser("");
    //LOGOUT
  }

  return (
    <BrowserRouter>
      <div className='Container'>
        <div className='Header'>
          <div className='IconAndSearchBar'>
            <Link to="/" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home"
              role="tab" aria-controls="pills-home" aria-selected="true"><img className='LogoImage' src={logo} alt="Home"/></Link>
            <input className='SearchBar' type="text" name="film" id="film" placeholder='Szukaj Filmów'/>
          </div>
          <div className='Login'>
            {(user !== "") ? (
              <div className='LoginDiv'>
                <span>{user}</span>
                <button onClick={Logout}>Logout</button>
              </div>
            ) : (
              <div className='LoginDiv'>
                <Link to="/login" className="nav-link LoginLink" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">LOGIN</Link>
              </div>
            )}
          </div>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/login" element={<LoginForm Login={Login} error={error}/>} exact/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;