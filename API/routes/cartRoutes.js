const express = require('express');
const cartRouter = express.Router();

const cartController = require("../controllers/cartController");

cartRouter.get("/cart", cartController.getCarrito);


module.exports = cartRouter;