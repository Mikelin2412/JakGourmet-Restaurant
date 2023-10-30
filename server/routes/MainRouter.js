const Router = require('express');
const UserRouter = require('./UserRouter');
const MenuRouter = require('./MenuRouter');
const BucketRouter = require('./BucketRouter');

const router = new Router();

router.use('/user', UserRouter);
router.use('/bucket', BucketRouter);
router.use('/menu', MenuRouter);

module.exports = router;