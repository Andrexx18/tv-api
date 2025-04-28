import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';

function Favorites() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <div>
      <h1>My Favorite Shows</h1>
      <div className="container">
        {favorites.length > 0 ? (
          favorites.map(show => (
            <div key={show.id} className="card">
              <Link to={`/show/${show.id}`}>
                <img src={show.image?.medium} alt={show.name} />
                <p>{show.name}</p>
              </Link>
              <button className="button" style={{ background: 'red' }} onClick={() => removeFavorite(show.id)}>
                Remove 🗑️
              </button>
            </div>
          ))
        ) : (
          <p>No favorites yet.</p>
        )}
      </div>
    </div>
  );
}

export default Favorites;
