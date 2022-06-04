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
    static associate(models) {
      // define association here
      Task.belongsTo(models.Project, { foreignKey: 'projectId', onDelete: 'CASCADE', onUpdate: 'CASCADE'  })
      Task.hasMany(models.WorkTime, { foreignKey: 'taskId' })
    }
  };
  Task.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      name: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    projectId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Task',
    tableName: 'Tasks',
    timestamps: true
  })
  return Task
}
