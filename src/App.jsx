import MovieSearch from "./components/MovieSearch";
import MovieDetails from "./components/MovieDetails";
import Tabs from "./components/Tabs";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <h1 className="text-4xl font-extrabold text-center text-white drop-shadow-lg mb-6">
        🎬 CineTrack
      </h1>

      <Tabs />  
      <MovieSearch />
      <MovieDetails />

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;
