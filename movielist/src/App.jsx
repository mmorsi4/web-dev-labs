import React, { useState } from 'react'
import Movie from './movie.jsx'

function App(){
  const [MovieName, setMovieName] = useState("test");
  const [inputValue, setInputValue] = useState("");
  const [movieList, setMovieList] = useState([]);
  const[comment,setComment]=useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  function addMovie(){
    setMovieList([...movieList, inputValue])
    setInputValue("");
    console.log(movieList);
  }
 

  return(
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={addMovie}>Add movie</button>
      {movieList.map((movieName) => (
        <Movie movie_name={movieName} movieList={movieList} setMovieList={setMovieList} />
      ))}
    </div>
  )
}

export default App;
