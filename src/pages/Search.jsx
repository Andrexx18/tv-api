import { useState } from "react";
import { searchShows } from "../services/api";
import ShowCard from "../components/ShowCard";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const shows = await searchShows(query);
    setResults(shows);
  };

  return (
    <div className="page">
      <h1>Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search shows..."
        />
        <button type="submit">Search</button>
      </form>

      <div className="grid">
        {results.map(show => <ShowCard key={show.id} show={show} />)}
      </div>
    </div>
  );
}

export default Search;
