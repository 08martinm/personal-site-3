import Boom from 'boom';

export default (req, res, next) =>
  req.isAuthenticated() ? next() : next(Boom.unauthorized());
