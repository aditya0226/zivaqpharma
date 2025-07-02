import axios from 'axios';


const apiClient = axios.create({
  timeout: 5000,                       // Set request timeout (optional)
  headers: {                           // Set default headers (optional)
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle status codes (optional)
apiClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      // If the response has a status code outside of 2xx, handle it here
      console.error('Error response status:', error?.response?.status);
      console.error('Error response data:', error?.response?.data);
    } else if (error.request) {
      // No response was received
      console.error('Error request:', error?.request);
    } else {
      // Other errors
      console.error('Error message:', error?.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;