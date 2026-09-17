import React, { useEffect } from 'react';
import {
  XMarkIcon,
  StarIcon,
  CalendarIcon,
  ClockIcon,
  GlobeIcon,
  TagIcon,
  ExternalLinkIcon,
  FilmIcon
} from './Icons';

export default function MovieModal({ movie, onClose }) {
  useEffect(() => {
    if (!movie) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [movie, onClose]);

  if (!movie) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-movie-title"
    >
      <div
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/80 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="modal-close-icon-btn"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-slate-300 hover:text-white hover:bg-slate-800 flex items-center justify-center transition-colors shadow-lg cursor-pointer"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
        <div className="relative h-56 sm:h-72 w-full bg-slate-950 shrink-0 overflow-hidden">
          {movie.backdrop ? (
            <img
              src={movie.backdrop}
              alt={movie.title}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-slate-500">
              <FilmIcon className="w-16 h-16 mb-2 text-amber-500/50" />
              <span className="text-sm font-medium">No Backdrop Image Available</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
          <div className="absolute bottom-4 left-4 sm:left-6 right-4 sm:right-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {movie.rating ? (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-bold shadow-md">
                  <StarIcon className="w-3.5 h-3.5" filled />
                  <span>{movie.rating} / 10</span>
                </div>
              ) : (
                <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium">
                  Not Rated
                </div>
              )}

              {movie.status && (
                <span className="px-2.5 py-1 rounded-full bg-slate-950/80 border border-slate-700 text-slate-300 text-xs font-medium">
                  {movie.status}
                </span>
              )}
            </div>
            <h2
              id="modal-movie-title"
              className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-md"
            >
              {movie.title}
            </h2>
          </div>
        </div>

        {/* Modal Scrollable Content Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6">

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                <CalendarIcon className="w-3.5 h-3.5 text-amber-400" />
                Premiered
              </span>
              <span className="text-sm font-semibold text-white mt-1">
                {movie.premiered || movie.releaseYear || 'N/A'}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                <ClockIcon className="w-3.5 h-3.5 text-amber-400" />
                Runtime
              </span>
              <span className="text-sm font-semibold text-white mt-1">
                {movie.runtime ? `${movie.runtime} min` : 'N/A'}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                <GlobeIcon className="w-3.5 h-3.5 text-amber-400" />
                Language
              </span>
              <span className="text-sm font-semibold text-white mt-1">
                {movie.language || 'English'}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                <FilmIcon className="w-3.5 h-3.5 text-amber-400" />
                Network
              </span>
              <span className="text-sm font-semibold text-white mt-1 truncate" title={movie.network || 'N/A'}>
                {movie.network || 'N/A'}
              </span>
            </div>
          </div>

          {/* Genres */}
          {movie.genres && movie.genres.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2 flex items-center gap-1.5">
                <TagIcon className="w-3.5 h-3.5 text-amber-400" />
                Genres
              </h4>
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre}
                    className="px-3 py-1 rounded-lg bg-slate-800 text-amber-300 text-xs font-semibold border border-slate-700"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          )}
          {/* Overview / Summary */}
          <div>
            <h4 className="text-base font-bold text-white mb-2">Overview</h4>
            <div
              className="text-sm sm:text-base text-slate-300 leading-relaxed space-y-3"
            >
              {movie.cleanSummary ? (
                <p>{movie.cleanSummary}</p>
              ) : (
                <p className="text-slate-400 italic">No summary description provided for this title.</p>
              )}
            </div>
          </div>
        </div>
        <div className="p-4 sm:p-5 border-t border-slate-800/80 bg-slate-950/60 flex items-center justify-end gap-3">
          <button
            id="modal-close-bottom-btn"
            onClick={onClose}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors cursor-pointer"
          >
            <XMarkIcon className="w-4 h-4" />
            <span>Close</span>
          </button>
        </div>

      </div>
    </div>
  );
}
