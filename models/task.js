'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (user) {
      // define association here
      // Task.belongsToMany(user, { through: 'UserTask' })
    }
  };
  Task.init({
    id: {
      type: DataTypes.INTEGER,
      name: DataTypes.STRING,
      allowNull: false,
      primaryKey: true

    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Task',
    tableName: 'Tasks',
    timestamps: true
  })
  return Task
}
