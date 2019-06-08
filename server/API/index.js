import express from 'express';
import usersAPI from './users';
import loginAPI from './login';
import logoutAPI from './logout';

const API = express.Router();

API.use('/users', usersAPI);
API.use('/login', loginAPI);
API.use('/logout', logoutAPI);

export default API;
