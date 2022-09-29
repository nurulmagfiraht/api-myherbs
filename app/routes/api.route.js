const express = require('express');
const router = express.Router();
const UserController = require('../controllers/User.controller');
const authController = require('../controllers/auth.controllers');
const tutorial = require('../controllers/tutorial.controller');

//POST ROUTER

router.post('/User/', UserController.post);
router.get('/User/', UserController.get);
router.get('/User/:id', UserController.getById);
router.delete('/User/:id', UserController.destroy);
router.patch('/User/:id', UserController.Update);

router.post('/login/', authController.login)
module.exports = router