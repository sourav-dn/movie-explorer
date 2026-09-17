import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import MovieCard from '../components/MovieCard';
import { SparklesIcon, ArrowRightIcon, FilmIcon, StarIcon, SearchIcon } from '../components/Icons';
import { fetchShows } from '../services/api';

export default function HomePage({ onNavigate, onSelectMovie }) {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function loadFeatured() {
      try {
        setLoading(true);
        const shows = await fetchShows(0);
        if (isMounted) {
          // Sort by highest rating and take top 8 for featured section
          const sorted = [...shows]
            .filter(show => show.rating && show.poster)
            .sort((a, b) => Number(b.rating) - Number(a.rating))
            .slice(0, 8);
          setFeaturedMovies(sorted);
        }
      } catch (err) {
        console.error('Failed to load featured movies:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    loadFeatured();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="flex-1 flex flex-col">
      {/* 1. Hero Banner */}
      <Hero onExploreClick={() => onNavigate('movies')} />

      {/* 2. Top Rated / Featured Showcase */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Top Rated Shows & Movies
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Hand-picked community top performers with stellar ratings.
            </p>
          </div>

          <button
            id="home-view-all-btn"
            onClick={() => onNavigate('movies')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 group cursor-pointer"
          >
            <span>View All Shows</span>
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Featured Movies Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-4 aspect-[2/3] animate-pulse flex flex-col justify-end gap-3"
              >
                <div className="h-4 bg-slate-800 rounded w-3/4" />
                <div className="h-3 bg-slate-800 rounded w-1/2" />
                <div className="h-9 bg-slate-800 rounded-xl mt-2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onSeeDetails={onSelectMovie}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
