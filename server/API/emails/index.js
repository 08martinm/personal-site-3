import express from 'express';
import verifyEmailToken from './verificationHandler';
import forgotPasswordToken from './forgotPasswordHandler';
import validate from '../../middlewares/validation';
import { verificationsSchema, forgotPasswordSchema } from './emailValidation';

const emailRouter = express.Router();

emailRouter.post(
  '/verifications',
  validate(verificationsSchema),
  verifyEmailToken,
);
emailRouter.post(
  '/forgot-password',
  validate(forgotPasswordSchema),
  forgotPasswordToken,
);

export default emailRouter;
