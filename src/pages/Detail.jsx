import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchShowById } from '../services/api';
import { FavoritesContext } from '../context/FavoritesContext';

function Detail() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    fetchShowById(id).then(data => setShow(data));
  }, [id]);

  if (!show) return <p>Cargando...</p>;

  const isFavorite = favorites.some(fav => fav.id === show.id);

  return (
    <div className="detail-container">
      <h1>{show.name}</h1>
      <img src={show.image?.original} alt={show.name} />
      <div dangerouslySetInnerHTML={{ __html: show.summary }} />
      <button onClick={() => isFavorite ? removeFavorite(show.id) : addFavorite(show)}>
        {isFavorite ? 'Eliminar de Favoritos 🗑️' : 'Añadir a Favoritos ⭐'}
      </button>
    </div>
  );
}

export default Detail;
