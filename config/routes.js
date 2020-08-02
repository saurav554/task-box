const express = require('express')
const router=express.Router()
const tasksController=require('../app/controllers/tasksController')
const usersController=require('../app/controllers/usersController')
const {authenticateUser}=require('../app/middlewares/authentication')


router.post('/users/register',usersController.register)

router.post('/users/login',usersController.login)

router.get('/users/accounts',authenticateUser,usersController.account)


// router.delete('/users/logout',authenticateUsers, usersController.logout)

router.get('/tasks',authenticateUser,tasksController.list)

router.post('/tasks',authenticateUser,tasksController.create)

router.get('/tasks/:id',authenticateUser,tasksController.show)

router.put('/tasks/:id',authenticateUser,tasksController.update)

router.delete('/tasks/:id',authenticateUser,tasksController.destroy)

module.exports=router