const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    if (req.method === 'OPTIONS') {
        next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json('Пользователь не авторизован!');
        }
        const decodedUser = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decodedUser;
        console.log("\nДЕКОДИРОВАННЫЙ ПОЛЬЗОВАТЕЛЬ: ") + decodedUser;
        next();
    } catch (e) {
        return res.status(401).json('Пользователь не авторизован!');
    }
}