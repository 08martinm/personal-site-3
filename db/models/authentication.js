import crypto from 'crypto';
import { MS_IN_ONE_DAY } from '../../common/timeConstants';
import hashPassword from '../utils/hashPassword';

module.exports = (sequelize, DataTypes) => {
  const Authentication = sequelize.define(
    'Authentication',
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: { model: 'User', key: 'id' },
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      signupToken: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      signupTokenExpiration: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {},
  );

  Authentication.prototype.encryptPass = async function encryptPass() {
    const userAuth = this;
    const hashedPassword = await hashPassword(userAuth.password);
    userAuth.password = hashedPassword;
  };
  Authentication.prototype.generateToken = function generateToken(bytes = 32) {
    return crypto.randomBytes(bytes).toString('hex');
  };
  Authentication.prototype.generateExpirationDate = function generateExpirationDate() {
    return new Date(Date.now() + MS_IN_ONE_DAY);
  };
  Authentication.prototype.comparePassword = async function comparePassword(
    password,
  ) {
    const userAuth = this;
    const hashedPassword = await hashPassword(password);
    return hashedPassword === userAuth.password;
  };

  Authentication.associate = models => {
    const { User } = models;

    Authentication.belongsTo(User, { foreignKey: 'userId' });
  };

  Authentication.beforeCreate(async userAuth => {
    await userAuth.encryptPass();
    /* eslint-disable no-param-reassign */
    userAuth.signupToken = await userAuth.generateToken();
    userAuth.signupTokenExpiration = userAuth.generateExpirationDate();
    /* eslint-enable no-param-reassign */
  });

  Authentication.beforeUpdate(userAuth => {
    if (userAuth.changed('password')) {
      return userAuth.encryptPass();
    }
    return userAuth;
  });

  return Authentication;
};
