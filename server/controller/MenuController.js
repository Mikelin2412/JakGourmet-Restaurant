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
        return res.json(dish);
    }

    async getAllDishes(req, res) {
        let {dishTypeId} = req.query;
        let dishes;
        if (!dishTypeId) {
            dishes = await Dish.findAll();
        }
        if (dishTypeId) {
            dishes = await Dish.findAll({where: {dishTypeId}});
        }
        return res.json(dishes);
    }

    async deleteDish(req, res, next) {
        const { id } = req.body;
        try {
          const dish = await Dish.findByPk(id);
          
          if (!dish) {
            return next(ApiError.badRequest('Блюдо не найдено!'));
          }
      
          await dish.destroy();
      
          return res.json({ message: 'Блюдо успешно удалено!' });
        }
        catch (err) {
          return next(ApiError.internal('Произошла ошибка при удалении блюда!'));
        }
    }
}

module.exports = new MenuController();