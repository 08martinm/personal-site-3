import express from 'express';
import logger from 'morgan';
import path from 'path';
import favicon from 'express-favicon';

const addDevMiddlewares = app => {
  app.use(favicon(path.join(__dirname, '../../public/favicon.ico')));
  app.use(express.static(path.join(__dirname, '../../public')));
  app.use(logger('dev'));
  return app;
};

export default addDevMiddlewares;
