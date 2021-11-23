'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      admin: {
        type: Sequelize.BOOLEAN,
        default: false,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
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
    await queryInterface.bulkInsert('users', [
      { firstName: 'Jose', createdAt: new Date(), updatedAt: new Date(), email: 'jose@mail.com', admin: false },
      { firstName: 'Juan', createdAt: new Date(), updatedAt: new Date(), email: 'juan@mail.com', admin: true },
      { firstName: 'Fran', createdAt: new Date(), updatedAt: new Date(), email: 'fran@mail.com', admin: false }
    ])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users')
  }
}
