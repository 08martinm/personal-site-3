import crypto from 'crypto';
import bcrypt from 'bcryptjs';
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
      forgotPasswordToken: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      forgotPasswordExpiration: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      emailVerified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
    return bcrypt.compare(password, userAuth.password);
  };
  Authentication.prototype.createForgotPasswordToken = async function createForgotPasswordToken() {
    const userAuth = this;
    userAuth.forgotPasswordToken = await userAuth.generateToken();
    userAuth.forgotPasswordExpiration = userAuth.generateExpirationDate();
    await userAuth.save();
    return userAuth.forgotPasswordToken;
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
