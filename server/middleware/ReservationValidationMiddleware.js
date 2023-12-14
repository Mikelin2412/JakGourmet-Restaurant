const isValidDate = (date) => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
      return false;
    }
    return true;
};

const isValidTime = (timeString) => {
    const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!timeRegex.test(timeString)) {
      return false;
    }
    return true;
};

const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    return phoneRegex.test(phoneNumber);
};

module.exports = function(req, res, next) {
    const {dateOfReservation, timeOfReservation, telephone, numberOfTable} = req.body;

    if (!dateOfReservation || !timeOfReservation || !telephone || !numberOfTable) {
        return res.status(400).json({message: 'Введены не все данные!'});
    }

    if (!isValidDate(dateOfReservation)) {
        return res.status(400).json({message: 'Дата должна быть в формате дд:мм:гггг!'});
    }

    if (!isValidTime(timeOfReservation)) {
        return res.status(400).json({message: 'Время должно быть в формате чч:мм!'});
    }

    if (!isValidPhoneNumber(telephone)) {
        return res.status(400).json({message: 'Номер телефона указан неверно!'});
    }

    next();
}