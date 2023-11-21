const cartModel = require("../models/cartModel")

const getCarrito = (req, res) => {
res.json(cartMode.getCarrito());
};

module.exports = {
    getCarrito,
};