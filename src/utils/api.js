
// Utility functions for API calls
const API_URL = "http://localhost:5000/";

export const fetchWord = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch word');
  const words = await response.json();
  return words[Math.floor(Math.random() * words.length)];
};
