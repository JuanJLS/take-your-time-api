'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class WorkTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      WorkTime.belongsTo(models.Task, { foreignKey: 'taskId' })
      WorkTime.belongsTo(models.User, { foreignKey: 'userId' })
    }
  };
  WorkTime.init({
    id: {
      type: DataTypes.INTEGER,
      name: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    taskId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    startedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    endAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    totalTime: {
      type: DataTypes.DECIMAL
    },
  }, {
    sequelize,
    modelName: 'WorkTime',
    tableName: 'WorkTimes',
    timestamps: true,
    updatedAt: false
  })
  return WorkTime
}
