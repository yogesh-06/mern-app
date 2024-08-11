const mongoose = require("mongoose");

const productModel = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  category: { type: String },
  image: { type: String },
  rating: { type: Object },
});

const Product = mongoose.model("Product", productModel);
module.exports = Product;
