const Router = require('express');
const UserController = require('../controller/UserController');
const AuthMiddleware = require('../middleware/AuthMiddleware');
const AuthValidation = require('../middleware/AuthValidationMiddleware');
const router = new Router();

router.post('/registration', AuthValidation, UserController.registration);
router.post('/login', AuthValidation, UserController.login);
router.get('/auth', AuthMiddleware, UserController.check);

module.exports = router;