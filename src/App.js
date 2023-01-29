import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { isExpired } from "react-jwt";

import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import RegisterForm from './components/RegisterForm';
import AddVideo from './components/AddVideo';
import Details from './components/Details';
import Header from './components/Header';

import './App.css';

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className='App'>
      <div className='Container'>
      <BrowserRouter>
        <Header setSearch={setSearch}/>
        <Routes>
          <Route path="/" element={<Home search={search}/>} exact/>
          {isExpired(localStorage.getItem("token")) ? <Route path="/signin" element={<LoginForm/>}/> : null}
          {isExpired(localStorage.getItem("token")) ? <Route path="/signup" element={<RegisterForm/>}/> : null}
          <Route path="/details/:id" element={<Details/>} exact/>
          <Route path="/add" element={<AddVideo/>} exact/>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}
export default App;