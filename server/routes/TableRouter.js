const Router = require('express');
const TableController = require('../controller/TableController');
const CheckRoleMiddleware = require('../middleware/CheckRoleMiddleware');
const router = new Router();

//CheckRoleMiddleware('ADMIN')

router.post('/', TableController.addNewTable);
router.get('/', TableController.getAllTables);
router.delete('/:id', TableController.deleteTable);

module.exports = router;