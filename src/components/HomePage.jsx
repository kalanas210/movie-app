import { useState, useEffect, useContext } from 'react';
import MovieCard from './MovieCard';
import { getPopularMovies, searchMovies } from '../services/movieApi';
import { SearchContext } from './Navbar';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const { searchQuery } = useContext(SearchContext);

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

  useEffect(() => {
    setPage(1);
    fetchMovies(1, searchQuery);
  }, [searchQuery]);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchMovies(nextPage, searchQuery);
  };

  return (
    <div className="container mx-auto px-4 pt-20">
      {searchQuery && (
        <h2 className="text-white text-2xl mb-6">
          Search results for: {searchQuery}
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      
      {error && (
        <div className="text-red-500 text-center my-4">{error}</div>
      )}
      
      {loading ? (
        <div className="text-white text-center my-4">Loading...</div>
      ) : movies.length > 0 ? (
        <div className="flex justify-center my-8">
          <button
            onClick={loadMore}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Load More
          </button>
        </div>
      ) : (
        <div className="text-white text-center my-4">No movies found</div>
      )}
    </div>
  );
};

export default HomePage; 