import React from "react";
import { useEffect, useState, useContext } from "react";
import { FavContext } from "../../context/FavContext";
import MovieCard from "../MovieCard/MovieCard";
import Loading from "../Loading/Loading";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./Row.css";

const Row = ({ title, fetchURL }) => {
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
    document.getElementById("slider").scrollLeft -= 512;
  };

  const slideRight = () => {
    document.getElementById("slider").scrollLeft += 512;
  };

  return loading ? (
    <div className="outer">
      <Loading />
    </div>
  ) : (
    <div className="outer">
      <h2>{title}</h2>
      <div className="movie-slider">
        <div className="left-arrow">
          <MdChevronLeft size={40} onClick={slideLeft} />
        </div>
        <div id="slider">
          {movies.map((movie) =>
            movie.genre === title ||
            title === "Coming Up Soon" ||
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
    </div>
  );
};

export default Row;
