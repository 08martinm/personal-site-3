module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    'sessions',
    {
      sid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sess: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      expire: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {},
  );
