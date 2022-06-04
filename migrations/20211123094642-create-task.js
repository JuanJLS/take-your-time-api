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
        type: Sequelize.STRING
      },
      projectId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE', 
        onUpdate: 'CASCADE',
        references: {
          model: {
            tableName: 'Projects',
          },
          key: 'id'
        }
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
    await queryInterface.bulkInsert('Tasks', [
      { name: 'development', projectId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'code revision', projectId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'fixing issues', projectId: 2, createdAt: new Date(), updatedAt: new Date() }
    ])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tasks')
  }
}
