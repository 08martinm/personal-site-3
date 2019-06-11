import express from 'express';
import { getUser, postUser, putPassword } from './userHandler';
import authenticate from '../../middlewares/authenticate';
import validate from '../../middlewares/validation';
import { postUserSchema, putPasswordSchema } from './userValidation';

const userRouter = express.Router();

userRouter.get('/', authenticate, getUser);
userRouter.post('/', validate(postUserSchema), postUser);
userRouter.put('/password', validate(putPasswordSchema), putPassword);

export default userRouter;
