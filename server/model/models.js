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

const Feedbacks = sequelize.define('feedbacks', {
    feedback: {type: DataTypes.STRING, allowNull: false},
},
{
    timestamps: false,
});

const Reservation = sequelize.define('reservation', {
    dateOfCreation: {type: DataTypes.DATE, allowNull: false},
    dateOfReservation: {type: DataTypes.DATE, allowNull: false},
    timeOfReservation: {type: DataTypes.TIME, allowNull: false},
    status: {type: DataTypes.STRING, allowNull: false},
    telephone: {type: DataTypes.STRING, unique: true, allowNull: false},
    numberOfTable: {type: DataTypes.INTEGER, allowNull: false}
},
{
    timestamps: false,
});

const Table = sequelize.define('table', {
    numberOfSeats: {type: DataTypes.INTEGER, allowNull: false}
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

User.hasMany(Reservation, { foreignKey: 'id' });
Reservation.belongsTo(User, { foreignKey: 'id' });

Table.hasOne(Reservation, { foreignKey: 'numberOfTable' });
Reservation.belongsTo(Table, { foreignKey: 'id' });

module.exports = {
    User,
    UserRoles,
    Dish,
    DishType,
    Feedbacks,
    Reservation,
    Table
}