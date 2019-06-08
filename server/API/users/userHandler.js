import { User, Authentication } from '../../../db/models';
import sendVerificationEmail from '../../emails/sendVerificationEmail';

export async function getUser(req, res) {
  const userId = req.session.passport.user;
  const userInstance = await User.findByPk(userId);
  const userData = userInstance.get({ plain: true });
  return res.status(200).json(userData);
}

export async function postUser(req, res) {
  try {
    // 1. Create User entry
    const { password, ...userFields } = req.body;
    const { id: userId } = await User.create(userFields);
    // 2. Create Authentication entry
    const auth = await Authentication.create({ userId, password });
    // 4. Send verification email
    const { firstName, email } = req.body;
    const { signupToken } = auth;
    await sendVerificationEmail({
      hostname: req.get('host'),
      firstName,
      email,
      signupToken,
    });
  } catch (error) {
    res.send(error);
  }
}
