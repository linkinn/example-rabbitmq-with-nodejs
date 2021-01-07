const express = require("express");

const BuyController = require("./app/controllers/BuyController");

const routes = express.Router();

routes.post("/express-b", BuyController.store);

module.exports = routes;