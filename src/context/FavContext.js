import React from "react";
import { createContext, useState } from "react";

// creating the context
export const FavContext = createContext();

export const FavProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavMovie = (movie) => {
    if (favorites.some((item) => item.title === movie.title)) {
      alert(`You have already added this movie to your favorites!`);
    } else {
      const newFavList = [...favorites, movie];
      setFavorites(newFavList);
      alert(
        `The movie "${movie.title}" has been added successfully to your favorites!`
      );
    }
  };

  const removeFromFav = (movie) => {
    const newFavList = favorites.filter((favItem) => favItem.id !== movie.id);
    setFavorites(newFavList);
    alert(
      `The movie "${movie.title}" has been removed successfully from your favorites!`
    );
  };

  return (
    <FavContext.Provider value={{ favorites, addFavMovie, removeFromFav }}>
      {children}
    </FavContext.Provider>
  );
};
