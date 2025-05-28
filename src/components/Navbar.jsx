import { useState, createContext, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const [localSearchTerm, setLocalSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(localSearchTerm);
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  const handleHomeClick = () => {
    setSearchQuery('');
    setLocalSearchTerm('');
    navigate('/');
  };

  return (
    <nav className="bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          onClick={handleHomeClick}
          className="flex items-center cursor-pointer"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            MovieHub
          </span>
        </button>
        <div className="flex md:order-2">
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative">
              <input
                type="text"
                className="block w-full p-2 pl-4 pr-10 text-sm text-white border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search movies..."
                value={localSearchTerm}
                onChange={(e) => setLocalSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 