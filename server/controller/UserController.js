const {User, UserRoles} = require('../model/models');
const ApiError = require('../errors/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateToken = (id, email, name) => {
    return jwt.sign(
        {id, email, name},
        process.env.SECRET_KEY,
        {expiresIn: '24h'});
}

class UserController {
    async registration(req, res, next) {
        const {name, email, password} = req.body;
        if (!name || !email || !password) {
            return next(ApiError.badRequest('Некорректный email или пароль!'));
        }
        const isUserRegister = await User.findOne({where: {email}});
        if (isUserRegister) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует!'));
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const user = await User.create({name, email, password: hashPassword});
        const role = await UserRoles.create({role: 'USER'});
        const token = generateToken(user.id, user.email, user.name);

        return res.json({token});
    }

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if (!user) {
            return next(ApiError.badRequest('Пользователь не найден!'));
        }
        const comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.badRequest('Указан неверный пароль!'));
        }
        const token = generateToken(user.id, user.email, user.name);
        return res.json({token});
    }

    async check(req, res, next) {
        const token = generateToken(req.user.id, req.user.email, req.user.name);
        return res.json({token});
    }
};

module.exports = new UserController();