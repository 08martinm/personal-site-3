import Joi from 'joi';

const loginSchema = Joi.object().keys({
  email: Joi.string()
    .label('Email')
    .email({ minDomainAtoms: 2 })
    .required(),
  password: Joi.string()
    .label('Password')
    .required(),
});

export default loginSchema;
