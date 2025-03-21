import { useSelector } from "react-redux";

const MovieDetails = () => {
  const { tabs, activeTabIndex } = useSelector((state) => state.cinetrack);
  const activeMovie = tabs[activeTabIndex]?.movie;
  
  if (!activeMovie) return (
    <p className="text-center text-gray-400 text-lg mt-6">
      🎬 Select a movie to see details.
    </p>
  );

  return (
    <div className="p-6 border rounded-lg shadow-lg bg-gray-900 text-white w-3/4 mx-auto mt-4">
      <h2 className="text-3xl font-bold text-center">{activeMovie.Title} ({activeMovie.Year})</h2>
      <div className="flex justify-center">
        <img src={activeMovie.Poster} alt={activeMovie.Title} className="w-64 h-auto mt-4 rounded-lg shadow-md" />
      </div>
      <div className="mt-4 text-lg">
        <p><strong>🎬 Genre:</strong> {activeMovie.Genre}</p>
        <p><strong>🎥 Director:</strong> {activeMovie.Director}</p>
        <p><strong>⭐ Actors:</strong> {activeMovie.Actors}</p>
        <p><strong>📖 Plot:</strong> {activeMovie.Plot}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
