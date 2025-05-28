const MovieCard = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image+Available';

  return (
    <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
      <img
        className="rounded-t-lg w-full h-[400px] object-cover"
        src={posterUrl}
        alt={movie.title}
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {movie.title}
        </h5>
        <p className="mb-3 font-normal text-gray-400">
          {movie.overview.length > 150
            ? `${movie.overview.substring(0, 150)}...`
            : movie.overview}
        </p>
        <div className="flex justify-between items-center">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            {movie.release_date?.split('-')[0]}
          </span>
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
            ★ {movie.vote_average?.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard; 