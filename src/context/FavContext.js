import { createContext, useState } from 'react';

// creating the context
export const FavContext = createContext();

export const FavProvider = ({children}) => {

    const [favorites, setFavorites] = useState([]);

    const addFavMovie = (movie, liked) => {
        if(liked === false){
            if(favorites.find((item) => (item.title === movie.title))){
                alert(`You have already added this movie to your favorites!`);
            }else{
                const newFavList = [...favorites, movie];
                setFavorites(newFavList);
            }
        }
    }

    const removeFromFav = (movie) => {
        const newFavList = favorites.filter((favItem) => (favItem.id !== movie.id));
        setFavorites(newFavList);
        alert(`The movie "${movie.title}" has been removed successfully from your favorites!`);
    }

    return(
        <FavContext.Provider value={{addFavMovie, removeFromFav, favorites}}> 
            {children}
        </FavContext.Provider>
    )
}
