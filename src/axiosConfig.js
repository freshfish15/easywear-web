import axios from 'axios';
import { API_BASE_URL, API_TIMEOUT } from './config';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'accept': 'application/json'
    }
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => {
        if (response.data.status !== 'ok') {
            return Promise.reject(new Error(response.data.message || 'Request failed'));
        }
        return response.data;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;