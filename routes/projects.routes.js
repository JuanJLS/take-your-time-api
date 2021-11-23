'use strict'

const express = require('express')
const router = express.Router({ mergeParams: true })

const projectsController = require('../controllers/projects.controller')

router.get('/', projectsController.index)

module.exports = router
