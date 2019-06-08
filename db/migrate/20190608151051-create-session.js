module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Sessions', {
      sid: {
        type: Sequelize.STRING,
      },
      sess: {
        type: Sequelize.JSON,
      },
      expire: {
        type: Sequelize.DATE,
      },
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('Sessions');
  },
};
