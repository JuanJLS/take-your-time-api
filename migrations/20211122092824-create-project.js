'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    await queryInterface.bulkInsert('projects', [
      { name: 'Take Your Time App', createdAt: new Date(), updatedAt: new Date() },
      { name: 'The Grand Wines', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Another wonderful Application', createdAt: new Date(), updatedAt: new Date() }
    ])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Projects')
  }
}
