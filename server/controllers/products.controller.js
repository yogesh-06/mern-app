const Product = require("../models/products.model");

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getProductsByQuery = async (req, res, next) => {
  try {
    const query = req.query;
    const searchCriteria = {};

    if (query.name) {
      searchCriteria.name = { $regex: query.name, $options: "i" };
    }

    if (query.category) {
      searchCriteria.category = query.category;
    }
    const products = await Product.find(searchCriteria);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const { id } = req.body;
    const product = await Product.findOne({ id });
    if (!product) {
      res.status(400).json({
        success: false,
        message: "Invalid Id ",
      });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getAllProducts, getProductById, getProductsByQuery };
