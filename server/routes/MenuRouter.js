const Router = require('express');
const MenuController = require('../controller/MenuController');
const AddDishValidationMiddleware = require('../middleware/AddDishValidationMiddleware');
const CheckRoleMiddleware = require('../middleware/CheckRoleMiddleware');
const router = new Router();

router.post('/', CheckRoleMiddleware('ADMIN'), AddDishValidationMiddleware, MenuController.addDish);
router.get('/', MenuController.getAllDishes);
router.delete('/deleteDish', MenuController.deleteDish);

module.exports = router;