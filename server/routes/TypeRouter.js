const Router = require('express');
const TypeController = require('../controller/TypeController');
const CheckRoleMiddleware = require('../middleware/CheckRoleMiddleware');
const router = new Router();

router.post('/', CheckRoleMiddleware('ADMIN'), TypeController.createType);
router.get('/', TypeController.getTypes);

module.exports = router;