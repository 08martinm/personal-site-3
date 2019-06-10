import express from 'express';
import verifyEmailToken from './emailHandler';
import validate from '../../middlewares/validation';
import verifyEmailSchema from './emailValidation';

const emailRouter = express.Router();

emailRouter.post(
  '/verifications',
  validate(verifyEmailSchema),
  verifyEmailToken,
);

export default emailRouter;
