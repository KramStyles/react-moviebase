import React from 'react'

const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`;

export const App = () => {
  return (
    <div>key: {API_URL}</div>
  )
}
