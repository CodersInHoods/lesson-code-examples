const { readFileSync, writeFileSync } = require("fs");

const dbPath = "./db.json";

const getAllUsers = () => {
  const dbData = readFileSync(dbPath, "utf-8");
  const asObject = JSON.parse(dbData);
  return asObject.users;
};

const writeAllUsers = (users) => {
  return writeFileSync(dbPath, JSON.stringify({ users }));
};

const saveUser = ({ email, password }) => {
  const allUsers = getAllUsers();
  writeAllUsers([...allUsers, { email, password }]);
};

const findUserByEmail = (email) => {
  const users = getAllUsers();
  return users.find((user) => user.email === email);
};

module.exports = { saveUser, findUserByEmail };
