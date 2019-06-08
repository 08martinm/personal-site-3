const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  SESSION_SECRET: process.env.SESSION_SECRET,
  CONSTRING: process.env.CONSTRING,
};
