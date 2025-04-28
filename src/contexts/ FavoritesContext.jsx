import { createContext, useState, useContext } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (show) => {
    if (!favorites.some(fav => fav.id === show.id)) {
      setFavorites([...favorites, show]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(show => show.id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
