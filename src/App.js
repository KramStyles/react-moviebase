import {useEffect} from 'react'

const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`;

export const App = () => {

  const findMovies = async (movieTitle) => {
    const response = await fetch(`${API_URL}&s=${movieTitle}`);
    const data = await response.json();

    console.log(data);
  }

  useEffect(()=>{
    findMovies('marvel');
  }, []);

  return (
    <div>key: {API_URL}</div>
  )
}
