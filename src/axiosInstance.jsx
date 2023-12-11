// axiosInstance.js
import axios from 'axios';

const baseURL = 'localhost:8000/';

const instance = axios.create({
  baseURL: baseURL,
  // other Axios configuration options
});

export default instance;
