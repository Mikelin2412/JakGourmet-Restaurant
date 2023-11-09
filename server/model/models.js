const sequelize = require('../database');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
},
{
    timestamps: false, // не добавлять поля createdAt и updatedAt
});

const UserRoles = sequelize.define('user-roles', {
    role: {type: DataTypes.STRING, allowNull: false},
},
{
    timestamps: false,
});

const Dish = sequelize.define('dish', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    weight: {type: DataTypes.INTEGER, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    image: {type: DataTypes.STRING, allowNull: false},
},
{
    timestamps: false,
});

const DishType = sequelize.define('dish-type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
},
{
    timestamps: false,
});

User.hasOne(UserRoles, { foreignKey: 'id' });
UserRoles.belongsTo(User, { foreignKey: 'id' });

DishType.hasMany(Dish);
Dish.belongsTo(DishType);

module.exports = {
    User,
    UserRoles,
    Dish,
    DishType
}