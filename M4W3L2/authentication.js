const bcrypt = require("bcrypt");
const saltRounds = 10;

const jwt = require("jwt-simple");
const { SECRET_KEY } = require("./envvars");

const generateHashedPassword = (password) => {
  return bcrypt.hashSync(password, saltRounds);
};

const validatePassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};

const createToken = (email) => {
  return jwt.encode({ email }, SECRET_KEY);
};

const validateToken = (token) => {
  return jwt.decode(token, SECRET_KEY);
};

module.exports = {
  generateHashedPassword,
  validatePassword,
  createToken,
  validateToken,
};
