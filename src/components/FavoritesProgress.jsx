import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';

function FavoritesProgress() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="progress-bar">
      Favoritos: {favorites.length} ⭐
    </div>
  );
}

export default FavoritesProgress;
