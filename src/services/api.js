const BASE_URL = 'https://api.tvmaze.com';

export async function fetchShows() {
  const response = await fetch(`${BASE_URL}/search/shows?q=all`);
  const data = await response.json();
  return data;
}

export async function fetchShowById(id) {
  const response = await fetch(`${BASE_URL}/shows/${id}`);
  const data = await response.json();
  return data;
}
