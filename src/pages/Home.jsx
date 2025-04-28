import { useEffect, useState } from 'react';
import { fetchShows } from '../services/api';
import ShowCard from '../components/ShowCard';

function Home() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchShows().then(setShows);
  }, []);

  return (
    <div className="page-container">
      <h1>Home</h1>
      <div className="shows-grid">
        {shows.map(show => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
}

export default Home;
