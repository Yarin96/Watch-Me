import React from "react";
import { useContext } from "react";
import { BgContext } from "../../context/BgContext";
import { FavContext } from "../../context/FavContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import "./MovieCard.css";

const MovieCard = (props) => {
  const { changeBackground } = useContext(BgContext);
  const { favorites } = useContext(FavContext);
  // .some method returns a boolean value
  const isAlreadyInFavorites = favorites.some((item) => item === props.item);

  // Choose the relevant icon
  const CheckIcon = () => {
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
          // Show a blank movie card in case there is no movie poster available
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
};

export default MovieCard;
