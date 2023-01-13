import React from 'react';
import { useState } from 'react';
import List from './List.jsx';
import Search from './Search.jsx';

const movieList = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

const App = (props) => {
  const [movieData, setMovieData] = useState(movieList);
  const [search, setSearch] = useState('');
  return (
    <div>
      <Search setMovieData={setMovieData} movieList={movieList} setSearch={setSearch} search={search} />
      <List movieList={movieData}/>
    </div>
  )
};

export default App;