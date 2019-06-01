import express from 'express';
import addMiddlewares from './middlewares';
import envVars from '../config/envVars';

const { PORTS } = envVars;

const startApp = async () => {
  let app = express();
  app = addMiddlewares(app);
  app.listen(PORTS.SERVER, '0.0.0.0', err => {
    if (err) throw err;
    console.log(`Server running on: 0.0.0.0:${PORTS.SERVER}`);
  });
};

startApp();
