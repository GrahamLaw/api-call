// src/services/apiService1.js
import apiClient, { handleApiError } from './apiClient';

// Example API call for the first service
export const fetchDataFromService1 = async () => {
  try {
    const response = await apiClient.get('/todos/1'); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error)); // Return a formatted error message
  }
};
