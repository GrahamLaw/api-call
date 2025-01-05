// src/services/apiClient.js
import axios from 'axios';

// Create a reusable axios instance
const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Replace with your base URL
  timeout: 10000, // Timeout of 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Reusable error handler
export const handleApiError = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      return `Error: ${error.response.status} - ${error.response.statusText}`;
    } else if (error.request) {
      return 'No response from the server';
    } else {
      return `Error: ${error.message}`;
    }
  }
  return 'An unexpected error occurred';
};

export default apiClient;
