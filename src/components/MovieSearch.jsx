import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovieDetails } from "../features/cinetrack/cineTrackSlice";

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
  const { tabs, activeTabIndex } = useSelector((state) => state.cinetrack);
  
  console.log("Redux State:", tabs, activeTabIndex);

  useEffect(() => {
    if (searchTerm.length < 3) return;

    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`);
        const data = await response.json();
        setSearchResults(data.Search || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [searchTerm]);

  const handleMovieClick = async (movie) => {
    const response = await fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`);
    const data = await response.json();
    dispatch(setMovieDetails(data));

    setSearchTerm("");
    setShowSuggestions(false);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="🔍 Search for a movie..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setShowSuggestions(true);
        }}
        onFocus={() => setShowSuggestions(true)}
        className="w-full p-3 text-lg text-white bg-gray-900 rounded-full border border-gray-700 
                   focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 
                   placeholder-gray-300 shadow-md"
      />

      {showSuggestions && searchResults.length > 0 && (
        <ul className="mt-4 space-y-3">
          {searchResults.map((movie) => (
            <li key={movie.imdbID} 
                className="p-3 bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-xl 
                           text-white shadow-lg hover:shadow-2xl transition-all duration-300
                           cursor-pointer transform hover:-translate-y-1 hover:scale-105"
                onClick={() => handleMovieClick(movie)}>
              🎬 {movie.Title} <span className="text-gray-400">({movie.Year})</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieSearch;
