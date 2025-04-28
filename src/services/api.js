const API_URL = 'https://api.tvmaze.com';

export async function fetchShows() {
  const response = await fetch(`${API_URL}/shows`);
  const data = await response.json();
  return data;
}

export async function fetchShowById(id) {
  const response = await fetch(`${API_URL}/shows/${id}`);
  const data = await response.json();
  return data;
}
