import { useFavorites } from "../contexts/FavoritesContext";

function ShowCard({ show }) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.some(fav => fav.id === show.id);

  return (
    <div className="show-card">
      <img src={show.image?.medium} alt={show.name} />
      <h3>{show.name}</h3>
      <button onClick={() => (isFavorite ? removeFavorite(show.id) : addFavorite(show))}>
        {isFavorite ? "🗑️ Remove" : "⭐ Favorite"}
      </button>
    </div>
  );
}

export default ShowCard;
