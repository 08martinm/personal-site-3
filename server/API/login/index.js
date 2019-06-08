import express from 'express';
import loginHandler from './loginHandler';
import validate from '../../middlewares/validation';
import loginSchema from './loginValidation';

const loginRouter = express.Router();
loginRouter.post('/', validate(loginSchema), loginHandler);

export default loginRouter;
