import bodyParser from 'body-parser';
import helmet from 'helmet';
import boom from 'express-boom';
import rateLimit from 'express-rate-limit';
import uuid from 'uuid/v4';
import session from 'express-session';
import ConnectPGSession from 'connect-pg-simple';
import passport from 'passport';
import API from '../../API';
import envVars from '../../../config/envVars';
import {
  MINUTES_IN_ONE_HOUR,
  MS_IN_ONE_SECOND,
  SECONDS_IN_ONE_MINUTE,
} from '../../../common/timeConstants';

const { SESSION_SECRET, USE_SSL, CONSTRING } = envVars;

const sessionCookieMaxAge =
  4 * // 4 hour max session length
  MINUTES_IN_ONE_HOUR *
  SECONDS_IN_ONE_MINUTE *
  MS_IN_ONE_SECOND;

const apiLimiter = rateLimit({
  windowMs: 15 * SECONDS_IN_ONE_MINUTE * MS_IN_ONE_SECOND, // reset every 15 mins
  max: 100, // 100 requests per window per IP
});

const addDefaultMiddlewares = app => {
  const sessionStore = new (ConnectPGSession(session))({
    conString: CONSTRING,
    dialect: 'postgres',
    ssl: USE_SSL,
    dialectOptions: { ssl: USE_SSL },
    tableName: 'Sessions',
  });
  app.use(
    session({
      store: sessionStore,
      genid: () => uuid(),
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: sessionCookieMaxAge },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(boom());
  app.use(helmet());
  app.use(bodyParser.json());
  app.use('/api/', apiLimiter);
  app.use('/api', API);
  return app;
};

export default addDefaultMiddlewares;
