import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import './css/AddVideo.css'

function AddVideo() {
    const [details, setDetails] = useState({title:"", image:"", content:""});
    const [error, setError] = useState("");

    const navigate = useNavigate();
    
    const submitHandler = e => {
        e.preventDefault();
        if(details.title === "" || details.image === "" || details.content === "") { setError("Błąd"); return }
        axios.post("https://at.usermd.net/api/movies", {
            title: details.title,
            image: details.image,
            content: details.content,
        })
        .then((response) => {
            navigate("/");
            console.log(response);
        })
        .catch((error) => {
            setError("Błąd");
            console.log(error);
        });
    }
    
    return(
        <div className="AddVideo">
            <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>ADD VIDEO</h2>
                    {(error !== "") ? (<div>{error}</div>) : ""}
                    <div className="form-group">
                        <label htmlFor="title">title:</label>
                        <input type="text" name="title" id="title" onChange={e=>setDetails({...details, title: e.target.value})} value={details.title}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">image:</label>
                        <input type="text" name="image" id="image" onChange={e=>setDetails({...details, image: e.target.value})} value={details.image}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">content:</label>
                        <input type="text" name="content" id="content" onChange={e=>setDetails({...details, content: e.target.value})} value={details.content}/>
                    </div>
                    <input type="submit" value="ADD"/>
                </div>
            </form>
        </div>
    );
}

export default AddVideo;