import Boom from 'boom';
import { Authentication, User } from '../../../db/models';
import { USER_NOT_FOUND } from '../../../common/errorTypes';
import sendForgotPasswordEmail from '../../emails/sendForgotPasswordEmail';

async function forgotPasswordHandler(req, res, next) {
  try {
    const { email } = req.body;
    // 1. Retrieve auth
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw Boom.badRequest(`No user found with email ${email}`, {
        email,
        type: USER_NOT_FOUND,
        boomError: 'badRequest',
      });
    }
    const auth = await Authentication.findByPk(user.id);
    // 2. Create password-reset token/expiration
    console.log('here 1');
    const forgotPasswordToken = await auth.createForgotPasswordToken();
    // 3. Send Forgot-Password email
    console.log('here 2');
    await sendForgotPasswordEmail({
      hostname: req.get('host'),
      firstName: user.dataValues.firstName,
      email,
      forgotPasswordToken,
    });
    // 4. Send response
    return res.send(200);
  } catch (error) {
    return next(error);
  }
}

export default forgotPasswordHandler;
