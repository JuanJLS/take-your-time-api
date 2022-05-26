'use strict'

const { Task, Worktime, sequelize } = require('../models')

async function index(req, res) {
    const tasks = await Task.findAll({
      include: [
        {
          model: Worktime
        }
      ]
    })
    res.status(200).send(tasks)
  }

  async function create(req, res) {
    const t = await sequelize.transaction();
    try {
        const { name, projectId } = req.body;
        await Task.create({
            name,
            projectId,
        }, { transaction: t });
        await t.commit();
        res.status(200).send();

    } catch (error) {
        await t.rollback();
    }
}

  module.exports = {
      index,
      create
  }