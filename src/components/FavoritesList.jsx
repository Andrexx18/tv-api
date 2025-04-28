import { useFavorites } from "../contexts/FavoritesContext";
import ShowCard from "./ShowCard";

function FavoritesList() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <p>You have no favorite shows yet.</p>;
  }

  return (
    <div className="grid">
      {favorites.map((show) => (
        <ShowCard key={show.id} show={show} />
      ))}
    </div>
  );
}

export default FavoritesList;
