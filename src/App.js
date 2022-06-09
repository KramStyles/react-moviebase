import {useEffect} from 'react'

import { MovieCard } from "./MovieCard";
import SearchIcon from "./search.svg";
import './App.css';

const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`;



export const App = () => {

  const findMovies = async (movieTitle) => {
    const response = await fetch(`${API_URL}&s=${movieTitle}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(()=>{
    // findMovies('avengers');
  }, []);

  return (
    <div className='app'>
      <h1>MovieBase</h1>

      <div className="search">
        <input placeholder="Input movie name" value='The Avengers' onChange={() => {}}/>
        <img src={SearchIcon} alt="search Icon" onClick={() => {}}/>
      </div>

      <div className="container">
        <MovieCard />
      </div>
    </div>
  )
}
