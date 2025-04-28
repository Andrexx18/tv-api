import { useEffect, useState } from "react";
import { fetchGenres } from "../services/api";

function Genres() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchGenres().then(setGenres);
  }, []);

  return (
    <div className="page">
      <h1>Genres</h1>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Genres;
