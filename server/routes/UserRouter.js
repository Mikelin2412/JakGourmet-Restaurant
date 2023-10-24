const Router = require('express');
const UserController = require('../controller/UserController');
const AuthMiddleware = require('../middleware/AuthMiddleware');
const router = new Router();

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.get('/auth', AuthMiddleware, UserController.check);

module.exports = router;