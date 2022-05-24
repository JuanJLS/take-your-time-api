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

async function update(req, res) {
  const fieldsToUpdate = req.body;
  const projectId = req.params.id;
  const projects = await Project.update(
    {
      fieldsToUpdate
    },
    {
      where: {
        projectId
      }
    }
  )
  res.status(200).send(projects)
}

async function remove(req, res) {
  const projectId = req.params.id;
  const projects = await Project.destroy(
    {
      where: {
        projectId
      }
    }
  )
  res.status(200).send(projects)
}

module.exports = {
  show,
  index,
  update,
  remove
}
