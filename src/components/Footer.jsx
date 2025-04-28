import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <Link to="/">🏠 Home</Link>
      <Link to="/search">🔍 Buscar</Link>
      <Link to="/genres">🎭 Géneros</Link>
      <Link to="/favorites">⭐ Favoritos</Link>
      <Link to="/mylist">📄 Mi Lista</Link>
      <Link to="/profile">👤 Perfil</Link>
    </footer>
  );
}

export default Footer;
