import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import './SearchForm.css'
import Search from "./api";

const SearchForm = () => {
    const [error, setError] = useState(null);
    const [query, setQuery] = useState('');

    const handleQueryChange = event => setQuery(event.target.value);

    const search = async event => {
        event.preventDefault();

        setError(null);

        try {
            await Search({query});
        } catch (error) {
            console.log(error);
            setError('Search Error')
        }
    };

    return (
        <form className="SearchForm" onSubmit={search}>
            <p>Search for a GIF to add to your MoodWall:</p>

            <input name="query" type="text" value={query} onChange={handleQueryChange} />

            <div className="ButtonBar">
                <Button variant={"primary"} type="submit" disabled={!query}>Search!</Button>
            </div>

            {error && (
                <div className="error">
                    {error}
                </div>
            )}
        </form>
    )
};

export default SearchForm
