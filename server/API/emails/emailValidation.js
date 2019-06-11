import Joi from 'joi';

export const verificationsSchema = Joi.object().keys({
  token: Joi.string()
    .label('Token')
    .required(),
});

export const forgotPasswordSchema = Joi.object().keys({
  email: Joi.string()
    .label('Email')
    .email({ minDomainAtoms: 2 })
    .required(),
});
