const express = require('express');
const router = express.Router();
const UserController = require('../controllers/User.controller');
const authController = require('../controllers/auth.controllers');

//POST ROUTER

router.post('/', UserController.post);
router.get('/', UserController.get);
router.get('/:id', UserController.getById);
router.delete('/:id', UserController.destroy);
router.patch('/:id', UserController.Update);

router.post('/login/', authController.login)
module.exports = app => {
    app.use("/api/User", router);
}