const Router = require('express');
const MenuController = require('../controller/MenuController');
const CheckRoleMiddleware = require('../middleware/CheckRoleMiddleware');
const router = new Router();

// CheckRoleMiddleware('ADMIN'),

router.post('/', MenuController.addDish);
router.get('/', MenuController.getAllDishes);
router.get('/:id', MenuController.getDish);

module.exports = router;