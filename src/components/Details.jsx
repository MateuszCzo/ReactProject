import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { isExpired, decodeToken  } from "react-jwt";

import './css/Details.css'

function Details() {
    const {id} = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(false);


    const isNotLogged = isExpired(localStorage.getItem('token'))
    const isAdmin = isNotLogged ? false : decodeToken(localStorage.getItem('token')).isAdmin;

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://at.usermd.net/api/movies/${id}`)
        .then((response) => {
            setMovie(response.data);
            setLoading(true);
        })
        .catch((error) =>{
            console.log(error)
        })
    }, []);

    const deleteVideo = () => {
        axios.delete(`https://at.usermd.net/api/movie/${id}`)
        .then((response) => {
            navigate("/");
            console.log(response);
        })
        .catch((error) =>{
            console.log(error);
        })
    }

    return (
        <div className="Details">
            {loading ? 
                <div className="MovieContainer">
                    <div className='MovieAligner'>
                        <div>
                            <img className='MovieImage' src={movie.image}/>
                        </div>
                        <div className='MovieDetails'>
                            <div><p className='MovieTitle'>{movie.title}</p></div>
                            <div><p className="MovieContent">{movie.content}</p></div>
                            {isAdmin ? <div><button className="DeleteButton" onClick={deleteVideo}>DELETE</button></div> : null}
                        </div>
                    </div>
                </div>
            :
            <p>Loading ...</p>
            }
        </div>
    )
}

export default Details;