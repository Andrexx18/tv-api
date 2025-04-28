import { useEffect, useState } from 'react';
import { fetchShows } from '../services/api';
import ShowCard from '../components/ShowCard';

function Search() {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchShows().then(setShows);
  }, []);

  const filteredShows = shows.filter(show =>
    show.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container">
      <h1>Buscar</h1>
      <input
        type="text"
        placeholder="Buscar show..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="shows-grid">
        {filteredShows.map(show => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
}

export default Search;
