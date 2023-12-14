const {User, UserRoles, UserInfo, Basket, Reservation, Feedbacks} = require('../model/models');
const sequelize = require('../database');
const { Op } = require('sequelize');
const ApiError = require('../errors/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateToken = (id, email, name, role) => {
    return jwt.sign(
        {id, email, name, role},
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
        await Basket.create({userId: user.id});
        const token = generateToken(user.id, user.email, user.name, role.role);

        return res.json({token});
    }

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if (!user) {
            return next(ApiError.badRequest('Пользователь не найден!'));
        }
        const role = await UserRoles.findOne({where: user.id});
        const comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.badRequest('Указан неверный пароль!'));
        }
        const token = generateToken(user.id, user.email, user.name, role.role);
        return res.json({token});
    }

    async check(req, res, next) {
        const token = generateToken(req.user.id, req.user.email, req.user.name, req.user.role);
        return res.json({token});
    }

    async deleteOfAccount(req, res, next) {
        const {userId} = req.body;
        try {
            await Basket.destroy({ where: { userId } });
            await UserRoles.destroy({ where: { id: userId } });
            await Reservation.destroy({ where: { id: userId } });
            await Feedbacks.destroy({ where: { id: userId } });
            await User.destroy({ where: { id: userId } });
            return res.json({ message: 'Аккаунт успешно удален!' });
        } catch (error) {
            return next(ApiError.internal('Произошла ошибка при удалении аккаунта!'));
        }
    }

    async updateProfileInfo(req, res, next) {
        const userId = req.body;
        const { name, email, password, phone, city } = req.body;
    
        try {
            const user = await User.findByPk(userId);
            const userInfo = await UserInfo.findkByPk(userId);
            if (!user || !userInfo) {
                return next(ApiError.badRequest('Пользователь не найден!'));
            }
    
            if (name) {
                user.name = name;
            }
            if (email) {
                user.email = email;
            }
            if (password) {
                const hashPassword = await bcrypt.hash(password, 3);
                user.password = hashPassword;
            }
            if (phone) {
                userInfo.phone = phone;
            }
            if (city) {
                userInfo.city = city;
            }
    
            await user.save();
            await userInfo.save();
    
            return res.json({ message: 'Данные пользователя успешно обновлены!' });
        } catch (error) {
            return next(ApiError.internal('Произошла ошибка при обновлении данных пользователя!'));
        }
    }
};

module.exports = new UserController();