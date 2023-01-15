import React, { useState } from "react";
import { Link } from "react-router-dom";
import './css/LoginForm.css';

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({type:"signin", name:"", password:""});
    const [ifSubmited, setIfSubmited] = useState(false);

    const submitHandler = e => {
        e.preventDefault();
        setIfSubmited(true);
        Login(details);
    }

    return(
        <div className="LoginForm">
            {(ifSubmited && error === "") ? (
                <div className="Info">
                    <p>Welcome Back {details.name}</p>
                </div>
            ) : (
                <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>Login</h2>
                    {(error !== "") ? (<div>{error}</div>) : ""}
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" onChange={e=>setDetails({...details, name: e.target.value})} value={details.name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={e=>setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>
                    <input type="submit" value="LOGIN"/>
                    <Link to="/signup" className="LoginLink">signup</Link>
                </div>
            </form>
            )}
        </div>
    );
}

export default LoginForm;