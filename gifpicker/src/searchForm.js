import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Dropdown } from "react-bootstrap";
import { Redirect, withRouter } from "react-router-dom";

import MoodWall from "./MoodWall";

import "./SearchForm.css";

const SearchForm = props => {
  const [query, setQuery] = useState("hello");
  const [results, setResults] = useState([]);
  const [limit, setLimit] = useState(3);
  const [moodLinks, setMoodLinks] = useState([]);

  const { redirect } = props;
  // const [redirect, setRedirect] = useState(false);

  const API_KEY = "y5nemJHuTtxBZ01t4en7VHWEoYFEM7E5"; // put this at the top level of the component

  const fetchAPI = event => {
    event.preventDefault();
    let giphyAPI = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&limit=${limit}`;
    fetch(giphyAPI)
      .then(response => response.json())
      .then(content => {
        console.log(content);
        setResults(content.data);
      });
  };

  // console.log(moodLinks);

  return (
    <div>
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

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Choose # of gifs
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setLimit(3)}>3</Dropdown.Item>
            <Dropdown.Item onClick={() => setLimit(4)}>4</Dropdown.Item>
            <Dropdown.Item onClick={() => setLimit(5)}>5</Dropdown.Item>
            <Dropdown.Item onClick={() => setLimit(6)}>6</Dropdown.Item>
            <Dropdown.Item onClick={() => setLimit(7)}>7</Dropdown.Item>
            <Dropdown.Item onClick={() => setLimit(8)}>8</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {results.map(d => (
          <img
            src={d.images.downsized.url}
            alt={d.title}
            onClick={() => {
              setMoodLinks(moodLinks.concat(d.images.downsized.url));
              console.log("added to moodLinks");
            }}
          />
        ))}
        {/*<button onClick={() => setRedirect(true)}>TEST</button>*/}
      </form>
      {redirect && (
        <Redirect
          to={{
            pathname: "/MoodWall",
            state: { links: moodLinks }
          }}
        />
      )}
    </div>
  );
};

export default withRouter(SearchForm);
