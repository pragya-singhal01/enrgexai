import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api', // This will point to your Node backend
});

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('jwt_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;