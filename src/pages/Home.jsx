import { useEffect, useState } from 'react';
import { fetchShows } from '../services/api';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import GenreFilter from '../components/GenreFilter';
import FavoritesProgress from '../components/FavoritesProgress';

function Home() {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    fetchShows().then(data => setShows(data));
  }, []);

  const genres = [...new Set(shows.flatMap(show => show.show.genres))];

  const filteredShows = shows.filter(({ show }) => {
    const matchesSearch = show.name.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = selectedGenre ? show.genres.includes(selectedGenre) : true;
    return matchesSearch && matchesGenre;
  });

  return (
    <div>
      <FavoritesProgress />
      <SearchBar search={search} setSearch={setSearch} />
      <GenreFilter genres={genres} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
      <div className="container">
        {filteredShows.map(({ show }) => (
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

export default Home;
