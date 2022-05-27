'use strict'

const express = require('express')
const router = express.Router({ mergeParams: true })

const tasksController = require('../controllers/task.controller')

router.get('/', tasksController.index)
router.post('/create', tasksController.create)

module.exports = router