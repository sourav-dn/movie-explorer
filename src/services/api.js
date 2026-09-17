const BASE_URL = 'https://api.tvmaze.com';

/**
 * Normalizes a show object to a unified schema whether it comes from
 * /shows (raw show) or /search/shows (wrapped in { score, show }).
 */
export function normalizeShow(item) {
  const show = item.show || item;
  
  return {
    id: show.id,
    name: show.name || 'Untitled',
    title: show.name || 'Untitled',
    genres: Array.isArray(show.genres) ? show.genres : [],
    rating: show.rating?.average ? Number(show.rating.average).toFixed(1) : null,
    premiered: show.premiered || null,
    releaseYear: show.premiered ? show.premiered.slice(0, 4) : 'N/A',
    image: show.image?.original || show.image?.medium || null,
    poster: show.image?.medium || show.image?.original || null,
    backdrop: show.image?.original || show.image?.medium || null,
    summary: show.summary || '',
    cleanSummary: show.summary ? show.summary.replace(/<[^>]+>/g, '').trim() : 'No summary available.',
    status: show.status || 'Unknown',
    runtime: show.averageRuntime || show.runtime || null,
    language: show.language || 'English',
    network: show.network?.name || show.webChannel?.name || null,
    officialSite: show.officialSite || show.url || null,
    type: show.type || 'Scripted'
  };
}

/**
 * Fetches shows from TVMaze
 */
export async function fetchShows(page = 0) {
  try {
    const response = await fetch(`${BASE_URL}/shows?page=${page}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch shows: ${response.status}`);
    }
    const data = await response.json();
    return data.map(normalizeShow);
  } catch (error) {
    console.error('Error in fetchShows:', error);
    throw error;
  }
}

/**
 * Searches shows by title/query from TVMaze
 */
export async function searchShows(query) {
  if (!query || !query.trim()) {
    return [];
  }

  try {
    const response = await fetch(`${BASE_URL}/search/shows?q=${encodeURIComponent(query.trim())}`);
    if (!response.ok) {
      throw new Error(`Failed to search shows: ${response.status}`);
    }
    const data = await response.json();
    return data.map(normalizeShow);
  } catch (error) {
    console.error('Error in searchShows:', error);
    throw error;
  }
}
