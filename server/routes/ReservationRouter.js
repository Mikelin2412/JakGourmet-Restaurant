const Router = require('express');
const ReservationController = require('../controller/ReservationController');
const CheckRoleMiddleware = require('../middleware/CheckRoleMiddleware');
const router = new Router();

router.post('/add', ReservationController.addReservation);
router.get('/getAll', CheckRoleMiddleware('ADMIN'), ReservationController.getAllReservations);
router.get('/getDefinite', ReservationController.getDefiniteReservation);
router.patch('/update/:id', ReservationController.updateReservation);
router.delete('/:id', ReservationController.deleteReservation);

module.exports = router;