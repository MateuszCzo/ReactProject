import {React} from "react";
import image from './images/film.jpg';
import like from './images/like.jpg';

function Details() {
    return (
        <div className='Film'>
            <div>
                <img className='FilmImage' src={image} alt="film"/>
            </div>
            <div className='FilmInfo'>
                <div><p className='FilmName'>Rambo: Pierwsza Krew</p></div>
                <div><p>Rambo: Pierwsza Krew 1982</p></div>
                <div className='Score'><img className='ScoreImage' src={like} alt="like"/> <p className='ScoreNumber'>7,3</p> <p>liczba ocen: 142 343</p></div>
                <div><p>Gatunek: Dramat, Akcja   Rażyseria: Ted Kotcheff</p></div>
            </div>
        </div>
    )
}

export default Details;