const Router = require('express');
const BucketController = require('../controller/BucketController');
const router = new Router();

router.get('/', BucketController.getDishes);

module.exports = router;