import axios from 'axios';

// Create axios instance
const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api', // Default base URL
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

instance.interceptors.request.use(
    (config) => {
        const accessToken = typeof window !== 'undefined' && localStorage.getItem('accessToken');

        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Handle response errors globally (e.g., token expiry or 401 errors)
instance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            const status = error.response.status;

            switch (status) {
                case 400:
                    console.error('Bad Request! The server could not understand the request.');
                    break;
                case 401:
                    console.error('Unauthorized! Please log in again.');
                    // Handle logout and redirect to login
                    //   localStorage.removeItem('accessToken');
                    //   window.location.href = '/login';
                    break;
                case 404:
                    console.error('Not Found! The requested resource does not exist.');
                    break;
                case 500:
                    console.error('Server Error! Something went wrong on the server.');
                    break;
                default:
                    console.error(`Unexpected Error: ${error.response.data.message || error.message}`);
            }
        } else {
            console.error('Network Error: Could not reach the server.');
        }

        return Promise.reject(error);
    }
);

export default instance;
