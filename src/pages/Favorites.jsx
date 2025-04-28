import { Link } from 'react-router-dom';

function Favorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  return (
    <div>
      <h1>My Favorite Shows</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {favorites.length > 0 ? (
          favorites.map(show => (
            <div key={show.id} style={{ margin: '10px' }}>
              <Link to={`/show/${show.id}`}>
                <img src={show.image?.medium} alt={show.name} />
                <p>{show.name}</p>
              </Link>
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
