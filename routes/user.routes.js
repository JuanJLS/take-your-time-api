'use strict'

const express = require('express')
const router = express.Router({ mergeParams: true })

const userController = require('../controllers/user.controller')

router.get('/current-user', userController.getCurrentUser)
router.get('/:id', userController.show)
router.get('/', userController.index)
router.patch('/:id', userController.update)
router.post('/create', userController.create)
router.delete('/:id', userController.remove)

module.exports = router
