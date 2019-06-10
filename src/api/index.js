import axios from 'axios';

export const postUser = ({
  firstName,
  lastName,
  email,
  password,
  description,
}) =>
  axios.post('/api/users', {
    firstName,
    lastName,
    email,
    password,
    description,
  });
export const getUser = () => axios.get(`/api/users`);
export const loginAPI = ({ email, password }) =>
  axios.post(`/api/login`, { email, password });
export const logoutAPI = () => axios.post(`/api/logout`);
export const verifyEmailAPI = ({ token }) =>
  axios.post(`/api/emails/verifications`, { token });
