import Joi from 'joi';
import _constant from 'lodash/constant';

export const postUserSchema = Joi.object().keys({
  firstName: Joi.string()
    .label('First Name')
    .required(),
  lastName: Joi.string()
    .label('Last Name')
    .required(),
  email: Joi.string()
    .label('Email')
    .required()
    .email({ minDomainAtoms: 2 }),
  password: Joi.string()
    .label('Password')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d`~!@#$%^&*()\-_=+[{\]};:'",<.>/?]{8,}/,
      'valid password',
    )
    .error(
      _constant({
        template: 'does not meet the requirements',
      }),
    )
    .required(),
  description: Joi.string()
    .label('Description')
    .required(),
});

export const putPasswordSchema = Joi.object().keys({
  password: Joi.string()
    .label('Password')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d`~!@#$%^&*()\-_=+[{\]};:'",<.>/?]{8,}/,
      'valid password',
    )
    .error(
      _constant({
        template: 'does not meet the requirements',
      }),
    )
    .required(),
  forgotPasswordToken: Joi.string()
    .label('Token')
    .required(),
});
