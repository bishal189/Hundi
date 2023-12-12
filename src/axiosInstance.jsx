// axiosInstance.js
import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://bishal111.pythonanywhere.com/', 
  withCredentials: true,  // Include credentials (cookies) in the request
  // Make sure this is correct
  // other Axios configuration options
});

export default instance;


