import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import { Link } from 'react-router-dom';

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h1>Mis Favoritos</h1>
      <div className="container">
        {favorites.map((show) => (
          <div key={show.id} className="card">
            <Link to={`/show/${show.id}`}>
              <img src={show.image?.medium} alt={show.name} />
              <p>{show.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
