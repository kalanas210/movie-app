import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { SearchProvider } from './context/SearchContext';
import MovieDetails from './pages/MovieDetails';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <SearchProvider>
        <div className="min-h-screen bg-gray-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </div>
      </SearchProvider>
    </Router>
  );
}

export default App;