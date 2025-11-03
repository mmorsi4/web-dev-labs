import React, { useState } from 'react'

function Movie({ movie_name, movieList, setMovieList }){
    const [starList, setStarList] = useState("");
    const [commentList, setCommentList] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function removeMovie(){
        if (!movieList) return;
        const updatedList = movieList.filter(name => name !== movie_name);
        setMovieList(updatedList);
    }
    
    function addComment(){
        if (inputValue.trim() === "") return;
        setCommentList([...commentList, inputValue]);
        setInputValue("");
    }

    function changeStars(e){
        const numberOfStars = e.target.value;
        setStarList("⭐".repeat(numberOfStars));
    }

    return(
        <div>
            <h1>
                {movie_name}
                <button onClick={removeMovie}>Remove the movie</button>
                <select onChange={changeStars}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                {starList}
                <input
                    type='text'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={addComment}>Add Comment</button>
                <ul>
                    {commentList.map((comment, index) => (
                        <li key={index}>{comment}</li>
                    ))}
                </ul>
            </h1>
        </div>
    )
}

export default Movie;
