import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Dropdown } from "react-bootstrap";

import "../Styling/SearchForm.css";

const SearchForm = props => {
  const [query, setQuery] = useState("Enter a search...");
  const [results, setResults] = useState([]);
  const [limit, setLimit] = useState(3);
  const { updateMoodLinks } = props;
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

  const fetchAPI = event => {
    event.preventDefault();
    let giphyAPI = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&limit=${limit}`;
    fetch(giphyAPI)
      .then(response => response.json())
      .then(content => {
        setResults(content.data);
      });      
  };

  const fetchTrendingAPI = event => {
    event.preventDefault();
    let trendingAPI = `https://api.giphy.com/v1/gifs/trending?q=${query}&api_key=${API_KEY}&limit=${limit}`;
    fetch(trendingAPI)
      .then(response => response.json())
      .then(content => {
        setResults(content.data);
      })
    };

  return (
    <form className="SearchForm" onSubmit={fetchAPI}>
      <p>Search for a GIF, and click it to add it to your MoodWall:</p>

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

      <div className="TrendingButton">
        <Button variant={"primary"} type="submit" disabled={!query} onClick ={fetchTrendingAPI}>
          Trending!
        </Button>
      </div>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Choose # of gif search results to display
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setLimit(3)} >3</Dropdown.Item>
          <Dropdown.Item onClick={() => setLimit(4)} >4</Dropdown.Item>
          <Dropdown.Item onClick={() => setLimit(5)} >5</Dropdown.Item>
          <Dropdown.Item onClick={() => setLimit(6)} >6</Dropdown.Item>
          <Dropdown.Item onClick={() => setLimit(7)} >7</Dropdown.Item>
          <Dropdown.Item onClick={() => setLimit(8)} >8</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {results.map(d => (
        <img
          src={d.images.downsized.url}
          alt={d.title}
          onClick={() => updateMoodLinks(d.images.downsized.url)}
        />



      ))}

    </form>
  );
};

export default SearchForm;