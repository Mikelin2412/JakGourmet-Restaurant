const ApiError = require('../errors/ApiError');
const {Reservation, Table, User} = require('../model/models');

class ReservationController {
    async addReservation(req, res, next) {
        const {userId, dateOfCreation, dateOfReservation, timeOfReservation, status, telephone, numberOfTable} = req.body;
        try {
            const existingReservation = await Reservation.findOne({where: {
                dateOfReservation,
                timeOfReservation,
                numberOfTable
            }});
            if (existingReservation) {
                return next(ApiError.badRequest('Бронирование на данное время за указанным столиком уже существует!'));
            }
            const isUserExists = await User.findOne({where: {id: userId}});
            if (!isUserExists) {
                return next(ApiError.badRequest('Пользователя с данным ID не существует!'));
            }
            const reservation = await Reservation.create({
                userId: userId,
                dateOfCreation,
                dateOfReservation,
                timeOfReservation,
                status,
                telephone,
                numberOfTable
            });
            return res.json(reservation);
        } catch(error) {
            return next(ApiError.internal(`Произошла ошибка при бронировании!`));
        }
    }

    async getAllReservations(req, res, next) {
        try {
            const allReservations = await Reservation.findAll();
            return res.json(allReservations);
        } catch(error) {
            return next(ApiError.internal('Произошла ошибка при получении всех бронирований!'));
        }
    }

    async getDefiniteReservation(req, res, next) {
        const {id} = req.params;
        try {
            const reservations = await Reservation.findAll({where: {userId: id}});
            return res.json(reservations);
        } catch(error) {
            return next(ApiError.internal('Произошла ошибка при получении бронирований!'));
        }
    }

    async deleteReservation(req, res, next) {
        const {id} = req.params;
        try {
            const reservation = await Reservation.findOne({where: {id: id}});
            if (!reservation) {
                return next(ApiError.badRequest('Бронирование не найдено!'));
            }
            await reservation.destroy();
            return res.json('Удаление прошло успешно!');
        } catch(error) {
            return next(ApiError.internal('Произошла ошибка при удалении бронирования!'));
        }
    }
}

module.exports = new ReservationController();