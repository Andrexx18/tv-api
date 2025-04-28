import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchShowById } from '../services/api';

function Detail() {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetchShowById(id).then(data => setShow(data));
  }, [id]);

  function addToFavorites() {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.find(fav => fav.id === show.id)) {
      favorites.push(show);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert('Added to favorites!');
    } else {
      alert('Already in favorites.');
    }
  }

  if (!show) return <div>Loading...</div>;

  return (
    <div>
      <h1>{show.name}</h1>
      <img src={show.image?.original} alt={show.name} />
      <div dangerouslySetInnerHTML={{ __html: show.summary }} />
      <p>Language: {show.language}</p>
      <p>Genres: {show.genres.join(', ')}</p>
      <p>Premiered: {show.premiered}</p>
      <button onClick={addToFavorites}>Add to Favorites</button>
    </div>
  );
}

export default Detail;
