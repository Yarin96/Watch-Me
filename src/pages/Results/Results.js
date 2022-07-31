import React from "react";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import Row from "../../components/Row/Row";
import Background from "../../components/Background/Background";
import "./Results.css";

function Results() {
  const { url } = useContext(SearchContext);
  const [movies, setMovies] = useState([]);

  // Extra useEffect to check if there are no results for user's input.
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [url]);

  return (
    <>
      <Background favorite={false} />
      {movies === undefined || movies.length === 0 ? (
        <div className="outer">
          <br />
          <h1>
            <span role="img" aria-label="zombie">
              No results to show. 🧟
            </span>
          </h1>
        </div>
      ) : (
        <Row title="Search Results" fetchURL={url} />
      )}
    </>
  );
}

export default Results;
