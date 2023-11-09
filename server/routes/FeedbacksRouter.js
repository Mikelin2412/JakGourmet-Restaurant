const Router = require('express');
const FeedbacksController = require('../controller/FeedbacksController');
const router = new Router();

router.post('/', FeedbacksController.addFeedback);
router.get('/', FeedbacksController.getAllFeedbacks);

module.exports = router;