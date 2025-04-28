export async function fetchShows() {
  const response = await fetch('https://api.tvmaze.com/shows?page=1');
  const data = await response.json();
  return data;
}
