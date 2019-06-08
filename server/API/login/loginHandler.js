import { promisifedAuthenticate, promisifiedLogin } from './passport';

async function loginHandler(req, res) {
  /* authenticate */
  // params provided from local strategy's done func
  try {
    const user = await promisifedAuthenticate(req, res); // get authenticated user
    await promisifiedLogin(req, user);
    res.cookie('MLM-Authorized', true);
    return res.status(200).json(user.get({ plain: true }));
  } catch (error) {
    res.clearCookie('unauthorized');
    try {
      req.session.destroy();
    } catch (_) {
      // empty on purpose
    }
    throw error;
  }
}

export default loginHandler;
