import axios from 'axios';

const api = axios.create({
  baseURL: 'http://SEU IP:PORTA'
});

export default api;