const express = require("express");
const productRoutes = express.Router();

const cookieParser = require("cookie-parser");
productRoutes.use(cookieParser());

const products = require("../db/products");


productRoutes.get("/", (req, res) => {
    res.send(products);
});

productRoutes.get("/getFavorites/:userId", (req, res) => {
    

    res.send(products);
});

module.exports = productRoutes