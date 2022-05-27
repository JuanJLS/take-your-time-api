'use strict'

const express = require('express')
const router = express.Router({ mergeParams: true })

const userController = require('../controllers/user.controller')

router.get('/current-user', userController.getCurrentUser)
router.get('/:id', userController.show)
router.get('/', userController.index)
router.post('/create', userController.create)

module.exports = router
