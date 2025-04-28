import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '10px', backgroundColor: '#eee' }}>
      <Link to="/">Home</Link>
      <Link to="/genre/drama">Drama</Link>
      <Link to="/genre/comedy">Comedy</Link>
      <Link to="/genre/action">Action</Link>
      <Link to="/genre/scifi">Sci-Fi</Link>
      <Link to="/favorites">Favorites</Link>
    </nav>
  );
}

export default Navbar;
