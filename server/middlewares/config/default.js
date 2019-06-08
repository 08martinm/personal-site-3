import bodyParser from 'body-parser';
import helmet from 'helmet';
import boom from 'express-boom';
import rateLimit from 'express-rate-limit';
import API from '../../API';

const apiLimiter = rateLimit({
  windowMs: 1000 * 60 * 15, // reset every 15 mins
  max: 100, // 100 requests per window per IP
});

const addDefaultMiddlewares = app => {
  app.use(boom());
  app.use(helmet());
  app.use(bodyParser.json());
  app.use('/api/', apiLimiter);
  app.use('/api', API);
  return app;
};

export default addDefaultMiddlewares;
