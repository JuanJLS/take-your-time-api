'use strict'

const express = require('express')
const router = express.Router()

const validateUserMiddleware = require('../middlewares/validate-user.middleware');

const projects = require('./projects.routes')
const auth = require('./auth.routes')
const users = require('./user.routes')

router.use('/projects', validateUserMiddleware, projects)
router.use('/auth', auth)
router.use('/users', validateUserMiddleware, users)

module.exports = router
