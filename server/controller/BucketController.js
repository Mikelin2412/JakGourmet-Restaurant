const ApiError = require("../errors/ApiError");
const {Basket, BasketDish, Dish} = require('../model/models');

class BucketController {
    async addDishToTheBasket(req, res, next) {
        const { userId, dishId, count } = req.body;
        try {
            const basket = await Basket.findOrCreate({ where: { userId }, defaults: { totalPrice: 0 } });
            const [basketInstance, created] = basket;
        
            const basketDish = await BasketDish.findOrCreate({ where: { basketId: basketInstance.id, dishId }, defaults: { count } });
            const [basketDishInstance, dishCreated] = basketDish;
        
            if (!dishCreated) {
              basketDishInstance.count += count;
              await basketDishInstance.save();
            }

            const dish = await Dish.findByPk(dishId);
            basketInstance.totalPrice += dish.price * count;
            await basketInstance.save();
        
            return res.json(basketDishInstance);
          } catch (error) {
            return next(ApiError.internal('Произошла ошибка при добавлении блюда в корзину!'));
          }
    }

    async getAllDishesFromBasket(req, res, next) {
        const {userId} = req.params;
        try {
            const basket = await Basket.findOne({ where: { userId } });
            const basketId = basket.id;
            const basketTotalPrice = basket.totalPrice;
        
            const allDishes = await BasketDish.findAll({ where: { basketId }, include: [Dish] });
        
            return res.json({basketId, allDishes, basketTotalPrice});
          } catch (error) {
            return next(ApiError.internal('Произошла ошибка при получении блюд из корзины!'));
          }
    }

    async changeCountOfDishInBasket(req, res, next) {
        const {basketId, dishId, newCount} = req.body;
        try {
            const basketDish = await BasketDish.findOne({ where: { basketId, dishId } });
            let countDifference;

            if (basketDish) {
                countDifference = newCount - basketDish.count;
                basketDish.count = newCount;
                await basketDish.save();
            }

            const basket = await Basket.findByPk(basketId);
            const dish = await Dish.findByPk(dishId);
            basket.totalPrice += countDifference * dish.price;
            await basket.save();
        
            return res.json(basketDish);
          } catch (error) {
            return next(ApiError.internal('Произошла ошибка при обновлении количества блюда в корзине!'));
          }
    }

    async deleteDefiniteDishFromBasket(req, res, next) {
        const {basketId, dishId} = req.body;
        try {
            const basket = await Basket.findByPk(basketId);
            const dish = await Dish.findByPk(dishId);
            const basketDish = await BasketDish.findOne({ where: { basketId, dishId }});
            basket.totalPrice -= basketDish.count * dish.price;
            await basket.save();

            await BasketDish.destroy({ where: { basketId, dishId }});

            return res.json('Удаление прошло успешно!');
          } catch (error) {
            return next(ApiError.internal('Произошла ошибка при удалении блюда из корзины!'));
          }
    }

    async deleteAllDishesFromBasket(req, res, next) {
        const {basketId} = req.body;
        try {
            await BasketDish.destroy({ where: { basketId } });
            const basket = await Basket.findByPk(basketId);
            basket.totalPrice = 0;
            await basket.save();
            
            return res.json('Удаление прошло успешно!');
          } catch (error) {
            return next(ApiError.internal('Произошла ошибка при удалении блюд из корзины!'));
          }
    }
}

module.exports = new BucketController();