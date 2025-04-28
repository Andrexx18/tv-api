import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Genres from "./pages/Genres.jsx";
import List from "./pages/List.jsx";
import Favorites from "./pages/Favorites.jsx";
import Search from "./pages/Search.jsx";
import More from "./pages/More.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/list" element={<List />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search" element={<Search />} />
        <Route path="/more" element={<More />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
