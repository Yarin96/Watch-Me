import { useContext, useState } from 'react';
import { BgContext } from '../../context/BgContext';
import { FavContext } from '../../context/FavContext';
import './Background.css';

const API_IMG = "https://image.tmdb.org/t/p/original";

const Background = (props) => {

    const { chosenMovieImg, shortenString } = useContext(BgContext);
    const { addFavMovie } = useContext(FavContext);
    const [like, setLike] = useState(false);

    return(
        <div className="bg-props">
            <div className="bg-effects">
            </div>
            { (props.fav === true) ? 
            (
                <>
                    <img
                        src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg"
                        alt="background"  
                    />
                    <div className="movie-info">
                        <h1>Your Choices All in One Place! 🤩</h1>
                    </div>
                </>
            ) : (
                <>
                {(chosenMovieImg?.length !== 0) ?
                 (
                    <>
                        <img src={API_IMG + chosenMovieImg?.backdrop_path} alt={chosenMovieImg?.title} />
                        <div className="movie-info">
                            <h1>{chosenMovieImg?.title}</h1>
                            <div className="secondary-line">
                                <p>Released: {chosenMovieImg?.release_date}</p>
                            </div>
                            <div className="secondary-line">
                                <button onClick={() => {addFavMovie(chosenMovieImg, like); setLike(!like);}}>⭐Add to Favorites⭐</button>
                            </div>
                            <h3 className="overview">{shortenString(chosenMovieImg?.overview, 300)}</h3>
                        </div>
                    </>
                 ) : (
                        <img
                            src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg"
                            alt="background"  
                        />
                 )}
                </>
            )}
        </div>
    )
}

export default Background;