import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar, { SearchProvider } from './components/Navbar';
import MovieDetails from './components/MovieDetails';
import HomePage from './components/HomePage';
import { getPopularMovies, searchMovies } from './services/movieApi';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchMovies = async (pageNum = 1, query = '') => {
    try {
      setLoading(true);
      const data = query
        ? await searchMovies(query, pageNum)
        : await getPopularMovies(pageNum);
      setMovies(prevMovies => pageNum === 1 ? data.results : [...prevMovies, ...data.results]);
      setError(null);
    } catch (err) {
      setError('Failed to fetch movies. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setPage(1);
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchMovies(nextPage, searchQuery);
  };

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