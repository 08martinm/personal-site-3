module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Authentications', 'forgotPasswordToken', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn(
      'Authentications',
      'forgotPasswordExpiration',
      { type: Sequelize.DATE },
    );
  },

  down: async queryInterface => {
    await queryInterface.removeColumn('Authentications', 'forgotPasswordToken');
    await queryInterface.removeColumn(
      'Authentications',
      'forgotPasswordExpiration',
    );
  },
};
