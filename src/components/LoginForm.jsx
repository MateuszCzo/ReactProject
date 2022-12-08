import React, { useState } from "react";
import './css/LoginForm.css';

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({name:"", email:"", password:""});
    const [ifSubmited, setIfSubmited] = useState(false);

    const submitHandler = e => {
        e.preventDefault();
        setIfSubmited(true);
        Login(details);
    }

    return(
        <div className="MainDiv">
            {(ifSubmited && error === "") ? (
                <div className="Welcome">
                    <p>Welcome {details.name}</p>
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
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" onChange={e=>setDetails({...details, email: e.target.value})} value={details.email}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={e=>setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>
                    <input type="submit" value="LOGIN"/>
                </div>
            </form>
            )}
        </div>
    );
}

export default LoginForm;