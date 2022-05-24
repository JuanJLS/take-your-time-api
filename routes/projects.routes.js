'use strict'

const express = require('express')
const router = express.Router({ mergeParams: true })

const projectsController = require('../controllers/projects.controller')

router.get('/:id', projectsController.show)
router.get('/', projectsController.index)
router.patch('/:id', projectsController.update)
router.delete('/:id', projectsController.remove)

module.exports = router
