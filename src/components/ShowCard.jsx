import { useFavorites } from '../contexts/FavoritesContext';

function ShowCard({ show }) {
  const { addFavorite, removeFavorite, favorites } = useFavorites();
  const isFavorite = favorites.some(fav => fav.id === show.id);

  return (
    <div className="show-card">
      <img src={show.image?.medium} alt={show.name} />
      <h3>{show.name}</h3>
      <p>{show.genres.join(', ')}</p>
      {!isFavorite ? (
        <button onClick={() => addFavorite(show)}>Añadir ❤️</button>
      ) : (
        <button onClick={() => removeFavorite(show.id)}>Eliminar 🗑️</button>
      )}
    </div>
  );
}

export default ShowCard;
