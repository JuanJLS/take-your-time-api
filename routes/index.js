'use strict'

const express = require('express')
const router = express.Router()

const validateUserMiddleware = require('../middlewares/validate-user.middleware');

const projects = require('./projects.routes')
const tasks = require('./tasks.routes')
const auth = require('./auth.routes')
const users = require('./user.routes')

router.use('/projects', validateUserMiddleware, projects)
router.use('/tasks', validateUserMiddleware, tasks)
router.use('/auth', auth)
router.use('/users', validateUserMiddleware, users)

module.exports = router
