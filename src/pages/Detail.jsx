import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchShowById } from '../services/api';
import { FavoritesContext } from '../context/FavoritesContext';

function Detail() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const { addFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    fetchShowById(id).then(data => setShow(data));
  }, [id]);

  if (!show) return <div>Loading...</div>;

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{show.name}</h1>
      <img src={show.image?.original} alt={show.name} />
      <div dangerouslySetInnerHTML={{ __html: show.summary }} />
      <p>Language: {show.language}</p>
      <p>Genres: {show.genres.join(', ')}</p>
      <p>Premiered: {show.premiered}</p>
      <button className="button" onClick={() => addFavorite(show)}>Add to Favorites</button>
    </div>
  );
}

export default Detail;
