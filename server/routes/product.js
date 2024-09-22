const express = require("express");
const productRoutes = express.Router();

const cookieParser = require("cookie-parser");
productRoutes.use(cookieParser());

const likedProducts = {
    
}

const products = require("../db/products");


productRoutes.get("/", (req, res) => {
    res.send(products);
});

productRoutes.get("/getFavorites/:userId", (req, res) => {
    let userid = req.params.userId

});

productRoutes.post("/toggleFavorite", (req, res) => {
    const username = req.username
    const likedProductName = req.likedProduct
    res.send(likedProductName)
});

module.exports = productRoutes