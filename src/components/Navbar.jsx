import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/favorites">Favoritos</NavLink>
      <NavLink to="/genres">Géneros</NavLink>
      <NavLink to="/search">Buscar</NavLink>
      <NavLink to="/list">Lista</NavLink>
      <NavLink to="/more">Más</NavLink>
    </nav>
  );
}

export default Navbar;
