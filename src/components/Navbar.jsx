import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/genres">Genres</NavLink>
      <NavLink to="/list">List</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/more">More</NavLink>
    </nav>
  );
}

export default Navbar;
