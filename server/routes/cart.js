const express = require("express");
const {
  addProductsToCart,
  removeProductsFromCart,
  getCartByUserId,
} = require("../controllers/cart.controllers");
const { verifyToken } = require("../utils/jwt");

const cartRouter = express.Router();
cartRouter.post("/add-to-cart", verifyToken, addProductsToCart);
cartRouter.get("/get-cart/:id", verifyToken, getCartByUserId);
cartRouter.delete("/remove-cart-item", verifyToken, removeProductsFromCart);

module.exports = cartRouter;
