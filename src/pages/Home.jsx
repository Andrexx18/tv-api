import { useEffect, useState } from 'react';
import { fetchShows } from '../services/api';
import { Link, useParams } from 'react-router-dom';

function Home() {
  const { genre } = useParams();
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchShows().then(data => {
      if (genre) {
        const filtered = data.filter(show => show.genres.map(g => g.toLowerCase()).includes(genre.toLowerCase()));
        setShows(filtered);
      } else {
        setShows(data);
      }
    });
  }, [genre]);

  return (
    <div>
      <h1>{genre ? `${genre} Shows` : 'All TV Shows'}</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {shows.map(show => (
          <div key={show.id} style={{ margin: '10px' }}>
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
