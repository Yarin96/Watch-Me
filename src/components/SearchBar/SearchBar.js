import React from "react";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import { Link } from "react-router-dom";
import SearchIcon from "../../images/search.svg";
import "./SearchBar.css";

function SearchBar() {
  const {
    search,
    setSearch,
    searchMovieByEnter,
    searchMovieByIcon
  } = useContext(SearchContext);

  return (
    <>
      <div className="search">
        <Link to="/results">
          <input
            placeholder="Type to Search..."
            autoComplete="off"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchMovieByEnter}
          />
          <img src={SearchIcon} alt="search" onClick={searchMovieByIcon} />
        </Link>
      </div>
    </>
  );
}

export default SearchBar;
