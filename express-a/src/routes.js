const express = require("express");

const UserController = require("./app/controllers/UserController");

const routes = express.Router();

routes.post("/express-a", UserController.store);

module.exports = routes;