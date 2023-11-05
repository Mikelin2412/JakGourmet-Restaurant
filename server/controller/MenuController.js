const ApiError = require("../errors/ApiError");
const uuid = require('uuid');
const path = require('path');
const { Dish } = require("../model/models");

class MenuController {
    async addDish(req, res, next) {
        const {name, description, price, weight, dishTypeId} = req.body;
        const {img} = req.files;
        const fileName = uuid.v4() + '.png';
        img.mv(path.resolve(__dirname, '..', 'static', fileName));
        if (!name || !description || !price || !weight || !img || !dishTypeId) {
            return next(ApiError.badRequest('Введены не все данные!'));
        }
        const isDishCreated = await Dish.findOne({where: {name}});
        if (isDishCreated) {
            return next(ApiError.badRequest('Блюдо с таким названием уже существует!'));
        }
        const dish = await Dish.create({name, description, weight, price, image: fileName, dishTypeId});
        return res.json({dish});
    }

    async getAllDishes(req, res) {
        let {dishTypeId, limit, page} = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let dishes;
        if (!dishTypeId) {
            dishes = await Dish.findAndCountAll({limit, offset});
        }
        if (dishTypeId) {
            dishes = await Dish.findAndCountAll({where: {dishTypeId}, limit, offset});
        }
        return res.json({dishes});
    }

    async getDish(req, res) {

    }
}

module.exports = new MenuController();