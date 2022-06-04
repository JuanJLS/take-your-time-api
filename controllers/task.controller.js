'use strict'

const { Task, WorkTime, sequelize } = require('../models')

async function index(req, res) {
  const tasks = await Task.findAll({
    include: [
      {
        model: WorkTime
      }
    ]
  })
  res.status(200).send(tasks)
}

async function findTaskByPk(req, res) {
  const task = await Task.findByPk(req.params.id);
  res.status(200).send(task);
}

async function create(req, res) {
  const t = await sequelize.transaction();
  try {
    const { name, projectId, status } = req.body;
    await Task.create({
      name,
      projectId,
      status
    }, { transaction: t });
    await t.commit();
    res.status(200).send();

  } catch (error) {
    await t.rollback();
  }
}

module.exports = {
  index,
  create,
  findTaskByPk
}