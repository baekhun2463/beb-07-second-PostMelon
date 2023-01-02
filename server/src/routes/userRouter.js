const express = require('express');
const userController = require('../controllers/userController');
const userRouter = express.Router();

userRouter.get('/', userController.userHome);

module.exports = userRouter;
