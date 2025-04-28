function GenreFilter({ genres, selectedGenre, setSelectedGenre }) {
    return (
      <select className="filter" value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value="">Todos los géneros</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
    );
  }
  
  export default GenreFilter;
  