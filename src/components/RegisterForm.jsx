import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import './css/RegisterForm.css';

function RegisterFrom() {
    const [details, setDetails] = useState({login:"", email:"", password:""});
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        if(details.login === "" || details.email === "" || details.password === "") { setError("Błąd"); return }
        axios.post('https://at.usermd.net/api/user/create', {
            name: details.login,
            email: details.email,
            password: details.password,
        })
        .then((response) => {
            navigate("/signin");
        })
        .catch((error) => {
            setError("Błąd");
        });
    }

    return(
        <div className="RegisterForm">
            <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>Register</h2>
                    {(error !== "") ? (<div>{error}</div>) : ""}
                    <div className="form-group">
                        <label htmlFor="login">Login:</label>
                        <input type="text" name="login" id="login" onChange={e=>setDetails({...details, login: e.target.value})} value={details.login}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" onChange={e=>setDetails({...details, email: e.target.value})} value={details.email}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={e=>setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>
                    <input type="submit" value="REGISTER"/>
                    <Link to="/signin" className="nav-link"> signin</Link>
                </div>
            </form>
        </div>
    );
}

export default RegisterFrom;