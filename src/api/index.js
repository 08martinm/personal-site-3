import axios from 'axios';

export const postUser = payload => axios.post('/api/users', payload);
export const getUser = () => axios.get(`/api/users`);
export const loginAPI = payload => axios.post(`/api/login`, payload);
export const logoutAPI = () => axios.post(`/api/logout`);
