const Router = require('express');
const ReservationController = require('../controller/ReservationController');
const router = new Router();

router.post('/add', ReservationController.addReservation);

module.exports = router;