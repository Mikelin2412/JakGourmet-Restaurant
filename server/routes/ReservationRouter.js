const Router = require('express');
const ReservationController = require('../controller/ReservationController');
const router = new Router();

router.post('/add', ReservationController.addReservation);
router.get('/getAll', ReservationController.getAllReservations);
router.get('/get/:id', ReservationController.getDefiniteReservation);

module.exports = router;