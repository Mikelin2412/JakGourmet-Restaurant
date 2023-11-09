const { DishType } = require("../model/models");

class TypeController {
    async createType(req, res) {
        const {name} = req.body;
        const type = await DishType.create({name});
        return res.json(type);
    }

    async getTypes(req, res) {
        const types = await DishType.findAll();
        return res.json(types);
    }
}

module.exports = new TypeController();