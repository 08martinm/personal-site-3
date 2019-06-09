import { promisifedAuthenticate, promisifiedLogin } from './passport';
import { COOKIE_NAME, COOKIE_VALUE } from '../../../common/cookie';

async function loginHandler(req, res, next) {
  /* authenticate */
  // params provided from local strategy's done func
  try {
    const user = await promisifedAuthenticate(req, res); // get authenticated user
    await promisifiedLogin(req, user);
    res.cookie(COOKIE_NAME, COOKIE_VALUE);
    return res.status(200).json(user.get({ plain: true }));
  } catch (error) {
    res.clearCookie(COOKIE_NAME);
    try {
      req.session.destroy();
    } catch (_) {
      // empty on purpose
    }
    return next(error);
  }
}

export default loginHandler;
