/* eslint-disable lodash/prefer-lodash-method */
const dotenv = require('dotenv');
const defaultVars = require('./default');
const devVars = require('./development');
const prodVars = require('./production');

dotenv.config();

function getVars() {
  switch (process.env.NODE_ENV) {
    case 'development':
      return Object.assign({}, defaultVars, devVars);
    case 'production':
      return Object.assign({}, defaultVars, prodVars);
    default:
      return defaultVars;
  }
}

const envVars = getVars();

module.exports = envVars;
