const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("my_store", "root", "rootroot", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {
  sequelize,
};
