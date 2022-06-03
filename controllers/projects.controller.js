'use strict'

const { Project, Task, sequelize } = require('../models')

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

async function create(req, res) {
  const t = await sequelize.transaction();
  try {
    const { name } = req.body;
    await Project.create({
      name
    }, { transaction: t });
    await t.commit();
    res.status(200).send();

  } catch (error) {
    await t.rollback();
  }
}

async function update(req, res) {
  const fieldsToUpdate = req.body;
  const projectId = +req.params.id;
  const projects = await Project.update(
    {
      ...fieldsToUpdate
    },
    {
      where: { id: projectId }
    }
  )
  res.status(200).send(projects)
}

async function remove(req, res) {
  const id = +req.params.id;
  const response = await Project.destroy(
    {
      where: { id: id }
    }
  )
  res.status(200).send(response)
}

module.exports = {
  show,
  index,
  create,
  update,
  remove
}
