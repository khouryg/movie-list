import React from 'react';
import { useState } from 'react';


const Search = (props) => {


  const handleChange = (event) => {
    console.log('hi');
  }

  const filterMovies = () => {
    // const result = [];
    // if (search !== '') {
    //   movieData.forEach((movie) => {
    //     if (movie.title.includes(search)) {
    //       result.push(movie);
    //     }
    //   });
    // } else {
    //   setMovieData(movieList);
    // }
    // setMovieData(result);
  }

  return (
    <div>
      <input type='text' id='search' onChange={handleChange} ></input>
      <button onClick={filterMovies}>Submit</button>
    </div>
  )
}

export default Search;