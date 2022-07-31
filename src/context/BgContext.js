import React from "react";
import { createContext, useState } from "react";

// creating the context of Background component
export const BgContext = createContext();

export const BgProvider = ({ children }) => {
  const [chosenMovieImg, setChosenMovieImg] = useState([]);

  const shortenString = (string, num) => {
    if (string.length > num) {
      return string.slice(0, num) + "...";
    } else {
      return string;
    }
  };

  const changeBackground = (movie) => {
    setChosenMovieImg(movie);
  };

  // Verify if the current videos fetched contain the 'key' property,
  // and return relevant YouTube URL Trailer into the Popup component.
  const Trailer = (videos) => {
    if (Array.isArray(videos.videosToShow.results)) {
      const firstVideoTrailer = videos.videosToShow.results.find(
        (videoObject) => videoObject.type === "Trailer"
      );
      if (firstVideoTrailer !== undefined) {
        if ("key" in firstVideoTrailer === true) {
          return (
            <iframe
              title="youtube"
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${firstVideoTrailer.key}`}
              allowFullScreen
            ></iframe>
          );
        }
      }
    }
    return <h3 className="popup-text">No Trailer Available.</h3>;
  };

  return (
    <BgContext.Provider
      value={{
        chosenMovieImg,
        shortenString,
        changeBackground,
        Trailer
      }}
    >
      {children}
    </BgContext.Provider>
  );
};
