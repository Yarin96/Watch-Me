import React from "react";
import { useContext } from "react";
import { FavContext } from "../../context/FavContext";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Background from "../../components/Background/Background";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./Favorites.css";

function Favorites() {
  const { favorites, addFavMovie, removeFromFav } = useContext(FavContext);

  const slideLeft = () => {
    document.getElementById("slider").scrollLeft -= 315;
  };

  const slideRight = () => {
    document.getElementById("slider").scrollLeft += 315;
  };

  return (
    <>
      <Background favorite={true} />
      {favorites.length === 0 ? (
        <div className="outer">
          <br />
          <h1>
            <span role="img" aria-label="cinema">
              My Favorites 🍿📽️
            </span>
          </h1>
          <h1>
            <span role="img" aria-label="sad-face">
              No movies added to Favorites yet, please add some. 😕
            </span>
          </h1>
          <br />
        </div>
      ) : (
        <div className="outer">
          <br />
          <h1>
            <span role="img" aria-label="cinema">
              My Favorites 🍿📽️
            </span>
          </h1>
          <h1>Total movies added: {favorites.length}</h1>
          <div className="movie-slider">
            <div className="left-arrow">
              <MdChevronLeft size={40} onClick={slideLeft} />
            </div>
            <div id="slider">
              {favorites.map((movie) => (
                <MovieCard
                  key={movie.id}
                  item={movie}
                  fav={true}
                  addToFav={addFavMovie}
                  removeFromFav={removeFromFav}
                />
              ))}
            </div>
            <div className="right-arrow">
              <MdChevronRight onClick={slideRight} size={40} />
            </div>
          </div>
          <br />
        </div>
      )}
    </>
  );
}

export default Favorites;
