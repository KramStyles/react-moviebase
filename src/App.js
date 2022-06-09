import { useEffect, useState } from 'react'

import { MovieCard } from "./MovieCard";
import SearchIcon from "./search.svg";
import './App.css';

const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`;

const movie = {
  "Title": "Amazing Spiderman Syndrome",
  "Year": "2012",
  "imdbID": "tt25884554",
  "Type": "movie",
  "Poster": "N/A",
}


export const App = () => {

  const [movies, setMovies] = useState([])

  const findMovies = async (movieTitle) => {
    const response = await fetch(`${API_URL}&s=${movieTitle}`);
    const data = await response.json();

    setMovies(data.Search);
    console.log(movies)
  }

  useEffect(() => {
    findMovies('avengers');

  }, []);

  return (
    <div className='app'>
      <h1>MovieBase</h1>

      <div className="search">
        <input placeholder="Input movie name" value='The Avengers' onChange={() => { }} />
        <img src={SearchIcon} alt="search Icon" onClick={() => { }} />
      </div>

      {
        movies.length > 0 ? <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div> :
         (
           <div className='empty'>
             <h2>No Movies Found!</h2>
           </div>
         )
      }


    </div>
  )
}
