import passport from 'passport';
import Local from 'passport-local';
import Boom from 'boom';
import _get from 'lodash/get';
import { USER_NOT_FOUND, WRONG_PASSWORD } from '../../../common/errorTypes';
import { User, Authentication } from '../../../db/models';

const LocalStrategy = Local.Strategy;
// * local strategy */
// "done" (goes to authenticate) with either the user or an error
passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
      try {
        // 1. Retrieve user
        const user = await User.findOne({ where: { email } });
        if (!user) {
          throw Boom.badRequest(`No user found with email ${email}`, {
            email,
            type: USER_NOT_FOUND,
            boomError: 'badRequest',
          });
        }
        // 2. Compare password
        const userAuth = await Authentication.findByPk(user.id);
        const passwordsMatch = await userAuth.comparePassword(password);
        if (!passwordsMatch) {
          throw Boom.badRequest(`Invalid password for ${email}`, {
            type: WRONG_PASSWORD,
            boomError: 'badRequest',
          });
        }
        // 3. Return null error and user
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    },
  ),
);

/* serializeUser */
// stores data in the session
// saves user id; later used to retrieve whole user object via deserializeUser
// attached to session as req.session.passport.user
passport.serializeUser((user, done) => done(null, _get(user, 'id')));

/* deserializeUser */
// userid provided from serialize
// user object is attached to the request object as req.user
passport.deserializeUser(async (id, done) => {
  const user = await User.findByPk(id);
  done(null, user);
});

export const promisifedAuthenticate = (req, res) =>
  new Promise((resolve, reject) =>
    passport.authenticate('local', (error, user) =>
      error ? reject(error) : resolve(user),
    )(req, res),
  );

export const promisifiedLogin = (req, user) =>
  new Promise((resolve, reject) =>
    req.login(user, error => (error ? reject(error) : resolve())),
  );
