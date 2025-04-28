import { useFavorites } from '../contexts/FavoritesContext';
import ShowCard from '../components/ShowCard';

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="page-container">
      <h1>Favoritos</h1>
      {favorites.length === 0 ? (
        <p>No tienes favoritos aún.</p>
      ) : (
        <div className="shows-grid">
          {favorites.map(show => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
