const userModel = require("../models/user.model");

const create = (data) => userModel.createUser(data.name, data.email);
const findAll = () => userModel.getAllUsers();
const findOne = (id) => userModel.getUserById(id);
const update = (id, data) => userModel.updateUser(id, data.name, data.email);
const remove = (id) => userModel.deleteUser(id);

module.exports = { create, findAll, findOne, update, remove };