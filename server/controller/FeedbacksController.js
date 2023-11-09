const {User, Feedbacks} = require('../model/models');

class FeedbacksController {
    async addFeedback(req, res) {
        const request = req.body;
        const feedback = await Feedbacks.create();
        return res.json(request);
    }

    async getAllFeedbacks() {

    }
}

module.exports = new FeedbacksController();