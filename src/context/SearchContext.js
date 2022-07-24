import React from "react";
import { createContext, useState } from "react";

// creating the context
export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [url, setUrl] = useState("");
  const [search, setSearch] = useState("");

  const searchMovieByEnter = (event) => {
    if (event.key === "Enter") {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=2e17f044e00f50ec93c82f2b38d45999&query=${search}`
      );
      setSearch(" ");
    }
  };

  const searchMovieByIcon = () => {
    setUrl(
      `https://api.themoviedb.org/3/search/movie?api_key=2e17f044e00f50ec93c82f2b38d45999&query=${search}`
    );
    setSearch(" ");
  };

  return (
    <SearchContext.Provider
      value={{ url, search, setSearch, searchMovieByEnter, searchMovieByIcon }}
    >
      {children}
    </SearchContext.Provider>
  );
};
