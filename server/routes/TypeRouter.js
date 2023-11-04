const Router = require('express');
const TypeController = require('../controller/TypeController');
const router = new Router();

router.post('/', TypeController.createType);
router.get('/', TypeController.getTypes);

module.exports = router;