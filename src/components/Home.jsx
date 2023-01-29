import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BehaviorSubject, debounceTime } from "rxjs";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import './css/Home.css';
import 'swiper/css';
import 'swiper/css/free-mode';

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
                <Swiper
                    freeMode={true}
                    grabCursor={true}
                    modules={[FreeMode]}
                    className="Swiper"
                    slidesPerView={5}
                    spaceBetween={10}
                >
                    {movies.map((movie, i) => { return (
                        <SwiperSlide key={i}>
                            <div className="MovieContainer">
                                <Link to={`/details/${movie.id}`} className="nav-link" >
                                    <div className='MovieAligner'>
                                        <img className='MovieImage' src={movie.image}/>
                                        <p className='MovieTitle'>{movie.title}</p>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>
                    )})}
                </Swiper>
            :
            <p>Loading...</p>
            }
        </div>
    );
}

export default Home;