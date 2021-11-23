'use strict'

const { Project, Task } = require('../models')

async function index (req, res) {
  const projects = await Project.findAll({
    include: [
      {
        model: Task
      }
    ]
  })
  res.status(200).send(projects)
}

module.exports = {
  index
}
