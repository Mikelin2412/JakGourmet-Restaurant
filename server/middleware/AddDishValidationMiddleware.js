module.exports = function(req, res, next) {
    const {name, dishTypeId, description, price, weight} = req.body;
    let img;
    
    if (req.files) {
        img = req.files;
    }

    if (!name || !dishTypeId || !description || !price || !weight || !img) {
        return res.status(400).json({message: "Введены не все данные!"})
    }

    if (!img) {
        return res.status(400).json({message: "Не добавлен файл!"});
    }

    next();
}