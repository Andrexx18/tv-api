import { useEffect, useState } from 'react';
import { fetchShows } from '../services/api';
import { Link } from 'react-router-dom';

function Home() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchShows().then(data => setShows(data));
  }, []);

  return (
    <div>
      <h1>TV Shows</h1>
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
