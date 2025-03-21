const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 text-center border-t border-gray-800">
            <h2 className="text-3xl font-extrabold text-blue-400 drop-shadow-lg animate-glow">
                🎬 CineTrack
            </h2>

            <p className="text-sm text-gray-300 mt-2 max-w-2xl mx-auto leading-relaxed">
                CineTrack is your ultimate movie companion, allowing you to search, track, 
                and explore movie details seamlessly. With a dynamic multi-tab feature, 
                you can compare different movies, save your searches, and enhance your 
                movie discovery experience.
            </p>

            <div className="flex justify-center space-x-6 mt-5">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-2xl">
                    <i className="fab fa-twitter">
                        <span>GitHub</span>
                    </i>
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-all duration-300 text-2xl">
                    <i className="fas fa-envelope">
                        <span>LinkedIn</span>
                    </i>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-all duration-300 text-2xl">
                    <i className="fab fa-linkedin">
                        <span>Twitter</span>
                    </i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-2xl">
                    <i className="fab fa-github">
                        <span>G-Mail</span>
                    </i>
                </a>
            </div>

            <p className="text-xs text-gray-500 mt-4">
                © {new Date().getFullYear()} CineTrack. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;