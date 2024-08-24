const mongoose = require("mongoose");

const cartModel = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [
    {
      productId: { type: String, required: true },
      quantity: { type: Number, required: true },
      title: { type: String, required: false },
      image: { type: String, required: false },
      price: { type: Number, required: false },
      status: { type: String, required: false },
      addedOn: { type: Date, default: Date.now },
      updatedOn: { type: Date, default: Date.now },
    },
  ],
});

const Cart = mongoose.model("Cart", cartModel);
module.exports = Cart;
