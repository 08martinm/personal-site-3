import express from 'express';
import path from 'path';
import logger from 'morgan';
import favicon from 'express-favicon';

const addProductionMiddlewares = app => {
  app.use(favicon('./public/favicon.ico'));
  app.use(logger('combined'));
  app.use(express.static(path.resolve('public/dist/')));
  app.get('/*', (_, res) =>
    res.sendFile('index.html', { root: './public/dist' }),
  );
  return app;
};

export default addProductionMiddlewares;
