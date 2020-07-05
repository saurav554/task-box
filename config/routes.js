const express = require('express')
const router = express.Router()

const tasksController = require('../app/controllers/tasksController')
const {authenticateUser}= require('../app/middlewares/authentication')
const usersController = require('../app/controllers/usersController')

router.post('/users/register', usersController.register)
router.post('/users/login',  usersController.login)
router.get('/users/account',  authenticateUser , usersController.account)

router.get ('/tasks', authenticateUser,tasksController.list)
router.post ('/tasks',  authenticateUser,  tasksController.create)
router.get ('/tasks/completed', tasksController.completed)
router.get ('/tasks/:id', authenticateUser, tasksController.show)
router.put ('/task/:id', authenticateUser,tasksController.update)
router.delete ('/tasks/:id', authenticateUser, tasksController.destroy)

module.exports = router