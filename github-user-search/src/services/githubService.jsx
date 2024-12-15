import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const headers = {
  Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`, // Add token if required
};

export const fetchUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`, { headers });
  return response.data;
};

export const fetchAdvancedSearchResults = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/users?q=${query}`, { headers });
  return response.data;
};
