const jwt = require('jsonwebtoken');
const {UserRoles} = require('../model/models');

module.exports = function(role) {
    return async function(req, res, next) {
        if (req.method === 'OPTIONS') {
            next();
        }
        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                return res.status(401).json({message: 'Пользователь не авторизован!'});
            }
            const decodedUser = jwt.verify(token, process.env.SECRET_KEY);
            const userRole = await UserRoles.findOne({where: decodedUser.id});
            if (userRole.role !== role) {
                return res.status(403).json({message: 'Нет доступа!'});
            }
            req.user = decodedUser;
            next();
        } catch (e) {
            return res.status(401).json({message: 'Пользователь не авторизован!'});
        }
    }
}