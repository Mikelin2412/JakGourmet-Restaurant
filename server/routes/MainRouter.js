const Router = require('express');
const UserRouter = require('./UserRouter');
const MenuRouter = require('./MenuRouter');
const BucketRouter = require('./BucketRouter');
const TypeRouter = require('./TypeRouter');
const FeedbacksRouter = require('./FeedbacksRouter');

const router = new Router();

router.use('/user', UserRouter);
router.use('/bucket', BucketRouter);
router.use('/menu', MenuRouter);
router.use('/type', TypeRouter);
router.use('/feedbacks', FeedbacksRouter);

module.exports = router;