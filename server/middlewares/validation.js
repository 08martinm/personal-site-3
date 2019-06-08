import Joi from 'joi';
import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';
import Boom from 'boom';

import { VALIDATION_FAILED } from '../../common/errorTypes';

const validate = (req, res, joiSchema) => {
  let payload;
  switch (req.method) {
    case 'POST':
    case 'PUT':
      payload = req.body;
      break;
    case 'GET':
      payload = _isEmpty(req.params) ? req.query : req.params;
      break;
    default:
      payload = {};
  }
  Joi.validate(payload, joiSchema, err => {
    if (err) throw err;
  });
};

const validator = schema => {
  if (!schema) throw new Error('Please provide a validation schema');
  return (req, res, next) => {
    try {
      validate(req, res, schema);
      return next();
    } catch (error) {
      return next(
        Boom.badData(error.message, {
          details: error.details,
          keys: _map(error.details, 'context.key'),
          type: VALIDATION_FAILED,
        }),
      );
    }
  };
};

export default validator;
