const express = require('express')
const userRouter = express.Router()
const {getUserDetails} = require('../controllers/user.controller.js')

userRouter.get('/:userid',getUserDetails)

module.exports = {
    userRouter
}