const { DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Hiepsi = sequelize.define('Hiepsi', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_account: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  sever: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  phai:{
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  status: {
    type: DataTypes.INTEGER, // Thêm trường status là kiểu số nguyên
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  de_tu: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  tableName: 'HSO',
});

module.exports = Hiepsi;
