import express from 'express';
import { COOKIE_NAME } from '../../../common/cookie';

const logoutRouter = express.Router();

logoutRouter.post('/', (req, res) => {
  req.session.destroy();
  return res.clearCookie(COOKIE_NAME).sendStatus(200);
});

export default logoutRouter;
