import express from 'express';
import usersAPI from './users';
import loginAPI from './login';

const API = express.Router();

API.use('/users', usersAPI);
API.use('/login', loginAPI);

export default API;
