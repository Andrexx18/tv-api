import { useFavorites } from "../contexts/FavoritesContext";
import ShowCard from "../components/ShowCard";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="page">
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="grid">
          {favorites.map(show => <ShowCard key={show.id} show={show} />)}
        </div>
      )}
    </div>
  );
}

export default Favorites;
