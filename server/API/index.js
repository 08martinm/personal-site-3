import express from 'express';
import usersAPI from './users';

const API = express.Router();

API.use('/users', usersAPI);

export default API;
