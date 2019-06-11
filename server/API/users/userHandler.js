import Boom from 'boom';
import { User, Authentication } from '../../../db/models';
import sendVerificationEmail from '../../emails/sendVerificationEmail';
import {
  BAD_TOKEN,
  TOKEN_EXPIRED,
  DUPLICATE_EMAIL,
} from '../../../common/errorTypes';

export async function getUser(req, res) {
  const userId = req.session.passport.user;
  const userInstance = await User.findByPk(userId);
  const userData = userInstance.get({ plain: true });
  return res.status(200).json(userData);
}

export async function postUser(req, res, next) {
  try {
    const { email, firstName } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      throw Boom.badRequest(`User with email ${email} already exists`, {
        email,
        type: DUPLICATE_EMAIL,
        boomError: 'badRequest',
      });
    }
    // 1. Create User entry
    const { password, ...userFields } = req.body;
    const { id: userId } = await User.create(userFields);
    // 2. Create Authentication entry
    const auth = await Authentication.create({ userId, password });
    // 4. Send verification email
    const { signupToken } = auth;
    await sendVerificationEmail({
      hostname: req.get('host'),
      firstName,
      email,
      signupToken,
    });
    res.json('Account created');
  } catch (error) {
    next(error);
  }
}

export async function putPassword(req, res, next) {
  try {
    const { password, forgotPasswordToken } = req.body;
    const auth = await Authentication.findOne({
      where: { forgotPasswordToken },
    });
    if (!auth) {
      throw Boom.badRequest(`Bad Token`, {
        forgotPasswordToken,
        type: BAD_TOKEN,
      });
    }
    console.log('auth is', auth.dataValues.forgotPasswordExpiration);
    if (auth.dataValues.forgotPasswordExpiration.getTime() < Date.now()) {
      throw Boom.badRequest(`Received expired token ${forgotPasswordToken}`, {
        type: TOKEN_EXPIRED,
        boomError: 'badRequest',
      });
    }
    auth.forgotPasswordToken = null;
    auth.forgotPasswordExpiration = null;
    auth.password = password;
    await auth.save();
    const user = User.findByPk(auth.userId);
    res.status(200).json(user.get({ plain: true }));
  } catch (error) {
    next(error);
  }
}
