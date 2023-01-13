import React from 'react';

const List = (props) => (
  <div>
    {props.movieList.map((movie) => (
      <div class='list-item'>{movie.title}</div>
    ))}
  </div>
);

export default List;