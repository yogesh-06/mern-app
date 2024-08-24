const express = require("express");
const {
  getAllProducts,
  getProductsByQuery,
  getProductById,
} = require("../controllers/products.controller");

const productRouter = express.Router();
productRouter.get("/get-all-products", getAllProducts);
productRouter.get("/get-product/:id", getProductById);
productRouter.get("/get-all-products/query", getProductsByQuery);

module.exports = productRouter;
