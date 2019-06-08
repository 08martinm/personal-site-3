module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Authentications', {
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: { model: 'Users', key: 'id' },
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      signupToken: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      signupTokenExpiration: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('Authentications');
  },
};
