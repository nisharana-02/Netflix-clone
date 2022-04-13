import React, { useState, useEffect } from "react";
import instance from "./axios";
import { className } from "postcss-selector-parser";
import "./Row.css";
import axios from "axios";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer'; 

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
console.log(isLargeRow)
  //A snippet of code which runs based on a specific condition

  useEffect(() => {
    //If [], run once when the row loads, and then dont run again
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {

      autoplay: 1,
    }
  }
  console.log(movies);
  
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
       movieTrailer(movie.title || "")
       .then(url => {
         //https://www.youtube.com/watch?v=XtMThy8QKqU
        const urlParams = new URLSearchParams (new URL(url).search);
        console.log(urlParams);
        setTrailerUrl(urlParams.get('v'));
       }).catch(error => console.log(error)) 
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies ? (
          movies.map((movie, i) => ( <img className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
          key={movie.id} 
          onClick={() => handleClick(movie)}
          src={base_url + movie.poster_path}
          alt={movie.title} 
          /> 
          ))
        ) : (
         null
        )}
      </div>
         {/**  <YouTube videoId={trailerUrl} opts={opts}/> */}
    </div>
    
  );
}

export default Row;

// "/appbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg"
