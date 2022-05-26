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

  module.exports = {
      index
  }