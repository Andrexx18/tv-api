import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchShowById } from '../services/api';

function Detail() {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetchShowById(id).then(data => setShow(data));
  }, [id]);

  if (!show) return <div>Loading...</div>;

  return (
    <div>
      <h1>{show.name}</h1>
      <img src={show.image?.original} alt={show.name} />
      <div dangerouslySetInnerHTML={{ __html: show.summary }} />
      <p>Language: {show.language}</p>
      <p>Genres: {show.genres.join(', ')}</p>
      <p>Premiered: {show.premiered}</p>
    </div>
  );
}

export default Detail;
