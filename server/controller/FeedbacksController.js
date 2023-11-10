const ApiError = require('../errors/ApiError');
const {User, Feedbacks} = require('../model/models');

class FeedbacksController {
    async addFeedback(req, res, next) {
        const {id, feedback} = req.body;
        if (!id || !feedback) {
            return next(ApiError.badRequest('Некорректные данные!'));
        }
        const isFeedback = await Feedbacks.findOne({where: {id}});
        if (isFeedback) {
            return next(ApiError.badRequest('Пользователь с таким id уже оставлял отзыв!'));
        }
        const Feedback = await Feedbacks.create({id, feedback});
        return res.json(Feedback);
    }

    async getAllFeedbacks(req, res, next) {
        const allFeedbacks = await Feedbacks.findAll({limit: 9});
        let userIds = allFeedbacks.map(feedback => feedback.id);
        const users = await User.findAll({
            where: {
                id: userIds
            }
        });
        if (!allFeedbacks || !users) {
            return next(ApiError.badRequest('Данные не найдены!'));
        }
        return res.json({users, allFeedbacks});
    }
}

module.exports = new FeedbacksController();