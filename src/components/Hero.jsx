import React from 'react';
import { ArrowRightIcon, SparklesIcon, FilmIcon, StarIcon } from './Icons';

export default function Hero({ onExploreClick }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600&auto=format&fit=crop&q=60"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-10 scale-105"
        />
        {/* Dark overlay so text remains readable */}
        <div className="absolute inset-0 bg-slate-950/70" />
        {/* Gradient glows on top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-amber-500/15 via-rose-500/10 to-transparent blur-3xl opacity-70" />
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-indigo-600/10 blur-[100px] rounded-full" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-amber-600/10 blur-[90px] rounded-full" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]">
          DISCOVER YOUR NEXT <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-rose-400">
            CINEMATIC OBSESSION
          </span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Explore and discover your favorite movies and shows from around the world.
          Search thousands of titles, check real-time ratings, and dive into full plot overviews.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="hero-explore-btn"
            onClick={onExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            <span>Explore Now</span>
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Highlights / Stats */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">50,000+</span>
            <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Shows & Movies</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Top Rated</span>
              <StarIcon className="w-5 h-5 text-amber-400" filled />
            </div>
            <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Community Scores</span>
          </div>
          <div className="flex flex-col items-center col-span-2 sm:col-span-1">
            <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Instant</span>
            <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Interactive Details</span>
          </div>
        </div>

      </div>
    </section>
  );
}
