const express = require("express");
const {
  addProductsToCart,
  removeProductsFromCart,
  getCartByUserId,
} = require("../controllers/cart.controllers");

const cartRouter = express.Router();
cartRouter.post("/add-to-cart", addProductsToCart);
cartRouter.get("/get-cart/:id", getCartByUserId);
cartRouter.delete("/remove-cart-item", removeProductsFromCart);

module.exports = cartRouter;
