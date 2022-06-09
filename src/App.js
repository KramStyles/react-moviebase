import { useEffect, useState } from 'react'

import { MovieCard } from "./MovieCard";
import SearchIcon from "./search.svg";
import './App.css';

const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`;

export const App = () => {

  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState('');

  const findMovies = async (movieTitle) => {
    if (!movieTitle) alert("Let's be guided please. Enter a movie name!!")
    else {
      const response = await fetch(`${API_URL}&s=${movieTitle}`);
      const data = await response.json();

      setMovies(data.Search);
    }
  }

  useEffect(() => {
    findMovies('avengers');

  }, []);

  return (
    <div className='app'>
      <h1>MovieBase</h1>

      <div className="search">
        <input placeholder="The Avengers" value={term} onChange={(e) => setTerm(e.target.value)} />
        <img src={SearchIcon} alt="search Icon" onClick={() => findMovies(term)} />
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
