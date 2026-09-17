# 🎬 MovieExplorer

> **Discover and explore thousands of movies and TV shows with real-time search, curated ratings, and rich interactive detail views.**

Live Demo: _[Add your deployment link here e.g. Vercel/Netlify]_

---

## 📋 Features

- 🏠 **Home Page** — Cinematic Hero banner, top-rated showcase, and feature highlights
- 🔍 **Live Search** — Debounced search using TVMaze `/search/shows?q=:query` endpoint
- 🎬 **Movie Listing** — Responsive 4-column grid (`GET /shows`) with genre filters and sort options
- ⭐ **Movie Cards** — Poster, title, rating (`⭐ 8.5`), release year (`📅 2024`), and "See Details" button
- 🪟 **Movie Details Modal** — Backdrop image, full overview, rating, premiered date, runtime, language, genres, network, and official site link
- ❌ **Modal Interactions** — Close via ✕ button, ESC key, or clicking the backdrop overlay
- 📱 **Fully Responsive** — Mobile single-column to 4-column desktop layout

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Icons | Custom inline SVG components (no external icon library) |
| Data API | [TVMaze API](https://www.tvmaze.com/api) (free, no key required) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Installation & Development

```bash
# Clone the repo
git clone https://github.com/your-username/movie-explorer.git
cd movie-explorer

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

---

## 🌐 API Endpoints Used

| Endpoint | Purpose |
|---|---|
| `GET https://api.tvmaze.com/shows` | Browse all shows (paginated) |
| `GET https://api.tvmaze.com/search/shows?q=:query` | Search shows by title |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Icons.jsx        # Reusable inline SVG icons
│   ├── Navbar.jsx       # Sticky header with brand logo & navigation
│   ├── Hero.jsx         # Hero banner with CTA
│   ├── MovieCard.jsx    # Individual movie card component
│   ├── MovieModal.jsx   # Movie details modal overlay
│   └── Footer.jsx       # Footer with copyright & social links
├── pages/
│   ├── HomePage.jsx     # Landing page with featured movies
│   └── MovieListingPage.jsx  # Full browsing + search page
├── services/
│   └── api.js           # TVMaze API calls & data normalizer
├── App.jsx              # Root app with routing & modal state
└── index.css            # Tailwind CSS import & base styles
```

---

