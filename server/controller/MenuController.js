const ApiError = require("../errors/ApiError");
const { Dish } = require("../model/models");

class MenuController {
    async addDish(req, res, next) {
        const {name, description, price, weight, type} = req.body;
        const {img} = req.files;
        
        if (!name || !description || !price || !weight || !image || !type) {
            next(ApiError.badRequest('Введены не все данные!'));
        }
        const isDishCreated = await Dish.findOne({where: {name}});
        if (isDishCreated) {
            next(ApiError.badRequest('Блюдо с таким названием уже существует!'));
        }
        const dish = await Dish.create({name, description, weight, price, image});
        return res.json({dish});
    }

    async getAllDishes(req, res, next) {
        const dishes = await Dish.findAll();
        if (!dishes.length) {
            return next(ApiError.badRequest('Блюда не найдены!'));
        }
        return res.json({dishes});
    }

    async getDish(req, res) {

    }
}

module.exports = new MenuController();