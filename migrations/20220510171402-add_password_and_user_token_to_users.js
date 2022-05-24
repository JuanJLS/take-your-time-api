'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("users", "password", {type: Sequelize.STRING, after: "email"});
    await queryInterface.addColumn("users", "token", {type: Sequelize.STRING, after: "password"});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("users", "password");
    await queryInterface.removeColumn("users", "token"); 
  }
};
