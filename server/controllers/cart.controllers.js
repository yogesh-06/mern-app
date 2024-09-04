const Cart = require("../models/cart.model");

const addProductsToCart = async (req, res, next) => {
  const { productId, userId, quantity, title, image, price } = req.body;
  console.log(req.body);

  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      const itemIndex = cart.items.findIndex(
        (item) => item.productId === productId
      );

      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ productId, quantity, image, price, title });
      }
    } else {
      cart = new Cart({
        userId,
        items: [{ productId, quantity, image, price, title }],
      });
    }

    await cart.save();
    res.status(200).json({ success: true, message: "Cart updated", cart });
  } catch (error) {
    console.log(error);

    res.status(500).json({ success: false, message: "Server error", error });
  }
};

const removeProductsFromCart = async (req, res, next) => {
  const { userId, productId } = req.body;
  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      cart.items = cart.items.filter((item) => item.productId !== productId);

      await cart.save();
      res
        .status(200)
        .json({ success: true, message: "Item removed from cart", cart });
    } else {
      res.status(404).json({ success: false, message: "Cart not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

const getCartByUserId = async (req, res) => {
  const { id } = req.params;
  const userId = id;

  try {
    const cart = await Cart.findOne({ userId });

    if (cart) {
      res.status(200).json({ success: true, cart });
    } else {
      res.status(404).json({ success: false, message: "Cart not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

module.exports = { getCartByUserId, addProductsToCart, removeProductsFromCart };
