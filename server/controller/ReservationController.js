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
            const userIds = allReservations.map(reservation => reservation.userId);
            const user = await User.findAll({where:
                {
                    id: userIds
                }
            });
            const allSortedReservations = allReservations.map(reservation => {
                const {name} = user.find(user => user.id === reservation.userId);
                return {
                    name,
                    reservation
                }
            });
            return res.json(allSortedReservations);
        } catch(error) {
            return next(ApiError.internal('Произошла ошибка при получении всех бронирований!'));
        }
    }

    async getDefiniteReservation(req, res, next) {
        const {id} = req.query;
        try {
            const reservations = await Reservation.findAll({where: {userId: id}});
            const {name} = await User.findOne({where: {id: id}});
            const finalReservations = reservations.map(reservation => {
                return {
                    name,
                    reservation
                }
            });
            return res.json(finalReservations);
        } catch(error) {
            return next(ApiError.internal('Произошла ошибка при получении бронирований!'));
        }
    }

    async updateReservation(req, res, next) {
        const reservationId = req.params.id;
        const {status} = req.body;
        try {
            await Reservation.update(
                {
                    status: status
                },
                {
                    where: {id: reservationId}
            });
            const updatedReservation = await Reservation.findOne({
                where: {id: reservationId}
            });
            const {name} = await User.findOne({where: {id: updatedReservation.userId}})
            return res.json({name, reservation: updatedReservation});
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка при обновлении статуса бронирования!'));
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