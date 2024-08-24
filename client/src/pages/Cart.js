import axios from "axios";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/cart/get-cart/${user._id}`)
      .then((res) => {
        console.log(res.data);
        setCartItems(res.data.cart.items);
      })
      .catch((error) => {
        console.log("error==", error);
      });
  }, []);

  const handleRemoveItem = (item) => {
    const data = {
      userId: user._id,
      productId: item.id,
      title: item.title,
      image: item.image,
      price: item.price,
    };
    console.log("userid==>", data);
    axios
      .delete(`http://localhost:8080/api/cart/remove-cart-item`, { data: data })
      .then((res) => {
        console.log("res===>", res.data);
        // setCartItems(res.data.cart.items);
      })
      .catch((error) => {
        console.log("error==", error.response);
      });

    const updatedItems = cartItems.filter((item) => item._id !== item.id);
    setCartItems(updatedItems);
  };

  const handleQuantityChange = (id, quantity) => {
    const updatedItems = cartItems.map((item) =>
      item._id === id ? { ...item, quantity: quantity } : item
    );
    setCartItems(updatedItems);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="row">
          <div className="col-md-8">
            {cartItems.map((item) => (
              <div className="card mb-3" key={item._id}>
                <div className="row g-0">
                  <div className="col-md-4 p-3">
                    <img
                      src={item.image}
                      className="img-fluid rounded-start"
                      alt={item.name}
                      style={{ height: "18vh", width: "18vh" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">Price: ₹{item.price}</p>
                      <div className="d-flex justify-content-between">
                        <div>
                          <label className="form-label me-2">Quantity:</label>
                          <input
                            type="number"
                            className="form-control d-inline-block"
                            value={item.quantity}
                            min="1"
                            onChange={(e) =>
                              handleQuantityChange(item._id, e.target.value)
                            }
                            style={{ width: "60px" }}
                          />
                        </div>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleRemoveItem(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Cart Summary</h5>
                <p className="card-text">Total Price: ₹{getTotalPrice()}</p>
                <button className="btn btn-primary w-100">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
