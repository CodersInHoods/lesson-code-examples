const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const Customer = sequelize.define("customer", {
  name: DataTypes.TEXT,
  location: DataTypes.TEXT,
});

module.exports = {
  Customer,
};
