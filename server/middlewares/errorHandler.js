import Boom from 'boom';
import _get from 'lodash/get';

// error handler middleware has to accept 4 args, even though we don't use `next`
/* eslint-disable-next-line no-unused-vars */
const errorHandlerMiddleware = (err, req, res, next) => {
  // Temporary error-logging; TODO: improve
  console.log({ note: 'server error', err });

  // Handle Boom errors from our server
  if (Boom.isBoom(err)) {
    const { data, message } = err;
    const dataPayload = { ..._get(err, 'output.payload', {}), ...data };
    const boomErrorType = _get(err, 'typeof.name', 'badImplementation');
    return res.boom[boomErrorType](message, dataPayload);
  }

  // Catch-all
  return res.boom.badImplementation(err);
};

export default errorHandlerMiddleware;
