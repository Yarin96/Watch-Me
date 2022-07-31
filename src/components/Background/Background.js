import React from "react";
import { useContext, useState, useEffect } from "react";
import { BgContext } from "../../context/BgContext";
import { FavContext } from "../../context/FavContext";
import Popup from "../Popup/Popup";
import { MdPlayCircle } from "react-icons/md";
import "./Background.css";

function Background(props) {
  const { chosenMovieImg, shortenString, Trailer } = useContext(BgContext);
  const { addFavMovie } = useContext(FavContext);
  const [video, setVideo] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);

  // Extract images and videos from the external API:
  const IMG_API = "https://image.tmdb.org/t/p/original";
  const VID_API = `https://api.themoviedb.org/3/movie/${chosenMovieImg.id}/videos?api_key=2e17f044e00f50ec93c82f2b38d45999`;

  useEffect(() => {
    if (chosenMovieImg !== undefined) {
      fetch(VID_API)
        .then((res) => res.json())
        .then((data) => {
          setVideo(data);
        });
    }
  }, [VID_API, chosenMovieImg]);

  return (
    <div className="bg-props">
      <div className="bg-effects"></div>
      {props.favorite === true ? (
        <>
          <img
            src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg"
            alt="background"
          />
          <div className="movie-info">
            <h1>
              <span role="img" aria-label="happy-face">
                Your Choices All in One Place! 🤩
              </span>
            </h1>
          </div>
        </>
      ) : (
        <>
          {chosenMovieImg.length !== 0 ? (
            <>
              <img
                src={IMG_API + chosenMovieImg.backdrop_path}
                alt={chosenMovieImg.title}
              />
              <div className="movie-info">
                <h1>{chosenMovieImg.title}</h1>
                <div className="secondary-line">
                  <p>Released: {chosenMovieImg.release_date}</p>
                </div>
                <h3 className="overview">
                  {shortenString(chosenMovieImg.overview, 250)}
                </h3>
                <div className="video-container">
                  <div className="buttons-section">
                    <button onClick={() => setButtonPopup(true)}>
                      Watch Trailer&nbsp;{" "}
                      <MdPlayCircle style={{ margin: -6, padding: 4 }} />
                    </button>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                      <Trailer videosToShow={video} />
                    </Popup>
                    <button
                      onClick={() => {
                        addFavMovie(chosenMovieImg);
                      }}
                    >
                      <span role="img" aria-label="stars">
                        ⭐ Add to Favorites ⭐
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <img
                src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg"
                alt="background"
              />
              <div className="movie-info">
                <h1>
                  <span role="img" aria-label="smiley-face">
                    Welcome to Watch-Me! 😁
                  </span>
                </h1>
                <h2>
                  Discover movies from different genres, get updated with the
                  latest releases, and search for your favorite movies!
                </h2>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Background;
