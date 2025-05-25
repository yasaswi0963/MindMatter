import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Change to your backend URL if deployed
});

// Add token to headers
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
