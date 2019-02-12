import React, { Component, useState, useEffect, useRef } from "react";
import axios from "axios";

const Home = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("react hooks");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchInputRef = useRef();

  useEffect(() => {
    getResults();
  }, []);

  const getResults = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=${query}`
      );
      setIsLoading(false);
      setResults(response.data.hits);
    } catch (error) {
      setError(error);
    }
  };

  const handleSearch = e => {
    console.log("hello");
    e.preventDefault();
    getResults();
  };

  const handleClearSearch = () => {
    setQuery("");
    searchInputRef.current.focus();
  };

  return (
    <div>
      <h1 className="text-grey-darkest font-thin">Hooks News</h1>
      <form onSubmit={handleSearch}>
        <input
          onChange={event => setQuery(event.target.value)}
          ref={searchInputRef}
          type="text"
          className="text"
        />
        <button type="submit">Search</button>
        <button onClick={handleClearSearch}>Clear</button>
      </form>

      {isLoading ? (
        <div className="font-bold text-orange-dark">Loading results...</div>
      ) : (
        <ul className="list-reset leading-normal">
          {results.map(result => (
            <li key={result.objectID}>
              <a
                href={result.url}
                className="text-indigo-dark hover:text-indigo-darkest"
              >
                {result.title}
              </a>
            </li>
          ))}
        </ul>
      )}
      {error && (
        <div>
          className="text-red font-bold">
          {error.message}
        </div>
      )}
    </div>
  );
};

export default Home;
