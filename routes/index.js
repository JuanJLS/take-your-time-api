'use strict'

const express = require('express')
const router = express.Router()

const projects = require('./projects.routes')
const auth = require('./auth.routes')

router.use('/projects', projects)
router.use('/auth', auth)

module.exports = router
