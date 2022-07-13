import { useContext } from 'react';
import { FavContext } from '../../context/FavContext';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Background from '../../components/Background/Background';
import MovieCard from '../../components/MovieCard/MovieCard';
import './Favorites.css';


const Favorites = () => {  

    const { favorites, addFavMovie, removeFromFav } = useContext(FavContext);

    const slideLeft = () => {
        document.getElementById("slider").scrollLeft -= 512;
    }

    const slideRight = () => {
        document.getElementById("slider").scrollLeft += 512;
    }

    return(
      <>
        <Background fav={true} />
        {(favorites.length === 0) ?
          (<div className="outer">
                <h1>My Favorites</h1>
                <h1>No movies added to Favorites yet, please add some.</h1>
           </div>
           ) : (
            <div className="outer">
                <h1>My Favorites</h1>
                <h1>Number of movies added: {favorites.length}</h1>
                <div className="movie-slider">
                    <div className="left-arrow">
                            <MdChevronLeft 
                                size={40} 
                                onClick={slideLeft}
                            />
                    </div>
                    <div id="slider">
                        {favorites?.map((movie) => (
                        <MovieCard 
                                key={movie.id}
                                item={movie}
                                fav={true}
                                addToFav={addFavMovie}
                                removeFromFav={removeFromFav} />
                        ))}
                    </div>
                    <div className="right-arrow">
                        <MdChevronRight 
                            onClick={slideRight}
                            size={40} 
                        />
                    </div>
                </div>
            </div>
           )
        }
      </>
    )
}

export default Favorites;