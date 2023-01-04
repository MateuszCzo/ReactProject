import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterFrom({Login, error}) {
    const [details, setDetails] = useState({type:"signup", login:"", name:"", email:"", password:""});
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
                    <h2>Register</h2>
                    {(error !== "") ? (<div>{error}</div>) : ""}
                    <div className="form-group">
                        <label htmlFor="login">Login:</label>
                        <input type="text" name="login" id="login" onChange={e=>setDetails({...details, login: e.target.value})} value={details.login}/>
                    </div>
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
                    <Link to="/signin" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">signup</Link>
                </div>
            </form>
            )}
        </div>
    );
}

export default RegisterFrom;