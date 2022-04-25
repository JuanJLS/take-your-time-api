'use strict'

const express = require('express')
const router = express.Router()

const projects = require('./projects.routes')

router.use('/projects', projects)

module.exports = router
