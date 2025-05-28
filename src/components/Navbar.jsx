import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <nav className="bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">MovieHub</span>
        </a>
        <div className="flex md:order-2">
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative">
              <input
                type="text"
                className="block w-full p-2 pl-4 pr-10 text-sm text-white border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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