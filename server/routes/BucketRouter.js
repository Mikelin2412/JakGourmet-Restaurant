const Router = require('express');
const BucketController = require('../controller/BucketController');
const router = new Router();

router.post('/add', BucketController.addDishToTheBasket);
router.get('/:userId', BucketController.getAllDishesFromBasket);
router.patch('/changeCount', BucketController.changeCountOfDishInBasket);
router.delete('/deleteDefinite', BucketController.deleteDefiniteDishFromBasket);
router.delete('/deleteAll', BucketController.deleteAllDishesFromBasket);

module.exports = router;