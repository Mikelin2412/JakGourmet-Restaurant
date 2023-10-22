const Router = require('express');
const MenuController = require('../controller/MenuController');
const router = new Router();

router.post('/', MenuController.addDish);
router.get('/', MenuController.getAllDishes);
router.get('/:id', MenuController.getDish);

module.exports = router;