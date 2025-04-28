import { useEffect, useState } from 'react';
import { fetchShows } from '../services/api';
import { Link } from 'react-router-dom';

function Home() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchShows().then(data => setShows(data));
  }, []);

  return (
    <div className="container">
      {shows.map(show => (
        <div key={show.show.id} className="card">
          <Link to={`/show/${show.show.id}`}>
            <img src={show.show.image?.medium} alt={show.show.name} />
            <p>{show.show.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
