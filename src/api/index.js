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
export const getUserAPI = () => axios.get(`/api/users`);
export const loginAPI = ({ email, password }) =>
  axios.post(`/api/login`, { email, password });
export const logoutAPI = () => axios.post(`/api/logout`);
export const verifyEmailAPI = ({ token }) =>
  axios.post(`/api/emails/verifications`, { token });
export const forgotPasswordAPI = ({ email }) =>
  axios.post(`/api/emails/forgot-password`, { email });
export const resetPasswordAPI = ({ password, forgotPasswordToken }) =>
  axios.put('/api/users/password', { password, forgotPasswordToken });
