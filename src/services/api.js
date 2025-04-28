import axios from "axios";

const API_URL = "https://api.tvmaze.com";

export const fetchShows = async () => {
  const response = await axios.get(`${API_URL}/shows`);
  return response.data;
};

export const searchShows = async (query) => {
  const response = await axios.get(`${API_URL}/search/shows?q=${query}`);
  return response.data.map(item => item.show);
};

export const fetchGenres = async () => {
  const shows = await fetchShows();
  const genres = new Set();
  shows.forEach(show => {
    show.genres.forEach(genre => genres.add(genre));
  });
  return Array.from(genres);
};
