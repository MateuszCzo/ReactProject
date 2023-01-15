import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import RegisterForm from './components/RegisterForm';
import AddVideo from './components/AddVideo';
import Details from './components/Details';
import Header from './components/Header';

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
        <Header user={user} logout={Logout}/>
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