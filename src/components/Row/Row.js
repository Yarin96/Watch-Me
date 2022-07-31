import React from "react";
import { useEffect, useState, useContext } from "react";
import { FavContext } from "../../context/FavContext";
import MovieCard from "../MovieCard/MovieCard";
import Loading from "../Loading/Loading";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./Row.css";

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addFavMovie, removeFromFav } = useContext(FavContext);

  useEffect(() => {
    setLoading(true);
    fetch(fetchURL)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setMovies(data.results);
          setLoading(false);
        }, 1800);
      });
  }, [fetchURL]);

  const slideLeft = () => {
    document.getElementById("slider").scrollLeft -= 315;
  };

  const slideRight = () => {
    document.getElementById("slider").scrollLeft += 315;
  };

  return loading ? (
    <div className="outer-loading">
      <Loading />
    </div>
  ) : (
    <div className="outer">
      <br />
      <h2>{title}</h2>
      <div className="movie-slider">
        <div className="left-arrow">
          <MdChevronLeft size={40} onClick={slideLeft} />
        </div>
        <div id="slider">
          {/* Filtering the correct MovieCards in the Row component,
          depending on if the "title" prop and the data fetched (from API/JSON file)
          into "movies" array are equal */}
          {movies.map((movie) =>
            title === movie.genre ||
            title === "Now Playing" ||
            title === "Search Results" ? (
              <MovieCard
                key={movie.id}
                item={movie}
                fav={false}
                addToFav={addFavMovie}
                removeFromFav={removeFromFav}
              />
            ) : null
          )}
        </div>
        <div className="right-arrow">
          <MdChevronRight onClick={slideRight} size={40} />
        </div>
      </div>
      <br />
    </div>
  );
}

export default Row;
