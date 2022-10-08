const express = require('express');
const router = express.Router();
const UserController = require('../controllers/User.controller');
const authController = require('../controllers/auth.controllers');
// const uploadAvatar = require('../../services/uploadAvatar.service');
// const AuthMiddleware = require('../middleware/auth.middleware');

//POST ROUTER

// router.use('/User/', authMiddleware.verifytoken);
router.post('/', UserController.post);
router.get('/', UserController.get);
router.get('/:id', UserController.getById);
router.delete('/:id', UserController.destroy);
router.patch('/:id', UserController.Update);
// router.post('/avatar', uploadAvatar.single('avatar'), UserController.uploadImage);uploadImageuploadImage

router.post('/login/', authController.login)
module.exports = app => {
    app.use("/api/User", router);
}