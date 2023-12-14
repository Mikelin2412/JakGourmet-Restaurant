const sequelize = require('../database');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
},
{
    timestamps: false,
});

const UserInfo = sequelize.define('user-info', {
    status: {type: DataTypes.STRING, allowNull: false},
    city: {type: DataTypes.STRING, allowNull: false},
    telephone: {type: DataTypes.STRING, allowNull: false},
},
{
    timestamps: false,
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

const Feedbacks = sequelize.define('feedbacks', {
    feedback: {type: DataTypes.STRING, allowNull: false},
},
{
    timestamps: false,
});

const Reservation = sequelize.define('reservation', {
    dateOfCreation: {type: DataTypes.DATEONLY, allowNull: false},
    dateOfReservation: {type: DataTypes.DATEONLY, allowNull: false},
    timeOfReservation: {type: DataTypes.TIME, allowNull: false},
    status: {type: DataTypes.STRING, allowNull: false},
    telephone: {type: DataTypes.STRING, allowNull: false},
    numberOfTable: {type: DataTypes.INTEGER, allowNull: false},
    userId: {type: DataTypes.INTEGER, allowNull: false}
},
{
    timestamps: false,
});

const Table = sequelize.define('table', {
    numberOfTable: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    numberOfSeats: {type: DataTypes.INTEGER, allowNull: false}
},
{
    timestamps: false,
});

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    totalPrice: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0}
},
{
    timestamps: false,
});

const BasketDish = sequelize.define('basket-dish', {
    count: {type: DataTypes.INTEGER, allowNull: false}
},
{
    timestamps: false,
});

User.hasOne(UserRoles, { foreignKey: 'id' });
UserRoles.belongsTo(User, { foreignKey: 'id' });

DishType.hasMany(Dish);
Dish.belongsTo(DishType);

User.hasOne(Feedbacks, { foreignKey: 'id' });
Feedbacks.belongsTo(User, { foreignKey: 'id' });

User.hasOne(UserInfo, { foreignKey: 'id' });
UserInfo.belongsTo(User, { foreignKey: 'id' });

User.hasMany(Reservation);
Reservation.belongsTo(User);

Table.hasMany(Reservation, { foreignKey: 'numberOfTable' });
Reservation.belongsTo(Table, { foreignKey: 'numberOfTable' });

User.hasOne(Basket, { foreignKey: 'userId'});
Basket.belongsTo(User, { foreignKey: 'userId'});

Basket.hasMany(BasketDish, { foreignKey: 'basketId' });
BasketDish.belongsTo(Basket, { foreignKey: 'basketId' });

Dish.hasOne(BasketDish, { foreignKey: 'dishId' });
BasketDish.belongsTo(Dish, { foreignKey: 'dishId' });

module.exports = {
    User,
    UserRoles,
    Dish,
    DishType,
    Feedbacks,
    Reservation,
    Table,
    Basket,
    BasketDish
}