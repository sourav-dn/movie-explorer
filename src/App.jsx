import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MovieListingPage from './pages/MovieListingPage';
import MovieModal from './components/MovieModal';
import './App.css';

export default function App() {
  // Sync page with URL hash (#home or #movies) for easy browser back/forward and deep linking
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return hash === 'movies' ? 'movies' : 'home';
  });

  const [selectedMovie, setSelectedMovie] = useState(null);

  // Listen to hash changes (back/forward button)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setCurrentPage(hash === 'movies' ? 'movies' : 'home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when navigating
  const navigateTo = (page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* 1. Header / Navbar */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* 2. Main Page Content */}
      <main className="flex-1 flex flex-col">
        {currentPage === 'home' ? (
          <HomePage 
            onNavigate={navigateTo} 
            onSelectMovie={(movie) => setSelectedMovie(movie)} 
          />
        ) : (
          <MovieListingPage 
            onSelectMovie={(movie) => setSelectedMovie(movie)} 
          />
        )}
      </main>

      {/* 3. Footer */}
      <Footer onNavigate={navigateTo} />

      {/* 4. Movie Details Modal (active when a movie is selected) */}
      {selectedMovie && (
        <MovieModal 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}
    </div>
  );
}
