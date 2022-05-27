'use strict'

const express = require('express')
const router = express.Router({ mergeParams: true })

const worktimeController = require('../controllers/worktime.controller')

router.get('/', worktimeController.index)
router.post('/create', worktimeController.create)

module.exports = router