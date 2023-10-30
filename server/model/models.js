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
    timestamps: false, // не добавлять поля createdAt и updatedAt
});

User.hasOne(UserRoles, { foreignKey: 'id' });
UserRoles.belongsTo(User, { foreignKey: 'id' });

module.exports = {
    User,
    UserRoles
}