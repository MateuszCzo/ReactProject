import React, { useState } from "react";
import './css/AddVideo.css'

function AddVideo() {
    const [details, setDetails] = useState({nazwa:"", opis:"", gatunek:"", link:"", reżyser:"", rok_produkcji:""});
    const [ifSubmited, setIfSubmited] = useState(false);
    
    const submitHandler = e => {
        e.preventDefault();
        setIfSubmited(true);
        //TODO send film to serwer
    }
    
    return(
        <div className="AddVideo">
            {(ifSubmited) ? (
               <div className="Info">
                   <p>Dodano film {details.name}</p>
                </div>
            ) : (
            <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>ADD VIDEO</h2>
                    <div className="form-group">
                        <label htmlFor="nazwa">nazwa:</label>
                        <input type="text" name="nazwa" id="nazwa" onChange={e=>setDetails({...details, nazwa: e.target.value})} value={details.nazwa}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="opis">opis:</label>
                        <input type="text" name="opis" id="opis" onChange={e=>setDetails({...details, opis: e.target.value})} value={details.opis}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="gatunek">gatunek:</label>
                        <input type="text" name="gatunek" id="gatunek" onChange={e=>setDetails({...details, gatunek: e.target.value})} value={details.gatunek}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="link">link:</label>
                        <input type="text" name="link" id="link" onChange={e=>setDetails({...details, link: e.target.value})} value={details.link}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="reżyser">reżyser:</label>
                        <input type="text" name="reżyser" id="reżyser" onChange={e=>setDetails({...details, reżyser: e.target.value})} value={details.reżyser}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rok_produkcji">rok_produkcji:</label>
                        <input type="text" name="rok_produkcji" id="rok_produkcji" onChange={e=>setDetails({...details, rok_produkcji: e.target.value})} value={details.rok_produkcji}/>
                    </div>
                        <input type="submit" value="ADD"/>
                    </div>
                </form>
            )}
        </div>
    );
}

export default AddVideo;