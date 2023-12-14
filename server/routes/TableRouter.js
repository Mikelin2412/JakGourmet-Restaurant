const Router = require('express');
const TableController = require('../controller/TableController');
const CheckRoleMiddleware = require('../middleware/CheckRoleMiddleware');
const router = new Router();

router.post('/', CheckRoleMiddleware('ADMIN'), TableController.addNewTable);
router.get('/', TableController.getAllTables);
router.delete('/:id', CheckRoleMiddleware('ADMIN'), TableController.deleteTable);

module.exports = router;