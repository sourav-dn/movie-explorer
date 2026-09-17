import React, { useState, useEffect, useMemo, useCallback } from 'react';
import MovieCard from '../components/MovieCard';
import { SearchIcon, XMarkIcon, RefreshIcon, StarIcon, FilterIcon } from '../components/Icons';
import { fetchShows, searchShows } from '../services/api';

const POPULAR_GENRES = [
  'All',
  'Drama',
  'Action',
  'Comedy',
  'Science-Fiction',
  'Thriller',
  'Crime',
  'Adventure',
  'Horror',
  'Romance',
  'Animation'
];

export default function MovieListingPage({ onSelectMovie }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortBy, setSortBy] = useState('rating-desc');
  const [currentPage, setCurrentPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);

  // Initial load of shows
  const loadShows = useCallback(async (page = 0, append = false) => {
    try {
      if (append) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }
      setError(null);
      const shows = await fetchShows(page);
      if (shows.length === 0) {
        setHasMore(false);
      } else {
        setMovies((prev) => (append ? [...prev, ...shows] : shows));
      }
    } catch (err) {
      console.error('Error fetching shows:', err);
      setError('Failed to load movies. Please check your network connection and try again.');
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, []);

  const performSearch = useCallback(async (query) => {
    if (!query.trim()) {
      loadShows(0, false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const results = await searchShows(query);
      setMovies(results);
      setHasMore(false); // Search returns full match set
    } catch (err) {
      console.error('Search error:', err);
      setError('Search failed. Please try a different query.');
    } finally {
      setLoading(false);
    }
  }, [loadShows]);


  useEffect(() => {
    loadShows(0, false);
  }, [loadShows]);

  
  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchQuery.trim()) {
        performSearch(searchQuery);
      } else if (searchQuery === '') {
        loadShows(0, false);
      }
    }, 450);

    return () => clearTimeout(handler);
  }, [searchQuery, performSearch, loadShows]);

  // Handle Search Input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  // Load next page for pagination
  const handleLoadMore = () => {
    if (!loadingMore && hasMore && !searchQuery.trim()) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      loadShows(nextPage, true);
    }
  };


  const filteredAndSortedMovies = useMemo(() => {
    let result = [...movies];

    // Filter by genre
    if (selectedGenre !== 'All') {
      result = result.filter(
        (m) => m.genres && m.genres.some((g) => g.toLowerCase() === selectedGenre.toLowerCase())
      );
    }

    // Sort
    result.sort((a, b) => {
      if (sortBy === 'rating-desc') {
        const ratingA = a.rating ? parseFloat(a.rating) : 0;
        const ratingB = b.rating ? parseFloat(b.rating) : 0;
        return ratingB - ratingA;
      }
      if (sortBy === 'year-desc') {
        const yearA = parseInt(a.releaseYear, 10) || 0;
        const yearB = parseInt(b.releaseYear, 10) || 0;
        return yearB - yearA;
      }
      if (sortBy === 'title-asc') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

    return result;
  }, [movies, selectedGenre, sortBy]);

  return (
    <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
      
      {/* Page Title & Search Bar Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Explore All Movies & Shows
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl">
          Search by movie title or filter by your favorite genre to discover acclaimed cinema.
        </p>

        {/* Search Bar Input */}
        <div className="w-full mt-8 relative">
          <div className="relative flex items-center">
            <div className="absolute left-4.5 pointer-events-none text-slate-400">
              <SearchIcon className="w-5 h-5" />
            </div>
            <input
              id="movie-search-input"
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="🔍 Search for a movie or TV show (e.g. Batman, Friends, Girls)..."
              className="w-full pl-12 pr-12 py-4 rounded-2xl bg-slate-900 border border-slate-700/80 focus:border-amber-400 focus:ring-4 focus:ring-amber-500/15 text-white placeholder-slate-400 text-base sm:text-lg shadow-xl shadow-slate-950/60 transition-all outline-none"
            />
            {searchQuery && (
              <button
                id="search-clear-btn"
                onClick={handleClearSearch}
                aria-label="Clear search"
                className="absolute right-4 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="mt-2 text-xs text-left text-amber-400 font-medium px-2">
              Showing search results for: <span className="text-white font-bold">"{searchQuery}"</span>
            </p>
          )}
        </div>
      </div>

      
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800">
        <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
          {POPULAR_GENRES.map((genre) => (
            <button
              key={genre}
              id={`filter-genre-${genre.toLowerCase()}`}
              onClick={() => setSelectedGenre(genre)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedGenre === genre
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow-md shadow-amber-400/20'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
          <label htmlFor="movie-sort-select" className="text-xs text-slate-400 font-medium">
            Sort by:
          </label>
          <select
            id="movie-sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-1.5 text-xs sm:text-sm text-slate-200 focus:border-amber-400 focus:outline-none cursor-pointer"
          >
            <option value="rating-desc">⭐ Highest Rating</option>
            <option value="year-desc">📅 Newest Release</option>
            <option value="title-asc">🔤 Title (A - Z)</option>
          </select>
        </div>
      </div>

      {/* Error Banner */}
      {error && (
        <div className="mb-8 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 flex items-center justify-between">
          <p className="text-sm font-medium">{error}</p>
          <button
            onClick={() => loadShows(0, false)}
            className="px-3 py-1 bg-rose-500/20 hover:bg-rose-500/30 rounded-lg text-xs font-semibold"
          >
            Retry
          </button>
        </div>
      )}

      {/* Movies Grid / Content */}
      {loading ? (
        /* Loading Skeletons */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i} 
              className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-lg animate-pulse"
            >
              <div className="aspect-[2/3] bg-slate-800/80" />
              <div className="p-5 space-y-3">
                <div className="h-5 bg-slate-800 rounded w-3/4" />
                <div className="h-3.5 bg-slate-800 rounded w-1/2" />
                <div className="h-10 bg-slate-800 rounded-xl mt-4" />
              </div>
            </div>
          ))}
        </div>
      ) : filteredAndSortedMovies.length > 0 ? (
        /* Responsive Movie Cards Grid */
        <div>
          <div className="mb-4 text-xs font-medium text-slate-400">
            Showing <span className="text-white font-semibold">{filteredAndSortedMovies.length}</span> titles
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredAndSortedMovies.map((movie) => (
              <MovieCard 
                key={movie.id} 
                movie={movie} 
                onSeeDetails={onSelectMovie} 
              />
            ))}
          </div>

          {/* Load More Button (only shown when browsing full catalog without search) */}
          {!searchQuery.trim() && hasMore && (
            <div className="mt-14 text-center">
              <button
                id="load-more-btn"
                onClick={handleLoadMore}
                disabled={loadingMore}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-amber-400/50 shadow-md transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer"
              >
                {loadingMore ? (
                  <>
                    <RefreshIcon className="w-4 h-4 animate-spin text-amber-400" />
                    <span>Loading more shows...</span>
                  </>
                ) : (
                  <span>Load More Shows</span>
                )}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-20 px-4 bg-slate-900/40 rounded-3xl border border-slate-800 my-8">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-amber-400 mb-4">
            <SearchIcon className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">No movies or shows found</h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto mb-6">
            {searchQuery
              ? `We couldn't find any results matching "${searchQuery}". Try checking the spelling or search for another title.`
              : `No titles found matching the "${selectedGenre}" genre.`}
          </p>
          <button
            id="empty-state-reset-btn"
            onClick={() => {
              setSearchQuery('');
              setSelectedGenre('All');
            }}
            className="px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

    </div>
  );
}
