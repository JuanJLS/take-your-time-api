'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.SRING
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
    await queryInterface.bulkInsert('task', [
      { name: 'development', createdAt: new Date(), updatedAt: new Date() },
      { name: 'code revision', createdAt: new Date(), updatedAt: new Date() },
      { name: 'fixing issues', createdAt: new Date(), updatedAt: new Date() }
    ])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tasks')
  }
}
