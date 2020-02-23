import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

import "./SearchForm.css";

const SearchForm = () => {
  const [query, setQuery] = useState("hello");
  const [results, setResults] = useState([]);

  const API_KEY = "y5nemJHuTtxBZ01t4en7VHWEoYFEM7E5"; // put this at the top level of the component
  const limit = 5;

  const fetchAPI = event => {
    event.preventDefault();
    console.log("is this orking");
    let giphyAPI = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&limit=${limit}`;
    fetch(giphyAPI)
      .then(response => response.json())
      .then(content => {
        console.log("FETCH THEN > content:");
        console.log(content);
        setResults(content.data);
      })
  };

  return (
    <form className="SearchForm" onSubmit={fetchAPI}>
      <p>Search for a GIF to add to your MoodWall:</p>

      <input
        name="query"
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <div className="ButtonBar">
        <Button variant={"primary"} type="submit" disabled={!query}>
          Search!
        </Button>
      </div>
      {results.map(d => (
        <img src={d.images.downsized.url} alt={d.title} />
      ))}
    </form>
  );
};

export default SearchForm;
