const express = require("express");
const getAllProducts = require("../controllers/products.controller");

const productRouter = express.Router();
productRouter.get("/get-all-products", getAllProducts);

module.exports = productRouter;
