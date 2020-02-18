// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';

const API_KEY = "api_key=My59wRuSm1SmfR3F0mDQHXr73zcebfMx";
let url = "https://api.giphy.com/v1/gifs/";
let limit = "&limit=3";

export default function Search({ query }) {
    const [results, setResults] = useState([]);

    useEffect(() =>{
    let searchUrl = url + "search?" + API_KEY + "&" + query + limit;
    fetch(searchUrl)
        .then(r => r.json())
        .then(r => setResults)
    }, [query]);

    console.log(results);
}

