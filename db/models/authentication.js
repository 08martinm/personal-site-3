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

  Authentication.associate = models => {
    const { User } = models;

    Authentication.belongsTo(User, { foreignKey: 'userId' });
  };

  Authentication.beforeCreate(async user => {
    await user.encryptPass();
    /* eslint-disable no-param-reassign */
    user.signupToken = await user.generateToken();
    user.signupTokenExpiration = user.generateExpirationDate();
    /* eslint-enable no-param-reassign */
  });

  Authentication.beforeUpdate(user => {
    if (user.changed('password')) {
      return user.encryptPass();
    }
    return user;
  });

  return Authentication;
};
