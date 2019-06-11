const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  SESSION_SECRET: process.env.SESSION_SECRET,
  CONSTRING: process.env.CONSTRING,
  SENDGRID: {
    API_KEY: process.env.SENDGRID_API_KEY,
    FROM_EMAIL: process.env.FROM_EMAIL,
    VERIFICATION_EMAIL_ID: process.env.SENDGRID_VERIFICATION_EMAIL_ID,
    RESET_PASSWORD_EMAIL_ID: process.env.SENDGRID_RESET_PASSWORD_EMAIL_ID,
  },
};
