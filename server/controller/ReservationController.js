const {Reservation, Table} = require('../model/models');

class ReservationController {
    async addReservation(req, res) {
        return res.json('WORKING');
    }

    async getAllReservations(req, res) {

    }

    async getDefiniteReservation(req, res) {
        
    }
}

module.exports = new ReservationController();