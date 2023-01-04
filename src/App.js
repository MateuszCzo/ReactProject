import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import RegisterForm from './components/RegisterForm';
import AddVideo from './components/AddVideo';
import Details from './components/Details';
import logo from "./components/images/logo.jpg";

function App() {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if(details.type==="login") {
      if (/*server verification*/ true) {
        setUser(details.name)
      } else {
        setError("Details do not match");
      }
    }
    else {
      if (/*send user data to serwer*/ true) {
        setUser(details.name)
      } else {
        setError("Details do not match");
      }
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
                <Link to="/add" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home"
                role="tab" aria-controls="pills-home" aria-selected="true">add film</Link>
                <span>{user}</span>
                <button onClick={Logout}>Logout</button>
              </div>
            ) : (
              <div className='LoginDiv'>
                <Link to="/signin" className="nav-link LoginLink" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">LOGIN</Link>
              </div>
            )}
          </div>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/signin" element={<LoginForm Login={Login} error={error}/>} exact/>
            <Route path="/signup" element={<RegisterForm Login={Login} error={error}/>} exact/>
            <Route path="/details" element={<Details/>} exact/>
            <Route path="/add" element={<AddVideo/>} exact/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;