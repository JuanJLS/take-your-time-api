'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("tasks", "status", { type: Sequelize.STRING, defaultValue: "In Progress", after: "projectId" });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("tasks", "status");
  }
};
