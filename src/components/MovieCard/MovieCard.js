import React from "react";
import { useContext } from "react";
import { BgContext } from "../../context/BgContext";
import { FavContext } from "../../context/FavContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import "./MovieCard.css";

function MovieCard(props) {
  const { changeBackground } = useContext(BgContext);
  const { favorites } = useContext(FavContext);

  // A function to choose the relevant icon on the MovieCard
  const CheckIcon = () => {
    const isAlreadyInFavorites = favorites.some((item) => item === props.item);
    if (!props.fav) {
      if (isAlreadyInFavorites) {
        return <FaHeart />;
      } else {
        return <FaRegHeart />;
      }
    } else {
      return <IoIosCloseCircle />;
    }
  };

  return (
    <div className="slider-props">
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.item.poster_path}`}
        alt={props.item.title}
        onError={({ currentTarget }) => {
          // Show a blank movie card image in case there's no movie poster available
          currentTarget.src =
            "https://images-na.ssl-images-amazon.com/images/I/41bLP6NzvKL.jpg";
        }}
      />
      <div className="effects" onClick={() => changeBackground(props.item)}>
        <p className="title">{props.item.title}</p>
        <p
          className="icon"
          onClick={
            props.fav === false
              ? () => {
                  props.addToFav(props.item);
                }
              : () => props.removeFromFav(props.item)
          }
        >
          <CheckIcon />
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
