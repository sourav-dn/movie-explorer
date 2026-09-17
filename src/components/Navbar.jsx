import React, { useState } from 'react';
import { FilmIcon, SparklesIcon } from './Icons';

export default function Navbar({ currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">

          {/* Brand Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-3 group focus:outline-none text-left cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
              <FilmIcon className="w-5 h-5 text-slate-950 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                Movie<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-500">Explorer</span>
              </span>
              <span className="hidden sm:block text-[10px] tracking-wider uppercase text-slate-400 font-medium">
                Cinema & TV Discovery
              </span>
            </div>
          </button>
          <button
            id="nav-movies-link"
            onClick={() => onNavigate('movies')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${currentPage === 'movies'
              ? 'bg-slate-800/90 text-amber-400 shadow-inner'
              : 'text-slate-300 hover:text-white hover:bg-slate-900'
              }`}
          >
            Movies
          </button>
        </div>
      </div>
    </header>
  );
}
