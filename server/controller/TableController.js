const ApiError = require("../errors/ApiError");
const { Table } = require("../model/models");

class TableController {
    async addNewTable(req, res, next) {
        const {numberOfSeats} = req.body;
        if (!numberOfSeats) {
            return next(ApiError.badRequest('Количество мест не задано!'));
        }
        const table = await Table.create({numberOfSeats});
        return res.json(table);
    }

    async getAllTables(req, res, next) {
        const allTables = await Table.findAll();
        if (!allTables) {
            return next(ApiError.badRequest('Столы не найдены!'));
        }
        return res.json(allTables);
    }

    async deleteTable(req, res, next) {
        const {id} = req.params;
        try {
            const table = await Table.findByPk(id);
            if (!table) {
                return next(ApiError.badRequest('Стол не найден!'));
            }
            await table.destroy();
            return res.json({message: 'Стол успешно удален!'});
        } catch(error) {
            return next(ApiError.badRequest('Произошла ошибка при удалении стола!'));
        }
    }
}

module.exports = new TableController();