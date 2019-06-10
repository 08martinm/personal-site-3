import Joi from 'joi';

const verificationsSchema = Joi.object().keys({
  token: Joi.string()
    .label('Token')
    .required(),
});

export default verificationsSchema;
