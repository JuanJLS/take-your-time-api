'use strict'

const { Project, Task } = require('../models')

async function show(req, res) {
  const id = req.params.id;

  const project = await Project.findOne({
    where: {
      id
    },
    include: [
      {
        model: Task
      }
    ]
  })

  res.status(200).send(project)
}

async function index(req, res) {
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
  show,
  index
}
