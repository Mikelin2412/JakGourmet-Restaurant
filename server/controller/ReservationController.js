const {Reservation, Table} = require('../model/models');

class ReservationController {
    async addReservation(req, res) {
        return res.json('WORKING');
    }
}

module.exports = new ReservationController();