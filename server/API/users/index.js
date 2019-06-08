import express from 'express';
import { getUser, postUser } from './userHandler';

import authenticate from '../../middlewares/authenticate';
import validate from '../../middlewares/validation';
import postUserSchema from './userValidation';

const userRouter = express.Router();

userRouter.get('/', authenticate, getUser);
userRouter.post('/', validate(postUserSchema), postUser);

export default userRouter;
