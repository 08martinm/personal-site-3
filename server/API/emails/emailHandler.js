import Boom from 'boom';
import { Authentication, User } from '../../../db/models';
import { BAD_TOKEN, TOKEN_EXPIRED } from '../../../common/errorTypes';

async function emailHandler(req, res, next) {
  try {
    const { token } = req.body;
    // 1. Retrieve auth
    const auth = await Authentication.findOne({
      where: { signupToken: token },
    });
    // 2. Throw error if no token found
    if (!auth) {
      throw Boom.badRequest(`Bad Token`, { token, type: BAD_TOKEN });
    }
    // 3. Throw error if token is expired
    if (auth.dataValues.signupTokenExpiration.getTime() < Date.now()) {
      throw Boom.badRequest(`Received expired token ${token}`, {
        type: TOKEN_EXPIRED,
        boomError: 'badRequest',
      });
    }
    // 4. Update auth to reflect email verified
    auth.signupToken = null;
    auth.signupTokenExpiration = null;
    auth.emailVerified = true;
    await auth.save();
    // 5. Retrieve user object
    const user = await User.findByPk(auth.userId);
    return res.status(200).json(user.get({ plain: true }));
  } catch (error) {
    return next(error);
  }
}

export default emailHandler;
