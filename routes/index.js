'use strict'

const express = require('express')
const router = express.Router()

const users = require('./users.routes')
const projects = require('./projects.routes')

router.use('/users', users)
router.use('/projects', projects)

module.exports = router
