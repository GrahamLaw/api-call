// src/services/apiService2.js
import apiClient, { handleApiError } from './apiClient';

// Example API call for the second service
export const fetchDataFromService2 = async () => {
  try {
    const response = await apiClient.get('/users'); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error)); // Return a formatted error message
  }
};
