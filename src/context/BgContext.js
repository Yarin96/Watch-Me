import { createContext, useState } from 'react';

// creating the context
export const BgContext = createContext();

export const BgProvider = ({children}) => {
    
    const [chosenMovieImg, setChosenMovieImg] = useState([]);

    const shortenString = (string, num) => {
        if(string?.length > num){
            return string.slice(0, num) + '...';
        }else{
            return string;
        }
    }

    const changeBackground = (movie) => {
        setChosenMovieImg(movie);
    }

    return(
        <BgContext.Provider value={{chosenMovieImg, shortenString, changeBackground}}> 
            {children}
        </BgContext.Provider>
    );
}