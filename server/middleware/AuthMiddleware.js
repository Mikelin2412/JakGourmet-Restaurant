const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    if (req.method === 'OPTIONS') {
        next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1];
        console.log('TOKEN: ' + req.headers.authorization);
        if (!token) {
            return res.status(401).json('Пользователь не авторизован!');
        }
        const decodedUser = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decodedUser;
        next();
    } catch (e) {
        return res.status(401).json('Пользователь не авторизован!');
    }
}