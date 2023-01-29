import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BehaviorSubject, debounceTime } from 'rxjs';

import './css/Home.css';

const inputChange = new BehaviorSubject();
const inputChange$ = inputChange.asObservable();


function Home ({search=""}) {

    const [data, setData] = useState([]);
    const [movies, setMovies] = useState([]);
    const [finishLoading, setFinishLoading] = useState(false);

    const setNewMovies = (value="") => {
        let serchedMovies = [];
        data.forEach((movie) => {
            if(movie.title) {
                if(movie.title.toLowerCase().includes(value.toLowerCase())) serchedMovies.push(movie);
            }
        })
        setMovies(serchedMovies);
    };

    useEffect(() => {
        axios.get("https://at.usermd.net/api/movies")
        .then((response) => {
            setData(response.data);
            setMovies(response.data);
            setFinishLoading(true);
        })
        .catch((error) =>{
            console.log(error);
        })
    }, []);

    useEffect(() => {
        if(finishLoading) {
            const subscription = inputChange$
            .pipe(debounceTime(500))
            .subscribe((value) => {
                setNewMovies(value);
            });
        
            return () => {
                return subscription.unsubscribe();
            };
        }
    }, [finishLoading]);

    useEffect(() => {
        if(finishLoading) inputChange.next(search);
    }, [search]);

    return (
        <div className="Home">
            {finishLoading ? 
                movies.map((movie, i) => { return (
                    <div key={i} className="MovieContainer">
                        <Link to={`/details/${movie.id}`} className="nav-link" >
                            <div className='MovieAligner'>
                                <div>
                                    <img className='MovieImage' src={movie.image}/>
                                </div>
                                <div className='MovieDetails'>
                                    <p className='MovieTitle'>{movie.title}</p>
                                    <p className="MovieContent">{movie.content}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                )})
            :
            <p>Loading...</p>
            }
        </div>
    );
}

export default Home;