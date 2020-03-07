import React, { useState } from "react";
import GifCard from "../Components/gifCard";

const Search = query => {
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const [data, setData] = useState([]);
  const limit = 5;

  let giphyAPI = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&limit=${limit}`;
  fetch(giphyAPI)
    .then(response => response.json())
    .then(content => {
      setData(content.data);
    });

  return (
    <div>
      <p>{query}</p>
      {data.map(d => (
        <GifCard image={d}/> 
      ))}
      <p>{data[0]?.title}</p>
    </div>
  );
};

export default Search;
