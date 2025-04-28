import { useEffect, useState } from 'react';
import { fetchShows } from '../services/api';
import ShowCard from '../components/ShowCard';

function Genres() {
  const [shows, setShows] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    fetchShows().then(setShows);
  }, []);

  const allGenres = [...new Set(shows.flatMap(show => show.genres))];

  const filteredShows = selectedGenre
    ? shows.filter(show => show.genres.includes(selectedGenre))
    : shows;

  return (
    <div className="page-container">
      <h1>Géneros</h1>
      <select onChange={e => setSelectedGenre(e.target.value)}>
        <option value="">Todos</option>
        {allGenres.map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>

      <div className="shows-grid">
        {filteredShows.map(show => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
}

export default Genres;
