import {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';

import Film from './filmToReview';

export default function FilmReviewList(){
    const [films, setFilms] = useState([]);

     

    useEffect(()=>{
        const reloadFilms = async () => {
        const res = await fetch(`/api/films`);
        console.log("What is res gettting", res);
        if(!res.ok){
            console.error("Failed to fetch films", res.status);
            return;

        } 
            const data = await res.json();
            console.log("Fetched Data: ", data);
            console.log("Type of data: ", typeof data);
           
            setFilms(data);
        };
        reloadFilms();
        return () => {
            console.log("Fetching effect cleanup")
        }
    },[]);
    
    
    function renderFilm(film){
        return (
            <Film 
            director={film.director}
            title={film.title}
            genre={film.genre}
            screener={film.screener}
            status={film.status}
            />
        );

    }
    //useEffect(()=>{})
    if(films.length===0){
        return(
            <Container>Loading films...</Container>
        );
    } else {
        return(
            <Container>
                {films.map(renderFilm)}
            </Container>);
            
    }
    
}
