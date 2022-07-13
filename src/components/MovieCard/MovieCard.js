import { useState, useContext } from 'react';
import { BgContext } from '../../context/BgContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoIosCloseCircle } from "react-icons/io";
import './MovieCard.css';

const MovieCard = (props) => {

    const {changeBackground} = useContext(BgContext);
    const [like, setLike] = useState(false);

    const CheckIcon = () => {
      if(!props.fav){
        if(like === true){
          return (<FaHeart />);
        }
        else{
          return (<FaRegHeart />);
        }
      }else{
        return (<IoIosCloseCircle />);
      }
    }

    return (
        <div className="slider-props">
          <img 
              src={`https://image.tmdb.org/t/p/w500/${(props.item)?.poster_path}`} 
              alt={(props.item)?.title} 
              onError={({currentTarget}) => {
                currentTarget.src="https://images-na.ssl-images-amazon.com/images/I/41bLP6NzvKL.jpg";
              }}
            />
            <div className="effects" onClick={() => changeBackground(props.item)}>
                <p className="title">
                  {(props.item)?.title}
                </p>
                <p className="icon" 
                  onClick={(props.fav === false) ? 
                    (() => {props.addToFav(props.item, like); setLike(!like);}
                    ) : (
                    () => props.removeFromFav(props.item))}
                >
                  <CheckIcon />
                </p>
            </div>
        </div>
    );
  }

export default MovieCard;