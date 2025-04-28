import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Genres from './pages/Genres';
import Search from './pages/Search';
import List from './pages/List';
import More from './pages/More';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/search" element={<Search />} />
        <Route path="/list" element={<List />} />
        <Route path="/more" element={<More />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
