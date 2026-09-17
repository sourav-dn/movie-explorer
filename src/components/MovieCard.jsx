import React, { useState } from 'react';
import { StarIcon, CalendarIcon, EyeIcon, FilmIcon } from './Icons';

export default function MovieCard({ movie, onSeeDetails }) {
  const [imageError, setImageError] = useState(false);
  const posterSrc = !imageError && movie.poster ? movie.poster : null;

  return (
    <article
      className="group relative flex flex-col bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 rounded-2xl overflow-hidden shadow-lg shadow-slate-950/50 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1.5"
    >
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-slate-950">
        {posterSrc ? (
          <img
            src={posterSrc}
            alt={movie.title}
            loading="lazy"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-b border-slate-800">
            <div className="w-16 h-16 rounded-2xl bg-slate-800/80 flex items-center justify-center text-amber-400 mb-3 shadow-inner">
              <FilmIcon className="w-8 h-8" />
            </div>
            <p className="text-sm font-semibold text-slate-300 line-clamp-2 px-2">
              {movie.title}
            </p>
            <span className="text-[11px] text-slate-500 mt-1 uppercase tracking-wider">No Poster Available</span>
          </div>
        )}
        {movie.genres && movie.genres.length > 0 && (
          <div className="absolute bottom-3 left-3 right-3 z-10 flex flex-wrap gap-1 pointer-events-none">
            {movie.genres.slice(0, 2).map((genre) => (
              <span
                key={genre}
                className="px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-sm border border-slate-700/60 text-[10px] font-medium text-slate-200"
              >
                {genre}
              </span>
            ))}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      </div>
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-3">
        <div>
          <h3
            title={movie.title}
            className="text-base sm:text-lg font-bold text-white tracking-tight line-clamp-1 group-hover:text-amber-300 transition-colors"
          >
            {movie.title}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-xs text-slate-400 font-medium flex-wrap">
            {/* ⭐ Rating */}
            <span className="inline-flex items-center gap-1 text-amber-400 font-semibold">
              <StarIcon className="w-3.5 h-3.5" filled />
              <span className="text-white">{movie.rating ? movie.rating : 'NR'}</span>
            </span>

            <span className="text-slate-600">•</span>

            {/* 📅 Year */}
            <span className="inline-flex items-center gap-1.5">
              <CalendarIcon className="w-3.5 h-3.5 text-slate-400" />
              <span>{movie.releaseYear}</span>
            </span>

            {movie.runtime && (
              <>
                <span className="text-slate-600">•</span>
                <span>{movie.runtime}m</span>
              </>
            )}
          </div>
        </div>
        {/* See Details Button */}
        <button
          id={`see-details-${movie.id}`}
          onClick={() => onSeeDetails(movie)}
          className="w-full mt-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-slate-800 hover:bg-amber-400 hover:text-slate-950 border border-slate-700/80 hover:border-amber-400 shadow-sm transition-all duration-200 active:scale-[0.98] cursor-pointer"
        >
          <EyeIcon className="w-4 h-4" />
          <span>See Details</span>
        </button>
      </div>
    </article>
  );
}
